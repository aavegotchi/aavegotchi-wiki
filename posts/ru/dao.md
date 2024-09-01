---
author: Coder Dan
date: '2014-04-26T22:00:00.000Z'
title: 'AavegotchiDAO'
description: 'Все про Аавеготчи DAO'
image: "icons/dao.svg"
contributors:
  - "vanilladelphia"
  - "cinnabarhorse"
  - "hackingmoneyph"
  - "unintelligent-nerd"
---

<div class="headerImageContainer">
<img class="headerImage" src="/dao/dao.png">
<p class="headerImageText">Руководство по Аавеготчи DAO</p>
</div>

[DAO](glossary#dao) — децентрализованная форма управления, позволяющая держателям токенов голосовать за изменения, оптимизацию и модернизацию.

Сообщество инвесторов DAO получает возможность управлять будущим проекта, принимая коллективные решения. Aavegotchi, как и многие другие успешные DeFi-проекты, например — Compound и Synthetix, следует по пути постепенной децентрализации. Pixelcraft Studios организовали мероприятие по распределению (продаже) токенов управления — DAICO (DAO+ICO), в результате которого управление Aavegotchi, включая всю игровую механику, смарт-контракты и финансирование, перейдет под эгиду Аавеготчи DAO, но с учетом преобладающей нормативной среды. Это будет осуществлено в три этапа.

<div class="contentsBox">

**Содержание**

<ol>
<li><a href=#genesis>Генезис (Genesis).</a></li>
<li><a href=#cocoon>Кокон (Cocoon).</a></li>
<li><a href=#metamorphosis>Преображение (Metamorphosis).</a></li>
<li><a href=#oasis>Оазис (Oasis).</a></li>
<li><a href=#participating-in-governance>Участие в управлении.</a></li>
<li><a href=#type-of-proposals>Type of Proposals</a></li>
<li><a href=#vote-differentials>Vote Differentials</a></li>
<li><a href=#creating-signal-proposals>Creating Signal Proposals</a></li>
<li><a href=#voting>Voting</a></li>
<li><a href=#aavegotchi-improvement-proposals--agips->Предложения по улучшению игры (AGIP)</a></li>
<li><a href=#treasury>Treasury</a></li>
</ol>

</div>

## Генезис (Genesis)

*См.* [DAICO](https://wiki.aavegotchi.com/curve/#aavegotchi-daico).

AavegotchiDAO появился на свет одновременно в день распределения токенов GHST. Владельцы токенов GHST могли проводить голосование за количество средств, выделяемых команде Pixelcraft Studios на поддержание проекта. Средства выделялись через [кривую привязки токенов (TBC)](/curve). Одним из первых решений стало увеличение количества токенов в обращении с 50 000 DAI до 100 000 DAI в месяц. Его одобрили 99% держателей токена 18.10.2020 года. Следующим крупным решением будет переход на AavegotchiDAO Metamorphosis.

На этом этапе держатели токенов GHST не получают награды за активное участие в управлении AavegotchiDAO.

Фичи Genesis:

* Без смарт-контрактов.
* Без апгрейдов смарт-контрактов.
* Управление держателями токенов GHST.
* Платформа: Aragon.
* Наград нет.
* Уровень: Мейннет Ethereum.

## Кокон (Cocoon)

Версия 1.5 AavegotchiDAO. Это промежуточная станция между [Генезисом](/dao#genesis) и [Метаморфозой](/dao#metamorphosis). Основная задача этого этапа децентрализации — изменение игровой механики.

Фичи Cocoon:

* Вызов смарт-контакта с помощью Pixelcraft.
* Без апгрейдов смарт-контракта.
* Управление держателями токенов GHST.
* Платформа: Snapshot/Discourse.
* Награда — приобретение [опыта](/traits#experience) за голосование.
* Уровень: Polygon.

На данной стадии пользователи могут воспользоваться двумя видами голосований: Сигнальное(1) и Основное(2) предложение.

A Signal Proposal can be posted by anyone to the Community tab on [Snapshot](https://snapshot.org/#/aavegotchi.eth). Голосовать за будущее проекта вовсе не обязательно. Однако если предложение наберет необходимое для кворума число голосов, оно автоматически становится Основным предложением. Before you come up with a Signal Proposal, it is mandatory to discuss it with the community on the [DAO channel](https://discord.com/channels/732491344970383370/1031189663152623747) on Discord. Сделать это нужно, чтобы понимать, найдет ли ваше Сигнальное предложение поддержку, и есть ли смысл заморачиваться с его созданием. [Сигнальное предложение](/dao#creating-signal-proposals) сможет стать основным, если наберется кворум.

Это значит, что за данное конкретное предложение должно проголосовать 20% держателей циркулирующих токенов GHST, имеющих право голоса на Polygon.

Основное предложение — это идея, которую выдвигают разработчики Pixelcraft. Основное предложение может быть основано на Сигнальных предложениях, достигших или почти достигших кворума. Голосовать за Основное приложение нужно обязательно. За это положены очки опыта. Following the passing of [AGIP-127](/aavegotchi-improvement-proposals#increasing-xp-award-to-250-xp-for-successful-core-agips), the XP rewards have been increased to 250 XP and certain limitations and boundaries have been introduced for successful Core Proposals.

Тому Aavegotchi, которого вы отметили при создании Сигнального предложения, будет положено 150 [XP](/traits#experience)*, если предложение наберет кворум и будет повышено до Основного.

*Награда в виде очков опыта может увеличиваться или уменьшаться в течение всего периода Cocoon.

## Преображение (Metamorphosis)

Вторая фаза AavegotchiDAO нацелена на модификацию игровой механики. Она влияет на число Aavegotchis, добавление новых внутриигровых объектов, снабжение их определенными функциями. По мере приближения миграции в AavegotchiDAO Oasis, будет проведено голосование.

Если вас интересует полный список фич данного этапа AavegotchiDAO, его можно найти в разделе [Governance](https://docs.aavegotchi.com/overview/governance) смарт-контрактной документации Aavegotchi.

За участие в голосовании каждый держатель токенов получит дополнительные GHST.

Частичные фичи Метаморфозиса:

* Вызов смарт-контракта.
* Улучшение механики проекта.
* Управление владельцами Aavegotchi и держателями GHST.
* Платформа: пользовательский dapp-интерфейс.
* Награды: [XP](/traits#experience) + баджи за голосование.
* Уровень: Polygon.

## Оазис (Oasis)

Это последний этап на пути к децентрализации AavegotchiDAO. Однако не последний в модернизации проекта под управлением DAO. На этом этапе решения, связанные с Game и REALM механикой, расходами на развитие экосистемы, обновлением смарт-контрактов и т.д., будут приниматься членами AavegotchiDAO.

Держателям токенов будет положено вознаграждение за голосование в виде токенов GHST.

Фичи Oasis:

* Вызов смарт-контрактов.
* Апгрейд определенных игровых механик.
* Управление владельцами Aavegotchi и держателями GHST.
* Платформа: Aavegotchi Realm.
* Награды: [XP](/traits#experience) + баджи за голосование.
* Уровень: Polygon.

## Участие в управлении
Интригует... Как принять участие в AavegotchiDAO? Друг, мы уверены, что ты разберешься!

* You can participate in the discussions in the [DAO channel](https://discord.com/channels/732491344970383370/1031189663152623747) on Discord. We welcome everyone!

* Taking part in AavegotchiDAO votes (when they are available!)

* The [Aavegotchi Docs](https://docs.aavegotchi.com/overview/governance) details the list of DAO functions that members can call/use in order to implement changes that have been voted in. For example, let's say that asUSD has been voted in as a [collateral type](/posts/atokens). AavegotchiDAO could implement the change by using the `addCollateralTypes()` function and specifying asUSD within the function.

## Type of Proposals

There are 2 types of proposals in the *Cocoon* stage:

* **Signal Proposal** — A proposal that can be posted by anyone. Голосовать за будущее проекта вовсе не обязательно. Однако если предложение наберет необходимое для кворума число голосов, оно автоматически становится Основным предложением. Share your proposal idea and discuss it with other community members in the [DAO channel](https://discord.com/channels/732491344970383370/1031189663152623747) on Discord. Once you have finalized the details of your proposal, create an official thread for it on the DAO channel using the framework outlined in the [Creating Signal Proposals](/dao#creating-signal-proposals) section below. After which, create a vote for it on [Snapshot](https://snapshot.org/#/aavegotchi.eth).

* **Core Proposal** — If a Signal Proposal achieves 20% or greater quorum (amount of circulating GHST eligible to vote on Polygon), Pixelcraft will reintroduce the proposal as a Core Proposal. These votes are binding and are eligible for [XP](/traits#experience) rewards to participants.

<img class = "bodyImage" src = "/dao/proposal-type.png" alt = "AavegotchiDAO Proposal Type" />

**Core Proposals** are further subdivided into 3 types:

*Reminder: Quorum percentages are calculated from the amount of circulating GHST eligible to vote on Polygon, not the total supply!*

* **Smol votes:** Quorum of 5%. These votes are intended for small decisions that do not affect the overall meta or value of existing Aavegotchis in any significant way (e.g. introduction of a cosmetic feature, proposal for a marketing strategy).

* **Medium votes:** Quorum of 10%. These votes are intended for decisions that may have some notable effect on the meta (e.g. introducing a new game item, allocating XP to some item or event, changing something about an Aavegotchi that does not affect its rarity score).

* **Galaxy votes:** Quorum of 20%. These votes are intended for major decisions that have significant effects on the meta and wider Aavegotchi ecosystem (e.g. a new Haunt, changing something about an Aavegotchi that affects its rarity score).

## Vote Differentials

Vote differentials are the difference between the top two options, and are indicative of whether or not a reasonable consensus has been achieved.

Here is an example Core Proposal with 3 options:

* Option A receives 25%
* Option B receives 35%
* Option C receives 40%.

The required Vote Differential is 5% (the difference between Option C [40%] and Option B [35%]).

This would not be enough to achieve consensus, thus the Proposal is not implemented.

Typically, the more options a vote has, the higher Vote Differential it requires to demonstrate that true consensus has been reached.

For COCOON, we will begin with the following Vote Differential parameters, and course correct if necessary:

2 Options — 10% VD

3 Options — 15% VD

4 Options — 20% VD

## Creating Signal Proposals

To create signal proposals for the #GotchiGang to vote on, please adhere to the following format:

* Author + GotchiID
* Link to the [DAO channel](https://discord.com/channels/732491344970383370/1031189663152623747) thread on Discord (Proposals without significant discussion will be automatically removed from Snapshot)
* Summary (include rationale, timeline, goals and any key performance indicators) Copy/paste proposals of existing proposals will be removed while proposals with similar but distinct variations are permitted to exist side by side.
* Effect
* Highlight end goal and benefits
* Acknowledge potential risks or unintended consequences
* Any alternative paths (Plan B, Plan C, etc)
* The end time of a proposal should not be longer than 30 days from its starting time, to ensure that only active proposals are displayed on Snapshot Community board.

More details can be found in this [Medium post](https://aavegotchi.medium.com/scaling-aavegotchidao-c7e589de0333).

## Voting

Snapshot is a voting DApp on Ethereum. Votes made on Snapshot do not require any gas and are not on-chain. Aavegotchi's Snapshot page can be found [here](https://snapshot.org/#/aavegotchi.eth).

To vote on Snapshot, follow the steps below:

1). Go to an open proposal.

2). Connect your wallet.

<img class = "bodyImage" src = "/dao/snapshot1.jpg" alt = "Snapshot Voting Ethereum" />
<img class = "bodyImage" src = "/dao/snapshot2.jpg" alt = "Snapshot Voting Ethereum" />

3). Select a poll option, and click "Vote." A pop-up will appear to confirm your choice.

<img class = "bodyImage" src = "/dao/snapshot3.jpg" alt = "Snapshot Voting Ethereum" />
<img class = "bodyImage" src = "/dao/snapshot4.jpg" alt = "Snapshot Voting Ethereum" />

4). Your Metamask will pop up. Sign the transaction, and you're done!

<img class = "bodyImage" src = "/dao/snapshot5.jpg" alt = "sign transaction on Snapshot Voting" />

## Предложения по улучшению игры (AGIP)

Visit the [Aavegotchi Improvement Proposals](/aavegotchi-improvement-proposals) page for a list of historical votes.

Vote on AGIPs and get [POAP badges](/poap) for it!

## Treasury

As responsible stewards, members of AavegotchiDAO will play a role in determining how these funds are to be allocated.

The AavegotchiDAO treasury is located [here](https://aavegotchi.com/treasury).

MikeyJay and Eitri proposed the creation of a DAO Treasury Dashboard in [AGIP-76](/aavegotchi-improvement-proposals#create-a-dao-treasury-dashboard). The completed dashboard can be found [here](https://dune.com/eitri/aavegotchi-dao-treasury)
