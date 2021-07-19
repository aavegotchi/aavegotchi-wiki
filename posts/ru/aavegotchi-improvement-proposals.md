---
author: Coder Dan
date: '2020-04-23T07:00:00.000Z'
title: 'Предложения по улучшению игры (AGIP)'
description: 'Предложения по улучшению игры (AGIP)'
contributors:
  - "unintelligent-nerd"
---

Привет, друг! Готчи активно голосуют за предложения по улучшению игрового проекта (AGIP)! Тебе тоже нужно голосовать, чтобы было учтено твое мнение.

Сколько уже было голосований? Смотрите архивы уже проведенных обсуждений AGIP на этой странице нашей ВИКИ.

<div class="contentsBox">

**Содержание**

<ol>
<li><a href=#tap-increase-for-scaling-sprint>Увеличение числа выделяемых DAI на нужды проекта.</a></li>
<li><a href=#add-fees-to-bonding-curve>Добавление комиссионных в кривую связывания.</a></li>
<li><a href=#increase-daico-tap-for-ghst-purchases>Увеличить количество тапов DAICO для покупки GHST.</a></li>
<li><a href=#proposal-for-haunt-2>Предложение по второму поколению призраков.</a></li>
<li><a href=#give-unique-non-transferable-background-to-haunt-1-aavegotchis>Сделать уникальную расцветку для всех Готчи первого поколения.</a></li>
<li><a href=#add-fee-on-baazaar-to-support-rarity-farming>Повысить комиссию на Базаре для поддержки фарминга.</a></li>
<li><a href=#earn-xp-for-successful-signal-proposals>Добавлять очки опыта (XP) за принятые предложения по улучшению проекта.</a></li>
<li><a href=#voting-power-based-on-brs>Право голоса в зависимости от базовой характеристики черт (BRS).</a></li>
<li><a href=#voting-power-based-on-wearables--maall-price>Право голоса в зависимости от цены носимых устройств в Молле.</a></li>
<li><a href=#partnership-between-aavegotchidao--pixelcraft--and-dinoswap>Партнерство между AavegotchiDAO, Pixelcraft и DinoSwap.</a></li>
<li><a href=#name-of-aavegotchi-marketplace>Название для торговой площадки Аавготчи.</a></li>
<li><a href=#eligibility-of-ghst-usdc-lp-tokens-to-earn-frens>Право токенов GHST-USDC LP на получение FRENS.</a></li>
<li><a href=#portals-purchased-in-one-transaction>Число порталов, приобретенных за одну транзакцию.</a></li>
</ol>

</div>

### Увеличение числа выделяемых DAI на нужды проекта
**Предложение № 1 по улучшению Аавеготчи**

**О чем предложение:** Кривая связывания токенов GHST работает почти месяц. Это дает обладателям GHST возможность отрегулировать tap-механизм DAICO. Аавеготчи DAO 1.0 базируется на платформе Aragon и работает как простой DAICO, чьи участники (держатели токенов GHST) имеют право голосовать 1 раз в месяц, чтобы изменить (увеличить/уменьшить) поток средств, выделяемых команде через tap-механизм. Напомним, что DAI берутся непосредственно из кривой связывания, где в настоящее время находится свыше 7,5 млн DAI.

Предложение AGIP состоит в увеличении количества выделяемых средств с 50 000 DAI до 100 000 в месяц. Причина в том, что такого количества DAI не было достаточно, чтобы обеспечить охват всех достигнутых вех (роста сообщества, токена GHST, нужд на разработку игрового проекта). А ведь следующий период развития еще более амбициозен. Ограничения, заложенные в AavegotchiDAO 1.0, предусматривают выдачу только 50 000 DAI, а в первом предложении закладывается необходимость увеличения этой суммы до 100 000 DAI.

Дополнительные 50 тыс. DAI будут распределены по таким четырем категориям:
* Фонд разработчиков для привлечения новых разрабов.
* Средства на маркетинг, дизайн и разработку.
* Расширение экспансии Аавеготчи.
* Вознаграждения сообществу (для артистов, бардов) за вовлеченность в проект.

**Период голосования:** 15 - 19 октября 2020

**Результаты:**

table_agip1

[Ссылка для голосования на Aragon UI](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/vote/0/)

<hr />

### Добавление комиссионных в кривую связывания
**Предложение № 2 по улучшению Аавеготчи**

О чем предложение: Кривая связывания выступает в роли основного источника ликвидности GHST. В настоящее время как покупатели, так и продавцы, могут совершать сделки без комиссий.

