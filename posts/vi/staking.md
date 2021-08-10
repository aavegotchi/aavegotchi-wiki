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

FRENS có thể dùng để đổi sang Vé Raffle hoặc Vé Drop:

* Vé Raffle có thể được dùng trong sự kiện Raffle định kỳ để trúng được [Trang Phục](/wearables).

* Vé Drop có thể dùng để tham gia vào sự kiện Xổ Số NFT để trúng được [Portal](/portals) và [Các Mẫu Đất REALM](/metaverse). Đọc thêm về Vé Drop tại [trang Metaverse](/metaverse).

Đọc tiếp để hiểu thêm về cách stake GHST và kiếm thêm giải thưởng với FRENS.

<div class="contentsBox">

**Nội dung**

<ol>
<li><a href=#purchasing-ghst>Mua GHST</a></li>
<li><a href=#how-to-stake>Cách Stake</a></li>
<li><a href=#staking-contract-addresses>Địa Chỉ Hợp Đồng Staking</a></li>
<li><a href=#purchasing-raffle-tickets>Mua vé Raffle</a></li>
<li><a href=#entering-raffles>Tham gia Raffle</a></li>
<li><a href=#past-raffles-statistics>Dự Liệu Về Sự Kiện Rafle Trong Quá Khứ</a></li>
<li><a href=#more-resources>Thêm nguồn</a></li>
</ol>

</div>

## Mua GHST
Đầu tiên, bạn cần sở hữu một vài token GHST để stake. [Trang token GHST](/posts/ghst) của bọn mình cung cấp nhiều cách thức để bạn có thể tự mình sở hữu chúng.

## Cách Stake
Một khi đã có token GHST, đã đến lúc để stake chúng! Staking diễn ra trên Polygon (trước đây là Matic Network).

