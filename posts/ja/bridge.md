---
author: Dev Barnyard
date: '2020-10-13T07:00:00.000Z'
title: 'ブリッジ'
description: 'Aavegotchiブリッジ（Polygonとの間でアセットを転送するため）'
contributors:
  - "barneychambers"
  - "unintelligent-nerd"
---

<div class="headerImageContainer">
<img class="headerImage" src="/bridge/aavegotchi-bridge.gif">
<p class="headerImageText">Aavegotchiブリッジ</p>
</div>

ブリッジは、あるブロックチェーンから別のブロックチェーンにアセットを転送できるようにするソフトウェアです。

当初の計画は、2021年1月4日にイーサリアムメインネットでAavegotchiを起動することでした。 ガスが高いため、コミュニティは代わりにPolygon Networkでプロジェクトを立ち上げることに投票しました。 この決定の結果として、資産はあるネットワークから別のネットワークにブリッジする必要があります。

アセットの転送を容易にするために、Pixelcraftスタジオはユーザーが両方のネットワーク間でアセットをやり取りできるようにするAavegotchiブリッジを作成しました。 それ以来、他の橋も現場に到着しました。 このページでは、最も一般的なブリッジのいくつかについて説明します。

<div class="contentsBox">

**内容**

<ol>
<li><a href=#aavegotchi-bridge>Aavegotchiブリッジ</a></li>
<li><a href=#decentralized-bridges>分散型ブリッジ</a></li>
<p><a href=#polygon-bridge>Polygonブリッジ</a></p>
<p><a href=#umbria-narni-bridge>Umbria Narniブリッジ（ウンブリア・ナルニ）</a></p>
<li><a href=#centralized-bridges>中央集権化ブリッジ</a></li>
<p><a href=#ascendex>AscendEX</a></p>
<p><a href=#transak>Transak</a></p>
<p><a href=#crypto-com>Crypto.com</a></p>
<p><a href=#binance>Binance</a></p>
</ol>

</div>

## Aavegotchiブリッジ

Aavegotchiブリッジは、Pixelcraftスタジオによって作成された公式のブリッジです。 現在、ERC-20トークンとERC-721アセット（ゴッチ）をEthereumメインネットからPolygonネットワークに、またはその逆に転送できます。 ERC-1155ウェアラブルのブリッジングはまもなく登場します。

<img class="bodyImage" src="/bridge/aavegotchi-bridge.png" alt="Aavegotchiブリッジ" />

Aavegotchiブリッジは、[こちら](https://aavegotchi.com/bridge)からアクセスできます。

以下は、ERC-20トークンをEthereumメインネットからPolygonにブリッジするステップバイステップの例です。

1). トークンのイメージ（下の赤い丸で囲んだ部分）をクリックして、トークンのドロップダウンメニューを開きます。 Polygonに転送するトークンを選択します。

<img class = "bodyImage" src = "/bridge/select-atoken-to-convert.png" alt = "Aavegotchi Bridge to Matic" />

2). 送金する金額を入力します。

<img class = "bodyImage" src = "/bridge/amount-to-transfer-to-matic.png" alt = "Aavegotchi Bridge to Matic" />

3). 「転送を承認」ボタンをクリックします。

4). 「Polygonに転送」ボタンをクリックします。

5). アセットがPolygonネットワークに表示されるまで約10分待ちます。

The same concept applies for sending assets back to Ethereum Mainnet from Polygon Network.

## 分散型ブリッジ

### Polygonブリッジ
The Polygon bridge was the first cross-chain bridge created between Ethereum and Polygon. It is the official bridge of the Polygon team, and uses a validator driven model to transfer assets between Ethereum and Polygon. This bridge can transfer $GHST tokens, but cannot bridge NFT assets.

For those who want to use the Polygon Bridge, here are the steps to take:

1). Access the Polygon Web Wallet v2 at [https://wallet.polygon.technology](https://wallet.polygon.technology). Click on Polygon Bridge (circled in red below).

<img class="bodyImage" src="/bridge/polygon-bridge-frontpage.png" alt="Polygonブリッジ" />

2). Select the token from the dropdown menu, key in the amount into the textbox, and click the Transfer button

<img class="bodyImage" src="/bridge/polygon-bridge.png" alt="Polygonブリッジ" />

It can take up to 10 minutes for the tokens to arrive in your Polygon address.

If you need help with anything you can join the Aavegotchi [Discord](https://discord.com/invite/rttCTkZ) and ask a fellow community member.

### Umbria Narniブリッジ（ウンブリア・ナルニ）
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

## 中央集権化ブリッジ

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