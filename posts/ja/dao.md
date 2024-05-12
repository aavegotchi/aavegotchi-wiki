---
author: Coder Dan
date: '2020-04-23T07:00:00.000Z'
title: 'AavegotchiDAO'
description: 'AavegotchiDAOのすべて'
image: "icons/dao.svg"
contributors:
  - "vanilladelphia"
  - "cinnabarhorse"
  - "hackingmoneyph"
  - "unintelligent-nerd"
---

<div class="headerImageContainer">
<img class="headerImage" src="/dao/dao.png">
<p class="headerImageText">AavegotchiDAOの紋章</p>
</div>

[DAO](glossary#dao)とは、分散型ガバナンスの一種で、トークン保有者が組織の意思決定方法を形成するために投票することを認めるものです。

Aavegotchiは、CompoundやSynthetixといった成功したDeFiプロトコルの足跡をたどり、「段階的な分散化」のプロセスを踏みます。創設チームのPixelcraft StudiosがDAOが管理するトークン配布イベント（DAICO）を企画することから始まり、AavegotchiDAOの支援のもと、ゲームのすべての仕組み（ゲームメカニック）、スマートコントラクト、資金調達をも含む、しかし常に現行の規制環境に従いながら、Aavegotchiの管理を行うまでに至るプロセスで最高潮に達することになります。 これは3つのフェーズで達成される予定です。

<div class="contentsBox">

**目次**

<ol>
<li><a href=#genesis>ジェネシス</a></li>
<li><a href=#cocoon>コクーン</a></li>
<li><a href=#metamorphosis>メタモルフォーシス</a></li>
<li><a href=#oasis>オアシス</a></li>
<li><a href=#participating-in-governance>ガバナンスに参加する</a></li>
<li><a href=#type-of-proposals>提案の種類</a></li>
<li><a href=#vote-differentials>得票差</a></li>
<li><a href=#creating-signal-proposals>シグナルプロポーザルの作成</a></li>
<li><a href=#voting>議決権行使（投票）</a></li>
<li><a href=#aavegotchi-improvement-proposals--agips->Aavegotchi Improvement Proposals (AGIPs＝Aavegotchi改善案）</a></li>
<li><a href=#treasury>宝庫</a></li>
</ol>

</div>

## ジェネシス

[DAICO](https://wiki.aavegotchi.com/curve/#aavegotchi-daico)を*参照*。

AavegotchiDAOの最初のイテレーションは、GHSTトークン配布イベントと同時に開始されました。 GHSTトークン保有者は、開発をサポートするためにピクセルクラフト・スタジオ（Pixelcraft Studios）（Aavegotchiの開発チーム）に[トークン・ボンディング・カーブ（TBC）](/curve)準備金のタップメカニズムによって分配される資金の増加/維持について投票する権限を持っていました。 このタップを毎月5万DAIから10万DAIに引き上げるという最初の提案は、2020年10月18日に99％の賛成を得て可決されました。 AavegotchiDAOメタモルフォーシスに移行する時期が来たら、トークン保有者は移行を行うかどうかの投票も行う予定です。

トークン保有者は、このAavegotchiDAOのイテレーションに積極的に参加しても、GHSTで報酬を受け取ることはありません。

ジェネシスの特徴は以下の通りです：

* スマートコントラクトの呼び出しなし
* コントラクトのアップグレードなし
* GHSTトークンに基づくガバナンス
* プラットフォーム：アラゴン（Aragon）
* 報酬：なし
* レイヤー：イーサリアムメインネット

## コクーン

AavegotchiDAOのV1.5。 [ジェネシス](/dao#genesis)と[メタモルフォーシス](/dao#metamorphosis)の中間的な位置づけ。 コクーンステージでは、ゲームメカニクスに影響を与えることが優先される。

その特徴は以下の通り：

* Pixelcraftによって呼び出されるコントラクトコール
* コントラクトのアップグレードなし
* GHSTトークンに基づくガバナンス
* プラットフォーム：スナップショット（Snapshot）/ディスコース（Discourse）
* 報酬：コア投票による[XP](/traits#experience)
* レイヤー：ポリゴン（Polygon）

コクーンステージでは、2種類の投票を行うことができます：(1) シグナル提案（Signal Proposal）、(2) コア提案（Core Proposal）の2種類です。

A Signal Proposal can be posted by anyone to the Community tab on [Snapshot](https://snapshot.org/#/aavegotchi.eth). この投票には拘束力がありませんが、定足数に達すると自動的に拘束力のあるコア提案に格上げされます。 Before you come up with a Signal Proposal, it is mandatory to discuss it with the community on the [DAO channel](https://discord.com/channels/732491344970383370/1031189663152623747) on Discord. その理由は、さらにアイデアを練って、シグナル提案を進めるに値するサポートがあるかどうかを発見するためです。 [「シグナル提案の作成」](/dao#creating-signal-proposals)にあるテンプレートにしたがってください。

シグナル提案は、提案作成時にPolygonで投票できる流通GHSTの20%に達する定足数で前者が可決されると、コア提案に格上げされることになります。

コア提案は、定足数に達した、または達しそうになったシグナル提案をもとに、Pixelcraftが選択肢を提示する提案です。 これらの投票には拘束力があり、参加者へのXP報酬の対象となります。

シグナル提案がコア提案に昇格した場合、シグナル提案に記載したAavegotchiに150[XP](/traits#experience)*が付与されます。

*COCOON期間中は増減する可能性があります。

## メタモルフォーシス

メタモルフォーシスはAavegotchiDAOの第二世代で、Aavegotchiの総供給量、新しいコラテラルの追加、機能の決定、コミュニティが作成した新しいウェアラブルの追加など、簡単なゲームメカニックを管理する役割を担っています。 AavegotchiDAOオアシスへの移行時期が来たら、再びAavegotchiDAOの投票で移行を実行します。

このフェーズでAavegotchiDAOが実行できるアクションの全リストは、Aavegotchiスマートコントラクトの説明書の[ガバナンス](https://docs.aavegotchi.com/overview/governance)のセクションで入手できます。

トークン保有者は、AavegotchiDAOのこのイテレーションに積極的に参加することで、GHSTの形で報酬を受け取ることができます。

その特徴は以下の通り：

* スマートコントラクトの呼び出しを実行できる
* 特定のメカニックのアップグレードが可能
* Aavegotchi + GHST ガバナンス
* プラットフォーム：カスタムdappフロントエンド
* 報酬：[XP](/traits#experience)＋投票用バッジ
* レイヤー：ポリゴン（Polygon）

## オアシス

AavegotchiDAOオアシスはAavegotchiDAOの進化の最終形態でありますが、DAOが統治するゲームの実現の始まりに過ぎません。 Aavegotchiゲームの仕組み、REALMの仕組み、エコシステムの支出、さらにはスマートコントラクトのアップグレードに関するすべての決定は、AavegotchiDAOの投票によって決定されることになります。

トークン保有者は、このAavegotchiDAOのイテレーションに積極的に参加することで、GHSTで報酬を受け取ることができます。

その特徴は以下の通り：

* スマートコントラクトの呼び出しを実行できる
* 特定のメカニックのアップグレードが可能
* Aavegotchi + GHST ガバナンス
* プラットフォーム：Aavegotchi Realm
* 報酬：[XP](/traits#experience)＋投票用バッジ
* レイヤー：ポリゴン（Polygon）

## ガバナンスに参加する
気合い入ってます！ で、AavegotchiDAOに参加するにはどうしたらいいんだろう？ フレンよ、オレ達に任せな！

* You can participate in the discussions in the [DAO channel](https://discord.com/channels/732491344970383370/1031189663152623747) on Discord. 誰でも大歓迎だよ！

* AavegotchiDAOの投票に参加する(可能な場合!)

* [Aavegotchi Docs](https://docs.aavegotchi.com/overview/governance)には、投票された変更を実装するためにDAOメンバーが呼び出したり使ったりできるリストが詳細に記載されています。 例えば、asUSDが[コラテラル（担保）タイプ](/posts/atokens)として投票されたとしましょう。 AavegotchiDAOは `addCollateralTypes()` 関数を使用し、関数内で asUSD を指定することで変更を実装することができます。

## 提案の種類

*コクーン*ステージには2種類の企画案があります：

* **シグナル提案（Signal Proposal）** - 誰でも投稿可能な提案。 この投票には拘束力がありませんが、定足数に達すると自動的に拘束力のあるコア提案に格上げされます。 Share your proposal idea and discuss it with other community members in the [DAO channel](https://discord.com/channels/732491344970383370/1031189663152623747) on Discord. Once you have finalized the details of your proposal, create an official thread for it on the DAO channel using the framework outlined in the [Creating Signal Proposals](/dao#creating-signal-proposals) section below. After which, create a vote for it on [Snapshot](https://snapshot.org/#/aavegotchi.eth).

* **コア提案（Core Proposal）** - シグナル提案が20%以上の定足数（ポリゴン上で投票可能な流通GHSTの量）を達成した場合、Pixelcraftはこれらの提案をコア提案として再提案します。 これらの投票には拘束力があり、参加者への[XP](/traits#experience)報酬の対象となります。

<img class = "bodyImage" src = "/dao/proposal-type.png" alt = "AavegotchiDAO 提案の種類" />

**コア提案**は、さらに3つのタイプに分類されます：

*注意事項：定足数の割合は、Polygonで投票できるGHSTの流通量から計算され、総供給量からではありません！*

* **スモール（Smol）投票：**定数5%。 これらの投票は、既存のAavegotchiの全体的なメタや価値に大きな影響を与えない小さな決定を目的としています（例：装飾品の機能の導入、マーケティング戦略の提案など）。

* **ミディアム（Medium）投票：**定数10％。 この投票は、メタに何らかの顕著な影響を与える可能性のある決定を対象としています（例：新しいゲームアイテムの導入、あるアイテムやイベントへのXP割り当て、レアリティスコアに影響しないAavegotchiの変更）。

* **ギャラクシー（Galaxy）投票：**定数20％。 メタやAavegotchiのエコシステムに大きな影響を与えるような重大な決定を行うための投票です（例：新しいハウント、レアリティスコアに影響するAavegotchiの何かを変更する場合など）。

## 得票差

得票差とは、上位2つの選択肢の差であり、妥当なコンセンサスが得られたかどうかを示すものである。

以下は、3つの選択肢を持つコア提案の例です：

* 選択肢Aの得票率は25%
* 選択肢Bの得票率は35%
* 選択肢Cの得票率は40%

必要な票差は5％（選択肢C [40%] と選択肢B [35%] の差）である。

これではコンセンサスが得られないため、本提案は実施されません。

一般的に、選択肢の数が多い投票ほど、真のコンセンサスに達したことを示すために必要な票差は大きくなります。

コクーンでは、まず次のような票差パラメータを設定し、必要に応じて軌道修正します：

2つの選択肢 - 10% VD

3つの選択肢 - 15% VD

4つの選択肢 - 20% VD

## シグナルプロポーザルの作成

#GotchiGangが投票するためのシグナル提案を作成するには、以下の形式を守ってください：

* 作者＋GotchiID
* Link to the [DAO channel](https://discord.com/channels/732491344970383370/1031189663152623747) thread on Discord (Proposals without significant discussion will be automatically removed from Snapshot)
* 概要（根拠、スケジュール、目標、重要業績評価指標を含む） 既存の提案のコピペ提案は削除されますが、類似しているが異なるバリエーションの提案は並存が許可されます。
* 効果
* 最終ゴールと利益ハイライト
* 潜在的なリスクや意図しない結果をちゃんと認識する
* 代替案（プランB、プランCなど）がある場合
* 提案の終了時期は、Snapshot Communityの掲示板にアクティブな提案のみが表示されるように、提案開始時期から30日以内としてください。

詳細は、この[Medium記事](https://aavegotchi.medium.com/scaling-aavegotchidao-c7e589de0333)をご覧ください。

## 議決権行使（投票）

スナップショットはイーサリアム上の投票DAppです。 Votes made on Snapshot do not require any gas and are not on-chain. Aavegotchi's Snapshot page can be found [here](https://snapshot.org/#/aavegotchi.eth).

スナップショットで投票を行うには、以下の手順で行います：

1). 開いてる提案にアクセスする。

2). ウォレットを接続する。

<img class = "bodyImage" src = "/dao/snapshot1.jpg" alt = "スナップショット投票 イーサリアム" />
<img class = "bodyImage" src = "/dao/snapshot2.jpg" alt = "スナップショット投票 イーサリアム" />

3). 投票オプションを選択し、"Vote"（投票する）をクリックする。 選択を確認するためのポップアップが表示されます。

<img class = "bodyImage" src = "/dao/snapshot3.jpg" alt = "スナップショット投票 イーサリアム" />
<img class = "bodyImage" src = "/dao/snapshot4.jpg" alt = "スナップショット投票 イーサリアム" />

4). あなたのメタマスク（Metamask）がポップアップで表示されます。 トランザクションをサインをして完了です！

<img class = "bodyImage" src = "/dao/snapshot5.jpg" alt = "Snapshot Votingで取引の署名" />

## Aavegotchi Improvement Proposals (AGIPs)（Aavegotchi改善案）

過去の投票一覧は、[Aavegotchi改善案のページ](/aavegotchi-improvement-proposals)をご覧ください。

AGIPsに投票して、[POAPバッジ](/poap)をゲットしよう！

## 宝庫

As responsible stewards, members of AavegotchiDAO will play a role in determining how these funds are to be allocated.

The AavegotchiDAO treasury is located [here](https://aavegotchi.com/treasury).

MikeyJay and Eitri proposed the creation of a DAO Treasury Dashboard in [AGIP-76](/aavegotchi-improvement-proposals#create-a-dao-treasury-dashboard). The completed dashboard can be found [here](https://dune.com/eitri/aavegotchi-dao-treasury)
