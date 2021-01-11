---
author: appellants
date: '2020-04-23T07:00:00.000Z'
title: '포털'
description: '아베고치 포털에 대한 모든 것'
contributors:
  - "appellants"
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
<li><a href=#claiming-an-aavegotchi>아베고치 소환</a></li>
<li><a href=#transferring-your-aavegotchi>여러분의 아베고치로 만들기</a></li>
</ol>

</div>

## 포탈 구매

여러분의 픽셀로된 아기 아베고치를 키우기 전에 포털을 통해 아베고치를 소환시켜야 합니다. 아베고치 공식 Dapp이나 OpenSea와 같은 외부 마켓플레이스에서 포털을 구매할 수 있습니다.

만약 아베고치 Dapp에서 구매를 하신다면 각각의 포털은 약 100GHST입니다. 또한 포탈들은 'Haunt'로 나올 수 있습니다. 첫번째 Haunt는 10,000개의 포탈들을 묶어서 제공할 것입니다. 이후에는 [아베고치 DAO](/dao)가 Haunt의 구성에 관한 결정을 위해 투표를 지속할 것입니다. 이를테면 DAO에서의 투표에 따른 결저으로 미래에는 포탈의 가격과 수량이 바뀔 수 있습니다.


## 포탈 개방

와우! 이제 곧 포탈을 장만할 생각이신가 보네요. 이제 여기서 ~ 포탈 소환 의식 ~ 이 시작됩니다! 의식을 거쳐 여러분의 아베고치를 소환할 수 있게 됩니다.

포탈을 구매한 다음 해야할 일은 포탈을 개방하는 것입니다. 포탈 개방은 게이머들이 거래에 서명을 해야하는 [Matic Network](/glossary#matic-network)에서 이루어집니다. After the transaction is signed, the [Chainlink Verifiable Randomness Function (VRF)](https://blog.chain.link/verifiable-random-functions-vrf-random-number-generation-rng-feature/) is called behind-the-scenes. When the function is executed, the portal will be assigned a random number, ensuring that the Aavegotchi's traits will be provably random.

Here's a handy flow chart that summarizes the process:

<img class = "bodyImage" src = "/portals/opening-an-aavegotchi-portal.png" alt = "Process of opening an Aavegotchi Portal" />

After opening a portal, you will see 10 different Aavegotchis for you to choose from, to call forth from the Nether realm. You will have to choose 1 out of the 10 of them to summon. The rest, unfortunately, will vanish.

These Aavegotchis all bear different randomly generated traits. As you toggle through your options, you can view these traits and your Aavegotchi’s [Base Rarity Score](/rarity-farming#base-rarity-score). This is a rarity score that is initially given to your Aavegotchi, based on the initial traits it has upon summoning. This rarity score can later be modified through a range of activities, such as equipping your Aavegotchi with wearables.

You can check out the trait range and rarity probabilities in this table here:

table_PortalTraitTable


More information on rarity farming can be found [here](/rarity-farming).


## 아베고치 소환

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


## 여러분의 아베고치로 만들기

Transferring an Aavegotchi to a new owner (when you trade it) also transfers the staked collateral behind it, as well as any items and wearables in the Aavegotchi's inventory. This happens when you trade your Aavegotchi on an online marketplace such as OpenSea.

If you wish to retrieve the staked collateral backing your Aavegotchi, you have two options:

1. **Reduce the amount of collateral** in your Aavegotchi (but not below it's minimum stake).

2. **Burn your Aavegotchi**, releasing it back to the Nether Realm and returning all of your collateral.

**Before placing your Aavegotchi for sale on secondary markets such as OpenSea, please "lock" your Aavegotchi via the Dapp UI, to help the buyer ensure all of the Aavegotchi's belongings will transfer with it.**




