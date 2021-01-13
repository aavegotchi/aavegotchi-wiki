---
author: Coder Dan
date: '2020-04-23T07:00:00.000Z'
title: 'AavegotchiDAO'
description: 'All about AavegotchiDAO'
image: "icons/dao.svg"
contributors:
  - "vanilladelphia"
  - "cinnabarhorse"
---

<div class="headerImageContainer">
<img class="headerImage" src="/dao/dao.png">
<p class="headerImageText">AavegotchiDAO徽章</p>
</div>

[DAO](glossary#dao) 是一种分散的治理形式。 它允许令牌持有者投票，以便塑造组织的决策方式。

Aavegotchi遵循“逐步分散化”的流程，遵循了诸如Descompound和Synthetix等成功的DeFi协议的脚步，从创始团队开始，Pixelcraft Studios组织了DAO管理的代币分发活动（DAICO），并最终对Aavegotchi进行了治理 ，包括所有游戏机制，智能合约和资金，均由AavegotchiDAO赞助，但必须遵守现行法规环境。 这将分三个阶段完成。

<div class="contentsBox">

**内容**

<ol>
<li><a href=#genesis>起源</a></li>
<li><a href=#metamorphosis>变形</a></li>
<li><a href=#oasis>绿洲</a></li>
<li><a href=#participating-in-governance>参与治理</a></li>
</ol>

</div>

## 起源

*查看* [DAICO](https://wiki.aavegotchi.com/curve/#aavegotchi-daico).

The first iteration of AavegotchiDAO was launched in tandem with the GHST token distribution event. GHST token holders had the power to vote on increasing / maintaining the funds distributed by the tap mechanism of the [token bonding curve (TBC)](/curve) reserve to Pixelcraft Studios (the team behind Aavegotchi) to support development. This initial proposal of raising the tap from 50,000 DAI to 100,000 DAI per month passed with 99% approval on 18 October 2020. When the time comes to migrate to AavegotchiDAO Metamorphosis, token holders will also vote to perform the migration.

Token holders will not receive rewards in GHST for active participation in this iteration of AavegotchiDAO.

## 变形

Metamorphosis is the second iteration of AavegotchiDAO, and is charged with managing simple game mechanics of Aavegotchi, such as the total supply of Aavegotchis, adding new collaterals, deciding on their functions, and adding new wearables created by the community. When the time comes to migrate to AavegotchiDAO Oasis, the AavegotchiDAO will again vote to perform the migration.

A full list of actions available to perform by the AavegotchiDAO in this phase is available in the [Governance](https://docs.aavegotchi.com/overview/governance) section of the Aavegotchi smart contract documentation.

Token holders will receive rewards in the form of GHST for active participation in this iteration of AavegotchiDAO.

## 绿洲

Although AavegotchiDAO Oasis is the final iteration of AavegotchiDAO’s evolution, it is only the beginning of the realization of a DAO-governed game. All decisions related to Aavegotchi game mechanics, REALM mechanics, ecosystem spending, and even smart contract upgrades will be voted on by the AavegotchiDAO.

Token holders will receive rewards in GHST for active participation in this iteration of AavegotchiDAO.

## 参与治理
I'm psyched up! So how do I participate in the AavegotchiDAO? Fren, we got you covered! The [Aavegotchi Docs](https://docs.aavegotchi.com/overview/governance) details the list of DAO functions that members can call/use in order to implement changes that have been voted in. For example, let's say that asUSD has been voted in as a [collateral type](/posts/atokens). AavegotchiDAO could implement the change by using the `addCollateralTypes()` function and specifying asUSD within the function.

More details will be fleshed out once the game releases!