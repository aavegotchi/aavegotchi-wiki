---
author: appellants
date: '2020-04-23T07:00:00.000Z'
title: 'Portals'
description: 'All about Aavegotchi Portals'
contributors:
  - "appellants"
image: "portals/portal.gif"
---

<div class="headerImageContainer">
<img class="headerImage" src="/portals/portal.gif">
<p class="headerImageText">An Aavegotchi Portal</p>
</div>

How do you summon an Aavegotchi and bring it from the Nether realm to your screen? Through a Portal, of course!

Peer deep into its purple depths and see what lurks beneath – you’ll find a friend. Or more specifically, 10 friends.

So put on your wizard cap – it’s time to learn more about Portals and the Aavegotchi summoning process. 

<div class="contentsBox">

**Contents**

<ol>
<li><a href=#buying-a-portal>Buying a Portal</a></li>
<li><a href=#opening-your-portal>Opening your Portal</a></li>
<li><a href=#claiming-an-aavegotchi>Claiming an Aavegotchi</a></li>
<li><a href=#transferring-your-aavegotchi>Transferring your Aavegotchi</a></li>
</ol>

</div>

## Buying a Portal

Before you can raise your pixelated ghost baby, you’ll need to summon it via a Portal. You can acquire this either from the [official Aavegotchi Dapp](https://aavegotchi.com/buy-portal), or an external marketplace such as [OpenSea](https://opensea.io/).

If you’re purchasing it from the Aavegotchi Dapp, each portal will cost approximately 100 GHST. These devices will also be released in ‘Haunts’ (editions). The first haunt will offer 10,000 Portals up for grabs. After this, the [AavegotchiDAO](/dao) will continue to vote on decisions relating to separate haunts. For instance, portal prices and quantities may change in the future, as a result of decisions and voting from the DAO.


## Opening your Portal

Sweet! You're about to purchase your portal. This is where the ~ Portal Summoning Ritual ~ comes into play. This is the mechanism through which you will be able to summon your Aavegotchi.

Whenever a player purchases a Portal, it is automatically entered into a batch. This allows Portals to be grouped in a single batch, that can be executed with a single [Chainlink VRF](https://blog.chain.link/verifiable-random-functions-vrf-random-number-generation-rng-feature/) call. When this is executed, all Portals in that batch will be assigned a random number via the aforementioned VRF, ensuring that the Aavegotchi's traits will be provably random.

Why can't I open my Portal immediately? Why does it need to be placed alongside other Portals in a batch? Whenever the Chainlink VRF is called, the caller has to pay in LINK. Paying LINK for the opening of each individual Portal is expensive! It adds up if you are opening many Portals. Batching Portals together and calling the Chainlink VRF function once is more economical and allows for cost-savings.

If you're not ready to summon your Aavegotchi immediately, that's okay too (For instance, you might be thinking of selling your portal, or just holding on to it for a while). You can opt out of this automatic entry on the Buy Portal interface. However, when you decide you want to finally summon your Aavegotchi, you will have to execute a separate transaction to place your portal in the next batch, and then wait for the Summoning Ritual to happen.

Here's a handy flow chart that summarizes the process:


<img style = "border: 1px solid; margin-bottom: 15px" src = "/portals/portal-flow.png" alt = "Aavegotchi Portal" width = "750" />


When the Summoning Ritual is done, you will need to submit one more transaction to open your portal and claim your friend. Each portal contains 10 different Aavegotchis for you to choose from, to call forth from the Nether realm. You will have to choose 1 out of the 10 of them to summon. The rest, unfortunately, will vanish.

These Aavegotchis all bear different randomly generated traits. As you toggle through your options, you can view these traits and your Aavegotchi’s [Base Rarity Score](/rarity-farming#base-rarity-score). This is a rarity score that is initially given to your Aavegotchi, based on the initial traits it has upon summoning. This rarity score can later be modified through a range of activities, such as equipping your Aavegotchi with wearables.


You can check out the trait range and rarity probabilities in this table here:

table_PortalTraitTable


More information on rarity farming can be found [here](/rarity-farming).


## Claiming an Aavegotchi

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


## Transferring your Aavegotchi

Transferring an Aavegotchi to a new owner (when you trade it) also transfers the staked collateral behind it, as well as any items and wearables in the Aavegotchi's inventory. This happens when you trade your Aavegotchi on an online marketplace such as OpenSea.

If you wish to retrieve the staked collateral backing your Aavegotchi, you have two options:

1. **Reduce the amount of collateral** in your Aavegotchi (but not below it's minimum stake).

2. **Burn your Aavegotchi**, releasing it back to the Nether Realm and returning all of your collateral.

**Before placing your Aavegotchi for sale on secondary markets such as OpenSea, please "lock" your Aavegotchi via the Dapp UI, to help the buyer ensure all of the Aavegotchi's belongings will transfer with it.**




