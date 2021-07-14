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

* Лотерейные билеты могут быть использованы для участия в периодических лотереях и выигрыша [экипировки](/wearables).

* Дроп билетов может быть использован для участия в розыгрыше других NFT — [порталов](/portals) и [участков земли](/metaverse). Читайте больше про Дроп билетов на [этой](/metaverse) странице.

Читайте дальше, чтобы узнать, как заниматься стейкингом GHST и получать призы с помощью FRENS.

<div class="contentsBox">

**Содержание**

<ol>
<li><a href=#purchasing-ghst>Покупка GHST.</a></li>
<li><a href=#how-to-stake>Процесс стейкинга.</a></li>
<li><a href=#staking-contract-addresses>Адрес стейкингового контракта.</a></li>
<li><a href=#purchasing-raffle-tickets>Покупка лотерейных билетов.</a></li>
<li><a href=#entering-raffles>Розыгрыш лотерейных билетов.</a></li>
<li><a href=#past-raffles-statistics>Статистика прошедших лотерей.</a></li>
<li><a href=#more-resources>Больше информации.</a></li>
</ol>

</div>

## Покупка GHST
Чтобы заняться стейкингом, нужно иметь в наличии токены GHST. Как их получить, мы подробно описали на странице о токенах [GHST](/posts/ghst).

## Процесс стейкинга
Если вы купили токены, можно заняться стейкингом. Стейкинг осуществляется в Polygon (предыдущее название — Matic Network).

