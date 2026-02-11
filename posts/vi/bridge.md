---
author: Dev Barnyard
date: "2025-09-18T00:00:00.000Z"
title: "Cầu Nối"
description: "Cầu Aavegotchi (và những cầu khác, dùng để chuyển tài sản đi và về Polygon)"
contributors:
  - "barneychambers"
  - "unintelligent-nerd"
---

<div class="headerImageContainer">
<img class="headerImage" src="/bridge/aavegotchi-bridge.gif">
<p class="headerImageText">Cầu Aavegotchi</p>
</div>

Cầu nối là một loại phần mềm cho phép người dùng chuyển tài sản từ một blockchain này sang một blockchain khác.

Kết hoạch ban đầu là triển khai Aavegotchi trên Ethereum Mainnet vào ngày 4 tháng Giêng 2021. Do phí gas quá cao, cộng đồng đã bỏ phiếu để triển khai dự án trên [Polygon Network](/glossary#polygon). Kết quả của quyết định này là tài sản cần phải được chuyển từ một mạng lưới này sang một mạng lưới khác.

Để hỗ trợ việc chuyển tài sản, Pixelcraft Studios đã tạo ra Aavegotchi Bridge, cho phép người dùng gửi tài sản đi và về giữa cả 2 mạng lưới. Kể từ đó, đã xuất hiện nhiều giải phải dịch chuyển khác nhau. Phần này sẽ thể hiện một số chiếc cầu thông dụng.

<div class="contentsBox">

**Nội dung**

<ol>
<li><a href=#aavegotchi-bridge>Aavegotchi Bridge</a></li>
<li><a href=#decentralized-bridges>Cầu phi tập trung</a></li>
<p><a href=#polygon-bridge>Polygon Bridge</a></p>
<p><a href=#umbria-narni-bridge>Umbria Narni Bridge</a></p>
<p><a href=#base-bridges>Base Bridges</a></p>
<li><a href=#centralized-bridges>Cầu tập trung</a></li>
<p><a href=#ascendex>AscendEX</a></p>
<p><a href=#transak>Transak</a></p>
<p><a href=#crypto-com>Crypto.com</a></p>
<p><a href=#binance>Binance</a></p>
</ol>

</div>

## Aavegotchi Bridge


Aavegotchi Bridge là chiếc cầu chính chủ được tạo ra bởi Pixelcraft Studios. Historically it supported transfers between Ethereum and Polygon. As of 2024-2025, Aavegotchi has migrated to Base; for GHST to Base, use the canonical Ethereum↔Base bridge or fast bridges.

<img class="bodyImage" src="/bridge/aavegotchi-bridge.png" alt="Aavegotchi Bridge" />

Người dùng có thể truy cập vào Aavegotchi Baazaar tại [đây](https://aavegotchi.com/get-tokens?p=bridge).

Dưới đây là hướng dẫn chi tiết việc chuyển token ERC20 từ Ethereum Mainnet sang Polygon:

1). Tiếp theo, click vào hình đại diện của token (vùng khoang tròn màu đỏ bên dưới) để mở ra bảng danh sách token. Chọn token mà bạn muốn chuyển sang Polygon.

<img class = "bodyImage" src = "/bridge/select-atoken-to-convert.png" alt = "Aavegotchi Bridge to Matic" />

2). Nhập số lượng mà bạn muốn chuyển.

<img class = "bodyImage" src = "/bridge/amount-to-transfer-to-matic.png" alt = "Aavegotchi Bridge to Matic" />

3). Nhấp vào nút "Approve Transfer".

4). Nhấp vào nút "Transfer to Polygon".

5). Đợi khoảng 10 phút để tài sản của bạn xuất hiện trên Polygon network.

Thao tác này có thể áp dụng tương tự cho việc chuyển tài sản trở lại Ethereum Mainnet từ Polygon Network.

## Cầu phi tập trung

### Polygon Bridge

Polygon Bridge là chiến cầu crosschain đầu tiên kết nối Ethereum với Polygon. Đây là chiếc cầu chính chủ của team Polygon, và nó vận hành theo mô hình validator để chuyển tài sản giữa Ethereum và Polygon. This bridge can transfer \$GHST tokens, but cannot bridge NFT assets.

Với những ai muốn sử dụng Polygon Bridge, đây là một số bước cần thực hiện:

1). Truy cập vào Polygon Web Wallet v2 tại[https://wallet.polygon.technology](https://wallet.polygon.technology). Nhấp vào Polygon Bridge (khoanh tròn đỏ bên dưới).

<img class="bodyImage" src="/bridge/polygon-bridge-frontpage.png" alt="Polygon Bridge" />

2). Chọn token từ menu thả, nhập số lượng vào ô, và nhấp vào nút Transfer

<img class="bodyImage" src="/bridge/polygon-bridge.png" alt="Polygon Bridge" />

Có thể sẽ phải mất đến 10 phút thì token mới đến được địa chỉ Polygon của bạn.

