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

Staking là quá trình khoá tài sản tiền mã hoá của bạn để đổi lấy phần thưởng. Không có gì khác biệt trong dự án Aavegotchi. Token chủ đạo, [GHST](/posts/ghst), có thể được stake trên nhiều hợp đồng staking để kiếm [FRENS](/posts/glossary#frens) hoặc [Token Thưởng Thanh Khoản Của Sàn GAX (GLTR)](/gotchus-alchemica-exchange#gltr-token)

<div class="contentsBox">

**Nội dung**

<ol>
<li><a href=#frens>FRENS</a></li>
<li><a href=#gltr>GLTR</a></li>
<li><a href=#where-to-stake>Stake ở đâu</a></li>
<li><a href=#staking-for-frens>Staking nhận FRENS</a></li>
<li><a href=#staking-for-gltr>Staking nhận GLTR</a></li>
<li><a href=#staking-contract-addresses>Địa Chỉ Hợp Đồng Staking</a></li>
<li><a href=#frens-taask-force>FRENS Taask Force</a></li>
<li><a href=#what-s-next->Bước tiếp theo?</a></li>
</ol>

</div>

## FRENS

FRENS là một một tài khoản không thể chuyển đi được nằm trong Hợp đồng Staking của Aavegotchi. FRENS không thể mua được. Chúng được tạo ra nhằm vinh danh những stakers, những người đã cống hiến cho dự án Aavegotchi.

FRENS có thể dùng để đổi sang Vé Raffle hoặc Vé Drop:

* Vé Raffle có thể được dùng trong sự kiện Raffle định kỳ để trúng được [Trang Phục](/wearables).

* Vé Drop có thể dùng để tham gia vào sự kiện Xổ Số NFT để trúng được [Portal](/portals) và [Các Mẫu Đất REALM](/metaverse).

## GLTR

Thời gian là nguồn lực hiếm nhất trên giới, và trong cuộc đua thu thập các nguồn lực, nó là thức có giá trị nhất. Công dụng chính của GLTR là cho phép người chơi trong Gotchiverse có thể tăng tốc chế tạo và nâng cấp [Công trình](/gotchiverse#building-on-realm-parcels) của họ bằng cách đốt GLTR, cho phép chạm đến những cấp độ cao hơn của game. Mỗi GLTR được đốt đi tương ứng với một block trong mạng lưới Polygon PoS.

GLTR cũng có công dụng thứ hai, đó chính là token chính được dùng để đấu giá [Wearable Crest](/guild#accessing-a-guild). Các guild cũng sẽ được chọn trong việc chuyển đổi GLTR để tăng tốc trong việc Truyền theo Guild.

## Stake ở đâu

Có thể stake tại [app.aavegotchi.com/stake](https://app.aavegotchi.com/stake).

Bạn có thể stake [GHST token](/ghst) hoặc cặp (GHST-QUICK, GHST-USDC, GHST-ETH, GHST-MATIC).

Bạn có thể stake nhận **FRENS** hoặc **GLTR**.

<img class="bodyImage" src="/staking/stake.png" alt="Aavegotchi staking" />

## Staking nhận FRENS

<img class="bodyImage" src="/staking/stake-polygon.png" alt="Aavegotchi Staking for FRENS" />

Có 6 cách để stake nhận FRENS:

1. GHST

2. wapGHST

3. GHST-QUICK

4. GHST-USDC

5. GHST-ETH

6. GHST-MATIC

**Chú ý quan trọng: Không thể stake trên Mainnet được nữa! Mọi người vui lòng unstake và restake trên Polygon nhé.**

*Chú ý: Những token GHST mua trong đợt pre-sale không thể nào được stake cho đến khi chúng được mở khoá.*

### Stake token GHST trực tiếp

* Kết nối ví MetaMask với Polygon và chuyển đến trang [Polygon Staking Page](https://app.aavegotchi.com/stake-polygon) trên DApp của Aavegotchi.

* Approve để hợp đồng sử dụng token của bạn.

* Bước 3: Nhập số lượng GHST mà bạn muốn chuyển sang Polygon. Presto! Xong rồi bạn êi!

*Với mỗi 1 GHST được stake bằng cách này, bạn sẽ nhận được 1 FRENS/Ngày.*

### Stake wapGHST

wapGHST là viết tắt của Wrapped Aave Polygon GHST. Nó cũng có tỷ lệ sinh FRENS tương tự như stake GHST, bổ sung thêm lãi từ việc stake token GHST trên nền tảng Aave.

Staker không cần vào Aave. Bạn chỉ cần chấp thuận token của mình và nhấp vào nút wrap GHST để wrap/unwrap GHST thành wapGHST.

*Chú ý: APY có được sẽ không xuất hiện trong tìa khoảng wapGHST của bạn. Thay vì vậy, nó sẽ xuất hiện trong tài khoản GHST trong quá trình unwrap (khi bạn trở lại GHST thường.)*

* Step 1: Visit [app.aavegotchi.com/stake-polygon](https://app.aavegotchi.com/stake-polygon)

* Bước 2: Approve hợp đồng để dùng token GHST.

* Bước 3: Wrap GHST thành wapGHST.

### Stake GHST-QUICK và GHST-USDC

Stake GHST-QUICK và GHST-USDC theo những bước sau.

* Tiếp đến, hãy trở thành người cung cấp thanh khoản cho một hoặc cả hai quỹ thanh khoản [GHST-QUICK](https://info.quickswap.exchange/pair/0x8b1fd78ad67c7da09b682c5192b65ca7caa101b9) và [GHST-USDC](https://info.quickswap.exchange/pair/0x096c5ccb33cfc5732bcd1f3195c13dbefc4c82f4) trên [QuickSwap](https://quickswap.exchange). Bạn sẽ nhận lại token LP khi cung cấp thanh khoản. Những ai muốn stake trong quỹ GHST-QUICK thì có thể mua từ [QuickSwap](https://quickswap.exchange). Cặp giao dịch có thanh khoản cao nhất hiện tại là QUICK-UNI, QUICK-WETH, QUICK-USDC, và GHST-QUICK.

* Hãy lấy những token LP này và stake vào [Aavegotchi Staking Interface](https://app.aavegotchi.com/stake-polygon) để nhận lại token stkGHST. Đối với quỹ GHST-QUICK và GHST-USDC, những token stk này được đặt tên lần lượt là stkGHST-QUICK và stkGHST-USDC.

*Với mỗi token LP GHST-QUICK bạn stake theo cách này, bạn sẽ nhận được 83 FRENS mỗi ngày (bọn sẽ cố để duy trì tỷ lệ sao cho cao hơn 30-40% so với việc chỉ stake mỗi GHST. Tỷ lệ này điều chỉnh lên xuống theo thời gian mà không được báo trước để cho nó thật chính xác).*

*Với mỗi 1 GHST-QUICK mà bạn muốn stake bằng cách này, bạn sẽ nhận được 74 triệu FRENS/Ngày).*

Tại sao lại có sự khác biệt lớn về lượng FRENS nhận được thông qua việc stake token LP so với khi stake GHST? Việc stake token LP GHST-ETH có thể mang đến rủi ro [tổn thất tạm thời ](/glossary#impermanent-loss). Bạn được hỗ trợ cho những rủi ro mà bạn dám đảm nhận.

Tạo sao token LP cặp GHST-USCD lại trả về 74 tr FRENS mỗi ngày? Những người gửi thanh khoản đầu tiên trên pool GHST-USDC của Quickswap đã lộn xộn tỷ lệ của các tài sản này. Bởi vậy nên khi có người gửi tiền vào quỹ thì họ sẽ nhận được lượng token LP có tí ti, như 0,0006 chẳng hạn. Xem qua tweet [này](https://twitter.com/coderdannn/status/1362423402871447554) để cùng cừ ẻ nhé.

### Stake GHST-ETH

* Bước 1: Đi đến [quickswap.exchange](https://quickswap.exchange/) và chọn>Pools > Add Liquidity.

* Bước 2: Gửi lượng GHST và ETH tương đương vào quỹ thanh khoản GHST-ETH.

* Bước 3: Quay lại, bạn sẽ nhận được token GHST-ETH LP.

* Bước 4: Nhận token LP và stake tại [app.aavegotchi.com/stake-polygon](https://app.aavegotchi.com/stake-polygon)

* Bước 5: Quay lại, kiếm FRENS và bạn nhận được token stkGHST-WETH

Với mỗi 1 GHST-QUICK mà bạn muốn stake bằng cách này, bạn sẽ nhận được 12.08 triệu FRENS/Ngày (nhiều hơn 20% so với chỉ stake GHST).

### Stake GHST-ETH

* Bước 1: Vào [sushi.com](https://sushi.com/) và truy cập vào app

* Bước 2: Thêm thanh khoản cho pool GHST-MATIC. Đổi lại, bạn sẽ nhận được token LP GHST-MATIC

* Bước 3: Nhận token LP và stake tại [app.aavegotchi.com/stake-polygon](https://app.aavegotchi.com/stake-polygon). Bạn sẽ nhận được token chứng nhận stkGHST-MATIC sau khi stake token LP.

### Staking Cheatsheets!

Nếu bạn thích xem hình ảnh hơn thì hãy xem qua Staking Cheatsheet nhé!

* Stake GHST và Stake GHST-QUICK/GHST-USDC

<img class = "bodyImage" src = "/staking/GHST-to-Matic-Cheatsheet.png" alt = "GHST to Matic Cheatsheet" />

### Bảng Lợi Nhuận

Bảng dưới đây tóm tắt lại lợi nhuận khi stake (dựa trên số FRENS) theo tỷ lệ phần trăm so với đường cơ bản là stake GHST đơn thuần.

Hãy chú ý là team Pixelcraft sẽ cập nhật lượng FRENS này liên tục để cân bằng hệ thống.

table_stakingReturns

## Staking nhận GLTR

<img class="bodyImage" src="/staking/stake-gltr.png" alt="Aavegotchi Staking Nhận GLTR" />

* Step 1: Vào trang [app.aavegotchi.com/stake-gltr](https://app.aavegotchi.com/stake-gltr)

* Bước 2: Chọn pool mà bạn thích

* Bước 3: Gửi token LP wapGHST/GHST vào những pool này. Kiếm GLTR theo mỗi block!

## Địa Chỉ Hợp Đồng Staking

Bạn dưới đây tổng hợp nhiều địa chỉ hợp đồng staking khác nhau trên Polygon. Hợp đồng ghstStaking và stkGHSTQUICK dùng chung một địa chỉ. Hãy xem kỹ địa chỉ hợp đồng trước khi hoàn thành bất kỳ giao dịch nào nhé.

table_stakingContractAddresses

## FRENS Taask Force

Theo thời gian, lượng FRENS sinh ra sẽ tự động được ập nhật khi giá token đằng sau nó thay đổi.

[FRENS Taask Force](/frens-taask-force) đã được thành lập để theo dõi và điều chỉnh tỷ lệ FRENS để nó đạt đúng tỷ lệ định trước.

## Bước tiếp theo?

Vậy bạn đã có một ít FRENS rồi đúng không? Hãy vào [Tickets page](/tickets) để học cách mua vé bằng FRENS và tham gia vào Raffle!