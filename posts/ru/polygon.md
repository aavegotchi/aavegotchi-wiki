---
author: Moon
date: '2020-04-23T07:00:00.000Z'
title: 'Polygon'
description: 'Руководство по Polygon'
contributors:
  - "moon14888"
---

Привет Френ! Выходит ты слышал про миграцию в Polygon (ранее Matic Network), но ни черта не знаешь, что это вообще такое? Не переживай, мы проведем тебя за руку шаг за шагом!

Если коротко, Polygon — это решение масштабируемости второго уровня для публичных блокчейнов, к примеру, Ethereum. Эта децентрализованная платформа обеспечивает быстрые и сверх дешевые транзакции с финалити в основной цепи. Если у вас есть желание разобраться в деталях, как это работает, читайте данную [статью](https://medium.com/matic-network/what-is-matic-network-466a2c493ae1).

Так что скажите “прощай” транзакциям на сотню долларов в Uniswap и получите возможность работать без лишних комиссий.

Переход на Полигон открыл новые возможности для игры Аавеготчи. [Ник Мадж](/team#nick-mudge) был абсолютно прав, предложив эту идею. Геймеры уже [сэкономили более $14,4 млн на газе](https://twitter.com/mudgen/status/1372245486535639040).

<div class="contentsBox">

Содержание:

<ol>
<li><a href=#why-polygon->Почему Polygon?</a></li>
<li><a href=#adding-polygon-to-your-metamask>Добавляем Polygon в Метамаск.</a></li>
<li><a href=#bridging-assets-to-polygon>Перемещаем средства в Polygon.</a></li>
<li><a href=#bridging-assets-back-to-ethereum-mainnet>Перемещаем средства обратно в главную сеть Ethereum.</a></li>
</ol>

</div>

## Почему Polygon?

Знаете ли вы, что игра Аавеготчи в основной сети Ethereum должна была запуститься 04.01.2021. Однако в этот день цена биткоина подскочила почти на 40%, и арбитражные боты сошли с ума. Плата за газ подскочила почти до 400 gwei, и комиссия за проведение транзакции стала нереально высокой. Например, купить 1 портал, открыть и вызвать Готчи обошлось бы в 300 долларов, как минимум.

В связи с этим стало ясно, что запускать игру в основной сети Ethereum — плохая идея. В качестве решения масштабирования второго уровня был выбран Полигон, который к тому моменту уже был известен и имел множество приверженцев. Сеть активно работала с разными NFT-проектами, как OpenSea. Поэтому разработчики предложили перенести запуск на Полигон. Сообщество путем голосования поддержало эту идею. “За” ответило 76%.

Подробней об этом можно почитать [тут](https://aavegotchi.medium.com/why-aavegotchi-chose-polygon-356238977fb2).

## Добавляем Polygon в Metamask

Итак, как начать работать с Полигон? По мнению большинства игроков, наиболее удобным кошельком для игры является Метамаск. Рассмотрим, как его использовать для работы с Полигоном.

1). Откройте расширение и нажмите кнопку основной сети “Ethereum Mainnet”, расположенную вверху.

<img class = "bodyImage" src = "/polygon/metamask.png" alt = "Metamask" />

2). Выберите “Пользовательский RPC”.

<img class = "bodyImage" src = "/polygon/metamask-custom-RPC.png" alt = "Метамаск пользовательский RPC" />

3). Введите такие настройки для корректной работы Мумбаи:

Имя сети: Matic Mainnet.

Новый URL-адрес RPC: https://rpc-mainnet.maticvigil.com/.

ID цепочки: 137.

Символ валюты: MATIC.

Блокировать Explorer URL (необязательно): https://explorer.matic.network/.

Нажимайте «Сохранить», как только заполните все поля.

4).  И все! Вы уже в тестовой сети Мумбаи! Далее можно переключаться в Метамаске между Полигоном и основной сетью Ethereum, нажимая соответствующую кнопку.

## Перемещаем средства в Polygon
Что делать после настройки Метамаска? Нужно иметь средства на счету в Polygon. Используйте мост Polygon ([PoS](/glossary#proof-of-stake)) для переброски токенов из основной сети Ethereum. If you only want to transfer your GHST, ignore all of the following steps and use our simple Aavegotchi Bridge [here](https://aavegotchi.com/bridge).

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