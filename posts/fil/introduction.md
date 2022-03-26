---
author: Coder Dan
date: '2020-04-23T07:00:00.000Z'
title: 'Aavegotchi'
description: 'Ang Introduction sa Aavegotchi Wiki'
image: "aavegotchi.png"
contributors:
  - "cinnabarhorse"
  - "unintelligent-nerd"
---

<div class="headerImageContainer">
<img class="headerImage" src="/aavegotchi.png" alt="aavegotchi" />
<p class="headerImageText">Aavegotchi</p>
</div>

**Aavegotchi** is a DeFi-enabled crypto collectibles game developed by Singapore-based Pixelcraft Studios that allows players to stake [Non-fungible tokens (NFTs)](/glossary#non-fungible-token) avatars with [interest-generating tokens](/spirit-force) and interact with the Aavegotchi [metaverse](/gotchiverse). Ang Aavegotchi ay isang unique na combination ng [Decentralized Finance (DeFi)](/glossary#defi-101) at NFTs.

Ang Aavegotchis ay mga pixelated na multo na nasa Ethereum blockchain, at ginawa sila ayon sa [**ERC-721**](/glossary#erc-721) standard. Nakabase ang kanilang value sa rarity level, na nakabase sa iba't ibang factors tulad ng base [traits](/traits), halaga ng naka-deposit na collateral/aTokens, at suot na [wearables](/wearables).

Para ma-level up ang kanilang Aavegotchis, puwedeng makilahok ang players sa iba't ibang activities tulad ng [mini-games](/minigames), governance, at meetups. Puwede ring tumaas ang rarity level ng Aavegotchis kapag nagsuot sila ng in-game wearables at kapag nag-level up sila.

Hindi lang mataas ang halaga ng rare Aavegotchis kapag ibebenta sa [baazaar](/baazaar). Mas magaling din sila mag-perform sa [rarity farming](/rarity-farming)—isang minigame kung saan may reward na GHST tokens ang pinaka-rare na Aavegotchis.

Ang Aavegotchi ay pinamumunuan ng [AavegotchiDAO](/dao) na siyang namamahala sa lahat ng pera na na-generate sa distribution ng [GHST token](/ghst).

<div class="contentsBox">

**Nilalaman**

<ol>
<li><a href=#about-aavegotchis>Tungkol sa Aavegotchis</a></li>
<li><a href=#aavegotchi-value>Ang Halaga ng Aavegotchi</a></li>
<li><a href=#the-aavegotchi-universe>Ang Aavegotchi Universe</a></li>
</ol>

</div>

## Tungkol sa Aavegotchis
Ang Aavegotchis ay rare crypto-collectibles na nasa Ethereum blockchain, ginawa base sa ERC-721 standard na ginamit din sa iba pang sikat na blockchain games tulad ng CryptoKitties, Axie Infinity, at Cryptovoxels. May tatlong attributes ang Aavegotchis na nagde-determine sa kabuuang value at rarity nila sa Aavegotchi universe: **collateral stake, traits, at wearables.**

*  **Collateral stake:** Ang bawat Aavegotchi ERC721 NFT ay may isang escrow contract address o wallet kung saan naka-deposit ang Aave-backed na ERC20 collateral nito. [aTokens](/spirit-force) generate yield via Aave’s LendingPool, which increases the quantity of aTokens held in the wallet. Sa madaling salita, lumalaki ang nai-deposit na aTokens sa wallet ng Aavegotchi habang tumatagal.


*  **Traits:** May taglay na iba't-ibang katangian o traits ang Aavegotchis na nakaaapekto sa kanilang rarity, sa galing nila sa mini-games, at sa wearables na puwede nilang isuot. Ang ilan sa traits na ito ay suwertihang nakukuha o randomly generated, habang nakadepende naman sa pakikisalamuha ng player sa Aavegotchi niya ang iba pang traits. **Tingnan ang [Traits](/traits).**

    * **Random Traits**: Pagkasilang nila, ang bawat Aavegotchi ay binibigyan ng ilang random trait values gamit ang ChainLink VRF na isang random number generator. Naka-distribute ang trait values sa isang bell curve, at ang bawat trait ay nagiging Common, Uncommon, Rare, o Mythical depende sa rarity nito.

    *  **Kinship**: Hindi randomly assigned ang “Kinship”. Sa halip, nagsisimula ito sa isang naka-fix na value (50) pagkasilang ng Aavegotchi. Tumataas o bumababa ang kinship base sa iba't-ibang factors, tulad ng tagal ng Aavegotchi sa parehong may-ari, at kung gaano kadalas makisalamuha ang may-ari sa kanya.

    *  **Experience:** Tumataas ang level ng Aavegotchis habang dumarami ang kanilang experience sa pamamagitan ng pagboto sa AavegotchiDAO at sa pagsali sa mini-games. Kada tatlong level, nakatatanggap ang Aavegotchis ng isang [Spirit Point](/glossary#spirit-point) na puwedeng gamitin sa pagpapataas o pagpapababa ng isang trait.

* **Wearables** Bukod sa pagma-manage sa aToken escrow o wallet, sinusunod din ng Aavegotchis ang [ERC998 Composables standard](/glossary#erc-998). Sa standard na ito, puwedeng mag-manage ng sariling NFTs ang Aavegotchis mismo, at ang NFTs na ito ay mas kilala bilang wearables sa ecosystem ng Aavegotchi. Hindi lahat ng wearables ay masusuot ng lahat ng Aavegotchis. May wearables na posibleng maging exclusive para sa Aavegotchis na may naka-deposit na certain collaterals, nasa certain level, at may certain traits. May wearables na puwedeng magpataas o magpababa sa certain traits ng isang Aavegotchi. Halimbawa, puwedeng mapataas ng isang espada ang aggressiveness ng isang Aavegotchi, habang puwede namang mapababa ng isang Bob Marley shirt ang energy level nito.

Ang relasyon sa pagitan ng Collateral Stake, Traits, Wearables, at Kinship ay mas mapapaliwanag ng isang Onion Diagram (nasa baba). Bawat layer sa diagram ay nakadepende sa iba pang layers, at ang pinagsama-samang layers ay ang Aavegotchi mismo!

<img class = "bodyImage" src = "/introduction/aavegotchi-onion-diagram.png" alt = "Aavegotchi Onion Diagram" />

## Halaga ng Aavegotchi
Nanggagaling ang halaga ng isang Aavegotchi sa intrinsic na value nito at sa kung gaano ito ka-rare.

* **Intrinsic value** Ang intrinsic value ng Aavegotchi ay nagmumula sa halaga ng collateral na nasa loob nito. Kung may naka-deposit na 10 aDAI sa Aavegotchi, ang intrinsic na value nito ay 10 aDAI, plus kung anong dagdag na aDAI na makukuha mula sa Lending Pool. Sa simula, [ERC20](/glossary#erc-20) tokens na nakalista sa Aave platform (aTokens) lang ang pwedeng maging collaterals. Pero sa oras na mai-launch ang AavegotchiDAO, puwedeng pagbotohan ng community ang bagong collaterals na gusto nilang idagdag.

* **Rarity value** Nakukuha ang rarity value sa pamamagitan ng pag-calculate sa rarity ng bawat trait at bawat wearable ng lahat ng Aavegotchi sa in-game universe. Kumpara sa ibang NFT games, hindi naka-fix ang value ng rarity sa Aavegotchi. Puwedeng magbago ang rarity sa paglipas ng panahon habang tumataas ang level ng Aavegotchis at nagsusuot sila ng iba't-ibang wearables. Kaya, ang Aavegotchi na maituturing na bihira ngayong linggo ay puwedeng maging pangkaraniwan sa susunod, at vice versa, depende sa pangkalahatang distribution ng traits at wearables sa loob ng Aavegotchi universe. Dito pumpapasok ang tinatawag na “rarity farming”, na maipapaliwanag sa [page na ito](/rarity-farming).

## Ang Aavegotchi Universe
Binubuo ang Aavegotchi Universe ng lahat ng mga bagay na nagpapagalaw sa Aavegotchis:
* [Portals](/portals)
* [GHST Utility Token](/ghst)
* [AavegotchiDAO](/dao)
* [Aavegotchi Realm](/gotchiverse)