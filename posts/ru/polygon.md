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

<img class = "bodyImage" src = "/polygon/metamask-custom-RPC.png" alt = "Метамаск пользовательский RPC" />

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

<img class = "bodyImage" src = "/polygon/matic-wallet.png" alt = "Кошелек Matic" />

2). **НЕ НАЖИМАЙТЕ** кнопки “Switch to Plasma”. Это неправильный мост и вам займет 7 дней для вывода средств. Вместо этого добавьте валюту, которую желаете транспортировать, в правую часть. Я уже добавил USDC, поэтому вы можете наблюдать их в моем кошельке.

<img class = "bodyImage" src = "/polygon/matic-wallet-add-token.png" alt = "Добавление токена в Matic Wallet" />

3). Слева нажимайте “Matic Wallet” и “Deposit”.

<img class = "bodyImage" src = "/polygon/matic-wallet-deposit.png" alt = "Депозит токена в Matic Wallet" />

4). Нажимайте “Continue to Deposit” и выбирайте вашу валюту:

<img class = "bodyImage" src = "/polygon/matic-wallet-deposit2.png" alt = "Депозит токена в Matic Wallet" />

5). Введите сумму для перевода через мост и кликайте большую голубую кнопку.

<img class = "bodyImage" src = "/polygon/matic-wallet-deposit3.png" alt = "Депозит токена в Matic Wallet" />

Ииииииииииииииии это всё! Подтвердите транзакцию в Metamask и все готово. Трансфер токенов на ваш Polygon адрес может занять до 10 минут. Вам должны бесплатно начислить 0,1 MATIC, если вы сделаете депозит в стейблкоинах и откроете [Quickswap](https://quickswap.exchange/), крупнейший DEX в Polygon. (Этого хватит на тысячи транзакций, Polygon потрясный!)

Если вам нужна помощь с чем-либо, присоединяйтесь к сообществу Aavegotchi в [Discord](https://discord.com/invite/rttCTkZ) и спрашивайте там.

## Перемещаем средства обратно в главную сеть Ethereum

А что насчет обратного моста средств в Ethereum мейннет? Есть ли такая возможность?

Да, есть путь трансфера ваших средств назад в сеть Ethereum!

Опять идем на [мост Aavegotchi](https://aavegotchi.com/bridge).

<img class = "bodyImage" src = "/polygon/bridge-to-matic.png" alt = "Мост Aavegotchi" />

По правую руку на экране в правом окошке есть значок токена и поле для ввода количества. Нажимайте на значок и появится список доступных к переводу токенов. Выберите [маТокен](/matokens) для перевода через мост назад в главную сеть Ethereum. После укажите сумму перевода и нажимайте кнопку “Transfer to Ethereum". После укажите сумму перевода и нажимайте кнопку “Transfer to Ethereum".

Вывод с Polygon идет около 30 минут. Иногда бывает и дольше. После завершения вывода и получения ваших токенов в мейннете Ethereum вам обязательно надо нажать кнопку "CLAIM ON ETHEREUM".

На сегодня мост Aavegotchi поддерживает переводы маТокенов из Polygon в Ethereum. В будущем мост будет поддерживать трансферы готчи (ERC-721) и предметы одежды (ERC-1155).