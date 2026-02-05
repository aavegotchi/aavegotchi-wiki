---
author: wagyuchicken
date: '2020-04-23T07:00:00.000Z'
title: 'Traits'
description: 'Everything you need to know about Aavegotchi traits!'
contributors:
  - "cinnabarhorse"
  - "wagyuchicken"
  - "unintelligent-nerd"
---

아베고치는 자신만의 특성이 있습니다. 마치 여러분이 가진 특성이 여러분이 누구인지를 정의하는 것과 같이, 아베고치의 특성들은 유령으로서의 활기를 결정해주는 것에 있어 중요합니다. These multiple traits that they possess influence their [Trait Base Rarity](/rarity-farming#base-rarity-score), their performance in [mini-games](/minigames), and the [wearables](/wearables) that they are allowed to wear. 포탈에서 소환된 아베고치는 무작위로 생성된 특성의 조합을 가지고 태어나게 됩니다. 그러나 아베고치의 특성은 <a href=#level>레벨</a>과 착용하고 있는 wearalbes, 그리고 사용된 consumables에 따라 바뀔 수 있습니다. 

<div class="contentsBox">

** 목차 **

<ol>
<li><a href=#randomly-generated-traits>무작위로 생성되는 특성들 </a></li>
<li><a href=#spirit-force-trait-modifiers>Spirit Force</a></li>
<li><a href=#kinship>친밀도</a></li>
<li><a href=#experience>경험치</a></li>
<li><a href=#level>레벨</a></li>
<li><a href=#haunt>Haunt!</a></li>
<li><a href=#alchemica-carrying-capacity>Alchemica Carrying Capacity</a></li>
<li><a href=#aging-mechanic>Aging Mechanic</a></li>
<li><a href=#trait-mappings>Trait Mappings</a></li>
</ol>

</div>

## 무작위로 생성되는 특성들
아베고치는 6가지의 특성을 가지고 있습니다.

* AGG = 호전성
* NRG = 활기, 에너지
* SPK = 으스스함, 공포스러움
* BRN = 뇌의 크기
* EYS = 눈의 모양
* EYC = 눈의 색깔

RPG(롤플레잉 게임) 용어를 이용하자면, `AGG`는 힘과 동일하고, `NRG`는 민첩함, `BRN`은 지능, 그리고 `SPK` 는 일종의 와일드카드 특성과 같습니다. 그렇지만 이러한 특성들이 표준 RPG 특성과 정확하게 일치하지는 않다는 것을 명심하셔야 합니다! 아베고치의 메타버스에서는 낮은 수치의 특성 역시 강력합니다!

특성들은 포탈이 개방되는 시점에서 결정됩니다. Upon opening of a Portal, [Chainlink’s VRF random number generator function](/glossary#chainlink-vrf) is called to assign Aavegotchis with random trait values. 6가지의 특성들은 종 모양의 곡선에 나눠 퍼져 있고, 각각의 특성은 희귀도에 따라 Common, Uncommon, Rare, 또는 Mythical 등급을 부여받게 됩니다. 각각의 특성에 대한 확률은 아래의 표에서 확인할 수 있습니다.

표_ 특성별 확률

특성들이 분배된 종 모양 곡선은 다음과 같습니다.

<img class="bodyImage" src="/traits/bell_curve.png" alt = "bell curve" />

현재는 아베고치가 6가지의 특성만을 가지고 있지만, 미래에 [아베고치DAO](/dao)에서의 투표를 통해 보다 확장이 될 수 있습니다. (밋밋한 흰색을 제외한) 아베고치의 몸 색깔과 같은 몇가지 특성들이 새로운 Haunt가 있을 때마다 추가될 수 있습니다.

다른 게임들과는 달리, 아베고치에서는 "최적"의 특성이 없습니다. 눈 모양이나 색깔을 제외한 각각의 소것ㅇ들은 다양한 미니게임에서 다른 효과를 냅니다. 예를 들어, NRG가 높은 아베고치는 레이스를 굉장히 잘 할 수 있지만, 명상 게임에서는 플레이가 좋지 않을 것입니다.

아래의 표에서 희귀도에 따른 각 특성을 상세히 확인할 수 있습니다. *Note: The two tables should be seen as one. It has been split apart to render on mobile devices.*

table_TraitsByRarity1 table_TraitsByRarity2
<p style="margin-left: 3.0em"><i> (L) denotes "Low"; (H) denotes "High" </i></p>
<p style="margin-left: 3.0em"><i> *Common eye colours take on the colours of the staked collateral on your Aavegotchi. i.e. orange for aDAI, sky blue for aAAVE, purple for aETH etc. </i></p>

For more detailed information on every single Eye Shape, check out the [Eye Shape page](/eye-shape).

## Spirit Force

The type of [spirit force](/spirit-force) that your Aavegotchi has also influences their trait values:

table_spiritForceModifiers

## 친밀도
Kinship is your Aavegotchi’s feeling of loyalty towards you. More information can be found on the [Kinship page](/kinship).

## 경험치
Aavegotchis receive experience (XP) for:
* Voting in [AavegotchiDAO](/dao)
* Participating in events held on Aavegotchi Discord (a Typeform will be released during the event for people to complete to receive XP for their Gotchis)
* Playing [mini-games](/minigames) (only during certain periods as announced on Discord)

Aavegotchis can also be sacrificed to remove their [spirit force](/spirit-force) and have it transferred to another Aavegotchi. The recipient Aavegotchi will receive 100% of the sacrificed Aavegotchi’s accrued XP.

XP exists as an internal balance on the Aavegotchi smart contract.

XP can be viewed on the [Aavegotchi profile page](/aavegotchi-profile).

## 레벨
Aavegotchis level up as they gain more XP. Every three levels, Aavegotchis receive one [Spirit Point](/glossary#spirit-point) that can be allocated towards increasing or decreasing a certain trait. Some wearables can only be worn by Aavegotchis of a certain level.

The higher your Gotchi level, the more [guilds](/guild) they are allowed to join.

For detailed information on the XP required for each level, click [here](/xp).

Your Aavegotchi level can be viewed on the [Aavegotchi profile page](/aavegotchi-profile).

## Haunt!
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