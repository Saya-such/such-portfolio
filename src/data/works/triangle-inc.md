---
title: "△△ inc. (Demo)"
description: "suchの実績 | 架空広告代理店△△ inc.のコーポレートサイトのトップページを想定した Astro × GSAPを使用したデモページです。"
tags: ["Web Site"]
thumbnail: "/images/such-demo1-thumb.webp"
summary: "架空広告代理店△△ inc.のコーポレートサイトのトップページを想定したデモページを作成しました。デザインから実装まで自作し、アニメーション表現やアクセシビリティへの配慮を取り入れています。"
url: "https://saya-such.github.io/such-demo1/"
pubDate: "2026-01-27"
releaseYM:
  year: 2025
  month: 7
role: "Web Design / Front-end"
viewBtn: true
---

架空広告代理店△△ inc.のコーポレートサイトのトップページを想定したデモページを作成しました。  
such(齊藤沙耶)のフロントエンド実装力をアピールするためのデモページです。  
デザインから実装まで自作し、**アニメーション表現**や**アクセシビリティへの配慮**を取り入れています。

## GitHubリポジトリ

<a href="https://github.com/Saya-such/such-demo1" target="_blank" rel="noopener noreferrer">
  https://github.com/Saya-such/such-demo1
</a>

## 使用技術

- Framework: Astro v5.10.1
- Language: TypeScript
- Styling: Tailwind CSS v4.1.11 + @tailwindcss/vite
- Animation: GSAP / Swiper / Lenis
- Build / Deploy: GitHub Actions + GitHub Pages

## ポイント

- 画像や動画を使わずに**できるだけコードのみでアニメーションを表現**しました。(ローディング/リロード時や各セクションタイトル等のテキストグラデーション/Heroセクションのスライダー切り替え/キャッチコピーのアニメーションなど)
- ループ処理やメニューの開閉等、不要なメモリの消費を避けるために**GSAPのTimelineやSwiperインスタンスの適切な制御**を行なっています。
- アクセシビリティを考慮し、alt属性/aria属性を適切に記述。(メニュー開閉時にaria-expandedの切り替えも行なっています。)
- 構造化マークアップに対応。
- dataに格納してある画像や記事データを更新することで、簡単に使用しているデータの変更が可能。
- 関数型プログラミングを意識し、できるだけコンポーネント内で処理を完結させるような設計。
- **CLSを意識**し、アニメーションによって高さが変わらないよう気をつけて設計しました。
- モバイル環境でのUIバー表示に対応し、スクロール時の高さ変化やリサイズによるレイアウト崩れを防止しています。
- 関数名の命名規則を決めてある程度統一し、JSDocも丁寧に記載しました。
