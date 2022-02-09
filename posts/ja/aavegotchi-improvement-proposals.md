---
author: Coder Dan
date: '2020-04-23T07:00:00.000Z'
title: 'Aavegotchi Improvement Proposals (AGIPs)'
description: 'A list of Aavegotchi Improvement Proposals (AGIPs)'
contributors:
  - "unintelligent-nerd"
---

こんにちは〜フレンズ！ Aavegotchi Improvement Proposal(AGIPs) 改善提案に参加する事はステーブルマスターの責任です!    みんなの声を投票することはとても大切なことです。

コミュニティとしてどれぐらい進歩してきたのでしょうか。 過去の投票のアーカイブをご覧ください！

さあ！ 今までAGIPに投票した場合は、POAPバッジをsnapshot.org/#/aavegotchi.ethで入手してください！

<div class="contentsBox">

**内容**

<ol>
<li><a href=#tap-increase-for-scaling-sprint>スケールアップする為にボンディングカーブのタップを増やす</a></li>
<li><a href=#add-fees-to-bonding-curve>ボンディングカーブに手数料を加算</a></li>
<li><a href=#increase-daico-tap-for-ghst-purchases>GHST購入のDAICOタップを増やす</a></li>
<li><a href=#proposal-for-haunt-2>召喚第二(H2)の提案</a></li>
<li><a href=#give-unique-non-transferable-background-to-haunt-1-aavegotchis>召喚第一(H1) のゴッチに転送できないユニークなバックグラウンド</a></li>
<li><a href=#add-fee-on-baazaar-to-support-rarity-farming>マーケットに手数料を追加</a></li>
<li><a href=#earn-xp-for-successful-signal-proposals>合格したプロポーザルを作成するためのXPを獲得</a></li>
<li><a href=#voting-power-based-on-brs>BRS(レア度)に基づいて投票力</a></li>
<li><a href=#voting-power-based-on-wearables--maall-price>ウェアラブルのモール値段に基づいた投票力</a></li>
<li><a href=#partnership-between-aavegotchidao--pixelcraft--and-dinoswap>AavegotchiDAOやPixelcraftとDinoSwapの連携</a></li>
<li><a href=#liquidity-manager---frens-committee>流動性マネージャーとFRENS委員会</a></li>
<li><a href=#launch-haunt-2>召喚第二を起動</a></li>
<li><a href=#add-an-aging-mechanic-to-affect-aavegotchi-rarity-scores>エイジングメカニックを導入</a></li>
<li><a href=#earn-frens-with-ghst-matic-lp-tokens>GHST-MATIC LPトークンでFRENSを獲得</a></li>
<li><a href=#create-a-wearables-taask-force>ウェアラブルタスクフォースを作成</a></li>
<li><a href=#stake-100k-ghst-to-generate-minigame-rewards>ミニゲームリワードを生成するために100kGHSTをステーク</a></li>
<li><a href=#adding-voting-power-to-realm-parcels>区画に投票力を追加</a></li>
<li><a href=#gotchiverse-patch-v0-1>Gotchiverse Patch v0.1</a></li>
<li><a href=#providing-ghst-liquidity-on-synfutures>Providing GHST Liquidity on SynFutures</a></li>
<li><a href=#creating-the-dao-treasury-taask-force>Creating the DAO Treasury Taask Force</a></li>
<li><a href=#name-of-aavegotchi-marketplace>Name of Aavegotchi Marketplace</a></li>
<li><a href=#eligibility-of-ghst-usdc-lp-tokens-to-earn-frens>Eligibility of GHST-USDC LP tokens to earn FRENS</a></li>
<li><a href=#portals-purchased-in-one-transaction>Portals purchased in one transaction</a></li>
</ol>

</div>

### スケールアップする為にボンディングカーブのタップを増やす
**Aavegotchi改善提案1番**

**提案の概要:** GHSTボンディングカーブは1か月間有効です。 GHSTホルダーはDAICOのタップメカニズムを調整する事が出来ます。 AavegotchiDAO 1.0は、Aragonプラットフォーム上に構築されており、GHST保有者が月に1回投票して、コアチームへの資金の流れを調整できる簡単なDAICOとして機能します。 このタップは、現在750万DAI以上が確保されているGHSTボンディングカーブから直接提供出来ます。

Aavegotchiコミュニティの投票で、タップを月に5万DAI/月から10万DAI/月に増やすようにお願いします。 50万DAIは、達成されたのマイルストーン（コミュニティの成長、GHSTトークン、ゲーム開発）をカバーするのに十分ではなく、次のスプリントはさらに野心的です。 AavegotchiDAO 1.0のハードコードされた制約により、この提案は今月のDAIの増加が5万DAIに制限されているため、合計10万の予算を立てました。

今後の予算では、追加の5万DAIを4つの異なるカテゴリに展開します。
* 主要なゲーム開発者との条件を統合できるようにするための資金提供を行うゲームクリエイター。
* マーケティング、デザイン、ゲーム開発における追加の採用。
* Aavegotchiのプレゼンスを確実に拡大するためのマーケティングブースト。
* コミュニティで最も刺激を受けたプログラム（アーティストチームやAaprentice(見習い) チームなど）を開発するための報酬を提供します。

**投票期間：** 2020年10月15日〜19日

**結果:**

table_agip1

[Aragonへのリンク](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/vote/0/)

<hr />

