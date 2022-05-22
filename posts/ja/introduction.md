---
author: Coder Dan
date: '2020-04-23T07:00:00.000Z'
title: 'Aavegotchi'
description: 'Aavegotchiウィキの紹介'
image: "aavegotchi.png"
contributors:
  - "cinnabarhorse"
  - "unintelligent-nerd"
---

<div class="headerImageContainer">
<img class="headerImage" src="/aavegotchi.png" alt="aavegotchi" />
<p class="headerImageText">Aavegotchi</p>
</div>

**Aavegotchi**は、シンガポールのPixelcraft Studiosが開発したDeFi対応のクリプト収集ゲームで、プレイヤーは[Non-fungible tokens（NFTs）](/glossary#non-fungible-token)アバターに[利子を生むトークン](/spirit-force)をステークし、Aavegotchi[メタバース](/gotchiverse)と対話することができます。 [Decentralized Finance（DeFi）](/glossary#defi-101)とNFTsを組み合わせたユニークなものです。

Aavegotchiは、[**ERC-721**](/glossary#erc-721)標準に支えられたイーサリアム・ブロックチェーン上に生息するピクセル化されたゴーストです。 その価値は、ベース[特性](/traits)、ステークした担保/トークンの量、装備した[ウェアラブル](/wearables)などの複数の要素を介して計算されるレアリティレベルによって決まります。

Aavegotchiをレベルアップさせるために、プレイヤーは[ミニゲーム](/minigames)、ガバナンス、ミートアップなどの様々な活動に参加することができます。 また、Aavegotchiは、ゲーム内のウェアラブルを装備することで、レアリティレベル（レア度）を上げることができます。

レアなAavegotchiは2次[バザー](/baazaar)の価値が高いだけでなく、[レアリティ・ファーミング](/rarity-farming)というミニゲームでより良いパフォーマンスを発揮し、レアなAavegotchiにGHSTトークンの報酬が与えられます。

Aavegotchiは[AavegotchiDAO](/dao)によって管理され、[GHSTトークン](/ghst)の配布によって得られたすべての資金を管理しています。

<div class="contentsBox">

**目次**

<ol>
<li><a href=#about-aavegotchis>Aavegotchiについて</a></li>
<li><a href=#aavegotchi-value>Aavegotchiの価値</a></li>
<li><a href=#the-aavegotchi-universe>Aavegotchiの世界</a></li>
</ol>

</div>

## Aavegotchiについて
Aavegotchiは、CryptoKitties、Axie Infinity、Cryptovoxelsなどの人気ブロックチェーンゲームで使用されているERC-721標準に支えられたイーサリアムブロックチェーン上で生きる希少な暗号収集物です。 Aavegotchiは、Aavegotchiの世界における全体的な価値と希少性を決定する3つの属性：**コラテラルステーク（collateral stake）、特性（traits）、ウェアラブル（wearables）**を持っています。

*  **担保権**：各 Aavegotchi ERC721 NFT は、Aave に裏付けられた ERC20 担保、つまり「aToken」を保持するエスクロー契約アドレスを管理します。 [aToken](/spirit-force) は Aave の LendingPool を通じて収益を生み出し、ウォレットに保持される aToken の量を増加させます。 したがって、Aavegotchiのエスクローアドレスに保持されるaTokenの量は、時間の経過とともに増加します。


*  **特性：**Aavegotchiは複数の特徴を持ち、レアリティ、ミニゲームでのパフォーマンス、装備できるウェアラブルに影響します。 誕生時にランダムに生成されるものもあれば、ユーザーとAavegotchiの相互作用によって左右されるものもあります。 **[特徴](/traits)を参照してください。**

    * **ランダム特性：**出生時に ChainLink VRF 乱数生成関数を用いて、すべての Aavegotchi にいくつかのランダムな特性値が割り当てられます。 特性値はベル曲線上に分布し、各特性にはその希少性によってコモン（Common）、アンコモン（Uncommon）、レア（Rare）、またはミスィカル（Mythical）の値が割り当てられます。

    *  **キンシップ：**「親密度」はランダムではなく、誕生時に固定値（50）で始まり、同じ飼い主との付き合いの長さや、飼い主の交流の度合いなど、様々な要因で増減します。

    *  **経験値：**AavegotchiDAOでの投票やミニゲームに参加することで経験値が増え、レベルアップします。 Aavegotchiは3レベルごとに1[スピリットポイント](/glossary#spirit-point)を受け取り、特定の特性の値の増減に使うことができます。

* **ウェアラブル** aToken エスクローの管理に加えて、Aavegotchi は [ERC998 Composables 標準](/glossary#erc-998)を拡張し、Aavegotchi エコシステムではウェアラブルとして知られているチャイルド NFT を管理できます。 すべてのウェアラブルをすべての Aavegotchi が装備できるわけではありません。 ウェアラブルの中には、特定のコラテラルでステーキングされたAavegotchi、特定のレベルのAavegotchi、特定の特性を持つAavegotchiだけが装備できるものがあります。 ウェアラブルの中には、Aavegotchiの特定の特性を増加または減少できるものがあります。 例えば、剣を装備するとAavegotchiの攻撃性が少し上がり、ボブ・マーレーのシャツを装備すると元気度が下がることがあります。

コラテラルステーク、特性、ウェアラブル、およびキンシップの関係は、オニオンダイアグラム（下図）で最もよく表現されています。 各レイヤーは前のレイヤーの上に築かれ、その総和がAavegotchiそのものなのです!

<img class = "bodyImage" src = "/introduction/aavegotchi-onion-diagram.png" alt = "Aavegotchiオニオン図" />

## Aavegotchiの価値
Aavegotchi の評価は、その本質的な価値と希少価値の両方から得られます。

* **本源的価値** 本源的価値とは、Aavegotchiのステークされたコラテラル（賭けられた担保）の建値（たてね）のことです。 Aavegotchiが10 aDAIでステークされている場合、本質的価値は10 aDAIと、レンディングプールから発生した余分なaDAIを加えたものになります。 当初は、Aaveプラットフォームに掲載されている[ERC20](/glossary#erc-20)トークン（aTokens）のみがコラテラル（担保）として利用可能です。 しかし、AavegotchiDAOがローンチされると、コミュニティはどの新しいコラテラルを許可するか投票できるようになる予定です。

* **レアリティ値** レアリティ値（またはレア度）は、各Aavegotchiの特徴や装備しているウェアラブルのレアリティをAavegotchiの世界の中で計算することで決定されます。 他の NFT ゲームとは異なり、Aavegotchi のレアリティは固定値ではありません。 Aavegotchi がレベルアップし、さまざまなウェアラブルを装備すると、レア度は時間の経過とともに変化していきます。 したがって、ある週にはレアなAavegotchiが、Aavegotchiワールド内の特性やウェアラブルの全体的な分布に応じて、一般的になることもありますし、その逆も起きます。 これは「レアリティ・ファーミング」と呼ばれる新しい概念で、[このページ](/rarity-farming)で説明されています。

## Aavegotchiの世界
Aavegotchiの世界には、Aavegotchiを動かすためのすべての要素が含まれています：
* [ポータル](/portals)
* [GHSTユーティリティトークン](/ghst)
* [AavegotchiDAO](/dao)
* [Aavegotchi レルム（Realm）](/gotchiverse)