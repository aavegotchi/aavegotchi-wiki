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
<li><a href=#frens-taask-force>FRENS Taask Force</a></li>
<li><a href=#what-s-next->What's next?</a></li>
</ol>

</div>

## GHST 구매하기
스테이킹을 하기 전엔 당연하게도 여러분의 손에 스테이킹할 GHST가 쥐어져 있어야 합니다. [GHST 토큰 페이지](/posts/ghst)에 관련 내용이 안내되어 있으니 선호하는 방식을 택하시길 바랍니다 :)

## 스테이킹 방법
Once you have some GHST tokens, they can be staked on the [Staking page](https://aavegotchi.com/stake-polygon)! 스테이킹은 현재 폴리곤(구 메틱 네트워크)에서 이루어지고 있습니다.

<img class = "bodyImage" src = "/staking/ghst-staking-ui.png" alt = "GHST Staking UI" />

There are six ways to stake:

1. GHST

2. wapGHST

3. GHST-QUICK

4. GHST-USDC

5. GHST-ETH

6. GHST-MATIC

**Important: Staking on Mainnet has been discontinued! Please unstake and restake on Polygon.**

*Note: Pre-sale GHST tokens cannot be staked until they are unlocked.*

### GHST 토큰을 직접 스테이킹하기

* Step 1: Transfer your GHST tokens from Ethereum Mainnet to Polygon, a layer 2 solution using the [Bridge to Polygon Interface](https://aavegotchi.com/bridge).

* Step 2: Approve the contract to use your GHST tokens.

* Step 3: Input the amount of GHST you would like to transfer to Polygon. Once your transaction has confirmed on Ethereum, it takes roughly 7-8 minutes for your balance to reflect on Polygon. Your balance will update automatically. Please be patient!

* Step 4: Configure your Metamask wallet to include Polygon by following this [Polygon Guide](/polygon).

* Step 5: Connect your Metamask to Polygon and go to the [Polygon Staking Page](https://aavegotchi.com/stake-polygon) on the Aavegotchi DApp.

* Step 6: Approve the contract to use your GHST tokens on Polygon.

* Step 7: Input the amount of GHST you would like to deposit. Presto! You are done!

*For every 1 GHST staked in this way, you receive 1 FRENS / Day.*

### Staking wapGHST

wapGHST stands for Wrapped Aave Polygon GHST. It provides the same FRENS rate as staking GHST directly, with the addition of lending the GHST token out for additional yield on the Aave platform.

Stakers do not need to visit Aave. You just need to approve your tokens and click on wrap GHST to wrap/unwrap your GHST into wapGHST.

*Note: The APY accrued will not appear in your balance of wapGHST. Rather, it will accrue to your GHST balance during the unwrapping process (when you return to vanilla GHST.)*

* Step 1: Visit [app.aavegotchi.com/stake-polygon](https://app.aavegotchi.com/stake-polygon)

* Step 2: Approve the contract to use your GHST tokens.

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

Why is the GHST-USDC pool yielding 74 million FRENS a day? Quickswap의 GHST-USDC 풀의 초기 스테이킹 참여자들이 자산 간의 비율을 엉망으로 만들었기 때문입니다. 따라서, 스테이커(depostiors)들은 풀에 유동성을 공급할 때, 0.00006 정도되는 양의 LP 토큰을 수령합니다. See this [tweet](https://twitter.com/coderdannn/status/1362423402871447554) for the lulz.

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

## 스테이킹 컨트랙트 주소

The following table shows the various staking contract addresses on Polygon. The ghstStaking and stkGHSTQUICK contracts share the same contract address. Do check the contract address first before finalizing any transactions.

table_stakingContractAddresses

## FRENS Taask Force

From time to time, the FRENS emission rate does not automatically get updated when the price of the underlying tokens changes.

The [FRENS Taask Force](/frens-taask-force) has been setup to monitor and adjust the FRENS rates to keep it in check with the pre-determined rate.

## What's next?

So you've got some FRENS now eh? Head over to the [Tickets page](/tickets) to learn how to purchase tickets with FRENS and to participate in Raffles!