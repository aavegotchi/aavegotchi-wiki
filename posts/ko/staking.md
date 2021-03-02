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
<li><a href=#staking-contract-addresses>Staking Contract Addresses</a></li>
<li><a href=#purchasing-raffle-tickets>Purchasing Raffle Tickets</a></li>
<li><a href=#entering-raffles>Entering Raffles</a></li>
<li><a href=#past-raffles-statistics>Past Raffles Statistics</a></li>
<li><a href=#more-resources>More Resources</a></li>
</ol>

</div>

## GHST 구매하기
스테이킹을 하기 전엔 당연하게도 여러분의 손에 스테이킹할 GHST가 쥐어져 있어야 합니다. [GHST 토큰 페이지](/posts/ghst)에 관련 내용이 안내되어 있으니 선호하는 방식을 택하시길 바랍니다 :)

## 스테이킹 방법
GHST 토큰이 준비되셨다면, 이제 스테이킹할 시간입니다! 스테이킹은 현재 폴리곤(구 메틱 네트워크)에서 이루어지고 있습니다.

There are two ways to stake: (1) staking GHST tokens directly, and/or (2) staking [QuickSwap](/glossary#quickswap) LP tokens.

**Important: Staking on Mainnet has been discontinued! Please unstake and restake on Polygon.**

*참고 : 특별 판매(Pre-sale)에서의 GHST 토큰들은 현재 락업 상태이기 때문에 락업이 풀리기 전까지 스테이킹이 불가능합니다.*

### GHST 토큰을 직접 스테이킹하기

먼저 GHST토큰을 이더리움 메인넷에서 layer2 솔루션인 폴리곤으로 옮겨야 합니다.

이는 [Bridge to Polygon Interface](https://aavegotchi.com/bridge)를 통해 이루어집니다. 그리고 GHST토큰을 사용할 컨트랙트에 승인을 해야합니다.(일종의 승인 과정입니다.) 승인이 완료되면, 폴리곤으로 옮기길 원하는 GHST의 양을 input으로 설정해 트랜잭션을 진행합니다. 이더리움 상에서 GHST 거래가 확인이 되면 폴리곤에서 GHST 수량이 반영되기 까지는 대략 7 ~ 8분이 걸립니다. 입금된 GHST는 자동적으로 업데이트가 됩니다. 그러니 인내심을 갖고 기다려주시길 바랍니다!

그런 다음 메타마스크 상에서 wallet 잔액들이 보이도록 설정해줘야 합니다. 메타마스크에서의 폴리곤 네트워크 설정에 대한 상세한 안내를 원하시면 [Polygon Guide](/polygon)를 참고해주시길 바랍니다.

여러분의 메타마스크를 폴리곤에 연결하고 아베고치 댑에 있는 [폴리곤 스테이킹 페이지](https://aavegotchi.com/stake-polygon)로 이동하시길 바랍니다. 그런 다음 폴리곤에 있는 GHST를 사용할 수 있도록 계약(트랜잭션)을 승인해주시길 바랍니다. 거래가 성사되면 원하는 양만큼의 GHST를 설정하여 스테이킹하시길 바랍니다! 굉장히 빠르죠! 스테이킹이 완료되었습니다!

*이런 방식으로 1 GHST를 스테이킹할 때마다 하루에 1FRENS를 받게 됩니다.*

### Staking QuickSwap LP tokens

Currently, there are only 2 QuickSwap LP tokens that could be staked for FRENS:

* QuickSwap GHST-QUICK LP token
* QuickSwap GHST-USDC LP token

The first step involves transferring funds from Ethereum Mainnet to Polygon, a layer 2 solution.

메타마스크에서의 폴리곤 네트워크 설정에 대한 상세한 안내를 원하시면 [Polygon Guide](/polygon)를 참고해주시길 바랍니다. Next, use the [Aavegotchi Bridge](https://aavegotchi.com/bridge) to transfer GHST and/or other assets to Polygon. The [maTokens Guide](/matokens) will show you how this is done.

Next, become a liquidity provider on either or both the [GHST-QUICK](https://info.quickswap.exchange/pair/0x8b1fd78ad67c7da09b682c5392b65ca7caa101b9) and [GHST-USDC](https://info.quickswap.exchange/pair/0x096c5ccb33cfc5732bcd1f3195c13dbefc4c82f4) pools on [QuickSwap](https://quickswap.exchange). You will receive LP tokens in return for your liquidity provision. For people who are interested in staking in the GHST-QUICK pool, you can get some QUICK token from [QuickSwap](https://quickswap.exchange). The most liquid pairs are currently QUICK-UNI, QUICK-WETH, QUICK-USDC, and GHST-QUICK.

Take these LP tokens and stake them in the [Aavegotchi Staking Interface](https://aavegotchi.com/stake-polygon) to get stkGHST receipt tokens. For the GHST-QUICK and GHST-USDC pools, these stkGHST receipt tokens are named stkGHST-QUICK and stkGHST-USDC, respectively.

For the stkGHST-QUICK receipt token **only**, you can stake them into the Quickswap Rewards pool at [https://quickswap.exchange/#/quick](https://quickswap.exchange/#/quick) to earn additional QUICK rewards. The Aavegotchi team is requesting for a similar incentive to be offered for the stkGHST-USDC receipt token.

*For every 1 GHST-QUICK LP token staked in this way, you receive 23 FRENS / Day.*

*For every 1 GHST-USDC LP token staked in this way, you receive 74 million FRENS / Day.*

Why is there a huge difference in the number of FRENS earned through LP staking compared to staking GHST tokens directly? Staking LP tokens have the risk of [impermanent loss](/glossary#impermanent-loss). You are compensated for the increased risk you take.

Why is the GHST-USDC pool yielding 74 million FRENS a day? An early depositor in the GHST-USDC pool on QuickSwap messed up the ratio between the assets. Hence, when depositors add to the pool, they receive tiny amounts of LP tokens, like 0.00006. See this [tweet](https://twitter.com/coderdannn/status/1362423402871447554) for the lulz.

### 폴리곤에 GHST를 스테이킹 하는 방법!

The following diagram shows the two different routes to staking on Polygon that we have discussed above (<a href=#staking-ghst-tokens-directly>Staking GHST tokens</a> ; <a href=#staking-quickswap-lp-tokens>Staking in the GHST-QUICK pool</a>).

<img class = "bodyImage" src = "/staking/GHST-to-Matic-Cheatsheet.png" alt = "GHST to Matic Cheatsheet" />

## Staking Contract Addresses

The following table shows the various staking contract addresses on Polygon. The ghstStaking and stkGHSTQUICK contracts share the same contract address. Do check the contract address first before finalizing any transactions.

table_stakingContractAddresses

## Purchasing Raffle Tickets

Once you have enough FRENS, head to the [Shop Bulk Buy user interface](https://aavegotchi.com/tickets) to purchase raffle tickets with FRENS.

Unlike FRENS, Raffle Tickets can be transferred from one wallet to another. They can also be bought/sold on [marketplaces](/marketplace).

There are six different categories of raffle tickets, ranging from Common (least valuable) to Godlike (most valuable):

table_RaffleTickets

Blog post: \[Stake GHST, Make FRENS Live on Ethereum Mainnet!\]( https://aavegotchi.medium.com/stake-ghst-make-frens-live-on-ethereum-mainnet-658bd507d67b)

Users are allowed to buy tickets belonging to different categories in a single transaction. You do **not** need to create separate buy transactions for each category of raffle ticket.

## Entering Raffles

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

## Past Raffles Statistics
Knowing how to stake FRENS and participate in Raffles is good, you say. But what about the numbers? What are the probabilities of winning a wearable based on past raffles? Visit the [Raffles Statistics page](/raffles-stats) for the historical data.

## More Resources

- [Aavegotchi Raffles — A FRENLY Guide](https://aavegotchi.medium.com/aavegotchi-raffles-a-frenly-guide-66f624c9bc60)
- [Aavegotchi ❤ Chainlink Raffle — You Just WON](https://aavegotchi.medium.com/aavegotchi-chainlink-raffle-you-just-won-af87712f1018)
- [Anon and the Green Ticket](https://aavegotchi.medium.com/anon-and-the-green-ticket-5776969b3a69)
