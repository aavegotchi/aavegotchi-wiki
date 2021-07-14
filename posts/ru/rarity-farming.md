---
author: wagyuchicken
date: '2020-04-23T07:00:00.000Z'
title: 'Фарминг редкости Готчи'
description: 'Все что Вам нужно знать о Фарминге редкости Готчи'
contributors:
  - "cinnabarhorse"
  - "wagyuchicken"
  - "appellants"
---

<div class="headerImageContainer">
<img class="headerImage" src="/rarity-farming/rarity-farming.png">
<p class="headerImageText">Фарминг раритетных Готчи</p>
</div>

**Вступление**

Фарминг редкости — это уникальный игровой механизм, внедренный командой Аавеготчи. С его помощью разработчики планируют вознаграждать игроков, которые проявляют активность и энтузиазм при взаимодействии с игровой экосистемой. Как понятно по названию, это соревнование по выращиванию самых необычных и редких Готчи, за которые вас ожидает приятных бонус в токенах GHST.

На этой вики-странице вы узнаете, как можно заниматься разведением раритетов и как определяются самые редкие авегочи. Читайте дальше, чтобы узнать больше!

<div class="contentsBox">

**Содержание**

<ol>
<li><a href=#how-do-i-rarity-farm->Как заниматься фармингом раритетов (Rarity Farming)?</a>
</p>
<li><a href=#calculating-rarity>Как рассчитывается степень редкости?</a></li>
<p><a href=#base-rarity-score>Базовый показатель редкости.</a></p>
<p><a href=#absolute-rarity-score>Абсолютный показатель редкости.</a></p>
<p><a href=#final-rarity-score>Окончательный подсчет редкости.</a></p>
<li><a href=#rewards>Вознаграждение.</a></li>
<p><a href=#collecting-rarity-farming-rewards>Получение наград за фарминг.</a></p>
</ol>

</div>

## **Как я могу заниматься Фармингом Раритетов?**
Существует несколько способов, с помощью которых вы можете заняться фармингом раритетов. К ним относятся:

* **Призывать Гочти с самыми редкими чертами во время [вызова](/portals) его из портала.**

* **Экипировать Готчи за счет покупки [носимых предметов](/wearables).**

* **Участвовать в [мини-играх](/minigames).**

Подробную информацию об этом вы можете получить, перейдя по вышеуказанным страницам.

Однако, стоит учитывать, что уровень редкости — величина непостоянная. С течением времени показатель редкости будет меняться в соответствии с тем, как распределяются те или иные характеристики во вселенной Аавеготчи. Так что просто максимизировать уровень характеристик вашего Готчи — недостаточно. Нужно постоянно заниматься повышением его характеристик, чтобы удерживать пальму первенства и получать награды за фарминг. Есть еще один фактор, о котором не стоит забывать. Речь об усилиях игроков по созданию уникальных Готчи с определенными характеристиками. Например, если в какой-то период времени во вселенной игры станут популярными боевые Готчи с высокими показателями агрессии, то эта черта станет не такой редкой, и общий уровень редкости вашего Готчи снизится.

## **Как рассчитывается степень редкости?**

Расчет редкости ведется двумя показателями — базовым и абсолютным. От их суммы зависит окончательная оценка степени редкости вашего игрового персонажа.

### Базовый показатель редкости

Данный показатель именуется английской аббревиатурой BRS и рассчитывается суммарно по редкости характеристик и экипировки Готчи.

#### Как рассчитывается BRS?

Данный показатель рассчитывают по формуле:

```
if (number < 50) return 100 - number;
    else return number + 1;
```

*If trait value is **less than** 50, BRS = 100 - trait value*

*If trait value is **equal to or greater than** 50, BRS = trait value + 1*

#### Wearables BRS

Wearables BRS on the other hand, is dependent on its rarity. For example, rare [wearables](https://wiki.aavegotchi.com/en/wearables) yield 5 BRS and godlike wearables 50 BRS.

### Абсолютный показатель редкости.

Absolute Rarity Score (ARS) is derived from the particular rarity of the Aavegotchi's traits in the overall Aavegotchi ecosystem. For example, if a lot of players have trained their Aavegotchis to have highest Energy Level, then the ARS for high Energy Level - TURNT would be lower than that of lowest Energy Level - WASTED. ARS is calculated in terms of percentiles out of 100 for each of the Aavegotchi traits. So if 5% of all Aavegotchis possess a WASTED trait for example, then the WASTED trait will contribute to a total score of 95 to the Aavegotchi's energy trait ARS.

### Окончательный подсчет редкости.

<b>Final Rarity Score = Traits BRS + Wearables BRS + Traits ARS</b>

Example of the Final Rarity Score calculation is as shown below:

table_RarityScoreCalculationTable
<p style="margin-left: 2.8em"><i>BRS denotes Base Rarity Score; ARS denotes Absolute Rarity Score</i></p>

**The formula for ARS is not determined yet. As a result, the values in the ARS column in the above table are imaginary.**

## Вознаграждение.

In each period (length determined by AavegotchiDAO), the rarest Aavegotchis will receive a distribution of GHST rewards (derived from all sales involving GHST) that can be claimed by their owners.

Initially, there will be three categories of rarity farming rewards:
* Aavegotchi Rarity Scores (by BRS, ARS coming later)
* [Kinship](/traits#kinship) Scores
* [Experience](/traits#experience)

For each category, rarity farming rewards are distributed based on a descending curve, with the top few Aavegotchis earning more GHST rewards than other Gotchis who are positioned lower on the curve. There will be a cut-off point where Gotchis below that point do not receive any rewards. So try your best to be above that cut-off point. You will at least win something! (For [Rarity Farming Season 1](https://aavegotchi.medium.com/aavegotchi-rarity-farming-season-1-rewards-finalized-2db81e9f66e8), the top 5000 Gotchis in each category would qualify for rarity farming rewards).

The proportion of rewards allocated to each of the categories will be decided by the AavegotchiDAO.

More categories will be added later as the Aavegotchi game continues to develop.

Player Rewards will be distributed every two weeks via onchain snapshots. Initially, this will be a manual process handled by Pixelcraft, but eventually can be automated by the DAO. After each snapshot, rewards can be claimed by all successful rarity farmers and the next round immediately begins.

How are the GHST rewards for Rarity Farming funded? [40% of all GHST spent from wearables, consumables, and other game items are redirected into the Rarity Farming rewards pool](https://aavegotchi.medium.com/rarity-farming-has-arrived-heres-how-to-play-1f1d3342dbc8).

The final rarity score of an Aavegotchi in the overall Aavegotchi Universe is constantly shifting as players summon more Aavegotchis, equip more wearables, and level up their Aavegotchis. Thus, players must make strategic decisions on how they train and equip their Aavegotchis. That is how Aavegotchi's rarity farming encourage thoughtful gameplay and active participation from users, while rewarding the best farmers for their ghostly harvests.

There is currently no limit to how many interactions an Aavegotchi can perform each period, but if bot activity became a problem then the AavegotchiDAO could vote to add circuit breakers to reduce bot activity.

### Получение наград за фарминг.

Rarity Farming Rewards are disbursed to your Aavegotchi inventories (Yes! Each of your Aavegotchi has their own personal inventory!).

First, head over to the [My Aavegotchis page](https://aavegotchi.com/aavegotchis). Click on any one of your Aavegotchi. At the bottom-right corner of the screen, there will be a "Pocket" button. Click on it to view your Aavegotchi's inventory. You can see the amount of GHST your Gotchi has won from Rarity Farming (as well as their equipped wearables).