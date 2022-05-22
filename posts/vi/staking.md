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
<li><a href=#frens-taask-force>FRENS Taask Force</a></li>
<li><a href=#what-s-next->What's next?</a></li>
</ol>

</div>

## Mua GHST
Đầu tiên, bạn cần sở hữu một vài token GHST để stake. [Trang token GHST](/posts/ghst) của bọn mình cung cấp nhiều cách thức để bạn có thể tự mình sở hữu chúng.

## Cách Stake
Một khi bạn đã sở hữu một ít token GHST, bạn có thể stake chúng tại [trang Staking](https://aavegotchi.com/stake-polygon)! Staking diễn ra trên Polygon (trước đây là Matic Network).

<img class = "bodyImage" src = "/staking/ghst-staking-ui.png" alt = "Giao Diện Stake GHST" />

There are six ways to stake:

1. GHST

2. wapGHST

3. GHST-QUICK

4. GHST-USDC

5. GHST-ETH

6. GHST-MATIC

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

### Staking wapGHST

wapGHST stands for Wrapped Aave Polygon GHST. It provides the same FRENS rate as staking GHST directly, with the addition of lending the GHST token out for additional yield on the Aave platform.

Stakers do not need to visit Aave. You just need to approve your tokens and click on wrap GHST to wrap/unwrap your GHST into wapGHST.

*Note: The APY accrued will not appear in your balance of wapGHST. Rather, it will accrue to your GHST balance during the unwrapping process (when you return to vanilla GHST.)*

* Step 1: Visit [app.aavegotchi.com/stake-polygon](https://app.aavegotchi.com/stake-polygon)

* Bước 2: Approve hợp đồng để dùng token GHST.

* Step 3: Wrap your GHST into wapGHST.

### Staking GHST-QUICK and GHST-USDC

Staking GHST-QUICK and GHST-USDC follows the same steps.

* Step 1: Configure your Metamask wallet to include Polygon by following this [Polygon Guide](/polygon).

* Step 2: Use the [Aavegotchi Bridge](https://aavegotchi.com/bridge) to transfer GHST and/or other assets to Polygon. The [maTokens Guide](/matokens) will show you how this is done.

* Step 3: Become a liquidity provider on either or both the [GHST-QUICK](https://info.quickswap.exchange/pair/0x8b1fd78ad67c7da09b682c5392b65ca7caa101b9) and [GHST-USDC](https://info.quickswap.exchange/pair/0x096c5ccb33cfc5732bcd1f3195c13dbefc4c82f4) pools on [QuickSwap](https://quickswap.exchange). You will receive LP tokens in return for your liquidity provision. For people who are interested in staking in the GHST-QUICK pool, you can get some QUICK token from [QuickSwap](https://quickswap.exchange). The most liquid pairs are currently QUICK-UNI, QUICK-WETH, QUICK-USDC, and GHST-QUICK.

* Step 4: Take these LP tokens and stake them in the [Aavegotchi Staking Interface](https://aavegotchi.com/stake-polygon) to get stkGHST receipt tokens. For the GHST-QUICK and GHST-USDC pools, these stkGHST receipt tokens are named stkGHST-QUICK and stkGHST-USDC, respectively.

*For every 1 GHST-QUICK LP token staked in this way, you receive 83 FRENS / Day (the team tries to keep the rate around 30-40% higher than just staking GHST alone. This rate is periodically adjusted up/down without warning to maintain the correct proportion).*

*For every 1 GHST-USDC LP token staked in this way, you receive 74 million FRENS / Day (10% more than just staking GHST).*

Why is there a huge difference in the number of FRENS earned through LP staking compared to staking GHST tokens directly? Staking LP tokens have the risk of [impermanent loss](/glossary#impermanent-loss). You are compensated for the increased risk you take.

Why is the GHST-USDC pool yielding 74 million FRENS a day? Những người gửi thanh khoản đầu tiên trên pool GHST-USDC của Quickswap đã lộn xộn tỷ lệ của các tài sản này. Bởi vậy nên khi có người gửi tiền vào quỹ thì họ sẽ nhận được lượng token LP có tí ti, như 0,0006 chẳng hạn. See this [tweet](https://twitter.com/coderdannn/status/1362423402871447554) for the lulz.

### Staking GHST-WETH

* Step 1: Go to [quickswap.exchange](https://quickswap.exchange/) and choose > Pools > Add Liquidity.

* Step 2: Deposit GHST and ETH equally into the GHST-ETH liquidity pool.

* Step 3: In return, you receive GHST-WETH LP tokens.

* Step 4: Take those LP tokens and stake them at [aavegotchi.com/stake-polygon](https://aavegotchi.com/stake-polygon)

* Step 5: In return, you earn FRENS points and you get stkGHST-WETH tokens

For every 1 GHST-ETH LP token staked in this way, you receive 12.08 million FRENS / Day (20% more than just staking GHST).

### Staking GHST-MATIC

* Step 1: Go to [sushi.com](https://sushi.com/) and enter the app

* Step 2: Add liquidity to the GHST-MATIC pool. In turn, you will receive GHST-MATIC LP Tokens

* Step 3: Take the GHST-MATIC LP Tokens and deposit them at the [Aavegotchi Staking Interface](https://aavegotchi.com/stake-polygon). You will receive stkGHST-MATIC receipt tokens after staking your LP tokens.

### Staking Cheatsheets!

If you prefer something more visual, check out our Staking Cheatsheets!

* GHST Staking and GHST-QUICK/GHST-USDC Staking

<img class = "bodyImage" src = "/staking/GHST-to-Matic-Cheatsheet.png" alt = "GHST to Matic Cheatsheet" />

### Staking Returns Table

The table below summarizes the staking returns (in terms of FRENS) in percentage against the baseline of staking GHST directly.

Do note that the Pixelcraft team may update the FRENS amount from time to time to balance the system.

table_stakingReturns

## Địa Chỉ Hợp Đồng Staking

The following table shows the various staking contract addresses on Polygon. The ghstStaking and stkGHSTQUICK contracts share the same contract address. Do check the contract address first before finalizing any transactions.

table_stakingContractAddresses

## FRENS Taask Force

From time to time, the FRENS emission rate does not automatically get updated when the price of the underlying tokens changes.

The [FRENS Taask Force](/frens-taask-force) has been setup to monitor and adjust the FRENS rates to keep it in check with the pre-determined rate.

## What's next?

So you've got some FRENS now eh? Head over to the [Tickets page](/tickets) to learn how to purchase tickets with FRENS and to participate in Raffles!