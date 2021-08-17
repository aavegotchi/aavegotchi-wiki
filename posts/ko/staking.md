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

FRENS can be converted into Raffle Tickets or Drop Tickets:

* Raffle Tickets can be entered into periodic [Wearable Raffles](/tickets) to win [Wearables](/wearables).

* Drop Tickets can be entered into [NFT Raffles](/tickets) to win [Portals](/portals) and [REALM Parcels](/metaverse).

Continue reading to learn how to stake GHST.

<div class="contentsBox">

** 목차 **

<ol>
<li><a href=#purchasing-ghst>GHST 구매하기</a></li>
<li><a href=#how-to-stake>스테이킹 방법</a></li>
<li><a href=#staking-contract-addresses>스테이킹 컨트랙트 주소</a></li>
<li><a href=#what-s-next->What's next?</a></li>
</ol>

</div>

## GHST 구매하기
스테이킹을 하기 전엔 당연하게도 여러분의 손에 스테이킹할 GHST가 쥐어져 있어야 합니다. [GHST 토큰 페이지](/posts/ghst)에 관련 내용이 안내되어 있으니 선호하는 방식을 택하시길 바랍니다 :)

## 스테이킹 방법
GHST 토큰이 준비되셨다면, 이제 스테이킹할 시간입니다! 스테이킹은 현재 폴리곤(구 메틱 네트워크)에서 이루어지고 있습니다.

There are four ways to stake:

1. GHST

2. GHST-QUICK

3. GHST-USDC

4. GHST-ETH

**중요 : 현재 이더리움에서의 스테이킹은 현재 중단되었습니다! 스테이킹을 해제하고 폴리곤에서 다시 스테이킹 해주세요.**

*참고 : 특별 판매(Pre-sale)에서의 GHST 토큰들은 현재 락업 상태이기 때문에 락업이 풀리기 전까지 스테이킹이 불가능합니다.*

### GHST 토큰을 직접 스테이킹하기

먼저 GHST토큰을 이더리움 메인넷에서 layer2 솔루션인 폴리곤으로 옮겨야 합니다.

