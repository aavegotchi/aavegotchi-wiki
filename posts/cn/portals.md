---
author: appellants
date: '2020-04-23T07:00:00.000Z'
title: '传送门'
description: '关于Aavegotchi 传送门的一切！'
contributors:
  - "appellants"
  - "unintelligent-nerd"
image: "portals/portal.gif"
---

<div class="headerImageContainer">
<img class="headerImage" src="/portals/portal.gif">
<p class="headerImageText">Aavegotchi传送门</p>
</div>

你如何召唤Aavegotchi，并把它从冥界带到你的屏幕上呢？ 当然通过一个传送门！

向传送门紫色的深处窥视，看看下面潜伏着什么--你会发现一个朋友。 或者更确切地说，是10个朋友。

所以戴上你的巫师帽吧--是时候了解更多关于传送门和Aavegotchi召唤过程的信息了。 

<div class="contentsBox">

**内容**

<ol>
<li><a href=#buying-a-portal>购买一个传送门</a></li>
<li><a href=#opening-your-portal>打开您的传送门</a></li>
<li><a href=#claiming-an-aavegotchi>获取Aavegotchi</a></li>
<li><a href=#interacting-with-your-aavegotchi>Interacting with your Aavegotchi</a></li>
<li><a href=#transferring-your-aavegotchi>Transferring your Aavegotchi</a></li>
</ol>

</div>

## 购买一个传送门

Before you can raise your pixelated ghost baby, you’ll need to summon it via a Portal.

You can acquire portals in one of the following ways:

* In an [Aauction](/aauction)
* In a [Drop Ticket Raffle](/tickets)
* At the [Baazaar](/baazaar)

Aauctions and Raffles are time-limited events. If you miss out on them, the only other way to purchase portals is through the Baazaar, our secondary marketplace.

Portals are released in ["Haunts" (editions)](/haunt). The first haunt will offer 10,000 Portals up for grabs. After this, the [AavegotchiDAO](/dao) will continue to vote on decisions relating to separate haunts. For instance, portal prices and quantities may change in the future, as a result of decisions and voting from the DAO.


## 打开您的传送门

Sweet! You're about to purchase your portal. This is where the ~ Portal Summoning Ritual ~ comes into play. This is the mechanism through which you will be able to summon your Aavegotchi.

After purchasing the portal, the very next step is to open it. Opening the portal occurs on [Polygon](/glossary#polygon) where gamers have to sign a transaction. After the transaction is signed, the [Chainlink Verifiable Randomness Function (VRF)](/glossary#chainlink-vrf) is called behind-the-scenes. When the function is executed, the portal will be assigned a random number, ensuring that the Aavegotchi's traits will be provably random.

Here's a handy flow chart that summarizes the process:

<img class = "bodyImage" src = "/portals/opening-an-aavegotchi-portal.png" alt = "Process of opening an Aavegotchi Portal" />

After opening a portal, you will see 10 different Aavegotchis for you to choose from, to call forth from the Nether realm. You will have to choose 1 out of the 10 of them to summon. The rest, unfortunately, will vanish.

These Aavegotchis all bear different randomly generated traits. As you toggle through your options, you can view these traits and your Aavegotchi’s [Base Rarity Score](/rarity-farming#base-rarity-score). This is a rarity score that is initially given to your Aavegotchi, based on the initial traits it has upon summoning. This rarity score can later be modified through a range of activities, such as equipping your Aavegotchi with wearables.

You can check out the trait range and rarity probabilities in this table here:

table_PortalTraitTable


More information on rarity farming can be found [here](/rarity-farming).


## 获取Aavegotchi

To claim an Aavegotchi from the portal, you need to stake the required amount of [Spirit Force](/spirit-force) into the Portal. Spirit Force can be acquired directly through the [Aavegotchi UI](/spirit-force#buying-matokens-amtokens).

In addition to their monetary value as dictated by scarcity and market forces, each Aavegotchi also has an intrinsic value. The [maTokens/amTokens](/spirit-force#buying-matokens-amtokens) you stake to it provide this intrinsic value.

**For more information on Spirit Force, see [here](/spirit-force).**

Generally speaking, the minimum amount of Spirit Force (collateral) depends on the Base Rarity Score of the Aavegotchi you want to summon. The higher the score, the more collateral it requires.

The minimum amount of collateral required is 10 DAI worth, while the maximum is 1000 DAI worth of collateral.

The formula which is used to determine the amount of Spirit Force (collateral) needed is as follows:

```
如果(rarityScore < 300) 返回 10;
        否则(rarityScore >= 300 && rarityScore < 450) 返回 10;
        否则(rarityScore >= 450 && rarityScore <= 525) 返回 25；
        否则(rarityScore >= 526 && rarityScore <= 580) 返回 100；
        其他 (rarityScore >= 581) 返回 1000；
```

For example, if the Base Rarity Score is less than 300, you need to stake at least 10 DAI worth of the collateral to summon the Gotchi.

You can increase or decrease the Spirit Force (staked maToken/amToken amount) of your Aavegotchi later via the Aavegotchi Dapp UI.

To claim your Gotchi, you need to perform 2 transactions. First, you need to approve the smart contract to spend the maToken/amToken in your wallet. The subsequent transaction allows you to claim the Aavegotchi.

## Interacting with your Aavegotchi

Once you have claimed your Gotchi, the next thing to do is to...........*drum rolls*..........play with your Aavegotchi!

Check out the [Aavegotchi Profile Page](/aavegotchi-profile) for how to do so!

## Transferring your Aavegotchi

Transferring an Aavegotchi to a new owner (when you trade it) also transfers the staked collateral behind it, as well as any items and wearables in the Aavegotchi's inventory. This happens when you trade your Aavegotchi on an online marketplace such as OpenSea.

If you wish to retrieve the staked collateral backing your Aavegotchi, you have two options:

1. **在你的 Aavegotchi 中减少担保品数量** (但不低于最低限度的临界值)。

2. **烧毁你的 Aavegotchi**, 释放它回到地狱领域并归还你所有的抵押品。

**Before placing your Aavegotchi for sale on secondary markets such as OpenSea, please "lock" your Aavegotchi via the Dapp UI, to help the buyer ensure all of the Aavegotchi's belongings will transfer with it.**