### ボンディングカーブに手数料を加算
**Aavegotchi改善提案2番**

**提案の概要：** ボンディングカーブはGHSTの流動性の主な源です。 大規模な買い手と売り手は現在、手数料なしでやり取りできます。

Aavegotchiのマーケットメーカーは、注文を売買するための手数料を追加する機能を提供しています。

複数のコミュニティメンバーが、カーブでの売買に最大0.3％の手数料を追加することを提案しています。

ボンディングカーブの `updateFees` ファンクションを呼び出すことで可能ですが、そうすべきでしょうか? それは、AavegotchiDAOコミュニティ次第です。

獲得した手数料は、自動的にDAOトレジャリーアドレス0xffe6280ae4e864d9af836b562359fd828ece8020に送金され、AavegotchiDAOの資産と見なされます。

**投票期間：** 2020年1月18日〜21日

**結果:**

table_agip2

[Aragonへのリンク](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/vote/1/)

<hr />

### GHST購入のDAICOタップを増やす
**Aavegotchi改善提案3番**

**改善提案:**プレーヤーの報酬と流動性インセンティブは、取引量と経済活動で自立するためにAavegotchiエコシステムをブートストラップするために重要です。

GHSTトークンがAavegotchiエコシステムで使用されるたびに、33％が自動的にバーンアドレスに送信されます。 ほとんどの暗号通貨とは異なり、GHSTバーン（ボンディングカーブを除く）は、実際にはGHSTの合計値を下げません。これは、その値がボンディングカーブにDAIとして保存されるためです。

バーンが行うこと、ボンディングかーぶでDAIをトラップし、本質的に時間の経過とともに準備率を増加させ、GHSTの価格を安定させます。

バーンを相殺するために（最終的にGHSTをステーブルコインに変える可能性があります）、コミュニティに月額15万DAIにタップを増やすことをお勧めします。 これは、ボンディングカーブのリザーブのバランスを助けると、プレーヤーの報酬と流動性インセンティブに向けて追加の月額５万DAIを提供します。

**投票期間：** 2020年10月18日〜21日

**結果:**

table_agip3

[Aragonへのリンク](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/vote/2/)

<hr />

### 召喚第二(H2)の提案
**Aavegotchi改善提案4番**

**提案の概要:**10,000ポータルは、Aavegotchiの現在の需要レベルを満たすに十分ではありません。 したがって、参加したいプレイヤーがAavegotchiを所有できるようにするために、新しい召喚を展開する必要があるでしょうか。 この改善提案は、新しい召喚を作成しない1つのオプションを含んで、コミュニティメンバーによって提案された4つの異なるオプションを提供します。

改善提案の詳細は [こちら](https://aavegotchi.medium.com/vote-when-haunt-2-making-haunts-more-unique-d975cbda4772)

オプション1：新しい召喚なし、1ヶ月後で再度見直します。

オプション2：1万ポータル、それぞれ100 GHST、1txn当たり

Option 3: 25K portals, 100 GHST each, 5 per txn (w/ stricter ape tax)

Option 4: Pre-sale, in which each wallet can subscribe for 1 Portal in exchange for 100 GHST. When the pre-sale period closes, all Portals are minted and transferred to their owners.

**投票期間：** 2020年3月17日〜24日

**結果:**

table_agip4

**Vote Differential not met. No Haunt 2 for now!**

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmNqRry73rWXb9tdyHummihcK58ga83Ru15AJRF3beFJ35)

<hr />

### 召喚第一(H1) のゴッチに転送できないユニークなバックグラウンド
**Aavegotchi改善提案5番**

**Proposal Summary:** Many players are worried that Haunt 2 will be too similar to Haunt 1 and the newly-created [Haunts](/haunt) will devalue the “Genesis” Haunt. One of the suggestions is to give special backgrounds to each Haunt to make them easily identifiable. This proposal has seen excellent discussion and significant support on the associated Snapshot. Note that irrespective of the DAO’s decision on this issue, all Aavegotchis will be getting special non-transferable "Haunt" badges that identify their Haunt. This proposal focuses specifically on the idea of a non-transferable background that can be equipped in the Aavegotchi’s BG wearable slot.

改善提案の詳細は [こちら](https://aavegotchi.medium.com/vote-when-haunt-2-making-haunts-more-unique-d975cbda4772)

Option 1: Only Haunt 1 should get a special background

Option 2: Each Haunts should have it’s own unique background

Option 3: Neither, leave it as is

**投票期間：** 2020年3月17日〜24日

**結果:**

table_agip5

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmfBrnUmfsX57vXWchr1mUNkqMWNeF6edEqdQq11MCvMHJ)

<hr />

### マーケットに手数料を追加
**Aavegotchi改善提案6番**

**Proposal Summary:** With the announcement of SZN1 Rewards now official, we explore how to align the community's interests and rewards structures, as it pertains to Baazaar fees.

Currently, 2% is allocated to Pixelcraft and 1% to DAO treasury. While not exclusive of providing for RF rewards, the treasury funds are currently in no obligation to be allocated in any form of ratio towards the RF pool each season. The proposal aims to increase the Baazaar fees from 3% to 3.5%, with the additional 0.5% going directly to the Rarity Farming rewards pool.

