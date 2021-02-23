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

## Добавляем Polygon в Metamask

Приступим к интересному! Для начала работы с Polygon вам потребуется добавить сеть в свой кошелек Metamask.

1). Откройте расширение и нажмите кнопку “Ethereum Mainnet” в самом верху.

<img class = "bodyImage" src = "/polygon/metamask.png" alt = "Metamask" />

2). Выберите “Custom RPC”.

<img class = "bodyImage" src = "/polygon/metamask-custom-RPC.png" alt = "Metamask Custom RPG" />

3). Введите следующие настройки:

Network Name: Matic Mainnet

New RPC URL: https://rpc-mainnet.maticvigil.com/

Chain ID: 137

Currency Symbol: MATIC

Block Explorer URL: https://explorer.matic.network/

Как только заполните все поля, кликайте “Save”.

4). А четвертого шага нет, вы уже подготовлены! Теперь можно переключаться между главной сетью Ethereum и Polygon нажимая кнопку из шага 1.

## Перемещаем средства в Polygon
Отлично, вы настроили Metamask и готовы окунуться в Polygon. Но сперва вам нужны немного средств там. Мы используем [Proof of Stake (PoS)](/glossary#proof-of-stake) мост от Polygon для транспортировки средств из Ethereum в Polygon. Если вы хотите переправить только ваши GHST не читайте шаги, описанные ниже, просто используйте наше простое решение мост Aavegotchi [здесь](https://aavegotchi.com/bridge).

Итак, для тех из вас, кто транспортирует различные ассеты, к примеру ETH или USDC, вот ваша инструкция:

1). Направляйтесь на [https://wallet.matic.network/](https://wallet.matic.network/) и логиньтесь через Metamask. Проверьте, что вы находитесь на вкладке “Wallet”, она выглядит примерно так:

<img class = "bodyImage" src = "/polygon/matic-wallet.png" alt = "Matic Wallet" />

2). **НЕ НАЖИМАЙТЕ** кнопки “Switch to Plasma”. Это неправильный мост и вам займет 7 дней для вывода средств. Вместо этого добавьте валюту, которую желаете транспортировать, в правую часть. Я уже добавил USDC, поэтому вы можете наблюдать их в моем кошельке.

<img class = "bodyImage" src = "/polygon/matic-wallet-add-token.png" alt = "Adding Token to Matic Wallet" />

3). Слева нажимайте “Matic Wallet” и “Deposit”.

<img class = "bodyImage" src = "/polygon/matic-wallet-deposit.png" alt = "Depositing Token to Matic Wallet" />

4). Нажимайте “Continue to Deposit” и выбирайте вашу валюту:

<img class = "bodyImage" src = "/polygon/matic-wallet-deposit2.png" alt = "Depositing Token to Matic Wallet" />

5). Введите сумму для перевода через мост и кликайте большую голубую кнопку.

<img class = "bodyImage" src = "/polygon/matic-wallet-deposit3.png" alt = "Depositing Token to Matic Wallet" />

Ииииииииииииииии это всё! Подтвердите транзакцию в Metamask и все готово. Трансфер токенов на ваш Polygon адрес может занять до 10 минут. You should get 0.1 MATIC airdropped if you transfer a stablecoin and open [Quickswap](https://quickswap.exchange/), the largest DEX on Polygon. (That’s enough for 1000s of transactions, Polygon is aavesome!)

If you need help with anything you can join the Aavegotchi [Discord](https://discord.com/invite/rttCTkZ) and ask a fellow community member.

## Перемещаем средства обратно в главную сеть Ethereum

What about bridging our assets back to Ethereum Mainnet? Is there a way to do it?

Yes, there is a way to transfer your assets back to Ethereum Mainnet!

Head over to the [Aavegotchi Bridge](https://aavegotchi.com/bridge) again.

<img class = "bodyImage" src = "/polygon/bridge-to-matic.png" alt = "Aavegotchi Bridge" />

At the right hand side of the screen, there is an image of a token as well as a box where you can input an amount in. Click on the image of the token and a display of available tokens will appear. Select the [maToken](/matokens) which you want to bridge back to Ethereum Mainnet. After that, key in the desired amount in the box and hit the "Transfer to Ethereum" button.

Withdrawing from Polygon takes approximately 30 minutes. Sometimes, it might take longer. After the withdrawal is complete, you still need to click the "CLAIM ON ETHEREUM" button to get your tokens back on Ethereum Mainnet.

Currently, the Aavegotchi Bridge supports the transfer of maTokens from Polygon to Ethereum Mainnet. In time to come, it will support Aavegotchis (ERC-721) and Wearables (ERC-1155) as well.