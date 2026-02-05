---
author: appellants
date: '2014-04-26T22:00:00.000Z'
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

Before you can raise your pixelated ghost baby, you’ll need to summon it via a Portal.

You can acquire portals in one of the following ways:

* In an [Aauction](/aauction)
* In a [Drop Ticket Raffle](/tickets)
* At the [Baazaar](/baazaar)

Aauctions and Raffles are time-limited events. If you miss out on them, the only other way to purchase portals is through the Baazaar, our secondary marketplace.

Portals are released in ["Haunts" (editions)](/haunt). The first haunt will offer 10,000 Portals up for grabs. After this, the [AavegotchiDAO](/dao) will continue to vote on decisions relating to separate haunts. For instance, portal prices and quantities may change in the future, as a result of decisions and voting from the DAO.


## Открытие портала

Sweet! You're about to purchase your portal. This is where the ~ Portal Summoning Ritual ~ comes into play. This is the mechanism through which you will be able to summon your Aavegotchi.

After purchasing the portal, the very next step is to open it. Opening the portal occurs on [Polygon](/glossary#polygon) where gamers have to sign a transaction. After the transaction is signed, the [Chainlink Verifiable Randomness Function (VRF)](/glossary#chainlink-vrf) is called behind-the-scenes. When the function is executed, the portal will be assigned a random number, ensuring that the Aavegotchi's traits will be provably random.

Here's a handy flow chart that summarizes the process:

<img class = "bodyImage" src = "/portals/opening-an-aavegotchi-portal.png" alt = "Process of opening an Aavegotchi Portal" />

After opening a portal, you will see 10 different Aavegotchis for you to choose from, to call forth from the Nether realm. You will have to choose 1 out of the 10 of them to summon. The rest, unfortunately, will vanish.

These Aavegotchis all bear different randomly generated traits. As you toggle through your options, you can view these traits and your Aavegotchi’s [Base Rarity Score](/rarity-farming#base-rarity-score). This is a rarity score that is initially given to your Aavegotchi, based on the initial traits it has upon summoning. This rarity score can later be modified through a range of activities, such as equipping your Aavegotchi with wearables.

You can check out the trait range and rarity probabilities in this table here:

table_PortalTraitTable


More information on rarity farming can be found [here](/rarity-farming).


## Вызов Готчи

To claim an Aavegotchi from the portal, you need to stake the required amount of [Spirit Force](/spirit-force) into the Portal. Spirit Force can be acquired directly through the [Aavegotchi UI](/spirit-force#buying-matokens-amtokens).

In addition to their monetary value as dictated by scarcity and market forces, each Aavegotchi also has an intrinsic value. The [maTokens/amTokens](/spirit-force#buying-matokens-amtokens) you stake to it provide this intrinsic value.

**For more information on Spirit Force, see [here](/spirit-force).**

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

You can increase or decrease the Spirit Force (staked maToken/amToken amount) of your Aavegotchi later via the Aavegotchi Dapp UI.

To claim your Gotchi, you need to perform 2 transactions. First, you need to approve the smart contract to spend the maToken/amToken in your wallet. The subsequent transaction allows you to claim the Aavegotchi.

## Взаимодействие с призраком в игре

Once you have claimed your Gotchi, the next thing to do is to...........*drum rolls*..........play with your Aavegotchi!

Check out the [Aavegotchi Profile Page](/aavegotchi-profile) for how to do so!

## Передача Готчи новому владельцу

Transferring an Aavegotchi to a new owner (when you trade it) also transfers the staked collateral behind it, as well as any items and wearables in the Aavegotchi's inventory. This happens when you trade your Aavegotchi on an online marketplace such as OpenSea.

If you wish to retrieve the staked collateral backing your Aavegotchi, you have two options:

1. **Уменьшить размер залога** (но не ниже необходимого минимума).

2. **Сжечь вашего Готчи**, отпустив его обратно в Подземный Мир и получив всю сумму залога.

**Before placing your Aavegotchi for sale on secondary markets such as OpenSea, please "lock" your Aavegotchi via the Dapp UI, to help the buyer ensure all of the Aavegotchi's belongings will transfer with it.**