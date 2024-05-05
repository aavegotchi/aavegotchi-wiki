---
author: appellants
date: '2020-04-23T07:00:00.000Z'
title: '포털'
description: '아베고치 포탈에 대한 모든 것'
contributors:
  - "appellants"
  - "unintelligent-nerd"
image: "portals/portal.gif"
---

<div class="headerImageContainer">
<img class="headerImage" src="/portals/portal.gif">
<p class="headerImageText">아베고치 포탈(Portal)</p>
</div>

어떻게 아베고치를 저승에서 소환시켜 여러분의 스크린으로 데려올 수 있을까요? 포탈을 통해서라면, 문제 없습니다!

보라색의 심연을 자세히 들여다보고 그 너머에 무엇이 숨어있는지를 보세요! 아마 친구를 찾을 수 있을 것입니다! 더 정확히는, 10명의 친구들이 숨어있습니다.

이제 여러분의 마법사 모자를 꺼내서 쓰세요. 포탈과 아베고치 소환 과정에 대해 더 많이 배워볼 시간입니다. 

<div class="contentsBox">

**목차**

<ol>
<li><a href=#buying-a-portal>포탈 구매</a></li>
<li><a href=#opening-your-portal>포탈 개방</a></li>
<li><a href=#claiming-an-aavegotchi>아베고치 신청</a></li>
<li><a href=#interacting-with-your-aavegotchi>Interacting with your Aavegotchi</a></li>
<li><a href=#transferring-your-aavegotchi>Transferring your Aavegotchi</a></li>
</ol>

</div>

## 포탈 구매

Before you can raise your pixelated ghost baby, you’ll need to summon it via a Portal.

You can acquire portals in one of the following ways:

* In an [Aauction](/aauction)
* In a [Drop Ticket Raffle](/tickets)
* At the [Baazaar](/baazaar)

Aauctions and Raffles are time-limited events. If you miss out on them, the only other way to purchase portals is through the Baazaar, our secondary marketplace.

Portals are released in ["Haunts" (editions)](/haunt). The first haunt will offer 10,000 Portals up for grabs. After this, the [AavegotchiDAO](/dao) will continue to vote on decisions relating to separate haunts. For instance, portal prices and quantities may change in the future, as a result of decisions and voting from the DAO.


## 포탈 개방

Sweet! You're about to purchase your portal. This is where the ~ Portal Summoning Ritual ~ comes into play. This is the mechanism through which you will be able to summon your Aavegotchi.

After purchasing the portal, the very next step is to open it. Opening the portal occurs on [Polygon](/glossary#polygon) where gamers have to sign a transaction. After the transaction is signed, the [Chainlink Verifiable Randomness Function (VRF)](/glossary#chainlink-vrf) is called behind-the-scenes. When the function is executed, the portal will be assigned a random number, ensuring that the Aavegotchi's traits will be provably random.

Here's a handy flow chart that summarizes the process:

<img class = "bodyImage" src = "/portals/opening-an-aavegotchi-portal.png" alt = "Process of opening an Aavegotchi Portal" />

After opening a portal, you will see 10 different Aavegotchis for you to choose from, to call forth from the Nether realm. You will have to choose 1 out of the 10 of them to summon. The rest, unfortunately, will vanish.

These Aavegotchis all bear different randomly generated traits. As you toggle through your options, you can view these traits and your Aavegotchi’s [Base Rarity Score](/rarity-farming#base-rarity-score). This is a rarity score that is initially given to your Aavegotchi, based on the initial traits it has upon summoning. This rarity score can later be modified through a range of activities, such as equipping your Aavegotchi with wearables.

You can check out the trait range and rarity probabilities in this table here:

table_PortalTraitTable


More information on rarity farming can be found [here](/rarity-farming).


## 아베고치 신청하기

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

희귀도 점수 = A, 스테이킹해야하는 Spirit Force = B라고 할 때,
A < 300 : B = 10DAI 가치
300 < = A < 450 : 10DAI 가치
450 < = A <= 525 : 25DAI 가치
526 < = A < 580 : 100DAI 가치
581 < = A : 1000DAI 가치
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

1. 아베고치에 스테이킹된 담보물을 감소시키는 것입니다.(하지만 이때 최소한의 양은 남겨두셔야 합니다.)

2. 아베고치를 소각시키는 것입니다. 아베고치를 저승으로 돌려보내고,  모든 담보물을 돌려받는 것입니다.

**Before placing your Aavegotchi for sale on secondary markets such as OpenSea, please "lock" your Aavegotchi via the Dapp UI, to help the buyer ensure all of the Aavegotchi's belongings will transfer with it.**