Это можно сделать двумя способами: (1) прямой стейкинг токенов GHST и (2) стейкинг токенов поставщика ликвидности (LP) на децентрализованной бирже [QuickSwap](/glossary#quickswap).

**Важно: стейкинг в основной сети больше не поддерживается! Пожалуйста, разморозьте и поставьте заново на Polygon.**

*Внимание. Токены GHST, приобретенные во время Pre-sale, нельзя заморозить до тех пор, пока их не разблокируют.*

### Прямой стейкинг токенов

Переносим GHST из Ethereum в Polygon (решение 2 уровня для масштабирования сети).

Для этой цели используется [мост в Polygon](https://aavegotchi.com/bridge) в интерфейсе Аавегочи. Чтобы контракт получил доступ к вашим токенам, нажмите на кнопку и подтвердите транзакцию. Затем нужно ввести желаемое количество токенов GHST, которое вы хотите перебросить в Polygon. Когда транзакция пройдет подтверждение в сети (на это уходит 7-8 минут), вы сможете увидеть свой баланс на Polygon. Операция протекает автоматически. Просто подождите.

Дальше вам нужно настроить ваш Metamask для отображения баланса Polygon. Используйте для этой цели [гайд по Polygon](/polygon).

Подключите Metamask к Polygon. Перейдите на [страницу для стейкинга](https://aavegotchi.com/stake-polygon) в Aavegotchi DApp. Одобрите контракт на стейкинг ваших токинов GHST на Polygon. Введите сумму замораживаемых токенов. Подтвердите. Все, вы это сделали!

*Каждый поставленный токен GHST ежедневно приносит вам по одному токену FRENS.*

### Staking QuickSwap LP tokens

Currently, there are only 2 QuickSwap LP tokens that could be staked for FRENS:

* QuickSwap GHST-QUICK LP token
* QuickSwap GHST-USDC LP token

The first step involves transferring funds from Ethereum Mainnet to Polygon, a layer 2 solution.

Используйте для этой цели [гайд по Polygon](/polygon). Next, use the [Aavegotchi Bridge](https://aavegotchi.com/bridge) to transfer GHST and/or other assets to Polygon. The [maTokens Guide](/matokens) will show you how this is done.

Next, become a liquidity provider on either or both the [GHST-QUICK](https://info.quickswap.exchange/pair/0x8b1fd78ad67c7da09b682c5392b65ca7caa101b9) and [GHST-USDC](https://info.quickswap.exchange/pair/0x096c5ccb33cfc5732bcd1f3195c13dbefc4c82f4) pools on [QuickSwap](https://quickswap.exchange). You will receive LP tokens in return for your liquidity provision. For people who are interested in staking in the GHST-QUICK pool, you can get some QUICK token from [QuickSwap](https://quickswap.exchange). The most liquid pairs are currently QUICK-UNI, QUICK-WETH, QUICK-USDC, and GHST-QUICK.

Take these LP tokens and stake them in the [Aavegotchi Staking Interface](https://aavegotchi.com/stake-polygon) to get stkGHST receipt tokens. For the GHST-QUICK and GHST-USDC pools, these stkGHST receipt tokens are named stkGHST-QUICK and stkGHST-USDC, respectively.

For the stkGHST-QUICK receipt token **only**, you can stake them into the Quickswap Rewards pool at [https://quickswap.exchange/#/quick](https://quickswap.exchange/#/quick) to earn additional QUICK rewards. The Aavegotchi team is requesting for a similar incentive to be offered for the stkGHST-USDC receipt token.

*For every 1 GHST-QUICK LP token staked in this way, you receive 83 FRENS / Day (the team tries to keep the rate around 30-40% higher than just staking GHST alone. This rate is periodically adjusted up/down without warning to maintain the correct proportion).*

*For every 1 GHST-USDC LP token staked in this way, you receive 74 million FRENS / Day (10% more than just staking GHST).*

Why is there a huge difference in the number of FRENS earned through LP staking compared to staking GHST tokens directly? Staking LP tokens have the risk of [impermanent loss](/glossary#impermanent-loss). You are compensated for the increased risk you take.

Why is the GHST-USDC pool yielding 74 million FRENS a day? An early depositor in the GHST-USDC pool on QuickSwap messed up the ratio between the assets. Hence, when depositors add to the pool, they receive tiny amounts of LP tokens, like 0.00006. See this [tweet](https://twitter.com/coderdannn/status/1362423402871447554) for the lulz.

### Staking GHST on Polygon Cheetsheet!

The following diagram shows the two different routes to staking on Polygon that we have discussed above (<a href=#staking-ghst-tokens-directly>Staking GHST tokens</a> ; <a href=#staking-quickswap-lp-tokens>Staking in the GHST-QUICK pool</a>).

<img class = "bodyImage" src = "/staking/GHST-to-Matic-Cheatsheet.png" alt = "GHST to Matic Cheatsheet" />

## Адрес стейкингового контракта.

The following table shows the various staking contract addresses on Polygon. The ghstStaking and stkGHSTQUICK contracts share the same contract address. Do check the contract address first before finalizing any transactions.

table_stakingContractAddresses

## Покупка лотерейных билетов.

Once you have enough FRENS, head to the [Shop Bulk Buy user interface](https://aavegotchi.com/tickets) to purchase raffle tickets with FRENS.

Unlike FRENS, Raffle Tickets can be transferred from one wallet to another. They can also be bought/sold on secondary marketplaces such as the [Baazaar](/baazaar).

There are six different categories of raffle tickets, ranging from Common (least valuable) to Godlike (most valuable):

table_RaffleTickets

Blog post: \[Stake GHST, Make FRENS Live on Ethereum Mainnet!\]( https://aavegotchi.medium.com/stake-ghst-make-frens-live-on-ethereum-mainnet-658bd507d67b)

Users are allowed to buy tickets belonging to different categories in a single transaction. You do **not** need to create separate buy transactions for each category of raffle ticket.

## Розыгрыш лотерейных билетов.

A raffle runs for a period of time. During this period, you can submit your raffle tickets for a chance to win prizes. Submitting raffle tickets into the draw involves an Ethereum transaction; it is not done automatically. If you have many different categories of raffle tickets and wish to enter them together as a bundle, this is also possible. You do **not** need to create separate transactions for entering each category of raffle tickets into the raffle.

When the raffle is over, you can find out what prizes you have won and can claim them.

If you choose not to participate in a given Raffle, you do not need to do anything with your raffle tickets. You can also accumulate raffle tickets for subsequent raffles if you like to do so.

As an example, the first raffle had a Chainlink Theme. Here were the prizes for the raffle:

<img class = "bodyImage" src = "/staking/link-raffle-prizes.png" alt = "Aavegotchi Chainlink-theme Raffle Prizes" />

A total of 6010 prizes.

Each prize will be allocated to a randomly drawn raffle ticket, where each ticket has an equal chance of winning.

You can improve your probability of winning by:
* Submitting multiple tickets
* Enter raffle ticket categories with more prizes (e.g. Common)

Random numbers for the Raffle prize winners are generated through Chainlink's [on-chain verifiable randomness generator](https://blog.chain.link/verifiable-random-functions-vrf-random-number-generation-rng-feature/).

After the raffle has concluded, winners can claim their prizes on Polygon Network and equip their Gotchis with those wearables.

## Статистика прошедших лотерей.
Knowing how to stake FRENS and participate in Raffles is good, you say. But what about the numbers? What are the probabilities of winning a wearable based on past raffles? Visit the [Raffles Statistics page](/raffles-stats) for the historical data.

## Больше информации.

- [Aavegotchi Raffles — A FRENLY Guide](https://aavegotchi.medium.com/aavegotchi-raffles-a-frenly-guide-66f624c9bc60)
- [Aavegotchi ❤ Chainlink Raffle — You Just WON](https://aavegotchi.medium.com/aavegotchi-chainlink-raffle-you-just-won-af87712f1018)
- [Anon and the Green Ticket](https://aavegotchi.medium.com/anon-and-the-green-ticket-5776969b3a69)
