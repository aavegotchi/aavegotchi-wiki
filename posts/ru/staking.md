---
author: Nick Mudge
date: '2020-04-23T07:00:00.000Z'
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
Если вы купили токены, можно заняться стейкингом. Стейкинг осуществляется в Polygon (предыдущее название — Matic Network).

There are four ways to stake:

1. GHST

2. GHST-QUICK

3. GHST-USDC

4. GHST-ETH

**Важно: стейкинг в основной сети больше не поддерживается! Пожалуйста, разморозьте и поставьте заново на Polygon.**

*Внимание. Токены GHST, приобретенные во время Pre-sale, нельзя заморозить до тех пор, пока их не разблокируют.*

### Прямой стейкинг токенов

Переносим GHST из Ethereum в Polygon (решение 2 уровня для масштабирования сети).

Для этой цели используется [мост в Polygon](https://aavegotchi.com/bridge) в интерфейсе Аавегочи. Чтобы контракт получил доступ к вашим токенам, нажмите на кнопку и подтвердите транзакцию. Затем нужно ввести желаемое количество токенов GHST, которое вы хотите перебросить в Polygon. Когда транзакция пройдет подтверждение в сети (на это уходит 7-8 минут), вы сможете увидеть свой баланс на Polygon. Операция протекает автоматически. Просто подождите.

Дальше вам нужно настроить ваш Metamask для отображения баланса Polygon. Используйте для этой цели [гайд по Polygon](/polygon).

Подключите Metamask к Polygon. Перейдите на [страницу для стейкинга](https://aavegotchi.com/stake-polygon) в Aavegotchi DApp. Одобрите контракт на стейкинг ваших токинов GHST на Polygon. Введите сумму замораживаемых токенов. Подтвердите. Все, вы это сделали!

*Каждый поставленный токен GHST ежедневно приносит вам по одному токену FRENS.*

### Staking GHST-QUICK and GHST-USDC

Staking GHST-QUICK and GHST-USDC follows the same steps.

Сначала нужно перенести средства из блокчейна Ethereum в Polygon.

Чтобы ваш кошелек Metamask отображал Polygon, используйте для этой цели [гайд](/polygon). Далее используйте [мост Aavegotchi](https://aavegotchi.com/bridge), чтобы передать GHST или другие токены в Polygon. Подробности по осуществлению операции смотрите [тут](/matokens).

Внесите токены на [QuickSwap](https://quickswap.exchange) и станьте поставщиком ликвидности в одном или обеих пулах [GHST-QUICK](https://info.quickswap.exchange/pair/0x8b1fd78ad67c7da09b682c5392b65ca7caa101b9) и [GHST-USDC](https://info.quickswap.exchange/pair/0x096c5ccb33cfc5732bcd1f3195c13dbefc4c82f4). После этого вы получите токены LP. Если вы планируете замораживать токены в пуле GHST-QUICK, сможете получить токены QUICK от [QuickSwap](https://quickswap.exchange). Наибольшую ликвидность сейчас имеют пары QUICK-UNI, QUICK-WETH, QUICK-USDC и GHST-QUICK.

Возьмите предоставленные вам токены LP, перейдите в [интерфейс стейкинга Aavegotchi](https://aavegotchi.com/stake-polygon), внесите LP токены и получите токены-подтверждение - stkGHST. В зависимости от пула (GHST-QUICK или GHST-USDC), пользователь получает stkGHST-QUICK или stkGHST-USDC.

Чтобы получить больше дохода в токенах **QUICK**, поставьте stkGHST-QUICK в пул Quickswap Rewards [тут](https://quickswap.exchange/#/quick), чтобы получить QUICK дополнительно.  В отношении stkGHST-USDC команда Aavegotchi пока еще договаривается о таком же вознаграждении.

*За каждый GHST-QUICK LP токен, который вы поставили, вы сможете получать 83 FRENS в день. Это на 30-40% процента больше, если заниматься обычным стейкингом GHST. Этот показатель периодически автоматически растет/падает для пропорциональной коррекции.*

*За каждый поставленный GHST-USDC LP токен, можно получить 74 млн. токенов FRENS ежедневно. Это на 10 процентов больше, чем ставить просто GHST.*

Вы должны понимать, почему в вознаграждении FRENS есть такая разница. Количество FRENS, полученных при ставках LP, намного больше, чем при стейкинге GHST напрямую, из-за повышенного риска [безвозвратной потери](/glossary#impermanent-loss). Поэтому доходы увеличены в качестве компенсации.

Почему доход от пула GHST-USDC составляет 74 млн FRENS ежедневно? При добавлении ликвидности пулу GHST-USDC на QuickSwap, между двумя активами наблюдается другое соотношение. Добавляя свои токены, взамен пользователи получают не целый токен, а лишь части LP, например 0,00006. Соответственно, для поддержания одинакового вознаграждения вырастает число получаемых ежедневно токенов. Причина этого кроется в ранее допущенной досадной [ошибке](https://twitter.com/coderdannn/status/1362423402871447554).

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

## Адреса контрактов для стейкинга

The following table shows the various staking contract addresses on Polygon. The ghstStaking and stkGHSTQUICK contracts share the same contract address. Do check the contract address first before finalizing any transactions.

table_stakingContractAddresses

## What's next?

So you've got some FRENS now eh? Head over to the [Tickets page](/tickets) to learn how to purchase tickets with FRENS and to participate in Raffles!