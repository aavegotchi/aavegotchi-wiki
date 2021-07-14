---
author: wagyuchicken
date: '2020-04-23T07:00:00.000Z'
title: 'Характеристики'
description: 'Все о характеристиках и чертах Готчи!'
contributors:
  - "cinnabarhorse"
  - "wagyuchicken"
---

Аавеготчи с рождения наделены чертами. В точности, как ваши черты характера определяют то, кем вы есть, работают и черты Аавеготчи. Они определяют их свойства, характеристики и жизненный цикл. Многочисленные черты оказывают прямое влияние на [базовую редкость](/rarity-farming#base-rarity-score) персонажа, эффективность в [мини-играх](/minigames), а также перечень подходящего для них [игрового шмота](/wearables). При рождении, появляющиеся из [порталов](/portals) Аавеготчи имеют сгенерированный автоматически набор черт. Но вы сможете управлять характером своего персонажа, развивая его до более высоких <a href=#level>уровней</a>, используя дополнительный игровой шмот и расходники. 

<div class="contentsBox">

**Содержание**

<ol>
<li><a href=#randomly-generated-traits>Рандомно сгенерированные черты. </a></li>
<li><a href=#spirit-force-trait-modifiers>Модификаторы силы Духа.</a></li>
<li><a href=#kinship>Сродство (лояльность).</a></li>
<li><a href=#experience>Опыт.</a></li>
<li><a href=#level>Уровень.</a></li>
<li><a href=#haunt>Поколение.</a></li>
</ol>

</div>

## Рандомно сгенерированные черты
У любого персонажа в игре есть шесть основных черт. Среди них:

* AGG = Уровень агрессии.
* NRG = Показатель энергии.
* SPK = Насколько жуткий Готчи.
* BRN = Показатель интеллекта.
* EYS = Форма глаз.
* EYC = Цвет глаз.

Если сравнивать с RPG-играми, то `AGG` - это, как сила в ролевых играх, `NRG` - эквивалентно ловкости, а `BRN` - интеллекту. `SPK` в данном случае выбирается рандомно. Отличием от RPG в Aavegotchi вселенной является тот факт, что низкие значения основных черт не означают, что персонаж безнадежно слабый.

Все черты задаются при открытии [портала](/portals). Как только он открывается, рандомно генерируются черты с помощью генератора случайных чисел [Chainlink’s VRF](/glossary#chainlink-vrf). Персонажи получают рандомные черты, распределяющиеся по колоколообразной кривой. У каждой черты на старте появляется значение, соответствующее ее уровню редкости: Обычное, Необычное, Редкое или Мифическое. Диапазон черт и вероятность редкости Вот как выглядят шансы на получение той или иной черты:

table_TraitsProbabilities

Процесс распределения характеристик на колоколообразной кривой выглядит так:

<img class="bodyImage" src="/traits/bell_curve.png" alt = "bell curve" />

В момент запуска игры в Aavegotchis заложено наличие шести характеристик. Однако в будущем их число может быть существенно расширено путем голосования сообщества в AavegotchiDAO. В процессе эволюции игры будет возможность проголосовать за цвет тела каждого нового призрака.

Говоря о характеристиках, нужно еще раз подчеркнуть, что “слабые” характеристики не означают, что играть за такого персонажа будет невыгодно. Наоборот, сочетание разных настроек характеристик способствует специализации призраков. Дает им преимущество перед другими в мини-играх. Например, при высоких показателях энергии персонаж сможет отлично выступать в гонках, но там, где скорость не имеет значения, он не будет иметь решающего преимущества. Среди остальных качеств только форма и цвет глаз не оказывают влияния на игровые показатели. Остальные все имеют значение для геймплея.

The tables below detail each trait by rarity. *Note: The two tables should be seen as one. It has been split apart to render on mobile devices.*

table_TraitsByRarity1 table_TraitsByRarity2
<p style="margin-left: 3.0em"><i> (L) denotes "Low"; (H) denotes "High" </i></p>
<p style="margin-left: 3.0em"><i> *Common eye colours take on the colours of the staked collateral on your Aavegotchi. i.e. orange for aDAI, sky blue for aAAVE, purple for aETH etc. </i></p>

For more detailed information on every single Eye Shape, check out the [Eye Shape page](/eye-shape).

## Модификаторы силы Духа.

The type of [spirit force](/atokens) that your Aavegotchi has also influences their trait values:

table_spiritForceModifiers

## Сродство (лояльность).
Kinship is your Aavegotchi’s feeling of loyalty towards you. Kinship is not randomly assigned, but rather starts at a fixed value (50) upon summon and increases or decreases based on various factors, such as how long the Aavegotchi has been with the same owner, and how often the owner interacts with it. The minimum kinship value is 0. There is no maximum kinship value.

Typically, longer ownership equals higher kinship, but neglecting your Aavegotchi for long periods of time will lower its kinship level. Aavegotchis aren’t just vessels to store your crypto bags. They’re living, breathing ghosts, and they need your affection!

A maximum of 1 Kinship point is accrued for every 12 hour period in which you interact with your Aavegotchi. Conversely, there will be a -1 Kinship point penalty if your Aavegotchi is left unengaged for 24 hours.

Kinship exists as an internal balance on the Aavegotchi smart contract.

Potions could also be used to improve kinship scores. However, they are limited edition consumables and may not always be available in the Aavegotchi store. More details on potions will be available soon.

High kinship levels can boost your Aavegotchi’s performance in mini-games, and may also act as a multiplier for GHST rewards on governance and [rarity farming](/rarity-farming). Low kinship levels will have the opposite effect.

Some ways to boost your Aavegotchi’s kinship level:

* Aavegotchis are born with a sense of civic duty. Bring your Aavegotchi to City Hall and let it vote in AavegotchiDAO;
* Aavegotchis may be ghosts, but they have voracious appetites! Feed your Aavegotchi consumables to see its spooky smile;
* Aavegotchis love trying on new clothes. Equip your Aavegotchi with new wearables to forge a lasting bond;
* Aavegotchis love to play! Take your Aavegotchi out for a romp in the Aavegotchi Realm and level it up playing mini-games.

The table below shows the kinship level and their value range.

table_kinship


## Опыт.
Aavegotchis receive experience (XP) for voting in AavegotchiDAO and playing mini-games. Aavegotchis can also be sacrificed to remove their [collateral stake](/atokens) and have it transferred to another Aavegotchi. The recipient Aavegotchi will receive 100% of the sacrificed Aavegotchi’s accrued XP.

XP exists as an internal balance on the Aavegotchi smart contract.

## Уровень.
Aavegotchis level up as they gain more XP. Каждые три уровня игры приносят Готчам одно [очко Духа](/glossary#spirit-point), с помощью которого можно увеличить или уменьшить какую-то характеристику. Some wearables can only be worn by Aavegotchis of a certain level.

For detailed information on the XP required for each level, click [here](/xp).

## Поколение.
Like pioneers to the New World, Aavegotchis travel from the Nether Realm to the Ether Realm in groups known as Haunts. The initial Haunt contains 10,000 Aavegotchis. Thereafter, new Haunts must be approved for travel by the [AavegotchiDAO](/dao). Some wearables can only be worn by Aavegotchis belonging to a certain Haunt.

Think of Haunts as editions, with Haunt numbers being indicated on the Gotchi. There will be no stats differences between Haunts. The team is exploring `bodyColor` on Aavegotchis to differentiate between Haunts.