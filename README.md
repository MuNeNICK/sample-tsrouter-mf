# TanStack Router + Module Federation 検証

## 技術構成

- **Module Federation**: `@originjs/vite-plugin-federation`による実行時モジュール共有
- **型定義の自動生成**: `@module-federation/native-federation-typescript`による型定義の自動配信
- **ルーティング**: TanStack Routerのファイルベースルーティング
- **各アプリケーションの独立デプロイ**: ビルド時の依存関係なし

## アーキテクチャ

```
┌─────────────────────────────────────────────────┐
│                    Shared                        │
│  (Header, Sidebar, Types, Utils)                │
│         http://localhost:4173                    │
└────────────────┬────────────────┬───────────────┘
                 │                │
    ┌────────────▼───────┐  ┌────▼───────────────┐
    │       App1         │  │       App2          │
    │   (Admin Panel)    │  │  (E-Commerce Admin) │
    │ http://localhost:3000│  │ http://localhost:3001│
    └────────────────────┘  └────────────────────┘
```

### モジュール構成

- **shared**: 共通コンポーネント、型定義、ユーティリティを提供
- **app1**: 一般的な管理画面（Dashboard、Profile、Analytics等）
- **app2**: ECサイト管理画面（Orders、Inventory、Customers等）

## セットアップ

### 前提条件

- Node.js 20.x以上
- npm 10.x以上

### インストール

```bash
# 各モジュールの依存関係をインストール
npm run install:all
```

### 開発サーバーの起動

```bash
# 全てのアプリケーションを一括起動
npm run dev
```

個別に起動する場合：

```bash
# 1. Sharedモジュールをビルド&起動
cd shared
npm run build
npm run preview

# 2. App1を起動（別ターミナル）
cd app1
npm run dev

# 3. App2を起動（別ターミナル）
cd app2
npm run dev
```

## Module Federation設定

### Sharedモジュール（プロバイダー）

```typescript
// shared/vite.config.ts
import federation from '@originjs/vite-plugin-federation'
import { NativeFederationTypeScriptRemote } from '@module-federation/native-federation-typescript/vite'

const federationConfig = {
  name: 'shared',
  filename: 'remoteEntry.js',
  exposes: {
    './Header': './src/export-header.ts',
    './Sidebar': './src/export-sidebar.ts',
    './types': './src/exports/types.ts',
    './theme': './src/exports/theme.ts',
  },
  shared: ['react', 'react-dom'],
}

// プラグイン設定
plugins: [
  federation(federationConfig),
  NativeFederationTypeScriptRemote({
    moduleFederationConfig: federationConfig,
  })
]
```

### ホストアプリケーション（コンシューマー）

```typescript
// app1/vite.config.ts
import federation from '@originjs/vite-plugin-federation'
import { NativeFederationTypeScriptHost } from '@module-federation/native-federation-typescript/vite'

const federationConfig = {
  name: 'app1',
  remotes: {
    shared: 'http://localhost:4173/assets/remoteEntry.js',
  },
  shared: ['react', 'react-dom'],
}

// プラグイン設定
plugins: [
  federation(federationConfig),
  NativeFederationTypeScriptHost({
    moduleFederationConfig: federationConfig,
  })
]
```

## 共有コンポーネントの使用

### 1. 共有コンポーネントのインポート

```typescript
// app1/src/routes/__root.tsx
import Header from 'shared/Header'
import { AppSidebar, SidebarProvider, SidebarInset } from 'shared/Sidebar'
import type { MenuItem } from 'shared/types'
import { ThemeProvider } from 'shared/theme'
```

### 2. メニュー項目の定義

```typescript
const menuItems: MenuItem[] = [
  {
    title: "Dashboard",
    icon: <LayoutDashboard className="h-4 w-4" />,
    href: "/dashboard",
  },
  // ... 他のメニュー項目
]
```

### 3. コンポーネントの使用

```typescript
<ThemeProvider>
  <SidebarProvider>
    <AppSidebar 
      onNavigate={handleNavigate} 
      menuItems={menuItems} 
      appName="App1 Admin" 
    />
    <SidebarInset>
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </SidebarInset>
  </SidebarProvider>
</ThemeProvider>
```

## テーマ機能

```typescript
import { ThemeProvider, useTheme } from 'shared/theme'

<ThemeProvider>
  {/* アプリケーションコンテンツ */}
</ThemeProvider>

// コンポーネント内でテーマを使用
const { theme, toggleTheme } = useTheme()
```

- LocalStorageにテーマ設定を保存
- HTML要素にlight/darkクラスを適用
- アプリケーション間で設定は独立

## 型の自動生成

### 動作の仕組み

1. 開発サーバー起動時に`@mf-types`ディレクトリが自動生成
2. sharedモジュールが型定義を`.zip`ファイルとして配信（`/@mf-types.zip`）
3. ホストアプリケーションが型定義をダウンロードして展開

### tsconfig.json設定

```json
{
  "include": ["**/*.ts", "**/*.tsx", "@mf-types"],
  "compilerOptions": {
    "paths": {
      "*": ["./@mf-types/*"]
    }
  }
}
```


