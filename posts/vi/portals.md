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

Sau khi mua portal, bước kế tiếp là mở nó ra. Portal sẽ được mở ra trên [Matic Network](/glossary#matic-network) khi người chơi ký vào một giao dịch. Sau khi giao dịch được kí, [Chainlink Verifiable Randomness Function (VRF)](https://blog.chain.link/verifiable-random-functions-vrf-random-number-generation-rng-feature/) sẽ được thực thi "phía sau cánh gà.". Sau khi hoàn thành, portal sẽ được chỉ định một số ngẫu nhiên để đảm bảo các chỉ số của Aavegotchi được ngẫu nhiên một cách công khai.

Here's a handy flow chart that summarizes the process:

<img class = "bodyImage" src = "/portals/opening-an-aavegotchi-portal.png" alt = "Quá trình mở Portal trong Aavegotchi" />

After opening a portal, you will see 10 different Aavegotchis for you to choose from, to call forth from the Nether realm. You will have to choose 1 out of the 10 of them to summon. The rest, unfortunately, will vanish.

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

Bạn có thể tăng hoặc giảm Spirit Force (lượng aToken được stake) của Aavegotchi thông qua giao diện ngừi dùng của Dapp Aavegotchi.

To claim your Gotchi, you need to perform 2 transactions. First, you need to approve the smart contract to spend the aToken in your wallet. The subsequent transaction allows you to claim the Aavegotchi.


## Chuyển Aavegotchi Sang Địa Chỉ Khác

Chuyển Aavegotchi cho một người chủ mới (khi bạn trao đổi nó) cũng có nghĩa là bạn phải chuyển luôn số tiền ký gửi mà bạn stake cho nó, cũng như bất kỳ món trang bị nào có trong túi đồ của Aavegotchi. Điều này xảy ra khi bạn trade Aavegotchi trên một thị trường trực tuyến ví dụ như OpenSea.

Nếu bạn muốn nhận lại số tài sản ký gửi được stake trong Aavegotchi, thì có hai cách:

1. **Giảm lượng tài sản ký gửi** trong Aavegotchi (nhưng không được dưới mức stake tối thiểu).

2. **Burn Aavegotchi**, trả đĩa bay để Aavegotchi bay về Nether Realm và trả lại hết tài sản ký gửi.

**Trước khi bán Aavegotchi trên một thị trường thứ cấp như OpenSea, hãy "lock" Aavegotchi trong trong giao diện người dùng của Dapp, để tất cả những trang bị của Aavegotchi đều được chuyển khoản theo.**




