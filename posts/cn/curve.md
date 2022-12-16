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

代币联合曲线（TBC）是一条数学曲线，定义了价格和代币供应之间的关系。

在典型的代币联合曲线模型中，价格随着代币供应量的增加而上涨，随着供应量的减少而下降。 由于Aavegotchi 联合曲线是通过  [Aragon](/glossary#aragon) [去中心化的首次代币发行(DAICO)](/glossary#daico)发行的。因而本文也讨论了DAICO。

<div class="contentsBox">

**内容**

<ol>
<li><a href=#mechanics>机制</a></li>
<li><a href=#aavegotchi-bonding-curve>Aavegotchi 联合曲线</a></li>
<li><a href=#aavegotchi-daico>Aavegotchi DAICO</a></li>
<li><a href=#aavegotchi-token-supply-dynamics>Aavegotchi 代币供应动态机制</a></li>
<li><a href=#learn-more>Learn More</a></li>
</ol>

</div>

## 机制

### 按需锻造/燃烧

联合曲线使用定价算法作为自动化市场制造商，提供一个总是可用的流动资金来源。 用户可以通过将代币质押进入联合曲线储备池来与联合曲线进行交互。 当他们这样做时，联合曲线会根据定价算法为用户铸造相应的代币。 新锻造的代币可以具有特定的效用，甚至可以在用户之间进行交易，但其始终可以随时通过联合曲线赎回联合曲线储备池中的代币。

当一个人购买了代币时，每个随后的买方必须为每个代币支付略高的价格， 为最早的投资者创造潜在利润。 随着更多的人了解该项目并继续购买，每个代币的价值沿着联合曲线逐渐增加。 早期发现有前途的项目的投资者，购买联合曲线代币，然后再出售代币，就能够在未来赚取利润。

### 公式

联合曲线以不同的形式和大小出现。 在Aavegotchi项目中，团队采用了Bancor公式。

<img style = "border: 1px solid; margin-bottom: 15px" src = "/curve/reserve-ratio.png" alt = "token bonding curve" width = "750" />

### 公式说明

**储备代币** 是指用户质押到联合曲线的代币。

**延续令牌** 是指收藏储备令牌时从绑定曲线收到的令牌。

就Aavegotchi而言，储备和延续代币分别是DAI和GHST。

**Connecting Weight（连接权重）** （也称为储备比率）代表延续代币的总价值（总供应量×单价）与其储备代币总值之间的固定比率（在0和100%之间）。  储备代币总值和延续代币的总价值（也就是 "市值"）会随着买入和卖出而波动， 因此，该CW根据Bancor公式是不变的。

每次买入或卖出延续代币（GHST）都会触发储备代币（DAI）的增加或减少。 延续代币相对于其储备代币的价格必须不断地重新计算，以维持它们之间配置的连接权重。


连接权重决定了持续代币的价格需要多大幅度的调整以维持每笔交易，或者换句话说，其价格敏感性。

储备代币总值与连续代币之间的储备比率越高，价格敏感度越低，这意味着每次买入和卖出对延续代币价格变动的影响将小于比例 相反，储备代币余额与连续代币之间的比率较低，将导致较高的价格敏感性，这意味着每次买入和卖出对连续代币的价格变动将产生超过比例的影响。

**Avegotchi的储备比率是33%！** 这意味着你不需要害怕鲸鱼。 他们无法恶意操纵GHST，因为联合曲线对他们的huuugge交易是硬伤!

如果你想看到它是如何操作的，请查看Coderdan制作的交互模型 [在这里](https://observablehq.com/@cinnabarhorse/aavegotchi-bonding-curve)。

终结！

## Aavegotchi 联合曲线
Aavegotchi联合曲线创建于2020年9月14日，其智能合约是由 [Aragon 基金会](https://fundraising.aragon.black/) 所支持的。 在完成50万GHST的预售后，联合曲线立即启动。 联合曲线规模不限，没有时间限制，开盘价为0.2Dai/GHST。 它的连接权重为33%。

你必须完成KYC才能通过曲线直接购买/卖出。 合规性很重要，朋友们--我们都无法脱离现实社会，我们也不希望项目被政府找麻烦。 从曲线购买是需要支付DAI。 反过来也是一样，你可以把GHST卖回曲线换成DAI，但你为什么要这么做呢？ :( :( :( 。 :( :( :(

如果你因为公民身份而无法进行KYC，不用担心!  **你仍然能够与Aavegotchi元宇宙的其他部分交互。** 您只需从DEX购买GHST, 如Uniswap或Balancer, 或是在CEX 上购买像OKex，Binance。 在[这里](/ghst#get-ghst)可以学习如何获取 GHST 令牌.。

## Aavegotchi DAICO
去中心化自治初始币发行(DAICO)是一种新的筹资方式，它试图将去中心化自治组织(DAO)与初始币发行(ICO)的最佳特征结合起来，以创建一种为代币销售筹资模式提供更高的效力的模式。 DAICO是一种自治模式，在募资结束后，投资者对募集的资金拥有控制权。 投资者可以通过 "水龙头 "机制影响开发者如何获得资金，以及以何种频率获得资金。 此外，投资者还可以投票决定是否取消项目，并将资金返还。

Aavegotchi项目通过Aragon上的DAICO启动了代币联合曲线。

**这是SAFU。 不 要 移除 联合 曲线 。</p>

[AavegotchiDAO](/dao) 的第一次迭代与GHST在联合曲线上的发售同步推出。 GHST代币持有者有权投票决定增加/维持， [联合曲线 bonding curve (TBC)](/curve) 中给Pixelcraft工作室（Aavegotchi背后的团队）预留支持开发的资金。 将资金水龙头从每月5万DAI提高到10万DAI的首个提议，在2020年10月18日以99%的支持率通过。

## Aavegotchi 代币供应动态机制
在我们讨论上述联合曲线/DAICO时，我们了解到，GHST 代币的总供应是动态的。 When investors purchase GHST using DAI from the bonding curve, new GHST tokens are minted and the total supply of circulating GHST would increase. When GHST tokens are sold back into the bonding curve, the GHST tokens would be burnt, the seller would receive an equivalent amount in DAI based on the prevailing GHST price on the bonding curve, and the circulating supply of GHST tokens would decrease.

通过联合曲线上的净购买，GHST代币的通货膨胀与GHST价格呈正相关。 **根据联合曲线的数学编码，GHST的价格会随着供应量的增加而上涨。**

## Learn More

* 更多关于 [Aragon筹款和联合曲线！](https://fundraising.aragon.black/components/bonding-curve)

* 在 [联合曲线解释](https://yos.io/2018/11/10/bonding-curves/) 阅读更多内容

* 由 DeFi Prime 编写的 [联合曲线上的文章](https://defiprime.com/bonding-curve-explained)。

* Coin Telegraph上的 [DAICO](https://cointelegraph. com/explained/what-is-a-daico-explained) 文章。