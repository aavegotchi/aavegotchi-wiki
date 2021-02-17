---
author: Coder Dan
date: '2020-04-23T07:00:00.000Z'
title: 'AavegotchiDAO'
description: 'Alles über den AavegotchiDAO'
image: "icons/dao.svg"
contributors:
  - "vanilladelphia"
  - "cinnabarhorse"
  - "hackingmoneyph"
---

<div class="headerImageContainer">
<img class="headerImage" src="/dao/dao.png">
<p class="headerImageText">Das Wappen des AavegotchiDAO</p>
</div>

Ein [DAO](glossar#dao) ist eine dezentrale Form der Governance, bei der Besitzer von Tokens abstimmen können, um die Art und Weise, wie die Organisation Entscheidungen trifft, zu beeinflussen.

Aavegotchi tritt in die Fussstapfen erfolgreicher DeFi-Protokolle wie Compound und Synthetix, indem es einem Prozess der "schrittweisen Dezentralisierung" nachgeht, der damit beginnt, dass das Gründerteam, Pixelcraft Studios, ein DAO gesteuertes Token Distributions Event (DAICO) organisiert. Das Endziel liegt darin, die Governance von Aavegotchi, einschliesslich aller Spielmechaniken, Smart Contracts und der Finanzierung, unter die Aufsicht des AavegotchiDAO zu stellen, wobei jedoch immer das vorherrschende regulatorische Umfeld berücksichtigt wird. Dies wird in drei Phasen erfolgen.

<div class="contentsBox">

**Inhalte**

<ol>
<li><a href=#genesis>Genesis</a></li>
<li><a href=#metamorphosis>Metamorphosis</a></li>
<li><a href=#oasis>Oasis</a></li>
<li><a href=#participating-in-governance>Teilnahme an der Governance</a></li>
<li><a href=#voting>Abstimmen</a></li>
<li><a href=#aavegotchi-improvement-proposals--agips->Aavegotchi Improvement Proposals (AGIPs)</a></li>
<li><a href=#treasury>Treasury</a></li>
</ol>

</div>

## Genesis

*Siehe* [DAICO](https://wiki.aavegotchi.com/curve/#aavegotchi-daico).

Die erste Version des AavegotchiDAO startete im Tandem mit dem GHST Token Distributions Event. Die Besitzer von GHST Tokens hatten die Möglichkeit, über die Erhöhung / Beibehaltung der Mittel abzustimmen, die durch den Tap Mechanismus der [Token Bonding Curve (TBC)](/curve)-Reserve an Pixelcraft Studios (das Team hinter Aavegotchi) ausgeschüttet werden, um die Entwicklung zu unterstützen. Dieser erste Vorschlag, den Tap von 50'000 DAI auf 100'000 DAI pro Monat zu erhöhen, wurde am 18. Oktober 2020 mit 99% Zustimmung angenommen. Wenn es an der Zeit ist, auf AavegotchiDAO Metamorphosis umzusteigen, werden die Tokenbesitzer auch darüber abstimmen müssen, die Migration durchzuführen.

Tokenbesitzer werden keine GHST-Belohnungen für die aktive Teilnahme an dieser Iteration des AavegotchiDAO erhalten.

## Metamorphosis

Metamorphosis ist die zweite Version des AavegotchiDAO und hat die Aufgabe, einfache Spielmechaniken von Aavegotchi zu verwalten, wie z.B. den Gesamtvorrat an Aavegotchis, das Hinzufügen neuer Sicherheiten und die Entscheidung über deren Funktionen, sowie das Hinzufügen neuer Kleidungsstücke, die von der Community erstellt wurden. Wenn es an der Zeit ist, auf AavegotchiDAO Oasis umzusteigen, wird der AavegotchiDAO erneut abstimmen, um die Migration durchzuführen.

Eine vollständige Liste der Massnahmen, die vom AavegotchiDAO in dieser Phase durchgeführt werden können, gibt es im [Governance](https://docs.aavegotchi.com/overview/governance) Abschnitt der Aavegotchi Smart Contract Dokumentation.

Tokenbesitzer werden Belohnungen in Form von GHST für die aktive Teilnahme an dieser Version des AavegotchiDAO erhalten.

## Oasis

Obwohl AavegotchiDAO Oasis die letzte Version der Evolution des AavegotchiDAO ist, ist es nur der Anfang der Realisierung eines DAO-gesteuerten Spiels. Über alle Entscheidungen bezüglich der Aavegotchi-Spielmechanik, der REALM-Funktionsweise, der Ökosystem-Ausgaben und sogar der Smart Contract Upgrades werden vom AavegotchiDAO abgestimmt.

Tokenbesitzer werden für die aktive Teilnahme an dieser Version des AavegotchiDAO Belohnungen in Form von GHST erhalten.

## Teilnahme an der Governance
Ich bin total aufgeregt! Wie kann ich nun am AavegotchiDAO teilnehmen? Ganz einfach! In den [Aavegotchi Docs](https://docs.aavegotchi.com/overview/governance) ist die Liste der DAO-Funktionen aufgeführt, die Mitglieder aufrufen/verwenden können, um abgestimmte Änderungen zu implementieren. Sagen wir zum Beispiel, dass asUSD als [aToken-Typ](/posts/atokens) gewählt wurde. Der AavegotchiDAO könnte die Änderung implementieren, indem er die `addCollateralTypes()` Funktion verwendet und asUSD innerhalb der Funktion angibt.

Mehr Details gibt es, sobald das Spiel veröffentlicht wurde!

## Abstimmen

Es gibt zwei Möglichkeiten, abzustimmen: (1) Snapshot Abstimmungen, und/oder (2) Aragon Abstimmungen.


### Snapshot Abstimmungen

Snapshot ist eine Abstimmungs-dApp auf Ethereum. Abstimmungen auf Snapshot erfordern kein Gas und sind nicht on-chain. Aavegotchis Snapshot-Seite findest du [hier](https://snapshot.page/#/aavegotchi.eth).

Um über Snapshot abzustimmen, folge den untenstehenden Schritten:

1). Geh zu einem offenen Vorschlag.

2). Verbinde dein Wallet.

<img class = "bodyImage" src = "/dao/snapshot1.jpg" alt = "Snapshot Voting Ethereum" />
<img class = "bodyImage" src = "/dao/snapshot2.jpg" alt = "Snapshot Voting Ethereum" />

3). Wähl eine Option aus und klick auf "Vote". Ein Pop-up-Fenster wird erscheinen, um deine Wahl zu bestätigen.

<img class = "bodyImage" src = "/dao/snapshot3.jpg" alt = "Snapshot Voting Ethereum" />
<img class = "bodyImage" src = "/dao/snapshot4.jpg" alt = "Snapshot Voting Ethereum" />

4). Dein Metamask wird erscheinen. Unterschreibe die Transaktion, und du bist fertig!

<img class = "bodyImage" src = "/dao/snapshot5.jpg" alt = "sign transaction on Snapshot Voting" />

### Aragon Abstimmungen

Aragon ist ein Werkzeug zur Erstellung und Teilnahme an dezentralen Organisationen auf Ethereum. Stimmen, die auf Aragon abgegeben werden, benötigen Gas und existieren auf der Ethereum Blockchain.

Aavegotchis Aragon-Seite findest du [hier](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/).

Um über Aragon abzustimmen, folge den untenstehenden Schritten:

1). Geh zu einem offenen Vorschlag.