Даже в особо крупных размерах.

Идея данного предложения состоит в том, чтобы добавить комиссию до 0,3%.

Внести изменения можно, подправив функцию `updateFees` на кривой связывания. Но нужно ли это? Выбор за членами Аавеготчи DAO.

Средства, полученные от комиссий, будут перечислены в сокровищницу DAO по адресу 0xffe6280ae4e864d9af836b562359fd828ece8020 и пойдут на нужды DAO.

**Период голосования:** 18 - 21 января 2021

**Результаты:**

table_agip2

[Ссылка для голосования на Aragon UI](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/vote/1/)

<hr />

### Увеличить количество тапов DAICO для покупки GHST
**Предложение № 3 по улучшению Аавеготчи**

**Proposal Summary:** Player rewards and liquidity incentives are crucial to bootstrapping the Aavegotchi ecosystem to a level where it becomes self-sustained on trading volume and economic activity.

Whenever GHST is spent in the Aavegotchi ecosystem, 33% of it is automatically sent to a burn address. Unlike most cryptocurrencies, burning GHST (except via the bonding curve) does not actually lower the total value of GHST, since that value is stored as DAI within the bonding curve.

What burning does do is trap DAI within the bonding curve, essentially increasing the reserve ratio over time, which stabilizes the price of GHST.

In order to offset the burning (which could ultimately turn GHST into a stablecoin), we advise the community to increase the tap to 150,000 DAI per month. This will help balance the reserve of the bonding curve, while also providing an extra 50,000 DAI per month that will be put towards player rewards and liquidity incentives.

**Период голосования:** 18 - 21 января 2021

**Результаты:**

table_agip3

[Ссылка для голосования на Aragon UI](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/vote/2/)

<hr />

### Предложение по второму поколению призраков
**Предложение № 4 по улучшению Аавеготчи**

**Proposal Summary:** 10,000 Portals is arguably not enough to satisfy the current level of demand for Aavegotchis. Therefore it may be necessary to deploy a new Haunt to ensure that all who want to participate can own an Aavegotchi. This Core Proposal provides four different options that have been suggested by community members, including one option not to create a new Haunt.