Có hai cách để stake: (1) stake GHST trực tiếp, và/hoặc (2) stake trong pool GHST-QUICK trên [QuickSwap](/glossary#quickswap).

**Chú ý quan trọng: Không thể stake trên Mainnet được nữa! Mọi người vui lòng unstake và restake trên Polygon nhé.**

*Chú ý: Những token GHST mua trong đợt pre-sale không thể nào được stake cho đến khi chúng được mở khoá.*

### Stake token GHST trực tiếp

Đầu tiên, bạn cần phải chuyển token GHST từ Ethereum Mainnet sang Ethereum, một giải pháp L2.

Điều này được thực hiện thông qua dịch vụ [Bridge to Matic Interface](https://aavegotchi.com/bridge). Approve để hợp đồng sử dụng token của bạn. Một khi giao dịch được thông qua, hãy nhập vào lượng GHST mà bạn muốn chuyển đến Polygon. Một khi giao dịch được xác nhận trên Ethereum, sẽ mất khoảng 7 đến 8 phút để số dư của bạn được hiện lên trên Polygon. Số dư của bạn sẽ được tự động cập nhật. Hãy kiên nhẫn nhé!

Tiếp theo, bạn cần phải cấu hình ví MetaMask để số dư trong ví hiện lên. Các bạn hãy xem qua [Bài hướng dẫn về Polygon](/polygon) này để có được hướng dẫn chi tiết về cách cấu hình sao cho ví MetaMask có thể kết nối với Matic Network nhé.

Kết nối ví MetaMask với Polygon và chuyển đến trang [Polygon Staking Page](https://aavegotchi.com/stake-polygon) trên DApp của Aavegotchi. Approve để hợp đồng sử dụng token của bạn. Một khi giao dịch được thông qua, hãy nhập vào lượng GHST mà bạn muốn chuyển đến Polygon. Presto! Xong rồi bạn êi!

*Với mỗi 1 GHST được stake bằng cách này, bạn sẽ nhận được 1 FRENS/Ngày.*

### Stake token LP Quickswap

Hiện tại chỉ có 2 token LP có thể đem stake để nhận FRENS:

* QuickSwap GHST-QUICK LP token
* QuickSwap GHST-USDC LP token

Bước đầu tiên là phải chuyển tiền từ Ethereum Mainnet sang Polygon, một giải pháp L2.

Các bạn hãy xem qua [Bài hướng dẫn về Polygon](/polygon) này để có được hướng dẫn chi tiết về cách cấu hình sao cho ví MetaMask có thể kết nối với Matic Network nhé. Tiếp theo, hãy dùng [Aavegotchi Bridge](https://aavegotchi.com/bridge) để chuyển GHST và/hoặc tài sản khác đến Polygon. [Hướng dẫn về maToken](/matokens) sẽ giúp bạn biết cách thực hiện.

Tiếp đến, hãy trở thành người cung cấp thanh khoản cho một hoặc cả hai quỹ thanh khoản [GHST-QUICK](https://info.quickswap.exchange/pair/0x8b1fd78ad67c7da09b682c5392b65ca7caa101b9) và [GHST-USDC](https://info.quickswap.exchange/pair/0x096c5ccb33cfc5732bcd1f3195c13dbefc4c82f4) trên [QuickSwap](https://quickswap.exchange). Bạn sẽ nhận lại token LP khi cung cấp thanh khoản. Những ai muốn stake trong quỹ GHST-QUICK thì có thể mua từ [QuickSwap](https://quickswap.exchange). Cặp giao dịch có thanh khoản cao nhất hiện tại là QUICK-UNI, QUICK-WETH, QUICK-USDC, và GHST-QUICK.

Hãy lấy những token LP này và stake vào [Aavegotchi Staking Interface](https://aavegotchi.com/stake-polygon) để nhận lại token stkGHST. Đối với quỹ GHST-QUICK và GHST-USDC, những token stk này được đặt tên lần lượt là stkGHST-QUICK và stkGHST-USDC.

**Chỉ riêng** token stkGHST-QUICK thì bạn mới phải stake vào quỹ Phần thưởng của Quickswap tại [https://quickswap.exchange/#/quick](https://quickswap.exchange/#/quick) để nhận thêm Quick. Team Aavegotchi đang nhờ đội ngũ Quickswap thêm phần thưởng tương tự cho token stkGHST-USDC.

*Với mỗi token LP GHST-QUICK bạn stake theo cách này, bạn sẽ nhận được 83 FRENS mỗi ngày (bọn sẽ cố để duy trì tỷ lệ sao cho cao hơn 30-40% so với việc chỉ stake mỗi GHST. Tỷ lệ này điều chỉnh lên xuống theo thời gian mà không được báo trước để cho nó thật chính xác).*

*Với mỗi 1 GHST-QUICK mà bạn muốn stake bằng cách này, bạn sẽ nhận được 74 triệu FRENS/Ngày).*

Tại sao lại có sự khác biệt lớn về lượng FRENS nhận được thông qua việc stake token LP so với khi stake GHST? Việc stake token LP GHST-ETH có thể mang đến rủi ro [tổn thất tạm thời ](/glossary#impermanent-loss). Bạn được hỗ trợ cho những rủi ro mà bạn dám đảm nhận.

Tạo sao token LP cặp GHST-USCD lại trả về 74 tr FRENS mỗi ngày? Những người gửi thanh khoản đầu tiên trên pool GHST-USDC của Quickswap đã lộn xộn tỷ lệ của các tài sản này. Bởi vậy nên khi có người gửi tiền vào quỹ thì họ sẽ nhận được lượng token LP có tí ti, như 0,0006 chẳng hạn. Xem qua tweet [này](https://twitter.com/coderdannn/status/1362423402871447554) để cùng cừ ẻ nhé.

### Lật Bùa Cách Stake GHST trên Polygon nào!

Hình dưới đây giúp bạn hiểu về 2 cách tham gia vào staking trên Polygon mà chúng ta đã thảo luận phía trên (<a href=#staking-ghst-tokens-directly>Staking GHST tokens</a> ; <a href=#staking-quickswap-lp-tokens>Staking in the GHST-QUICK pool</a>).

<img class = "bodyImage" src = "/staking/GHST-to-Matic-Cheatsheet.png" alt = "Hướng dẫn chuyển GHST sang Matic" />

## Địa Chỉ Hợp Đồng Staking

Bạn dưới đây tổng hợp nhiều địa chỉ hợp đồng staking khác nhau trên Polygon. Hợp đồng ghstStaking và stkGHSTQUICK dùng chung một địa chỉ. Hãy xem kỹ địa chỉ hợp đồng trước khi hoàn thành bất kỳ giao dịch nào nhé.

table_stakingContractAddresses

## Mua vé Raffle

Một khi bạn đã có đủ FRENS, hãy chuyển đến [ giao diện Shop Bulk Buy](https://aavegotchi.com/tickets) để mua vé raffle với FRENS.

Không giống như FRENS, vé Raffle có thể được chuyển từ ví này sang ví khác. Vé cũng có thể được mua/bán trên thị trường thứ cấp như [Baazaar](/baazaar).

The Raffle Tickets are also now available on OpenSea Polygon [here](https://opensea.io/collection/aavegotchi-raffle-tickets-polygon). You will be able to see the number of tickets minted for each category of tickets on OpenSea.

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

Each prize will be allocated to a randomly drawn raffle ticket, where each ticket has an equal chance of winning.

You can improve your probability of winning by:
* Tham gia với nhiều vé
* Tham gia vào những loại vé raffle có tỷ lệ thắng giải cao (ví dụ như Common)

Random numbers for the Raffle prize winners are generated through Chainlink's [on-chain verifiable randomness generator](https://blog.chain.link/verifiable-random-functions-vrf-random-number-generation-rng-feature/).

After the raffle has concluded, winners can claim their prizes on Polygon Network and equip their Gotchis with those wearables.

## Dự Liệu Về Sự Kiện Rafle Trong Quá Khứ
Knowing how to stake FRENS and participate in Raffles is good, you say. But what about the numbers? What are the probabilities of winning a wearable based on past raffles? Visit the [Raffles Statistics page](/raffles-stats) for the historical data.

## Thêm nguồn

- [Aavegotchi Raffles — Một Bài Hướng Dẫn FRENLY](https://aavegotchi.medium.com/aavegotchi-raffles-a-frenly-guide-66f624c9bc60)
- [Aavegotchi ❤ Chainlink Raffle — Chỉ Có Thắng Thôi](https://aavegotchi.medium.com/aavegotchi-chainlink-raffle-you-just-won-af87712f1018)
- [Anon và Tấm Vé Xanh Lục](https://aavegotchi.medium.com/anon-and-the-green-ticket-5776969b3a69)
