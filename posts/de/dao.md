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
<li><a href=#aavegotchidao-forum>AavegotchiDAO Forum</a></li>
<li><a href=#voting>Voting</a></li>
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
Ich bin total aufgeregt! Wie kann ich nun am AavegotchiDAO teilnehmen? Ganz einfach!

First, you can participate in the discussions in the [AavegotchiDAO forum](https://dao.aavegotchi.com/). We welcome everyone!

Second, the [Aavegotchi Docs](https://docs.aavegotchi.com/overview/governance) details the list of DAO functions that members can call/use in order to implement changes that have been voted in. For example, let's say that asUSD has been voted in as a [collateral type](/posts/atokens). AavegotchiDAO could implement the change by using the `addCollateralTypes()` function and specifying asUSD within the function.

More details will be fleshed out once the game releases!

## AavegotchiDAO Forum

The AavegotchiDAO Governance Forum is powered by Discourse. Having this forum will help centralize discussion on important topics related to Aavegotchi game mechanics, funding requests, and other proposals.

We hope that #GotchiGang can become a model for DAO-owned games in the future, so get involved and remember to be frenly to your fellows.

The Forum can be found [here](https://dao.aavegotchi.com/).

## Voting

There are two ways to vote: (1) Snapshot Voting, and/or (2) Aragon Voting.


### Snapshot Abstimmungen

Snapshot is a voting DApp on Ethereum. Votes made on Snapshot does not require any gas and are not on-chain. Aavegotchi's Snapshot page can be found [here](https://snapshot.page/#/aavegotchi.eth).

To vote on Snapshot, follow the steps below:

1). Go to an open proposal.

2). Connect your wallet.

<img class = "bodyImage" src = "/dao/snapshot1.jpg" alt = "Snapshot Voting Ethereum" />
<img class = "bodyImage" src = "/dao/snapshot2.jpg" alt = "Snapshot Voting Ethereum" />

3). Select a poll option, and click "Vote." A pop-up will appear to confirm your choice.

<img class = "bodyImage" src = "/dao/snapshot3.jpg" alt = "Snapshot Voting Ethereum" />
<img class = "bodyImage" src = "/dao/snapshot4.jpg" alt = "Snapshot Voting Ethereum" />

4). Your Metamask will pop up. Sign the transaction, and you're done!

<img class = "bodyImage" src = "/dao/snapshot5.jpg" alt = "sign transaction on Snapshot Voting" />

### Aragon Abstimmungen

Aragon is a tool for creating and participating in decentralized organizations on Ethereum. Votes made on Aragon requires gas and exists on-chain.

Aavegotchi's Aragon page can be found [here](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/).

To vote on Aragon, follow the steps below:

1). Go to an open proposal.

2). Connect your wallet.

<img class = "bodyImage" src = "/dao/aragon1.jpg" alt = "Aragon Voting Ethereum" />

3). Choose to vote "Yes" or "No."

<img class = "bodyImage" src = "/dao/aragon2.jpg" alt = "Aragon Voting Ethereum" />

4). A Metamask transaction will pop-up. Take note that your transaction has to be mined to be confirmed, so consult a site like [gasnow](https://gasnow.org/) for the latest gas price.

5). Once your transaction is mined, your vote will be reflected accordingly.


<img class = "bodyImage" src = "/dao/aragon3.jpg" alt = "Aragon Voting Ethereum" />

## Aavegotchi Improvement Proposals (AGIPs)

See those votes on Aragon? They are Aavegotchi Improvement Proposals (AGIPs)!

Visit the [Aavegotchi Improvement Proposals](/aavegotchi-improvement-proposals) page for a list of historical votes. If you'd like to be informed of future proposals, follow [Aavegotchi on social media](/socialmedia).

## Treasury

AavegotchiDAO earns 0.3% of all trades on the Aavegotchi [Bonding Curve](/curve) on Ethereum Mainnet. This is the current source of all DAO funds.

As responsible stewards, members of AavegotchiDAO will play a role in determining how these funds are to be allocated.

The AavegotchiDAO treasury is located [here](https://aavegotchi.com/treasury).