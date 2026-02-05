---
author: appellants
date: '2020-04-23T07:00:00.000Z'
title: 'Portalen'
description: 'Alles over Aavegotchi Portalen'
contributors:
  - "appellants"
  - "unintelligent-nerd"
image: "portal/portal.gif"
---

<div class="headerImageContainer">
<img class="headerImage" src="/portals/portal.gif">
<p class="headerImageText">Een Aavegotchi Portaal</p>
</div>

Hoe roep je een Aavegotchi op en breng je het van de Nether realm naar je scherm? Via een Portaal natuurlijk!

Kijk diep in zijn paarse dieptes en zie wat er onder ligt - je vindt een vriend. Of specifieker, 10 vrienden.

Dus zet je tovenaarshoofd op - het is tijd om meer te leren over portalen en het Aavegotchi oproepproces. 

<div class="contentsBox">

**Inhoud**

<ol>
<li><a href=#buying-a-portal>Een Portaal kopen</a></li>
<li><a href=#opening-your-portal>Openen van uw Portaal</a></li>
<li><a href=#claiming-an-aavegotchi>Claim een Aavegotchi</a></li>
<li><a href=#interacting-with-your-aavegotchi>Interactie met je Aavegotchi</a></li>
<li><a href=#transferring-your-aavegotchi>Verplaats je Aavegotchi</a></li>
</ol>

</div>

## Een Portaal kopen

Voordat u uw pixel spookkind kunt opvoeden, moet u het via een Portaal oproepen.

U kunt portalen verkrijgen op een van de volgende manieren:

* In [een Veiling](/aauction)
* In een [Drop Ticket Lotterij](/tickets)
* In de [Baazaar](/baazaar)

Veilingen en Lotterijen zijn tijdgebonden evenementen. Als u ze mist, is de enige andere manier om portalen te kopen via de Baazaar, onze secundaire marktplaats.

Portalen worden vrijgegeven in ["Haunts" (editions)](/haunt). De eerste haunt biedt 10.000 Portals aan om te grijpen. Hierna zal de [AavegotchiDAO](/dao) blijven stemmen over besluiten met betrekking tot afzonderlijke haunts. De portaalprijzen en -hoeveelheden kunnen in de toekomst bijvoorbeeld veranderen als gevolg van besluiten en stemmen van de DAO.


## Openen van uw Portaal

Zalig! U staat op het punt uw portaal te kopen. Dit is waar de ~ Portaal Oproept Ritueel ~ in het spel komt. Dit is het mechanisme waarmee u uw Aavegoti kunt oproepen.

Na de aankoop van het portaal is de volgende stap om het te openen. Het openen van het portaal vindt plaats op [Polygon](/glossary#polygon) waar gamers een transactie moeten ondertekenen. Nadat de transactie is ondertekend, wordt de [Chainlink Verifiable Randomness functie (VRF)](/glossary#chainlink-vrf) achter de schermen aangeroepen. Wanneer de functie wordt uitgevoerd, zal het portaal een willekeurig nummer worden toegewezen, waardoor de kenmerken van de Aavegotchi zeer willekeurig zullen zijn.

Hier is een handige flow grafiek die het proces samenvat:

<img class = "bodyImage" src = "/portals/opening-an-aavegotchi-portal.png" alt = "Proces om een Aavegotchi Portaal te openen" />

Na het openen van een portaal, zie je 10 verschillende Aavegotchis waaruit je kunt kiezen, om vanuit het Nether Realm op te roepen. Je zult 1 van de 10 moeten kiezen om op te roepen. De rest zal helaas verdwijnen.

Deze Aavegotchis dragen allemaal andere willekeurig gegenereerde eigenschappen. Als je door je opties heen wisselt, kun je deze eigenschappen en je Aavegotchi's [Basis Rarity Score](/rarity-farming#base-rarity-score) zien. Dit is een zeldzaamheidsscore die in eerste instantie aan uw Aavegotchi wordt gegeven, gebaseerd op de oorspronkelijke eigenschappen die het heeft na het oproepen. Deze zeldzaamheidsscore kan later worden gewijzigd door middel van een reeks activiteiten, zoals het toerusten van je Aavegotchi met wearabels.

Je kunt hier de vaardigheid en waarschijnlijkheid van zeldzaamheid bekijken in deze tabel:

tabel_PortalTraitTable


Meer informatie over rarity farming vindt u [hier](/rarity-farming).


## Claim een Aavegotchi

Om een Aavegotchi uit het portaal te claimen, moet u de vereiste hoeveelheid [Spirit Force](/spirit-force) in het Portaal zetten. Spirit Force can be acquired directly through the [Aavegotchi UI](/spirit-force#buying-matokens-amtokens).

Naast hun monetaire waarde zoals gedicteerd door schaarste en marktkrachten, heeft elke Aavegotchi ook een intrinsieke waarde. The [maTokens/amTokens](/spirit-force#buying-matokens-amtokens) you stake to it provide this intrinsic value.

**Voor meer informatie over Spirit Force, zie [hier](/spirit-force).**

Over het algemeen hangt de minimale hoeveelheid Spirit Force (onderpand) af van de Basis Rarity Score van de Aavegotchi die je wilt oproepen. Hoe hoger de score, hoe meer onderpand het vereist.

De minimaal vereiste hoeveelheid onderpand is 10 DAI, terwijl het maximum 1000 DAI ter waarde van onderpand is.

De formule die wordt gebruikt om de hoeveelheid Spirit Force (onderpand noodzakelijk) te bepalen, is als volgt:

```
if (rarityScore < 300) return 10;
        else if (rarityScore >= 300 && rarityScore < 450) return 10;
        else if (rarityScore >= 450 && rarityScore <= 525) return 25;
        else if (rarityScore >= 526 && rarityScore <= 580) return 100;
        else if (rarityScore >= 581) return 1000;
```

Bijvoorbeeld, als de Basis Rarity Score minder is dan 300, je moet minstens 10 DAI als onderpand halen om de Gotchi op te roepen.

You can increase or decrease the Spirit Force (staked maToken/amToken amount) of your Aavegotchi later via the Aavegotchi Dapp UI.

Om Gotchi te claimen, moet je 2 transacties uitvoeren. First, you need to approve the smart contract to spend the maToken/amToken in your wallet. Met de volgende transactie kunt u de Aavegotchi claimen.

## Interactie met je Aavegotchi

Zodra je Gotchi hebt opgeëist, is het volgende wat je moet doen naar........*drum rollt*..........play met je Aavegotchi!

Bekijk de [Aavegotchi profielpagina](/aavegotchi-profile) voor hoe je dit kunt doen!

## Verplaats je Aavegotchi

Het overbrengen van een Aavegotchi naar een nieuwe eigenaar (wanneer je handelt) verplaatst ook de onderpand erachter, evenals alle voorwerpen en wearables in het Aavegotchi's inventaris. Dit gebeurt wanneer u uw Aavegotchi verhandelt op een online marktplaats zoals OpenSea.

Als je de uitgezette onderpand van je Aavegotchi wilt ophalen, heb je twee opties:

1. **Verminder de hoeveelheid onderpand** in je Aavegotchi (maar niet onder de minimale stake).

2. **Verbrand je Aavegotchi**, laat het terug naar het Nether Rijk en geef al je onderpanden terug.

**Voordat u uw Aavegotchi kunt verkopen op secundaire markten zoals OpenSea, gelieve uw Aavegotchi te "vergrendelen" via het Dapp UI, om de koper te helpen ervoor te zorgen dat alle bezittingen van Aavegotchi er mee zullen worden overgedragen.**