## 型定義の共有

### Sharedモジュールでの型定義

```typescript
// shared/src/types/index.ts
export interface MenuItem {
  title: string
  icon: ReactNode
  href: string
}

export interface AppSidebarProps {
  onNavigate?: (href: string) => void
  menuItems?: MenuItem[]
  appName?: string
}
```

### エクスポート設定

```typescript
// shared/src/exports/types.ts
export * from '../types'
```

## 新しいアプリケーションの追加

### 1. アプリケーションの作成

```bash
# Vite + React + TypeScriptテンプレートを使用
npx create-tsrouter-app@latest app3 --template file-router --tailwind --add-ons shadcn
cd app3
npm install
```

### 2. 必要な依存関係の追加

```bash
npm install -D @originjs/vite-plugin-federation @module-federation/native-federation-typescript
```

### 3. vite.config.tsの設定

```typescript
import federation from '@originjs/vite-plugin-federation'
import { NativeFederationTypeScriptHost } from '@module-federation/native-federation-typescript/vite'

const federationConfig = {
  name: 'app3',
  remotes: {
    shared: 'http://localhost:4173/assets/remoteEntry.js',
  },
  shared: ['react', 'react-dom'],
}

export default defineConfig({
  plugins: [
    // 他のプラグイン...
    federation(federationConfig),
    NativeFederationTypeScriptHost({
      moduleFederationConfig: federationConfig,
    })
  ],
  server: {
    port: 3002, // 新しいポート番号
  },
})
```

### 4. tsconfig.jsonの設定

```typescript
// app3/tsconfig.json
{
  "include": ["**/*.ts", "**/*.tsx", "@mf-types"],
  "compilerOptions": {
    // 他の設定...
    "paths": {
      "@/*": ["./src/*"],
      "*": ["./@mf-types/*"]
    }
  }
}
```

### 5. ルートコンポーネントの設定

```typescript
// app3/src/routes/__root.tsx
import Header from 'shared/Header'
import { AppSidebar, SidebarProvider, SidebarInset } from 'shared/Sidebar'
import type { MenuItem } from 'shared/types'

// アプリケーション固有のメニュー項目を定義
const menuItems: MenuItem[] = [
  // ... メニュー項目
]
```

### 6. .gitignoreの設定

```bash
# app3/.gitignore に追加
@mf-types
```

### 7. package.jsonへの追加

```json
// ルートディレクトリのpackage.jsonのscriptsセクションに追加
{
  "scripts": {
    "install:app3": "cd app3 && npm install",
    "install:all": "npm run install:shared && npm run install:app1 && npm run install:app2 && npm run install:app3",
    "dev:app3": "sleep 8 && cd app3 && npm run dev",
    "dev": "npm run dev:shared:build & npm run dev:shared:preview & npm run dev:app1 & npm run dev:app2 & npm run dev:app3 & wait",
    "build:app3": "cd app3 && npm run build",
    "build": "npm run build:shared && npm run build:app1 && npm run build:app2 && npm run build:app3"
  }
}
```

## ベストプラクティス

### 独立性の維持
- 共有するのはUIコンポーネントと型定義のみ
- アプリケーション間の直接的な依存を避ける

### 開発フロー
```bash
# sharedモジュールの変更
cd shared && npm run build

# 各アプリケーションで動作確認
```

### 型の自動生成
- `@mf-types`ディレクトリは`.gitignore`に含める
- CI/CDでは型チェック前にビルドステップを実行

### プロダクション展開
- 各モジュールは独立してビルド・デプロイ
- 環境変数でリモートエントリーURLを管理

```typescript
// 環境変数を使用した設定例
remotes: {
  shared: import.meta.env.VITE_SHARED_URL || 'http://localhost:4173/assets/remoteEntry.js',
}
```

## トラブルシューティング

### Module Federationのエラー

1. **"Cannot find module 'shared/Header'"**
   - sharedモジュールが起動しているか確認
   - ビルドが完了しているか確認
   - リモートエントリーURLが正しいか確認

2. **型定義が見つからない**
   - sharedモジュールを再ビルド
   - TypeScriptサーバーを再起動
   - `@mf-types`ディレクトリを削除して開発サーバーを再起動：
     ```bash
     rm -rf app1/@mf-types app2/@mf-types
     npm run dev  # 各アプリケーションで実行
     ```

3. **CORS エラー**
   - sharedのvite.config.tsでCORS設定を確認

4. **型の自動生成が動作しない**
   - vite.config.tsにNativeFederationTypeScriptプラグインが設定されているか確認
   - tsconfig.jsonに`@mf-types`が含まれているか確認

### 開発サーバーの問題

- ポートが既に使用されている場合は、各アプリケーションのポート番号を変更
- プロセスが残っている場合は `pkill -f vite` で強制終了

## 参考資料

- [Module Federation Documentation](https://github.com/originjs/vite-plugin-federation)
- [TanStack Router Documentation](https://tanstack.com/router/latest)
- [Vite Documentation](https://vitejs.dev/)