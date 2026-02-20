---
author: Dev Barnyard
date: "2025-09-18T00:00:00.000Z"
title: "Bridges"
description: "The Aavegotchi Bridge (and other bridges to transfer assets to and from Base, plus legacy Polygon)"
contributors: ["barneychambers", "unintelligent-nerd"]
---

<div class="headerImageContainer">
<img class="headerImage" src="/bridge/aavegotchi-bridge.gif">
<p class="headerImageText">The Aavegotchi Bridge</p>
</div>

> **Note (Base era):** As of **2025-07-25**, Aavegotchi’s canonical home is **Base**. Polygon bridging content below is largely **legacy/historical** (Polygon contracts are frozen/view-only). See: **[Migration to Base (2025)](/base-migration)**.

A bridge is a piece of software that allows you to transfer assets from one blockchain to another.

The initial plan was to launch Aavegotchi on Ethereum Mainnet on 4 January 2021. Due to high gas fees, the community voted to launch the project on [Polygon Network](/glossary#polygon) instead. As a result of this decision, assets have to be bridged from one network to another.

To facilitate the transfer of assets, Pixelcraft studios created the Aavegotchi Bridge that allows users to send assets back and forth across both networks. Since then, other bridging solutions have also arrived at the scene. This page will cover some of the most common bridges.

<div class="contentsBox">

**Contents**

<ol>
<li><a href=#aavegotchi-bridge>Aavegotchi Bridge</a></li>
<li><a href=#decentralized-bridges>Decentralized Bridges</a></li>
<p><a href=#polygon-bridge>Polygon Bridge</a></p>
<p><a href=#umbria-narni-bridge>Umbria Narni Bridge</a></p>
<p><a href=#base-bridges>Base Bridges</a></p>
<li><a href=#centralized-bridges>Centralized Bridges</a></li>
<p><a href=#ascendex>AscendEX</a></p>
<p><a href=#transak>Transak</a></p>
<p><a href=#crypto-com>Crypto.com</a></p>
<p><a href=#binance>Binance</a></p>
</ol>

</div>

## Aavegotchi Bridge


The Aavegotchi Bridge is the official bridge created by Pixelcraft Studios. Historically it supported transfers between Ethereum and Polygon. As of 2024-2025, Aavegotchi’s canonical home migrated to Base; for GHST to Base, use the canonical Ethereum↔Base bridge or reputable fast bridges.

Sources: [GHST Token Is Now Live on Base (2024-04-17)](https://blog.aavegotchi.com/ghst-token-is-now-live-on-base/); [Aavegotchi Has Migrated to Base (2025-07-25)](https://blog.aavegotchi.com/aavegotchi-has-migrated-to-base/)

Historical note (2023-03-22): During the on-chain governance process to close the GHST bonding curve, the team published a step-by-step guide for bridging GHST from Polygon back to Ethereum for voting/quorum purposes (and noted Polygon→Ethereum withdrawals could take ~2–3 hours, sometimes longer, plus a final “claim on Ethereum” step). Source: [Let the Great GHST Migration Begin! (2023-03-22)](https://blog.aavegotchi.com/let-the-great-ghst-migration-begin/)

<img class="bodyImage" src="/bridge/aavegotchi-bridge.png" alt="Aavegotchi Bridge">

The Aavegotchi Bridge can be accessed [here](https://www.aavegotchi.com/get-tokens?p=bridge).

**Legacy (Polygon era):** The following is a step-by-step example of bridging ERC-20 tokens from Ethereum Mainnet to Polygon. It is retained for historical reference; Base-era bridging uses different UIs/providers.

1). Click on the token image (circled in red below) to open a dropdown menu of tokens. Select the token that is to be transferred to Polygon.

<img class = "bodyImage" src = "/bridge/select-atoken-to-convert.png" alt = "Aavegotchi Bridge to Matic">

2). Key in the amount that is to be transferred.

<img class = "bodyImage" src = "/bridge/amount-to-transfer-to-matic.png" alt = "Aavegotchi Bridge to Matic">

3). Click the "Approve Transfer" button.

4). Click the "Transfer to Polygon" button.

5). Wait for ~10 minutes for your asset to appear on Polygon network.

The same concept applies for sending assets back to Ethereum Mainnet from Polygon Network.

## Decentralized Bridges

### Polygon Bridge

The Polygon bridge was the first cross-chain bridge created between Ethereum and Polygon. It is the official bridge of the Polygon team, and uses a validator driven model to transfer assets between Ethereum and Polygon.
This bridge can transfer \$GHST tokens, but cannot bridge NFT assets.

For those who want to use the Polygon Bridge, here are the steps to take:

1). Access the Polygon Web Wallet v2 at [https://wallet.polygon.technology](https://wallet.polygon.technology). Click on Polygon Bridge (circled in red below).

<img class="bodyImage" src="/bridge/polygon-bridge-frontpage.png" alt="Polygon Bridge">

2). Select the token from the dropdown menu, key in the amount into the textbox, and click the Transfer button

<img class="bodyImage" src="/bridge/polygon-bridge.png" alt="Polygon Bridge">

It can take up to 10 minutes for the tokens to arrive in your Polygon address.