Details on the AGIP can be found [here](https://aavegotchi.medium.com/core-proposal-agip6-add-0-5-fee-on-baazaar-to-support-rarity-farming-5bf923c7f528).

Option 1: Yes, increase fees from 3 to 3.5

Option 2: No, leave the fees as they are

**投票期間：** 2021年4月7日〜13日

**結果:**

table_agip6

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmPUueFJwpCz6rBiucnBYPLxTv2tetzxXWwCi2gSQFMJMW)

<hr />

### 合格したプロポーザルを作成するためのXPを獲得
**Aavegotchi改善提案7番**

**Proposal Summary:** We currently have a lot of Signal / Community Proposals on Snapshot and new posts on our forum everyday. So far none of those proposals were able to even get close to the quorum of 20%. The most popular one by @JG about adding additional fees for rarity farming only got around 2 million GHST in votes (~11%)-even though the team decided to take it as a Core Proposal. After being upgraded to Core we smashed right through the quorum in less than 24h.

I think there are two pretty obvious reasons for this. On the one hand, our Snapshot is a bit chaotic right now, with some Signal Proposals not following the template at all. On the other hand-and I think this is the more important one-voting on Core Proposal gets you 20 Experience (XP) for your Gotchi.

I propose adding a small Experience drop (10 XP) for people who voted on successful Signal Proposals, meaning ones that reach quorum and get upgraded to Core Proposals. Simply dropping XP for all Community Proposals could result in more low quality suggestions, which shouldn't be the goal of this proposal.

Even if 10 XP might not be much, it gives people incentives to actually look through the Signal Proposals and vote on quality proposals with a higher chance of reaching quorum. As a DAO, community involvement is extremely important and I believe this is a small, but decent, step in the right direction.

If this Proposal reaches quorum and passes, all Aavegotchis held by their owners at the end of the vote will receive 10 XP!

Details on the AGIP can be found [here](https://aavegotchi.medium.com/vote-agip7-earn-xp-for-successful-signal-proposals-d5eafdb93aae).

Option 1: Yes, successful SigProps give XP

Option 2: No, SigProps should not give XP

**投票期間：** 2020年5月12日〜18日

**結果:**

table_agip7

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmctiApzKZHoVsSpzWVfMVL1abRTUNXsoipupNGS52gEuZ)

<hr />

### BRS(レア度)に基づいて投票力
**Aavegotchi改善提案8番**

**Proposal Summary:** Add Voting Power for Aavegotchis held in a voter’s address, at a rate of 1 GHST per BRS (base rarity score, not including equipped wearables).

Details on the AGIP can be found [here](https://aavegotchi.medium.com/vote-agip8-and-agip9-give-voting-power-to-aavegotchis-and-wearables-9c113373a0a2).

Option 1: Yes, give Voting Power to Aavegotchi based on BRS

Option 2: No, Aavegotchis shouldn’t have Voting Power

**投票期間：** 2021年6月11日〜17日

**結果:**

table_agip8

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmZnzgvkEzHvwkYPGLFQLtVvvoMzBXPWhznux1udHzbUim)

<hr />

### ウェアラブルのモール値段に基づいた投票力
**Aavegotchi改善提案9番**

**Proposal Summary:** Add Voting Power for Wearables held by Aavegotchis and in the voting address.

Details on the AGIP can be found [here](https://aavegotchi.medium.com/vote-agip8-and-agip9-give-voting-power-to-aavegotchis-and-wearables-9c113373a0a2).

Option 1: Yes, give Voting Power to Wearables based on Maall Price

Option 2: No, Wearables shouldn’t have Voting Power

**投票期間：** 2021年6月11日〜17日

**結果:**

table_agip9

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/Qmat7jeAS1W3BBq7yDi2jkHjNoywmUEfrF2FdPiS9CcGHa)

<hr />

### AavegotchiDAOやPixelcraftとDinoSwapの連携
**Aavegotchi改善提案10番**

**Proposal Summary:** Some community members are worried about the waning liquidity of GHST on Quickswap and their gradually decreasing LP rewards. Rather than simply allocating more liquidity to the pool, we are considering partnering with a soon to launch liquidity aggregator called DinoSwap. The terms include a total of 200k USD worth of GHST tokens to be allocated to their incentivized “extinction pools”, the details of which are fleshed out below.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/ghst-liquidity-rewards-on-new-launch-pixelcraft-dao-collaboration/1804).

Option 1: Yes, let's partner with DinoSwap

Option 2: No, don't partner with Dinoswap

**投票期間：** 2021年6月13日〜20日

**結果:**

table_agip10

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmV3xdUskpTtd6JYyCgV7tjWeBGira2ZPFcdk2YDy3UPHE)

<hr />

### 流動性マネージャーとFRENS委員会
**Aavegotchi改善提案11番**

**Proposal Summary:**

*Problem*

To incentivize liquidity on QuickSwap, you can earn additional FRENS rewards for staking Liquidity Pool (LP) tokens on the Aavegotchi website. Depending on the risk of Impermanent Loss (IL) these numbers can vary, originally it was +35% for GHST-QUICK, +20% for GHST-ETH and +10% for GHST-USDC. Because the rates have to be manually adjusted and prices have moved quite a bit since this was introduced, the FRENS rewards are off by quite a lot; GHST-QUICK is at around +90%, while GHST-USDC earns -10%.

*Solution*

