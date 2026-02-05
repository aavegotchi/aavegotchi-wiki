---
author: Dev Barnyard
date: '2020-10-13T07:00:00.000Z'
title: 'Bridges for GHST and Aavegotchi'
description: 'How to bridge assets between Ethereum and Polygon'
---

Bridging assets can be expensive and time consuming, but there are a few options to choose from when moving around your GHST or Aavegotchi NFTs. A blockchain bridge is a connection between two of more blockchains that enables the transfer of tokens between the blockchains. Most blockchain bridges are developed between EVM compatible blockchains, but both chains do not need to have the same underlying architecture or governance models to be bridged together.
<div class="contentsBox">

** 목차 **

<ol>
<li><a href=#polygon-bridge>Polygon Bridge</a></li>
<li><a href=#umbria-narni-bridge>Umbria Narni Bridge</a></li>
</ol>

</div>

## Polygon Bridge
The Polygon bridge was the first cross-chain bridge created between Ethereum and Polygon. It is the official bridge of the Polygon team, and uses a validator driven model to transfer assets between Ethereum and Polygon. This bridge can transfer $GHST tokens, but cannot bridge NFT assets. The Polygon bridge resolves transactions in approximately 2 hours, and costs approximately $140 (100 GWEI gas price) if your wallet need to approve the transaction, or $110 (100 GWEI gas price) if you have made a transaction in the past.

## Umbria Narni Bridge
The Narni bridge is a novel bridging solution created by Umbria Network, that uses a liquidity-bridge model, to reduce the cost of bridging by up to 90%. The Narni bridge resolves transactions in approximately 5 minutes, and costs approximately $40 (100 GWEI) to transfer GHST tokens between the Ethereum and Polygon blockchains. Currently only ERC20 tokens are compatible with the Narni bridge, NFTs cannot be bridged.

To bridge $GHST tokens between the Ethereum to Polygon blockchain, the first step is to go to the [Umbria Narni Bridge](https://bridge.umbria.network/bridge). Next, connect your Metamask wallet to the website, and decide which network you would like to bridge assets from, and which network you would like to send them to. In the case of Aavegotchi's GHST token, the start and end destination will likely be either Ethereum or Polygon.

<img src='/umbria/1.png' />

Next, choose the $GHST token from the dropdown list of compatible tokens that the Umbria Narni bridge has integrated into their cross-chain bridge.

<img src='/umbria/2.png' />

&nbsp; Once you have chosen which asset you would like to bridge, choose the amount of tokens you wish to bridge. The Narni bridge will give you an estimate of the number of tokens you will receive once you have bridged. The Umbria Narni bridge takes a 0.5% fee for bridging assets between chains. All of this fee is given to the liquidity providers that are providing assets on the Narni bridge.

<img src='/umbria/3.png' />


When you are ready to start the bridging process, you can decide to bridge using Metamask, or by scanning a QR code that appears when pressing the "Get Bridge Address" button. Bridging using Metamask is the recommended approach, when using the Umbria Narni Bridge.

<img src='/umbria/4.png' />

If you decide to bridge using the Metamask wallet, you will receive a model that will enable you to choose how fast your assets are sent to the bridge. It is always recommended to choose the fastest speed you can afford, to minimise the risk of a transaction getting temporarily stuck on its way to the bridge.

<img src='/umbria/5.png' />

After you have sent the transaction, you will be displayed a modal that will track the progress of the bridging. The first section of the modal displays your transactions process to reaching the bridge. Once your transaction has reached the bridge, you will receive the first tick. It can take a few minutes for you to receive both ticks, but if it takes longer than 10 minutes, please contact the Umbria team on Discord and they will help you solve the issue.

<img src='/umbria/7.png' />

Finally, you will receive two pink ticks, which means that your transaction has successfully bridged, and you will be able to see the assets in your wallet on the destination blockchain. You will also be able to see the transaction on the destination block explorer by clicking the relevant button on the screen at this stage.

<img src='/umbria/8.png' />

If you have any questions about the Umbria Narni Bridge, or would like to chat with a member of the support of developer team, reach out on the [Umbria Discord channel](https://discord.gg/8Ms7Cr4) 
