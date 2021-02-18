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
스테이킹을 하기 전엔 당연하게도 여러분의 손에 스테이킹할 GHST가 쥐어져 있어야 합니다. [GHST 토큰 페이지](/posts/ghst)에 관련 내용이 안내되어 있으니 선호하는 방식을 택하시길 바랍니다 :)

## 스테이킹 방법
GHST 토큰이 준비되셨다면, 이제 스테이킹할 시간입니다! 스테이킹은 현재 폴리곤(구 메틱 네트워크)에서 이루어지고 있습니다.

스테이킹 방법엔 크게 2가지가 있습니다 : (1) GHST를 바로 스테이킹하기 또는 (2) [Quickswap](/glossary#quickswap)에서 GHST-QUICK pool에 스테이킹하기

**중요 : 메인넷에서의 스테이킹은 현재 중단되었습니다!**

*참고 : 특별 판매(Pre-sale)에서의 GHST 토큰들은 현재 락업 상태이기 때문에 락업이 풀리기 전까지 스테이킹이 불가능합니다.*

### GHST 토큰을 직접 스테이킹하기

먼저 GHST토큰을 이더리움 메인넷에서 layer2 솔루션인 폴리곤으로 옮겨야 합니다.

이는 [Bridge to Polygon Interface](https://aavegotchi.com/bridge)를 통해 이루어집니다. 그리고 GHST토큰을 사용할 컨트랙트에 승인을 해야합니다.(일종의 승인 과정입니다.) 승인이 완료되면, 폴리곤으로 옮기길 원하는 GHST의 양을 input으로 설정해 트랜잭션을 진행합니다. 이더리움 상에서 GHST 거래가 확인이 되면 폴리곤에서 GHST 수량이 반영되기 까지는 대략 7 ~ 8분이 걸립니다. 입금된 GHST는 자동적으로 업데이트가 됩니다. 그러니 인내심을 갖고 기다려주시길 바랍니다!

그런 다음 메타마스크 상에서 wallet 잔액들이 보이도록 설정해줘야 합니다. 메타마스크에서의 폴리곤 네트워크 설정에 대한 상세한 안내를 원하시면 [Polygon Guide](/polygon)를 참고해주시길 바랍니다.

여러분의 메타마스크를 폴리곤에 연결하고 아베고치 댑에 있는 [폴리곤 스테이킹 페이지](https://aavegotchi.com/stake-matic)로 이동하시길 바랍니다. 그런 다음 폴리곤에 있는 GHST를 사용할 수 있도록 계약(트랜잭션)을 승인해주시길 바랍니다. 거래가 성사되면 원하는 양만큼의 GHST를 설정하여 스테이킹하시길 바랍니다! 굉장히 빠르죠! 스테이킹이 완료되었습니다!

*이런 방식으로 1 GHST를 스테이킹할 때마다 하루에 1FRENS를 받게 됩니다.*

### Quickswap에서 GHST-QUICK 풀에 스테이킹하기

GHST 토큰을 직접 스테이킹하는 것처럼 GHST토큰을 이더리움 메인넷에서 layer 2 솔루션인 폴리곤으로 옮기셔야 합니다.

메타마스크에서의 폴리곤 네트워크 설정에 대한 상세한 안내를 원하시면 [Polygon Guide](/polygon)를 참고해주시길 바랍니다. 이전이 완료되면 [폴리곤 유동성 이전 보상 포스팅](https://aavegotchi.medium.com/ghst-token-live-on-matic-100k-usd-liquidity-migration-incentives-announced-faq-2590daa25d73)에 나와있는 단계를 순차적으로 따라주시길 바랍니다.

1. [Quickswap](https://quickswap.exchange)에서 QUICK 토큰을 획득합니다. 가장 유동성 공급이 활발한 페어는 현재 QUICK-UNI, QUICK-WETH, 그리고 QUICK-USDC입니다.(quickswap의 유동성 상황에 따라 달라질 수 있는 지표입니다) 곧 GHST-QUICK 역시 pool에 추가될 것입니다.

2. Quickswap의 [GHST-QUICK 풀](https://aavegotchi.com/stake-matic)에 유동성을 공급하세요.

3. 2단계에서 LP토큰을 받게 됩니다. 이 LP 토큰을 [GHST-QUICK 스테이킹 풀](https://aavegotchi.com/stake-matic)에 예치를 하시고 stkGHST를 획득하세요

4. 마지막으로 GHST 스테이킹 컨트랙트에서의 stkGHST 토큰을 [ https://quickswap.exchange/#/quick](https://quickswap.exchange/#/quick)의 Quickswap 리워드 풀에 스테이킹 하시면 됩니다.

이제 여러분은 QUICK토큰과 FRENS를 모두 모을 수 있게 됩니다!

*이러한 방식으로 스테이킹된 GHST-QUICK LP 토큰 1개로 여러분은 매일 14FRENS를 받게 됩니다.*

왜 이렇게 스테이킹을 하게 되면 FRENS 포인트를 더 많이 모을 수 있는 것일까요? GHST-QUICK LP토큰을 예치하는 것은 [비영구적손실](/glossary#impermanent-loss)의 위험이 있습니다. 그렇기 때문에 GHST-QUICK 풀에 스테이킹을 한 분들의 리스크는 FRENS로 보상받게 되는 것입니다.

### 폴리곤에 GHST를 스테이킹 하는 방법!

아래의 그림을 통해 이전까지 함께 알아보았던 <a href=#staking-ghst-tokens-directly>GHST 토큰 스테이킹 방법</a>과 <a href=#staking-in-the-ghst-quick-pool-on-quickswap>GHST-QUICK 풀 스테이킹</a>, 이렇게 2가지의 스테이킹 방버을 한눈에 확인할 수 있습니다! (한국으로 번역된 그림을 확인하고 싶으시다면 [농사꾼의 연감](https://aavegotchikr.medium.com/%EB%86%8D%EC%82%AC%EA%BE%BC%EC%9D%98-%EC%97%B0%EA%B0%90-ghst-%EB%A7%88%EC%9D%B4%EA%B7%B8%EB%A0%88%EC%9D%B4%EC%85%98-%EA%B0%80%EC%9D%B4%EB%93%9C-c28b64c8ad8d)를 확인해 주세요

<img class = "bodyImage" src = "/staking/GHST-to-Matic-Cheatsheet.png" alt = "GHST to Matic Cheatsheet" />

## 래플 티켓 구매하기

이제 충분한 FRENS가 준비되셨다면 [ 래플 티켓 판매점 ](https://aavegotchi.com/tickets)으로 이동하셔서 FRENS로 래플 티켓을 구매하세요.

FRENS와 달리 래플 티켓은 다른 지갑으로의 이동이 가능합니다. 그렇기 때문에 [마켓플레이스](/marketplace)에서 구매하거나 판매도 가능합니다.

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