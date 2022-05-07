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

* Vé Drop có thể dùng để tham gia vào sự kiện Xổ Số NFT để trúng được [Portal](/portals) và [Các Mẫu Đất REALM](/metaverse).

Hãy đọc thêm để học các stake GHST nhé.

<div class="contentsBox">

**Nội dung**

<ol>
<li><a href=#purchasing-ghst>Mua GHST</a></li>
<li><a href=#how-to-stake>Cách Stake</a></li>
<li><a href=#staking-contract-addresses>Địa Chỉ Hợp Đồng Staking</a></li>
<li><a href=#what-s-next->Bước tiếp theo?</a></li>
</ol>

</div>

## Mua GHST
Đầu tiên, bạn cần sở hữu một vài token GHST để stake. [Trang token GHST](/posts/ghst) của bọn mình cung cấp nhiều cách thức để bạn có thể tự mình sở hữu chúng.

## Cách Stake
Một khi bạn đã sở hữu một ít token GHST, bạn có thể stake chúng tại [trang Staking](https://aavegotchi.com/stake-polygon)! Staking diễn ra trên Polygon (trước đây là Matic Network).

<img class = "bodyImage" src = "/staking/ghst-staking-ui.png" alt = "Giao Diện Stake GHST" />

Có 5 cách stake:

1. GHST

2. GHST-QUICK

3. GHST-USDC

4. GHST-ETH

5. GHST-MATIC

**Chú ý quan trọng: Không thể stake trên Mainnet được nữa! Mọi người vui lòng unstake và restake trên Polygon nhé.**

*Chú ý: Những token GHST mua trong đợt pre-sale không thể nào được stake cho đến khi chúng được mở khoá.*

### Stake token GHST trực tiếp

* Bước 1: Chuyển GHST từ Ethereum Mainnet sang Polygon, a giải pháp layer 2 bằng cách sử dụng [Giao diện Bridge sang Polygon](https://aavegotchi.com/bridge).

* Bước 2: Approve hợp đồng để dùng token GHST.

* Bước 3: Nhập số lượng GHST mà bạn muốn chuyển sang Polygon. Một khi giao dịch được xác nhận trên Ethereum, sẽ mất khoảng 7 đến 8 phút để số dư của bạn được hiện lên trên Polygon. Số dư của bạn sẽ được tự động cập nhật. Hãy kiên nhẫn nhé!

* Bước 4: Hãy cấu hình ví MetaMask thành Polygon bằng [bài hướng dẫn](/polygon) này.

* Kết nối ví MetaMask với Polygon và chuyển đến trang [Polygon Staking Page](https://aavegotchi.com/stake-polygon) trên DApp của Aavegotchi.

* Approve để hợp đồng sử dụng token của bạn.

* Bước 7: Nhập số lượng GHST mà bạn muốn chuyển sang Polygon. Presto! Xong rồi bạn êi!

*Với mỗi 1 GHST được stake bằng cách này, bạn sẽ nhận được 1 FRENS/Ngày.*

### Stake GHST-QUICK và GHST-USDC

Stake GHST-QUICK và GHST-USDC theo những bước sau.

* Bước 1: Hãy cấu hình ví MetaMask thành Polygon bằng [bài hướng dẫn](/polygon) này.

* Tiếp theo, hãy dùng [Aavegotchi Bridge](https://aavegotchi.com/bridge) để chuyển GHST và/hoặc tài sản khác đến Polygon. [Hướng dẫn về maToken](/matokens) sẽ giúp bạn biết cách thực hiện.

* Tiếp đến, hãy trở thành người cung cấp thanh khoản cho một hoặc cả hai quỹ thanh khoản [GHST-QUICK](https://info.quickswap.exchange/pair/0x8b1fd78ad67c7da09b682c5392b65ca7caa101b9) và [GHST-USDC](https://info.quickswap.exchange/pair/0x096c5ccb33cfc5732bcd1f3195c13dbefc4c82f4) trên [QuickSwap](https://quickswap.exchange). Bạn sẽ nhận lại token LP khi cung cấp thanh khoản. Những ai muốn stake trong quỹ GHST-QUICK thì có thể mua từ [QuickSwap](https://quickswap.exchange). Cặp giao dịch có thanh khoản cao nhất hiện tại là QUICK-UNI, QUICK-WETH, QUICK-USDC, và GHST-QUICK.

* Hãy lấy những token LP này và stake vào [Aavegotchi Staking Interface](https://aavegotchi.com/stake-polygon) để nhận lại token stkGHST. Đối với quỹ GHST-QUICK và GHST-USDC, những token stk này được đặt tên lần lượt là stkGHST-QUICK và stkGHST-USDC.

*Với mỗi token LP GHST-QUICK bạn stake theo cách này, bạn sẽ nhận được 83 FRENS mỗi ngày (bọn sẽ cố để duy trì tỷ lệ sao cho cao hơn 30-40% so với việc chỉ stake mỗi GHST. Tỷ lệ này điều chỉnh lên xuống theo thời gian mà không được báo trước để cho nó thật chính xác).*

*Với mỗi 1 GHST-QUICK mà bạn muốn stake bằng cách này, bạn sẽ nhận được 74 triệu FRENS/Ngày).*

Tại sao lại có sự khác biệt lớn về lượng FRENS nhận được thông qua việc stake token LP so với khi stake GHST? Việc stake token LP GHST-ETH có thể mang đến rủi ro [tổn thất tạm thời ](/glossary#impermanent-loss). Bạn được hỗ trợ cho những rủi ro mà bạn dám đảm nhận.

Tạo sao token LP cặp GHST-USCD lại trả về 74 tr FRENS mỗi ngày? Những người gửi thanh khoản đầu tiên trên pool GHST-USDC của Quickswap đã lộn xộn tỷ lệ của các tài sản này. Bởi vậy nên khi có người gửi tiền vào quỹ thì họ sẽ nhận được lượng token LP có tí ti, như 0,0006 chẳng hạn. Xem qua tweet [này](https://twitter.com/coderdannn/status/1362423402871447554) để cùng cừ ẻ nhé.

### Stake GHST-ETH

* Bước 1: Đi đến [quickswap.exchange](https://quickswap.exchange/) và chọn>Pools > Add Liquidity.

* Bước 2: Gửi lượng GHST và ETH tương đương vào quỹ thanh khoản GHST-ETH.

* Bước 3: Quay lại, bạn sẽ nhận được token GHST-ETH LP.

* Bước 4: Nhận token LP và stake tại [aavegotchi.com/stake-polygon](https://aavegotchi.com/stake-polygon)

* Bước 5: Quay lại, kiếm FRENS và bạn nhận được token stkGHST-WETH

Với mỗi 1 GHST-QUICK mà bạn muốn stake bằng cách này, bạn sẽ nhận được 12.08 triệu FRENS/Ngày (nhiều hơn 20% so với chỉ stake GHST).

### Stake GHST-ETH

* Bước 1: Vào [sushi.com](https://sushi.com/) và truy cập vào app

* Bước 2: Thêm thanh khoản cho pool GHST-MATIC. Đổi lại, bạn sẽ nhận được token LP GHST-MATIC

* Bước 3: Lấy token LP GHST-MATIC và gửi vào [Giao Diện Staking Aavegotchi](https://aavegotchi.com/stake-polygon). Bạn sẽ nhận được token chứng nhận stkGHST-MATIC sau khi stake token LP.

### Staking Cheatsheets!

Nếu bạn thích xem hình ảnh hơn thì hãy xem qua Staking Cheatsheet nhé!

* Stake GHST và Stake GHST-QUICK/GHST-USDC

<img class = "bodyImage" src = "/staking/GHST-to-Matic-Cheatsheet.png" alt = "Hướng dẫn chuyển GHST sang Matic" />

### Bảng Lợi Nhuận

The table below summarizes the staking returns (in terms of FRENS) in percentage against the baseline of staking GHST directly.

Do note that the Pixelcraft team may update the FRENS amount from time to time to balance the system.

table_stakingReturns

## Địa Chỉ Hợp Đồng Staking

The following table shows the various staking contract addresses on Polygon. The ghstStaking and stkGHSTQUICK contracts share the same contract address. Do check the contract address first before finalizing any transactions.

table_stakingContractAddresses

## Bước tiếp theo?

So you've got some FRENS now eh? Head over to the [Tickets page](/tickets) to learn how to purchase tickets with FRENS and to participate in Raffles!