Quoted from [coderdan](/team#coder-dan): "There has been talk of setting up committees for managing certain parts of Aavegotchi, and I believe this could be an interesting candidate for such a committee. Right now we only have two [now three] pairs incentivized by FRENS, but this could change in the future.”

The “committee” could be a multisig of at least nine (maybe up to fifteen) members with strong reputation in the community and high Gotchi dependability counters. At its core, this Liquidity Committee would monitor and adjust FRENS rates to keep in check with the pre-determined rate, by performing contract calls to the GHST Staking contracts only available to a new “rateManager” role created for the committee."

For now the committee should just have one job - keeping the FRENS rates up-to-date. In the future this could be extended to partnerships, monitoring of FRENS inflation, etc.

*Candidates*

Two weeks ago we created a Discourse thread (linked above) for interested parties to apply as candidates. Since then 11 people have applied. All candidates have been members of the community for a while and put forward good reasons as to why they should be chosen. As this is still within the range of 9-15, the easiest way would be to form the committee with all applicants.

So now it's up to you, AavegotchiDAO. Should we take this step in further decentralizing Aavegotchi and put the FRENS rate into the hands of:

Angst, Jarrod, Kenymccornick, UnfitStone, Notorious_BTC, Doxy, Kokusho, Grip, Almond-Stew, Shanekoy and Moon

[Discourse Thread (Idea/Proposal)](https://dao.aavegotchi.com/t/committee-idea-liquidity-managers-for-managing-the-frens-s-of-liquidity-pairs/1905)

[Discourse Thread (Candidates)](https://dao.aavegotchi.com/t/frens-committee-applications/1944)

Option 1: Yes, create the FRENS Committee

Option 2: No, keep everything as it is

**投票期間：** 2021年8月17日〜25日

**結果:**

table_agip11

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmdLouPY9ipn2ezC2RR5Fjcz8auhX1uLajk9QS8nrctfsY)

<hr />

### 召喚第二を起動
**コア改善提案**

**Proposal Summary:** Currently Aavegotchis are limited by a maximum possible 10,000 because only that many Haunt 1 Portals exist. This makes acquiring a first Aavegotchi cost prohibitive. With a second Haunt of 15,000 more Portals, we aim to address this problem while respecting unique, collectible aspects of Haunt 1 Aavegotchis.

Our vision is for far wider adoption of playable NFTs, and the first step to achieving that means leaving the scarcity memes behind and focusing on being able to offer meaningfully unique experiences to more people.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/coreprop-launch-haunt-2/2034)

Option 1: Yes, launch Haunt 2

Option 2: No, do not launch Haunt 2 now

**投票期間：** 2021年7月19日〜26日

**結果:**

table_launchHaunt2

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmTuVnGnZSUC4uWRVQrd3HwmJATtvJVpjNikCkifChyJwY)

<hr />

### エイジングメカニックを導入
**Aavegotchi改善提案13番**

**Proposal Summary:**

*Problem*

As new haunts are released, whether or not they include a bug fix that impacts gotchi trait generation, a strong dilution of existing high BRS gotchis occurs. Due to the nature of rarity farming and its rewards, this dilution is exclusively felt by those who invested heavily into older haunts, and who may not have the desire to sell due to emotional attachment, the means to invest more, or the ability to “flip” their way (due to local tax laws) into higher BRS gotchis from the newer haunts. Furthermore, very significant statistical variance can occur in new haunts, making it near impossible to make long term financial decisions, as the variance can render previous haunt gotchis all but obsolete. This leaves far too much entirely up to “luck”.

*Solution*

The Aging Mechanic is a proposal, initially introduced by Tistou on discord, that is designed to address all of the above mentioned issues, as well as create an interesting new dynamic of Aavegotchis that can be built upon in the future (age limits for activities, wearables, new appearance qualities, etc). It provides a buffer of approximately 6 months during which older gotchis have a BRS boost over newly summoned gotchis. As newly summoned gotchis age, they quickly begin to catch up to their older counterparts.

In the spirit of using numbers occurring in nature, the formula is modeled after the Fibonacci numbers x 1 million, but replacing the first 0 with a 1 to better fit the use case. Specifically, the first 10 Fibonacci numbers (replacing the first 0) are 1, 1, 1, 2, 3, 5, 8, 13, 21, 34, the sum of which is 89. Following this formula would mean +1 BRS after 1 million blocks, then another +1 BRS after 2 million blocks, another +1 BRS after 3 million blocks, another +1 BRS after 5 million blocks, …, up to a final sum of +10 BRS after 89 million blocks (approx 6.5 years using average block time of 2.3 seconds — the average since May 1st).

This solution provides for a quicker boost in the first few epochs of age, and greatly flattens over time to avoid anything too OP and allow more recently summoned gotchis to eventually catch up to within a 1 BRS boost of their older and wiser brethren. It incentivizes opening and summoning portals as opposed to sitting on them, both boosting the in-game economy as well as the scarcity of those that are still chosen to remain closed. Most of all, it is a fair system that benefits no one haunt over any other, and simply rewards long term engagement, while counteracting the effects of sudden and aggressive dilution like we are currently witnessing.

*Modifications made to Solution*

* **The implementation will be slightly modified to use the available onchain data of birth block timestamp as opposed to block number,** with epoch times predetermined using the same fibonacci intervals proposed in the sigprop and the current average block time. This makes the implementation much simpler, allows for predictable timelines (since a block time denominator would be constant, as opposed to variable based on chain activity), as well as ensures the functionality of the mechanic should any potential cases of architecture or blockchain network changes occur in the future. The petting time intervals already function using real time, so a precedent for this exists.

