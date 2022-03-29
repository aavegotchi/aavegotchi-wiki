---
author: Unintelligent Nerd
date: '2020-04-23'
title: 'Bonding Curve'
description: 'La Courbe de liaison d''Aavegotchi'
image: "curve/bonding-curve.png"
contributors:
  - "unintelligent-nerd"
---


<div class="headerImageContainer">
<img class="headerImage" src="/curve/bonding-curve.png">
<p class="headerImageText">La Courbe de liaison (Bonding Curve)</p>
</div>

Une courbe de liaison de jetons (TBC, pour token bonding curve) est une courbe mathématique qui définit une relation entre le prix et l'approvisionnement de jetons.

Dans un TBC typique, le prix augmente à mesure que l'offre de jeton augmente, et diminue à mesure que l'offre diminue. Alors que la courbe de liaison d'Aavegotchi a été lancé depuis [Aragon](/glossary#aragon)
 [Decentralized Autonomous Initial Coin Offering (DAICO)](/glossary#daico), cet article traite également de DAICOs.</p>

<div class="contentsBox">

**Contenu**

<ol>
<li><a href=#mechanics>Mécaniques</a></li>
<li><a href=#aavegotchi-bonding-curve>La Courbe de liaison d'Aavegotchi</a></li>
<li><a href=#aavegotchi-daico>Aavegotchi DAICO</a></li>
<li><a href=#aavegotchi-token-supply-dynamics>Dynamique de l'offre du token d'Aavegotchi</a></li>
<li><a href=#arbitrage>Arbitrage</a></li>
<li><a href=#learn-more>En savoir plus</a></li>
</ol>

</div>

## Mécaniques



### Minting / Burning à la demande

Les courbes de liaison utilisent un algorithme de tarification pour servir de créateur de marché automatisé et fournir une source de liquidité toujours disponible. Les utilisateurs peuvent interagir avec une courbe de liaison en plaçant des jetons dans la pool de réserve de la courbe de liaison. Lorsqu'ils le font, la courbe de liaison mint les jetons correspondants pour l'utilisateur en se basant sur l'algorithme de prix. Les jetons nouvellement minted peuvent avoir une utilitée spécifique et même être échangés entre les utilisateurs, mais peut toujours être échangé à travers la courbe de liaison pour des jetons dans la pool de réserve de la courbe de liaison.

Lorsqu'un jeton est acheté via un TBC, chaque acheteur subséquent devra payer un prix légèrement plus élevé pour chaque jeton, générant ainsi un profit potentiel pour les premiers investisseurs. Au fur et à mesure que de plus en plus de gens découvrent le projet et l’achat se poursuit, la valeur de chaque jeton augmente progressivement tout au long de la courbe de liaison. Les premiers investisseurs qui trouvent des projets prometteurs tôt, achètent les jetons lier à la courbe de liaison pour ensuite les vendre plus tard pour gagner un profit à l'avenir.



### Formule

Les courbes de liaison se présentent sous différentes formes et tailles. Pour le projet Aavegotchi, l'équipe a adopté la formule de Bancor :

<img style = "border: 1px solid; margin-bottom: 15px" src = "/curve/reserve-ratio.png" alt = "token bonding curve" width = "750" />



### Explication de Formule

Le **Jeton de Réserve** fait référence au jeton que les utilisateurs stake dans la courbe de liaison.

Le **Jeton Continu** fait référence au jeton qui est reçu de la courbe de liaison lors du staking u du jeton de réserve.

Dans le cas d'Aavegotchi, la réserve et les jetons continus sont respectivement DAI et GHST. 

Le **Poids Connectant** (également connu sous le nom de Ratio de réserve ou Connecting Weight (CW)) représente un ratio fixe (entre 0 et 100%) entre la valeur totale du jeton continu (fourniture totale × prix unitaire) et la valeur de son solde de jeton de réserve.  This CW is constant by the Bancor Formula as both the Reserve Token balance and the Continuous Token’s total value (a.k.a. 'market cap') fluctuate with buys and sells.

Each purchase or sale of the Continuous Token (GHST) triggers an increase or decrease of Reserve Tokens (DAI). The price of the Continuous Token with respect to its Reserve Tokens must then continuously recalculate to maintain the configured Connecting Weight between them.

The Connecting Weight determines how sharply a Continuous Token's price needs to adjust in order to be maintained with every transaction, or in other words, its price sensitivity. 

A higher reserve ratio between the Reserve Token balance and the Continuous Token will result in lower price sensitivity, meaning that each buy and sell will have a less than proportionate effect on the Continuous Token’s price movement. Conversely, a lower ratio between the Reserve Token balance and the Continuous Token will result in higher price sensitivity, meaning that each buy and sell will have a more than proportionate effect on the Continuous Token’s price movement.

**Aavegotchi's Reserve Ratio is 33% frens!** This means you don't need to fear dem whales. They can't pump & dump GHST as the bonding curve is hardened against their huuugge transactions!

If you wanna see it in action, check out this interactive model of the bonding curve Coderdan made [here](https://observablehq.com/@cinnabarhorse/aavegotchi-bonding-curve).

TEH CURVE IS FOREVER!



## La Courbe de liaison d'Aavegotchi

The Aavegotchi Bonding Curve was created on 14 September 2020 via a bonding curve smart contract powered by [Aragon Fundraising](https://fundraising.aragon.black/). After the conclusion of a presale for 500,000 GHST, the bonding curve was immediately opened. The bonding curve is unlimited in size, has no time limit, and offers an opening price of 0.2 Dai per GHST. It has a connecting weight of 33%.

You will have to complete KYC in order to purchase straight from/sell to the curve. Compliance is important my dudes - we live in a society, and we also don't want the project to get rugged by the government. Purchases from the curve are made in DAI. The reverse also applies; you can sell your GHST back to the curve for DAI, but why would you wanna do that? :( :( :(

If you are unable to perform KYC because of your citizenship, don't worry! **You will still be able to interact with every other part of the Aavegotchi metaverse.** You simply have to purchase your GHST off a DEX such as Uniswap or Balancer, or a CEX like OKex instead. Learn how to get GHST tokens [here](/ghst#get-ghst).



## Aavegotchi DAICO

A Decentralized Autonomous Initial Coin Offering (DAICO) is a new fundraising method that seeks to incorporate the best features of a Decentralized Autonomous Organization (DAO) with those of an Initial Coin Offering (ICO) in order to create a structure that provides a higher level of effectiveness to the token sale fundraising model. A DAICO is a model whereby investors have control over the funds collected once the fundraising is over. The investors could influence how developers have access to the funds and at what frequency through a "tap" mechanism. In addition, investors can also vote to do away with the project and have their funds returned.

The Aavegotchi project launched the token bonding curve through a DAICO on Aragon.

**This is SAFU. Do. Not. Remove. The. Bonding. Curve.** It prevents investors from getting rugged as they ultimately have control over the funds within the DAICO/bonding curve!

The first iteration of [AavegotchiDAO](/dao) launched in tandem with the GHST distribution on the bonding curve. GHST holders had the power to vote on increasing / maintaining the funds distributed by the tap mechanism of the token bonding curve (TBC) reserve to Pixelcraft Studios (the team behind Aavegotchi) to support development. The first AavegotchiDAO proposal of increasing the Aavegotchi DAICO tap from 50,000 DAI to 100,000 DAI per month passed with 99% approval on 18 October 2020.



## Dynamique de l'offre du token d'Aavegotchi

In our discussion of the token bonding curve/DAICO above, we learned that the total supply of the GHST token is dynamic. When investors purchase GHST using DAI from the bonding curve, new GHST tokens are minted and the total supply of circulating GHST would increase. When GHST tokens are sold back into the bonding curve, the GHST tokens would be burnt, the seller would receive an equivalent amount in DAI based on the prevailing GHST price on the bonding curve, and the circulating supply of GHST tokens would decrease.

The inflation of GHST tokens through net purchases on the bonding curve is positively correlated to the GHST price. **The bonding curve has been mathematically programmed to increase the price of GHST as the circulating supply of GHST increases.**



## Arbitrage

For users who have completed KYC, they will be able to arbitrage the GHST price differences between the token bonding curve and other DEXes such as Uniswap and Balancer. According to [Investopedia](https://www.investopedia.com/terms/a/arbitrage.asp), "Arbitrage is the purchase and sale of an asset in order to profit from a difference in the asset's price between markets. It is a trade that profits by exploiting the price differences of identical or similar financial instruments in different markets or in different forms. Arbitrage exists as a result of market inefficiencies and would therefore not exist if all markets were perfectly efficient." This is possible as DEXes come equipped with their own Automated Market Maker (AMM) formula and the net purchase/sale actions of GHST tokens on these DEXes would result in prices that are different from the token bonding curve. A savvy investor might consider exploiting such inefficiencies in the market (*alpha leak here*).



## En savoir plus

* For more on [Aragon Fundraising and bonding curves!](https://fundraising.aragon.black/components/bonding-curve)

* Read more at [Bonding Curves Explained](https://yos.io/2018/11/10/bonding-curves/)

* Article on [Bonding Curves](https://defiprime.com/bonding-curve-explained) by DeFi Prime.

* Article on [DAICO](https://cointelegraph.com/explained/what-is-a-daico-explained) by the Coin Telegraph.