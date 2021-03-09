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
<li><a href=#staking-contract-addresses>스테이킹 컨트랙트 주소</a></li>
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

스테이킹 방법엔 크게 2가지가 있습니다 : (1) GHST를 바로 스테이킹하기 또는 (2) [Quickswap](/glossary#quickswap)에서 GHST-QUICK pool에서의 LP 토큰 스테이킹하기

**중요 : 현재 이더리움에서의 스테이킹은 현재 중단되었습니다! 스테이킹을 해제하고 폴리곤에서 다시 스테이킹 해주세요.**

*참고 : 특별 판매(Pre-sale)에서의 GHST 토큰들은 현재 락업 상태이기 때문에 락업이 풀리기 전까지 스테이킹이 불가능합니다.*

### GHST 토큰을 직접 스테이킹하기

먼저 GHST토큰을 이더리움 메인넷에서 layer2 솔루션인 폴리곤으로 옮겨야 합니다.

이는 [Bridge to Polygon Interface](https://aavegotchi.com/bridge)를 통해 이루어집니다. 그리고 GHST토큰을 사용할 컨트랙트에 승인을 해야합니다.(일종의 승인 과정입니다.) 승인이 완료되면, 폴리곤으로 옮기길 원하는 GHST의 양을 input으로 설정해 트랜잭션을 진행합니다. 이더리움 상에서 GHST 거래가 확인이 되면 폴리곤에서 GHST 수량이 반영되기 까지는 대략 7 ~ 8분이 걸립니다. 입금된 GHST는 자동적으로 업데이트가 됩니다. 그러니 인내심을 갖고 기다려주시길 바랍니다!

그런 다음 메타마스크 상에서 wallet 잔액들이 보이도록 설정해줘야 합니다. 메타마스크에서의 폴리곤 네트워크 설정에 대한 상세한 안내를 원하시면 [Polygon Guide](/polygon)를 참고해주시길 바랍니다.

여러분의 메타마스크를 폴리곤에 연결하고 아베고치 댑에 있는 [폴리곤 스테이킹 페이지](https://aavegotchi.com/stake-polygon)로 이동하시길 바랍니다. 그런 다음 폴리곤에 있는 GHST를 사용할 수 있도록 계약(트랜잭션)을 승인해주시길 바랍니다. 거래가 성사되면 원하는 양만큼의 GHST를 설정하여 스테이킹하시길 바랍니다! 굉장히 빠르죠! 스테이킹이 완료되었습니다!

*이런 방식으로 1 GHST를 스테이킹할 때마다 하루에 1FRENS를 받게 됩니다.*

### Quickswap LP 토큰 스테이킹하기

현재 2개의 Quickswap LP 토큰 스테이킹을 통해 FRENS를 모을 수 있습니다.

* QuickSwap GHST-QUICK LP token
* QuickSwap GHST-USDC LP token

우선 이더리움에서 layer2 솔루션인 폴리곤으로 여러분의 자금을 이전하셔야 합니다.

메타마스크에서의 폴리곤 네트워크 설정에 대한 상세한 안내를 원하시면 [Polygon Guide](/polygon)를 참고해주시길 바랍니다. 그런 다음, [Aavegotchi Bridge](https://aavegotchi.com/bridge)를 이용하여 GHST와 다른 자산들을 폴리곤으로 이동시켜야 합니다. [maTokens Guide](/matokens)를 통해 참여 방법을 확인할 수 있습니다.

이제 [Quickswap](https://quickswap.exchange)에서 [GHST-QUICK](https://info.quickswap.exchange/pair/0x8b1fd78ad67c7da09b682c5392b65ca7caa101b9) 또는 [GHST-USDC](https://info.quickswap.exchange/pair/0x096c5ccb33cfc5732bcd1f3195c13dbefc4c82f4)풀에 유동성 공급자가 되어야 합니다. 유동성을 공급하신 후에 보상으로 LP 토큰을 수령하게 됩니다. GHST-QUICK 풀에 스테이킹하는 것에 관심있는 분들은 [QuickSwap](https://quickswap.exchange)에서 QUICK 토큰도 함께 보상으로 받을 수 있습니다. 가장 유동성 공급이 활발한 페어는 현재 QUICK-UNI, QUICK-WETH, QUICK-USDC, 그리고 GHST-QUICK입니다.(quickswap의 유동성 상황에 따라 달라질 수 있는 지표입니다)

LP 토큰을 이용해 [ Aavegotchi Staking 페이지](https://aavegotchi.com/stake-polygon)에서 LP 토큰을 스테이킹하면 stkGHST 토큰을 수령하게 됩니다. 이처럼 GHST-QUICK 풀과 GHST-USDC 풀에선 각각 stkGHST-QUICK, stkGHST-USDC라는 stkGHST 토큰을 받게 됩니다.

stkGHST-QUICK 토큰은 오직 추가적인 QUICK 보상을 받기 위해  [https://quickswap.exchange/#/quick](https://quickswap.exchange/#/quick)의 Quickswap 보상 풀에 스테이킹을 하는 용도로만 사용이 됩니다. 현재 Aavegotchi 팀에서는 stkGHST-USDC 토큰을 추가적인 QUICK 보상 수령에도 이용할 수 있도록 Quickswap 측에 요청하고 있습니다.

*For every 1 GHST-QUICK LP token staked in this way, you receive 23 FRENS / Day (33% more than just staking GHST).*

*For every 1 GHST-USDC LP token staked in this way, you receive 74 million FRENS / Day (10% more than just staking GHST).*

그렇다면 GHST 토큰을 바로 스테이킹하는 것과 LP 토큰을 통해 FRENS를 얻는 방식에는 어떠한 큰 차이가 있을까요?<br> (상당히 이상하지 않으신가요? 아래에 그에 대한 이유가 나와있으니 계속 읽어주세요!)<br> LP토큰을 스테이킹하는 것은 [비영구적손실](/glossary#impermanent-loss)의 위험이 있습니다. 따라서 리스크에 대한 보상이 QUICK으로 주어지는 것입니다.

그렇다면! 왜 GHST-USDC 풀은 하루에 7,400만개의 FRENS를 만들어내는 것일까요? Quickswap의 GHST-USDC 풀의 초기 스테이킹 참여자들이 자산 간의 비율을 엉망으로 만들었기 때문입니다. 따라서, 스테이커(depostiors)들은 풀에 유동성을 공급할 때, 0.00006 정도되는 양의 LP 토큰을 수령합니다. 이에 대해 궁금하시다면 다음의 [트윗](https://twitter.com/coderdannn/status/1362423402871447554)을 참고해주세요 :)

### 폴리곤에 GHST를 스테이킹 하는 방법!

아래의 그림을 통해 이전까지 함께 알아보았던 <a href=#staking-ghst-tokens-directly>GHST 토큰 스테이킹 방법</a>과 <a href=#staking-quickswap-lp-tokens>GHST-QUICK 풀 스테이킹</a>, 이렇게 2가지의 스테이킹 방법을 한눈에 확인할 수 있습니다! (한국으로 번역된 그림을 확인하고 싶으시다면 [ 농사꾼의 연감](https://aavegotchikr.medium.com/%EB%86%8D%EC%82%AC%EA%BE%BC%EC%9D%98-%EC%97%B0%EA%B0%90-ghst-%EB%A7%88%EC%9D%B4%EA%B7%B8%EB%A0%88%EC%9D%B4%EC%85%98-%EA%B0%80%EC%9D%B4%EB%93%9C-c28b64c8ad8d) 을 확인해 주세요

<img class = "bodyImage" src = "/staking/GHST-to-Matic-Cheatsheet.png" alt = "GHST to Matic Cheatsheet" />

## 스테이킹 컨트랙트 주소

다음의 표를 통해 Polygon에서의 여러 스테이킹 컨트랙트를 확인할 수 있습니다. 이때, ghstStaking, stkGHSTQUICK 컨트랙트는 같은 컨트랙트 주소를 공유합니다. 트랜잭션을 완료하기 전에 먼저 컨트랙트 주소를 꼭 확인해주세요!

표_staking 컨트랙트 주소

## 래플 티켓 구매하기

FRENS가 충분히 준비되셨다면, [Shop Bulk Buy user interface](https://aavegotchi.com/tickets)로 이동하셔서 FRENS로 래플 티켓을 구하시면 됩니다.

FRENS와 달리, 래플 티켓은 다른 지갑으로의 이동이 가능합니다. 즉 [marketplace](/marketplace)에서 구매/판매 등의 거래가 가능하다는 것입니다.

래플 티켓에는 제일 낮은 등급인 Common에서부터 제일 높은 등급인 Godlike까지 총 6개의 등급이 있습니다.

표_ 래플 티켓

미디엄 포스트: [ [Stake GHST, Make FRENS Live on Ethereum Mainnet!]](https://aavegotchi.medium.com/stake-ghst-make-frens-live-on-ethereum-mainnet-658bd507d67b)

사용자들은 한번의 트랜잭션에서 여러 등급의 티켓에 대한 거래가 가능합니다. 그렇기 때문에 각 등급의 래플 티켓을 구매할 때 **각각의 트랜잭션을 만드실 필요는 없습니다.**

## 래플 참여하기

래플은 일정 기간동안 이루어집니다. 이 기간에 여러분은 래플 티켓을 제출하여 상품을 노릴 수 있습니다. 래플 티켓을 추첨함에 넣는 것은 이더리움 상에서 일어나는 트랙잭션이기 때문에 자동적으로 이루어지지 않습니다. 만약 다양한 등급의 래플 티켓을 한번에 추첨함에 넣고 싶으시다면, 걱정하실 필요가 없습니다. 이것 역시 가능합니다. 각각의 래플 티켓에 대해 일일이 서로 다른 트랜잭션을 생성할 필요가 **전혀** 없습니다.

래플이 종료된 후 당첨된 상품을 확인할 수 있고 수령에 대한 최종 승인도 가능합니다.

만약 래플에 참여하지 않기로 했다면 래플 티켓으로 뭔가를 하실 필요가 전혀 없습니다. 그저 추후에 있을 래플에 대비해 티켓을 모을 수 있습니다.

예를 들어 체인링크를 주제로한 첫번째 래플을 살펴보겠습니다. 아래는 당시 래플에서의 상품들에 대한 내용입니다.

<img class = "bodyImage" src = "/staking/link-raffle-prizes.png" alt = "Aavegotchi Chainlink-theme Raffle Prizes" />

총 6010개의 상품들이 래플에서 제공되었습니다.

[Opensea에서 거래중인 상품들을 확인할 수 있습니다 :)](https://opensea.io/activity/aavegotchi-wearable-vouchers)

각 상품들은 무작위로 뽑힌 래플 티켓의 소유자에게 주어지게 되며, 같은 등급 티켓들의 당첨확률은 모두 동일합니다.

그렇기 때문에 다음과 같은 방법을 통해 수상 확률을 높일 수 있습니다.
* 여러 티켓을 제출하기
* Common 등급과 같은 보다 많은 상품들이 준비된 등급의 티켓을 준비하기

래플에서의 수상자 추첨과 관련된 수치들은 온체인 상에서 [체인링크의 랜덤 생성기(VRF)](https://blog.chain.link/verifiable-random-functions-vrf-random-number-generation-rng-feature/)를 통해 생성됩니다.

그리고 게임이 출시되면 상품들, 즉 wearable 상품권은 아베고치의 wearalbe과 1:1로 교환될 것입니다. 관련 활동들은 [아베고치 샵](https://aavegotchi.com/shop)에서 이루어질 예정입니다.

## 지난 래플 행사에 관한 통계치
FRENS를 모으고 래플에 참여하는 방법에 함께 알아보았습니다. 하지만 이에 대한 실질적인 통계치는 어떨까요? 과거의 래플 행사들을 미루어 볼 때 래플에서 wearable을 받을 수 있는 확률은 얼마나 될까요? 궁금하신 분들은 [래플 통계](/raffles-stats)를 통해 과거의 데이터를 확인해보세요!

## 더 많은 자료들!

- [아베고치 래플에 대한 가이드](https://aavegotchi.medium.com/aavegotchi-raffles-a-frenly-guide-66f624c9bc60)
- [아베고치 X 체인링크 래플 - 여러분도 참여하셨죠?!](https://aavegotchi.medium.com/aavegotchi-chainlink-raffle-you-just-won-af87712f1018)
- [Anon! 그리고 Green Ticket](https://aavegotchi.medium.com/anon-and-the-green-ticket-5776969b3a69)
