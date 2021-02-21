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
Một khi đã có token GHST, đã đến lúc để stake chúng! Staking diễn ra trên Polygon (trước đây là Matic Network).

Có hai cách để stake: (1) stake GHST trực tiếp, và/hoặc (2) stake trong pool GHST-QUICK trên [QuickSwap](/glossary#quickswap).

**Chú ý quan trọng: Không thể stake trên Mainnet được nữa!**

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

*Với mỗi 1 GHST-QUICK mà bạn muốn stake bằng cách này, bạn sẽ nhận được 23 FRENS/Ngày.*

*Với mỗi 1 GHST-USDC mà bạn muốn stake bằng cách này, bạn sẽ nhận được 74 triệu FRENS/Ngày.*

Tại sao lại có sự khác biệt lớn về lượng FRENS nhận được thông qua việc stake token LP so với khi stake GHST? Việc stake token LP GHST-ETH có thể mang đến rủi ro [tổn thất tạm thời ](/glossary#impermanent-loss). Bạn được hỗ trợ cho những rủi ro mà bạn dám đảm nhận.

Tạo sao token LP cặp GHST-USCD lại trả về 74 tr FRENS mỗi ngày? Những người gửi thanh khoản đầu tiên trên pool GHST-USDC của Quickswap đã lộn xộn tỷ lệ của các tài sản này. Bởi vậy nên khi có người gửi tiền vào quỹ thì họ sẽ nhận được lượng token LP có tí ti, như 0,0006 chẳng hạn. Xem qua tweet [này](https://twitter.com/coderdannn/status/1362423402871447554) để cùng cừ ẻ nhé.

### Lật Bùa Cách Stake GHST trên Polygon nào!

Hình dưới đây giúp bạn hiểu về 2 cách tham gia vào staking trên Polygon mà chúng ta đã thảo luận phía trên (<a href=#staking-ghst-tokens-directly>Staking GHST tokens</a> ; <a href=#staking-in-the-ghst-quick-pool-on-quickswap>Staking in the GHST-QUICK pool</a>).

<img class = "bodyImage" src = "/staking/GHST-to-Matic-Cheatsheet.png" alt = "GHST to Matic Cheatsheet" />

## Mua vé Raffle

Một khi bạn đã có đủ FRENS, hãy chuyển đến [ giao diện Shop Bulk Buy](https://aavegotchi.com/tickets) để mua vé raffle với FRENS.

Không giống như FRENS, vé Raffle có thể được chuyển từ ví này sang ví khác. Chúng có thể được mua/bán trên [marketplaces](/marketplace).

Có sáu loại vé raffle khách nhau, từ Common (ít hiếm nhất) đến Godlike (giá trị nhất):

table_RaffleTickets

Xem Blog: \[Stake GHST, Make FRENS Live on Ethereum Mainnet!\]( https://aavegotchi.medium.com/stake-ghst-make-frens-live-on-ethereum-mainnet-658bd507d67b)

Người dùng được cho phép để mua nhiều loại vé khác nhau trong cùng một giao dịch. Bạn **không** cần phải thực hiện các giao dịch riêng lẻ để có thể mua được từng loại vé raffle.

## Tham gia Raffle

Raffle sẽ diễn ra trong một giai đoạn thời gian. Trong giai đoạn này, bạn có thể tham gia với vé raffle của mình để có cơ hội thắng giải. Để tham gia quay số, bạn cần phải thực hiện một giao dịch Ethereum; bởi nó sẽ không diễn ra một cách tự động. Nếu bạn có nhiều loại vé raffle khác nhau và muốn mua chúng cùng lúc thì việc này là hoàn toàn có thể. Bạn **không** cần phải thực hiện các giao dịch riêng lẻ để có thể mua được từng loại vé raffle.

Một khi sự kiện raffle kết thúc, bạn có thể tìm thấy giải thưởng mà mình thắng được và nhận chúng.

Nếu bạn quyết định không tham gia vào sự kiện raffle, bạn không cần phải làm gì với những tấm vé raffle của mình cả. Bạn cũng có thể thu gom vé raffle cho những sự kiện raffle sau này nếu muốn.

Lấy sự kiện raffle đầu tiên với chủ đề Chainlink làm ví dụ. Đây là giải thưởng thông trong sự kiện raffle đó:

<img class = "bodyImage" src = "/staking/link-raffle-prizes.png" alt = "Aavegotchi Chainlink-theme Raffle Prizes" />

Tổng cộng 6010 giải.

[Giải thưởng trên OpenSea](https://opensea.io/activity/aavegotchi-wearable-vouchers)

Mỗi giải thưởng sẽ được phân phát cho một vé raffle được bốc ngẫu nhiên, trong đó mỗi vé có một cơ hội thắng giải như nhau.

Bạn có thể cải thiện khả năng thắng giải bằng cách:
* Tham gia với nhiều vé
* Tham gia vào những loại vé raffle có tỷ lệ thắng giải cao (ví dụ như Common)

Những con số thằng giải Raffle ngẫu nhiên được quay ra từ [phần mềm quay số ngẫu nhiên on-chain đã được chứng nhận](https://blog.chain.link/verifiable-random-functions-vrf-random-number-generation-rng-feature/) của Chainlink.

Giải thưởng, bao gồm những Wearable Vouchers, có thể được đổi thành những phụ kiện Aavegotchi thật với tỷ lệ 1:1 khi trò chơi được triển khai. Việc này sẽ diễn ra trong [Aavegotchi Shop](https://aavegotchi.com/shop).

## Dự Liệu Về Sự Kiện Rafle Trong Quá Khứ
Các cậu nói về cách stake FRENS và tham gia Raffle là tốt đúng không. Nhưng mà những con số chính xác thì sao? Tỷ lệ để giành được wearable là bao nhiêu nếu dựa vào những đợt raffle vừa qua? Ghé xem [trang Raffles Statistics ](/raffles-stats) để xem thêm dữ liệu trong quá khứ.

## Thêm nguồn

- [Aavegotchi Raffles — Một Bài Hướng Dẫn FRENLY](https://aavegotchi.medium.com/aavegotchi-raffles-a-frenly-guide-66f624c9bc60)
- [Aavegotchi ❤ Chainlink Raffle — Chỉ Có Thắng Thôi](https://aavegotchi.medium.com/aavegotchi-chainlink-raffle-you-just-won-af87712f1018)
- [Anon và Tấm Vé Xanh Lục](https://aavegotchi.medium.com/anon-and-the-green-ticket-5776969b3a69)