* **The 10 BRS cap is removed.** The fibonacci intervals themselves act as a natural cap, as the time to reach further epochs approximates an exponential function. For example, it will take over 4 more years to get an additional BRS bonus (+11 total), then 6.5 years for another, then 10.5 years, etc.

* **The implementation would go live prior to the beginning of Rarity Farming Season 2.** One of the goals of aging is to provide a short term buffer to the effects of statistical variance once a new haunt is released. For Haunt 1’s to be able to experience any of this benefit at all, the implementation must go live as soon as possible, as by the middle of season 2 H2’s will already be mostly caught up to the H1 bonus, with only a 1–2 BRS difference.

Details on the AGIP can be found [here](https://aavegotchi.medium.com/agip13-should-aavegotchi-introduce-an-aging-boost-5ee12e8c9f0)

Option 1: Yes, implement aging incentives

Option 2: No, do not implement right now

**投票期間：** 2021年10月2日〜9日

**結果:**

table_agip13

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmcAQLdAyS9n7LWDu9qvRtdNqJa7FBStadrHq3xqjW9kCT)

<hr />

### GHST-MATIC LPトークンでFRENSを獲得
**Aavegotchi改善提案14番**

**Proposal Summary:** Polygon has been a huge reason behind the success of Aavegotchi. Super low transaction fees paid in MATIC have enabled the team to build a game where there is lots of activity happening on-chain such as petting, bid to earn auctions, Baazaar sales, and storage of the Aavegotchi game art.

As of early September, Sushiswap started offering 2x SUSHI rewards for farming the GHST-MATIC LP pair on Sushiswap.

The FRENS Taask Force recommends enabling a FRENS incentive to be paid for the GHST-MATIC LP pair on their AMM.

We recommend that the target rate of FRENS paid to the GHST-MATIC LP pair is greater than the target incentive for the GHST-ETH LP pair (120%) but lower than the target incentive for the GHST-QUICK pair (135%).

This is because the Impermanent Loss (IL) risk for GHST-MATIC is higher compared to GHST-ETH but lower compared to GHST-QUICK. We would recommend a target rate of 130% for the GHST-MATIC LP pair.

Currently, the majority of the liquidity for GHST resides on Quickswap.

参照: [https://frens-taaskforce.vercel.app/](https://frens-taaskforce.vercel.app/)

This offers a great opportunity to move some of the liquidity over to the widely adopted Sushiswap AMM and reduce our dependence on Quickswap.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/frens-incentive-for-matic-ghst-lp-pair-on-sushiswap/2336)

Option 1: Yes, give FRENS to GHST-MATIC

Option 2: No, don't give FRENS

**投票期間：** 2021年11月12日〜19日

**結果:**

table_agip14

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0x42914b268d255efe0eea943d052e5dc7eab0cbbcde9d3cb809f027e3ea1f611f)

<hr />

### ウェアラブルタスクフォースを作成
**Aavegotchi改善提案15番**

**提案概要:**

*Motivation*

Within the Aavegotchi ecosystem wearables play a vital role, whether it be boosting BRS for rarity farming, improving traits for minigames, utility in the upcoming metaverse, or just showing off. Due to the complexity of the different possible trait ranges of gotchis, and the variety of possible wearable stats, it is not an easy task to arrive at a balanced distribution of equippable items. Releasing new wearables without proper analysis can lead to duplication (and dilution) of existing items and further skew of practical applicable sets for gotchis with trait ranges in certain directions.

*Specification*

This proposal aims to introduce a Wearables Taask Force (WTF), the idea of which arose from discussions regarding the above concerns. Akin to the FRENS Taask Force, the goal of the WTF would be to assist Pixelcraft in the analysis of the current distribution of items within the ecosystem from a slot, rarity, and trait modifiers perspective, and in how this analysis can best be applied to future items. This Taask Force would NOT have the unilateral ability to determine what and how new items are released, but would function entirely in an advisory capacity.

*Nominees*

The nominees for the Taask Force include long term community members who have a wide range of applicable skills, including statistical analysis, programming ability, strong experience in baazaar activity, and prior DAO experience. This Taask Force would greatly benefit from as many voices and perspectives as possible, so all nominations are included. Establishing this Taask Force would be a major step forward in creating a more balanced ecosystem and helping the AavegotchiDAO mature.

**Full list of nominees:** Kuwlness, JG1 (Fantasma#1777), Bearded, Actaeon, Thunderfish, Letsgobankless, Kokusho, Ader1990.eth, Machete, Aimo217 (AL#4105), Notorious_BTC, MonsterRNG, Goobz, Diddlypoo

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/wearables-taask-force/2350)

Option 1: Yes, establish the WTF

Option 2: No, don't establish the WTF

**投票期間：** 2021年11月12日〜19日

**結果:**

table_agip15

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0xa1f06ffcdd5f5d51c5f82022e8a25ecc7672252f8a47d9ee484b9fe3b6cd5b3a)

<hr />

### ミニゲームリワードを生成するために100kGHSTをステーク
**Aavegotchi改善提案16番**

**Proposal Summary:** Some frens have expressed concern over the lack of rewards for participating in Minigame events. Since there currently exists no Aarcade Taask Force with a designated budget, Gotchinomics has come up with the idea of staking 100k GHST in Treasury funds to support future initiatives.

