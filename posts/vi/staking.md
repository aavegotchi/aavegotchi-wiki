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
Once you have some GHST tokens, it is time to stake them! Staking takes place on Polygon (formerly Matic Network).

There are two ways to stake: (1) staking GHST tokens directly, and/or (2) staking in the GHST-QUICK pool on [QuickSwap](/glossary#quickswap).

**Important: Staking on Mainnet has been discontinued!**

*Note: Pre-sale GHST tokens cannot be staked until they are unlocked.*

### Staking GHST tokens directly

First, you have to transfer your GHST tokens from Ethereum Mainnet to Polygon, a layer 2 solution.

This is done by using the [Bridge to Polygon Interface](https://aavegotchi.com/bridge). Approve the contract to use your GHST tokens. Once that transaction goes through, input the amount of GHST you would like to transfer to Polygon. Once your transaction has confirmed on Ethereum, it takes roughly 7-8 minutes for your balance to reflect on Polygon. Your balance will update automatically. Please be patient!

Next, you have to configure your Metamask to display your wallet balance. Do refer to this [Polygon Guide](/polygon) for detailed instructions on how one can configure their Metamask wallet to include Polygon.

Connect your Metamask to Polygon and head over to the [Polygon Staking Page](https://aavegotchi.com/stake-matic) on the Aavegotchi DApp. Approve the contract to use your GHST tokens on Polygon. Once the transaction goes through, input the amount of GHST you would like to deposit. Presto! Xong rồi bạn êi!

*For every 1 GHST staked in this way, you receive 1 FRENS / Day.*

### Staking in the GHST-QUICK pool on QuickSwap

Similar to staking GHST tokens directly, you have to transfer GHST tokens from Ethereum Mainnet to Polygon, a layer 2 solution.

Do refer to this [Polygon Guide](/polygon) for detailed instructions on how one can configure their Metamask wallet to include Polygon. Once that is done, follow the subsequent steps found in the [Polygon Liquidity Migration Incentives post](https://aavegotchi.medium.com/ghst-token-live-on-matic-100k-usd-liquidity-migration-incentives-announced-faq-2590daa25d73).

1. Mua một ít token QUICK từ [QuickSwap](https://quickswap.exchange). Cặp giao dịch có thanh khoản cao nhất hiện tại là QUICK-UNI, QUICK-WETH và QUICK-USDC. GHST-QUICK sẽ sớm được thêm vào.

2. Hãy trở thành một người cung cấp thanh khoản cho Quỹ GHST-QUICK trên Uniswap.

3. Take your LP tokens received from Step 2 and stake them into the [GHST-QUICK Staking Pool](https://aavegotchi.com/stake-matic) to get stkGHST.

4. Cuối cùng, dùng token stkGHST từ Hợp Đồng Staking GHST và stake chúng vào Quỹ Giải Thưởng Quickswap tại [https://quickswap.exchange/#/quick](https://quickswap.exchange/#/quick).

Now you are earning QUICK and FRENS!

*For every 1 GHST-QUICK LP token staked in this way, you receive 14 FRENS / Day.*

Why the huge difference in the number of FRENS earned through this method? Staking GHST-QUICK LP tokens has the risk of [impermanent loss](/glossary#impermanent-loss). You are compensated for the increased risk you take.

### Staking GHST on Polygon Cheetsheet!

The following diagram shows the two different routes to staking on Polygon that we have discussed above (<a href=#staking-ghst-tokens-directly>Staking GHST tokens</a> ; <a href=#staking-in-the-ghst-quick-pool-on-quickswap>Staking in the GHST-QUICK pool</a>).

<img class = "bodyImage" src = "/staking/GHST-to-Matic-Cheatsheet.png" alt = "GHST to Matic Cheatsheet" />

## Mua vé Raffle

Once you have enough FRENS, head to the [Shop Bulk Buy user interface](https://aavegotchi.com/tickets) to purchase raffle tickets with FRENS.

Unlike FRENS, Raffle Tickets can be transferred from one wallet to another. They can also be bought/sold on [marketplaces](/marketplace).

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

[Prizes on OpenSea](https://opensea.io/activity/aavegotchi-wearable-vouchers)

Each prize will be allocated to a randomly drawn raffle ticket, where each ticket has an equal chance of winning.

You can improve your probability of winning by:
* Tham gia với nhiều vé
* Tham gia vào những loại vé raffle có tỷ lệ thắng giải cao (ví dụ như Common)

Random numbers for the Raffle prize winners are generated through Chainlink's [on-chain verifiable randomness generator](https://blog.chain.link/verifiable-random-functions-vrf-random-number-generation-rng-feature/).

The prizes, which are Wearable Vouchers, could be exchanged 1:1 for the actual Aavegotchi wearable once the game launches. This will take place at the [Aavegotchi Shop](https://aavegotchi.com/shop).

## Dự Liệu Về Sự Kiện Rafle Trong Quá Khứ
Knowing how to stake FRENS and participate in Raffles is good, you say. But what about the numbers? What are the probabilities of winning a wearable based on past raffles? Visit the [Raffles Statistics page](/raffles-stats) for the historical data.

## Thêm nguồn

- [Aavegotchi Raffles — Một Bài Hướng Dẫn FRENLY](https://aavegotchi.medium.com/aavegotchi-raffles-a-frenly-guide-66f624c9bc60)
- [Aavegotchi ❤ Chainlink Raffle — Chỉ Có Thắng Thôi](https://aavegotchi.medium.com/aavegotchi-chainlink-raffle-you-just-won-af87712f1018)
- [Anon và Tấm Vé Xanh Lục](https://aavegotchi.medium.com/anon-and-the-green-ticket-5776969b3a69)