2). Verbinde dein Wallet.

<img class = "bodyImage" src = "/dao/aragon1.jpg" alt = "Aragon Voting Ethereum" />

3). Wähl "ja" oder "nein".

<img class = "bodyImage" src = "/dao/aragon2.jpg" alt = "Aragon Voting Ethereum" />

4). Eine Metamask-Transaktion wird sich öffnen. Beachte, dass deine Transaktion gemined werden muss, um bestätigt zu werden, also konsultiere eine Seite wie [gasnow](https://gasnow.org/) für den aktuellen Gaspreis.

5). Sobald deine Transaktion gemined ist, wird deine Stimme entsprechend reflektiert.


<img class = "bodyImage" src = "/dao/aragon3.jpg" alt = "Aragon Voting Ethereum" />

## Aavegotchi Improvement Proposals (AGIPs)

Siehst du diese Abstimmungen auf Aragon? Das sind Aavegotchi Improvement Proposals (AGIPs)!

Besuche die [Aavegotchi Improvement Proposals](/aavegotchi-improvement-proposals) Seite für eine Liste der vergangenen Abstimmungen. Wenn du über zukünftige Vorschläge informiert werden möchtest, folg [Aavegotchi auf Social Media](/socialmedia).

## Treasury

AavegotchiDAO earns 0.3% of all trades on the Aavegotchi [Bonding Curve](/curve) on Ethereum Mainnet. This is the current source of all DAO funds.

As responsible stewards, members of AavegotchiDAO will play a role in determining how these funds are to be allocated.

The AavegotchiDAO treasury is located [here](https://aavegotchi.com/treasury).