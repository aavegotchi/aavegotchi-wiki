---
author: Unintelligent Nerd
date: '2014-04-26T22:00:00.000Z'
title: 'маТокены'
description: 'Все о маТокенах в Аавеготчи'
contributors:
  - "unintelligent-nerd"
---

<div class="headerImageContainer">
<img class="headerImage" src="/matokens/matoken.png">
<p class="headerImageText">маТокены!

</p>
</div>

На что можно рассчитывать, если взять и поместить их в [Полигон](/glossary#polygon)? Как получить эти токены?

Есть пара способов. Читайте на этой странице нашей ВИКИ.

<div class="contentsBox">

**Содержание**

<ol>
<li><a href=#using-the-aavegotchi-bridge>Использование моста Аавеготчи.</a></li>
<li><a href=#bridging-through-ascendex>Перенос через AscendEX.</a></li>
<li><a href=#fiat-to-polygon-using-transak>Перемещение в Polygon с помощью Transak.</a></li>
<li><a href=#staking-matokens-into-aavegotchis>Стейкинг маТокенов в Аавеготчи.</a></li>
<li><a href=#problems-while-staking-spirit-force>Problems while staking Spirit Force</a></li>
<li><a href=#learn-more>Больше информации</a></li>
</ol>

</div>

## Использование моста Аавеготчи

Данный метод работает, если у вас есть некоторое число аТокенов в основной сети Ethereum, а вы хотите переместить их в Полигон в качестве маТокенов. Из-за платы за газ в сети Ethereum данный метод может быть дорогостоящим и не всем подходит.

Перейдите к [мосту в Полигон](https://aavegotchi.com/bridge) на Aavegotchi DApp.

<img class = "bodyImage" src = "/matokens/bridge-to-matic.png" alt = "Aavegotchi Bridge to Matic" />

Нажмите на иконку токена (обведено красным в качестве примера на нижерасположенной картинке), и вы увидите раскрывающееся меню токенов. Выберите тот, что вам нужен.

<img class = "bodyImage" src = "/matokens/select-atoken-to-convert.png" alt = "Aavegotchi Bridge to Matic" />

Введите сумму токенов, которые планируете перевести в Полигон. На примере USDDC, как на скрине, нужно ввести цифры в поле, отмеченное красным.

<img class = "bodyImage" src = "/matokens/amount-to-transfer-to-matic.png" alt = "Aavegotchi Bridge to Matic" />

Подтвердите перевод нажатием кнопки "Approve Transfer". Дождитесь, пока транзакция будет добавлена в блок блокчейна Ethereum.

Как только транзакция будет подтверждена, нажмите кнопку переноса токенов в Полигон. Далее ожидайте, когда маТокены окажутся на кошельке.

Может понадобиться до 10 минут. Подождите, пока пройдет и эта транзакция.

Используя Метамаск, настройте интеграцию с Полигоном, опираясь на [это руководство](/polygon). Пошаговые инструкции помогут избежать ошибок.

## Перенос через AscendEX

Менее дорогостоящий способ обзавестись маТокенами состоит в том, чтобы перевести их с централизованных бирж (CEX) на AscendEX. Для этой цели подходит Binance или любая другая торговая площадка. С AscendEX токены можно свободно перемещать напрямую в Полигон. На нижерасположенной инфографике видно, как это можно сделать без особого труда!

<img class = "bodyImage" src = "/matokens/Using_AscendEX_and_play_Aavegotchi.jpg" alt = "Using AscendEX to play Aavegotchi" />

## Перемещение в Polygon с помощью Transak

Этот метод является третьим в нашем списке. Он позволяет перевести токены в Полигон.

Как это сделать, читайте в [этом материале](https://trasher.substack.com/p/buying-your-tokens-straight-into), подготовленном одним из членов нашего сообщества.

## Стейкинг маТокенов в Аавеготчи

Так, теперь у вас есть маТокены. Что делать?

Отличная работа, друг!

Покупай портал за [GHST](/ghst). Их можно купить в Aavegotchi DApp или на внешнем [вторичном рынке](/marketplace), например — на Opensea. После того, как вы обзавелись порталом, призовите Готчи. Выберите одного из десятка сгенерированных с наилучшими на ваш взгляд базовыми характеристиками. Далее вам понадобятся маТокены в качестве залога. Стейкайте их и играйте в Аавеготчи с удовольствием!

Подробнее о том, как открыть [портал](/portals), читайте на соответствующей странице нашей ВИКИ.

## Problems while staking Spirit Force

There are 2 situations where users are not allowed to stake their collateral into a Gotchi:

* You need to make an approval transaction before a smart contract is allowed to use your ERC-20 token. Most likely, the user has manually set the allowance limit too low. To rectify this suation, increase the allowance limit
* The user is using the collateral on Aave for borrowing and staking it would lower their Health Factor and possibly cause their position to be liquidated. To rectify this situation, either reduce/close your borrowed position or top up with the required collateral

## Learn more

* [Twitter thread](https://twitter.com/mudgen/status/1352399348219445250) by [Nick Mudge](/team#nick-mudge) on his successful deployment of aTokens on Polygon as maTokens
* Nick Mudge dives into the [technicalities of maTokens](https://aavegotchi.substack.com/p/aaves-interest-bearing-atokens-on)
