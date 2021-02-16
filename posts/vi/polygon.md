---
author: Moon
date: '2020-04-23T07:00:00.000Z'
title: 'Polygon'
description: 'Polygon Tutorial'
contributors:
  - "moon14888"
---

Chào mấy fen! So you’ve heard about the migration to Polygon (formerly Matic Network), but got no idea what the hell that even is? Đừng lo, bọn mình sẽ giúp bạn vượt qua từng bước một!

In short, Polygon is a Layer 2 scaling solution for public blockchains like Ethereum. Nó là một nền tảng phi tập trung giúp đảm bảo các giao dịch trở nên nhanh hơn và phí giao dịch sẽ cực kỳ rẻ với khả năng hoàn thành ngay trên chuỗi. Nếu bạn muốn có thêm nhiều thông tin, hãy xem qua [bài viết này](https://medium.com/matic-network/what-is-matic-network-466a2c493ae1).

Hãy vẫy tay chào tạm biệt phí giao dịch lên đến 100 đô trên Uniswap và cùng chào đón những tương tác (gần như miễn phí) trên ngôi nhà mới nhé!

<div class="contentsBox">

**Nội dung**

<ol>
<li><a href=#why-polygon->Why Polygon?</a></li>
<li><a href=#adding-polygon-to-your-metamask>Adding Polygon to your Metamask</a></li>
<li><a href=#bridging-assets-to-polygon>Bridging assets to Polygon</a></li>
<li><a href=#bridging-assets-back-to-ethereum-mainnet>Chuyển tài sản về lại Ethereum Mainnet</a></li>
</ol>

</div>

## Why Polygon?

Aavegotchi Mainnet xém tí được triển khai vào ngày 4 tháng Giêng 2021 rồi đấy. Ngày hôm đó Bitcoin tăng gần 40%, khiến cho mấy con bot kiếm lợi nhuận chênh lệch bị loạn mạch chủ. Đều này khiến cho giá gas tăng phi mã lên 400 gwei, khiến phí giao dịch nhìn mà mắc hờn. Để mình lấy một ví dụ cho bạn dễ hiểu: Chi phí để mở và triệu hồi Gotchi từ duy nhất 1 [portal](/portals) sẽ ngốn của bạn ít nhất 300 đô la.

Rõ ràng là game có thể được khởi chạy trên Mainnet của Ethereum. Since Polygon has been working together with different NFT projects (such as OpenSea) already, the choice was relatively easy. The community shared this sentiment and voted for a launch on Polygon with 76%.

## Adding Polygon to your Metamask

Hãy cùng nhau bắt đầu cuộc vui nhé! To use Polygon, you first need to add it to your Metamask wallet.

1). Mở Metamask ra rồi nhấp vào nút "Ethereum Mainnet" trên đỉnh.

<img class = "bodyImage" src = "/polygon/metamask.png" alt = "Metamask" />

2). Chọn “Custom RPC”.

<img class = "bodyImage" src = "/polygon/metamask-custom-RPC.png" alt = "Metamask Custom RPG" />

3). Nhập thông tin này vào:

Network Name: Matic Mainnet

New RPC URL: https://rpc-mainnet.maticvigil.com/

Chain ID: 137

Currency Symbol (optional): MATIC

Block Explorer URL (tuỳ chọn): https://explorer.matic.network/

Một khi bạn đã thêm vào xong xuôi, hãy nhấp "Save".

4). Không có bước 4 đâu nha, bạn đã làm xong rồi á! You can now switch between Ethereum Mainnet and Polygon by clicking the button from step 1.

