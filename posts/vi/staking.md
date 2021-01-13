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

Có ba cách để stake: (1) stake token GHST [Mainnet], (2) stake token thanh khoản GHST-ETH trên Uniswap [Mainnet], và/hoặc (3) quỹ GHST-QUICK trên Quickswap [Matic].

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

### Stake vào quỹ GHST-QUICK trên QuickSwap [Matic]

Phương pháp thứ ba chính là chuyển token GHST từ Mainnet của Ethereum sang Matic Network, một giải pháp layer 2.

Các bạn hãy xem qua [Bài hướng dẫn về Matic](/matic) này để có được hướng dẫn chi tiết về cách cấu hình sao cho ví MetaMask có thể kết nối với Matic Network nhé. Một khi đã hoàn thành, hãy xem những bước hướng dẫn tại đường link[đến bài viết Matic Liquidity Migration Incentives](https://aavegotchi.medium.com/ghst-token-live-on-matic-100k-usd-liquidity-migration-incentives-announced-faq-2590daa25d73).

1. Mua một ít token QUICK từ [QuickSwap](https://quickswap.exchange). Cặp giao dịch có thanh khoản cao nhất hiện tại là QUICK-UNI, QUICK-WETH và QUICK-USDC. GHST-QUICK sẽ sớm được thêm vào.

2. Hãy trở thành một người cung cấp thanh khoản cho Quỹ GHST-QUICK trên Uniswap.

3. Hãy nhận token LP mà bạn có được từ bước 2 và stake vào Quỹ Staking GHST-QUICK để nhận stkGHST.

4. Cuối cùng, dùng token stkGHST từ Hợp Đồng Staking GHST và stake chúng vào Quỹ Giải Thưởng Quickswap tại [https://quickswap.exchange/#/quick](https://quickswap.exchange/#/quick).

Giờ đây bạn đã có thể bắt đầu kiếm QUICK và FRENS!

Tương tự như khi stake token LP GHST-ETH trên Uniswap, bạn có nguy cơ bị tổn thất tạm thời khi sử dụng phương pháp này.

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