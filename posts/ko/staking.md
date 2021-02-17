---
author: Nick Mudge
date: '2020-04-23T07:00:00.000Z'
title: '스테이킹'
description: 'GHST를 스테이킹하고 FRENS를 모으세요!'
contributors:
  - "mudgen"
  - "unintelligent-nerd"
---


<div class="headerImageContainer">
<img class="headerImage" src="/staking/staking.png">
<p class="headerImageText">GHST를 스테이킹하고 FRENS를 모으세요!</p>
</div>

스테이킹이란 보상을 대가로 여러분의 암호화폐를 락업하는 과정을 의미합니다. 이는 아베고치에서도 결코 다르지 않습니다. 네이티브 토큰인 GHST를 스테이킹 컨트랙트에 스테이킹 할 수 있고 FRENS를 모을 수 있습니다.

FRENS는 아베고치 스테이킹 컨트랙트 내에서 교환되는 자산이 아닙니다. FRENS는 달리 구매할 방도조차 없습니다. 오직 아베고치 프로젝트에 대한 기여로 스테이커(staker)에게 돌아가는 보상입니다.

스테이커들은 자신의 FRENS를 래플 티켓으로 전환할 수 있게 되는데, 래플 티켓을 이용해 주기적인 래플(일종의 복권)에 참여하여 당첨에 도전할 수 있습니다.

그렇다면 이제 GHST를 어떻게 스테이킹하고 FRENS로 어떻게 당첨이 될 수 있는지 함께 알아봅시다.

<div class="contentsBox">

** 목차 **

<ol>
<li><a href=#purchasing-ghst>GHST 구매하기</a></li>
<li><a href=#how-to-stake>스테이킹 방법</a></li>
<li><a href=#purchasing-raffle-tickets>래플 티켓 구매하기</a></li>
<li><a href=#entering-raffles>래플 참여하기</a></li>
<li><a href=#past-raffles-statistics>지난 래플 행사에 관한 통계치</a></li>
<li><a href=#more-resources>더 많은 자료들!</a></li>
</ol>

</div>

## GHST 구매하기
스테이킹을 하기 전엔 당연하게도 여러분의 손에 스테이킹할 GHST가 쥐어져 있어야 합니다. Our [GHST token page](/posts/ghst) covers the various ways in which you can get yourself some.

## 스테이킹 방법
Once you have some GHST tokens, it is time to stake them! Staking takes place on Polygon (formerly Matic Network).

