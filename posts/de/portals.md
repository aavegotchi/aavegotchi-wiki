---
author: appellants
date: '2020-04-23T07:00:00.000Z'
title: 'Portale'
description: 'Alles über Aavegotchi Portale'
contributors:
  - "appellants"
  - "unintelligent-nerd"
image: "portals/portal.gif"
---

<div class="headerImageContainer">
<img class="headerImage" src="/portals/portal.gif">
<p class="headerImageText">Ein Aavegotchi Portal</p>
</div>

Wie beschwört man ein Aavegotchi und bringt es aus dem Nether Realm auf den Bildschirm? Durch ein Portal, natürlich!

Schau genau in die violetten Tiefen und sieh, was sich darunter verbirgt - du wirst einen neuen Freund finden. Oder genauer gesagt, 10 Freunde.

Setz also deinen Zauberhut auf - es ist Zeit, mehr über Portale und den Aavegotchi-Beschwörungsprozess zu erfahren. 

<div class="contentsBox">

**Inhalte**

<ol>
<li><a href=#buying-a-portal>Ein Portal kaufen</a></li>
<li><a href=#opening-your-portal>Dein Portal öffnen</a></li>
<li><a href=#claiming-an-aavegotchi>Ein Aavegotchi beschwören</a></li>
<li><a href=#interacting-with-your-aavegotchi>Interacting with your Aavegotchi</a></li>
<li><a href=#transferring-your-aavegotchi>Transferring your Aavegotchi</a></li>
</ol>

</div>

## Ein Portal kaufen

Bevor du dein pixeliges Geisterbaby aufziehen kannst, musst du es über ein Portal herbeirufen. Diese kannst du entweder über die [offizielle Aavegotchi dApp](https://aavegotchi.com/buy-portal), oder einen externen Marktplatz wie [OpenSea](https://opensea.io/) erwerben.

Wenn du es über die Aavegotchi dApp kaufst, kostet jedes Portal ungefähr 100 GHST. These devices will also be released in ["Haunts" (editions)](/haunt). Der erste Haunt wird 10'000 Portale zur Verfügung stellen. Danach wird der [AavegotchiDAO](/dao) über Entscheidungen zu den einzelnen Haunts abstimmen. Zum Beispiel können sich Portalpreise und -mengen als Ergebnis von Entscheidungen und Abstimmungen des DAO in Zukunft ändern.


## Dein Portal öffnen

Super! Du bist gerade dabei, dein Portal zu kaufen. Hier kommt das ~ Portal Beschwörungsritual ~ ins Spiel. Dies ist der Mechanismus, durch den du dein Aavegotchi beschwören kannst.

Nachdem du das Portal gekauft hast, ist der nächste Schritt, es zu öffnen. Opening the portal occurs on [Polygon](/glossary#polygon) where gamers have to sign a transaction. After the transaction is signed, the [Chainlink Verifiable Randomness Function (VRF)](/glossary#chainlink-vrf) is called behind-the-scenes. Wenn die Funktion ausgeführt wird, wird dem Portal eine Zufallszahl zugewiesen, wodurch sichergestellt wird, dass die Eigenschaften des Aavegotchi nachweislich zufällig sind.

Hier ist ein praktisches Flowchart, das den Prozess zusammenfasst:

<img class = "bodyImage" src = "/portals/opening-an-aavegotchi-portal.png" alt = "Process of opening an Aavegotchi Portal" />

Nachdem du ein Portal geöffnet hast, siehst du 10 verschiedene Aavegotchis, von denen du eines aus dem Nether Realm herbeirufen kannst. Du musst 1 aus den 10 von ihnen auswählen, um es zu beschwören. Der Rest wird leider verschwinden.

Diese Aavegotchis haben alle verschiedene, zufällig generierte Eigenschaften. Während du durch deine Optionen klickst, kannst du diese Eigenschaften und den [Base Rarity Score](/rarity-farming#base-rarity-score) deines Aavegotchis sehen. Dies ist der Seltenheitswert, den dein Aavegotchi anfangs erhält, basierend auf den anfänglichen Eigenschaften, die es bei der Beschwörung hat. Dieser Seltenheitswert kann später durch eine Reihe von Aktivitäten verändert werden, z.B. indem du dein Aavegotchi mit Kleidungsstücken ausstattest.

Du kannst dir die Bandbreite der Eigenschaften und Seltenheitswahrscheinlichkeiten in dieser Tabelle hier ansehen:

table_PortalTraitTable


Mehr Informationen zum Rarity Farming findest du [hier](/rarity-farming).


## Ein Aavegotchi beschwören

To claim an Aavegotchi from the portal, you need to stake the required amount of [Spirit Force](/spirit-force) into the Portal. Spirit Force can be acquired directly via [Aave](https://aave.com/) or DEXes like Uniswap.

Zusätzlich zu ihrem monetären Wert, der durch Knappheit und den Markt bestimmt wird, hat jedes Aavegotchi auch einen inneren Wert. Die aTokens, die du dafür hinterlegst, liefern diesen inneren Wert.

**For more information on Spirit Force, see [here](/spirit-force).**

Im Allgemeinen hängt die minimale Menge an Spirit Force (Sicherheiten) vom Base Rarity Scores des Aavegotchi ab, das du beschwören willst. Je höher die Punktzahl, desto mehr Sicherheiten werden benötigt.

Der Mindestbetrag der erforderlichen Sicherheiten liegt bei 10 DAI, während der Höchstbetrag bei 1000 DAI liegt.

Die Formel, die verwendet wird, um die Menge an benötigter Spirit Force (Sicherheiten) zu bestimmen, lautet wie folgt:

```
if (rarityScore < 300) return 10;
        else if (rarityScore >= 300 && rarityScore < 450) return 10;
        else if (rarityScore >= 450 && rarityScore <= 525) return 25;
        else if (rarityScore >= 526 && rarityScore <= 580) return 100;
        else if (rarityScore >= 581) return 1000;
```

Wenn der Base Rarity Score zum Beispiel weniger als 300 beträgt, musst du Sicherheiten im Wert von mindestens 10 DAI hinterlegen, um das Gotchi zu beschwören.

Du kannst die Spirit Force (hinterlegte Menge an aTokens) deines Aavegotchis später über die Aavegotchi dApp UI erhöhen oder verringern.

Um dein Gotchi zu beschwören, musst du 2 Transaktionen durchführen. Zuerst musst du dem Smart Contract die Genehmigung erteilen, um den aToken in deinem Wallet auszugeben. Die anschliessende Transaktion ermöglicht es dir, das Aavegotchi zu beschwören.

## Interacting with your Aavegotchi

Once you have claimed your Gotchi, the next thing to do is to...........*drum rolls*..........play with your Aavegotchi!

Check out the [Aavegotchi Profile Page](/aavegotchi-profile) for how to do so!

## Transferring your Aavegotchi

Transferring an Aavegotchi to a new owner (when you trade it) also transfers the staked collateral behind it, as well as any items and wearables in the Aavegotchi's inventory. This happens when you trade your Aavegotchi on an online marketplace such as OpenSea.

If you wish to retrieve the staked collateral backing your Aavegotchi, you have two options:

1. **Reduziere die Menge der Sicherheiten** in deinem Aavegotchi (aber nicht unter seinen Mindesteinsatz).

2. **Verbrenn dein Aavegotchi**, lass es zurück in den Nether Realm und bekomm alle deine Sicherheiten zurück.

**Before placing your Aavegotchi for sale on secondary markets such as OpenSea, please "lock" your Aavegotchi via the Dapp UI, to help the buyer ensure all of the Aavegotchi's belongings will transfer with it.**