*問題*

Aavegotchi aims to be one of the top Play2Earn projects in the crypto gaming space, the launch of the Gotchiverse Realm being the cornerstone to achieving this long-term goal. However, there is room for improving the short-term possibilities through seasonal gaming events. The main problem is the lack of structure and funds.

*ソリューション*

Before creating a dedicated Aarcade DAO, the first step to enable play2earn rewards is to create a sustainable stream of funds. A simple and low-risk solution would be to stake a portion of the main DAO treasury, such as 100k GHST, to generate FRENS. Those could be then transformed into raffle tickets and given away to mini-game players through periodic events.

*潜在的なリスク*

Staking GHST will indirectly imply a dilution of FRENS/tickets. However, since they would be distributed via mini-game rewards, the impact should be minimal compared to the boost on engagement and appeal to new people.

*代替ソリューション*

Wait for the Aarcade DAO to launch and let the new committee decide how to designate funds. However, this alternative option would mean losing precious time to generate more attractive rewards.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/creation-of-an-aarcade-dao/2128)

Option 1: Yes, stake 100k GHST

Option 2: No, wait for Aarcade DAO

**投票期間：** 2021年12月10日〜17日

**結果:**

table_agip16

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0xd654255f22e694369686e9791ff663f38a9f586bd4126831fc9d8ce384208964)

<hr />

### 区画に投票力を追加
**Aavegotchi改善提案17番**

**提案概要:**

*問題*

With a new asset class added to the Aavegotchi family in the form of realm plots comes a new sink of GHST. This currently leaves those who have heavily invested into the new plots with much lesser voting power in the Aavegotchi DAO.

*ソリューション*

Since realm plots and the Gotchiverse are such an integral part of the Aavegotchi ecosystem, I believe it’s only right that realm owners get an amount of voting power that is proportional to the size of their realm plots. This ensures that their vote can be heard, which is of particular importance when future governance proposals will concern the Gotchiverse.

Since every plot has a set size in pixels which is also a scaling factor for the amount of alchemica within the plot, the suggestion brought forward is:

1 pixel = 1 GHST worth of voting power (64, 256, 2056) OR 1 pixel = 0.5 GHST worth of voting power (32, 128, 1028)

An alternative would be to give every plot flat voting power based on the auction floor, with a vote afterward allowing for fine-tuning of final voting power amounts while ensuring that all land owners will have a say.

This would give 100, 200, and 1300 GHST worth of voting power to humbles, reasonables, and spacious parcels, respectively.

*提案の編集*

An option for “Auction floor” has also been added. This brings the Vote Differential up to 20%, meaning that any option must have 20% higher than the next option to pass.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/voting-power-for-land-plots/2508)

Option 1: Voting power of 0.5 GHST/pixel

Option 2: Voting power of 1 GHST/pixel

Option 3: Voting power from auction floor

Option 4: No voting power for REALM

**投票期間：** 2021年12月10日〜17日

**結果:**

table_agip17

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0x28b630e088240ee4bb4e680b071767b98b962a4006c71e71f00c782b86adfbab)

<hr />

### Gotchiverse Patch v0.1
**Aavegotchi Improvement Proposal #18**

**Proposal Summary:**

*問題*

Although the Gotchiverse is not yet live, we have identified a few areas that we believe should be adjusted before the game is released, and would like to bring these items to the community’s attention for discussion and a decision on whether or not to enact.

To ensure no single proposed change can revert the entire batch, we originally created six separate snapshot SigProp Proposals. This CoreProp combines the successful SigProps into the first Gotchiverse Patch v0.1!

*ソリューション*

Patch 0.1a

As we were finalizing key details such as build costs and harvesting rates for the upcoming Whitepaper, we discovered that one of our key assumptions had undervalued the amount of Alchemica in each parcel relative to total supply. The patch will increase the amount of Alchemica under each parcel to match our initial Alchemica tokens’ supplies, allocations, and emissions rates.

The SigProp for Patch 0.1a passed with the following numbers:

Yes: 13.14M GHST

No: 41.85k GHST

Patch 0.1b

Although our original intention was to make boosts one-time only, it is clear that many in the community interpreted the GEO paper to mean that boosts would be replenished. This patch allows boosts to also replenish together with the parcel itself after each Great Battle.

However, unlike parcels, the replenish rate is a fixed amount that is the same per round. For example, a parcel with a “5” FUD boost receives 5 servings of FUD per boost round.

The SigProp for Patch 0.1b also passed pretty convincingly:

Yes: 10.36M GHST

No: 2.37M GHST

Patch 0.1c

Even with Patch 0.1b passed, boosts will still be undervalued compared to the value the market has assigned to them, relative to a similar parcel with no boosts. Patch 0.1c proposed increasing boosts by 5x to bring the value of a boost closer to what the market is currently valuing it at.

The SigProp for Patch 0.1c did not pass and WILL NOT BE INCLUDED in Patch v0.1:

Yes: 5.85M GHST

No: 8.04M GHST

Future SigProps may be created to address this issue separately.

Patch 0.1d

The Gotchiverse Litepaper mentions that Kinship will be exchanged for a serving of Alchemica, essentially “burning” kinship. We certainly want to maintain the idea of a “kinship boost” for channeling but after thinking more deeply, we now believe there is a better way to achieve this.

