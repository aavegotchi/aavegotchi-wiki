---
author: Dev Barnyard
date: '2020-10-23T07:00:00.000Z'
title: 'Cầu Nối'
description: 'Cầu Aavegotchi (và những cầu khác, dùng để chuyển tài sản đi và về Polygon)'
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
<li><a href=#centralized-bridges>Cầu tập trung</a></li>
<p><a href=#ascendex>AscendEX</a></p>
<p><a href=#transak>Transak</a></p>
<p><a href=#crypto-com>Crypto.com</a></p>
<p><a href=#binance>Binance</a></p>
</ol>

</div>

## Aavegotchi Bridge

Aavegotchi Bridge là chiếc cầu chính chủ được tạo ra bởi Pixelcraft Studios. Gần đây, nó cho phép người dùng chuyển token ERC20 và ERC721 (Aavegotchi) qua lại giữa Ethereum Mainnet và Polygon Network. Việc chuyển token ERC-1155 ([Trang Phục](/wearables)) sẽ sớm có thể thực hiện.

<img class="bodyImage" src="/bridge/aavegotchi-bridge.png" alt="Aavegotchi Bridge" />

Người dùng có thể truy cập vào Aavegotchi Baazaar tại [đây](https://aavegotchi.com/bridge).

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
Polygon Bridge là chiến cầu crosschain đầu tiên kết nối Ethereum với Polygon. Đây là chiếc cầu chính chủ của team Polygon, và nó vận hành theo mô hình validator để chuyển tài sản giữa Ethereum và Polygon. Chiếc cầu này có thể chuyển token $GHST, nhưng không thể chuyển tài sản NFT.

Với những ai muốn sử dụng Polygon Bridge, đây là một số bước cần thực hiện:

1). Truy cập vào Polygon Web Wallet v2 tại[https://wallet.polygon.technology](https://wallet.polygon.technology). Nhấp vào Polygon Bridge (khoanh tròn đỏ bên dưới).

<img class="bodyImage" src="/bridge/polygon-bridge-frontpage.png" alt="Polygon Bridge" />

2). Chọn token từ menu thả, nhập số lượng vào ô, và nhấp vào nút Transfer

<img class="bodyImage" src="/bridge/polygon-bridge.png" alt="Polygon Bridge" />

Có thể sẽ phải mất đến 10 phút thì token mới đến được địa chỉ Polygon của bạn.

Nếu bạn cần giúp đỡ thì có thể tham gia vào [Discord](https://discord.com/invite/rttCTkZ) của Aavegotchi và hỏi ý kiến của những người bạn đáng mến trong cộng đồng nhé.

### Umbria Narni Bridge
Narni bridge là một giải pháp cầu nối tân tiến được tạo ra bởi Umbria Network, sử dụng mô hình cầu thanh khoản để giảm chi phí chuyển lên đến 90%. Narni bridge giải quyết giao dịch chỉ trong khoảng 5 phút, và chi phí vào khoảng $40 (100 GWEI) để chuyển token GHST giữa Ethereum và Polygon. Hiện tại, chỉ có những token ERC20 mới tương thích với cầu Narni Bridge, NFT không thể chuyển bằng cầu này được.

Để sử dụng cầu Narni Bridge, vui lòng xem qua những bước sau đây:

1). Vào trang [Umbria Narni Bridge](https://bridge.umbria.network/bridge). Chọn mạng gốc và mạng đích.

<img class="bodyImage" src='/bridge/umbria-network-selection.png' />

2). Từ menu thả, hãy chọn token cần phải bridge.

<img class="bodyImage" src='/bridge/umbria-token-selection.png' />

3). Nhập vào lượng token muốn bridge. Narni bridge sẽ dự tính số lượng token mà sẽ nhận được sau khi bridge xong. Chiếc cầu này lấy 0,5% phí khi chuyển tài sản giữa các chain. Phí sẽ được trả cho những ai cung cấp thanh khoản cho tài sản trên Narni bridge.

<img class="bodyImage" src='/bridge/umbria-fee-estimation.png' />

4). Tại thời điểm bridge, bạn sẽ có 2 lựa chọn (QR code và MetaMask). Bridge bằng MetaMask là giải pháp được khuyên dùng. Bạn cũng nên chọn lựa tốc độ giao dịch nhanh nhất mà bạn có thể chi trả để tối thiểu nguy cơ bị nghẽn lệnh giao dịch tạm thời.

<img class="bodyImage" src='/bridge/umbria-confirming-transaction.png' />

5). Sau khi gửi đi một giao dịch, một modal sẽ hiện lên. The 1st section displays your transaction process to reaching the bridge. Once your transaction has reached the bridge, you will receive the first tick. It can take a few minutes for you to receive both ticks, but if it takes longer than 10 minutes, please contact the Umbria team on Discord and they will help you solve the issue.

Finally, you will receive two pink ticks, which means that your transaction has successfully bridged, and you will be able to see the assets in your wallet on the destination blockchain. You will also be able to see the transaction on the destination block explorer by clicking the relevant button on the screen at this stage.

<img class="bodyImage" src='/bridge/umbria-confirmation.png' />

If you have any questions about the Umbria Narni Bridge, or would like to chat with a member of the support of developer team, reach out on the [Umbria Discord channel](https://discord.gg/8Ms7Cr4)

## Cầu tập trung

### AscendEX

AscendEX (formerly BitMax) is a cryptocurrency platform that allows withdrawals to Polygon Network. Check out the infographic below for more details.

<img class = "bodyImage" src = "/bridge/Using_AscendEX_and_play_Aavegotchi.jpg" alt = "Dùng AscendEX để chơi Aavegotchi" />

### Transak

Transak is a fiat-to-crypto payment gateway. Users pay using their credit card and receive the tokens on the wallet address they specified.

Hãy xem qua [bài viết này](https://trasher.substack.com/p/buying-your-tokens-straight-into) từ thành viên trong cộng đồng bọn mình để biết thêm chi tiết.

### Crypto.com

Crypto.com is a mobile app wallet. They enable withdrawals of MATIC and USDC to Polygon Network.

1). Select Transfer --> Withdraw --> Crypto --> External Wallet

2). Click the + sign at the top right corner

3). Select the token to be withdrawed. If withdrawal is available for that particular token, you will see an Option for "Polygon" in the "Select Network" field (see screenshot below).

<img class="bodyImage" src="/bridge/cryptocom-withdrawal.png" alt="Crypto.com withdrawal to Polygon" />

### Binance

Binance is one of the largest cryptocurrency exchanges in the world. They also provide withdrawals to Polygon Network.

At the withdrawal page, set the Network to **MATIC** Polygon (see screenshot below).

<img class="bodyImage" src="/bridge/withdrawal-from-binance-to-polygon.png" alt="Withdrawal from Binance to Polygon" />