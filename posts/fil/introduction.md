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

Ang **Aavegotchi** ay isang DeFi-enabled crypto collectibles game na ginawa ng Pixelcraft Studios na nakabase sa Singapore. Sa Aavegotchi, puwedeng mag-deposit ang players ng [aTokens](/atokens), na kumikita ng interes, sa [non-fungible token (NFT)](/glossary#non-fungible-token) avatars nila. Puwede ring makilahok ang players sa Aavegotchi [metaverse](/metaverse). Ang Aavegotchi ay isang unique na combination ng [Decentralized Finance (DeFi)](/glossary#defi-101) at NFTs.

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

*  **Collateral stake:** Ang bawat Aavegotchi ERC721 NFT ay may isang escrow contract address o wallet kung saan naka-deposit ang Aave-backed na ERC20 collateral nito. Kumikita ang collateral na ito—na kilala rin bilang "[aTokens](/atokens)"—sa tulong ng LendingPool ng Aave, na siyang nagpaparami sa dami ng aTokens na hawak ng Aavegotchi. Sa madaling salita, lumalaki ang nai-deposit na aTokens sa wallet ng Aavegotchi habang tumatagal.


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

* **Rarity value** Rarity value is determined by calculating the rareness of each Aavegotchi’s traits and equipped wearables within the Aavegotchi universe. Unlike other NFT games, rarity is not a fixed value in Aavegotchi. It can change over time as Aavegotchis level up and equip different wearables. Thus, a rare Aavegotchi one week could become common, and vice versa, depending on the overall distribution of traits and wearables within the Aavegotchi universe. This enables a novel concept known as “rarity farming”, which is explained in [this page](/rarity-farming).

## The Aavegotchi Universe
The Aavegotchi Universe encompasses all the elements that allow Aavegotchis to operate:
* [Portals](/portals)
* [GHST Utility Token](/ghst)
* [AavegotchiDAO](/dao)
* [Aavegotchi Realm](/metaverse)