---
author: Unintelligent Nerd
date: '2020-04-23T07:00:00.000Z'
title: 'maToken'
description: 'AavegotchiのmaTokenのすべて'
contributors:
  - "unintelligent-nerd"
---

<div class="headerImageContainer">
<img class="headerImage" src="/matokens/matoken.png">
<p class="headerImageText">maToken！</p>
</div>

利子が発生するaToken（エートークン）を[Polygon（ポリゴン）](/glossary#polygon)上に移すとどうなるのか？ それはもちろん、maTokenに変わるのです！

maTokenを手に入れるには、いくつかの方法があります。 このページでは、その方法をご紹介します。

<div class="contentsBox">

**目次**

<ol>
<li><a href=#staking-matokens-into-aavegotchis>Aavegotchi達にmaTokenをステーキングする</a></li>
<li><a href=#problems-while-staking-spirit-force>スピリットフォースをステーキング中の注意点</a></li>
<li><a href=#learn-more>もっと詳しく</a></li>
</ol>

</div>

## Aavegotchi達にmaTokenをステーキングする

maTokenを手に入れたよ。 次は何？

フレンよ、よくできました。

次は、[GHST](/ghst)を使って[ポータル](/portals)を購入します。 ポータルはAavegotchi DApp（リンクは発売時に提供されます）またはOpensea（オープンシー）のような[セカンダリーマーケット](/marketplace)で購入することができます。 貴重なポータルを手に入れたら、いよいよ召喚を開始します。 ポータルを開くと、10個のゴッチ達が表示され、それぞれに必要なmaToken/担保がランダムに設定されています。 ここで、入手したmaTokenの出番です。 同じ種類の担保を持つゴッチに張り付け、あなたのフレンズに命を吹き込んでください。

ポータルオープンの詳細な説明は、[ポータル](/portals)ページをご覧ください。

## スピリットフォースをステーキング中の注意点

ユーザーがゴッチに担保をステークすることができない状況が2つあります：

* スマートコントラクトがあなたの ERC-20 トークンの使用を許可される前に、承認トランザクションを実行する必要があります。 ほとんどの場合、ユーザーは手動で許容限度を低く設定しすぎています。 この問題を解決するには、許容限度を増やします。
* ユーザーはAave上の担保を借入に使用しており、それをステーキングするとヘルスファクターが下がり、ポジションが清算される可能性があります。 この状況を改善するには、借りたポジションを減らすかクローズするか、必要な担保を追加してください。

## もっと詳しく

* Polygon（ポリゴン）でaTokenをmaTokenとして展開することに成功した[Nick Mudge（ニック・マッジ）氏](/team#nick-mudge)による[Twitterスレッド](https://twitter.com/mudgen/status/1352399348219445250)
* Nick Mudgeが[maTokenの技術的](https://aavegotchi.substack.com/p/aaves-interest-bearing-atokens-on)な面につい解説しています
