---
author: Unintelligent Nerd
date: '2020-04-23T07:00:00.000Z'
title: 'Bonding Curve'
description: 'The Aavegotchi Bonding Curve'
image: "curve/bonding-curve.png"
contributors:
  - "chinyh"
---


<div class="headerImageContainer">
<img class="headerImage" src="/curve/bonding-curve.png">
<p class="headerImageText">聯合曲線 Bonding Curve</p>
</div>

代幣聯合曲線 Token Bonding Curve (TBC) 是一條由數學公式來定義價格和代幣供應之間關係的曲線。

在典型的TBC中，價格會隨著代幣的供應量的增加而增加，隨著供應量的減少而降低。

<div class="contentsBox">

**Contents**

<ol>
<li><a href=#mechanics>Mechanics</a></li>
<li><a href=#aavegotchi-bonding-curve>Aavegotchi 聯合曲線</a></li>
<li><a href=#aavegotchi-daico>Aavegotchi DAICO</a></li>
<li><a href=#learn-more>更多</a></li>
</ol>

</div>

## Mechanics
通過 TBC 購買代幣時，之後的購買者將會需要為支付稍高的價格，為早期的投資者帶來潛在利潤。隨著更多人了解這個項目，並且繼續購買，代幣的價格就會沿著聯合曲線逐漸增加。早期投資者購買曲線綁定的代幣，然後在未來再賣回代幣，就能因此獲得利潤。

聯合曲線具有各式各樣的類型，而 Aavegotchi 團隊採用了 Bancor 的公式：

<img src = "/curve/reserve-ratio.png" alt = "bonding curve" width = "750" />

ReserveRatio 表示代幣的總價值（總供應量×單價）與 ReserveTokenbalance 儲備代幣餘額之間的比率。 Bancor 的公式使代幣的總價值（也就是市值）與 ReserveTokenBalance 儲備代幣餘額隨買賣而波動，來讓他們的比例保持不變。

由於每次代幣的購買或出售都會觸發儲備代幣和代幣的增發或減發，因此代幣相對於其儲備代幣的價格將不斷重新計算，以維持它們之間的固定比率。

如果您想看到它的實際效果，可以看看 coderdan 做的\[here\] (https://observablehq.com/@cinnabarhorse/aavegotchi-bonding-curve)。

這條曲線是永久的!

## Aavegotchi 聯合曲線
Aavegotchi 的聯合曲線是通過 [Aragon Fundraising]（https://fundraising.aragon.black/）支持的聯合曲線智能合約創建的，於2020年9月14日創建。在預售了 500,000 美元的 GHST 後，聯合曲線便立即發佈。聯合曲線的代幣數量不受限制，也沒有時間限制，初始價錢為每顆 0.2 Dai。連接重量為33％。

你需要完成 KYC 才能從聯合曲線購買代幣，合乎法很重要，我們並不希望這個項目被政府監管單位阻饒。

如果你由於國籍而無法完成 KYC ，不需要擔心！ **您仍然可以與 Aavegotchi metaverse 的所有其他部分進行交互。**你只需從 Uniswap 之類的 DEX 或 OKex 之類的 CEX 購買 $GHST。

## Aavegotchi DAICO
DAICO 是一種新的募資方法，目的是將去中心化自治組織（DAO）的功能與首次代幣發行（ICO）的功能結合，來創建一種更有效的代幣銷售募資結構。通過 DAICO 這種模型，投資者可以在籌款結束後控制所投資的資金，也可以影響開發者如何獲得資金以及獲得的頻率。此外，投資者還可以投票來廢除該項目，並退還資金給投資者。

Aavegotchi 通過在 Aragon 上建造的 DAICO 發佈了聯合曲線。

[AavegotchiDAO]（https://aavegotchi.com/curve）的第一階段與 $GHST 發行版接續發布。 $GHST 的持有者有權利投票決定增加或維持 tap 值，tap 值可以決定多少資金會由代幣聯合曲線（TBC）的儲備金轉移到 Pixelcraft 來以支持開發。將 Aavegotchi DAICO 的 tap 值從每月 50,000 DAI 增加到每月 100,000 DAI 的提案獲得了99％的批准。

## 更多
* [Bonding Curves Explained](https://yos.io/2018/11/10/bonding-curves/)

* [Bonding Curves](https://defiprime.com/bonding-curve-explained)

* [DAICO](https://cointelegraph.com/explained/what-is-a-daico-explained)