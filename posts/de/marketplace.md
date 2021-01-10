---
author: Unintelligent Nerd
date: '2020-04-23T07:00:00.000Z'
title: 'Marktplatz'
description: 'Aavegotchi Marktplätze'
contributors:
  - "unintelligent-nerd"
---

Aavegotchi Lotterie-Tickets und Kleidungsstücke-Gutscheine können auf verschiedenen Marktplätzen zwischen Spielern gehandelt werden.

Derzeit ist [OpenSea](https://opensea.io/) der am besten zugängliche Marktplatz, auf dem gehandelt wird. In Zukunft wird Aavegotchi einen eigenen internen Marktplatz bereitstellen, auf dem die Spieler untereinander handeln können.

Sobald mehr Aavegotchi-Assets verfügbar sind, wird es mehr Kategorien von Assets geben, die für den Handel verfügbar sind (z.B. Portale, die Aavegotchis selbst, etc.).

<div class="contentsBox">

**Inhalte**

<ol>
<li><a href=#collection-addresses>Adressen der Kollektionen</a></li>
<li><a href=#opensea-tutorial>OpenSea Tutorial</a></li>
<li><a href=#precautions>Vorsichtsmassnahmen</a></li>
</ol>

</div>

## Adressen der Kollektionen

Die folgende Tabelle zeigt die offiziellen Smart Contract Adressen für die verschiedenen Aavegotchi Assets. Bevor du einen Kauf auf einem Marktplatz tätigst, solltest du den Contract des Vermögenswertes, den du kaufen möchtest, mit dem entsprechenden Contract in der untenstehenden Tabelle abgleichen (z.B. wenn du beabsichtigst, ein Lotterie-Ticket zu kaufen, überprüfe die Adresse des Ticket-Contracts, bevor du fortfährst).

table_smartcontracts

## OpenSea Tutorial

Das OpenSea-Tutorial ist ein Beispiel dafür, wie man eine grundlegende Sorgfaltsprüfung vornimmt, bevor man einen Kauf auf OpenSea tätigt. Das Tutorial ist nicht vollständig; Lotterie-Tickets werden als Beispiel verwendet. Du kannst das gleiche Prinzip auf andere Asset-Kategorien ausweiten (z.B. Kleidungsstücke, etc.).

Lotterie-Tickets bezeichnen die Tickets, die zur Teilnahme an Aavegotchi-Lotterien verwendet werden. Es gibt sie in 6 verschiedenen Arten: (1) Gewöhnlich, (2) Ungewöhlich, (3) Selten, (4) Legendär, (5) Mythisch und (6) Göttlich. Visually, they look like the following image.

<img src = "/marketplace/aavegotchi-raffle-tix.png" alt = "aavegotchi raffle tickets" class="bodyImage" />

All 6 types of Raffle tickets share the same contract address: 0x93eA6ec350Ace7473f7694D43dEC2726a515E31A

To purchase them off [OpenSea](https://opensea.io/), key in the search term "aavegotchi FRENS raffle tickets" in the search bar on OpenSea. Select the same keywords that pop up from the dropdown menu (circled in red below). An alternative is to use the link to the Raffle Tickets collection on OpenSea in the [table](/posts/marketplace#collection-addresses) above.

<img src = "/marketplace/aavegotchi-frens-raffle-tickets-opensea.png" alt = "aavegotchi FRENS raffle tickets" class="bodyImage" />

Navigate to the type of Raffle ticket you are intending to purchase.

Using Godlike Raffle Tickets as an example, verify the following:

* The URL displays the correct contract address (circled in red below):

<img class = "bodyImage" src = "/marketplace/aavegotchi-opensea-url.png" alt = "aavegotchi raffle ticket" />

* The presence of a "Verified Contract" blue tick mark next to the OpenSea collection title (circled in red below).

<img src ="/marketplace/aavegotchi-godlike-raffle-ticket.png" alt= "aavegotchi godlike raffle ticket" class="bodyImage" />

* The Chain Info subsection shows the correct contract address (circled in red below). At the left hand corner of the screen, there will be a Chain Info subsection. Expand the subsection and compare the contract address against the Raffle Tickets Contract Address (0x93eA6ec350Ace7473f7694D43dEC2726a515E31A). If they are similar, you are good to go.

<img src = "/marketplace/aavegotchi-chain-info.png" alt = "aavegotchi on-chain info opensea" class="bodyImage" />


## Vorsichtsmassnahmen

It's not fun to spend your hard-earned money for fake assets, so when buying on Opensea and other secondary marketplaces, make sure to exercise caution. Remember, if it looks too good to be true, it probably is!

* Always double-check that the contract address for the items are coming from the correct contract addresses.
* If you're unsure about something, go to the [official Aavegotchi Discord](https://discord.com/invite/NPwnWB6), where there's always frenly Aapprentices ready to help!
