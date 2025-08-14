# ビルドステージ
FROM node:20-alpine AS builder

WORKDIR /app

# ビルド時の環境変数を設定
ARG VITE_SHARED_URL=http://shared:4173/assets/remoteEntry.js
ENV VITE_SHARED_URL=$VITE_SHARED_URL

# パッケージファイルをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm ci

# ソースコードをコピー
COPY . .

# ビルド実行
RUN npm run build

# 本番ステージ
FROM nginx:alpine

# Nginxの設定ファイルを作成
RUN echo 'server { \
    listen 3001; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
    \
    location /assets { \
        add_header Cache-Control "public, max-age=31536000, immutable"; \
    } \
}' > /etc/nginx/conf.d/default.conf

# ビルド成果物をコピー
COPY --from=builder /app/dist /usr/share/nginx/html

# ポート3001を公開
EXPOSE 3001

# Nginxを起動
CMD ["nginx", "-g", "daemon off;"]