---
author: wagyuchicken
date: '2014-04-26T22:00:00.000Z'
title: 'Характеристики'
description: 'Все о характеристиках и чертах Готчи!'
contributors:
  - "cinnabarhorse"
  - "wagyuchicken"
  - "unintelligent-nerd"
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
<li><a href=#alchemica-carrying-capacity>Alchemica Carrying Capacity</a></li>
<li><a href=#aging-mechanic>Aging Mechanic</a></li>
<li><a href=#trait-mappings>Trait Mappings</a></li>
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

<img class="bodyImage" src="/traits/bell_curve.png" alt = "колоколообразная кривая" />

В момент запуска игры в Aavegotchis заложено наличие шести характеристик. Однако в будущем их число может быть существенно расширено путем голосования сообщества в AavegotchiDAO. В процессе эволюции игры будет возможность проголосовать за цвет тела каждого нового призрака.

Говоря о характеристиках, нужно еще раз подчеркнуть, что “слабые” характеристики не означают, что играть за такого персонажа будет невыгодно. Наоборот, сочетание разных настроек характеристик способствует специализации призраков. Дает им преимущество перед другими в мини-играх. Например, при высоких показателях энергии персонаж сможет отлично выступать в гонках, но там, где скорость не имеет значения, он не будет иметь решающего преимущества. Среди остальных качеств только форма и цвет глаз не оказывают влияния на игровые показатели. Остальные все имеют значение для геймплея.

Все особенности характеристик по степени их редкости изложены в ниже приведенной таблице. *Примечание: две таблицы следует рассматривать как одну. Они были разделены на две части для лучшего отображения на мобильных устройствах*.

table_TraitsByRarity1 table_TraitsByRarity2
<p style="margin-left: 3.0em"><i> (Н) означает "Низкий"; (В) означает "Высокий" </i></p>
<p style="margin-left: 3.0em"><i> Ps. Цвет глаз обычно связан с тем, какие токены лежат на депозите. Для aDAI дан оранжевый, для aAAVE - голубой, для aETH - фиолетовый, и т.д. </i></p>

См. [эту](/eye-shape) информацию.

## Модификаторы силы Духа

The type of [spirit force](/spirit-force) that your Aavegotchi has also influences their trait values:

table_spiritForceModifiers

## Сродство (лояльность)
Это чувство, которое Аавеготчи чувствует к игроку. More information can be found on the [Kinship page](/kinship).

## Опыт
Aavegotchis receive experience (XP) for:
* Voting in [AavegotchiDAO](/dao)
* Participating in events held on Aavegotchi Discord (a Typeform will be released during the event for people to complete to receive XP for their Gotchis)
* Playing [mini-games](/minigames) (only during certain periods as announced on Discord)

Aavegotchis can also be sacrificed to remove their [spirit force](/spirit-force) and have it transferred to another Aavegotchi. The recipient Aavegotchi will receive 100% of the sacrificed Aavegotchi’s accrued XP.

XP exists as an internal balance on the Aavegotchi smart contract.

XP can be viewed on the [Aavegotchi profile page](/aavegotchi-profile).

## Уровень
Aavegotchis level up as they gain more XP. Каждые три уровня игры приносят Готчам одно [очко Духа](/glossary#spirit-point), с помощью которого можно увеличить или уменьшить какую-то характеристику. Some wearables can only be worn by Aavegotchis of a certain level.

The higher your Gotchi level, the more [guilds](/guild) they are allowed to join.

For detailed information on the XP required for each level, click [here](/xp).

Your Aavegotchi level can be viewed on the [Aavegotchi profile page](/aavegotchi-profile).

## Поколение
Like pioneers to the New World, Aavegotchis travel from the Nether Realm to the Ether Realm in groups known as [Haunts](/haunt). The initial Haunt contains 10,000 Aavegotchis. Thereafter, new Haunts must be approved for travel by the [AavegotchiDAO](/dao). Some wearables can only be worn by Aavegotchis belonging to a certain Haunt.

Think of Haunts as editions, with Haunt numbers being indicated on the Gotchi. There will be no stats differences between Haunts.

## Alchemica Carrying Capacity

[BRS](/rarity-farming#base-rarity-score) is used to boost a gotchi's carrying capacity with the follow formula:

```
Carrying Capacity = 100 * (BRS/300)^2
```

E.g. a Gotchi with:

* BRS = 600 has a carrying capacity of 400 [Alchemica](/gotchus-alchemica) chunks

* BRS = 900 has a carrying capacity of 900 Alchemica chunks

## Aging Mechanic

[Aavegotchi Improvement Proposal 13](/aavegotchi-improvement-proposals#add-an-aging-mechanic-to-affect-aavegotchi-rarity-scores) introduced an aging mechanic for Aavegotchis.

Gotchis would receive a small boost to their [BRS](/rarity-farming#base-rarity-score) as they age. This is to counteract statistical variance between haunts and reward long term engagement.

For more information, check out the [Aging Mechanic](/aging-mechanic) page.

## Trait Mappings

These 6 traits are the base traits. To turn Aavegotchi into a full-fledged game in the [Gotchiverse](/gotchiverse), we need more nuanced variables.

Find out what these base traits map into in the [Trait Mappings page](/trait-mappings).