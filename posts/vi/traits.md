---
author: wagyuchicken
date: '2020-04-23T07:00:00.000Z'
title: 'Traits'
description: 'Mọi thứ bạn cần biết về trait của Aavegotchi!'
contributors:
  - "cinnabarhorse"
  - "wagyuchicken"
---

Aavegotchi được sinh ra với các trait. Giống như các đặc điểm để định hình rằng bạn là một con người, trait của Aavegotchi rất quan trọng trong việc định hình sự đống động của một bé ma! Những lại đặc điểm này mà chúng sở hữu có ảnh hưởng đến[Trait Base Rarity](/rarity-farming#base-rarity-score) của chúng, cách chúng thể hiện trong minigame và [wearables](/wearables) mà chúng được mặc. Những Aavegotchi được triệu hồi từ [portals](/portals) được sinh ra với tổ hợp những trait được chỉ định ngẫu nhiên. Tuy nhiên, trait của Aavegotchi có thể thay đổi được với <a href=#level>level</a>, những wearable được trang bị và những consumble đã dùng. 

<div class="contentsBox">

**Nội dung**

<ol>
<li><a href=#randomly-generated-traits>Randomly Generated Traits </a></li>
<li><a href=#kinship>Kinship</a></li>
<li><a href=#experience>Experience</a></li>
<li><a href=#level>Level</a></li>
<li><a href=#haunt>Haunt</a></li>
</ol>

</div>

## Randomly Generated Traits
Aavegotchi có sáu đặc điểm:

* AGG = Aggressiveness (Hiếu Chiến)
* NRG = Energy (Năng Lượng)
* SPK = Spookiness (Đáng Sợ)
* BRN = Brain Size (Kích Thước Não)
* EYS = Hình Dạng Mắt
* EYC = Màu Mắt

Khi dùng dùng thuật ngữ RPG (Role-playing Game), `AGG` cũng tưng tự với Strength, `NRG` tương tự với Agility, `BRN` tương tự với Intelligence, and `SPK` là một trait cao cấp. Hãy nhớ rằng những trait này không hoàn toàn giống với những RPG tiêu chuẩn; trait có giá trị thấp trong metaverse của Aavegotchi thực sự rất mạnh!

Trait được định hình ở thời điểm người chơi mở [Portal](/portal). Khi mở Portal [Chainlink’s VRF random number generator function](https://blog.chain.link/verifiable-random-functions-vrf-random-number-generation-rng-feature/) được gọi để chỉ định các giá trị trait ngẫu nhiên cho Aavegotchi. These trait values are distributed on a bell-curve, and each trait is assigned a value of Common, Uncommon, Rare, or Mythical, depending on its rarity. The chances of getting each trait rarity is shown in the table below:

table_TraitsProbabilities

The bell curve for trait value distribution would look something like the following:

<img class="bodyImage" src="/traits/bell_curve.png" alt = "bell curve" />

Aavegotchis possess six traits initially, although these may be extended in the future via voting in [AavegotchiDAO](/dao). Some traits, like the Aavegotchi's body colour (other than plain old white), will be defined by the AavegotchiDAO for every new haunt!

Unlike other games, in Aavegotchi, there is no “optimal” trait. Each attribute (except for eye shape and eye color) has different effects in different mini-games. For example, Aavegotchis with higher energy may perform well in races, but would not perform well in a meditation mini-game.

The tables below detail each trait by rarity. *Note: The two tables should be seen as one. It has been split apart to render on mobile devices.*

table_TraitsByRarity1 table_TraitsByRarity2
<p style="margin-left: 3.0em"><i> (L) denotes "Low"; (H) denotes "High" </i></p>
<p style="margin-left: 3.0em"><i> *Common eye colours take on the colours of the staked collateral on your Aavegotchi. i.e. orange for aDAI, sky blue for aAAVE, purple for aETH etc. </i></p>

## Kinship
Kinship is your Aavegotchi’s feeling of loyalty towards you. Kinship is not randomly assigned, but rather starts at a fixed value (50) upon summon and increases or decreases based on various factors, such as how long the Aavegotchi has been with the same owner, and how often the owner interacts with it.

Typically, longer ownership equals higher kinship, but neglecting your Aavegotchi for long periods of time will lower its kinship level. Aavegotchis aren’t just vessels to store your crypto bags. They’re living, breathing ghosts, and they need your affection!

High kinship levels can boost your Aavegotchi’s performance in mini-games, and may also act as a multiplier for GHST rewards on governance and [rarity farming](/rarity-farming). Low kinship levels will have the opposite effect.

Some ways to boost your Aavegotchi’s kinship level:
<ul>
<li>Aavegotchis are born with a sense of civic duty. Bring your Aavegotchi to City Hall and let it vote in AavegotchiDAO;</li>
<li>Aavegotchis may be ghosts, but they have voracious appetites! Feed your Aavegotchi consumables to see its spooky smile;</li>
<li>Aavegotchis love trying on new clothes. Equip your Aavegotchi with new wearables to forge a lasting bond; </li>
<li>Aavegotchis love to play! Take your Aavegotchi out for a romp in the Aavegotchi Realm and level it up playing mini-games. </li>
</ul>

## Experience
Aavegotchis receive experience (XP) for voting in AavegotchiDAO and playing mini-games. Aavegotchis can also be sacrificed to remove their [collateral stake](/atokens) and have it transferred to another Aavegotchi. The recipient Aavegotchi will receive 100% of the sacrificed Aavegotchi’s accrued XP.

## Level
Aavegotchis level up as they gain more XP. Every three levels, Aavegotchis receive one [Spirit Point](/glossary#spirit-point) that can be allocated towards increasing or decreasing a certain trait. Some wearables can only be worn by Aavegotchis of a certain level.

## Haunt
Like pioneers to the New World, Aavegotchis travel from the Nether Realm to the Ether Realm in groups known as Haunts. The initial Haunt contains 10,000 Aavegotchis. Thereafter, new Haunts must be approved for travel by the AavegotchiDAO. Some wearables can only be worn by Aavegotchis belonging to a certain Haunt.
