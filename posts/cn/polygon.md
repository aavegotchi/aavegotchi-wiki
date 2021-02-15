---
author: hard to edit since its already a proof-reading one, i’ll check this tomorrow
date: '2020-04-23T07:00:00.000Z'
title: 'Polygon'
description: 'Polygon Tutorial'
contributors:
  - "moon14888"
---

嘿，朋友！ So you’ve heard about the migration to Polygon (formerly Matic Network), but got no idea what the hell that even is? 别担心，我们会逐步带你完成所有步骤！

In short, Polygon is a Layer 2 scaling solution for public blockchains like Ethereum. 这是一个去中心化的平台，可确保更快和极低成本的交易，并在主链上具有最终性。 如果你想知道它如何工作更详细，请查看 [文章](https://medium.com/matic-network/what-is-matic-network-466a2c493ae1) 篇。

因此，告别Uniswap上的100美元交易，并向（几乎）免费互动打招呼！

<div class="contentsBox">

**内容**

<ol>
<li><a href=#why-polygon->Why Polygon?</a></li>
<li><a href=#adding-polygon-to-your-metamask>Adding Polygon to your Metamask</a></li>
<li><a href=#bridging-assets-to-polygon>Bridging assets to Polygon</a></li>
<li><a href=#bridging-assets-back-to-ethereum-mainnet>Bridging assets back to Ethereum Mainnet</a></li>
</ol>

</div>

## Why Polygon?

你们可能知道，也可能不知道，Aavegotchi Mainnet计划在2021年1月4日上线。 那天，比特币上涨了近40％，这导致套利机器人发疯。 这使天然气费飙升至超过400 gwei，从而导致可笑的交易费。 只是为了说明一下：购买单个[传送门](/portals)，将其打开并召唤Gotchi至少需要花费300美元。

很明显，在Ethereum Mainnet上进行上线是不可能的。 Since Polygon has been working together with different NFT projects (such as OpenSea) already, the choice was relatively easy. The community shared this sentiment and voted for a launch on Polygon with 76%.

## Adding Polygon to your Metamask

让我们以有趣的东西开始吧！ To use Polygon, you first need to add it to your Metamask wallet.

1). 打开扩展并点击顶部的“Ethereum  Mainnet”按钮。

<img class = "bodyImage" src = "/polygon/metamask.png" alt = "Metamask" />

2). 选择“自定义 RPC”。

<img class = "bodyImage" src = "/polygon/metamask-custom-RPC.png" alt = "Metamask Custom RPG" />

3). 输入以下设置：

网络名称：Matic Mainnet

新 RPC URL： https://rpc-mainnet.maticvigil.com/

链条ID：137

货币符号(可选)：MATIC

区块资源管理器URL (可选)：https://explorer.matic.network/

一旦你添加了一切，你可以点击“保存”。

4). 没有步骤四，您已经完成了！ You can now switch between Ethereum Mainnet and Polygon by clicking the button from step 1.

## Bridging assets to Polygon
好吧，你已经设置了Metamask，准备好立即挖掘。 But before you need some assets on Polygon. We’re going to use the [Proof of Stake (PoS)](/glossary#proof-of-stake) Polygon Bridge to transfer our funds from Ethereum Mainnet to Polygon. 如果您只想转移您的 GHST，忽略所有以下步骤并使用我们简单的 Aavegotchi 桥 [在这里](https://aavegotchi.com/bridge)。

对于想要转移不同资产的所有人，如ETH或USDC，您在这里是如何操作的：

1). 到 [https://wallet.matic.network/](https://wallet.matic.network/) 并使用Metamask登录。 请确保您在“钱包”选项卡中，它应该看起来像这样：

<img class = "bodyImage" src = "/polygon/matic-wallet.png" alt = "Matic Wallet" />

2). **不要** 点击"切换到Plasma"按钮。 这是错误的桥，需要7天才能退出。 相反，添加您想要在右侧转移的资产。 我已经添加 USDC 以便你可以在我的钱包中看到。

<img class = "bodyImage" src = "/polygon/matic-wallet-add-token.png" alt = "Adding Token to Matic Wallet" />

3). 在左侧单击“Matic Wallet ”和“存款”。

<img class = "bodyImage" src = "/polygon/matic-wallet-deposit.png" alt = "Depositing Token to Matic Wallet" />

4). 单击“继续保存”并在此选择您的资产：

<img class = "bodyImage" src = "/polygon/matic-wallet-deposit2.png" alt = "Depositing Token to Matic Wallet" />

5). 输入您想要桥接的数量，并点击大蓝色按钮。

<img class = "bodyImage" src = "/polygon/matic-wallet-deposit3.png" alt = "Depositing Token to Matic Wallet" />

是就它！ 只需确认Metamask中的交易并完成了。 It can take up to 10 minutes for the tokens to arrive in your Polygon address. You should get 0.1 MATIC airdropped if you transfer a stablecoin and open [Quickswap](https://quickswap.exchange/), the largest DEX on Polygon. (That’s enough for 1000s of transactions, Polygon is aavesome!)

如果您需要任何帮助，您可以加入 Aavegotchi [Discord](https://discord.com/invite/rttCTkZ) 并询问其他社区成员。

## Bridging assets back to Ethereum Mainnet

What about bridging our assets back to Ethereum Mainnet? Is there a way to do it?

Yes, there is a way to transfer your assets back to Ethereum Mainnet!

Head over to the [Aavegotchi Bridge](https://aavegotchi.com/bridge) again.

<img class = "bodyImage" src = "/polygon/bridge-to-matic.png" alt = "Aavegotchi Bridge" />

At the right hand side of the screen, there is an image of a token as well as a box where you can input an amount in. Click on the image of the token and a display of available tokens will appear. Select the [maToken](/matokens) which you want to bridge back to Ethereum Mainnet. After that, key in the desired amount in the box and hit the "Transfer to Ethereum" button.

Withdrawing from Polygon takes approximately 30 minutes. Sometimes, it might take longer. After the withdrawal is complete, you still need to click the "CLAIM ON ETHEREUM" button to get your tokens back on Ethereum Mainnet.

Currently, the Aavegotchi Bridge supports the transfer of maTokens from Polygon to Ethereum Mainnet. In time to come, it will support Aavegotchis (ERC-721) and Wearables (ERC-1155) as well.