---
author: Moon
date: '2020-04-23T07:00:00.000Z'
title: 'Matic'
description: 'Matic Tutorial'
contributors:
  - "moon14888"
---

Hey Fren! So you’ve heard about the migration to Matic, but got no idea what the hell that even is? Don’t worry, we’ll take you through everything step by step!

In short, Matic Network is a Layer 2 scaling solution for public blockchains like Ethereum. It is a decentralized platform that ensures faster and extremely low-cost transactions with finality on the main chain. If you want to know how it works in more detail, check this [article](https://medium.com/matic-network/what-is-matic-network-466a2c493ae1) out.

So say goodbye to 100$ transactions on Uniswap and hello to (almost) free interactions!

<div class="contentsBox">

** 목차 **

<ol>
<li><a href=#why-matic->Why Matic?</a></li>
<li><a href=#adding-matic-to-your-metamask>Adding Matic to your Metamask</a></li>
<li><a href=#bridging-assets-to-matic>Bridging assets to Matic</a></li>
<li><a href=#bridging-assets-back-to-ethereum-mainnet>Bridging assets back to Ethereum Mainnet</a></li>
</ol>

</div>

## Why Matic?

As you might or might not know, Aavegotchi Mainnet launch was planned for January 4th 2021. On that day Bitcoin moved for almost 40%, which caused arbitrage bots to go crazy. This made gas fees skyrocket to over 400 gwei, resulting in ridiculous transaction fees. Just to put it into perspective: Buying a single [portal](/portals), opening it and summoning a Gotchi would have cost at least 300$.

It was clear that a launch on Ethereum Mainnet was impossible. Since Matic has been working together with different NFT projects (such as OpenSea) already, the choice was relatively easy. The community shared this sentiment and voted for a launch on Matic with 76%.

## Adding Matic to your Metamask

Let’s get started with the fun stuff! To use Matic Network, you first need to add it to your Metamask wallet.

1). Open the extension and click the “Ethereum Mainnet” button on the top.

<img class = "bodyImage" src = "/matic/metamask.png" alt = "Metamask" />

2). Select “Custom RPC”.

<img class = "bodyImage" src = "/matic/metamask-custom-RPC.png" alt = "Metamask Custom RPG" />

3). Enter the following settings:

Network Name: Matic Mainnet

New RPC URL: https://rpc-mainnet.maticvigil.com/

Chain ID: 137

Currency Symbol (optional): MATIC

Block Explorer URL (optional): https://explorer.matic.network/

Once you’ve added everything, you can click on “Save”.

4). There’s no step four, you’re already done! You can now switch between Ethereum Mainnet and Matic by clicking the button from step 1.

## Bridging assets to Matic
Alright you got Metamask set up and are ready to dive right in. But before you need some assets on Matic. We’re going to use the [Proof of Stake (PoS)](/glossary#proof-of-stake) Matic Bridge to transfer our funds from Ethereum Mainnet to Matic. If you only want to transfer your GHST, ignore all of the following steps and use our simple Aavegotchi Bridge [here](https://aavegotchi.com/get-tokens?p=bridge).

So for everyone who wants to transfer different assets, such as ETH or USDC, here’s how you do it:

1). Head over to [https://wallet.matic.network/](https://wallet.matic.network/) and login with Metamask. Make sure you’re in the “Wallet” tab, it should look something like this:

<img class = "bodyImage" src = "/matic/matic-wallet.png" alt = "Matic Wallet" />

2). **DO NOT** click the “Switch to Plasma” button. That’s the wrong bridge and needs 7 days to withdraw. Instead add the asset you want to transfer on the right side. I have already added USDC so you can see it in my wallet.

<img class = "bodyImage" src = "/matic/matic-wallet-add-token.png" alt = "Adding Token to Matic Wallet" />

3). On the left side click “Matic Wallet” and “Deposit”.

<img class = "bodyImage" src = "/matic/matic-wallet-deposit.png" alt = "Depositing Token to Matic Wallet" />

4). Click “Continue to Deposit” and select your asset here:

<img class = "bodyImage" src = "/matic/matic-wallet-deposit2.png" alt = "Depositing Token to Matic Wallet" />

5). Enter how much of it you’d like to bridge and click the big blue button.

<img class = "bodyImage" src = "/matic/matic-wallet-deposit3.png" alt = "Depositing Token to Matic Wallet" />

Aaaaaand that’s it! Just confirm the transaction in Metamask and you’re done. It can take up to 10 minutes for the tokens to arrive in your Matic address. You should get 0.1 MATIC airdropped if you transfer a stablecoin and open [Quickswap](https://quickswap.exchange/), the largest DEX on matic. (That’s enough for 1000s of transactions, Matic is aavesome!)

If you need help with anything you can join the Aavegotchi [Discord](https://discord.com/invite/rttCTkZ) and ask a fellow community member.

## Bridging assets back to Ethereum Mainnet

What about bridging our assets back to Ethereum Mainnet? Is there a way to do it?

Yes, there is a way to transfer your assets back to Ethereum Mainnet!

Head over to the [Aavegotchi Bridge](https://aavegotchi.com/get-tokens?p=bridge) again.

<img class = "bodyImage" src = "/matic/bridge-to-matic.png" alt = "Aavegotchi Bridge" />

At the right hand side of the screen, there is an image of a token as well as a box where you can input an amount in. Click on the image of the token and a display of available tokens will appear. Select the [maToken](/matokens) which you want to bridge back to Ethereum Mainnet. After that, key in the desired amount in the box and hit the "Transfer to Ethereum" button.

Withdrawing from Matic takes approximately 30 minutes. Sometimes, it might take longer. After the withdrawal is complete, you still need to click the "CLAIM ON ETHEREUM" button to get your tokens back on Ethereum Mainnet.

Currently, the Aavegotchi Bridge supports the transfer of maTokens from Matic to Ethereum Mainnet. In time to come, it will support Aavegotchis (ERC-721) and Wearables (ERC-1155) as well.