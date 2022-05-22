---
author: Nick Mudge
date: '2020-04-23'
title: 'Staking'
description: 'Stake du GHST, gagne des FRENS'
contributors:
  - "mudgen"
  - "unintelligent-nerd"
---


<div class="headerImageContainer">
<img class="headerImage" src="/staking/staking.png">
<p class="headerImageText">Stake du GHST, gagne des FRENS!</p>
</div>

Le Staking se réfère au processus de verrouillage de votre cryptomonnaie en échange de récompenses. Il n'y a pas de différence dans le projet d'Aavegotchi. Le jeton natif, [GHST](/posts/ghst), peut être staké dans le Contrat de Staking pour gagner des [FRENS](/posts/glossary#frens).

Les FRENS sont des jetons non transférable dans le contrat de staking d'Aavegotchi. Les FRENS ne peuvent pas être achetés. Ils sont destinés à récompenser les stakers pour leur contribution au projet d'Aavegotchi.

Les FRENS peuvent être convertis en billets de loterie :

* Les Billets de Raffle peuvent être entrés dans des [loterie d'équipement](/tickets) périodiques pour gagner des [Équipements](/wearables).

* Vous pouvez inscrire vos billets Drop dans les [loterie NFT](/tickets) pour gagner [des portails](/portals) et [des parcelles REALM](/metaverse).

Continuez la lecture pour apprendre à staker vso GHST.

<div class="contentsBox">

**Contenu**

<ol>
<li><a href=#purchasing-ghst>Acheter du GHST</a></li>
<li><a href=#how-to-stake>Comment Staker</a></li>
<li><a href=#staking-contract-addresses>Les adresses du contrat de staking</a></li>
<li><a href=#frens-taask-force>FRENS Taask Force</a></li>
<li><a href=#what-s-next->What's next?</a></li>
</ol>

</div>

## Acheter du GHST
Tout d'abord, vous devez mettre la main sur des jetons GHST afin de pouvoir les staker. Notre page de jetons [GHST](/posts/ghst) couvre les différentes façons afin de pouvoir vous en procurer.

## Comment Staker
Une fois que vous avez quelque jetons GHST, ils peuvent être staké sur la [page de staking](https://aavegotchi.com/stake-polygon)! Le Staking se déroule sur Polygon (anciennement Matic Network).

<img class = "bodyImage" src = "/staking/ghst-staking-ui.png" alt = "GHST Staking UI" />

There are six ways to stake:

1. GHST

2. wapGHST

3. GHST-QUICK

4. GHST-USDC

5. GHST-ETH

6. GHST-MATIC

**Important : Le Staking sur le réseau principal a été interrompue ! S'il vous plaît, réclamez et re-staker vos jetons sur Polygon.**

*Remarque : les jetons de GHST en prévente ne peuvent pas être staké tant qu'ils ne sont pas débloqués.*

### Staker vos jetons GHST directement

* Étape 1 : Transférez vos jetons GHST depuis le réseau principal Ethereum vers Polygon, une solution de couche 2 en utilisant le [Pont vers l'interface Polygon](https://aavegotchi.com/bridge).

* Étape 2 : Approuver le contrat pour utiliser vos jetons GHST.

* Étape 3 : Entrez le montant de GHST que vous souhaitez transférer à Polygon. Une fois votre transaction confirmé sur Ethereum, il faudra environ 7 à 8 minutes pour voir votre solde réfleté sur Polygon. Votre solde sera mis à jour automatiquement. Votre solde sera mis à jour automatiquement. Merci de patienter!

* Étape 4 : Configurez votre portefeuille Metamask pour inclure Polygon en suivant ce [Guide Polygon](/polygon).

* Étape 5 : Connectez votre Metamask à Polygon et allez à la [Page de staking de Polygon](https://aavegotchi.com/stake-polygon) sur la DApp Aavegotchi.

* Étape 6 : Approuver le contrat pour utiliser vos jetons GHST sur Polygon.

* Étape 7 : Entrez le montant de GHST que vous souhaitez déposer. Presto! Vous avez terminé !

*Pour chaque 1 GHST staké de cette façon, vous recevez 1 FRENS / jour.*

### Staking wapGHST

wapGHST stands for Wrapped Aave Polygon GHST. It provides the same FRENS rate as staking GHST directly, with the addition of lending the GHST token out for additional yield on the Aave platform.

Stakers do not need to visit Aave. You just need to approve your tokens and click on wrap GHST to wrap/unwrap your GHST into wapGHST.

*Note: The APY accrued will not appear in your balance of wapGHST. Rather, it will accrue to your GHST balance during the unwrapping process (when you return to vanilla GHST.)*

* Step 1: Visit [app.aavegotchi.com/stake-polygon](https://app.aavegotchi.com/stake-polygon)

* Étape 2 : Approuver le contrat pour utiliser vos jetons GHST.

* Step 3: Wrap your GHST into wapGHST.

### Staking GHST-QUICK and GHST-USDC

Staking GHST-QUICK and GHST-USDC follows the same steps.

* Step 1: Configure your Metamask wallet to include Polygon by following this [Polygon Guide](/polygon).

* Step 2: Use the [Aavegotchi Bridge](https://aavegotchi.com/bridge) to transfer GHST and/or other assets to Polygon. The [maTokens Guide](/matokens) will show you how this is done.

* Step 3: Become a liquidity provider on either or both the [GHST-QUICK](https://info.quickswap.exchange/pair/0x8b1fd78ad67c7da09b682c5392b65ca7caa101b9) and [GHST-USDC](https://info.quickswap.exchange/pair/0x096c5ccb33cfc5732bcd1f3195c13dbefc4c82f4) pools on [QuickSwap](https://quickswap.exchange). You will receive LP tokens in return for your liquidity provision. For people who are interested in staking in the GHST-QUICK pool, you can get some QUICK token from [QuickSwap](https://quickswap.exchange). The most liquid pairs are currently QUICK-UNI, QUICK-WETH, QUICK-USDC, and GHST-QUICK.

* Step 4: Take these LP tokens and stake them in the [Aavegotchi Staking Interface](https://aavegotchi.com/stake-polygon) to get stkGHST receipt tokens. For the GHST-QUICK and GHST-USDC pools, these stkGHST receipt tokens are named stkGHST-QUICK and stkGHST-USDC, respectively.

*For every 1 GHST-QUICK LP token staked in this way, you receive 83 FRENS / Day (the team tries to keep the rate around 30-40% higher than just staking GHST alone. This rate is periodically adjusted up/down without warning to maintain the correct proportion).*

*For every 1 GHST-USDC LP token staked in this way, you receive 74 million FRENS / Day (10% more than just staking GHST).*

Why is there a huge difference in the number of FRENS earned through LP staking compared to staking GHST tokens directly? Staking LP tokens have the risk of [impermanent loss](/glossary#impermanent-loss). You are compensated for the increased risk you take.

Why is the GHST-USDC pool yielding 74 million FRENS a day? Un déposant précoce dans la pool GHST-USDC sur QuickSwap a gâché le ratio entre les actifs. Ainsi, lorsque les déposants ajoutent de la réserve, ils reçoivent de minuscules quantités de jetons LP, comme 0.00006. See this [tweet](https://twitter.com/coderdannn/status/1362423402871447554) for the lulz.

### Staking GHST-WETH

* Step 1: Go to [quickswap.exchange](https://quickswap.exchange/) and choose > Pools > Add Liquidity.

* Step 2: Deposit GHST and ETH equally into the GHST-ETH liquidity pool.

* Step 3: In return, you receive GHST-WETH LP tokens.

* Step 4: Take those LP tokens and stake them at [aavegotchi.com/stake-polygon](https://aavegotchi.com/stake-polygon)

* Step 5: In return, you earn FRENS points and you get stkGHST-WETH tokens

For every 1 GHST-ETH LP token staked in this way, you receive 12.08 million FRENS / Day (20% more than just staking GHST).

### Staking GHST-MATIC

* Step 1: Go to [sushi.com](https://sushi.com/) and enter the app

* Step 2: Add liquidity to the GHST-MATIC pool. In turn, you will receive GHST-MATIC LP Tokens

* Step 3: Take the GHST-MATIC LP Tokens and deposit them at the [Aavegotchi Staking Interface](https://aavegotchi.com/stake-polygon). You will receive stkGHST-MATIC receipt tokens after staking your LP tokens.

### Staking Cheatsheets!

If you prefer something more visual, check out our Staking Cheatsheets!

* GHST Staking and GHST-QUICK/GHST-USDC Staking

<img class = "bodyImage" src = "/staking/GHST-to-Matic-Cheatsheet.png" alt = "GHST to Matic Cheatsheet" />

### Staking Returns Table

The table below summarizes the staking returns (in terms of FRENS) in percentage against the baseline of staking GHST directly.

Do note that the Pixelcraft team may update the FRENS amount from time to time to balance the system.

table_stakingReturns

## Les adresses du contrat de staking

The following table shows the various staking contract addresses on Polygon. The ghstStaking and stkGHSTQUICK contracts share the same contract address. Do check the contract address first before finalizing any transactions.

table_stakingContractAddresses

## FRENS Taask Force

From time to time, the FRENS emission rate does not automatically get updated when the price of the underlying tokens changes.

The [FRENS Taask Force](/frens-taask-force) has been setup to monitor and adjust the FRENS rates to keep it in check with the pre-determined rate.

## What's next?

So you've got some FRENS now eh? Head over to the [Tickets page](/tickets) to learn how to purchase tickets with FRENS and to participate in Raffles!