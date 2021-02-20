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

Kết nối ví MetaMask với Matic Network và chuyển đến trang [Matic Staking Page](https://aavegotchi.com/stake-polygon) trên DApp của Aavegotchi. Approve để hợp đồng sử dụng token của bạn. Một khi giao dịch được thông qua, hãy nhập vào lượng GHST mà bạn muốn chuyển đến Polygon. Presto! Xong rồi bạn êi!

*Với mỗi 1 GHST được stake bằng cách này, bạn sẽ nhận được 1 FRENS/Ngày.*

### Stake vào quỹ GHST-QUICK trên QuickSwap

Tương tự như stake trực tiếp token GHST, bạn cần phải chuyển token GHST từ Ethereum Mainnet sang Polygon, một giải pháp L2.

Các bạn hãy xem qua [Bài hướng dẫn về Polygon](/polygon) này để có được hướng dẫn chi tiết về cách cấu hình sao cho ví MetaMask có thể kết nối với Matic Network nhé. Một khi đã hoàn thành, hãy xem những bước hướng dẫn tại đường link[đến bài viết Matic Liquidity Migration Incentives](https://aavegotchi.medium.com/ghst-token-live-on-matic-100k-usd-liquidity-migration-incentives-announced-faq-2590daa25d73).

1. Mua một ít token QUICK từ [QuickSwap](https://quickswap.exchange). Cặp giao dịch có thanh khoản cao nhất hiện tại là QUICK-UNI, QUICK-WETH và QUICK-USDC. GHST-QUICK sẽ sớm được thêm vào.

2. Hãy trở thành một người cung cấp thanh khoản cho Quỹ GHST-QUICK trên Uniswap.

3. Lấy token LP bạn nhận được từ bước 2 và stake và [GHST-QUICK Staking Pool](https://aavegotchi.com/stake-polygon) để nhận stkGHST.

4. Cuối cùng, dùng token stkGHST từ Hợp Đồng Staking GHST và stake chúng vào Quỹ Giải Thưởng Quickswap tại [https://quickswap.exchange/#/quick](https://quickswap.exchange/#/quick).

Giờ đây bạn đã có thể bắt đầu kiếm QUICK và FRENS!

*Với mỗi 1 GHST-ETH mà bạn muốn stake bằng cách này, bạn sẽ nhận được 23 FRENS/Ngày.*

Tại sao lại có sự khác biệt lớn với số lượng FRENS kiếm được thông qua phương thức này? Việc stake token LP GHST-ETH có thể mang đến rủi ro [tổn thất tạm thời ](/glossary#impermanent-loss). Bạn được hỗ trợ cho những rủi ro mà bạn dám đảm nhận.

### Lật Bùa Cách Stake GHST trên Matic nào!

Hình dưới đây giúp bạn hiểu về 2 cách tham gia vào staking trên Matic mà chúng ta đã thảo luận phía trên (<a href=#staking-ghst-tokens-directly>Staking GHST tokens</a> ; <a href=#staking-in-the-ghst-quick-pool-on-quickswap>Staking in the GHST-QUICK pool</a>).

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

Những con số thằng giải Raffle ngẫu nhiên được quay ra từ [phần mềm quay số ngẫu nhiên on-chain đã được chứng nhận](https://blog. chain. link/verifiable-random-functions-vrf-random-number-generation-rng-feature/) của Chainlink.

Giải thưởng, bao gồm những Wearable Vouchers, có thể được đổi thành những phụ kiện Aavegotchi thật với tỷ lệ 1:1 khi trò chơi được triển khai. Việc này sẽ diễn ra trong [Aavegotchi Shop](https://aavegotchi.com/shop).

## Dự Liệu Về Sự Kiện Rafle Trong Quá Khứ
Các cậu nói về cách stake FRENS và tham gia Raffle là tốt đúng không. Nhưng mà những con số chính xác thì sao? Tỷ lệ để giành được wearable là bao nhiêu nếu dựa vào những đợt raffle vừa qua? Ghé xem [trang Raffles Statistics ](/raffles-stats) để xem thêm dữ liệu trong quá khứ.

## Thêm nguồn

- [Aavegotchi Raffles — Một Bài Hướng Dẫn FRENLY](https://aavegotchi.medium.com/aavegotchi-raffles-a-frenly-guide-66f624c9bc60)
- [Aavegotchi ❤ Chainlink Raffle — Chỉ Có Thắng Thôi](https://aavegotchi.medium.com/aavegotchi-chainlink-raffle-you-just-won-af87712f1018)
- [Anon và Tấm Vé Xanh Lục](https://aavegotchi.medium.com/anon-and-the-green-ticket-5776969b3a69)