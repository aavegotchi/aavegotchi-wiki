---
author: Dev Barnyard
date: '2020-10-13T07:00:00.000Z'
title: 'Ponts de connexion'
description: 'Le pont Aavegotchi (et d''autres ponts pour transférer des actifs vers et depuis Polygon)'
contributors:
  - "barneychambers"
  - "unintelligent-nerd"
---

<div class="headerImageContainer">
<img class="headerImage" src="/bridge/aavegotchi-bridge.gif">
<p class="headerImageText">Le pont Aavegotchi</p>
</div>

Un pont est un logiciel qui vous permet de transférer des actifs d'une blockchain à une autre.

Le projet initial était de lancer Aavegotchi sur le réseau principal Ethereum le 4 janvier 2021. En raison de frais de gaz élevés, la communauté a voté pour le lancement du projet sur [Polygon Network](/glossary#polygon) à la place. À la suite de cette décision, les actifs doivent être reliés d'un réseau à l'autre.

Pour faciliter le transfert des actifs, Pixelcraft studios a créé le pont Aavegotchi qui permet aux utilisateurs de renvoyer des actifs entre les deux réseaux. Depuis, d'autres solutions passerelles sont également arrivées sur place. Cette page couvrira certains des ponts les plus courants.

<div class="contentsBox">

**Contenu**

<ol>
<li><a href=#aavegotchi-bridge>Le pont Aavegotchi</a></li>
<li><a href=#decentralized-bridges>Ponts décentralisés</a></li>
<p><a href=#polygon-bridge>Pont Polygon</a></p>
<p><a href=#umbria-narni-bridge>Pont Umbria Narni</a></p>
<li><a href=#centralized-bridges>Ponts centralisés</a></li>
<p><a href=#ascendex>AscendEX</a></p>
<p><a href=#transak>Transak</a></p>
<p><a href=#crypto-com>Crypto.com</a></p>
<p><a href=#binance>Binance</a></p>
</ol>

</div>

## Le pont Aavegotchi

Le pont Aavegotchi est le pont officiel créé par Pixelcraft Studios. Actuellement, il permet le transfert des jetons ERC-20 et des actifs ERC-721 (Aavegotchis) du réseau principal Ethereum vers le réseau Polygon et vice versa. Le pont pour ERC-1155s ([Objets portables](/wearables)) arrivera sous peu.

<img class="bodyImage" src="/bridge/aavegotchi-bridge.png" alt="Le pont Aavegotchi" />

Le pont Aavegotchi est accessible [ici](https://aavegotchi.com/bridge).

The following is a step-by-step example of bridging ERC-20 tokens from Ethereum Mainnet to Polygon:

1). Click on the token image (circled in red below) to open a dropdown menu of tokens. Select the token that is to be transferred to Polygon.

<img class = "bodyImage" src = "/bridge/select-atoken-to-convert.png" alt = "Aavegotchi Bridge to Matic" />

2). Key in the amount that is to be transferred.

<img class = "bodyImage" src = "/bridge/amount-to-transfer-to-matic.png" alt = "Aavegotchi Bridge to Matic" />

3). Click the "Approve Transfer" button.

4). Click the "Transfer to Polygon" button.

5). Wait for ~10 minutes for your asset to appear on Polygon network.

The same concept applies for sending assets back to Ethereum Mainnet from Polygon Network.

## Ponts décentralisés

### Pont Polygon
The Polygon bridge was the first cross-chain bridge created between Ethereum and Polygon. It is the official bridge of the Polygon team, and uses a validator driven model to transfer assets between Ethereum and Polygon. This bridge can transfer $GHST tokens, but cannot bridge NFT assets.

For those who want to use the Polygon Bridge, here are the steps to take:

1). Access the Polygon Web Wallet v2 at [https://wallet.polygon.technology](https://wallet.polygon.technology). Click on Polygon Bridge (circled in red below).

<img class="bodyImage" src="/bridge/polygon-bridge-frontpage.png" alt="Pont Polygon" />

2). Select the token from the dropdown menu, key in the amount into the textbox, and click the Transfer button

