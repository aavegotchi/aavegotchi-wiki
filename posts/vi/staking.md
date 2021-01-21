---
author: Nick Mudge
date: '2020-04-23T07:00:00.000Z'
title: 'Staking'
description: 'Stake GHST, Nhận FRENS'
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
<li><a href=#past-raffles-statistics>Dự Liệu Về Sự Kiện Rafle Trong Quá Khứ</a></li>
<li><a href=#more-resources>Thêm nguồn</a></li>
</ol>

</div>

## Mua GHST
Đầu tiên, bạn cần sở hữu một vài token GHST để stake. [Trang token GHST](/posts/ghst) của bọn mình cung cấp nhiều cách thức để bạn có thể tự mình sở hữu chúng.

## Cách Stake
Một khi đã có token GHST, đã đến lúc để stake chúng!

There are four ways to stake: (1) staking GHST tokens [Mainnet], (2) staking Uniswap GHST-ETH LP tokens [Mainnet], (3) staking GHST tokens [Matic], and/or (4) the GHST-QUICK pool on QuickSwap [Matic].

*Chú ý: Những token GHST mua trong đợt pre-sale không thể nào được stake cho đến khi chúng được mở khoá.*

### Stake token GHST [Mainnet]
Đây là cách trực tiếp nhất để stake token GHST. Hãy chuyển đến trang [giao diện staking của người dùng](https://aavegotchi.com/stake). Nó sẽ giống như hình ở bên dưới đây.

<img class = "bodyImage" src = "/staking/staking-interface.png" alt = "aavegotchi staking" />

Chọn "Stake on Mainnet" và bạn sẽ được giới thiệu đến một trang khác có 2 hộp thoại. Hộp bên trái sẽ có dòng chữ "Stake token GHST" (xem ảnh bên dưới). Nếu bạn đang stake lần đầu, bạn phải nhấp vào nút "Approve" để cho phép Hợp đồng Staking quyền truy cập vào token GHST của bạn. Một khi giao dịch "Approve" được thông qua, bạn có thể nhập số lượng GHST mà bạn muốn stake vào vùng "Input amount". Khi hoàn tất, hãy nhấn nút "Stake" để bắt đầu quá trình.

<img class = "bodyImage" src = "/staking/stake-ghst.png" alt = "stake ghst token aavegotchi" />

*Với mỗi 1 GHST được stake bằng cách này, bạn sẽ nhận được 1 FRENS/Ngày.*

### Stake Token LP GHST-ETH từ Uniswap [Mainnet]
Một phương pháp thứ hai và phức tạp hơn là stake token Cung cấp Thanh khoản (LP) GHST-ETH từ Uniswap. Bằng cách này, bạn cần phải có cả token GHST và ETH trong ví. Hãy chuyển đến trang [GHST-ETH Uniswap pool](https://app.uniswap.org/#/add/0x3f382dbd960e3a9bbceae22651e88158d2791550/ETH) để cung cấp thanh khoản cho cả hai token (xem ảnh bên dưới). Người dùng cần cung cấp thanh khoản với tỷ lệ 50% GHST và 50% ETH trong quỹ thanh khoản. Lượng GHST và ETH được yêu cầu để nhận được 1 token LP GHST-ETH sẽ khác nhau tuỳ theo giá của token trong quỹ tại một thời điểm.  Khi stake cả GHST và ETH, người dùng sẽ nhận được token LP GHST-ETH từ Uniswap.

<img class = "bodyImage" src = "/staking/ghst-eth-uniswap-interface.png" alt = "GHST-ETH LP Tokens Aavegotchi staking" />

Một khi bạn đã có được token LP GHST-ETH, hãy chuyển đến [giao diện staking dành cho người dùng](https://aavegotchi.com/stake). Nó sẽ giống như hình ở bên dưới đây.

<img class = "bodyImage" src = "/staking/staking-interface.png" alt = "aavegotchi staking" />

Chọn "Stake on Mainnet" và bạn sẽ được giới thiệu đến một trang khác có 2 hộp thoại. Hộp bên phải sẽ có chữ "Stake Uniswap GHST Token" (xem ảnh bên dưới). Nếu bạn đang stake lần đầu thì bạn phải nhấn vào nút Approve để cho phép Hợp đồng Staking có thể truy cập vào token LP GHST-ETH của bạn. Một khi giao dịch "Approve" được hoàn tất, bạn có thể nhập vào số lượng token LP GHST-ETH mà bạn muốn stake và vùng "Input amount". Khi hoàn tất, hãy nhấn nút "Stake" để bắt đầu quá trình.

<img class = "bodyImage" src = "/staking/stake-uniswap-ghst-eth.png" alt = "stake uniswap ghst-eth LP token aavegotchi" />

*Với mỗi 1 GHST-ETH mà bạn muốn stake bằng cách này, bạn sẽ nhận được 100 FRENS/Ngày.*

Tại sao lại có sự khác biệt lớn với số lượng FRENS kiếm được thông qua phương thức này? Việc stake token LP GHST-ETH có thể mang đến rủi ro [tổn thất tạm thời ](/posts/glossary#impermanent-loss). Bạn được hỗ trợ cho những rủi ro mà bạn dám đảm nhận.

### Staking GHST tokens [Matic]

Phương pháp thứ ba chính là chuyển token GHST từ Mainnet của Ethereum sang Matic Network, một giải pháp layer 2.

This is done by using the [Bridge to Matic Interface](https://aavegotchi.com/bridge). Approve the contract to use your GHST tokens. Once that transaction goes through, input the amount of GHST you would like to transfer to Matic Network. Once your transaction has confirmed on Ethereum, it takes roughly 7-8 minutes for your balance to reflect on Matic. Your balance will update automatically. Please be patient!

Next, you have to configure your Metamask to display your wallet balance. Do refer to this [Matic Guide](/matic) for detailed instructions on how one can configure their Metamask wallet to include the Matic Network.

Connect your Metamask to Matic Network and head over to the [Matic Staking Page](https://aavegotchi.com/stake-matic) on the Aavegotchi DApp. Approve the contract to use your GHST tokens on Matic. Once the transaction goes through, input the amount of GHST you would like to deposit. Presto! You are done!

### Staking in the GHST-QUICK pool on QuickSwap [Matic]

The fourth method involves transferring GHST tokens from Ethereum Mainnet to the Matic Network, a layer 2 solution.

Do refer to this [Matic Guide](/matic) for detailed instructions on how one can configure their Metamask wallet to include the Matic Network. Once that is done, follow the subsequent steps found in the [Matic Liquidity Migration Incentives post](https://aavegotchi.medium.com/ghst-token-live-on-matic-100k-usd-liquidity-migration-incentives-announced-faq-2590daa25d73).

1. Mua một ít token QUICK từ [QuickSwap](https://quickswap.exchange). Cặp giao dịch có thanh khoản cao nhất hiện tại là QUICK-UNI, QUICK-WETH và QUICK-USDC. GHST-QUICK sẽ sớm được thêm vào.

2. Hãy trở thành một người cung cấp thanh khoản cho Quỹ GHST-QUICK trên Uniswap.

3. Hãy nhận token LP mà bạn có được từ bước 2 và stake vào Quỹ Staking GHST-QUICK để nhận stkGHST.

4. Cuối cùng, dùng token stkGHST từ Hợp Đồng Staking GHST và stake chúng vào Quỹ Giải Thưởng Quickswap tại [https://quickswap.exchange/#/quick](https://quickswap.exchange/#/quick).

Now you are earning QUICK and FRENS!

Similar to Staking Uniswap GHST-ETH LP tokens, there is a risk of impermanent loss using this method as well.

### Staking GHST on Matic Cheetsheet!

The following diagram shows the two different routes to staking on Matic that we have discussed above (<a href=#staking-ghst-tokens--matic->Staking GHST tokens</a> ; <a href=#staking-in-the-ghst-quick-pool-on-quickswap--matic->Staking in the GHST-QUICK pool</a>).

<img class = "bodyImage" src = "/staking/GHST-to-Matic-Cheatsheet.png" alt = "GHST to Matic Cheatsheet" />

## Mua vé Raffle

Once you have enough FRENS, head to the [Shop Bulk Buy user interface](https://aavegotchi.com/tickets) to purchase raffle tickets with FRENS.

Unlike FRENS, Raffle Tickets can be transferred from one wallet to another. They can also be bought/sold on [marketplaces](/marketplace).

There are six different categories of raffle tickets, ranging from Common (least valuable) to Godlike (most valuable):

table_RaffleTickets

Blog post: \[Stake GHST, Make FRENS Live on Ethereum Mainnet!\]( https://aavegotchi.medium.com/stake-ghst-make-frens-live-on-ethereum-mainnet-658bd507d67b)

Users are allowed to buy tickets belonging to different categories in a single transaction. You do **not** need to create separate buy transactions for each category of raffle ticket.

## Tham gia Raffle

A raffle runs for a period of time. During this period, you can submit your raffle tickets for a chance to win prizes. Submitting raffle tickets into the draw involves an Ethereum transaction; it is not done automatically. If you have many different categories of raffle tickets and wish to enter them together as a bundle, this is also possible. You do **not** need to create separate transactions for entering each category of raffle tickets into the raffle.

When the raffle is over, you can find out what prizes you have won and can claim them.

If you choose not to participate in a given Raffle, you do not need to do anything with your raffle tickets. You can also accumulate raffle tickets for subsequent raffles if you like to do so.

As an example, the first raffle had a Chainlink Theme. Here were the prizes for the raffle:

<img class = "bodyImage" src = "/staking/link-raffle-prizes.png" alt = "Aavegotchi Chainlink-theme Raffle Prizes" />

A total of 6010 prizes.

[Prizes on OpenSea](https://opensea.io/activity/aavegotchi-wearable-vouchers)

Each prize will be allocated to a randomly drawn raffle ticket, where each ticket has an equal chance of winning.

You can improve your probability of winning by:
* Tham gia với nhiều vé
* Tham gia vào những loại vé raffle có tỷ lệ thắng giải cao (ví dụ như Common)

Random numbers for the Raffle prize winners are generated through Chainlink's [on-chain verifiable randomness generator](https://blog.chain.link/verifiable-random-functions-vrf-random-number-generation-rng-feature/).

The prizes, which are Wearable Vouchers, could be exchanged 1:1 for the actual Aavegotchi wearable once the game launches. This will take place at the [Aavegotchi Shop](https://aavegotchi.com/shop).

## Dự Liệu Về Sự Kiện Rafle Trong Quá Khứ
Knowing how to stake FRENS and participate in Raffles is good, you say. But what about the numbers? What are the probabilities of winning a wearable based on past raffles? Visit the [Raffles Statistics page](/raffles-stats) for the historical data.

## Thêm nguồn

- [Aavegotchi Raffles — Một Bài Hướng Dẫn FRENLY](https://aavegotchi.medium.com/aavegotchi-raffles-a-frenly-guide-66f624c9bc60)
- [Aavegotchi ❤ Chainlink Raffle — Chỉ Có Thắng Thôi](https://aavegotchi.medium.com/aavegotchi-chainlink-raffle-you-just-won-af87712f1018)
- [Anon và Tấm Vé Xanh Lục](https://aavegotchi.medium.com/anon-and-the-green-ticket-5776969b3a69)