Детали по AGIP доступны [тут](https://aavegotchi.medium.com/vote-when-haunt-2-making-haunts-more-unique-d975cbda4772).

Option 1: No new haunt, Revisit in a month

Option 2: 10K Portals, 100 GHST each, 1 per txn

Option 3: 25K portals, 100 GHST each, 5 per txn (w/ stricter ape tax)

Option 4: Pre-sale, in which each wallet can subscribe for 1 Portal in exchange for 100 GHST. When the pre-sale period closes, all Portals are minted and transferred to their owners.

**Период голосования:** 17 - 24 марта 2021

**Результаты:**

table_agip4

**Предложение не принято. Выпуск второго поколения призраков пока откладывается.**

[Ссылка для голосования на Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmNqRry73rWXb9tdyHummihcK58ga83Ru15AJRF3beFJ35)

<hr />

### Сделать уникальную расцветку для всех Готчи первого поколения
**Предложение № 5 по улучшению Аавеготчи**

**Proposal Summary:** Many players are worried that Haunt 2 will be too similar to Haunt 1 and the newly-created Haunts will devalue the “Genesis” Haunt. One of the suggestions is to give special backgrounds to each Haunt to make them easily identifiable. This proposal has seen excellent discussion and significant support on the associated Snapshot. Note that irrespective of the DAO’s decision on this issue, all Aavegotchis will be getting special non-transferable "Haunt" badges that identify their Haunt. This proposal focuses specifically on the idea of a non-transferable background that can be equipped in the Aavegotchi’s BG wearable slot.

Детали по AGIP доступны [тут](https://aavegotchi.medium.com/vote-when-haunt-2-making-haunts-more-unique-d975cbda4772).

Option 1: Only Haunt 1 should get a special background

Option 2: Each Haunts should have it’s own unique background

Option 3: Neither, leave it as is

**Период голосования:** 17 - 24 марта 2021

**Результаты:**

table_agip5

[Ссылка для голосования на Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmfBrnUmfsX57vXWchr1mUNkqMWNeF6edEqdQq11MCvMHJ)

<hr />

### Повысить комиссию на Базаре для поддержки фарминга
**Предложение № 6 по улучшению Аавеготчи**

**Proposal Summary:** With the announcement of SZN1 Rewards now official, we explore how to align the community's interests and rewards structures, as it pertains to Baazaar fees.

Currently, 2% is allocated to Pixelcraft and 1% to DAO treasury. While not exclusive of providing for RF rewards, the treasury funds are currently in no obligation to be allocated in any form of ratio towards the RF pool each season. The proposal aims to increase the Baazaar fees from 3% to 3.5%, with the additional 0.5% going directly to the Rarity Farming rewards pool.

Details on the AGIP can be found [here](https://aavegotchi.medium.com/core-proposal-agip6-add-0-5-fee-on-baazaar-to-support-rarity-farming-5bf923c7f528).

Option 1: Yes, increase fees from 3 to 3.5

Option 2: No, leave the fees as they are

**Период голосования:** 7 - 13 апреля 2021

**Результаты:**

table_agip6

[Ссылка для голосования на Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmPUueFJwpCz6rBiucnBYPLxTv2tetzxXWwCi2gSQFMJMW)

<hr />

### Добавлять очки опыта (XP) за принятые предложения по улучшению проекта
**Предложение № 7 по улучшению Аавеготчи**

**Proposal Summary:** We currently have a lot of Signal / Community Proposals on Snapshot and new posts on our forum everyday. So far none of those proposals were able to even get close to the quorum of 20%. The most popular one by @JG about adding additional fees for rarity farming only got around 2 million GHST in votes (~11%)-even though the team decided to take it as a Core Proposal. After being upgraded to Core we smashed right through the quorum in less than 24h.

I think there are two pretty obvious reasons for this. On the one hand, our Snapshot is a bit chaotic right now, with some Signal Proposals not following the template at all. On the other hand-and I think this is the more important one-voting on Core Proposal gets you 20 Experience (XP) for your Gotchi.

I propose adding a small Experience drop (10 XP) for people who voted on successful Signal Proposals, meaning ones that reach quorum and get upgraded to Core Proposals. Simply dropping XP for all Community Proposals could result in more low quality suggestions, which shouldn't be the goal of this proposal.

Even if 10 XP might not be much, it gives people incentives to actually look through the Signal Proposals and vote on quality proposals with a higher chance of reaching quorum. As a DAO, community involvement is extremely important and I believe this is a small, but decent, step in the right direction.

If this Proposal reaches quorum and passes, all Aavegotchis held by their owners at the end of the vote will receive 10 XP!

Details on the AGIP can be found [here](https://aavegotchi.medium.com/vote-agip7-earn-xp-for-successful-signal-proposals-d5eafdb93aae).

Option 1: Yes, successful SigProps give XP

Option 2: No, SigProps should not give XP

**Период голосования:** 12 - 18 мая 2021

**Результаты:**

table_agip7

[Ссылка для голосования на Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmctiApzKZHoVsSpzWVfMVL1abRTUNXsoipupNGS52gEuZ)

<hr />

### Право голоса в зависимости от базовой характеристики черт (BRS)
**Предложение № 8 по улучшению Аавеготчи**

**Proposal Summary:** Add Voting Power for Aavegotchis held in a voter’s address, at a rate of 1 GHST per BRS (base rarity score, not including equipped wearables).

Details on the AGIP can be found [here](https://aavegotchi.medium.com/vote-agip8-and-agip9-give-voting-power-to-aavegotchis-and-wearables-9c113373a0a2).

Option 1: Yes, give Voting Power to Aavegotchi based on BRS

Option 2: No, Aavegotchis shouldn’t have Voting Power

**Период голосования:** 11 - 17 июня 2021

**Результаты:**

table_agip8

[Ссылка для голосования на Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmZnzgvkEzHvwkYPGLFQLtVvvoMzBXPWhznux1udHzbUim)

<hr />

### Право голоса в зависимости от цены носимых устройств в Молле
**Предложение № 9 по улучшению Аавеготчи**

**Proposal Summary:** Add Voting Power for Wearables held by Aavegotchis and in the voting address.

Details on the AGIP can be found [here](https://aavegotchi.medium.com/vote-agip8-and-agip9-give-voting-power-to-aavegotchis-and-wearables-9c113373a0a2).

Option 1: Yes, give Voting Power to Wearables based on Maall Price

Option 2: No, Wearables shouldn’t have Voting Power

**Период голосования:** 11 - 17 июня 2021

**Результаты:**

table_agip9

[Ссылка для голосования на Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/Qmat7jeAS1W3BBq7yDi2jkHjNoywmUEfrF2FdPiS9CcGHa)

<hr />

### Партнерство между AavegotchiDAO, Pixelcraft и DinoSwap
**Предложение № 10 по улучшению Аавеготчи**

**Proposal Summary:** Some community members are worried about the waning liquidity of GHST on Quickswap and their gradually decreasing LP rewards. Rather than simply allocating more liquidity to the pool, we are considering partnering with a soon to launch liquidity aggregator called DinoSwap. The terms include a total of 200k USD worth of GHST tokens to be allocated to their incentivized “extinction pools”, the details of which are fleshed out below.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/ghst-liquidity-rewards-on-new-launch-pixelcraft-dao-collaboration/1804).

Option 1: Yes, let's partner with DinoSwap

Option 2: No, don't partner with Dinoswap

**Период голосования:** 13 - 20 июня 2021

**Результаты:**

table_agip10

[Ссылка для голосования на Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmV3xdUskpTtd6JYyCgV7tjWeBGira2ZPFcdk2YDy3UPHE)

<hr />

### Название для торговой площадки Аавготчи
**Модель DApp Snapshot**

**Proposal Summary:** What should the Aavegotchi NFT Marketplace be called?

Aavegotchi is launching its own NFT marketplace on Polygon in tandem with the game!

What should we call the official Aavegotchi Marketplace?

Choice A: Aavegotchi Baazaar

Choice B: Aavegotchi Maarket

Choice C: Neither

The quorum for this vote is set to 500,000 GHST. If quorum is not reached, Pixelcraft will draw straws.

If "Neither" wins...you guys better start coming up with some good alternatives!

**Период голосования:** 8 - 11 февраля

**Результаты:**

table_marketplaceName

[Ссылка для голосования на Snapshot.](https://snapshot.page/#/aavegotchi.eth/proposal/QmRiRaQuwLuNr88yxvX61vtKM56NrY3KaMk4bk6w7g47fy)

<hr />

### Право токенов GHST-USDC LP на получение FRENS

**Модель DApp Snapshot**

**Proposal Summary:** Should GHST-USDC LP token be eligible to earn FRENS?

Our liquidity migration program has been a huge success, with over 8M GHST migrated to Polygon already. However, as many community members have noted, liquidity for the GHST-USDC pair is still not deep enough to support trading large amounts of USDC for GHST on Quickswap.

We believe one way to remedy this is by adding GHST-USDC as a pair eligible for FRENS on [https://aavegotchi.com/stake-polygon](https://aavegotchi.com/stake-polygon). Just like GHST-QUICK has a receipt token stkGHST-QUICK, staked GHST-USDC can also emit a stkGHST-USDC token, which may be eligible for rewards on Quickswap, if their team deems it necessary.

Since this decision directly affects gameplay, we believe it is a ripe candidate for our first Snapshot vote on Polygon.

We are setting a 500,000 GHST quorum for this vote to be enacted.

The GHST-USDC LP token will earn FRENS at the same rate as just staking GHST, since impermanent loss is minimal and fees are significant.

**Период голосования:** 8 - 11 февраля 2021

**Результаты:**

table_ghstUsdcLp

[Ссылка для голосования на Snapshot](https://snapshot.page/#/aavegotchi.eth/proposal/QmUpXPA5JF4ed9GUy5hNUTA7rT7VQjL7QXUTSxbtLQ1RqA)

<hr />

### Число порталов, приобретенных за одну транзакцию

**Модель DApp Snapshot**

**Proposal Summary:** How many Portals can be purchased in one transaction?

Discussion period has ended for this topic, and now it's time to vote! The most popular options were: 1, 5, and 10 Portals per transaction.

Our fren [@coderdannn](/team#coder-dan) also threw a spicy idea into the mix: an "Ape Tax" whereby higher numbers of Portals could be bought in a single transaction, but at a higher price. The Portals would be tiered as so:

* 0-5: 100 GHST each

* 6-15: 200 GHST each

* 16-25: 300 GHST each

So this leaves us with four options: 1, 5, 10, and 25 (w/ ape tax).

Let your $GHST token speak for you, and vote!

Voting period: 72 hrs Minimum quorum: 10% of GHST on Matic (~1.1M GHST)

Ветка обсуждения на AavegotchiDAO 👇

[https://dao.aavegotchi.com/t/how-many-portals-should-be-bought-in-one-txn/17](https://dao.aavegotchi.com/t/how-many-portals-should-be-bought-in-one-txn/17)

**Период голосования:** 23 - 26 февраля 2021

**Результаты:**

table_portalsPurchased

[Ссылка для голосования на Snapshot](https://snapshot.page/#/aavegotchi.eth/proposal/QmUhKcn5YjKAPeGA1SfKQkNfw3P3hGRPgSGnTJGsfzw4Xi)