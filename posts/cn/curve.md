---
author: Unintelligent Nerd
date: '2020-04-23T07:00:00.000Z'
title: '联合曲线'
description: 'The Aavegotchi Bonding Curve'
image: "curve/bonding-curve.png"
contributors:
  - "unintelligent-nerd"
---


<div class="headerImageContainer">
<img class="headerImage" src="/curve/bonding-curve.png">
<p class="headerImageText">联合曲线</p>
</div>

联合曲线是一个数学曲线，它定义了价格与令牌供应之间的关系。

在典型的技术性贸易壁垒中，价格随着象征性供应的增加而上涨，随着供应的减少而下降。 由于Aavegotchi 联合曲线是通过  [Aragon](/glossary#aragon) [分散自治的首次代币发行(DAICO)](/glossary#daico)本文也讨论了DAICO。

<div class="contentsBox">

**内容**

<ol>
<li><a href=#mechanics>关键词组成</a></li>
<li><a href=#aavegotchi-bonding-curve>Aavegotchi 绑定曲线</a></li>
<li><a href=#aavegotchi-daico>Aavegotchi DAICO</a></li>
<li><a href=#aavegotchi-token-supply-dynamics>Aavegotchi 令牌供应动态</a></li>
<li><a href=#arbitrage>仲裁权</a></li>
<li><a href=#learn-more>了解更多</a></li>
</ol>

</div>

## 关键词组成

### 按需铸造/燃烧

捆绑曲线使用定价算法作为自动化市场制造商，提供一个总是可用的流动资金来源。 用户可以通过将令牌放入绑定曲线储备池来与关联曲线交互。 当他们这样做时，联合曲线会根据定价算法为用户提供相应的令牌。 新创建的令牌可以有特定的用途，甚至可以在用户之间交易。 但总是可以通过绑定曲线储备池中代币的关联曲线进行兑换。

当一个人购买了代币时，每个随后的买方必须为每个代币支付略高的价格， 为最早的投资者创造潜在利润。 随着更多的人了解该项目并继续购买，每个代币的价值沿着联合曲线逐渐增加。 早期发现有前途的项目的投资者，购买联合曲线代币，然后再出售代币，就能够在未来赚取利润。

### 公式

捆绑曲线以不同的形状和大小出现。 关于Aavegotchi项目，小组采用了Bancor公式：

<img style = "border: 1px solid; margin-bottom: 15px" src = "/curve/reserve-ratio.png" alt = "token bonding curve" width = "750" />

### 公式说明

**储备令牌** 是指用户在关联曲线中的标记。

**储备令牌** 是指收藏储备令牌时从绑定曲线收到的令牌。

就Aavegotchi而言，储备和连续代币分别是DAI和GHST。

**连接重量** (也称为储备比率) 表示持续代币总值(总供应量×单位价格) 与储备代币余额之间的固定比率(介于 0 到 100%之间)。  这个CW是银行公式的常数，既是储备代币的余额，也是连续代币的总值 (a.k.a)。 “市场上限”随着购买和销售而波动。

每次购买或销售持续代币会导致储备代币(DAI) 的增加或减少。 其储备代币的连续代币价格必须不断重新计算，以保持已配置的连接重量。


连接重量决定连续令牌的价格需要调整多大程度才能保持每次交易。 换言之，其价格敏感性。

储备代币余额和连续代币之间储备比率较高将降低价格敏感度。 意味着每个买卖都会对持续代币的价格变动产生低于比例的影响。 储备代币余额和连续代币之间储备比率较高将降低价格敏感度。 意味着每个买卖都会对持续代币的价格变动产生低于比例的影响。

**Avegotchi的储备比率是33%！** 这意味着你不需要害怕鲸鱼。 他们无法泵出 & 转储GHST，因为绑定曲线被强化为他们的 huuge 交易！

If you wanna see it in action, check out this interactive model of the bonding curve Coderdan made [here](https://observablehq.com/@cinnabarhorse/aavegotchi-bonding-curve).

TEH CURVE IS FOREVER!

## Aavegotchi 绑定曲线
The Aavegotchi Bonding Curve was created on 14 September 2020 via a bonding curve smart contract powered by [Aragon Fundraising](https://fundraising.aragon.black/). After the conclusion of a presale for 500,000 GHST, the bonding curve was immediately opened. The bonding curve is unlimited in size, has no time limit, and offers an opening price of 0.2 Dai per GHST. It has a connecting weight of 33%.

You will have to complete KYC in order to purchase straight from/sell to the curve. Compliance is important my dudes - we live in a society, and we also don't want the project to get rugged by the government. Purchases from the curve are made in DAI. The reverse also applies; you can sell your GHST back to the curve for DAI, but why would you wanna do that? :( :( :(

If you are unable to perform KYC because of your citizenship, don't worry! **You will still be able to interact with every other part of the Aavegotchi metaverse.** You simply have to purchase your GHST off a DEX such as Uniswap or Balancer, or a CEX like OKex instead. Learn how to get GHST tokens [here](/ghst#get-ghst).

## Aavegotchi DAICO
A Decentralized Autonomous Initial Coin Offering (DAICO) is a new fundraising method that seeks to incorporate the best features of a Decentralized Autonomous Organization (DAO) with those of an Initial Coin Offering (ICO) in order to create a structure that provides a higher level of effectiveness to the token sale fundraising model. A DAICO is a model whereby investors have control over the funds collected once the fundraising is over. The investors could influence how developers have access to the funds and at what frequency through a "tap" mechanism. In addition, investors can also vote to do away with the project and have their funds returned.

The Aavegotchi project launched the token bonding curve through a DAICO on Aragon.

**This is SAFU. Do. Not. Remove. The. Bonding. Curve.** It prevents investors from getting rugged as they ultimately have control over the funds within the DAICO/bonding curve!

The first iteration of [AavegotchiDAO](/dao) launched in tandem with the GHST distribution on the bonding curve. GHST holders had the power to vote on increasing / maintaining the funds distributed by the tap mechanism of the token bonding curve (TBC) reserve to Pixelcraft Studios (the team behind Aavegotchi) to support development. The first AavegotchiDAO proposal of increasing the Aavegotchi DAICO tap from 50,000 DAI to 100,000 DAI per month passed with 99% approval on 18 October 2020.

## Aavegotchi 令牌供应动态
In our discussion of the token bonding curve/DAICO above, we learned that the total supply of the GHST token is dynamic. When investors use their DAI to buy GHST from the bonding curve, new GHST tokens are minted and the total supply of circulating GHST would increase. The reverse holds true as well. When users sell their GHST back into the bonding curve, they receive an equivalent amount in DAI based on the prevailing GHST price on the bonding curve.

The inflation of GHST tokens through net purchases on the bonding curve is positively correlated to the GHST price. **The bonding curve has been mathematically programmed to increase the price of GHST as the circulating supply of GHST increases.**

## 仲裁权
For users who have completed KYC, they will be able to arbitrage the GHST price differences between the token bonding curve and other DEXes such as Uniswap and Balancer. According to [Investopedia](https://www.investopedia.com/terms/a/arbitrage.asp), "Arbitrage is the purchase and sale of an asset in order to profit from a difference in the asset's price between markets. It is a trade that profits by exploiting the price differences of identical or similar financial instruments in different markets or in different forms. Arbitrage exists as a result of market inefficiencies and would therefore not exist if all markets were perfectly efficient." This is possible as DEXes come equipped with their own Automated Market Maker (AMM) formula and the net purchase/sale actions of GHST tokens on these DEXes would result in prices that are different from the token bonding curve. A savvy investor might consider exploiting such inefficiencies in the market (*alpha leak here*).

## 了解更多

* For more on [Aragon Fundraising and bonding curves!](https://fundraising.aragon.black/components/bonding-curve)

* Read more at [Bonding Curves Explained](https://yos.io/2018/11/10/bonding-curves/)

* Article on [Bonding Curves](https://defiprime.com/bonding-curve-explained) by DeFi Prime.

* Article on [DAICO](https://cointelegraph.com/explained/what-is-a-daico-explained) by the Coin Telegraph.