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

When a token is purchased via a TBC, each subsequent buyer will have to pay a slightly higher price for each token, generating a potential profit for the earliest investors. As more people find out about the project and the buying continues, the value of each token gradually increases along the bonding curve. Early investors who find promising projects early, buy the curve-bonded token, and then sell their token back can earn a profit in the future.
通過 TBC 購買代幣時，之後的購買者將會需要為每個代幣支付稍高的價格，從而為最早的投資者產生潛在的利潤。隨著更多人了解這個項目，並且繼續購買，代幣的價值就會沿著聯合曲線逐漸增加。找到有前途的項目早期投資者，購買曲線綁定的代幣，然後再賣回代幣，就能在未來獲得利潤。

聯合曲線具有各式各樣的類型，而 Aavegotchi 團隊採用了 Bancor 的公式：

<img src = "/curve/reserve-ratio.png" alt = "bonding curve" width = "750" />

The Reserve Ratio represents a fixed ratio between the Continuous Token’s total value (total supply × unit price) and the value of its Reserve Token balance. This ratio will be held constant by the Bancor Formula as both the Reserve Token balance and the Continuous Token’s total value (a.k.a. ‘market cap’) fluctuate with buys and sells.
ReserveRatio 表示連續代幣的總價值（總供應量×單價）與其 ReserveTokenbalance 儲備代幣餘額的值之間的比率。 Bancor 的公式將使他的比例保持不變，因為 ReserveTokenBalance 儲備代幣餘額和連續代幣的總價值（也就是市值）隨買賣而波動。

Since each purchase or sale of a Continuous Token triggers an increase or decrease of Reserve Tokens and Continuous Tokens, the price of the Continuous Token with respect to its Reserve Tokens will continuously recalculate to maintain the configured reserve ratio between them.
由於每次連續代幣的購買或出售都會觸發儲備代幣和連續代幣的增加或減少，因此連續代幣相對於其儲備代幣的價格將不斷重新計算，以維持它們之間的已配置儲備比率。

如果您想看到它的實際效果，可以看看 coderdan 做的\[here\] (https://observablehq.com/@cinnabarhorse/aavegotchi-bonding-curve)。

TEH CURVE IS FOREVER!

## Aavegotchi 聯合曲線
The Aavegotchi Bonding Curve was created on 14 September 2020 via a bonding curve smart contract powered by [Aragon Fundraising](https://fundraising.aragon.black/). After the conclusion of a presale for 500,000 $GHST, the bonding curve was immediately opened. The bonding curve is unlimited in size, has no time limit, and offers an opening price of 0.2 Dai per $GHST. It has a connecting weight of 33%.
Aavegotchi 的聯合曲線是通過 [Aragon Fundraising]（https://fundraising.aragon.black/）支持的聯合曲線智能合約創建的，於2020年9月14日創建。在預售了 500,000 美元的GHST後，聯合曲線立即發佈。聯合曲線的大小不受限制，也沒有時間限制，初始價錢為每顆 0.2 Dai。連接重量為33％。

You will have to complete KYC in order to purchase straight from the curve. Compliance is important my dudes - we live in a society, and we also don't want the project to get rugged by the government.

If you are unable to perform KYC because of your citizenship, don't worry! **You will still be able to interact with every other part of the Aavegotchi metaverse.** You simply have to purchase your $GHST off a DEX like Uniswap or a CEX like OKex instead.

## Aavegotchi DAICO
DAICO 是一種新的募資方法，目的是將去中心化自治組織（DAO）的功能與首次代幣發行（ICO）的功能結合，來創建一種更有效的代幣銷售募資結構。通過 DAICO 這種模型，投資者可以在籌款結束後控制所投資的資金，也可以影響開發者如何獲得資金以及獲得的頻率。此外，投資者還可以投票來廢除該項目，並退還資金給投資者。

Aavegotchi 通過在 Aragon 上建造的 DAICO 發佈了聯合曲線。

[AavegotchiDAO]（https://aavegotchi.com/curve）的第一階段與 $GHST 發行版接續發布。 $GHST 的持有者有權利投票決定增加或維持 tap 值，tap 值決定多少資金會由代幣聯合曲線（TBC）的儲備金轉移到 Pixelcraft 來以支持開發。將 Aavegotchi DAICO 的 tap 值從每月 50,000 DAI 增加到每月 100,000 DAI 的提案獲得了99％的批准。

## 更多
* Read more at [Bonding Curves Explained](https://yos.io/2018/11/10/bonding-curves/)

* Article on [Bonding Curves](https://defiprime.com/bonding-curve-explained) by DeFi Prime.

* Article on [DAICO](https://cointelegraph.com/explained/what-is-a-daico-explained) by the Coin Telegraph.