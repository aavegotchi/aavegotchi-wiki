---
author: Moon
date: '2020-04-23T07:00:00.000Z'
title: 'Polygon'
description: 'Polygon Tutorial'
contributors:
  - "moon14888"
---

Hey! So you’ve heard about the migration to Polygon (formerly Matic Network), but got no idea what the hell that even is? Keine Sorge, wir werden dich Schritt für Schritt durch alles führen!

In short, Polygon is a Layer 2 scaling solution for public blockchains like Ethereum. Es ist eine dezentralisierte Plattform, die schnellere und extrem kostengünstige Transaktionen mit Finalität auf der Hauptchain gewährleistet. Wenn du wissen willst, wie es im Detail funktioniert, schau dir diesen [Artikel](https://medium.com/matic-network/what-is-matic-network-466a2c493ae1) an.

Verabschiede dich also von 100$ Transaktionen auf Uniswap und sag hallo zu (fast) kostenlosen Interaktionen!

<div class="contentsBox">

**Inhalte**

<ol>
<li><a href=#why-polygon->Why Polygon?</a></li>
<li><a href=#adding-polygon-to-your-metamask>Adding Polygon to your Metamask</a></li>
<li><a href=#bridging-assets-to-polygon>Bridging assets to Polygon</a></li>
<li><a href=#bridging-assets-back-to-ethereum-mainnet>Bridging assets back to Ethereum Mainnet</a></li>
</ol>

</div>

## Why Polygon?

Wie du vielleicht weisst, war der Launch des Aavegotchi Mainnets für den 4. Januar 2021 geplant. An diesem Tag bewegte sich Bitcoin um fast 40%, was dazu führte, dass Arbitrage-Bots durchdrehten. Dies liess die Gasgebühren auf über 400 gwei explodieren, was zu lächerlichen Transaktionsgebühren führte. Nur um es in Perspektive zu setzen: Ein einziges [Portal](/portals) zu kaufen, es zu öffnen und ein Gotchi zu beschwören, hätte mindestens 300$ gekostet.

Es war klar, dass ein Launch auf dem Ethereum Mainnet unmöglich war. Since Polygon has been working together with different NFT projects (such as OpenSea) already, the choice was relatively easy. The community shared this sentiment and voted for a launch on Polygon with 76%.

## Adding Polygon to your Metamask

Fangen wir also an! To use Polygon, you first need to add it to your Metamask wallet.

1). Öffne die Erweiterung und klicke oben auf den Button "Ethereum Mainnet".

<img class = "bodyImage" src = "/polygon/metamask.png" alt = "Metamask" />

2). Wähle "Custom RPC".

<img class = "bodyImage" src = "/polygon/metamask-custom-RPC.png" alt = "Metamask Custom RPG" />

3). Gib die folgenden Einstellungen ein:

Network Name: Matic Mainnet

New RPC URL: https://rpc-mainnet.maticvigil.com/

Chain ID: 137

Currency Symbol (optional): MATIC

Block Explorer URL (optional): https://explorer.matic.network/

Sobald du alles hinzugefügt hast, kannst du auf "Save" klicken.

4). Es gibt keinen Schritt 4, du bist schon fertig! You can now switch between Ethereum Mainnet and Polygon by clicking the button from step 1.

## Bridging assets to Polygon
Nun hast du Metamask eingerichtet und bist bereit loszulegen. But before you need some assets on Polygon. We’re going to use the [Proof of Stake (PoS)](/glossary#proof-of-stake) Polygon Bridge to transfer our funds from Ethereum Mainnet to Polygon. Wenn du nur GHST migrieren möchtest, ignoriere alle folgenden Schritte und benutze unsere einfache Aavegotchi Bridge [hier](https://aavegotchi.com/bridge).

Also für alle, die verschiedene Assets wie ETH oder USDC übertragen wollen, hier ist die Vorgehensweise:

1). Besuche die Seite [https://wallet.matic.network/](https://wallet.matic.network/) und logge dich mit Metamask ein. Vergewissere dich, dass du dich im "Wallet" Tab befindest, es sollte in etwa so aussehen:

<img class = "bodyImage" src = "/polygon/matic-wallet.png" alt = "Matic Wallet" />

2). **Klicke NICHT** auf die Schaltfläche "Switch to Plasma". Das ist die falsche Brücke und braucht 7 Tage um die Gelder zurückzuschicken. Füge stattdessen das Asset, das du migrieren möchtest, auf der rechten Seite hinzu. Ich habe bereits USDC hinzugefügt, daher kann man es in meiner Wallet sehen.

<img class = "bodyImage" src = "/polygon/matic-wallet-add-token.png" alt = "Adding Token to Matic Wallet" />

3). Klicke auf der linken Seite auf "Matic Wallet" und "Deposit".

<img class = "bodyImage" src = "/polygon/matic-wallet-deposit.png" alt = "Depositing Token to Matic Wallet" />

4). Klicke auf "Continue to Deposit" und wähle hier dein Asset aus:

<img class = "bodyImage" src = "/polygon/matic-wallet-deposit2.png" alt = "Depositing Token to Matic Wallet" />

5). Gib ein, wie viel davon du migrieren möchtest und klicke auf den grossen blauen Button.

<img class = "bodyImage" src = "/polygon/matic-wallet-deposit3.png" alt = "Depositing Token to Matic Wallet" />

Uuuuund das war's! Bestätige einfach die Transaktion in Metamask und du bist fertig. It can take up to 10 minutes for the tokens to arrive in your Polygon address. You should get 0.1 MATIC airdropped if you transfer a stablecoin and open [Quickswap](https://quickswap.exchange/), the largest DEX on Polygon. (That’s enough for 1000s of transactions, Polygon is aavesome!)

Wenn du bei irgendetwas Hilfe brauchst, kannst du dem Aavegotchi [Discord](https://discord.com/invite/rttCTkZ) beitreten und ein anderes Community-Mitglied fragen.

## Bridging assets back to Ethereum Mainnet

What about bridging our assets back to Ethereum Mainnet? Is there a way to do it?

Yes, there is a way to transfer your assets back to Ethereum Mainnet!

Head over to the [Aavegotchi Bridge](https://aavegotchi.com/bridge) again.

<img class = "bodyImage" src = "/polygon/bridge-to-matic.png" alt = "Aavegotchi Bridge" />

At the right hand side of the screen, there is an image of a token as well as a box where you can input an amount in. Click on the image of the token and a display of available tokens will appear. Select the [maToken](/matokens) which you want to bridge back to Ethereum Mainnet. After that, key in the desired amount in the box and hit the "Transfer to Ethereum" button.

Withdrawing from Polygon takes approximately 30 minutes. Sometimes, it might take longer. After the withdrawal is complete, you still need to click the "CLAIM ON ETHEREUM" button to get your tokens back on Ethereum Mainnet.

Currently, the Aavegotchi Bridge supports the transfer of maTokens from Polygon to Ethereum Mainnet. In time to come, it will support Aavegotchis (ERC-721) and Wearables (ERC-1155) as well.