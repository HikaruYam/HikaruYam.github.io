# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

GitHub Pages で公開している個人ポートフォリオサイト（HikaruYam.github.io）。ビルドシステム・依存パッケージなしの純粋な静的サイト。

## Development

ビルド不要。ブラウザで `index.html` を直接開くか、ローカルサーバーを起動して確認する：

```bash
python3 -m http.server 8000
```

デプロイは `main` ブランチへの push で GitHub Pages に自動反映される。

## Architecture

5ファイル構成：

- `index.html` — ページ骨格。`#products-list` と `#links-list` の2つの空コンテナを持つ
- `script.js` — `products.json` を fetch してカード要素を動的生成。Google Favicon API でアイコンを取得
- `style.css` — 最大幅800pxの中央配置レイアウト。600px以下でレスポンシブ対応
- `products.json` — コンテンツの唯一のデータソース。`products` と `links` の2配列を持つ

## Content Updates

プロダクト・リンクの追加・編集は `products.json` のみ変更する：

```json
{
  "products": [
    {
      "name": "表示名",
      "description": "説明文",
      "url": "https://...",
      "tags": ["タグ1", "タグ2"]   // 任意
    }
  ],
  "links": [
    {
      "name": "表示名",
      "description": "説明文",
      "url": "https://..."
    }
  ]
}
```

`tags` フィールドは `products` のみサポート（`links` にはない）。
