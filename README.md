# such portfolio

This is my personal portfolio website.

## 🌐 URL

- GitHub Pages (for testing):  
  [テストサイト](https://saya-such.github.io/such-portfolio/)
- Production:  
  [such](https://such-web.com)

## 📌 Overview

This portfolio showcases my work as a frontend developer, focusing on:

- Clean and maintainable UI implementation
- Scroll-based animations and interactions
- Accessibility-conscious markup and behavior
- Component-based structure with reusability in mind

## 🛠 Tech Stack

- Framework: [Astro](https://astro.build/) v5.14.6
- Language: TypeScript
- Styling: Tailwind CSS v4.1.14 + [@tailwindcss/vite](https://tailwindcss.com/docs/installation/using-vite)
- Animation: GSAP / Lenis

## ✨ Features

- Scroll-triggered animations
- Accessible navigation with proper ARIA attributes
- Responsive layout for desktop and mobile
- Component-based design for scalability

## 🚀 Development Flow

```bash
# リポジトリをクローン
git clone https://github.com/Saya-such/such-portfolio.git

# ディレクトリへ移動
cd such-portfolio

# パッケージをインストール
npm install

# 開発サーバーを起動
npm run dev
```

## 📦 ビルド / デプロイ

```bash
# ビルド
npm run build

# プレビュー
npm run preview
```

- GitHub Pages is used for device testing and previews
- After validation, the built files are deployed manually to the production domain

## 📂 Project Structure (Overview)

```bash
public/
└── images/ # 画像データ
src/
├── components/ # UIコンポーネント
├── data/ # 記事やメニュー項目などのデータ管理
├── layout/ # レイアウト管理
├── libs/ # 共通の関数
├── pages/ # 各ページ
├── styles/ # グローバルスタイル
└── types/ # 型定義
```

## 🧪 Testing

- Desktop browsers (Chrome / Safari / Edge / Firefox)
- Mobile devices (iOS / Android)
- Keyboard navigation and basic accessibility checks

## 📝 Notes

- Refactoring and optimizations are intentionally planned after release

## 📬 Contact

- Website: https://such-web.com
- GitHub: https://github.com/Saya-such
