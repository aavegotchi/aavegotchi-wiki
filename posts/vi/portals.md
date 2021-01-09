---
author: appellants
date: '2020-04-23T07:00:00.000Z'
title: 'Portals'
description: 'Tất tần tật về Portal trong Aavegotchi'
contributors:
  - "appellants"
image: "portals/portal.gif"
---

<div class="headerImageContainer">
<img class="headerImage" src="/portals/portal.gif">
<p class="headerImageText">Portal Trong Game Aavegotchi</p>
</div>

Làm thế nào để triệu hồi Aavegotchi và đưa nó từ Nether realm đến với màn hình của bạn? Tất nhien là thông qua Portal!

Hãy nhìn thấu vào những chiều sâu tím thẩm và tìm xem sinh vật gì đang ẩn nấp bên dưới - mấy fen sẽ tìm thấy một người bạn cho mình. Hoặc còn đặc biệt hơn nữa là có đến tận 10 người bạn.

Vậy nên hãy mang lên mình chiếc áo choàng ma thuật - đã đến lúc để tìm hiểu về Portal và nghi lễ triệu hồi các Aavegotchi. 

<div class="contentsBox">

**Nội dung**

<ol>
<li><a href=#buying-a-portal>Mua Portal</a></li>
<li><a href=#opening-your-portal>Mở Portal</a></li>
<li><a href=#claiming-an-aavegotchi>Nhận Aavegotchi</a></li>
<li><a href=#transferring-your-aavegotchi>Chuyển Aavegotchi Sang Địa Chỉ Khác</a></li>
</ol>

</div>

## Mua Portal

Trước khi nuôi nấng những bé ma pixel, bạn sẽ phải triệu hồi chúng thông qua một cách cổng. Bạn có thể mua được nó thông qua [Dapp chính thức của Aavegtochi](https://aavegotchi.com/buy-portal), hoặc thị trường bên ngoài ví dụ như [OpenSea](https://opensea.io/).

Nếu bạn mua từ Dapp của Aavegotchi, mỗi cánh cổng sẽ có giá gần 100 GHST. Những thiết bị này sẽ được tra mắt trong sự kiện 'Haunts' (nhiều phiên bản). Sự kiện haunt đầu tiên sẽ chào bán chỉ 10.000 Portals. Sau đó, [AavegotchiDAO](/dao) sẽ tiếp tục vote để ra những quyết định liên quan đến những sự kiện haunt riêng biệt. Ví dụ, giá cánh cổng và số lượng có thể thay đổi trong tương lai, là kết quả của các quyết định và biểu quyết từ DAO.


## Mở Portal

Ngon lành! Bạn sắp có thể mua cổng rồi nhé. Đây là lúc ~ Portal Summoning Ritual ~ (Nghi Lễ Triệu Hồi Qua Cánh Cổng) được triển khai. Cơ chế này giúp bạn có thể triệu hồi Aavegotchi cho mình.

After purchasing the portal, the very next step is to open it. Opening the portal occurs on the Matic Network where gamers have to sign a transaction. After the transaction is signed, the [Chainlink Verifiable Randomness Function (VRF)](https://blog.chain.link/verifiable-random-functions-vrf-random-number-generation-rng-feature/) is called behind-the-scenes. When the function is executed, the portal will be assigned a random number via the aforementioned VRF, ensuring that the Aavegotchi's traits will be provably random.

Here's a handy flow chart that summarizes the process:

<img class = "bodyImage" src = "/portals/opening-an-aavegotchi-portal.png" alt = "Process of opening an Aavegotchi Portal" />

When the Summoning Ritual is done, you will need to submit one more transaction to open your portal and claim your friend. Each portal contains 10 different Aavegotchis for you to choose from, to call forth from the Nether realm. You will have to choose 1 out of the 10 of them to summon. The rest, unfortunately, will vanish.

These Aavegotchis all bear different randomly generated traits. As you toggle through your options, you can view these traits and your Aavegotchi’s [Base Rarity Score](/rarity-farming#base-rarity-score). This is a rarity score that is initially given to your Aavegotchi, based on the initial traits it has upon summoning. This rarity score can later be modified through a range of activities, such as equipping your Aavegotchi with wearables.


You can check out the trait range and rarity probabilities in this table here:

table_PortalTraitTable


More information on rarity farming can be found [here](/rarity-farming).


## Nhận Aavegotchi

To claim an Aavegotchi from the portal, you need to stake the required amount of Spirit Force ([aTokens](/atokens)) to the Portal. These aTokens can be acquired directly via [Aave](https://aave.com/) or DEXes like Uniswap.

In addition to their monetary value as dictated by scarcity and market forces, each Aavegotchi also has an intrinsic value. The aTokens you stake to it provide this intrinsic value.

**For more information on aTokens, see [aTokens](/atokens).**

Generally speaking, the minimum amount of Spirit Force (collateral) depends on the Base Rarity Score of the Aavegotchi you want to summon. The higher the score, the more collateral it requires.

The minimum amount of collateral required is 10 DAI worth, while the maximum is 1000 DAI worth of collateral.

The formula which is used to determine the amount of Spirit Force (collateral) needed is as follows:

```
if (rarityScore < 300) return 10;
        else if (rarityScore >= 300 && rarityScore < 450) return 10;
        else if (rarityScore >= 450 && rarityScore <= 525) return 25;
        else if (rarityScore >= 526 && rarityScore <= 580) return 100;
        else if (rarityScore >= 581) return 1000;
```

For example, if the Base Rarity Score is less than 300, you need to stake at least 10 DAI worth of the collateral to summon the Gotchi.

You can increase or decrease the Spirit Force (staked aToken amount) of your Aavegotchi later via the Aavegotchi Dapp UI.


## Chuyển Aavegotchi Sang Địa Chỉ Khác

Transferring an Aavegotchi to a new owner (when you trade it) also transfers the staked collateral behind it, as well as any items and wearables in the Aavegotchi's inventory. This happens when you trade your Aavegotchi on an online marketplace such as OpenSea.

If you wish to retrieve the staked collateral backing your Aavegotchi, you have two options:

1. **Giảm lượng tài sản ký gửi** trong Aavegotchi (nhưng không được dưới mức stake tối thiểu).

2. **Burn Aavegotchi**, trả đĩa bay để Aavegotchi bay về Nether Realm và trả lại hết tài sản ký gửi.

**Before placing your Aavegotchi for sale on secondary markets such as OpenSea, please "lock" your Aavegotchi via the Dapp UI, to help the buyer ensure all of the Aavegotchi's belongings will transfer with it.**