## Bridging assets to Polygon
Khi bạn đã kết nối Metamask xong thì bạn sẵn sàng vào việc rồi đấy. But before you need some assets on Polygon. We’re going to use the [Proof of Stake (PoS)](/glossary#proof-of-stake) Polygon Bridge to transfer our funds from Ethereum Mainnet to Polygon. Nếu bạn chỉ muốn chuyển GHST, thì hãy bỏ qua những bước sau đây và chỉ nên dùng Aavegotchi Bridge[tại đây](https://aavegotchi.com/bridge).

Nếu bạn muốn chuyển những tài sản khác, ví dụ như ETH hoặc USDC, đây là cách thực hiện nè:

1). Hãy vào [https://wallet.matic.network/](https://wallet.matic.network/) và đăng nhập bằng Metamask. Hãy đảm bảo rằng bạn đang ở bên tab "Wallet" nhé, nhìn giống như thế này này:

<img class = "bodyImage" src = "/polygon/matic-wallet.png" alt = "Matic Wallet" />

2). **ĐỪNG** nhấp vào nút "Switch to Plasma”. Đó không phải cầu kết nối mà bạn cần và phải mất 7 ngày để rút tiền đấy. Thay vào đó hãy thêm tài sản mà bạn muốn chuyển đi vào bên phải. Mình đã thêm sẵn USDC rồi nên các bạn có thể thấy nó trong ví của mình.

<img class = "bodyImage" src = "/polygon/matic-wallet-add-token.png" alt = "Thêm Token trên Matic Wallet" />

3). Ở phía bên trái, hãy nhấp vào "Matic Wallet" và "Deposit".

<img class = "bodyImage" src = "/polygon/matic-wallet-deposit.png" alt = "Gửi Token vào Matic Wallet" />

4). Hãy nhấp vào "Tiếp tục Gửi tiền" và chọn tài sản của bạn ở đây:

<img class = "bodyImage" src = "/polygon/matic-wallet-deposit2.png" alt = "Gửi Token vào Matic Wallet" />

5). Nhập vào số lượng mà bạn muốn dùng qua cầu kết nối và nhấn vào cái nút màu xanh to to nhé.

<img class = "bodyImage" src = "/polygon/matic-wallet-deposit3.png" alt = "Gửi Token vào Matic Wallet" />

Bùmmmmmmm! Chỉ cần xác nhận giao dịch trên Metamask thôi là xong. It can take up to 10 minutes for the tokens to arrive in your Polygon address. You should get 0.1 MATIC airdropped if you transfer a stablecoin and open [Quickswap](https://quickswap.exchange/), the largest DEX on Polygon. (That’s enough for 1000s of transactions, Polygon is aavesome!)

Nếu bạn cần giúp đỡ thì có thể tham gia vào [Discord](https://discord.com/invite/rttCTkZ) của Aavegotchi và hỏi ý kiến của những người bạn đáng mến trong cộng đồng nhé.

## Chuyển tài sản về lại Ethereum Mainnet

Vậy thì làm thế nào để chuyển tài sản về lại Ethereum Mainnet? Có thể làm vậy được hay không?

Có chứ, có một cách giúp bạn có thể chuyển tài sản trở lại Ethereum Mainnet!

Hãy ghé qua trang [Aavegotchi Bridge](https://aavegotchi.com/bridge)lại nhé.

<img class = "bodyImage" src = "/polygon/bridge-to-matic.png" alt = "Aavegotchi Bridge" />

Ở bên tay phải của màn hình, có hình ảnh của một đồng token cũng như một ô để bạn có thể nhập số lượng vào đó. Nhấp vào ảnh của token và một bảng danh sách token sẽ xuất hiện. Hãy chọn [maToken](/matokens) mà bạn muốn chuyển lại Mainnet của Ethereum. Sau đó, hãy nhập vào lượng token mà bạn muốn chuyển vào đó và nhấp vào nút "Transfer to Ethereum.".

Withdrawing from Polygon takes approximately 30 minutes. Có lúc sẽ lâu hơn. Sau khi rút tiền thành công, bạn vẫn sẽ phải nhấp vào nút "CLAIM ON ETHEREUM" để nhận lại token trên Ethereum Mainnet.

Currently, the Aavegotchi Bridge supports the transfer of maTokens from Polygon to Ethereum Mainnet. Trong tương lai, nó sẽ hỗ trợ chuyển các Aaevegotchi (ERC-721) và cũng như Trang phục (ERC-1155).