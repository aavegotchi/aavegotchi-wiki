---
author: Nick Mudge
date: '2014-04-26T22:00:00.000Z'
title: 'Стейкинг'
description: 'Стейкай GHST, делай FRENS'
contributors:
  - "mudgen"
  - "unintelligent-nerd"
---


<div class="headerImageContainer">
<img class="headerImage" src="/staking/staking.png">
<p class="headerImageText">Стейкай GHST, делай FRENS</p>
</div>

Стейкинг в криптовалютном проекте — это блокировка части токенов в обмен на вознаграждение. В Aavegotchi стейкинг работает в точности, как в других проектах. Токен проекта [GHST](/posts/ghst) может быть заблокирован в контракте для получения [FRENS](/posts/glossary#frens).

FRENS — это замороженный и не подлежащий транзакциям баланс в рамках стейкингового контракта. FRENS нельзя купить. Их выдают в качестве поощрения комьюнити за вклад в общее развитие Aavegotchi.

При желании, FRENS можно поменять на лотерейные билеты, которые затем можно активировать во время проведения лотерей для получения призов.

* Raffle Tickets can be entered into periodic [Wearable Raffles](/tickets) to win [Wearables](/wearables).

* Drop Tickets can be entered into [NFT Raffles](/tickets) to win [Portals](/portals) and [REALM Parcels](/metaverse).

Continue reading to learn how to stake GHST.

<div class="contentsBox">

**Содержание**

<ol>
<li><a href=#purchasing-ghst>Покупка GHST.</a></li>
<li><a href=#how-to-stake>Процесс стейкинга.</a></li>
<li><a href=#staking-contract-addresses>Адрес стейкингового контракта.</a></li>
<li><a href=#what-s-next->What's next?</a></li>
</ol>

</div>

## Покупка GHST
Чтобы заняться стейкингом, нужно иметь в наличии токены GHST. Как их получить, мы подробно описали на странице о токенах [GHST](/posts/ghst).

## Процесс стейкинга
Once you have some GHST tokens, they can be staked on the [Staking page](https://aavegotchi.com/stake-polygon)! Стейкинг осуществляется в Polygon (предыдущее название — Matic Network).

<img class = "bodyImage" src = "/staking/ghst-staking-ui.png" alt = "GHST Staking UI" />

There are five ways to stake:

1. GHST

2. GHST-QUICK

3. GHST-USDC

4. GHST-ETH

5. GHST-MATIC

**Important: Staking on Mainnet has been discontinued! Please unstake and restake on Polygon.**

*Note: Pre-sale GHST tokens cannot be staked until they are unlocked.*

### Прямой стейкинг токенов

* Step 1: Transfer your GHST tokens from Ethereum Mainnet to Polygon, a layer 2 solution using the [Bridge to Polygon Interface](https://aavegotchi.com/bridge).

* Step 2: Approve the contract to use your GHST tokens.

* Step 3: Input the amount of GHST you would like to transfer to Polygon. Once your transaction has confirmed on Ethereum, it takes roughly 7-8 minutes for your balance to reflect on Polygon. Your balance will update automatically. Please be patient!

* Step 4: Configure your Metamask wallet to include Polygon by following this [Polygon Guide](/polygon).

* Step 5: Connect your Metamask to Polygon and go to the [Polygon Staking Page](https://aavegotchi.com/stake-polygon) on the Aavegotchi DApp.

* Step 6: Approve the contract to use your GHST tokens on Polygon.

* Step 7: Input the amount of GHST you would like to deposit. Получилось? Отлично!

*For every 1 GHST staked in this way, you receive 1 FRENS / Day.*

### Staking GHST-QUICK and GHST-USDC

Staking GHST-QUICK and GHST-USDC follows the same steps.

* Step 1: Configure your Metamask wallet to include Polygon by following this [Polygon Guide](/polygon).

* Step 2: Use the [Aavegotchi Bridge](https://aavegotchi.com/bridge) to transfer GHST and/or other assets to Polygon. The [maTokens Guide](/matokens) will show you how this is done.

* Step 3: Become a liquidity provider on either or both the [GHST-QUICK](https://info.quickswap.exchange/pair/0x8b1fd78ad67c7da09b682c5392b65ca7caa101b9) and [GHST-USDC](https://info.quickswap.exchange/pair/0x096c5ccb33cfc5732bcd1f3195c13dbefc4c82f4) pools on [QuickSwap](https://quickswap.exchange). You will receive LP tokens in return for your liquidity provision. For people who are interested in staking in the GHST-QUICK pool, you can get some QUICK token from [QuickSwap](https://quickswap.exchange). The most liquid pairs are currently QUICK-UNI, QUICK-WETH, QUICK-USDC, and GHST-QUICK.

* Step 4: Take these LP tokens and stake them in the [Aavegotchi Staking Interface](https://aavegotchi.com/stake-polygon) to get stkGHST receipt tokens. For the GHST-QUICK and GHST-USDC pools, these stkGHST receipt tokens are named stkGHST-QUICK and stkGHST-USDC, respectively.

*For every 1 GHST-QUICK LP token staked in this way, you receive 83 FRENS / Day (the team tries to keep the rate around 30-40% higher than just staking GHST alone. This rate is periodically adjusted up/down without warning to maintain the correct proportion).*

*For every 1 GHST-USDC LP token staked in this way, you receive 74 million FRENS / Day (10% more than just staking GHST).*

Why is there a huge difference in the number of FRENS earned through LP staking compared to staking GHST tokens directly? Staking LP tokens have the risk of [impermanent loss](/glossary#impermanent-loss). You are compensated for the increased risk you take.

Why is the GHST-USDC pool yielding 74 million FRENS a day? При добавлении ликвидности пулу GHST-USDC на QuickSwap, между двумя активами наблюдается другое соотношение. Добавляя свои токены, взамен пользователи получают не целый токен, а лишь части LP, например 0,00006. See this [tweet](https://twitter.com/coderdannn/status/1362423402871447554) for the lulz.

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

## Адреса контрактов для стейкинга

The following table shows the various staking contract addresses on Polygon. The ghstStaking and stkGHSTQUICK contracts share the same contract address. Do check the contract address first before finalizing any transactions.

table_stakingContractAddresses

## What's next?

So you've got some FRENS now eh? Head over to the [Tickets page](/tickets) to learn how to purchase tickets with FRENS and to participate in Raffles!