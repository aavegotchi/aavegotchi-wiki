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

### Стейкинг токенов через QUICKSWAP LP

В настоящее время для получения FRENS используются только два токена:

* GHST-QUICK LP.
* GHST-USDC LP.

Сначала нужно перенести средства из блокчейна Ethereum в Polygon.

Чтобы ваш кошелек Metamask отображал Polygon, используйте для этой цели [гайд](/polygon). Далее используйте [мост Aavegotchi](https://aavegotchi.com/bridge), чтобы передать GHST или другие токены в Polygon. Подробности по осуществлению операции смотрите [тут](/matokens).

Внесите токены на [QuickSwap](https://quickswap.exchange) и станьте поставщиком ликвидности в одном или обеих пулах [GHST-QUICK](https://info.quickswap.exchange/pair/0x8b1fd78ad67c7da09b682c5392b65ca7caa101b9) и [GHST-USDC](https://info.quickswap.exchange/pair/0x096c5ccb33cfc5732bcd1f3195c13dbefc4c82f4). После этого вы получите токены LP. Если вы планируете замораживать токены в пуле GHST-QUICK, сможете получить токены QUICK от [QuickSwap](https://quickswap.exchange). Наибольшую ликвидность сейчас имеют пары QUICK-UNI, QUICK-WETH, QUICK-USDC и GHST-QUICK.

Возьмите предоставленные вам токены LP, перейдите в [интерфейс стейкинга Aavegotchi](https://aavegotchi.com/stake-polygon), внесите LP токены и получите токены-подтверждение - stkGHST. В зависимости от пула (GHST-QUICK или GHST-USDC), пользователь получает stkGHST-QUICK или stkGHST-USDC.

Чтобы получить больше дохода в токенах **QUICK**, поставьте stkGHST-QUICK в пул Quickswap Rewards [тут](https://quickswap.exchange/#/quick), чтобы получить QUICK дополнительно.  В отношении stkGHST-USDC команда Aavegotchi пока еще договаривается о таком же вознаграждении.

*За каждый GHST-QUICK LP токен, который вы поставили, вы сможете получать 83 FRENS в день. Это на 30-40% процента больше, если заниматься обычным стейкингом GHST. Этот показатель периодически автоматически растет/падает для пропорциональной коррекции.*

*За каждый поставленный GHST-USDC LP токен, можно получить 74 млн. токенов FRENS ежедневно. Это на 10 процентов больше, чем ставить просто GHST.*

Вы должны понимать, почему в вознаграждении FRENS есть такая разница. Количество FRENS, полученных при ставках LP, намного больше, чем при стейкинге GHST напрямую, из-за повышенного риска [безвозвратной потери](/glossary#impermanent-loss). Поэтому доходы увеличены в качестве компенсации.

Почему доход от пула GHST-USDC составляет 74 млн FRENS ежедневно? При добавлении ликвидности пулу GHST-USDC на QuickSwap, между двумя активами наблюдается другое соотношение. Добавляя свои токены, взамен пользователи получают не целый токен, а лишь части LP, например 0,00006. Соответственно, для поддержания одинакового вознаграждения вырастает число получаемых ежедневно токенов. Причина этого кроется в ранее допущенной досадной [ошибке](https://twitter.com/coderdannn/status/1362423402871447554).

### Шпаргалка по стейкингу GHST на Polygon!

На данном скриншоте вы можете посмотреть практический пример размещения ставок на Polygon двумя разными способами — <a href=#staking-ghst-tokens-directly>ставки GHST</a> напрямую или размещение ставок в пуле <a href=#staking-quickswap-lp-tokens>GHST-QUICK</a>.

<img class = "bodyImage" src = "/staking/GHST-to-Matic-Cheatsheet.png" alt = "GHST to Matic Cheatsheet" />

## Адреса контрактов для стейкинга

В нижеприведенной таблице представлены разные адреса смарт-контактов для размещения на Polygon. Обратите внимание, что адреса контрактов ghstStaking и stkGHSTQUICK имеют одинаковый адрес контракта. Прежде чем отправлять куда-либо свои токены, проверьте адрес контракта.

table_stakingContractAddresses

## Приобретение лотерейных билетов

Если вы хотите получить дополнительный бонус и имеете достаточно FRENS, купите лотерею. Перейдите в интерфейс [Shop Bulk Buy](https://aavegotchi.com/tickets) и сделайте покупку, оплатив лотерейные билеты с помощью FRENS.

Помните, что их можно перебрасывать между разными кошельками, чего нельзя сделать с FRENS. Поэтому билеты лотерей можно продавать и покупать на [Baazaar](/baazaar).

The Raffle Tickets are also now available on OpenSea Polygon [here](https://opensea.io/collection/aavegotchi-raffle-tickets-polygon). You will be able to see the number of tickets minted for each category of tickets on OpenSea.

There are six different categories of raffle tickets, ranging from Common (least valuable) to Godlike (most valuable):

table_RaffleTickets

Blog post: \[Stake GHST, Make FRENS Live on Ethereum Mainnet!\]( https://aavegotchi.medium.com/stake-ghst-make-frens-live-on-ethereum-mainnet-658bd507d67b)

Users are allowed to buy tickets belonging to different categories in a single transaction. You do **not** need to create separate buy transactions for each category of raffle ticket.

## Участие в лотерее

A raffle runs for a period of time. During this period, you can submit your raffle tickets for a chance to win prizes. Submitting raffle tickets into the draw involves an Ethereum transaction; it is not done automatically. If you have many different categories of raffle tickets and wish to enter them together as a bundle, this is also possible. You do **not** need to create separate transactions for entering each category of raffle tickets into the raffle.

When the raffle is over, you can find out what prizes you have won and can claim them.

If you choose not to participate in a given Raffle, you do not need to do anything with your raffle tickets. You can also accumulate raffle tickets for subsequent raffles if you like to do so.

As an example, the first raffle had a Chainlink Theme. Here were the prizes for the raffle:

<img class = "bodyImage" src = "/staking/link-raffle-prizes.png" alt = "Aavegotchi Chainlink-theme Raffle Prizes" />

A total of 6010 prizes.

Each prize will be allocated to a randomly drawn raffle ticket, where each ticket has an equal chance of winning.

You can improve your probability of winning by:
* Использовать несколько лотерейных билетов.
* Выбрать категорию приза во время розыгрыша. Например, призы обычной категории выпадают чаще, чем более ценных категорий.

Random numbers for the Raffle prize winners are generated through Chainlink's [on-chain verifiable randomness generator](https://blog.chain.link/verifiable-random-functions-vrf-random-number-generation-rng-feature/).

After the raffle has concluded, winners can claim their prizes on Polygon Network and equip their Gotchis with those wearables.

## Статистика прошлых розыгрышей
Knowing how to stake FRENS and participate in Raffles is good, you say. But what about the numbers? What are the probabilities of winning a wearable based on past raffles? Visit the [Raffles Statistics page](/raffles-stats) for the historical data.

## Подробности

- [Гид по лотереям Аавеготчи.](https://aavegotchi.medium.com/aavegotchi-raffles-a-frenly-guide-66f624c9bc60)
- [Лотерея Chainlink - кто в выигрыше?](https://aavegotchi.medium.com/aavegotchi-chainlink-raffle-you-just-won-af87712f1018)
- [Anon и Зеленый билет.](https://aavegotchi.medium.com/anon-and-the-green-ticket-5776969b3a69)
