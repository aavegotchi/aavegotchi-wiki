---
author: appellants
date: '2020-04-23T07:00:00.000Z'
title: 'Порталы'
description: 'Все о порталах в Аавеготчи'
contributors:
  - "appellants"
  - "unintelligent-nerd"
image: "portals/portal.gif"
---

<div class="headerImageContainer">
<img class="headerImage" src="/portals/portal.gif">
<p class="headerImageText">Порталы в игре Аавеготчи</p>
</div>

Как призвать Готчи и перенести его из Nether realm на свой экран? Через портал, конечно же!

Всмотритесь в его бесконечно-фиолетовые глубины и увидите, что скрыто за ними — Вы найдете друга. А точнее 10 друзей.

Так что надевайте свою Шляпу Волшебника — время узнать больше о Порталах и процессе призыва Готчи. 

<div class="contentsBox">

**Содержание**

<ol>
<li><a href=#buying-a-portal>Покупка портала.</a></li>
<li><a href=#opening-your-portal>Открытие портала.</a></li>
<li><a href=#claiming-an-aavegotchi>Вызов Готчи.</a></li>
<li><a href=#interacting-with-your-aavegotchi>Передача Готчи.</a></li>
<li><a href=#transferring-your-aavegotchi>Transferring your Aavegotchi</a></li>
</ol>

</div>

## Покупка портала

Перед тем, как Вы сможете вырастить своего пиксельного малыша-призрака, Вы должны будете призвать его через Портал. Вы можете приобрести их как в [официальном приложении](https://aavegotchi.com/buy-portal), так и на сторонних площадках, таких как [OpenSea](https://opensea.io/) (пока недоступно, есть beta версия площадки OpenSea в сети Polygon).

Если Вы покупаете Портал в официальном приложении, то каждый портал обойдется вам примерно в 100 GHST. Эти устройства (порталы) будут выпущены в рамках поколения (“Haunts”) (тоже самое, что, например Edition — издание). Первое поколение Готчи появится из 10 000 распроданных порталов. После этого [AavegotchiDAO](/dao) продолжит голосовать по вопросам появления дальнейших поколений. Например, цена портала или количество могут измениться в будущем, как результат решения и голосования ДАО.


## Открытие портала

Аатлично! Вы купили свой портал. Именно здесь вступает в игру Ритуал Призыва. Это механизм, который позволит Вам призвать своего Готчи.

Так что после покупки портала следующий логичный шаг — его открытие. Открытие портала происходит в сети [Полигон](/glossary#polygon) (ранее Matic), где геймерам необходимо [так же, как в сети Ethereum] подписывать транзакции. После того, как транзакция [открытия портала] подписана, [Chainlink VRF](/glossary#chainlink-vrf) (генератор случайных чисел) делает свои закулисные делишки.  Когда функция выполнена, порталу будет присвоен случайный номер (но не порядковый номер!), гарантирующий, что черты каждого аваготчи будут доказуемо случайны!

Ниже вы найдете схему всего процесса:

<img class = "bodyImage" src = "/portals/opening-an-aavegotchi-portal.png" alt = "Process of opening an Aavegotchi Portal" />

После открытия портала Вы увидите 10 разных призраков, одного из которых Вы сможете призвать из Подземного Царства! You will have to choose 1 out of the 10 of them to summon. The rest, unfortunately, will vanish.

These Aavegotchis all bear different randomly generated traits. As you toggle through your options, you can view these traits and your Aavegotchi’s [Base Rarity Score](/rarity-farming#base-rarity-score). This is a rarity score that is initially given to your Aavegotchi, based on the initial traits it has upon summoning. This rarity score can later be modified through a range of activities, such as equipping your Aavegotchi with wearables.

You can check out the trait range and rarity probabilities in this table here:

table_PortalTraitTable


More information on rarity farming can be found [here](/rarity-farming).


## Вызов Готчи.

To claim an Aavegotchi from the portal, you need to stake the required amount of Spirit Force ([aTokens](/atokens)) to the Portal. These aTokens can be acquired directly via [Aave](https://aave.com/) or DEXes like Uniswap.

In addition to their monetary value as dictated by scarcity and market forces, each Aavegotchi also has an intrinsic value. The aTokens you stake to it provide this intrinsic value.

**For more information on aTokens, see [aTokens](/atokens).**

Generally speaking, the minimum amount of Spirit Force (collateral) depends on the Base Rarity Score of the Aavegotchi you want to summon. The higher the score, the more collateral it requires.

The minimum amount of collateral required is 10 DAI worth, while the maximum is 1000 DAI worth of collateral.

The formula which is used to determine the amount of Spirit Force (collateral) needed is as follows:

```
if (rarityScore < 300) return 10;
        else if (rarityScore >= 300 && rarityScore < 450) return 10;
        else if (rarityScore >= 450 && rarityScore <= 525) return 25;
        else if (rarityScore >= 526 && rarityScore <= 580) return 100;
        else if (rarityScore >= 581) return 1000;
```

For example, if the Base Rarity Score is less than 300, you need to stake at least 10 DAI worth of the collateral to summon the Gotchi.

You can increase or decrease the Spirit Force (staked aToken amount) of your Aavegotchi later via the Aavegotchi Dapp UI.

To claim your Gotchi, you need to perform 2 transactions. First, you need to approve the smart contract to spend the aToken in your wallet. The subsequent transaction allows you to claim the Aavegotchi.

## Передача Готчи.

Once you have claimed your Gotchi, the next thing to do is to...........*drum rolls*..........play with your Aavegotchi!

Check out the [Aavegotchi Profile Page](/aavegotchi-profile) for how to do so!

## Transferring your Aavegotchi

Transferring an Aavegotchi to a new owner (when you trade it) also transfers the staked collateral behind it, as well as any items and wearables in the Aavegotchi's inventory. This happens when you trade your Aavegotchi on an online marketplace such as OpenSea.

If you wish to retrieve the staked collateral backing your Aavegotchi, you have two options:

1. **Reduce the amount of collateral** in your Aavegotchi (but not below it's minimum stake).

2. **Burn your Aavegotchi**, releasing it back to the Nether Realm and returning all of your collateral.

**Before placing your Aavegotchi for sale on secondary markets such as OpenSea, please "lock" your Aavegotchi via the Dapp UI, to help the buyer ensure all of the Aavegotchi's belongings will transfer with it.**




