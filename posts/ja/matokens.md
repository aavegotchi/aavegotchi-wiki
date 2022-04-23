---
author: Unintelligent Nerd
date: '2020-04-23T07:00:00.000Z'
title: 'maToken'
description: 'AavegotchiのmaTokenのすべて'
contributors:
  - "unintelligent-nerd"
---

<div class="headerImageContainer">
<img class="headerImage" src="/matokens/matoken.png">
<p class="headerImageText">maToken！</p>
</div>

What do you get when you take those interest-bearing aTokens and put them on [Polygon](/glossary#polygon)? Why you get maTokens, of course!

There are multiple ways to get your hands on some maTokens. In this page, we will introduce the various ways.

<div class="contentsBox">

**目次**

<ol>
<li><a href=#staking-matokens-into-aavegotchis>Aavegotchi達にmaTokenをステーキング</a></li>
<li><a href=#problems-while-staking-spirit-force>スピリットフォースをステーキングした際に起きる問題点</a></li>
<li><a href=#learn-more>もっと詳しく</a></li>
</ol>

</div>

## Aavegotchi達にmaTokenをステーキング

Okay, I've gotten myself some maTokens. What now?

Good work fren.

The next step is to purchase a [portal](/portals) using [GHST](/ghst). Portals could be purchased in the Aavegotchi DApp (link will be provided at launch) or on the [Secondary Markets](/marketplace) such as Opensea. Once you've gotten your hands on a precious portal, it is time to begin the summoning process. Upon opening the portal, you will be presented with 10 Gotchis, each with a randomized required maToken/collateral. Here's where the maToken you have acquired comes in. Stake it in the Gotchi that has the same collateral type and bring your fren to life!

For a more detailed explanation of the portal-opening process, check out our [portals](/portals) page.

## スピリットフォースをステーキングした際に起きる問題点

There are 2 situations where users are not allowed to stake their collateral into a Gotchi:

* You need to make an approval transaction before a smart contract is allowed to use your ERC-20 token. Most likely, the user has manually set the allowance limit too low. To rectify this suation, increase the allowance limit
* The user is using the collateral on Aave for borrowing and staking it would lower their Health Factor and possibly cause their position to be liquidated. To rectify this situation, either reduce/close your borrowed position or top up with the required collateral

## Learn more

* [Twitter thread](https://twitter.com/mudgen/status/1352399348219445250) by [Nick Mudge](/team#nick-mudge) on his successful deployment of aTokens on Polygon as maTokens
* Nick Mudge dives into the [technicalities of maTokens](https://aavegotchi.substack.com/p/aaves-interest-bearing-atokens-on)