If you need help with anything you can join the Aavegotchi [Discord](https://discord.com/invite/rttCTkZ) and ask a fellow community member.

### Umbria Narni Bridge

The Narni bridge is a novel bridging solution created by Umbria Network, that uses a liquidity-bridge model, to reduce the cost of bridging by up to 90%. The Narni bridge resolves transactions in approximately 5 minutes, and costs approximately \$40 (100 GWEI) to transfer GHST tokens between the Ethereum and Polygon blockchains. Currently, only ERC-20 tokens are compatible with the Narni bridge; NFTs cannot be bridged.

Historical governance announcement (2022-05-05): [[VOTE] AGIP 21, 22 & 23: GHST on Umbria & GoodGhosting + Rarity Farming SZN3](https://blog.aavegotchi.com/vote-agip-21-22-23-ghst-on-umbria-goodghosting-rarity-farming-szn3/)

To use the Umbria Narni Bridge, please refer to the following steps:

1). Visit the [Umbria Narni Bridge](https://bridge.umbria.network/bridge). Select the originating and destination networks.

<img class="bodyImage" src='/bridge/umbria-network-selection.png'/>

2). From the dropdown menu, select the token to be bridged.

<img class="bodyImage" src='/bridge/umbria-token-selection.png'/>

3). Key in the amount of token to be bridged. The Narni bridge will provide an estimation of the amount of tokens you will receive post-bridging. The bridge takes a 0.5% fee for bridging assets between chains. The fees go to the liquidity providers that are providing assets on the Narni bridge.

<img class="bodyImage" src='/bridge/umbria-fee-estimation.png'/>

4). At the point of bridging, you will be provided with 2 options (QR code or MetaMask). Bridging using MetaMask is the recommended approach. It is also recommended to select the fastest speed you can afford to minimize the risk of the transaction getting temporarily stuck.

<img class="bodyImage" src='/bridge/umbria-confirming-transaction.png'/>

5). After sending the transaction, a modal will be displayed. The 1st section displays your transaction process to reaching the bridge. Once your transaction has reached the bridge, you will receive the first tick. It can take a few minutes for you to receive both ticks, but if it takes longer than 10 minutes, please contact the Umbria team on Discord and they will help you solve the issue.

Finally, you will receive two pink ticks, which means that your transaction has successfully bridged, and you will be able to see the assets in your wallet on the destination blockchain. You will also be able to see the transaction on the destination block explorer by clicking the relevant button on the screen at this stage.

<img class="bodyImage" src='/bridge/umbria-confirmation.png'/>

If you have any questions about the Umbria Narni Bridge, or would like to chat with a member of the support of developer team, reach out on the [Umbria Discord channel](https://discord.gg/8Ms7Cr4)

### Base Bridges

For bridging assets between Ethereum and Base, Base docs list common options (and note that `bridge.base.org` has been deprecated):

- Base docs (bridges): https://docs.base.org/base-chain/network-information/bridges
- Superbridge (Base mainnet): https://superbridge.app/base
- Superbridge (Base Sepolia): https://superbridge.app/base-sepolia

Fast bridges (Polygon↔Base) vary by provider and availability over time (examples: Bungee, Jumper).

Reference (historical): [GHST Token Is Now Live on Base (2024-04-17)](https://blog.aavegotchi.com/ghst-token-is-now-live-on-base/).

Note: specific bridge availability changes over time; keep this section high-level and treat provider lists as time-bound.

## Centralized Bridges

> **Note:** Exchange and on-ramp support changes frequently. The examples below include legacy Polygon-era flows; always verify supported deposit/withdraw networks before sending funds.

### AscendEX

AscendEX (formerly BitMax) is a cryptocurrency platform that allows withdrawals to Polygon Network. Check out the infographic below for more details.

<img class = "bodyImage" src = "/bridge/Using_AscendEX_and_play_Aavegotchi.jpg" alt = "Using AscendEX to play Aavegotchi">

### Transak

Transak is a fiat-to-crypto payment gateway. Users pay using their credit card and receive the tokens on the wallet address they specified.

See this [post](https://trasher.substack.com/p/buying-your-tokens-straight-into) by our community member for a step-by-step guide.

### Crypto.com

Crypto.com is a mobile app wallet. They enable withdrawals of MATIC and USDC to Polygon Network.

1). Select Transfer --> Withdraw --> Crypto --> External Wallet

2). Click the + sign at the top right corner

3). Select the token to be withdrawed. If withdrawal is available for that particular token, you will see an Option for "Polygon" in the "Select Network" field (see screenshot below).

<img class="bodyImage" src="/bridge/cryptocom-withdrawal.png" alt="Crypto.com withdrawal to Polygon">

### Binance

Binance is one of the largest cryptocurrency exchanges in the world.

As of 31st May 2022, they have [enabled GHST deposits and withdrawals directly on Polygon](https://blog.aavegotchi.com/binance-enables-ghst-deposits-and-withdrawals-on-polygon/).

**Exchange availability can change over time.** Always check the exchange’s supported networks and official announcements before sending funds.

For the most up-to-date list of venues, see the GHST “Markets” tab on CoinGecko: https://web.archive.org/web/*/https://www.coingecko.com/en/coins/aavegotchi#markets

<img class="bodyImage" src="/bridge/ghst-withdrawal-from-binance-to-polygon.png" alt="GHST withdrawal from Binance to Polygon">

## Related Pages

- [Migration to Base (2025)](/base-migration)
- [Contracts](/contracts)
- [GHST](/ghst)
- [Polygon (Historical)](/polygon)
