---
title: "Reduced Motion Hero Demo"
description: "suchの実績 | Reduced Motion Hero Demo"
tags: ["Demo", "React", "GSAP", "Accessibility"]
thumbnail: "/images/reduced-motion_thumb.jpg"
summary: "ReactとGSAPを使用して、reduced motionに対応したヒーローアニメーションのデモを制作しました。OS設定と画面上のトグル操作を共存させ、ユーザーの環境設定を優先しながら挙動を確認できる構成にしています。"
url: "https://reduced-motion-hero-demo.netlify.app/"
pubDate: "2026-05-08"
releaseYM:
  year: 2026
  month: 05
role: "Front-end / Interaction Design"
viewBtn: true
---

ReactとGSAPを使用して、reduced motionに対応したヒーローアニメーションのデモを制作しました。

OSの「視差効果を減らす」設定を考慮し、通常時は動きのあるアニメーション、reduced motion有効時は大きな移動を抑えた表示に切り替わるよう実装しています。  
また、OS設定と画面上のトグル操作を共存させ、ユーザーの環境設定を優先しながら挙動を確認できる構成にしました。

実装では、CSSで初期表示を担保したうえで、GSAPは装飾的なアニメーション制御に使用しています。  
これにより、JavaScriptの読み込み前後でも表示が破綻しにくく、アニメーションに依存しすぎない構成を意識しました。

reduced motion対応やGSAPの実装構成・状態管理については、<a href="https://zenn.dev/chaya0815/articles/4a8e21675a4a67" target="_blank" rel="noopener noreferrer">Zennの記事</a>にて紹介しています。

## GitHubリポジトリ

<a href="https://github.com/Saya-such/reduced-motion-hero-demo" target="_blank" rel="noopener noreferrer">
  https://github.com/Saya-such/reduced-motion-hero-demo
</a>

## 解説 (技術記事)

<a href="https://zenn.dev/chaya0815/articles/4a8e21675a4a67" target="_blank" rel="noopener noreferrer">
  Zenn | React × GSAPでreduced motionに対応する方法
</a>

## 使用技術

- Library: React
- Styling: SCSS
- Animation: GSAP
- Build Tool: Vite
- Deploy / Hosting: Netlify
