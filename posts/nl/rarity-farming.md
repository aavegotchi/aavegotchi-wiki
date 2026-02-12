---
author: wagyuchicken
date: "2025-09-18T00:00:00.000Z"
title: "Rarity Farming"
description: "Alles wat je moet weten over Rarity Farming!"
contributors: '["cinnabarhorse", "wagyuchicken", "appellants", "unintelligent-nerd"] ---'
---

<div class="headerImageContainer">
<img class="headerImage" src="/rarity-farming/rarity-farming.png">
<p class="headerImageText">Een Rarity Farmer</p>
</div>

Rarity farming is an innovative game mechanism pioneered by Aavegotchi. It strives to reward the users who are the most thoughtfully and enthusiastically engaged with the ecosystem. As its name suggests, this is a process where you attempt to raise the rarest Aavegotchis, and get rewarded for doing so.

This wiki page will explain how you can engage in rarity farming, and how the rarest Aavegotchis are determined. Keep reading to learn more!

<div class="contentsBox">

**Inhoud**

<ol>
<li><a href=#how-do-i-rarity-farm->Hoe doe ik Rarity Farming?</a></p>
<li><a href=#components-of-rarity-score>Components of Rarity Score</a></li>
<li><a href=#calculating-rarity-score>Calculating Rarity Score</a></li>
<li><a href=#rewards>Beloningen</a></li>
<p><a href=#rarity-farming-seasons>Rarity Farming Seizoen</a></p>
<p><a href=#collecting-rarity-farming-rewards>Verzamel Rarity Farming Beloningen</a></p>
</ol>

</div>

## Hoe doe ik Rarity Farming?


Er zijn verschillende manieren waarop u zich kunt bezighouden met de Rarity Farming. Het gaat daarbij om:

- **Selecteer voorzichtig een Aavegotchi met zeldzame eigenschappen tijdens het [oproepingsproces](/portals)**

- **Uitrusten met [wearables](/wearables) om de eigenschappen van je Aavegotchi aan te passen**

Voor meer informatie over elk proces, volg de links naar de respectievelijke pagina's op de zijbalk.

Dat gezegd hebbende, is het zeldzaamheidsniveau van een enkele Aavegotchi dynamisch en zal in de loop van de tijd veranderen. als de distributie van eigenschappen en wearables in het Aavegotchi universum verandert. Met andere woorden, het is niet genoeg om simpelweg een bepaalde eigenschap in je Aavegotchi uit te halen. Je moet ook kijken naar het optreden van andere spelers. For instance, if other players [sacrifice](/traits#experience) a number of Gotchis to boost a particular Gotchi, they could overtake you on the Experience/XP category of the Rarity Farming leaderboards.

## Components of Rarity Score

### Basis Zeldzaamheid Score

Base Rarity Score (BRS) is afgeleid van de algehele zeldzaamheid van zowel de Aavegotchi's eigenschappen, uitgeruste wearabelen, als hun [leeftijd](/aging-mechanic).

#### BRS Eigenschap

BRS van de eigenschappen van Aavegotchi wordt afgeleid met de volgende formule:

```
als (nummer < 50) geeft 100 - nummer;
    anders retourneer nummer + 1;
```

_Als de waarde van de eigenschap **minder dan** 50, BRS = 100 - waarde_

_Als de waarde van de eigenschap **gelijk aan of groter is dan** 50, BRS = de waarde van eigenschap + 1_

#### Wearables BRS

Wearables BRS daarentegen is afhankelijk van zijn zeldzaamheid. Bijvoorbeeld, zeldzame [wearables](/wearables) renderen 5 BRS en god wearables 50 BRS.

#### Leeftijd

Wanneer jouw gotchi ouder worden, krijgen ze extra BRS. Voor meer informatie, bekijk de [Aging Mechanic](/aging-mechanic) pagina.

## Calculating Rarity Score

Example of Rarity Score calculation is as shown below:

tabel_RarityScoreCalculationTabel

## Beloningen

In each season of Rarity Farming, the rarest Aavegotchis receive GHST rewards that can be claimed by their owners. Recent seasons (e.g., Season 10/11) have run on Base.

In eerste instantie waren er 3 categorieënRarity Farming beloningen:

- Aavegotchi Rarity Scores (door BRS, ARS komt later)
- [Kinship](/traits#kinship) Scores
- [Ervaring](/traits#experience)

Voor elke categorie worden Rarity Farming beloningen verdeeld op basis van een aflopende curve, met de top paar Aavegotchis verdienen meer GHST beloningen dan andere Gotchis die lager op de curve staan. Er zal een cut-off punt zijn waar Gotchis onder dat punt geen beloningen ontvangen. Probeer dus uw best te doen om boven die grens uit te komen. U zult ten minste iets winnen!

De AavegotchiDAO zal bepalen welk deel van de beloningen aan elk van de categorieën wordt toegewezen.

Meer categorieën zullen later toegevoegd worden als het Aavegotchi spel zich blijft ontwikkelen. Some of these new one-off categories include:

- Rookie Kinship
- Rookie Experience/XP
- Gotchi Battler

Speler beloningen worden elke twee weken verdeeld via onchain snapshots. Oorspronkelijk was dit een handmatig proces dat door Pixelcraft wordt afgehandeld, maar uiteindelijk kan het geautomatiseerd worden door de DAO. Na elke snapshot, kunnen beloningen worden opgeëist door alle succesvolle Rarity Farmers en de volgende ronde begint meteen.

Hoe worden de GHST beloningen voor Rarity Farming gefundeerd? [40% van alle GHST dat gespendeerd wordt aan wearables, consumables, en andere spel items worden gedoneerd aan de Rarity Farming beloningen pool](https://aavegotchi.medium.com/rarity-farming-has-arrived-heres-how-to-play-1f1d3342dbc8).

De laatste zeldzaamheidsscore van een Aavegotchi in het totale Aavegotchi Universe verschuift constant als spelers meer Aavegotchis oproepen, rust meer wearabels uit en verhoog hun Aavegotchis. Daarom moeten de spelers strategische beslissingen nemen over de opleiding en de uitrusting van hun Aavegotchis. Dat is hoe door Rarity Farming Aavegotchi doordachte gameplay en actieve deelname van gebruikers aanmoedigt, terwijl ze de beste farmers belonen voor hun spookoogsten.

Er is momenteel geen limiet voor hoeveel interacties een Aavegotchi elke periode kan uitvoeren, maar als bot activiteit een probleem wordt dan kan de AavegotchiDAO stemmen om circuitonderbrekers toe te voegen om bot activiteit te verminderen.

### Rarity Farming Seizoen

Rarity Farming is georganiseerd in verschillende seizoenen. Elk seizoen heeft zijn eigen competitie-categorieën, grootte van beloningspool, en beloningsdistributie curve.

For data pertaining to the Rarity Farming Seasons (including Base-era seasons), check out this [page](/rarity-farming-seasons) and the official blog.

### Verzamel Rarity Farming Beloningen

Rarity Farming Beloningen worden uitbetaald aan je Aavegotchi inventaris (Ja! Elk van uw Aavegotchi heeft zijn eigen persoonlijke inventaris!).

Eerst moet je naar [Mijn Aavegotchis pagina](https://aavegotchi.com/lending/aavegotchis) gaan. Klik op een van je Aavegotchis. Aan de rechterbenedenhoek van het scherm staat een "Pocket" knop. Klik erop om de Aavegotch's inventaris te bekijken. U kunt de hoeveelheid GHST zien die uw Gotchi heeft gewonnen van de Rarity Farming (evenals hun uitgeruste wearables).