이는 [Bridge to Polygon Interface](https://aavegotchi.com/bridge)를 통해 이루어집니다. 그리고 GHST토큰을 사용할 컨트랙트에 승인을 해야합니다.(일종의 승인 과정입니다.) 승인이 완료되면, 폴리곤으로 옮기길 원하는 GHST의 양을 input으로 설정해 트랜잭션을 진행합니다. 이더리움 상에서 GHST 거래가 확인이 되면 폴리곤에서 GHST 수량이 반영되기 까지는 대략 7 ~ 8분이 걸립니다. 입금된 GHST는 자동적으로 업데이트가 됩니다. 그러니 인내심을 갖고 기다려주시길 바랍니다!

그런 다음 메타마스크 상에서 wallet 잔액들이 보이도록 설정해줘야 합니다. 메타마스크에서의 폴리곤 네트워크 설정에 대한 상세한 안내를 원하시면 [Polygon Guide](/polygon)를 참고해주시길 바랍니다.

여러분의 메타마스크를 폴리곤에 연결하고 아베고치 댑에 있는 [폴리곤 스테이킹 페이지](https://aavegotchi.com/stake-polygon)로 이동하시길 바랍니다. 그런 다음 폴리곤에 있는 GHST를 사용할 수 있도록 계약(트랜잭션)을 승인해주시길 바랍니다. 거래가 성사되면 원하는 양만큼의 GHST를 설정하여 스테이킹하시길 바랍니다! 굉장히 빠르죠! 스테이킹이 완료되었습니다!

*이런 방식으로 1 GHST를 스테이킹할 때마다 하루에 1FRENS를 받게 됩니다.*

### Staking GHST-QUICK and GHST-USDC

Staking GHST-QUICK and GHST-USDC follows the same steps.

우선 이더리움에서 layer2 솔루션인 폴리곤으로 여러분의 자금을 이전하셔야 합니다.

메타마스크에서의 폴리곤 네트워크 설정에 대한 상세한 안내를 원하시면 [Polygon Guide](/polygon)를 참고해주시길 바랍니다. 그런 다음, [Aavegotchi Bridge](https://aavegotchi.com/bridge)를 이용하여 GHST와 다른 자산들을 폴리곤으로 이동시켜야 합니다. [maTokens Guide](/matokens)를 통해 참여 방법을 확인할 수 있습니다.

이제 [Quickswap](https://quickswap.exchange)에서 [GHST-QUICK](https://info.quickswap.exchange/pair/0x8b1fd78ad67c7da09b682c5392b65ca7caa101b9) 또는 [GHST-USDC](https://info.quickswap.exchange/pair/0x096c5ccb33cfc5732bcd1f3195c13dbefc4c82f4)풀에 유동성 공급자가 되어야 합니다. 유동성을 공급하신 후에 보상으로 LP 토큰을 수령하게 됩니다. GHST-QUICK 풀에 스테이킹하는 것에 관심있는 분들은 [QuickSwap](https://quickswap.exchange)에서 QUICK 토큰도 함께 보상으로 받을 수 있습니다. 가장 유동성 공급이 활발한 페어는 현재 QUICK-UNI, QUICK-WETH, QUICK-USDC, 그리고 GHST-QUICK입니다.(quickswap의 유동성 상황에 따라 달라질 수 있는 지표입니다)

LP 토큰을 이용해 [ Aavegotchi Staking 페이지](https://aavegotchi.com/stake-polygon)에서 LP 토큰을 스테이킹하면 stkGHST 토큰을 수령하게 됩니다. 이처럼 GHST-QUICK 풀과 GHST-USDC 풀에선 각각 stkGHST-QUICK, stkGHST-USDC라는 stkGHST 토큰을 받게 됩니다.

stkGHST-QUICK 토큰은 오직 추가적인 QUICK 보상을 받기 위해  [https://quickswap.exchange/#/quick](https://quickswap.exchange/#/quick)의 Quickswap 보상 풀에 스테이킹을 하는 용도로만 사용이 됩니다. 현재 Aavegotchi 팀에서는 stkGHST-USDC 토큰을 추가적인 QUICK 보상 수령에도 이용할 수 있도록 Quickswap 측에 요청하고 있습니다.

*For every 1 GHST-QUICK LP token staked in this way, you receive 83 FRENS / Day (the team tries to keep the rate around 30-40% higher than just staking GHST alone. This rate is periodically adjusted up/down without warning to maintain the correct proportion).*

*For every 1 GHST-USDC LP token staked in this way, you receive 74 million FRENS / Day (10% more than just staking GHST).*

그렇다면 GHST 토큰을 바로 스테이킹하는 것과 LP 토큰을 통해 FRENS를 얻는 방식에는 어떠한 큰 차이가 있을까요?<br> (상당히 이상하지 않으신가요? 아래에 그에 대한 이유가 나와있으니 계속 읽어주세요!)<br> LP토큰을 스테이킹하는 것은 [비영구적손실](/glossary#impermanent-loss)의 위험이 있습니다. 따라서 리스크에 대한 보상이 QUICK으로 주어지는 것입니다.

그렇다면! 왜 GHST-USDC 풀은 하루에 7,400만개의 FRENS를 만들어내는 것일까요? Quickswap의 GHST-USDC 풀의 초기 스테이킹 참여자들이 자산 간의 비율을 엉망으로 만들었기 때문입니다. 따라서, 스테이커(depostiors)들은 풀에 유동성을 공급할 때, 0.00006 정도되는 양의 LP 토큰을 수령합니다. 이에 대해 궁금하시다면 다음의 [트윗](https://twitter.com/coderdannn/status/1362423402871447554)을 참고해주세요 :)

### Staking GHST-ETH

* Step 1: Go to [quickswap.exchange](https://quickswap.exchange/) and choose > Pools > Add Liquidity.

* Step 2: Deposit GHST and ETH equally into the GHST-ETH liquidity pool.

* Step 3: In return, you receive GHST-WETH LP tokens.

* Step 4: Take those LP tokens and stake them at [aavegotchi.com/stake-polygon](https://aavegotchi.com/stake-polygon)

* Step 5: In return, you earn FRENS points and you get stkGHST-WETH tokens

* Step 6: Deposit those at [dinoswap.exchange](https://dinoswap.exchange/) > Fossil Farms to farm DINO

* BONUS: Send your DINO to the GHST Extinction Pool to earn even more GHST!

For every 1 GHST-ETH LP token staked in this way, you receive 12.08 million FRENS / Day (20% more than just staking GHST).

### Staking Cheatsheets!

If you prefer something more visual, check out our Staking Cheatsheets!

* GHST Staking and GHST-QUICK/GHST-USDC Staking

<img class = "bodyImage" src = "/staking/GHST-to-Matic-Cheatsheet.png" alt = "GHST to Matic Cheatsheet" />

* GHST-ETH Staking

<img class = "bodyImage" src = "/staking/aavegotchi-dinoswap-lp-cheatsheet.png" alt = "Aavegotchi x DinoSwap LP Cheatsheet" />

### Staking Returns Table

The table below summarizes the staking returns (in terms of FRENS) in percentage against the baseline of staking GHST directly.

Do note that the Pixelcraft team may update the FRENS amount from time to time to balance the system.

table_stakingReturns

## 스테이킹 컨트랙트 주소

The following table shows the various staking contract addresses on Polygon. The ghstStaking and stkGHSTQUICK contracts share the same contract address. Do check the contract address first before finalizing any transactions.

table_stakingContractAddresses

## What's next?

So you've got some FRENS now eh? Head over to the [Tickets page](/tickets) to learn how to purchase tickets with FRENS and to participate in Raffles!