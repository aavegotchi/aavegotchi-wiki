---
author: Unintelligent Nerd
date: '2020-04-23T07:00:00.000Z'
title: 'Bonding Curve'
description: 'De Aavegotchi Bonding Curve'
image: "curve/bonding-curve.png"
contributors:
  - "unintelligent-nerd"
---


<div class="headerImageContainer">
<img class="headerImage" src="/curve/bonding-curve.png">
<p class="headerImageText">De Bonding Curve</p>
</div>

Een Token Bonding Curve (TBC) is een wiskundige curve die een relatie tussen prijs en token voorraad definieert.

In een typische TBC stijgt de prijs naarmate het aanbod van de token toeneemt en daalt het aanbod naarmate het aanbod daalt. Omdat de Aavegotchi Bonding Curve werd gelanceerd via een  [Aragon](/glossary#aragon) [Gedecentraliseerde autonomie Coin Offering (DAICO)](/glossary#daico)In dit artikel wordt ook gesproken over DAICO's.

<div class="contentsBox">

**Inhoud**

<ol>
<li><a href=#mechanics>Mechanismen</a></li>
<li><a href=#aavegotchi-bonding-curve>Aavegotchi Bonding Curve</a></li>
<li><a href=#aavegotchi-daico>Aavegotchi DAICO</a></li>
<li><a href=#aavegotchi-token-supply-dynamics>Aavegotchi Token Aanbod Dinamiek</a></li>
<li><a href=#arbitrage>Arbitrage</a></li>
<li><a href=#learn-more>Lees meer</a></li>
</ol>

</div>

## Mechanismen

### Minting / Burnen op aanvraag

Bonding Curves gebruiken een prijsalgoritme om te dienen als een geautomatiseerde marktmaker en bieden een altijd beschikbare liquiditeitsbron. Gebruikers kunnen interactie voeren met een bonding curve door tokens in de reserve pool van de gebonden curve te staken. Een bonding curve mint voor zijn gebruikers, wanneer nodig, de corresponderende token gebasseerd op het prijs algoritme. De nieuw geminte tokens kunnen specifiek nut hebben en kunnen zelfs worden verhandeld tussen gebruikers, maar kunnen ook altijd terug worden uitgewisseld door de bonding curve voor tokens in de bonding curve's reserve pool.

Wanneer een token wordt gekocht via een TBC, zal elke volgende koper een iets hogere prijs moeten betalen voor elke token, het genereren van potentiële winst voor de eerste beleggers. Naarmate meer mensen te weten komen over het project en het kopen doorgaat, stijgt de waarde van elk token geleidelijk aan langs de bonding curve. Vroege beleggers die veelbelovende projecten vroeg vinden, kopen de curve-bonded token, en dan hun token terug verkopen om in de toekomst winst opleveren.

### Formule

Boning curves komen in verschillende vormen en groottes. Voor het Aavegotchi project heeft het team de Bancor Formule aangenomen:

<img style = "border: 1px solid; margin-bottom: 15px" src = "/curve/reserve-ratio.png" alt = "token bonding curve" width = "750" />

### Formule Uitleg

De **Reserve Token** verwijst naar de token die gebruikers in de bonding curve staken.

De **Continuous Token** verwijst naar de token die wordt ontvangen van de bonding curve op staking van de Reserve Token.

In het geval van Aavegotchi zijn het Reserve en Continuous Tokens respectievelijk DAI en GHST.

De **Connecting Weight** (ook bekend als Reserve Verhouding) vertegenwoordigt een vaste verhouding (tussen 0 en 100%) tussen de totale waarde van de Continuous Token (totale prijs van aanbod × eenheidsprijs) en de waarde van zijn Reserve Token saldo.  Deze CW is constant doormiddel van de Bancor Formule als omdat zowel het reservetoken saldo en de totale waarde van de Continuous Token (a.k.a. 'marktcap') fluctueert met kopen en verkopen.

Elke aankoop of verkoop van de Continuous Token (GHST) veroorzaakt een toename of afname van de Reserve Tokens (DAI). De prijs van de Continuous Token met betrekking tot zijn Reserve Tokens moet vervolgens continu herberekenen om de geconfigureerde verbinding tussen beide te behouden.


De Connecting Weight bepaalt hoe scherp de prijs van een Continuous Token moet worden aangepast om bij elke transactie te worden onderhouden of met andere woorden, zeer prijs gevoelig.

Een hogere reserveratio tussen het ReserveToken en de Continuous Token zal resulteren in lagere prijs gevoeligheid, dit betekent dat elke aankoop en verkoop een minder dan evenredig effect zal hebben op de prijsbeweging van de Continuous Token. Omgekeerd zal een lagere verhouding tussen het Reserve Token saldo en de Continuous Token leiden tot hogere prijs gevoeligheid, betekent dat elke aankoop en verkoop een meer dan evenredig effect zal hebben op de prijsbeweging van de Continuous Token.

**Aavegotchi's Reserve verhouding, is 33% francs!** Dit betekent dat je niet hoeft te vrezen voor dem wales. Ze kunnen GHST niet pomp & dumpen omdat de bindcurve tegen hun enorme transacties is bestend!

Als je het in actie wilt zien, bekijk dan dit interactieve model van de bindcurve dat Coderdan maakte [hier](https://observablehq.com/@cinnabarhorse/aavegotchi-bonding-curve).

DE CURVE IS VOOR ALTIJD!

## Aavegotchi Bonding Curve
De Aavegotchi Bonding Curve is gemaakt op 14 september 2020 via een bonding curve smart contract aangedreven door [Aragon Fundraising](https://fundraising.aragon.black/). Na het sluiten van een voorverkoop van 500.000 GHST werd onmiddellijk de bonding curve geopend. De bonding curve is onbeperkt in grootte, heeft geen tijdslimiet en biedt een openingsprijs aan van 0,2 Dai per GHST. Het heeft een connecting weight van 33 procent.

Je moet KYC voltooien om direct van de curve te kunnen kopen/verkopen. Naleving is belangrijk iedereen - we leven in een samenleving en we willen ook niet dat het project gestopt wordt door de regering. Aankopen van de curve zijn gemaakt in DAI. Het omgekeerde geldt ook; u kunt uw GHST weer op de curve voor DAI verkopen, maar waarom zou u dat willen? :( :( :(

Als je KYC niet kunt uitvoeren vanwege je burgerschap, maak je dan geen zorgen! **Je kunt nog steeds communiceren met elk ander deel van de Aavegotchi metaverse.** U moet gewoon uw GHST kopen van een DEX zoals Uniswap of Balancer, of een CEX zoals OKex. Leer hoe je GHST tokens [hier](/ghst#get-ghst) kunt krijgen.

## Aavegotchi DAICO
Een gedecentraliseerde autonome initiële Coin Offering (DAICO) is een nieuwe fundraising methode die de beste functies van een gedecentraliseerde autonome organisatie (DAO) met die van een Initial Coin (ICO) wil integreren om een structuur te creëren die een hogere effectiviteit van het token verkoop fundraising model biedt. Een DAICO is een model waarbij beleggers zeggenschap hebben over de fondsen die zijn ingezameld zodra de financiering voorbij is. De investeerders kunnen invloed uitoefenen op de manier waarop ontwikkelaars toegang hebben tot de fondsen en op de frequentie van een "tap"-mechanisme. Bovendien kunnen investeerders ook stemmen om het project af te schaffen en hun geld terug te krijgen.

Het Aavegotchi project lanceerde de Token Bonding Curve via een DAICO op Aragon.

**Dit is SAFU. Verwijder. De. Bonding. Curve. Niet. Curve.** It prevents investors from getting rugged as they ultimately have control over the funds within the DAICO/bonding curve!

The first iteration of [AavegotchiDAO](/dao) launched in tandem with the GHST distribution on the bonding curve. GHST holders had the power to vote on increasing / maintaining the funds distributed by the tap mechanism of the token bonding curve (TBC) reserve to Pixelcraft Studios (the team behind Aavegotchi) to support development. The first AavegotchiDAO proposal of increasing the Aavegotchi DAICO tap from 50,000 DAI to 100,000 DAI per month passed with 99% approval on 18 October 2020.

## Aavegotchi Token Aanbod Dinamiek
In our discussion of the token bonding curve/DAICO above, we learned that the total supply of the GHST token is dynamic. When investors purchase GHST using DAI from the bonding curve, new GHST tokens are minted and the total supply of circulating GHST would increase. When GHST tokens are sold back into the bonding curve, the GHST tokens would be burnt, the seller would receive an equivalent amount in DAI based on the prevailing GHST price on the bonding curve, and the circulating supply of GHST tokens would decrease.

The inflation of GHST tokens through net purchases on the bonding curve is positively correlated to the GHST price. **The bonding curve has been mathematically programmed to increase the price of GHST as the circulating supply of GHST increases.**

## Arbitrage
For users who have completed KYC, they will be able to arbitrage the GHST price differences between the token bonding curve and other DEXes such as Uniswap and Balancer. According to [Investopedia](https://www.investopedia.com/terms/a/arbitrage.asp), "Arbitrage is the purchase and sale of an asset in order to profit from a difference in the asset's price between markets. It is a trade that profits by exploiting the price differences of identical or similar financial instruments in different markets or in different forms. Arbitrage exists as a result of market inefficiencies and would therefore not exist if all markets were perfectly efficient." This is possible as DEXes come equipped with their own Automated Market Maker (AMM) formula and the net purchase/sale actions of GHST tokens on these DEXes would result in prices that are different from the token bonding curve. A savvy investor might consider exploiting such inefficiencies in the market (*alpha leak here*).

## Lees meer

* For more on [Aragon Fundraising and bonding curves!](https://fundraising.aragon.black/components/bonding-curve)

* Read more at [Bonding Curves Explained](https://yos.io/2018/11/10/bonding-curves/)

* Article on [Bonding Curves](https://defiprime.com/bonding-curve-explained) by DeFi Prime.

* Article on [DAICO](https://cointelegraph.com/explained/what-is-a-daico-explained) by the Coin Telegraph.