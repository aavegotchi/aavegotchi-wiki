---
author: Unintelligent Nerd
date: '2020-04-23T07:00:00.000Z'
title: 'Bonding Curve'
description: 'The Aavegotchi Bonding Curve'
image: "curve/bonding-curve.png"
contributors:
  - "unintelligent-nerd"
---


<div class="headerImageContainer">
<img class="headerImage" src="/curve/bonding-curve.png">
<p class="headerImageText">Bonding Curve</p>
</div>

Token Bonding curve (TBC) là một vòng cung toán học cho thấy mối quan hệ giữa giá và lượng cung của token.

Trong một TBC điển hình, giá sẽ tăng khi lượng cung của token tăng lên, và giảm khi lượng cung giảm. Do Aavegotchi, Bonding Curve được triển khai thông qua [Decentralized Autonomous Initial Coin Offering (DAICO)](/glossary#daico) của Aragon nên bài viết này cũng sẽ bàn luận về các DAICO.

<div class="contentsBox">

**Nội dung**

<ol>
<li><a href=#mechanics>Cơ chế</a></li>
<li><a href=#aavegotchi-bonding-curve>Aavegotchi Bonding Curve</a></li>
<li><a href=#aavegotchi-daico>Aavegotchi DAICO</a></li>
<li><a href=#aavegotchi-token-supply-dynamics>Những Động Lực Trong Lượng Cung Token của Aavegotchi</a></li>
<li><a href=#arbitrage>Kiếm lợi nhuận từ chênh lệch giá</a></li>
<li><a href=#learn-more>Tìm hiểu thêm</a></li>
</ol>

</div>

## Cơ chế

### Đúc/Đốt theo nhu cầu

Bonding Curves sử dụng một thuật toán giá để làm việc như ứng dụng tạo thị trường tự động và cung cấp một nguồn thanh khoản vô tận. Người dùng có thể tương tác với bonding curve bằng cách stake các token và trong quỹ dự trữ của bonding curve. Khi họ làm như vậy, bonding curve sẽ đúc ra các token để trả lại cho người dùng dựa trên thuật toán giá. Những token vừa đựa đúc có thể có những ứng dụng đặc thù và thậm chí là được giao dịch bởi người dùng những luôn có thể trao đổi lại thông qua bonding curve dành cho các token ở trong quỹ dự trữ của bonding curve.

Khi một token được mua thông qua TBC, mỗi người mua sau sẽ phải trả giá cao hơn một chút cho mỗi token, tạo ra nhiều tiềm năng lợi nhuận cho những người đầu tư từ sớm. Khi nhiều người biết về dự án hơn và việc mua hàng tiếp diễn, giá trị của mỗi token sẽ tăng dần với bonding curve. Những nhà đầu tư sớm tìm ra dự án ở giai đoạn đầu, mua token từ bonding curve, và sau đó bán lại token để có lợi nhuận trong tương lại.

### Công thức

Bonding curve khác nhau về hình dạng và kích thước. Với những dự án Aavegotchi, team phát triển đã ứng dựng Công thức của Bancor:

<img style = "border: 1px solid; margin-bottom: 15px" src = "/curve/reserve-ratio.png" alt = "token bonding curve" width = "750" />

### Giải thích công thức

**Quỹ dự trữ Token** chính là những token mà người dùng stake trong bonding curve.

** Continuous Token** được hiểu là token nhận được từ bonding curve dựa trên việc stake Reserve Token.

Trong trường hợp của Aavegotchi, Reserve và Continuous Token lần lượt là DAI và GHST.

**Connecting Weight** (cũng được hiểu là Reserve Ratio) đại diện cho một tỷ lệ cố định (giữa 0 và 100%) giữa tổng giá trị của Continuous Token (tổng lượng cung x đơn vị giá) và giá trị số dư của Reserve Token.  CW là một hằng số có được từ Công thức của Bancor bởi số dư của Reserve Token và tổng giá trị của Continuous Token (hay còn gọi là 'vốn hoá thị trường') luôn dao động với những lệnh mua và lệnh bán.

Mỗi lệnh mua hoặc bán Continuous Token (GHST) sẽ khiến lượng Reserve Token (DAI) tăng hoặc giảm. Giá của Reserve Token sau đó phải được tính lại liên tục để duy trì Connecting Weight đã được cấu hình giữa chúng.


The Connecting Weight determines how sharply a Continuous Token's price needs to adjust in order to be maintained with every transaction, or in other words, its price sensitivity.

A higher reserve ratio between the Reserve Token balance and the Continuous Token will result in lower price sensitivity, meaning that each buy and sell will have a less than proportionate effect on the Continuous Token’s price movement. Conversely, a lower ratio between the Reserve Token balance and the Continuous Token will result in higher price sensitivity, meaning that each buy and sell will have a more than proportionate effect on the Continuous Token’s price movement.

**Aavegotchi's Reserve Ratio is 33% frens!** This means you don't need to fear dem whales. They can't pump & dump GHST as the bonding curve is hardened against their huuugge transactions!

If you wanna see it in action, check out this interactive model of the bonding curve Coderdan made [here](https://observablehq.com/@cinnabarhorse/aavegotchi-bonding-curve).

TEH CURVE IS FOREVER!

## Aavegotchi Bonding Curve
The Aavegotchi Bonding Curve was created on 14 September 2020 via a bonding curve smart contract powered by [Aragon Fundraising](https://fundraising.aragon.black/). After the conclusion of a presale for 500,000 GHST, the bonding curve was immediately opened. The bonding curve is unlimited in size, has no time limit, and offers an opening price of 0.2 Dai per GHST. It has a connecting weight of 33%.

You will have to complete KYC in order to purchase straight from/sell to the curve. Compliance is important my dudes - we live in a society, and we also don't want the project to get rugged by the government. Purchases from the curve are made in DAI. The reverse also applies; you can sell your GHST back to the curve for DAI, but why would you wanna do that? :( :( :(

If you are unable to perform KYC because of your citizenship, don't worry! **You will still be able to interact with every other part of the Aavegotchi metaverse.** You simply have to purchase your GHST off a DEX such as Uniswap or Balancer, or a CEX like OKex instead. Learn how to get GHST tokens [here](/ghst#get-ghst).

## Aavegotchi DAICO
A Decentralized Autonomous Initial Coin Offering (DAICO) is a new fundraising method that seeks to incorporate the best features of a Decentralized Autonomous Organization (DAO) with those of an Initial Coin Offering (ICO) in order to create a structure that provides a higher level of effectiveness to the token sale fundraising model. A DAICO is a model whereby investors have control over the funds collected once the fundraising is over. The investors could influence how developers have access to the funds and at what frequency through a "tap" mechanism. In addition, investors can also vote to do away with the project and have their funds returned.

The Aavegotchi project launched the token bonding curve through a DAICO on Aragon.

**This is SAFU. Do. Not. Remove. The. Bonding. Curve.** It prevents investors from getting rugged as they ultimately have control over the funds within the DAICO/bonding curve!

The first iteration of [AavegotchiDAO](/dao) launched in tandem with the GHST distribution on the bonding curve. GHST holders had the power to vote on increasing / maintaining the funds distributed by the tap mechanism of the token bonding curve (TBC) reserve to Pixelcraft Studios (the team behind Aavegotchi) to support development. The first AavegotchiDAO proposal of increasing the Aavegotchi DAICO tap from 50,000 DAI to 100,000 DAI per month passed with 99% approval on 18 October 2020.

## Những Động Lực Trong Lượng Cung Token của Aavegotchi
In our discussion of the token bonding curve/DAICO above, we learned that the total supply of the GHST token is dynamic. When investors use their DAI to buy GHST from the bonding curve, new GHST tokens are minted and the total supply of circulating GHST would increase. The reverse holds true as well. When users sell their GHST back into the bonding curve, they receive an equivalent amount in DAI based on the prevailing GHST price on the bonding curve.

The inflation of GHST tokens through net purchases on the bonding curve is positively correlated to the GHST price. **The bonding curve has been mathematically programmed to increase the price of GHST as the circulating supply of GHST increases.**

## Kiếm lợi nhuận từ chênh lệch giá
For users who have completed KYC, they will be able to arbitrage the GHST price differences between the token bonding curve and other DEXes such as Uniswap and Balancer. According to [Investopedia](https://www.investopedia.com/terms/a/arbitrage.asp), "Arbitrage is the purchase and sale of an asset in order to profit from a difference in the asset's price between markets. It is a trade that profits by exploiting the price differences of identical or similar financial instruments in different markets or in different forms. Arbitrage exists as a result of market inefficiencies and would therefore not exist if all markets were perfectly efficient." This is possible as DEXes come equipped with their own Automated Market Maker (AMM) formula and the net purchase/sale actions of GHST tokens on these DEXes would result in prices that are different from the token bonding curve. A savvy investor might consider exploiting such inefficiencies in the market (*alpha leak here*).

## Tìm hiểu thêm

* For moar on [Aragon Fundraising and bonding curves!](https://fundraising.aragon.black/components/bonding-curve)

* Read more at [Bonding Curves Explained](https://yos.io/2018/11/10/bonding-curves/)

* Article on [Bonding Curves](https://defiprime.com/bonding-curve-explained) by DeFi Prime.

* Article on [DAICO](https://cointelegraph.com/explained/what-is-a-daico-explained) by the Coin Telegraph.