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

## 机制

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

如果你想看到它在操作中，请查看这个交互式模型来制作 [在这里](https://observablehq.com/@cinnabarhorse/aavegotchi-bonding-curve)。

终结！

## Aavegotchi 绑定曲线
Aavegotchi Bonding 曲线是2020年9月14日通过 [Aragon Funding](https://fundraising.aragon.black/) 提供动力的连接曲线智能合同创建的。 在50万GHST预设完后，连接曲线立即开启。 连接曲线的尺寸无限，没有时间限制，每种温室气体运输标准的开价为0.2 Dai。 它的连接重量为33%。

您必须完成了解你的数据才能直接从或出售到曲线。 守约是我的重要舞蹈――我们生活在一个社会中，我们也不希望该项目被政府搁浅。 从曲线购买的是DAI。 反向也适用；您可以将GHST卖回到DAI的曲线上，但为什么要这样做？ :( :( :(

如果由于您的公民身份而无法执行了解客户，请不要担心！ **你仍然能够与Aavegotchi元的其他部分交互。** 您只需从DEX购买GHST, 如Uniswap或Balancer, 或是一个 CEX 像OKex。 在这里学习如何获取 GHST 令牌 [](/ghst#get-ghst)。

## Aavegotchi DAICO
分权式自治初步合作项目是一种新的筹资方法，旨在将分权自治组织的最佳特点与首次合作提供的特点结合起来，以便建立一个能够提高象征性销售筹资模式效力的结构。 投资管理处是一种模式，一旦筹款结束，投资者就可以控制所募集的资金。 投资者可以影响开发者如何获得资金，以及通过一个“tap”机制的频率。 此外，投资者也可以投票取消该项目，并将资金退还。

Aavegotchi项目通过Aragon的DAICO启动了象征性的连接曲线。

**这是SAFU。 不 要 移除 联合 曲线 。</p>

[AavegotchiDAO 的第一次迭代](/dao) 与GHST在绑定曲线上的分布同步启动。 GHST 持有人有权就增加/维持资金进行投票，这些资金是通过象征性的连接曲线预留器(TBC) 分配给Pixelcraft Studios(Aavegotchi背后的团队) 来支持发展。 第一个AavegotchiDAO建议将Aavegotchi DAICO 的点击率从50增加到50， 200 DAI至100 000DAI，2020年10月18日获得99%的批准。

## Aavegotchi 令牌供应动态
在我们讨论上述标记关联曲线/DAICO时，我们了解到，GHST 令牌的总供应是动态的。 当投资者使用 DAI 从关联曲线购买GHST时， 新的GHST 代币已被点燃，流通GHST 的总供应量将会增加。 反过来也是如此。 当用户将其GHST卖回到连接曲线时， 他们收到了建筑工程师协会根据捆绑曲线上通用的GHST价格提供的同等数额。

GHST 代币通过在绑定曲线上的净购买而出现的通货膨胀与GHST 价格有着正面的关系。 **随着GHST供应量的增加，绑定曲线的数学设计是为了提高GHST的价格。**

## 仲裁权
对于已完成KYC的用户 他们将能够将GHST价格的差异弥合在代币关联曲线和其他DEX（例如Uniswap和Balancer）之间。 根据 [Investopedia](https://www.investopedia.com/terms/a/arbitrage.asp), “仲裁是指购买和出售一项资产，以便从该资产在市场之间的价格差异中获利。 这是一种通过利用不同市场或不同形式的相同或类似金融工具的价格差异而获得利润的贸易。 仲裁是由于市场效率低下造成的，因此如果所有市场都完全高效，就不会存在。” 这样做是可能的，因为DEXes配备了自己的自动市场制造商(AMM) 公式，而GHST 代币在这些代谢物上的净购买/销售行动将导致不同于代币关联曲线的价格。 野蛮的投资者可能会考虑利用市场中这种低效率的做法(*Alpha leak here*)。

## 了解更多

* 更多关于 [Aragon筹款和关联曲线！](https://fundraising.aragon.black/components/bonding-curve)

* 在 [联合曲线解释](https://yos.io/2018/11/10/bonding-curves/) 阅读更多内容

* 由 DeFi Prime 编写的 [绑定曲线上的文章](https://defiprime.com/bonding-curve-explained)。

* Coin Telegraph上的 [DAICO](https://cointelegraph. com/explained/what-is-a-daico-explained) 文章。