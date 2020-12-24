---
author: Nick Mudge
date: '2020-04-23T07:00:00.000Z'
title: 'Staking'
description: 'Stake GHST, Make FRENS'
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
<li><a href=#more-resources>Thêm nguồn</a></li>
</ol>

</div>

## Mua GHST
Đầu tiên, bạn cần sở hữu một vài token GHST để stake. [Trang token GHST](/posts/ghst) của bọn mình cung cấp nhiều cách thức để bạn có thể tự mình sở hữu chúng.

## Cách Stake
Once you have some GHST tokens, it is time to stake them!

There are two ways to stake: (1) staking GHST tokens, and/or (2) staking Uniswap GHST-ETH LP tokens.

*Note: Pre-sale GHST tokens cannot be staked until they are unlocked.*

### Staking GHST tokens
This is the most straightforward way to stake GHST tokens. Head over to the [staking user interface](https://aavegotchi.com/stake). It will look like the image below.

<img class = "bodyImage" src = "/staking/staking-interface.png" alt = "aavegotchi staking" />

Select "Stake on Mainnet" and you will be presented with another page with two boxes. The box on the left will be titled "Stake GHST Token" (see image below). If you are staking for the very first time, you have to click on the "Approve" button, which grants the Staking Contract access to your GHST tokens. Once the "Approve" transaction goes through, you can then key in the desired amount of GHST you would like to stake in the "Input amount" field. When you are done, hit the "Stake" button to initiate the staking process.

<img class = "bodyImage" src = "/staking/stake-ghst.png" alt = "stake ghst token aavegotchi" />

*For every 1 GHST staked in this way, you receive 1 FRENS / Day.*

### Staking Uniswap GHST-ETH LP tokens
A second, and more complicated, method is to stake the Uniswap GHST-ETH Liquidity Provider (LP) tokens. To do this, you have to have both GHST tokens and ETH in your wallet. Head over to the [GHST-ETH Uniswap pool](https://app.uniswap.org/#/add/0x3f382dbd960e3a9bbceae22651e88158d2791550/ETH) to add liquidity for both tokens (see image below). Users have to contribute liquidity at a ratio of 50% GHST and 50% ETH to the pool. The amount of GHST and ETH required to acquire 1 GHST-ETH LP token varies based on the price of the pool token at the time.  In return for staking both GHST and ETH, users will receive the GHST-ETH LP token from Uniswap.

<img class = "bodyImage" src = "/staking/ghst-eth-uniswap-interface.png" alt = "GHST-ETH LP Tokens Aavegotchi staking" />

Once you have acquired your GHST-ETH LP token, head to the [staking user interface](https://aavegotchi.com/stake). It will look like the image below.

<img class = "bodyImage" src = "/staking/staking-interface.png" alt = "aavegotchi staking" />

Select "Stake on Mainnet" and you will be presented with another page with two boxes. The box on the right will be titled "Stake Uniswap GHST Token" (see image below). If you are staking for the very first time, you have to click on the "Approve" button, which grants the Staking Contract access to your GHST-ETH LP tokens. Once the "Approve" transaction goes through, you can then key in the desired amount of GHST-ETH LP tokens you would like to stake in the "Input amount" field. When you are done, hit the "Stake" button to initiate the staking process.

<img class = "bodyImage" src = "/staking/stake-uniswap-ghst-eth.png" alt = "stake uniswap ghst-eth LP token aavegotchi" />

*For every 1 GHST-ETH staked in this way, you receive 100 FRENS / Day.*

Why the huge difference in the number of FRENS earned through this method? Staking GHST-ETH LP tokens has the risk of [impermanent loss](/posts/glossary#impermanent-loss). You are compensated for the increased risk you take.

## Mua vé Raffle

Once you have enough FRENS, head to the [Shop Bulk Buy user interface](https://aavegotchi.com/bulk-buy) to purchase raffle tickets with FRENS.

Unlike FRENS, Raffle Tickets can be transferred from one wallet to another. They can also be bought/sold on marketplaces.

There are six different categories of raffle tickets, ranging from Common (least valuable) to Godlike (most valuable):

table_RaffleTickets

Blog post: \[Stake GHST, Make FRENS Live on Ethereum Mainnet!\]( https://aavegotchi.medium.com/stake-ghst-make-frens-live-on-ethereum-mainnet-658bd507d67b)


## Tham gia Raffle

A raffle runs for a period of time. During this period, you can submit your raffle tickets for a chance to win prizes. Submitting raffle tickets into the draw involves an Ethereum transaction; it is not done automatically. When the raffle is over, you can find out what prizes you have won and can claim them. If you choose not to participate in a given Raffle, you do not need to do anything with your raffle tickets. You can also accumulate raffle tickets for subsequent raffles if you like to do so.

As an example, the first raffle had a Chainlink Theme. Here were the prizes for the raffle:

<img class = "bodyImage" src = "/staking/link-raffle-prizes.png" alt = "Aavegotchi Chainlink-theme Raffle Prizes" />

A total of 6010 prizes.

[Prizes on OpenSea](https://opensea.io/activity/aavegotchi-wearable-vouchers)

Each prize will be allocated to a randomly drawn raffle ticket, where each ticket has an equal chance of winning.

You can improve your probability of winning by:
* Submitting multiple tickets
* Enter raffle ticket categories with more prizes (e.g. Common)

Random numbers for the Raffle prize winners are generated through Chainlink's [on-chain verifiable randomness generator](https://blog.chain.link/verifiable-random-functions-vrf-random-number-generation-rng-feature/).

The prizes, which are Wearable Vouchers, could be exchanged 1:1 for the actual Aavegotchi wearable once the game launches. This will take place at the [Aavegotchi Shop](https://aavegotchi.com/shop).

## Thêm nguồn

- [Aavegotchi Raffles — A FRENLY Guide](https://aavegotchi.medium.com/aavegotchi-raffles-a-frenly-guide-66f624c9bc60)
- [Aavegotchi ❤ Chainlink Raffle — You Just WON](https://aavegotchi.medium.com/aavegotchi-chainlink-raffle-you-just-won-af87712f1018)
- [Anon and the Green Ticket](https://aavegotchi.medium.com/anon-and-the-green-ticket-5776969b3a69)