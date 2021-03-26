---
author: wagyuchicken
date: '2020-04-23T07:00:00.000Z'
title: 'Traits'
description: 'Everything you need to know about Aavegotchi traits!'
contributors:
  - "cinnabarhorse"
  - "wagyuchicken"
---

아베고치는 자신만의 특성이 있습니다. 마치 여러분이 가진 특성이 여러분이 누구인지를 정의하는 것과 같이, 아베고치의 특성들은 유령으로서의 활기를 결정해주는 것에 있어 중요합니다. 그들이 가지고 있는 여러 특성들은 그들의 ['특성을 기반으로한 희귀도(Trait Base Rarity)'](/rarity-farming#base-rarity-score)와 미니게임에서의 퍼포먼스, 그리고 그들이 착용할 수 있는 wearables에 영향을 줍니다. 포탈에서 소환된 아베고치는 무작위로 생성된 특성의 조합을 가지고 태어나게 됩니다. 그러나 아베고치의 특성은 <a href=#level>레벨</a>과 착용하고 있는 wearalbes, 그리고 사용된 consumables에 따라 바뀔 수 있습니다. 

<div class="contentsBox">

** 목차 **

<ol>
<li><a href=#randomly-generated-traits>무작위로 생성되는 특성들 </a></li>
<li><a href=#spirit-force-trait-modifiers>Spirit Force</a></li>
<li><a href=#kinship>친밀도</a></li>
<li><a href=#experience>경험치</a></li>
<li><a href=#level>레벨</a></li>
<li><a href=#haunt>Haunt!</a></li>
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

특성들은 포탈이 개방되는 시점에서 결정됩니다. 포탈을 개방한 후엔, [체인링크의 VRF, 일종의 난수 생성 함수](https://blog.chain.link/verifiable-random-functions-vrf-random-number-generation-rng-feature/)가 아베고치의 랜덤 특성을 지정하기 위해 실행됩니다. 6가지의 특성들은 종 모양의 곡선에 나눠 퍼져 있고, 각각의 특성은 희귀도에 따라 Common, Uncommon, Rare, 또는 Mythical 등급을 부여받게 됩니다. 각각의 특성에 대한 확률은 아래의 표에서 확인할 수 있습니다.

표_ 특성별 확률

특성들이 분배된 종 모양 곡선은 다음과 같습니다.

<img class="bodyImage" src="/traits/bell_curve.png" alt = "bell curve" />

현재는 아베고치가 6가지의 특성만을 가지고 있지만, 미래에 [아베고치DAO](/dao)에서의 투표를 통해 보다 확장이 될 수 있습니다. (밋밋한 흰색을 제외한) 아베고치의 몸 색깔과 같은 몇가지 특성들이 새로운 Haunt가 있을 때마다 추가될 수 있습니다.

다른 게임들과는 달리, 아베고치에서는 "최적"의 특성이 없습니다. 눈 모양이나 색깔을 제외한 각각의 소것ㅇ들은 다양한 미니게임에서 다른 효과를 냅니다. 예를 들어, NRG가 높은 아베고치는 레이스를 굉장히 잘 할 수 있지만, 명상 게임에서는 플레이가 좋지 않을 것입니다.

아래의 표에서 희귀도에 따른 각 특성을 상세히 확인할 수 있습니다. *Note: The two tables should be seen as one. It has been split apart to render on mobile devices.*

table_TraitsByRarity1 table_TraitsByRarity2
<p style="margin-left: 3.0em"><i> (L) denotes "Low"; (H) denotes "High" </i></p>
<p style="margin-left: 3.0em"><i> *Common eye colours take on the colours of the staked collateral on your Aavegotchi. i.e. orange for aDAI, sky blue for aAAVE, purple for aETH etc. </i></p>

## Spirit Force

The type of [spirit force](/atokens) that your Aavegotchi has also influences their trait values:

table_spiritForceModifiers

## 친밀도
Kinship is your Aavegotchi’s feeling of loyalty towards you. Kinship is not randomly assigned, but rather starts at a fixed value (50) upon summon and increases or decreases based on various factors, such as how long the Aavegotchi has been with the same owner, and how often the owner interacts with it. The minimum kinship value is 0. The maximum kinship value is 500.

Typically, longer ownership equals higher kinship, but neglecting your Aavegotchi for long periods of time will lower its kinship level. Aavegotchis aren’t just vessels to store your crypto bags. They’re living, breathing ghosts, and they need your affection!

A maximum of 1 Kinship point is accrued for every 12 hour period in which you interact with your Aavegotchi. Conversely, there will be a -1 Kinship point penalty if your Aavegotchi is left unengaged for 24 hours.

Potions could also be used to improve kinship scores. However, they are limited edition consumables and may not always be available in the Aavegotchi store. More details on potions will be available soon.

High kinship levels can boost your Aavegotchi’s performance in mini-games, and may also act as a multiplier for GHST rewards on governance and [rarity farming](/rarity-farming). Low kinship levels will have the opposite effect.

Some ways to boost your Aavegotchi’s kinship level:

* Aavegotchis are born with a sense of civic duty. Bring your Aavegotchi to City Hall and let it vote in AavegotchiDAO;
* Aavegotchis may be ghosts, but they have voracious appetites! Feed your Aavegotchi consumables to see its spooky smile;
* Aavegotchis love trying on new clothes. Equip your Aavegotchi with new wearables to forge a lasting bond;
* Aavegotchis love to play! Take your Aavegotchi out for a romp in the Aavegotchi Realm and level it up playing mini-games.

The table below shows the kinship level and their value range.

table_kinship


## 경험치
Aavegotchis receive experience (XP) for voting in AavegotchiDAO and playing mini-games. Aavegotchis can also be sacrificed to remove their [collateral stake](/atokens) and have it transferred to another Aavegotchi. The recipient Aavegotchi will receive 100% of the sacrificed Aavegotchi’s accrued XP.

## 레벨
Aavegotchis level up as they gain more XP. Every three levels, Aavegotchis receive one [Spirit Point](/glossary#spirit-point) that can be allocated towards increasing or decreasing a certain trait. Some wearables can only be worn by Aavegotchis of a certain level.

For detailed information on the XP required for each level, click [here](/xp).

## Haunt!
Like pioneers to the New World, Aavegotchis travel from the Nether Realm to the Ether Realm in groups known as Haunts. The initial Haunt contains 10,000 Aavegotchis. Thereafter, new Haunts must be approved for travel by the AavegotchiDAO. Some wearables can only be worn by Aavegotchis belonging to a certain Haunt.
