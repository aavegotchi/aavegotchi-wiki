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

**Aavegotchi** is a DeFi-enabled crypto collectibles game developed by Singapore-based Pixelcraft Studios that allows players to stake [Non-fungible tokens (NFTs)](/glossary#non-fungible-token) avatars with [interest-generating tokens](/spirit-force) and interact with the Aavegotchi [metaverse](/gotchiverse). Es ist eine einzigartige Kombination aus [Decentralized Finance (DeFi)](/glossary#defi-101) und NFTs.

Aavegotchis sind pixelförmige Geister, die auf der Ethereum-Blockchain leben - gestützt durch den [**ERC-721**](/glossary#erc-721) Standard. Der Wert eines Geistes wird durch seine Seltenheit festgelegt, die anhand von mehreren Faktoren berechnet wird. Dazu gehören z.B. Basis-[Eigenschaften](/traits), Menge der hinterlegten Sicherheiten/aTokens, sowie ausgerüstete [Kleidungsstücke](/wearables).

To level up their Aavegotchis, players can participate in a variety of activities including [mini-games](/minigames), governance, and meetups. Aavegotchis können ihre Seltenheitsstufe auch verbessern, indem sie Kleidungsstücke ausrüsten oder auf ein höheres Level aufsteigen.

Rare Aavegotchis not only have higher secondary [baazaar](/baazaar) value, they also enable the Aavegotchi to perform better in [rarity farming](/rarity-farming)—a minigame that rewards the rarest Aavegotchis with GHST tokens.

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

*  **Hinterlegte Sicherheiten:** Jeder Aavegotchi NFT verwaltet eine Escrow-Adresse, die eine Aave-basierte Sicherheit in Form von „aTokens“ (einem ERC-20) enthält. [aTokens](/spirit-force) generate yield via Aave’s LendingPool, which increases the quantity of aTokens held in the wallet. So steigt im Laufe der Zeit die Anzahl aTokens, die in der Escrow-Adresse des Aavegotchis aufbewahrt werden.


*  **Eigenschaften:** Aavegotchis besitzen mehrere Eigenschaften, die ihre Seltenheit, ihre Leistung in Minispielen und die ausrüstbaren Kleidungsstücke beeinflussen. Einige werden bei ihrer Geburt zufällig generiert und andere hängen von Interaktionen mit dem Aavegotchi ab. **Siehe [Eigenschaften](/traits).**

    * **Zufällige Eigenschaften**: Jedem Aavegotchi werden mit Hilfe des ChainLink VRF Zufallsgenerators mehrere zufällige Eigenschaftswerte zugewiesen. Die Merkmalswerte sind auf einer Glockenkurve verteilt, wobei jedem Merkmal je nach Seltenheit ein Wert von Gewöhnlich, Ungewöhnlich, Selten oder Mythisch zugewiesen wird.

    *  **Verwandtschaft**: "Verwandtschaft" wird nicht zufällig zugewiesen, sondern beginnt mit einem festen Wert (50) bei der Geburt. Er erhöht oder verringert sich aufgrund verschiedener Faktoren, z.B. wie lange das Aavegotchi bei demselben Besitzer ist und wie oft der Besitzer mit ihm interagiert.

    *  **Erfahrung:** Aavegotchis leveln auf, wenn sie mehr Erfahrung sammeln, indem sie im AavegotchiDAO abstimmen und an Minispielen teilnehmen. Nach jeweils drei Levels erhalten Aavegotchis einen [Spirit Point](/glossary#spirit-point), der zur Erhöhung oder Verringerung einer bestimmten Eigenschaft eingesetzt werden kann.

* **Kleidungsstücke** Neben der Verwaltung des aToken-Escrows können Aavegotchis durch den [ERC998 Composables Standard](/glossary#erc-998) untergeordnete NFTs verwalten, die im Aavegotchi-Ökosystem als Kleidungsstücke (Wearables) bezeichnet werden. Nicht jedes Kleidungsstück kann von jedem Aavegotchi ausgerüstet werden. Einige Kleidungsstücke können nur von Aavegotchis getragen werden, die mit bestimmten Sicherheiten ausgestattet sind, ein bestimmtes Level haben oder bestimmte Eigenschaften aufweisen. Einige Kleidungsstücke können bestimmte Merkmale eines Aavegotchi erhöhen oder verringern. Zum Beispiel kann das Ausrüsten eines Schwertes die Aggressivität eines Aavegotchis leicht erhöhen, während das Ausrüsten eines Bob Marley Shirts sein Energieniveau senken kann.

Die Beziehung zwischen hinterlegten Sicherheiten, Eigenschaften, Kleidungsstücken und Freundschaft lässt sich am besten durch ein Zwiebel-Diagramm darstellen (siehe unten). Jede Schicht baut auf den vorherigen Schichten auf, wobei die Summe das Aavegotchi selbst ist!

<img class = "bodyImage" src = "/introduction/aavegotchi-onion-diagram.png" alt = "Aavegotchi Zwiebel-Diagramm" />

## Wert von Aavegotchis
The valuation of an Aavegotchi comes from both its intrinsic value and from its rarity value.

* **Innerer Wert** Der innere Wert ist der Gegenwert der hinterlegten Sicherheiten des Aavegotchis. Wenn 10aDAI für das Aavegotchi hinterlegt wurden, dann beträgt der innere Wert 10 aDAI, plus die zusätzlichen aDAI aus dem Lending-Pool. Anfangs sind nur [ERC20](/glossary#erc-20) Token, die es bereits auf der Aave Plattform gibt (aTokens) als Sicherheiten verfügbar. Doch sobald der AavegotchiDAO gestartet wurde, kann die Community darüber abstimmen, welche neuen Sicherheiten zugelassen sein sollen.

* **Seltenheitswert** Der Seltenheitswert wird durch die Berechnung der Seltenheit der Eigenschaften und ausgerüsteten Kleidungsstücke jedes Aavegotchis innerhalb des Aavegotchi-Universums bestimmt. Im Gegensatz zu anderen NFT-Spielen ist die Seltenheit in einem Aavegotchi kein fester Wert. Sie kann sich im Laufe der Zeit ändern, wenn Aavegotchis aufleveln und verschiedene Kleidungsstücke ausrüsten. So könnte ein seltenes Aavegotchi nach einer Woche "gewöhnlich" werden und umgekehrt, je nach der Gesamtverteilung von Eigenschaften und Kleidungsstücken innerhalb des Aavegotchi-Universums. Dies ermöglicht ein einzigartiges Konzept namens "Rarity Farming", das auf [dieser Seite](/rarity-farming) erklärt wird.

## Das Aavegotchi-Universum
Das Aavegotchi-Universum umfasst alle Elemente, die das Funktionieren der Aavegotchis ermöglichen:
* [Portale](/portals)
* [GHST Utility Token](/ghst)
* [AavegotchiDAO](/dao)
* [Aavegotchi Realm](/gotchiverse)
