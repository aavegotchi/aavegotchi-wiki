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

Es gibt zwei Möglichkeiten zu staken: (1) Staking von GHST Tokens, und/oder (2) Staking von Uniswap GHST-ETH LP Tokens.

*Hinweis: Presale GHST Tokens können nicht gestaked werden, bis sie freigeschaltet wurden.*

### GHST Tokens staken
Dies ist die einfachste Art, GHST Tokens zu staken. Gehe auf die [Staking-Benutzeroberfläche](https://aavegotchi.com/stake). Es wird wie das Bild unten aussehen.

<img class = "bodyImage" src = "/staking/staking-interface.png" alt = "aavegotchi staking" />

Wähle "Stake on Mainnet" und du wirst eine weitere Seite mit zwei Boxen sehen. Die Box auf der linken Seite wird mit "Stake GHST Token" bezeichnet sein (siehe Bild unten). If you are staking for the very first time, you have to click on the "Approve" button, which grants the Staking Contract access to your GHST tokens. Once the "Approve" transaction goes through, you can then key in the desired amount of GHST you would like to stake in the "Input amount" field. When you are done, hit the "Stake" button to initiate the staking process.

<img class = "bodyImage" src = "/staking/stake-ghst.png" alt = "stake ghst token aavegotchi" />

*For every 1 GHST staked in this way, you receive 1 FRENS / Day.*

### Staking Uniswap GHST-ETH LP tokens
A second, and more complicated, method is to stake the Uniswap GHST-ETH Liquidity Provider (LP) tokens. To do this, you have to have both GHST tokens and ETH in your wallet. Head over to the [GHST-ETH Uniswap pool](https://app.uniswap.org/#/add/0x3f382dbd960e3a9bbceae22651e88158d2791550/ETH) to add liquidity for both tokens (see image below). Users have to contribute liquidity at a ratio of 50% GHST and 50% ETH to the pool. The amount of GHST and ETH required to acquire 1 GHST-ETH LP token varies based on the price of the pool token at the time.  In return for staking both GHST and ETH, users will receive the GHST-ETH LP token from Uniswap.

<img class = "bodyImage" src = "/staking/ghst-eth-uniswap-interface.png" alt = "GHST-ETH LP Tokens Aavegotchi staking" />

Once you have acquired your GHST-ETH LP token, head to the [staking user interface](https://aavegotchi.com/stake). Es wird wie das Bild unten aussehen.

<img class = "bodyImage" src = "/staking/staking-interface.png" alt = "aavegotchi staking" />

Wähle "Stake on Mainnet" und du wirst eine weitere Seite mit zwei Boxen sehen. The box on the right will be titled "Stake Uniswap GHST Token" (see image below). If you are staking for the very first time, you have to click on the "Approve" button, which grants the Staking Contract access to your GHST-ETH LP tokens. Once the "Approve" transaction goes through, you can then key in the desired amount of GHST-ETH LP tokens you would like to stake in the "Input amount" field. When you are done, hit the "Stake" button to initiate the staking process.

<img class = "bodyImage" src = "/staking/stake-uniswap-ghst-eth.png" alt = "stake uniswap ghst-eth LP token aavegotchi" />

*For every 1 GHST-ETH staked in this way, you receive 100 FRENS / Day.*

Why the huge difference in the number of FRENS earned through this method? Staking GHST-ETH LP tokens has the risk of [impermanent loss](/posts/glossary#impermanent-loss). You are compensated for the increased risk you take.

## Lotterie-Tickets kaufen

Once you have enough FRENS, head to the [Shop Bulk Buy user interface](https://aavegotchi.com/tickets) to purchase raffle tickets with FRENS.

Unlike FRENS, Raffle Tickets can be transferred from one wallet to another. They can also be bought/sold on [marketplaces](/marketplace).

There are six different categories of raffle tickets, ranging from Common (least valuable) to Godlike (most valuable):

table_RaffleTickets

Blog post: \[Stake GHST, Make FRENS Live on Ethereum Mainnet!\]( https://aavegotchi.medium.com/stake-ghst-make-frens-live-on-ethereum-mainnet-658bd507d67b)

Users are allowed to buy tickets belonging to different categories in a single transaction. You do **not** need to create separate buy transactions for each category of raffle ticket.

## An Lotterien teilnehmen

A raffle runs for a period of time. During this period, you can submit your raffle tickets for a chance to win prizes. Submitting raffle tickets into the draw involves an Ethereum transaction; it is not done automatically. If you have many different categories of raffle tickets and wish to enter them together as a bundle, this is also possible. You do **not** need to create separate transactions for entering each category of raffle tickets into the raffle.

When the raffle is over, you can find out what prizes you have won and can claim them.

If you choose not to participate in a given Raffle, you do not need to do anything with your raffle tickets. You can also accumulate raffle tickets for subsequent raffles if you like to do so.

As an example, the first raffle had a Chainlink Theme. Here were the prizes for the raffle:

<img class = "bodyImage" src = "/staking/link-raffle-prizes.png" alt = "Aavegotchi Chainlink-theme Raffle Prizes" />

A total of 6010 prizes.

[Prizes on OpenSea](https://opensea.io/activity/aavegotchi-wearable-vouchers)

Each prize will be allocated to a randomly drawn raffle ticket, where each ticket has an equal chance of winning.

You can improve your probability of winning by:
* Submitting multiple tickets
* Enter raffle ticket categories with more prizes (e.g. Common)

Random numbers for the Raffle prize winners are generated through Chainlink's [on-chain verifiable randomness generator](https://blog.chain.link/verifiable-random-functions-vrf-random-number-generation-rng-feature/).

The prizes, which are Wearable Vouchers, could be exchanged 1:1 for the actual Aavegotchi wearable once the game launches. This will take place at the [Aavegotchi Shop](https://aavegotchi.com/shop).

## Statistiken der letzten Lotterien
Knowing how to stake FRENS and participate in Raffles is good, you say. But what about the numbers? What are the probabilities of winning a wearable based on past raffles? Visit the [Raffles Statistics page](/raffles-stats) for the historical data.

## Weitere Ressourcen

- [Aavegotchi Raffles — A FRENLY Guide](https://aavegotchi.medium.com/aavegotchi-raffles-a-frenly-guide-66f624c9bc60)
- [Aavegotchi ❤ Chainlink Raffle — You Just WON](https://aavegotchi.medium.com/aavegotchi-chainlink-raffle-you-just-won-af87712f1018)
- [Anon and the Green Ticket](https://aavegotchi.medium.com/anon-and-the-green-ticket-5776969b3a69)