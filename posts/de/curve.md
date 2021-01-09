---
author: Unintelligent Nerd
date: '2020-04-23T07:00:00.000Z'
title: 'Bonding Curve'
description: 'Die Aavegotchi Bonding Curve'
image: "curve/bonding-curve.png"
contributors:
  - "unintelligent-nerd"
---


<div class="headerImageContainer">
<img class="headerImage" src="/curve/bonding-curve.png">
<p class="headerImageText">Die Bonding Curve</p>
</div>

Eine Token Bonding Curve (TBC) ist eine mathematische Kurve, die eine Beziehung zwischen Preis und Token-Angebot definiert.

In einer typischen TBC steigt der Preis, wenn das Angebot des Tokens steigt, und sinkt, wenn das Angebot sinkt. Da die Aavegotchi Bonding Curve durch ein [Aragon](/glossary#aragon) [Decentralized Autonomous Initial Coin Offering (DAICO)](/glossary#daico) gestartet wurde, wird in diesem Artikel auch auf DAICOs eingegangen.

<div class="contentsBox">

**Inhalte**

<ol>
<li><a href=#mechanics>Funktionsweise</a></li>
<li><a href=#aavegotchi-bonding-curve>Aavegotchi Bonding Curve</a></li>
<li><a href=#aavegotchi-daico>Aavegotchi DAICO</a></li>
<li><a href=#aavegotchi-token-supply-dynamics>Aavegotchi Token Angebots-Dynamik</a></li>
<li><a href=#arbitrage>Arbitrage</a></li>
<li><a href=#learn-more>Weitere Infos</a></li>
</ol>

</div>

## Funktionsweise

### Minting / Burning auf Nachfrage

Bonding Curves nutzen einen Preisfindungsalgorithmus, um als automatischer Market Maker zu dienen und eine immer verfügbare Liquiditätsquelle zu bieten. Nutzer können mit einer Bonding Curve interagieren, indem sie Token in den Reservepool der Curve einzahlen. Wenn sie dies tun, erstellt/minted die Bonding Curve die entsprechenden Tokens für den Nutzer, basierend auf dem Preisalgorithmus. Die neu erstellten Tokens können einen bestimmten Nutzen haben und sogar unter den Spielern gehandelt werden. Sie können aber jederzeit über die Bonding Curve gegen Tokens aus dem Reservepool zurückgetauscht werden.

Wenn ein Token über eine TBC gekauft wird, muss jeder nachfolgende Käufer einen etwas höheren Preis für den jeweiligen Token zahlen, wodurch ein potenzieller Gewinn für die früheren Investoren entsteht. Je mehr Menschen von dem Projekt erfahren und je mehr gekauft wird, desto mehr steigt der Wert der einzelnen Tokens entlang der Bonding Curve. Frühe Investoren, die vielversprechende Projekte finden, den an die Curve gebundenen Token kaufen und dann ihren Token wieder verkaufen, können später einen Gewinn erzielen.

### Formel

Bonding Curves gibt es in verschiedenen Formen und Grössen. Für das Aavegotchi-Projekt hat das Team die Bancor-Formel übernommen:

<img style = "border: 1px solid; margin-bottom: 15px" src = "/curve/reserve-ratio.png" alt = "token bonding curve" width = "750" />

### Erklärung der Formel

Der **Reserve Token** bezieht sich auf den Token, den Nutzer in die Bonding Curve einzahlen.

Der **Continuous Token** bezieht sich auf den Token, den man von der Bonding Curve beim Einzahlen des Reserve Tokens erhält.

Im Fall von Aavegotchi sind die Reserve und Continuous Tokens DAI bzw. GHST.

Das **Connecting Weight** (auch bekannt als Reserve Ratio) stellt ein festes Verhältnis (zwischen 0 und 100%) zwischen dem Gesamtwert des Continuous Token (Gesamtangebot × Stückpreis) und dem Wert seiner gesamten Reserve Tokens dar.  Dieses CW ist durch die Bancor-Formel konstant, da sowohl die Anzahl Reserve Tokens als auch der Gesamtwert des Continuous Token (aka. "Marktkapitalisierung") mit Käufen und Verkäufen schwanken.

Jeder Kauf oder Verkauf des Continuous Tokens (GHST) löst eine Zunahme oder Abnahme von Reserve Tokens (DAI) aus. Der Preis des Continuous Tokens in Bezug auf seine Reserve Tokens muss dann kontinuierlich neu berechnet werden, um das konfigurierte Connecting Weight / Ratio zwischen ihnen aufrechtzuerhalten.


Das Connecting Weight bestimmt, wie stark sich der Preis eines Continuous Tokens anpassen muss, um das Ratio aufrechtzuerhalten. Mit anderen Worten: seine Preissensitivität.

A higher reserve ratio between the Reserve Token balance and the Continuous Token will result in lower price sensitivity, meaning that each buy and sell will have a less than proportionate effect on the Continuous Token’s price movement. Conversely, a lower ratio between the Reserve Token balance and the Continuous Token will result in higher price sensitivity, meaning that each buy and sell will have a more than proportionate effect on the Continuous Token’s price movement.

**Aavegotchi's Reserve Ratio is 33% frens!** This means you don't need to fear dem whales. They can't pump & dump GHST as the bonding curve is hardened against their huuugge transactions!

If you wanna see it in action, check out this interactive model of the bonding curve Coderdan made [here](https://observablehq.com/@cinnabarhorse/aavegotchi-bonding-curve).

TEH CURVE IS FOREVER!

## Aavegotchi Bonding Curve
The Aavegotchi Bonding Curve was created on 14 September 2020 via a bonding curve smart contract powered by [Aragon Fundraising](https://fundraising.aragon.black/). After the conclusion of a presale for 500,000 GHST, the bonding curve was immediately opened. The bonding curve is unlimited in size, has no time limit, and offers an opening price of 0.2 Dai per GHST. It has a connecting weight of 33%.

You will have to complete KYC in order to purchase straight from/sell to the curve. Compliance is important my dudes - we live in a society, and we also don't want the project to get rugged by the government. Purchases from the curve are made in DAI. The reverse also applies; you can sell your GHST back to the curve for DAI, but why would you wanna do that? :( :( :(

If you are unable to perform KYC because of your citizenship, don't worry! **You will still be able to interact with every other part of the Aavegotchi metaverse.** You simply have to purchase your GHST off a DEX such as Uniswap or Balancer, or a CEX like OKex instead. Learn how to get GHST tokens [here](/ghst#get-ghst).

## Aavegotchi DAICO
A Decentralized Autonomous Initial Coin Offering (DAICO) is a new fundraising method that seeks to incorporate the best features of a Decentralized Autonomous Organization (DAO) with those of an Initial Coin Offering (ICO) in order to create a structure that provides a higher level of effectiveness to the token sale fundraising model. A DAICO is a model whereby investors have control over the funds collected once the fundraising is over. The investors could influence how developers have access to the funds and at what frequency through a "tap" mechanism. In addition, investors can also vote to do away with the project and have their funds returned.

The Aavegotchi project launched the token bonding curve through a DAICO on Aragon.

**This is SAFU. Do. Not. Remove. The. Bonding. Curve.** It prevents investors from getting rugged as they ultimately have control over the funds within the DAICO/bonding curve!

The first iteration of [AavegotchiDAO](/dao) launched in tandem with the GHST distribution on the bonding curve. GHST holders had the power to vote on increasing / maintaining the funds distributed by the tap mechanism of the token bonding curve (TBC) reserve to Pixelcraft Studios (the team behind Aavegotchi) to support development. The first AavegotchiDAO proposal of increasing the Aavegotchi DAICO tap from 50,000 DAI to 100,000 DAI per month passed with 99% approval on 18 October 2020.

## Aavegotchi Token Angebots-Dynamik
In our discussion of the token bonding curve/DAICO above, we learned that the total supply of the GHST token is dynamic. When investors use their DAI to buy GHST from the bonding curve, new GHST tokens are minted and the total supply of circulating GHST would increase. The reverse holds true as well. When users sell their GHST back into the bonding curve, they receive an equivalent amount in DAI based on the prevailing GHST price on the bonding curve.

The inflation of GHST tokens through net purchases on the bonding curve is positively correlated to the GHST price. **The bonding curve has been mathematically programmed to increase the price of GHST as the circulating supply of GHST increases.**

## Arbitrage
For users who have completed KYC, they will be able to arbitrage the GHST price differences between the token bonding curve and other DEXes such as Uniswap and Balancer. According to [Investopedia](https://www.investopedia.com/terms/a/arbitrage.asp), "Arbitrage is the purchase and sale of an asset in order to profit from a difference in the asset's price between markets. It is a trade that profits by exploiting the price differences of identical or similar financial instruments in different markets or in different forms. Arbitrage exists as a result of market inefficiencies and would therefore not exist if all markets were perfectly efficient." This is possible as DEXes come equipped with their own Automated Market Maker (AMM) formula and the net purchase/sale actions of GHST tokens on these DEXes would result in prices that are different from the token bonding curve. A savvy investor might consider exploiting such inefficiencies in the market (*alpha leak here*).

## Weitere Infos

* For more on [Aragon Fundraising and bonding curves!](https://fundraising.aragon.black/components/bonding-curve)

* Read more at [Bonding Curves Explained](https://yos.io/2018/11/10/bonding-curves/)

* Article on [Bonding Curves](https://defiprime.com/bonding-curve-explained) by DeFi Prime.

* Article on [DAICO](https://cointelegraph.com/explained/what-is-a-daico-explained) by the Coin Telegraph.