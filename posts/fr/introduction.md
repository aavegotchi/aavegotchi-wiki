---
author: Coder Dan
date: '2020-04-23T07:00:00.000Z'
title: 'Aavegotchis'
description: 'Présentation du Wiki Aavegotchi'
image: "aavegotchi.png"
contributors:
  - "cinnabarhorse"
  - "unintelligent-nerd"
---

<div class="headerImageContainer">
<img class="headerImage" src="/aavegotchi.png" alt="aavegotchi" />
<p class="headerImageText">Aavegotchis</p>
</div>

**Aavegotchi** est un jeu d'objets de collection crypto compatible DeFi développé par Pixelcraft Studios, basé à Singapour, qui permet aux joueurs d'invoquer des avatar [en jetons non-fongibles](/glossary#non-fungible-token) (NFTs) avec des [jetons générateurs d'intérêts](/spirit-force) et d'interagir avec le [métaverse Aavegotchi](/gotchiverse). Il s'agit d'une combinaison unique de [Finance décentralisée (DeFi)](/glossary#defi-101) et NFTs.

Les Aavegotchis sont des fantômes pixélisés vivant sur la blockchain Ethereum, soutenus par le standard [**ERC-721**](/glossary#erc-721). Leur valeur est déterminée par le niveau de rareté, qui est calculé à l'aide de multiples facteurs, tels que les traits de base [](/traits), la quantité de collateral/aTokens, et [des objets portables équipés](/wearables).

Pour améliorer le niveau de leurs Aavegotchis, les joueurs peuvent participer à une variété d'activités. Incluant [mini-jeux](/minigames), gouvernance et évènements. Les Aavegotchis peuvent également augmenter leur niveau de rareté en s'équipant d'objets dans le jeu et en augmentant de niveau.

Les Aavegotchis rares n'ont pas seulement une valeur sur le marché secondaire [(baazaar)](/baazaar) plus élevée. Mais ils permettent également aux Aavegotchi de mieux figurer dans l'[agriculture de rareté](/rarity-farming) (rarity farming). Il s'agit d'un mini-jeu qui récompense les Aavegotchis les plus rares avec des jetons GHST.

Aavegotchi est gouverné par [AavegotchiDAO](/dao) qui gère tous les fonds générés par la distribution [GHST token](/ghst).

<div class="contentsBox">

**Contenu**

<ol>
<li><a href=#about-aavegotchis>A propos d’Aavegotchi</a></li>
<li><a href=#aavegotchi-value>Valeur d'Aavegotchi</a></li>
<li><a href=#the-aavegotchi-universe>L'Univers Aavegotchi</a></li>
</ol>

</div>

## A propos d’Aavegotchi
Les Aavegotchis sont des objets de collection rare, du monde de la cryptomonnaies, vivant sur la blockchain d'Ethereum. Supporté par la norme ERC-721, qui est utilisée dans les jeux populaires de blockchain tels que CryptoKitties, Axie Infinity et Cryptovoxels. Les Aavegotchis possèdent trois attributs qui déterminent leur valeur globale et leur rareté dans l'univers Aavegotchi : **le collatéral, les traits et les objets portables.**

*  **Le collatéral :** Chaque Aavegotchi ERC721 NFT gère une adresse de contrat qui détient une garantie ERC20 soutenue par Aave-backed ou « aToken ». Les [aTokens](/spirit-force) génèrent un rendement grâce au LendingPool d'Aave, qui augmente la quantité d'aTokens détenus dans le portefeuille. Ainsi, la quantité d'aTokens détenus dans l'adresse de l'Aavegotchi augmente avec le temps.


*  **Traits :** Aavegotchis possède de multiples traits qui influencent leur rareté, leur performance dans les mini-jeux et les objets portables dont ils peuvent s'équiper. Certains sont générés aléatoirement à la naissance, d'autres dépendent des interactions entre les utilisateurs et les Aavegotchi. **Voir [Traits](/traits).**

    * **Traits aléatoires**: À la naissance, chaque Aavegotchi se voit attribuer différentes valeurs de traits aléatoires à l'aide du générateur de nombres aléatoires ChainLink VRF. Les valeurs de trait sont distribuées sur une courbe en cloche, et chaque trait se voit assigner une valeur Commune, Inhabituelle, Rare ou Mythique selon sa rareté.

    *  **Parenté 'Kinship'**: "La parenté" n'est pas assigné aléatoirement, mais commence à une valeur fixe (50) à la naissance et augmente ou diminue en fonction de différents facteurs. Par exemple combien de temps l'Aavegotchi a été avec le même propriétaire ou combien de fois le propriétaire interagit avec lui.

    *  **Experience:** Aavegotchis level up as they gain more experience by voting in AavegotchiDAO and participating in mini-games. Every three levels, Aavegotchis receive one [Spirit Point](/glossary#spirit-point) that can be allocated towards increasing or decreasing a certain trait.

* **Wearables** In addition to managing the aToken escrow, Aavegotchis also extend the [ERC998 Composables standard](/glossary#erc-998), which allows them to manage child NFTs, known as wearables in the Aavegotchi ecosystem. Not every wearable can be equipped by every Aavegotchi. Some wearables may be exclusively equipped by Aavegotchis staked with certain collaterals, those of a certain level, and those with certain traits. Some wearables can increase or decrease certain traits of an Aavegotchi. For example, equipping a sword may slightly boost an Aavegotchi’s aggressiveness, whereas equipping a Bob Marley shirt may decrease its energy level.

The relationship between Collateral stake, Traits, Wearables, and Kinship is best represented by an Onion Diagram (see below). Each layer builds upon the previous layers, with the sum being the Aavegotchi itself!

<img class = "bodyImage" src = "/introduction/aavegotchi-onion-diagram.png" alt = "Aavegotchi Onion Diagram" />

## Aavegotchi Value
The valuation of an Aavegotchi comes from both from its intrinsic value and from its rarity value.

* **Intrinsic value** Intrinsic value is the denominated value of the Aavegotchi’s staked collateral. If the Aavegotchi is staked with 10 aDAI, then the intrinsic value would be 10 aDAI, plus whatever extra aDAI has accrued from the Lending Pool. Initially, only [ERC20](/glossary#erc-20) tokens listed on the Aave platform (aTokens) will be available as collaterals. However, once AavegotchiDAO launches, the community will be able to vote on which new collaterals to allow.

* **Rarity value** Rarity value is determined by calculating the rareness of each Aavegotchi’s traits and equipped wearables within the Aavegotchi universe. Unlike other NFT games, rarity is not a fixed value in Aavegotchi. It can change over time as Aavegotchis level up and equip different wearables. Thus, a rare Aavegotchi one week could become common, and vice versa, depending on the overall distribution of traits and wearables within the Aavegotchi universe. This enables a novel concept known as “rarity farming”, which is explained in [this page](/rarity-farming).

## The Aavegotchi Universe
The Aavegotchi Universe encompasses all the elements that allow Aavegotchis to operate:
* [Portals](/portals)
* [GHST Utility Token](/ghst)
* [AavegotchiDAO](/dao)
* [Aavegotchi Realm](/gotchiverse)