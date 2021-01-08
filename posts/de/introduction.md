---
author: Coder Dan
date: '2020-04-23T07:00:00.000Z'
title: 'Aavegotchi'
description: 'Einführung ins Aavegotchi Wiki'
image: "aavegotchi.png"
contributors:
  - "cinnabarhorse"
  - "unintelligent-nerd"
---

<div class="headerImageContainer">
<img class="headerImage" src="/aavegotchi.png" alt="aavegotchi" />
<p class="headerImageText">Aavegotchi</p>
</div>

**Aavegotchi** ist ein DeFi-basiertes Krypto-Sammelspiel, das von Pixelcraft Studios mit Sitz in Singapur entwickelt wurde. Es erlaubt Spielern, Charaktere in Form von [nicht fungiblen Tokens (NFTs)](/glossary#non-fungible-token) durch zinstragende [aTokens](/atokens) zum Leben zu erwecken und mit dem Aavegotchi [Metaverse](/metaverse) zu interagieren. Es ist eine einzigartige Kombination aus [Decentralized Finance (DeFi)](/glossary#defi-101) und NFTs.

Aavegotchis sind pixelförmige Geister, die auf der Ethereum-Blockchain leben - gestützt durch den [ERC-721](/glossary#erc-721) Standard. Der Wert eines Geistes wird durch seine Seltenheit festgelegt, die anhand von mehreren Faktoren berechnet wird. Dazu gehören z.B. Basis-[Eigenschaften](/traits), Menge der hinterlegten Sicherheiten/aTokens, sowie ausgerüstete [Kleidungsstücke](/wearables).

Um ihre Aavegotchis hochzuleveln, können Spieler an einer Vielzahl von Aktivitäten teilnehmen, darunter Minispiele, Governance und Meetups. Aavegotchis können ihre Seltenheitsstufe auch verbessern, indem sie Kleidungsstücke ausrüsten oder auf ein höheres Level aufsteigen.

Seltene Aavegotchis haben nicht nur einen höheren Wert auf sekundären [Marktplätzen](/marketplace), es ermöglicht ihnen auch eine bessere Leistung im [Rarity Farming](/rarity-farming) – ein Minispiel, das die seltensten Aavegotchis mit GHST Tokens belohnt.

Aavegotchi wird vom [AavegotchiDAO](/dao) geleitet, das auch alle finanziellen Mittel verwaltet, die durch die Distribution von [GHST Tokens](/ghst) generiert werden.

<div class="contentsBox">

**Inhalte**

<ol>
<li><a href=#about-aavegotchis>Über Aavegotchis</a></li>
<li><a href=#aavegotchi-value>Wert von Aavegotchis</a></li>
<li><a href=#the-aavegotchi-universe>Das Aavegotchi-Universum</a></li>
</ol>

</div>

## Über Aavegotchis
Aavegotchis sind seltene Krypto-Sammelobjekte, die auf der Ethereum-Blockchain leben. Sie basieren auf dem ERC-721 Standard, der für beliebte Blockchain-Spiele wie CryptoKitties, Axie Infinity und Cryptovoxels verwendet wird. Aavegotchis besitzen drei Attribute, die ihren Gesamtwert und ihre Seltenheit innerhalb des Aavegotchi-Universums beeinflussen: **Hinterlegte Sicherheiten, Eigenschaften und Kleidungsstücke.**

*  **Hinterlegte Sicherheiten:** Jeder Aavegotchi NFT verwaltet eine Escrow-Adresse, die eine Aave-basierte Sicherheit in Form von „aTokens“ (einem ERC-20) enthält. [aTokens](/atokens) generieren eine Rendite über den Lending-Pool von Aave, der die Menge an aTokens im Wallet erhöht. So steigt im Laufe der Zeit die Anzahl aTokens, die in der Escrow-Adresse des Aavegotchis aufbewahrt werden.


*  **Eigenschaften:** Aavegotchis besitzen mehrere Eigenschaften, die ihre Seltenheit, ihre Leistung in Minispielen und die ausrüstbaren Kleidungsstücke beeinflussen. Einige werden bei ihrer Geburt zufällig generiert und andere hängen von Interaktionen mit dem Aavegotchi ab. Siehe [Eigenschaften](/traits).

    * **Zufällige Eigenschaften**: Jedem Aavegotchi werden mit Hilfe des ChainLink VRF Zufallsgenerators mehrere zufällige Eigenschaftswerte zugewiesen. Die Merkmalswerte sind auf einer Glockenkurve verteilt, wobei jedem Merkmal je nach Seltenheit ein Wert von Gewöhnlich, Ungewöhnlich, Selten oder Mythisch zugewiesen wird.

    *  **Kinship**: “Kinship” is not randomly assigned, but rather starts at a fixed value (50) upon birth and increases or decreases based on various factors, such as how long the Aavegotchi has been with the same owner, and how often the owner interacts with it.

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
* [Aavegotchi Realm](/metaverse)