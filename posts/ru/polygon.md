---
author: Moon
date: '2020-04-23T07:00:00.000Z'
title: 'Polygon'
description: 'Руководство по Polygon'
contributors:
  - "moon14888"
---

Привет Френ! Выходит ты слышал про миграцию в Polygon (ранее Matic Network), но ни черта не знаешь, что это вообще такое? Не переживай, мы проведем тебя за руку шаг за шагом!

Если коротко, Polygon - это решение масштабируемости второго уровня для публичных блокчейнов, к примеру, Ethereum. Эта децентрализованная платформа обеспечивает быстрые и сверх дешевые транзакции с финалити в основной цепи. Если у вас есть желание разобраться в деталях, как это работает, читайте данную [статью](https://medium.com/matic-network/what-is-matic-network-466a2c493ae1).

Мы говорим пока транзакциям по $100 на Uniswap и приветствуем (почти) бесплатные взаимодействия с контрактом!

<div class="contentsBox">

Содержание:

<ol>
<li><a href=#why-polygon->Почему Polygon?</a></li>
<li><a href=#adding-polygon-to-your-metamask>Добавляем Polygon в Metamask</a></li>
<li><a href=#bridging-assets-to-polygon>Перемещаем средства в Polygon</a></li>
<li><a href=#bridging-assets-back-to-ethereum-mainnet>Перемещаем средства обратно в главную сеть Ethereum</a></li>
</ol>

</div>

## Почему Polygon?

Вы наверняка знаете, а впрочем может и нет, мейннет Aavegotchi был запланирован на 4 января 2021 года. В этот день биткойн скакнул на 40%, что заставило арбитраж ботов сойти с ума. Цены на газ улетели к отметке 400 gwei, а стоимость транзакций стала безумно дорогой. Чтобы представить это в в ретроспективе: покупка и открытие [портала](/portals) вместе с призывом Готчи обошлась бы нам как минимум в $300.

Стало очевидно - запуск в главной сети Ethereum невозможен. Поскольку Polygon уже работал с различными NFT проектами (например, Opensea), то выбор был сравнительно легким. Сообщество разделяло наши настроения и проголосовало за запуск в Polygon 76% голосов.

For an extended discussion on this topic, see this medium [post](https://aavegotchi.medium.com/why-aavegotchi-chose-polygon-356238977fb2).

## Добавляем Polygon в Metamask

Let’s get started with the fun stuff! To use Polygon, you first need to add it to your Metamask wallet.

1). Open the extension and click the “Ethereum Mainnet” button on the top.

<img class = "bodyImage" src = "/polygon/metamask.png" alt = "Metamask" />

2). Выберите “Custom RPC”.

<img class = "bodyImage" src = "/polygon/metamask-custom-RPC.png" alt = "Метамаск пользовательский RPC" />

3). Введите следующие настройки:

Network Name: Matic Mainnet

New RPC URL: https://rpc-mainnet.maticvigil.com/

Chain ID: 137

Currency Symbol: MATIC

Block Explorer URL (optional): https://explorer.matic.network/

Как только заполните все поля, кликайте “Save”.

4). There’s no step four, you’re already done! You can now switch between Ethereum Mainnet and Polygon by clicking the button from step 1.

## Перемещаем средства в Polygon
Alright you got Metamask set up and are ready to dive right in. But before you need some assets on Polygon. We’re going to use the [Proof of Stake (PoS)](/glossary#proof-of-stake) Polygon Bridge to transfer our funds from Ethereum Mainnet to Polygon. If you only want to transfer your GHST, ignore all of the following steps and use our simple Aavegotchi Bridge [here](https://aavegotchi.com/bridge).

So for everyone who wants to transfer different assets, such as ETH or USDC, here’s how you do it:

1). Head over to [https://wallet.matic.network/](https://wallet.matic.network/) and login with Metamask. Make sure you’re in the “Wallet” tab, it should look something like this:

<img class = "bodyImage" src = "/polygon/matic-wallet.png" alt = "Matic Wallet" />

2). **DO NOT** click the “Switch to Plasma” button. That’s the wrong bridge and needs 7 days to withdraw. Instead add the asset you want to transfer on the right side. I have already added USDC so you can see it in my wallet.

<img class = "bodyImage" src = "/polygon/matic-wallet-add-token.png" alt = "Adding Token to Matic Wallet" />

3). On the left side click “Matic Wallet” and “Deposit”.

<img class = "bodyImage" src = "/polygon/matic-wallet-deposit.png" alt = "Depositing Token to Matic Wallet" />

4). Click “Continue to Deposit” and select your asset here:

<img class = "bodyImage" src = "/polygon/matic-wallet-deposit2.png" alt = "Depositing Token to Matic Wallet" />

5). Enter how much of it you’d like to bridge and click the big blue button.

<img class = "bodyImage" src = "/polygon/matic-wallet-deposit3.png" alt = "Depositing Token to Matic Wallet" />

Aaaaaand that’s it! Just confirm the transaction in Metamask and you’re done. It can take up to 10 minutes for the tokens to arrive in your Polygon address. You should get 0.1 MATIC airdropped if you transfer a stablecoin and open [Quickswap](https://quickswap.exchange/), the largest DEX on Polygon. (That’s enough for 1000s of transactions, Polygon is aavesome!)

If you need help with anything you can join the Aavegotchi [Discord](https://discord.com/invite/rttCTkZ) and ask a fellow community member.

## Перемещаем средства обратно в главную сеть Ethereum

What about bridging our assets back to Ethereum Mainnet? Is there a way to do it?

Yes, there is a way to transfer your assets back to Ethereum Mainnet!

Head over to the [Aavegotchi Bridge](https://aavegotchi.com/bridge) again.

<img class = "bodyImage" src = "/polygon/bridge-to-matic.png" alt = "Aavegotchi Bridge" />

At the right hand side of the screen, there is an image of a token as well as a box where you can input an amount in. Click on the image of the token and a display of available tokens will appear. Select the [maToken](/matokens) which you want to bridge back to Ethereum Mainnet. After that, key in the desired amount in the box and hit the "Transfer to Ethereum" button.

Withdrawing from Polygon takes approximately 30 minutes. Sometimes, it might take longer. After the withdrawal is complete, you still need to click the "CLAIM ON ETHEREUM" button to get your tokens back on Ethereum Mainnet.

Currently, the Aavegotchi Bridge supports the transfer of maTokens from Polygon to Ethereum Mainnet. In time to come, it will support Aavegotchis (ERC-721) and Wearables (ERC-1155) as well.