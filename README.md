# TanStack Router + Module Federation マイクロフロントエンド

このプロジェクトは、TanStack RouterとModule Federationを組み合わせて、真のマイクロフロントエンドアーキテクチャを実現するテンプレートです。

## 📋 概要

Module Federationを使用することで、複数の独立したReactアプリケーションが実行時に共通のコンポーネントやユーティリティを共有できます。各アプリケーションは独立して開発・デプロイ可能でありながら、一貫したUI/UXを提供します。

### 主な特徴

- **実行時の動的モジュール共有**: ビルド時の依存関係なしに、実行時にコンポーネントを共有
- **型安全性**: TypeScriptの型定義もModule Federation経由で共有
- **独立したデプロイメント**: 各アプリケーションは独立してデプロイ可能
- **TanStack Router統合**: 型安全なルーティングとコード分割

## 🏗️ アーキテクチャ

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

## 🚀 セットアップ

### 前提条件

- Node.js 20.x以上
- npm 10.x以上

### インストール

```bash
# 各モジュールの依存関係をインストール
cd shared && npm install && cd ..
cd app1 && npm install && cd ..
cd app2 && npm install && cd ..
```

### 開発サーバーの起動

```bash
# 全てのアプリケーションを一括起動
./start.sh
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

## ⚙️ Module Federation設定

### Sharedモジュール（プロバイダー）

```typescript
// shared/vite.config.ts
federation({
  name: 'shared',
  filename: 'remoteEntry.js',
  exposes: {
    './Header': './src/export-header.ts',
    './Sidebar': './src/export-sidebar.ts',
    './types': './src/exports/types.ts',
    './theme': './src/exports/theme.ts',
  },
  shared: ['react', 'react-dom'],
})
```

### ホストアプリケーション（コンシューマー）

```typescript
// app1/vite.config.ts
federation({
  name: 'app1',
  remotes: {
    shared: 'http://localhost:4173/assets/remoteEntry.js',
  },
  shared: ['react', 'react-dom'],
})
```

## 🧩 共有コンポーネントの使用

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

## 🎨 テーマ機能

共有されたHeaderコンポーネントには、ライト/ダークモードを切り替えるテーマ機能が含まれています。

### テーマの使用

```typescript
import { ThemeProvider, useTheme } from 'shared/theme'

// アプリケーションのルートでThemeProviderでラップ
<ThemeProvider>
  {/* アプリケーションコンテンツ */}
</ThemeProvider>

// コンポーネント内でテーマを使用
const { theme, toggleTheme } = useTheme()
```

### 特徴

- LocalStorageにテーマ設定を保存
- 自動的にHTML要素にクラスを適用（light/dark）
- 各アプリケーション間でテーマ設定は独立

## 📝 型定義の共有

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

## 🆕 新しいアプリケーションの追加

### 1. アプリケーションの作成

```bash
# Vite + React + TypeScriptテンプレートを使用
npx create-tsrouter-app@latest app3 --template file-router --tailwind --add-ons shadcn
cd app3
npm install
```

### 2. 必要な依存関係の追加

```bash
npm install -D @originjs/vite-plugin-federation
```

### 3. vite.config.tsの設定

```typescript
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    // 他のプラグイン...
    federation({
      name: 'app3',
      remotes: {
        shared: 'http://localhost:4173/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    })
  ],
  server: {
    port: 3002, // 新しいポート番号
  },
})
```

### 4. ルートコンポーネントの設定

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

### 5. start.shへの追加

```bash
# start.shに新しいアプリケーションを追加
echo "Starting app3 project in dev mode..."
cd app3 && npm run dev &
APP3_PID=$!

# trap行も更新
trap "kill $SHARED_PID $PREVIEW_PID $APP1_PID $APP2_PID $APP3_PID 2>/dev/null; exit" INT
```

## 💡 ベストプラクティス

### 1. 独立性の維持

- 各アプリケーションは独自のビジネスロジックを持つ
- 共有するのはUIコンポーネントと型定義のみ
- アプリケーション間の直接的な依存を避ける

### 2. バージョン管理

- sharedモジュールの変更は慎重に行う
- 破壊的変更を避け、後方互換性を保つ
- 必要に応じてバージョニング戦略を検討

### 3. 開発フロー

```bash
# 1. sharedモジュールの変更
cd shared
# 変更を加える
npm run build

# 2. 各アプリケーションで動作確認
# ブラウザをリロードして変更を反映
```

### 4. プロダクション展開

- 各モジュールは独立してビルド・デプロイ
- sharedモジュールは安定したURLでホスト
- 環境変数でリモートエントリーURLを管理

```typescript
// 環境変数を使用した設定例
remotes: {
  shared: import.meta.env.VITE_SHARED_URL || 'http://localhost:4173/assets/remoteEntry.js',
}
```

## 🔧 トラブルシューティング

### Module Federationのエラー

1. **"Cannot find module 'shared/Header'"**
   - sharedモジュールが起動しているか確認
   - ビルドが完了しているか確認
   - リモートエントリーURLが正しいか確認

2. **型定義が見つからない**
   - sharedモジュールを再ビルド
   - TypeScriptサーバーを再起動

3. **CORS エラー**
   - sharedのvite.config.tsでCORS設定を確認

### 開発サーバーの問題

- ポートが既に使用されている場合は、各アプリケーションのポート番号を変更
- プロセスが残っている場合は `pkill -f vite` で強制終了

## 📚 参考資料

- [Module Federation Documentation](https://github.com/originjs/vite-plugin-federation)
- [TanStack Router Documentation](https://tanstack.com/router/latest)
- [Vite Documentation](https://vitejs.dev/)

## 🤝 貢献

プルリクエストを歓迎します。大きな変更の場合は、まずissueを作成して変更内容について議論してください。