---
author: Nick Mudge
date: '2020-04-23T07:00:00.000Z'
title: 'Staking'
description: 'GHST staken, FRENS generieren'
contributors:
  - "mudgen"
  - "unintelligent-nerd"
---


<div class="headerImageContainer">
<img class="headerImage" src="/staking/staking.png">
<p class="headerImageText">GHST staken, FRENS generieren!</p>
</div>

Staking bezieht sich auf den Prozess des Sperrens deiner Kryptowährung im Gegenzug für Belohnungen. Das ist bei dem Aavegotchi Projekt nicht anders. Der native Token, [GHST](/posts/ghst), kann im Staking Contract platziert werden, um [FRENS](/posts/glossary#frens) zu verdienen.

FRENS sind ein nicht übertragbares Guthaben innerhalb des Aavegotchi Staking Contracts. FRENS können nicht gekauft werden. Sie sind als Belohnung für den Beitrag der Staker zum Aavegotchi-Projekt gedacht.

FRENS können dann in Lotterie-Tickets umgewandelt werden, mit denen man an den regelmässigen Lotterien teilnehmen kann, um Preise zu gewinnen.

Lies weiter, um zu erfahren, wie du GHST staken und mit deinen FRENS Preise verdienen kannst.

<div class="contentsBox">

**Inhalte**

<ol>
<li><a href=#purchasing-ghst>GHST kaufen</a></li>
<li><a href=#how-to-stake>Wie man staked</a></li>
<li><a href=#purchasing-raffle-tickets>Lotterie-Tickets kaufen</a></li>
<li><a href=#entering-raffles>An Lotterien teilnehmen</a></li>
<li><a href=#past-raffles-statistics>Statistiken der letzten Lotterien</a></li>
<li><a href=#more-resources>Weitere Ressourcen</a></li>
</ol>

</div>

## GHST kaufen
Zuerst musst du dir ein paar GHST Tokens besorgen, um sie zu staken. Unsere [GHST Token Seite](/posts/ghst) deckt die verschiedenen Möglichkeiten ab, wie du dir welche besorgen kannst.

## Wie man staked
Sobald du einige GHST Tokens hast, ist es an der Zeit, sie zu staken!

There are four ways to stake: (1) staking GHST tokens on Mainnet (**will be discontinued eventually**), (2) staking Uniswap GHST-ETH LP tokens on Mainnet (**will be discontinued eventually**), (3) staking GHST tokens on Polygon (formerly Matic Network), and/or (4) the GHST-QUICK pool on [QuickSwap](/glossary#quickswap) on Polygon.

*Hinweis: Presale GHST Tokens können nicht gestaked werden, bis sie freigeschaltet wurden.*

### GHST Tokens staken [Mainnet]
Dies ist die einfachste Art, GHST Tokens zu staken. Gehe auf die [Staking-Benutzeroberfläche](https://aavegotchi.com/stake). Es wird wie das Bild unten aussehen.

<img class = "bodyImage" src = "/staking/staking-interface.png" alt = "aavegotchi staking" />

Wähle "Stake on Mainnet" und du wirst eine weitere Seite mit zwei Boxen sehen. Die Box auf der linken Seite wird mit "Stake GHST Token" bezeichnet sein (siehe Bild unten). Wenn du zum allerersten Mal stakest, musst du auf den "Approve" Button klicken, der dem Staking Contract Zugriff auf deine GHST Token gewährt. Sobald die " Approve" Transaktion durchgeführt wurde, kannst du den gewünschten GHST-Betrag, den du staken möchtest, in das Feld "Input amount" eingeben. Wenn du fertig bist, drücke den "Stake" Button, um den Staking Prozess zu starten.

<img class = "bodyImage" src = "/staking/stake-ghst.png" alt = "aavegotchi staking" />

*Für jede 1 GHST, die auf diese Weise gestaked wird, erhältst du 1 FRENS / Tag.*

### GHST-ETH LP Tokens staken [Mainnet]
Eine zweite, etwas kompliziertere Methode ist das Staken der Uniswap GHST-ETH Liquidity Provider (LP) Token. Um dies zu tun, musst du sowohl GHST Token als auch ETH in deiner Wallet haben. Begib dich in den [GHST-ETH Uniswap Pool](https://app.uniswap.org/#/add/0x3f382dbd960e3a9bbceae22651e88158d2791550/ETH), um Liquidität für beide Token hinzuzufügen (siehe Bild unten). Man muss Liquidität im Verhältnis von 50% GHST und 50% ETH in den Pool einzahlen. Die Menge an GHST und ETH, die benötigt wird, um 1 GHST-ETH LP-Token zu erwerben, variiert je nach dem Preis des Pool-Tokens zu diesem Zeitpunkt.  Im Gegenzug für das Staken von GHST und ETH erhalten die Nutzer den GHST-ETH LP-Token von Uniswap.

<img class = "bodyImage" src = "/staking/ghst-eth-uniswap-interface.png" alt = "GHST-ETH LP Tokens Aavegotchi staking" />

Sobald du deine GHST-ETH LP-Tokens erworben hast, gehst du zum [Staking User Interface](https://aavegotchi.com/stake). Es wird wie das Bild unten aussehen.

<img class = "bodyImage" src = "/staking/staking-interface.png" alt = "aavegotchi staking" />

Wähle "Stake on Mainnet" und du wirst eine weitere Seite mit zwei Boxen sehen. Die Box auf der rechten Seite lautet "Stake Uniswap GHST Token" (siehe Bild unten). Wenn du zum allerersten Mal stakest, musst du auf den "Genehmigen" -Button klicken, der dem Staking-Vertrag Zugriff auf deine GHST-ETH LP Token gewährt. Sobald die " Approve" Transaktion durchgeführt wurde, kannst du den gewünschten Betrag an GHST-ETH LP-Tokens, den du staken möchtest, in das Feld "Input amount" eingeben. Wenn du fertig bist, drücke den "Stake" Button, um den Staking Prozess zu starten.

<img class = "bodyImage" src = "/staking/stake-uniswap-ghst-eth.png" alt = "stake uniswap ghst-eth LP token aavegotchi" />

*Für jede 1 GHST-ETH, die auf diese Weise gestaked wird, erhältst du 100 FRENS / Tag.*

Warum der grosse Unterschied in der Anzahl der FRENS, die durch diese Methode verdient werden? Das Staken von GHST-ETH LP Token birgt das Risiko des [Impermanent Loss](/posts/glossary#impermanent-loss). Du wirst für das erhöhte Risiko, das du eingehst, entschädigt.

### Staking GHST tokens [Polygon]

The third method involves transferring GHST tokens from Ethereum Mainnet to Polygon, a layer 2 solution.

This is done by using the [Bridge to Polygon Interface](https://aavegotchi.com/bridge). Gib dem Smart Contract die Bewilligung, deine GHST Tokens zu nutzen. Once that transaction goes through, input the amount of GHST you would like to transfer to Polygon. Once your transaction has confirmed on Ethereum, it takes roughly 7-8 minutes for your balance to reflect on Polygon. Dein Guthaben wird automatisch aktualisiert. Bitte habe Geduld!

Als nächstes musst du deine Metamask so konfigurieren, dass sie deinen Wallet Kontostand anzeigt. Do refer to this [Polygon Guide](/polygon) for detailed instructions on how one can configure their Metamask wallet to include Polygon.

Connect your Metamask to Polygon and head over to the [Polygon Staking Page](https://aavegotchi.com/stake-matic) on the Aavegotchi DApp. Approve the contract to use your GHST tokens on Polygon. Sobald die Transaktion durchgeführt wurde, gibst du den Betrag der GHST ein, die du einzahlen möchtest. Presto! Das wars!

### Staking in the GHST-QUICK pool on QuickSwap [Polygon]

The fourth method involves transferring GHST tokens from Ethereum Mainnet to Polygon, a layer 2 solution.

Do refer to this [Polygon Guide](/polygon) for detailed instructions on how one can configure their Metamask wallet to include Polygon. Once that is done, follow the subsequent steps found in the [Polygon Liquidity Migration Incentives post](https://aavegotchi.medium.com/ghst-token-live-on-matic-100k-usd-liquidity-migration-incentives-announced-faq-2590daa25d73).

1. Hol dir ein paar QUICK Tokens von [QuickSwap](https://quickswap.exchange). Die liquidesten Paare sind derzeit QUICK-UNI, QUICK-WETH und QUICK-USDC. Bald wird auch GHST-QUICK eine Option sein.

2. Werde ein Liquiditätsanbieter im GHST-QUICK Pool auf Quickswap.

3. Nimm deine LP Token aus Schritt 2 und stake sie in den GHST-QUICK Staking Pool, um stkGHST zu erhalten.

4. Zum Schluss nimmst du die stkGHST Tokens, die vom GHST Staking Contract ausgegeben wurden und stakest sie in den Quickswap Rewards Pool: [https://quickswap.exchange/#/quick](https://quickswap.exchange/#/quick).

Jetzt verdienst du QUICK und FRENS!

Ähnlich wie beim Staking von Uniswap GHST-ETH LP Tokens, besteht auch bei dieser Methode das Risiko des Impermanent Loss.

### Staking GHST on Polygon Cheetsheet!

The following diagram shows the two different routes to staking on Polygon that we have discussed above (<a href=#staking-ghst-tokens--polygon->Staking GHST tokens</a> ; <a href=#staking-in-the-ghst-quick-pool-on-quickswap--polygon->Staking in the GHST-QUICK pool</a>).

<img class = "bodyImage" src = "/staking/GHST-to-Matic-Cheatsheet.png" alt = "GHST to Matic Cheatsheet" />

## Lotterie-Tickets kaufen

Sobald du genug FRENS hast, gehst du zur [Shop Bulk Buy Benutzeroberfläche](https://aavegotchi.com/tickets), um Lotterie-Tickets mit FRENS zu kaufen.

Im Gegensatz zu FRENS können die Lotterie-Tickets von einer Wallet zur anderen übertragen werden. Sie können auch auf [Marktplätzen](/marketplace) gekauft/verkauft werden.

Es gibt sechs verschiedene Kategorien von Lotterie-Tickets, die von Gewöhnlich (am wenigsten wertvoll) bis Göttlich (am wertvollsten) reichen:

table_RaffleTickets

Blog Beitrag: \[Stake GHST, Make FRENS Live on Ethereum Mainnet!\]( https://aavegotchi.medium.com/stake-ghst-make-frens-live-on-ethereum-mainnet-658bd507d67b)

Nutzer können in einer einzigen Transaktion Tickets aus verschiedenen Kategorien kaufen. Du musst **nicht** für jede Kategorie von Lotterie-Tickets separate Kauftransaktionen erstellen.

## An Lotterien teilnehmen

Eine Lotterie läuft über einen bestimmten Zeitraum. In diesem Zeitraum kannst du deine Lotterie-Tickets einreichen, um eine Chance auf gewisse Preise zu erhalten. Das Einreichen von Lotterie-Tickets für die Verlosung erfordert eine Ethereum-Transaktion; sie erfolgt nicht automatisch. Wenn du viele verschiedene Kategorien von Lotterie-Tickets hast und diese zusammen als Bündel einreichen möchtest, ist dies ebenfalls möglich. Du musst **keine** separaten Transaktionen erstellen, um jede Kategorie von Lotterie-Tickets in die Verlosung einzutragen.

Wenn die Lotterie vorbei ist, erfährst du, welche Preise du gewonnen hast und kannst sie einfordern.

Wenn du dich dafür entscheidest, nicht an einer bestimmten Lotterie teilzunehmen, musst du nichts mit deinen Lotterie-Tickets machen. Du kannst auch Lotterie-Tickets für spätere Lotterien sammeln, wenn du das möchtest.

Die erste Lotterie hatte zum Beispiel Chainlink als Theme. Hier waren die Preise für die Lotterie:

<img class = "bodyImage" src = "/staking/link-raffle-prizes.png" alt = "Aavegotchi Chainlink-theme Raffle Prizes" />

Insgesamt 6010 Preise.

[Preise auf OpenSea](https://opensea.io/activity/aavegotchi-wearable-vouchers)

Jeder Preis wird einem zufällig gezogenen Lotterie-Ticket zugewiesen, wobei jedes Ticket die gleiche Gewinnchance hat.

Du kannst deine Gewinnwahrscheinlichkeit verbessern, indem du:
* Mehrere Tickets einreichst
* An Ticket-Kategorien mit mehr Preisen teilnimmst (z.B. Gewöhnlich)

Die Zufallszahlen für die Gewinner der Lotterie werden durch Chainlinks [Onchain Verifiable Randomness Generator (VRF)](https://blog.chain.link/verifiable-random-functions-vrf-random-number-generation-rng-feature/) generiert.

Die Preise, bei denen es sich um Gutscheine für Kleidungsstücke handelt, können 1:1 gegen das eigentliche Aavegotchi Kleidungsstück getauscht werden, sobald das Spiel gelauncht wird. Dies wird im [Aavegotchi Shop](https://aavegotchi.com/shop) stattfinden.

## Statistiken der letzten Lotterien
Zu wissen, wie man FRENS staked und an Lotterien teilnimmt, ist ja gut und schön. Aber wie sieht es mit den Zahlen aus? Wie hoch sind die Wahrscheinlichkeiten, ein Kleidungsstück zu gewinnen, basierend auf vergangenen Lotterien? Besuche die [Raffles Statistik Seite](/raffles-stats) für die historischen Daten.

## Weitere Ressourcen

- [Aavegotchi Raffles — A FRENLY Guide](https://aavegotchi.medium.com/aavegotchi-raffles-a-frenly-guide-66f624c9bc60)
- [Aavegotchi ❤ Chainlink Raffle — You Just WON](https://aavegotchi.medium.com/aavegotchi-chainlink-raffle-you-just-won-af87712f1018)
- [Anon and the Green Ticket](https://aavegotchi.medium.com/anon-and-the-green-ticket-5776969b3a69)