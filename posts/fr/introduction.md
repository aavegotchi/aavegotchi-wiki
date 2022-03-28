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

    *  **Expérience :** Le niveau des Aavegotchis augmente au fur et à mesure qu'ils gagnent de l'expérience en votant dans AavegotchiDAO et en participant à des mini-jeux. Tous les trois niveaux, les Aavegotchis reçoivent un [point d'esprit](/glossary#spirit-point) qui peut être alloué à l'augmentation ou à la diminution d'une certaine caractéristique (trait).

* **Objets portables** En plus de la gestion du collateral aToken, Aavegotchis étend également le [standard ERC998 Composables](/glossary#erc-998), qui leur permet de gérer d'autres "NFT enfant" appelées objets portables dans l'écosystème Aavegotchi. Tous les objets portables ne peuvent pas être équipés par tous les Aavegotchis. Certains objets portables peuvent être exclusivement équipés par des Aavegotchis invoqués avec une certaine quantité de collatéral, d'un certain niveau, ou avec certaines caractéristiques. Les objets portables peuvent augmenter ou diminuer certains traits d'un Aavegotchi. Par exemple, équiper une épée peut légèrement augmenter l’agressivité d’un Aavegotchi, tandis que équiper une chemise Bob Marley peut réduire son niveau d’énergie.

La relation entre le Collatéral, les Traits, les Objets Portables et la Parenté est mieux représentée par un diagramme d’Onion (voir ci-dessous). Chaque couche se base sur les couches précédentes, la somme étant l'Aavegotchi lui-même !

<img class = "bodyImage" src = "/introduction/aavegotchi-onion-diagram.png" alt = "Schéma d'oignon Aavegotchi" />

## Valeur d'Aavegotchi
L'évaluation d'un Aavegotchi provient à la fois de sa valeur intrinsèque et de sa rareté.

* **Valeur intrinsèque** La valeur intrinsèque est la valeur utilisée pour le collatéral de l'Aavegotchi. Si l'Aavegotchi est invoqué avec 10 aDAI, alors la valeur intrinsèque serait 10 aDAI, en plus de tout autre aDAI supplémentaire provenant du Lending Pool. Initialement, seuls les [jetons ERC20](/glossary#erc-20) répertoriés sur la plateforme Aave (aTokens) seront disponibles en tant que collatéral. Cependant, une fois AavegotchiDAO lancé, la communauté sera en mesure de voter sur les nouveaux collatéral à autoriser.

* **La valeur de rareté** La valeur de rareté est déterminée en calculant la rareté des traits de chaque Aavegotchi et des objets portables équipés dans l'univers Aavegotchi. Contrairement aux autres jeux NFT, la rareté n'est pas une valeur fixe dans Aavegotchi. Elle peut changer au fil du temps lorsque l'Aavegotchis monte de niveau ou s'équipe de différents objets portables. Ainsi, un Aavegotchi rare une semaine pourrait devenir commun, et vice versa, en fonction de la répartition globale des caractéristiques et des usages dans l'univers Aavegotchi. Ceci active un nouveau concept connu sous le nom de « agriculture de rareté », qui est expliqué dans [cette page](/rarity-farming).

## L'Univers Aavegotchi
L'Univers Aavegotchi englobe tous les éléments qui permettent à Aavegotchis de fonctionner:
* [Portails](/portals)
* [Jeton Utilitaire GHST](/ghst)
* [AavegotchiDAO](/dao)
* [Le royaume Aavegotchi](/gotchiverse)