An “achievements” approach does not require depleting an Aavegotchi’s kinship. Instead, high kinship Aavegotchis will channel Alchemica at a slightly higher rate, depending on their achievement level.

The SigProp for Patch 0.1d also passed:

Yes: 12.64M GHST

No: 431.93k GHST

Patch 0.1e & 0.1f

Districts did not exist as a Citaadel concept when the Litepaper was first published. That said, we have always envisioned an area or areas for Pixelcraft to develop in-depth experiences that add value to the overall game. Likewise, one of our earliest ideas, (predating the Citaadel itself!) was to reserve a town square for real time DAO voting. The idea of having a gamified governance experience was one of the very earliest ideas seeding Aavegotchi’s need for its own virtual world.

Patch 0.1e & 0.1f proposed allocating 1000 parcels each to Pixelcraft and the AavegotchiDAO in D27/D30. Both Patches passed convincingly:

Yes: 11.94M GHST / 12.14M GHST

No: 615.78k GHST / 734.92k GHST

Conclusion

And that’s it for the first Gotchiverse Patch! Now it is up to you, the AavegotchiDAO, to decide if Patch v0.1 should be implemented or not.

Option 1: Yes, implement Patch v0.1

Option 2: No, do not implement Patch v0.1

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/gotchiverse-paatch-v0-1-thread/2791)

Option 1: Yes, implement Patch v0.1

Option 2: No, do not implement Patch v0.1

**Voting Period:** 5 - 12 January 2022

**結果:**

table_agip18

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x396844d504394f7f335f070d443c33455300ee21d90db6c4b089760a3e0469bf)

<hr />

### Providing GHST Liquidity on SynFutures
**Aavegotchi Improvement Proposal #19**

**Proposal Summary:**

Since Aavegotchi has gathered a lot of liquidity on Spot DEXes, it is high time for Aavegotchi to create and boost its Futures market. Derivatives markets make up the majority of global trading activity and allow users to leverage their investments. Adding GHST liquidity on SynFutures would allow people to take on leverage longs (or shorts) on the future of Aavegotchi. But why SynFutures?

Great investors and team background SynFutures is backed by Polychain, Pantera, Dragonfly, Framework, Standard Crypto, Woo, and more. The team’s background is a great combination of traditional finance and DeFi. SynFutures is the only project of its kind which can support the listing of any assets by anyone in a permissionless manner (in less than 30s).

Security Backed by solid experience from the TradFi financial engineering and DeFi protocol safety, SynFutures has many risk management features (e.g. anti-flashloan attack, EMA smoothing method, etc.) and has gone through external code audits.

Easy to manage and start SynFutures supports a single token model to add liquidity which means the Aavegotchi Treasury would only have to deposit GHST instead of offering two tokens with the risk of impermanent loss. We are asking for 200k worth of GHST tokens to kickstart the pool. The liquidity could be withdrawn anytime.

Growth Potential Trading volume and users are growing fast on SynFutures. For the past 3 months since the SynFutures Alpha launched, we reached 47k users of and $1bn+ in trading volume. All this happened without a native SynFutures token, which could attract even more users.

Volume analysis Quickswap vs. SynFutures: Total LPs: 150k / 40K Total traders: 100k / 20k Daily trading volume: $100M / $29M

SynFutures trading volume makes up ~1/3rd of QuickSwap, and the amount of traders is 1/5th as big as on QuickSwap, however, the trading volume for different pairs is more concentrated. SynFutures has 108 trading pairs while QuickSwap has more than 22k pairs. For example, the daily trading volume of MATIC-USDC on SynFutures closes in on around $9M, while Quickswap reaches $14M.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/provide-ghst-as-liquidity-on-the-derivatives-dex-synfutures/2664)

Option 1: Yes, add $200k in GHST

Option 2: No, do not add $200k in GHST

**Voting Period:** 2 - 9 February 2022

**結果:**

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x560e97ce27e9c99470a0a609e36d4c4cd20e948eae92691ea2ba2afb984e7e41)

<hr />

### Creating the DAO Treasury Taask Force
**Aavegotchi Improvement Proposal #20**

**Proposal Summary:**

We propose the creation of the DAO Treasury Taask Force (DTF). This committee will initially be composed of 8 members with reassessment of membership by the DAO within 6 months.

As of 12/07/2021, the DAO Treasury (https://aavegotchi.com/treasury) boasts nearly ~$11,408,400 worth of DAI and GHST. In its initial form, the committee will form proposals for consideration by the DAO which will subsequently be voted on and, if passed, enacted.

Proposed Mission Statement

The Aavegotchi DAO Treasury Taask Force is a dynamic committee assigned with making DAO treasury management proposals to the community and DAO for consideration. The initial mission and goals of the committee will be: 1) Grow and optimize the DAO treasury with an emphasis on safety, security and transparency; 2) Partner with Pixelcraft to assist in developing and identifying tools and infrastructure for ongoing DAO Treasury management; and 3) foster and encourage growth of the overall Aavegotchi community by increasing awareness, actively promoting adoption, and maintaining current user engagement.

Initial Funding

