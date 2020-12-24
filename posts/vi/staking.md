---
author: Nick Mudge
date: '2020-04-23T07:00:00.000Z'
title: 'Staking'
description: 'Stake GHST, Make FRENS'
contributors:
  - "mudgen"
  - "unintelligent-nerd"
---


<div class="headerImageContainer">
<img class="headerImage" src="/staking/staking.png">
<p class="headerImageText">Stake GHST, Nhận FRENS!</p>
</div>

Staking là quá trình khoá tài sản tiền mã hoá của bạn để đổi lấy phần thưởng. Không có gì khác biệt trong dự án Aavegotchi. Token của dự án, [GHST](/posts/ghst), có thể được stake trong Staking Contract để nhận [FRENS](/posts/glossary#frens).

FRENS là một một tài khoản không thể chuyển đi được nằm trong Hợp đồng Staking của Aavegotchi. FRENS không thể mua được. Chúng được tạo ra nhằm vinh danh những stakers, những người đã cống hiến cho dự án Aavegotchi.

FRENS có thể được chuyển đổi thành Vé Raffle, có thể tham gia và những sự kiện Raffle định kỳ để có thể thắng giải.

Đọc tiếp để hiểu thêm về cách stake GHST và kiếm thêm giải thưởng với FRENS.

<div class="contentsBox">

**Nội dung**

<ol>
<li><a href=#purchasing-ghst>Mua GHST</a></li>
<li><a href=#how-to-stake>Cách Stake</a></li>
<li><a href=#purchasing-raffle-tickets>Mua vé Raffle</a></li>
<li><a href=#entering-raffles>Tham gia Raffle</a></li>
<li><a href=#more-resources>Thêm nguồn</a></li>
</ol>

</div>

## Mua GHST
Đầu tiên, bạn cần sở hữu một vài token GHST để stake. [Trang token GHST](/posts/ghst) của bọn mình cung cấp nhiều cách thức để bạn có thể tự mình sở hữu chúng.

## Cách Stake
Một khi đã có token GHST, đã đến lúc để stake chúng!

Có 2 cách để stake: (1) stake token GHST, và/hoặc (2) stake Token LP GHST-ETH từ Uniswap.

*Chú ý: Những token GHST mua trong đợt pre-sale không thể nào được stake cho đến khi chúng được mở khoá.*

### Stake token GHST
Đây là cách trực tiếp nhất để stake token GHST. Hãy chuyển đến trang [giao diện staking của người dùng](https://aavegotchi.com/stake). Nó sẽ giống như hình ở bên dưới đây.

<img class = "bodyImage" src = "/staking/staking-interface.png" alt = "aavegotchi staking" />

Chọn "Stake on Mainnet" và bạn sẽ được giới thiệu đến một trang khác có 2 hộp thoại. Hộp bên trái sẽ có dòng chữ "Stake token GHST" (xem ảnh bên dưới). Nếu bạn đang stake lần đầu, bạn phải nhấp vào nút "Approve" để cho phép Hợp đồng Staking quyền truy cập vào token GHST của bạn. Một khi giao dịch "Approve" được thông qua, bạn có thể nhập số lượng GHST mà bạn muốn stake vào vùng "Input amount". Khi hoàn tất, hãy nhấn nút "Stake" để bắt đầu quá trình.

<img class = "bodyImage" src = "/staking/stake-ghst.png" alt = "stake ghst token aavegotchi" />

*Với mỗi 1 GHST được stake bằng cách này, bạn sẽ nhận được 1 FRENS/Ngày.*

### Stake Token LP GHST-ETH từ Uniswap
Một phương pháp thứ hai và phức tạp hơn là stake token Cung cấp Thanh khoản (LP) GHST-ETH từ Uniswap. Bằng cách này, bạn cần phải có cả token GHST và ETH trong ví. Hãy chuyển đến trang [GHST-ETH Uniswap pool](https://app.uniswap.org/#/add/0x3f382dbd960e3a9bbceae22651e88158d2791550/ETH) để cung cấp thanh khoản cho cả hai token (xem ảnh bên dưới). Người dùng cần cung cấp thanh khoản với tỷ lệ 50% GHST và 50% ETH trong quỹ thanh khoản. Lượng GHST và ETH được yêu cầu để nhận được 1 token LP GHST-ETH sẽ khác nhau tuỳ theo giá của token trong quỹ tại một thời điểm.  Khi stake cả GHST và ETH, người dùng sẽ nhận được token LP GHST-ETH từ Uniswap.

<img class = "bodyImage" src = "/staking/ghst-eth-uniswap-interface.png" alt = "GHST-ETH LP Tokens Aavegotchi staking" />

Một khi bạn đã có được token LP GHST-ETH, hãy chuyển đến [giao diện staking dành cho người dùng](https://aavegotchi.com/stake). Nó sẽ giống như hình ở bên dưới đây.

<img class = "bodyImage" src = "/staking/staking-interface.png" alt = "aavegotchi staking" />

Chọn "Stake on Mainnet" và bạn sẽ được giới thiệu đến một trang khác có 2 hộp thoại. Hộp bên phải sẽ có chữ "Stake Uniswap GHST Token" (xem ảnh bên dưới). Nếu bạn đang stake lần đầu thì bạn phải nhấn vào nút Approve để cho phép Hợp đồng Staking có thể truy cập vào token LP GHST-ETH của bạn. Once the "Approve" transaction goes through, you can then key in the desired amount of GHST-ETH LP tokens you would like to stake in the "Input amount" field. Khi hoàn tất, hãy nhấn nút "Stake" để bắt đầu quá trình.

<img class = "bodyImage" src = "/staking/stake-uniswap-ghst-eth.png" alt = "stake uniswap ghst-eth LP token aavegotchi" />

*For every 1 GHST-ETH staked in this way, you receive 100 FRENS / Day.*

Why the huge difference in the number of FRENS earned through this method? Staking GHST-ETH LP tokens has the risk of [impermanent loss](/posts/glossary#impermanent-loss). You are compensated for the increased risk you take.

## Mua vé Raffle

Once you have enough FRENS, head to the [Shop Bulk Buy user interface](https://aavegotchi.com/bulk-buy) to purchase raffle tickets with FRENS.

Unlike FRENS, Raffle Tickets can be transferred from one wallet to another. They can also be bought/sold on marketplaces.

There are six different categories of raffle tickets, ranging from Common (least valuable) to Godlike (most valuable):

table_RaffleTickets

Blog post: \[Stake GHST, Make FRENS Live on Ethereum Mainnet!\]( https://aavegotchi.medium.com/stake-ghst-make-frens-live-on-ethereum-mainnet-658bd507d67b)


## Tham gia Raffle

A raffle runs for a period of time. During this period, you can submit your raffle tickets for a chance to win prizes. Submitting raffle tickets into the draw involves an Ethereum transaction; it is not done automatically. When the raffle is over, you can find out what prizes you have won and can claim them. If you choose not to participate in a given Raffle, you do not need to do anything with your raffle tickets. You can also accumulate raffle tickets for subsequent raffles if you like to do so.

As an example, the first raffle had a Chainlink Theme. Here were the prizes for the raffle:

<img class = "bodyImage" src = "/staking/link-raffle-prizes.png" alt = "Aavegotchi Chainlink-theme Raffle Prizes" />

A total of 6010 prizes.

[Prizes on OpenSea](https://opensea.io/activity/aavegotchi-wearable-vouchers)

Each prize will be allocated to a randomly drawn raffle ticket, where each ticket has an equal chance of winning.

You can improve your probability of winning by:
* Submitting multiple tickets
* Enter raffle ticket categories with more prizes (e.g. Common)

Random numbers for the Raffle prize winners are generated through Chainlink's [on-chain verifiable randomness generator](https://blog.chain.link/verifiable-random-functions-vrf-random-number-generation-rng-feature/).

The prizes, which are Wearable Vouchers, could be exchanged 1:1 for the actual Aavegotchi wearable once the game launches. This will take place at the [Aavegotchi Shop](https://aavegotchi.com/shop).

## Thêm nguồn

- [Aavegotchi Raffles — A FRENLY Guide](https://aavegotchi.medium.com/aavegotchi-raffles-a-frenly-guide-66f624c9bc60)
- [Aavegotchi ❤ Chainlink Raffle — You Just WON](https://aavegotchi.medium.com/aavegotchi-chainlink-raffle-you-just-won-af87712f1018)
- [Anon and the Green Ticket](https://aavegotchi.medium.com/anon-and-the-green-ticket-5776969b3a69)