<img class="bodyImage" src="/bridge/polygon-bridge.png" alt="Pont Polygon" />

It can take up to 10 minutes for the tokens to arrive in your Polygon address.

If you need help with anything you can join the Aavegotchi [Discord](https://discord.com/invite/rttCTkZ) and ask a fellow community member.

### Pont Umbria Narni
The Narni bridge is a novel bridging solution created by Umbria Network, that uses a liquidity-bridge model, to reduce the cost of bridging by up to 90%. The Narni bridge resolves transactions in approximately 5 minutes, and costs approximately $40 (100 GWEI) to transfer GHST tokens between the Ethereum and Polygon blockchains. Currently, only ERC-20 tokens are compatible with the Narni bridge; NFTs cannot be bridged.

To use the Umbria Narni Bridge, please refer to the following steps:

1). Visit the [Umbria Narni Bridge](https://bridge.umbria.network/bridge). Select the originating and destination networks.

<img class="bodyImage" src='/bridge/umbria-network-selection.png' />

2). From the dropdown menu, select the token to be bridged.

<img class="bodyImage" src='/bridge/umbria-token-selection.png' />

3). Key in the amount of token to be bridged. The Narni bridge will provide an estimation of the amount of tokens you will receive post-bridging. The bridge takes a 0.5% fee for bridging assets between chains. The fees go to the liquidity providers that are providing assets on the Narni bridge.

<img class="bodyImage" src='/bridge/umbria-fee-estimation.png' />

4). At the point of bridging, you will be provided with 2 options (QR code or MetaMask). Bridging using MetaMask is the recommended approach. It is also recommended to select the fastest speed you can afford to minimize the risk of the transaction getting temporarily stuck.

<img class="bodyImage" src='/bridge/umbria-confirming-transaction.png' />

5). After sending the transaction, a modal will be displayed. The 1st section displays your transaction process to reaching the bridge. Once your transaction has reached the bridge, you will receive the first tick. It can take a few minutes for you to receive both ticks, but if it takes longer than 10 minutes, please contact the Umbria team on Discord and they will help you solve the issue.

Finally, you will receive two pink ticks, which means that your transaction has successfully bridged, and you will be able to see the assets in your wallet on the destination blockchain. You will also be able to see the transaction on the destination block explorer by clicking the relevant button on the screen at this stage.

<img class="bodyImage" src='/bridge/umbria-confirmation.png' />

If you have any questions about the Umbria Narni Bridge, or would like to chat with a member of the support of developer team, reach out on the [Umbria Discord channel](https://discord.gg/8Ms7Cr4)

## Ponts centralisés

### AscendEX

AscendEX (formerly BitMax) is a cryptocurrency platform that allows withdrawals to Polygon Network. Check out the infographic below for more details.

<img class = "bodyImage" src = "/bridge/Using_AscendEX_and_play_Aavegotchi.jpg" alt = "Using AscendEX to play Aavegotchi" />

### Transak

Transak is a fiat-to-crypto payment gateway. Users pay using their credit card and receive the tokens on the wallet address they specified.

See this [post](https://trasher.substack.com/p/buying-your-tokens-straight-into) by our community member for a step-by-step guide.

### Crypto.com

Crypto.com is a mobile app wallet. They enable withdrawals of MATIC and USDC to Polygon Network.

1). Select Transfer --> Withdraw --> Crypto --> External Wallet

2). Click the + sign at the top right corner

3). Select the token to be withdrawed. If withdrawal is available for that particular token, you will see an Option for "Polygon" in the "Select Network" field (see screenshot below).

<img class="bodyImage" src="/bridge/cryptocom-withdrawal.png" alt="Crypto.com withdrawal to Polygon" />

### Binance

Binance is one of the largest cryptocurrency exchanges in the world. They also provide withdrawals to Polygon Network.

At the withdrawal page, set the Network to **MATIC** Polygon (see screenshot below).

<img class="bodyImage" src="/bridge/withdrawal-from-binance-to-polygon.png" alt="Withdrawal from Binance to Polygon" />