After lengthy discussions with the task force, the community, and with coderdan, the DTF would like to request an initial 50,000 GHST budget. The 50,000 GHST budget would be transferred from the DAO Treasury to the 8 multi-signature Gnosis Safe. This budget will greatly expand the flexibility of the DAO in incentivizing and rewarding engaged community members, developers, creatives, and overall contributors. This budget will never be used to reward members of the DTF. The DTF’s core main initiative will be to form a proposal for overall use of the DAO Treasury by investing some of the $10 million DAI/GHST in yield bearing opportunities. With effective deployment of the DAO Treasury, even modest returns would more than pay for the DTF budget request. The DTF will ensure comprehensive accounting and provide community facing documentation to ensure transparency. Some potential uses for the budget include the following:

* Reward community engagement and aarcade play
* Reward game developers and designers
* Reward community application developers
* Reward and acknowledge community art contributions
* Reward, acknowledge and grow content creators and general marketing efforts
* Expand Aavegotchi and GHST’s opportunities for decentralized financial applications

The DTF is developing a structured plan and multiple potential pilot projects to best utilize these funds. We will work to develop tools to allow maximum transparency into the budget use. Expenses within this 50,000 GHST budget would not require a DAO approval in order to maximize nimble use of the funds. Any further budget requests beyond the initial 50,000 GHST would require a DAO vote.

The initial 8 members of the DTF

* BowtiedNerd
* Mori
* letsgobankless
* Addison
* Deucehearts
* BackfireCapital
* Swappi
* Dr Wagmi

We appreciate the Aavegotchi community’s support and look forward to our first proposal.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/establish-the-dao-treasury-taask-force/2460)

Option 1: Yes, with 50k GHST budget

Option 2: Yes, without 50k GHST budget

Option 3: No, do not create the DTF

**Voting Period:** 2 - 9 February 2022

**結果:**

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x17f3eec096b26e87b3441f7cad53108f6933fd32ac67417de6ef7c94970502e4)

<hr />

### Name of Aavegotchi Marketplace
**Snapshot Voting**

**Proposal Summary:** What should the Aavegotchi NFT Marketplace be called?

Aavegotchi is launching its own NFT marketplace on Polygon in tandem with the game!

What should we call the official Aavegotchi Marketplace?

Choice A: Aavegotchi Baazaar

Choice B: Aavegotchi Maarket

Choice C: Neither

The quorum for this vote is set to 500,000 GHST. If quorum is not reached, Pixelcraft will draw straws.

If "Neither" wins...you guys better start coming up with some good alternatives!

**Voting Period:** 8 - 11 February 2021

**結果:**

table_marketplaceName

[Link to vote on Snapshot](https://snapshot.page/#/aavegotchi.eth/proposal/QmRiRaQuwLuNr88yxvX61vtKM56NrY3KaMk4bk6w7g47fy)

<hr />

### Eligibility of GHST-USDC LP tokens to earn FRENS

**Snapshot Voting**

**Proposal Summary:** Should GHST-USDC LP token be eligible to earn FRENS?

Our liquidity migration program has been a huge success, with over 8M GHST migrated to Polygon already. However, as many community members have noted, liquidity for the GHST-USDC pair is still not deep enough to support trading large amounts of USDC for GHST on Quickswap.

We believe one way to remedy this is by adding GHST-USDC as a pair eligible for FRENS on [https://aavegotchi.com/stake-polygon](https://aavegotchi.com/stake-polygon). Just like GHST-QUICK has a receipt token stkGHST-QUICK, staked GHST-USDC can also emit a stkGHST-USDC token, which may be eligible for rewards on Quickswap, if their team deems it necessary.

Since this decision directly affects gameplay, we believe it is a ripe candidate for our first Snapshot vote on Polygon.

We are setting a 500,000 GHST quorum for this vote to be enacted.

The GHST-USDC LP token will earn FRENS at the same rate as just staking GHST, since impermanent loss is minimal and fees are significant.

**Voting Period:** 8 - 11 February 2021

**結果:**

table_ghstUsdcLp

[Link to vote on Snapshot](https://snapshot.page/#/aavegotchi.eth/proposal/QmUpXPA5JF4ed9GUy5hNUTA7rT7VQjL7QXUTSxbtLQ1RqA)

<hr />

### Portals purchased in one transaction

**Snapshot Voting**

**Proposal Summary:** How many Portals can be purchased in one transaction?

Discussion period has ended for this topic, and now it's time to vote! The most popular options were: 1, 5, and 10 Portals per transaction.

Our fren [@coderdannn](/team#coder-dan) also threw a spicy idea into the mix: an "Ape Tax" whereby higher numbers of Portals could be bought in a single transaction, but at a higher price. The Portals would be tiered as so:

* 0-5: 100 GHST each

* 6-15: 200 GHST each

* 16-25: 300 GHST each

So this leaves us with four options: 1, 5, 10, and 25 (w/ ape tax).

Let your $GHST token speak for you, and vote!

Voting period: 72 hrs Minimum quorum: 10% of GHST on Matic (~1.1M GHST)

AavegotchiDAO discussion topic 👇

[https://dao.aavegotchi.com/t/how-many-portals-should-be-bought-in-one-txn/17](https://dao.aavegotchi.com/t/how-many-portals-should-be-bought-in-one-txn/17)

**Voting Period:** 23 - 26 February 2021

**結果:**

table_portalsPurchased

[Link to vote on Snapshot](https://snapshot.page/#/aavegotchi.eth/proposal/QmUhKcn5YjKAPeGA1SfKQkNfw3P3hGRPgSGnTJGsfzw4Xi)