---
author: Moon
date: '2020-04-23T07:00:00.000Z'
title: 'Matic'
description: 'Matic Tutorial'
contributors:
  - "moon14888"
---

Hey! Du hast also von der Migration auf Matic gehört, hast aber keine Ahnung, was das überhaupt ist? Keine Sorge, wir werden dich Schritt für Schritt durch alles führen!

Kurz gefasst ist Matic Network eine Layer 2 Skalierungslösung für öffentliche Blockchains wie Ethereum. Es ist eine dezentralisierte Plattform, die schnellere und extrem kostengünstige Transaktionen mit Finalität auf der Hauptchain gewährleistet. Wenn du wissen willst, wie es im Detail funktioniert, schau dir diesen [Artikel](https://medium.com/matic-network/what-is-matic-network-466a2c493ae1) an.

Verabschiede dich also von 100$ Transaktionen auf Uniswap und sag hallo zu (fast) kostenlosen Interaktionen!

<div class="contentsBox">

**Inhalte**

<ol>
<li><a href=#why-matic->Wieso Matic?</a></li>
<li><a href=#adding-matic-to-your-metamask>Matic zu deiner Metamask Wallet hinzufügen</a></li>
<li><a href=#bridging-assets-to-matic>Assets auf Matic transferieren</a></li>
<li><a href=#bridging-assets-back-to-ethereum-mainnet>Bridging assets back to Ethereum Mainnet</a></li>
</ol>

</div>

## Wieso Matic?

Wie du vielleicht weisst, war der Launch des Aavegotchi Mainnets für den 4. Januar 2021 geplant. An diesem Tag bewegte sich Bitcoin um fast 40%, was dazu führte, dass Arbitrage-Bots durchdrehten. Dies liess die Gasgebühren auf über 400 gwei explodieren, was zu lächerlichen Transaktionsgebühren führte. Nur um es in Perspektive zu setzen: Ein einziges [Portal](/portals) zu kaufen, es zu öffnen und ein Gotchi zu beschwören, hätte mindestens 300$ gekostet.

Es war klar, dass ein Launch auf dem Ethereum Mainnet unmöglich war. Da Matic bereits mit verschiedenen NFT-Projekten (wie z.B. OpenSea) zusammengearbeitet hat, war die Wahl relativ einfach. Die Community teilte diese Meinung und stimmte mit 76% für einen Launch auf Matic.

## Matic zu deiner Metamask Wallet hinzufügen

Fangen wir also an! Um Matic Network zu nutzen, musst du es zunächst zu deiner Metamask Wallet hinzufügen.

1). Öffne die Erweiterung und klicke oben auf den Button "Ethereum Mainnet".

<img class = "bodyImage" src = "/matic/metamask.png" alt = "Metamask" />

2). Wähle "Custom RPC".

<img class = "bodyImage" src = "/matic/metamask-custom-RPC.png" alt = "Metamask Custom RPG" />

3). Gib die folgenden Einstellungen ein:

Network Name: Matic Mainnet

New RPC URL: https://rpc-mainnet.maticvigil.com/

Chain ID: 137

Currency Symbol (optional): MATIC

Block Explorer URL (optional): https://explorer.matic.network/

Sobald du alles hinzugefügt hast, kannst du auf "Save" klicken.

4). Es gibt keinen Schritt 4, du bist schon fertig! Du kannst nun zwischen Ethereum Mainnet und Matic wechseln, indem du auf den Button aus Schritt 1 klickst.

## Assets auf Matic transferieren
Nun hast du Metamask eingerichtet und bist bereit loszulegen. Doch vorher brauchst du noch ein paar Assets auf Matic. Wir werden die [Proof of Stake (PoS)](/glossary#proof-of-stake) Matic Bridge nutzen, um unsere Gelder vom Ethereum Mainnet auf Matic zu transferieren. Wenn du nur GHST migrieren möchtest, ignoriere alle folgenden Schritte und benutze unsere einfache Aavegotchi Bridge [hier](https://aavegotchi.com/get-tokens?p=bridge).

Also für alle, die verschiedene Assets wie ETH oder USDC übertragen wollen, hier ist die Vorgehensweise:

1). Besuche die Seite [https://wallet.matic.network/](https://wallet.matic.network/) und logge dich mit Metamask ein. Vergewissere dich, dass du dich im "Wallet" Tab befindest, es sollte in etwa so aussehen:

<img class = "bodyImage" src = "/matic/matic-wallet.png" alt = "Matic Wallet" />

2). **Klicke NICHT** auf die Schaltfläche "Switch to Plasma". Das ist die falsche Brücke und braucht 7 Tage um die Gelder zurückzuschicken. Füge stattdessen das Asset, das du migrieren möchtest, auf der rechten Seite hinzu. Ich habe bereits USDC hinzugefügt, daher kann man es in meiner Wallet sehen.

<img class = "bodyImage" src = "/matic/matic-wallet-add-token.png" alt = "Adding Token to Matic Wallet" />

3). Klicke auf der linken Seite auf "Matic Wallet" und "Deposit".

<img class = "bodyImage" src = "/matic/matic-wallet-deposit.png" alt = "Depositing Token to Matic Wallet" />

4). Klicke auf "Continue to Deposit" und wähle hier dein Asset aus:

<img class = "bodyImage" src = "/matic/matic-wallet-deposit2.png" alt = "Depositing Token to Matic Wallet" />

5). Gib ein, wie viel davon du migrieren möchtest und klicke auf den grossen blauen Button.

<img class = "bodyImage" src = "/matic/matic-wallet-deposit3.png" alt = "Depositing Token to Matic Wallet" />

Uuuuund das war's! Bestätige einfach die Transaktion in Metamask und du bist fertig. Es kann bis zu 10 Minuten dauern, bis die Token in deiner Matic Adresse ankommen. Du solltest 0.1 MATIC airdropped bekommen, wenn du einen Stablecoin transferierst und [Quickswap](https://quickswap.exchange/) öffnest, den grössten DEX auf Matic. (Das ist genug für tausende von Transaktionen, Matic ist super!)

Wenn du bei irgendetwas Hilfe brauchst, kannst du dem Aavegotchi [Discord](https://discord.com/invite/rttCTkZ) beitreten und ein anderes Community-Mitglied fragen.

## Bridging assets back to Ethereum Mainnet

What about bridging our assets back to Ethereum Mainnet? Is there a way to do it?

Yes, there is a way to transfer your assets back to Ethereum Mainnet!

Head over to the [Aavegotchi Bridge](https://aavegotchi.com/get-tokens?p=bridge) again.

<img class = "bodyImage" src = "/matic/bridge-to-matic.png" alt = "Aavegotchi Bridge" />

At the right hand side of the screen, there is an image of a token as well as a box where you can input an amount in. Click on the image of the token and a display of available tokens will appear. Select the [maToken](/matokens) which you want to bridge back to Ethereum Mainnet. After that, key in the desired amount in the box and hit the "Transfer to Ethereum" button.

Withdrawing from Matic takes approximately 30 minutes. Sometimes, it might take longer. After the withdrawal is complete, you still need to click the "CLAIM ON ETHEREUM" button to get your tokens back on Ethereum Mainnet.

Currently, the Aavegotchi Bridge supports the transfer of maTokens from Matic to Ethereum Mainnet. In time to come, it will support Aavegotchis (ERC-721) and Wearables (ERC-1155) as well.