There are two ways to stake: (1) staking GHST tokens directly, and/or (2) staking in the GHST-QUICK pool on [QuickSwap](/glossary#quickswap).

**Important: Staking on Mainnet has been discontinued!**

*Note: Pre-sale GHST tokens cannot be staked until they are unlocked.*

### Staking GHST tokens directly

First, you have to transfer your GHST tokens from Ethereum Mainnet to Polygon, a layer 2 solution.

This is done by using the [Bridge to Polygon Interface](https://aavegotchi.com/bridge). Approve the contract to use your GHST tokens. Once that transaction goes through, input the amount of GHST you would like to transfer to Polygon. Once your transaction has confirmed on Ethereum, it takes roughly 7-8 minutes for your balance to reflect on Polygon. Your balance will update automatically. Please be patient!

Next, you have to configure your Metamask to display your wallet balance. Do refer to this [Polygon Guide](/polygon) for detailed instructions on how one can configure their Metamask wallet to include Polygon.

Connect your Metamask to Polygon and head over to the [Polygon Staking Page](https://aavegotchi.com/stake-matic) on the Aavegotchi DApp. Approve the contract to use your GHST tokens on Polygon. Once the transaction goes through, input the amount of GHST you would like to deposit. Presto! You are done!

*For every 1 GHST staked in this way, you receive 1 FRENS / Day.*

### Staking in the GHST-QUICK pool on QuickSwap

Similar to staking GHST tokens directly, you have to transfer GHST tokens from Ethereum Mainnet to Polygon, a layer 2 solution.

Do refer to this [Polygon Guide](/polygon) for detailed instructions on how one can configure their Metamask wallet to include Polygon. Once that is done, follow the subsequent steps found in the [Polygon Liquidity Migration Incentives post](https://aavegotchi.medium.com/ghst-token-live-on-matic-100k-usd-liquidity-migration-incentives-announced-faq-2590daa25d73).

1. Get some QUICK token from [QuickSwap](https://quickswap.exchange). The most liquid pairs are currently QUICK-UNI, QUICK-WETH and QUICK-USDC. Soon GHST-QUICK will also be an option.

2. Become a liquidity provider in the GHST-QUICK Pool on Quickswap.

3. Take your LP tokens received from Step 2 and stake them into the GHST-QUICK Staking Pool to get stkGHST.

4. Finally, take the stkGHST receipt tokens emitted from the GHST Staking Contract and stake them into the Quickswap Rewards pool at [https://quickswap.exchange/#/quick](https://quickswap.exchange/#/quick).

Now you are earning QUICK and FRENS!

*For every 1 GHST-QUICK LP token staked in this way, you receive 14 FRENS / Day.*

Why the huge difference in the number of FRENS earned through this method? Staking GHST-QUICK LP tokens has the risk of [impermanent loss](/glossary#impermanent-loss). You are compensated for the increased risk you take.

### Staking GHST on Polygon Cheetsheet!

The following diagram shows the two different routes to staking on Polygon that we have discussed above (<a href=#staking-ghst-tokens-directly>Staking GHST tokens</a> ; <a href=#staking-in-the-ghst-quick-pool-on-quickswap>Staking in the GHST-QUICK pool</a>).

<img class = "bodyImage" src = "/staking/GHST-to-Matic-Cheatsheet.png" alt = "GHST to Matic Cheatsheet" />

## 래플 티켓 구매하기

Once you have enough FRENS, head to the [Shop Bulk Buy user interface](https://aavegotchi.com/tickets) to purchase raffle tickets with FRENS.

Unlike FRENS, Raffle Tickets can be transferred from one wallet to another. They can also be bought/sold on [marketplaces](/marketplace).

There are six different categories of raffle tickets, ranging from Common (least valuable) to Godlike (most valuable):

table_RaffleTickets

Blog post: \[Stake GHST, Make FRENS Live on Ethereum Mainnet!\]( https://aavegotchi.medium.com/stake-ghst-make-frens-live-on-ethereum-mainnet-658bd507d67b)

Users are allowed to buy tickets belonging to different categories in a single transaction. You do **not** need to create separate buy transactions for each category of raffle ticket.

## 래플 참여하기

A raffle runs for a period of time. During this period, you can submit your raffle tickets for a chance to win prizes. Submitting raffle tickets into the draw involves an Ethereum transaction; it is not done automatically. If you have many different categories of raffle tickets and wish to enter them together as a bundle, this is also possible. You do **not** need to create separate transactions for entering each category of raffle tickets into the raffle.

When the raffle is over, you can find out what prizes you have won and can claim them.

If you choose not to participate in a given Raffle, you do not need to do anything with your raffle tickets. You can also accumulate raffle tickets for subsequent raffles if you like to do so.

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

## 지난 래플 행사에 관한 통계치
Knowing how to stake FRENS and participate in Raffles is good, you say. But what about the numbers? What are the probabilities of winning a wearable based on past raffles? Visit the [Raffles Statistics page](/raffles-stats) for the historical data.

## 더 많은 자료들!

- [Aavegotchi Raffles — A FRENLY Guide](https://aavegotchi.medium.com/aavegotchi-raffles-a-frenly-guide-66f624c9bc60)
- [Aavegotchi ❤ Chainlink Raffle — You Just WON](https://aavegotchi.medium.com/aavegotchi-chainlink-raffle-you-just-won-af87712f1018)
- [Anon and the Green Ticket](https://aavegotchi.medium.com/anon-and-the-green-ticket-5776969b3a69)