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

Es gibt drei Möglichkeiten zum Staken: (1) GHST Tokens staken [Mainnet], (2) Uniswap GHST-ETH LP Tokens staken [Mainnet], und/oder (3) der GHST-QUICK Pool auf QuickSwap [Matic].

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

### Im GHST-QUICK-Pool auf QuickSwap staken [Matic]

Die dritte Methode beinhaltet die Übertragung von GHST Tokens aus dem Ethereum Mainnet in das Matic Network, eine Layer 2 Lösung.

In diesem [Matic Guide](/matic) findest du eine detaillierte Anleitung, wie du deine Metamask Wallet für das Matic Network konfigurieren kannst. Sobald das erledigt ist, folge den weiteren Schritten, die du im [Matic Liquidity Migration Incentives Beitrag](https://aavegotchi.medium.com/ghst-token-live-on-matic-100k-usd-liquidity-migration-incentives-announced-faq-2590daa25d73) findest.

1. Hol dir ein paar QUICK Tokens von [QuickSwap](https://quickswap.exchange). Die liquidesten Paare sind derzeit QUICK-UNI, QUICK-WETH und QUICK-USDC. Bald wird auch GHST-QUICK eine Option sein.

2. Werde ein Liquiditätsanbieter im GHST-QUICK Pool auf Quickswap.

3. Nimm deine LP Token aus Schritt 2 und stake sie in den GHST-QUICK Staking Pool, um stkGHST zu erhalten.

4. Zum Schluss nimmst du die stkGHST Tokens, die vom GHST Staking Contract ausgegeben wurden und stakest sie in den Quickswap Rewards Pool: [https://quickswap.exchange/#/quick](https://quickswap.exchange/#/quick).

Jetzt verdienst du QUICK und FRENS!

Ähnlich wie beim Staking von Uniswap GHST-ETH LP Tokens, besteht auch bei dieser Methode das Risiko des Impermanent Loss.

## Lotterie-Tickets kaufen

Sobald du genug FRENS hast, gehst du zur [Shop Bulk Buy Benutzeroberfläche](https://aavegotchi.com/tickets), um Lotterie-Tickets mit FRENS zu kaufen.

Im Gegensatz zu FRENS können die Lotterie-Tickets von einer Wallet zur anderen übertragen werden. Sie können auch auf [Marktplätzen](/marketplace) gekauft/verkauft werden.

Es gibt sechs verschiedene Kategorien von Lotterie-Tickets, die von Gewöhnlich (am wenigsten wertvoll) bis Göttlich (am wertvollsten) reichen:

table_RaffleTickets

Blog Beitrag: \[Stake GHST, Make FRENS Live on Ethereum Mainnet!\]( https://aavegotchi.medium.com/stake-ghst-make-frens-live-on-ethereum-mainnet-658bd507d67b)

Nutzer können in einer einzigen Transaktion Tickets aus verschiedenen Kategorien kaufen. Du musst **nicht** für jede Kategorie von Lotterie-Tickets separate Kauftransaktionen erstellen.

## An Lotterien teilnehmen

Eine Lotterie läuft über einen bestimmten Zeitraum. In diesem Zeitraum kannst du deine Lotterie-Tickets einreichen, um eine Chance auf gewisse Preise zu erhalten. Submitting raffle tickets into the draw involves an Ethereum transaction; it is not done automatically. If you have many different categories of raffle tickets and wish to enter them together as a bundle, this is also possible. You do **not** need to create separate transactions for entering each category of raffle tickets into the raffle.

When the raffle is over, you can find out what prizes you have won and can claim them.

If you choose not to participate in a given Raffle, you do not need to do anything with your raffle tickets. You can also accumulate raffle tickets for subsequent raffles if you like to do so.

As an example, the first raffle had a Chainlink Theme. Here were the prizes for the raffle:

<img class = "bodyImage" src = "/staking/link-raffle-prizes.png" alt = "Aavegotchi Chainlink-theme Raffle Prizes" />

A total of 6010 prizes.

[Prizes on OpenSea](https://opensea.io/activity/aavegotchi-wearable-vouchers)

Each prize will be allocated to a randomly drawn raffle ticket, where each ticket has an equal chance of winning.

You can improve your probability of winning by:
* Mehrere Tickets einreichst
* An Ticket-Kategorien mit mehr Preisen teilnimmst (z.B. Gewöhnlich)

Random numbers for the Raffle prize winners are generated through Chainlink's [on-chain verifiable randomness generator](https://blog.chain.link/verifiable-random-functions-vrf-random-number-generation-rng-feature/).

The prizes, which are Wearable Vouchers, could be exchanged 1:1 for the actual Aavegotchi wearable once the game launches. This will take place at the [Aavegotchi Shop](https://aavegotchi.com/shop).

## Statistiken der letzten Lotterien
Knowing how to stake FRENS and participate in Raffles is good, you say. But what about the numbers? What are the probabilities of winning a wearable based on past raffles? Visit the [Raffles Statistics page](/raffles-stats) for the historical data.

## Weitere Ressourcen

- [Aavegotchi Raffles — A FRENLY Guide](https://aavegotchi.medium.com/aavegotchi-raffles-a-frenly-guide-66f624c9bc60)
- [Aavegotchi ❤ Chainlink Raffle — You Just WON](https://aavegotchi.medium.com/aavegotchi-chainlink-raffle-you-just-won-af87712f1018)
- [Anon and the Green Ticket](https://aavegotchi.medium.com/anon-and-the-green-ticket-5776969b3a69)