Nếu bạn cần giúp đỡ thì có thể tham gia vào [Discord](https://discord.com/invite/rttCTkZ) của Aavegotchi và hỏi ý kiến của những người bạn đáng mến trong cộng đồng nhé.

### Umbria Narni Bridge

Narni bridge là một giải pháp cầu nối tân tiến được tạo ra bởi Umbria Network, sử dụng mô hình cầu thanh khoản để giảm chi phí chuyển lên đến 90%. The Narni bridge resolves transactions in approximately 5 minutes, and costs approximately \$40 (100 GWEI) to transfer GHST tokens between the Ethereum and Polygon blockchains. Hiện tại, chỉ có những token ERC20 mới tương thích với cầu Narni Bridge, NFT không thể chuyển bằng cầu này được.

Để sử dụng cầu Narni Bridge, vui lòng xem qua những bước sau đây:

1). Vào trang [Umbria Narni Bridge](https://bridge.umbria.network/bridge). Chọn mạng gốc và mạng đích.

<img class="bodyImage" src='/bridge/umbria-network-selection.png' />

2). Từ menu thả, hãy chọn token cần phải bridge.

<img class="bodyImage" src='/bridge/umbria-token-selection.png' />

3). Nhập vào lượng token muốn bridge. Narni bridge sẽ dự tính số lượng token mà sẽ nhận được sau khi bridge xong. Chiếc cầu này lấy 0,5% phí khi chuyển tài sản giữa các chain. Phí sẽ được trả cho những ai cung cấp thanh khoản cho tài sản trên Narni bridge.

<img class="bodyImage" src='/bridge/umbria-fee-estimation.png' />

4). Tại thời điểm bridge, bạn sẽ có 2 lựa chọn (QR code và MetaMask). Bridge bằng MetaMask là giải pháp được khuyên dùng. Bạn cũng nên chọn lựa tốc độ giao dịch nhanh nhất mà bạn có thể chi trả để tối thiểu nguy cơ bị nghẽn lệnh giao dịch tạm thời.

<img class="bodyImage" src='/bridge/umbria-confirming-transaction.png' />

5). Sau khi gửi đi một giao dịch, một modal sẽ hiện lên. Phần thứ nhất cho thấy giao dịch của bạn đang được xử lý để đến được cầu. Một khi giao dịch của bạn đã đến cầu, bạn sẽ nhận được dấu tick đầu tiên. Có thể sẽ mất vài phút để nhân được cả hai tick, nhưng nếu mất hơn 10 phút thì hãy liên hệ với team Umbria trên Discord để giúp bạn giải quyết vấn đề.

Cuối cùng, bạn sẽ nhận được hai dấu tick hồng, nghĩa là giao dịch của bạn đã được bridge thành công, và bạn có thể thấy được tài sản của mình trong ví trên blockchain đích. Bạn sẽ có thể thấy giao dịch trên trình khám phá block của điểm đến bằng cách nhấp vào nút trên màn hình trong giai đoạn này.

<img class="bodyImage" src='/bridge/umbria-confirmation.png' />

Nếu bạn có bất kỳ câu hỏi nào về Umbria Narni Bridge, hoặc muốn chát với một thành viên để được sự hỗ trợ từ đội ngũ phát triển, hãy tìm đến [kênh Discord của Umbria](https://discord.gg/8Ms7Cr4)

### Base Bridges

For GHST on Base:

- Canonical bridge (Ethereum↔Base): Superbridge
- Fast bridges (Polygon↔Base): Bungee, Jumper (availability subject to providers)

Refer to the official blog post “GHST Token Is Now Live on Base” for current guidance.

## Cầu tập trung

### AscendEX

AscendEX (trước đây là BitMax) là một nền tảng giao dịch tiền điện tử cho phép rút tiền sang mạng Polygon. Hãy xem qua infographic dưới đây để biết thêm chi tiết.

<img class = "bodyImage" src = "/bridge/Using_AscendEX_and_play_Aavegotchi.jpg" alt = "Dùng AscendEX để chơi Aavegotchi" />

### Transak

Transak là một cổng thanh toán tiền-pháp-định-tiền-mã-hoá. Người dùng thanh toán bằng cách sử dụng thẻ credit của họ và nhận lại token trong ví mà họ chỉ định.

Hãy xem qua [bài viết này](https://trasher.substack.com/p/buying-your-tokens-straight-into) từ thành viên trong cộng đồng bọn mình để biết thêm chi tiết.

### Crypto.com

Crypto.com là một ứng dụng ví trên điện thoại. Họ cho phép rút MATIC và USDC sang Polygon.

1). Chọn Transfer --> Withdraw --> Crypto --> External Wallet

2). Nhấp vào dấu + ở góc trên cùng bên phải

3). Chọn loại token mà bạn muốn rút. Nếu có thể rút token đó, bạn sẽ thấy một Tuỳ Chọn dành cho "Polygon" trong mục "Select Network" (xem ảnh screenshot bên dưới).

<img class="bodyImage" src="/bridge/cryptocom-withdrawal.png" alt="Crypto.com rút sang Polygon" />

### Binance

Binance là một trong những sàn giao dịch lớn nhất thế giới.

Vào ngày 31 tháng Năm 2022, họ đã [cho phép nạp và rút GHST trực tiếp từ Polygon](https://blog.aavegotchi.com/binance-enables-ghst-deposits-and-withdrawals-on-polygon/).

<img class="bodyImage" src="/bridge/ghst-withdrawal-from-binance-to-polygon.png" alt="Rút từ Binance sang Polygon" />
