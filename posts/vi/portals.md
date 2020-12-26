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

Bất cứ khi nào một người chơi mua một Portal, nó sẽ tự động được gộp vào một batch. Nghĩa là các Portal sẽ được nhóm lại thành chỉ một batch, có thể được vận hành trong chỉ một lần dùng [Chainlink VRF](https://blog.chain.link/verifiable-random-functions-vrf-random-number-generation-rng-feature/). Khi khởi chạy, tất cả Portal trong batch sẽ được chỉ định một số ngẫu nhiên thông qua chương trình VRF đã được nói đến để đảm bảo rằng đặc điểm của Aavegotchi sẽ được thực sự ngẫu nhiên.

Tại sao tớ không thể mở Portal ngay vậy? Tại sao lại phải đặt chung với những Portal khách trong batch? Whenever the Chainlink VRF is called, the caller has to pay in LINK. Paying LINK for the opening of each individual Portal is expensive! It adds up if you are opening many Portals! Batching Portals together and calling the Chainlink VRF function once is more economical and allows for cost-savings.

If you're not ready to summon your Aavegotchi immediately, that's okay too (For instance, you might be thinking of selling your portal, or just holding on to it for a while). You can opt out of this automatic entry on the Buy Portal interface. However, when you decide you want to finally summon your Aavegotchi, you will have to execute a separate transaction to place your portal in the next batch, and then wait for the Summoning Ritual to happen.

Here's a handy flow chart that summarizes the process:


<img style = "border: 1px solid; margin-bottom: 15px" src = "/portals/portal-flow.png" alt = "Aavegotchi Portal" width = "750" />


When the Summoning Ritual is done, you will need to submit one more transaction to open your portal and claim your friend. Each portal contains 10 different Aavegotchis for you to choose from, to call forth from the Nether realm. You will have to choose 1 out of the 10 of them to summon. The rest, unfortunately, will vanish.

These Aavegotchis all bear different randomly generated traits. As you toggle through your options, you can view these traits and your Aavegotchi’s [Base Rarity Score](/rarity-farming#base-rarity-score). You can check out the trait range and rarity probabilities in this table here:

table_PortalTraitTable


More information on rarity farming can be found [here](/rarity-farming).


## Nhận Aavegotchi

To claim an Aavegotchi from the portal, you need to stake the required amount of Spirit Force ([aTokens](/atokens)) to the Portal. These aTokens can be acquired directly via [Aave](https://aave.com/) or DEXes like Uniswap.

In addition to their monetary value as dictated by scarcity and market forces, each Aavegotchi also has an intrinsic value. The aTokens you stake to it provide this intrinsic value.

**For more information on aTokens, see [aTokens](/atokens).**

Generally speaking, the minimum amount of Spirit Force (collateral) depends on the Base Rarity Score of the Aavegotchi you want to summon. The higher the score, the more collateral it requires.

The minimum amount of collateral required is 10 DAI worth, while the maximum is 1000 DAI worth of collateral.

You can increase or decrease the Spirit Force (staked aToken amount) of your Aavegotchi later via the Aavegotchi Dapp UI.


## Chuyển Aavegotchi Sang Địa Chỉ Khác

Transferring an Aavegotchi to a new owner (when you trade it) also transfers the staked collateral behind it, as well as any items and wearables in the Aavegotchi's inventory. This happens when you trade your Aavegotchi on an online marketplace such as OpenSea.

If you wish to retrieve the staked collateral backing your Aavegotchi, you have two options:

1. **Reduce the amount of collateral** in your Aavegotchi (but not below it's minimum stake).

2. **Burn your Aavegotchi**, releasing it back to the Nether Realm and returning all of your collateral.

**Before placing your Aavegotchi for sale on secondary markets such as OpenSea, please "lock" your Aavegotchi via the Dapp UI, to help the buyer ensure all of the Aavegotchi's belongings will transfer with it.**




