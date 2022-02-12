---
author: Coder Dan
date: '2020-04-23T07:00:00.000Z'
title: 'Aavegotchi Verbetervoorstellen (AGIP''s)'
description: 'Een lijst van Aavegotchi verbetervoorstellen (AGIP''s)'
contributors:
  - "unintelligent-nerd"
---

Heya frens. Deelnemen aan Aavegotchi verbeteringsvoorstellen (AGIP's) is wat verantwoordelijke gotchis doen! U moet stemmen en uw stem laten horen.

Hoe ver zijn we gekomen als gemeenschap? Kijk naar onze archieven van eerdere stemmen hier!

Psst! Claim je [POAP Badges](/poap) als je eerder op AGIPs hebt gestemd!

<div class="contentsBox">

**Inhoud**

<ol>
<li><a href=#tap-increase-for-scaling-sprint>Tap increase for Scaling Sprint</a></li>
<li><a href=#add-fees-to-bonding-curve>Kosten toevoegen aan de Bonding Curve</a></li>
<li><a href=#increase-daico-tap-for-ghst-purchases>Verhoog DAICO tik voor GHST aankopen</a></li>
<li><a href=#proposal-for-haunt-2>Voorstel voor Haunt 2</a></li>
<li><a href=#give-unique-non-transferable-background-to-haunt-1-aavegotchis>Geef unieke niet-overdraagbare achtergrond aan Haunt 1 Aavegotchis</a></li>
<li><a href=#add-fee-on-baazaar-to-support-rarity-farming>Vergoeding toevoegen op Baazaar om Rarity Farming te ondersteunen</a></li>
<li><a href=#earn-xp-for-successful-signal-proposals>Verdien XP voor succesvolle Signaal Voorstellen</a></li>
<li><a href=#voting-power-based-on-brs>Stemkracht gebaseerd op BRS</a></li>
<li><a href=#voting-power-based-on-wearables--maall-price>Stemkracht op basis van de Wearables' Maall Price</a></li>
<li><a href=#partnership-between-aavegotchidao--pixelcraft--and-dinoswap>Partnerschap tussen AavegotchiDAO, Pixelcraft, en DinoSwap</a></li>
<li><a href=#liquidity-manager---frens-committee>Liquidity Manager / FRENS commissie</a></li>
<li><a href=#launch-haunt-2>Start Haunt 2</a></li>
<li><a href=#add-an-aging-mechanic-to-affect-aavegotchi-rarity-scores>Voeg een Aging Mechanic toe om Aavegotchi rarity scores te beïnvloeden</a></li>
<li><a href=#earn-frens-with-ghst-matic-lp-tokens>Verdien FRENS met GHST-MATIC LP Tokens</a></li>
<li><a href=#create-a-wearables-taask-force>Maak een Wearables Taask Force</a></li>
<li><a href=#stake-100k-ghst-to-generate-minigame-rewards>Stake 100k GHST om Minigame Beloningen te genereren</a></li>
<li><a href=#adding-voting-power-to-realm-parcels>Toevoegen van Stemkracht aan REALM parcelen</a></li>
<li><a href=#gotchiverse-patch-v0-1>Gotchiverse Patch v0.1</a></li>
<li><a href=#providing-ghst-liquidity-on-synfutures>GST Liquidity aanbieden op SynFutures</a></li>
<li><a href=#creating-the-dao-treasury-taask-force>Het creëren van de DAO schatkist Taask Force</a></li>
<li><a href=#name-of-aavegotchi-marketplace>Naam van Aavegotchi Marketplace</a></li>
<li><a href=#eligibility-of-ghst-usdc-lp-tokens-to-earn-frens>Mogelijkheid van GHST-USDC LP tokens om FRENS te verdienen</a></li>
<li><a href=#portals-purchased-in-one-transaction>Portalen gekocht in één transactie</a></li>
</ol>

</div>

### Tap increase for Scaling Sprint
**Aavegotchi Voorstel Verbetering #1**

**Voorstel samenvatting:** De GHST Bonding Curve bestaat al bijna een maand en dat biedt de eerste gelegenheid voor GHST houders om het kraanmechanisme van DAICO aan te passen. AavegotchiDAO 1. is gebouwd op het Aragonplatform en functioneert als een eenvoudige DAICO waar GHST-houders één keer per maand kunnen stemmen om via de kraan de geldstroom naar het kernteam te verhogen of te verminderen. De kraan verschaft DAI rechtstreeks vanuit de GHST Bonding Curve waar momenteel meer dan 7,5 miljoen DAI is verzekerd.

We verzoeken de Aavegotchi gemeenschap om de kraan van 50K DAI / 30 dagen naar 100K DAI / 30 dagen te verhogen. 50k DAI was niet genoeg om alle bereikte mijlpalen (communautaire groei, GHST token, spelontwikkeling) te beslaan, en de volgende sprint is nog ambitieuzer. De harde gecodeerde kaders van AavegotchiDAO 1. dit voorstel beperken tot een verhoging van 50K DAI voor de stemperiode van deze maand, en daarom hebben we onze strategie begroot met een totaal van 100K DAI in gedachten.

In de begroting wordt de extra 50k DAI ingezet in vier verschillende categorieën:
* Een fonds voor game makers zodat we de voorwaarden kunnen versterken met de belangrijkste spelontwikkelaars.
* Extra contracten voor sleutelposities in marketing, ontwerp en ontwikkeling.
* Een marketingboost om ervoor te zorgen dat de aanwezigheid van Aavegotchi wordt uitgebreid.
* Community beloningen zodat we programma's kunnen blijven ontwikkelen (zoals de Aartiesten en Aapprentices teams) die de meest geïnspireerde in onze gemeenschap stimuleren.

**Stemperiode:** van 15 tot 19 oktober 2020

**Resultaten:**

tabel_agip1

[Link om te stemmen op Aragon UI](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/vote/0/)

<hr />

### Kosten toevoegen aan de Bonding Curve
**Aavegotchi Voorstel Verbetering #2**

**Voorstel Samenvatting:** De band curve is de belangrijkste bron van liquiditeit voor GHST. Grote kopers en verkopers kunnen momenteel zonder kosten in- en uitkopen.

Onze marktmaker biedt de mogelijkheid om kosten toe te voegen aan koop- en verkooporders.

Meerdere leden van de gemeenschap hebben voorgesteld om kosten toe te voegen tot 0,3% om op de curve te kopen en te verkopen.

Dit is mogelijk door de `updateFees` functie aan onze bindingcurve aan te roepen, maar moeten we dat doen? Het is aan jullie, AavegotchiDAO.

Alle kosten die worden verdiend worden automatisch overgebracht naar het Schatkist adres van de DAO op 0xffe6280ae4e864d9af836b562359fd828ece8020 en wordt beschouwd als activa van AavegotchiDAO.

**Stemperiode:** van 18 tot 21 oktober 2021

**Resultaten:**

tabel_agip2

[Link om te stemmen op Aragon UI](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/vote/1/)

<hr />

### Verhoog DAICO tik voor GHST aankopen
**Aavegotchi Voorstel Verbetering #3**

**Voorstel samenvatting:** Speler beloningen en liquiditeitsprikkels zijn cruciaal om het Aavegotchi ecosysteem op te starten naar een niveau waar het duurzaam wordt op handelsvolume en economische activiteit.

Wanneer GHST wordt uitgegeven in het Aavegotchi ecosysteem, wordt 33% automatisch verzonden naar een verbrand adres. In tegenstelling tot de meeste cryptocurrencies, verlaagt het verbranden van GHST (behalve via de bonding curve) de totale waarde van GHST, niet. omdat die waarde wordt opgeslagen als DAI in de verbindingscurve.

Wat verbranden doet is DAI binnen de band vallen, door de reserveratio na verloop van tijd te verhogen, wat de prijs van GHT stabiliseert.

Om de verbranding te compenseren (die GHST uiteindelijk in een stabiele munt kan veranderen), raden we de gemeenschap aan de kraan te verhogen tot 150.000 DAI per maand. Dit zal helpen om de reserve van de bondingscurve in evenwicht te brengen, terwijl het ook 50K DAI extra oplevert per maand die aan spelers beloningen en liquiditeit stimulansen worden gegeven.

**Stemperiode:** van 18 tot 21 oktober 2021

**Resultaten:**

tabel_agip3

[Link om te stemmen op Aragon UI](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/vote/2/)

<hr />

### Voorstel voor Haunt 2
**Aavegotchi Voorstel Verbetering #4**

**Voorstel samenvatting:** 10.000 Portals is aantoonbaar niet genoeg om te voldoen aan de huidige vraag naar Aavegotchis. Daarom kan het nodig zijn om een nieuwe Haunt in te zetten om ervoor te zorgen dat iedereen die wil deelnemen een Aavegotchi kan bezitten. Dit voorstel biedt vier verschillende opties die door leden van de gemeenschap zijn voorgesteld, waaronder één optie om geen nieuwe Haunt te maken.

Details van de AGIP zijn hier te vinden [hier](https://aavegotchi.medium.com/vote-when-haunt-2-making-haunts-more-unique-d975cbda4772).

Optie 1: Geen nieuwe Haunt, revisie in een maand

Optie 2: 10K Portalen, 100 GHST elk, 1 per txn

Optie 3: 25K portalen, 100 GHST elk, 5 per txn (w/stricter ape belasting)

Optie 4: Voorverkoop, waarin elke portemonnee kan abonneren voor 1 Portaal in ruil voor 100 GHST. Wanneer de periode voorafgaand aan de verkoop afloopt, worden alle portalen gemint en overgedragen aan hun eigenaars.

**Stemperiode:** van 17 tot 24 oktober 2021

**Resultaten:**

tabel_agip4

**Stem Differentieel niet bereikt. Geen Haunt 2 voor nu!**

[Link om te stemmen met Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmNqRry73rWXb9tdyHummihcK58ga83Ru15AJRF3beFJ35)

<hr />

### Geef unieke niet-overdraagbare achtergrond aan Haunt 1 Aavegotchis
**Aavegotchi Voorstel Verbetering #5**

**Voorstel samenvatting:** Veel spelers zijn bang dat Haunt 2 te veel lijkt op Haunt 1 en dat de nieuw gecreëerde [Haunts](/haunt) de waarde van "Genesis" Haunt zal aantasten. Een van de suggesties is om elke Haunt speciale achtergronden te geven om ze gemakkelijk te identificeren. Dit voorstel heeft een uitstekende discussie en aanzienlijke steun voor de bijbehorende Snapshot gekend. Houd er rekening mee dat alle Aavegotchis, ongeacht het besluit van de DAO over deze kwestie, speciale niet-overdraagbare "Haunt" badges zullen krijgen die hun Haunt identificeren. Dit voorstel richt zich specifiek op het idee van een niet-overdraagbare achtergrond die kan worden uitgerust in de Aavegotchi's BG wearable slot.

Details van de AGIP zijn hier te vinden [hier](https://aavegotchi.medium.com/vote-when-haunt-2-making-haunts-more-unique-d975cbda4772).

Optie 1: Alleen Haunt 1 heeft een speciale achtergrond

Optie 2: Elke Haunt moet zijn eigen unieke achtergrond hebben

Optie 3: Nee, laat het zoals het is

**Stemperiode:** van 17 tot 24 oktober 2021

**Resultaten:**

tabel_agip5

[Link om te stemmen met Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmfBrnUmfsX57vXWchr1mUNkqMWNeF6edEqdQq11MCvMHJ)

<hr />

### Vergoeding toevoegen op Baazaar om Rarity Farming te ondersteunen
**Aavegotchi Voorstel Verbetering #6**

**Voorstel samenvatting:** Met de aankondiging van SZN1 beloningen nu officiëel, verkennen we hoe de interesses en beloningen van de gemeenschap op elkaar kunnen afstemmen, aangezien het betrekking heeft op de Baazaar-kosten.

Op dit moment is 2% aan Pixelcraft en 1% aan schatkist van de DAO. Hoewel niet exclusief tot het verstrekken van RF beloningen, de schatkistfondsen zijn op dit moment niet verplicht om elk seizoen in welke vorm dan ook toe te wijzen aan de RF pool. Het voorstel is erop gericht de Baazaar-vergoedingen te verhogen van 3 procent naar 3,5 procent, waarbij de extra 0,5 procent rechtstreeks naar de Rarity Farming Beloningen gaat.

Details van de AGIP zijn hier te vinden [hier](https://aavegotchi.medium.com/core-proposal-agip6-add-0-5-fee-on-baazaar-to-support-rarity-farming-5bf923c7f528).

Optie 1: Ja, verhoog kosten van 3 tot 3.5

Optie 2: Nee, de kosten laten zoals ze zijn

**Stemperiode:** van 7 tot 13 oktober 2021

**Resultaten:**

tabel_agip6

[Link om te stemmen met Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmPUueFJwpCz6rBiucnBYPLxTv2tetzxXWwCi2gSQFMJMW)

<hr />

### Verdien XP voor succesvolle Signaal Voorstellen
**Aavegotchi Voorstel Verbetering #7**

**Voorstel samenvatting:** We hebben momenteel veel Signapshot / Gemeenschapsvoorstellen op Snapshot en dagelijks nieuwe berichten op ons forum. Tot nu toe kon geen van deze voorstellen zelfs maar het quorum van 20 procent bereiken. De populairste bij @JG over het toevoegen van extra kosten voor RF kreeg slechts 2 miljoen GHST in stemmen (~11%)-hoewel het team besloot om het als een kernvoorstel te beschouwen. Na een upgrade naar Core hebben we recht door het quorum gebroken in minder dan 24 uur.

Ik denk dat daar twee voor de hand liggende redenen voor zijn. Aan de ene kant is onze Snapshot op dit moment een beetje chaotisch, waarbij sommige Signal Proposals het sjabloon helemaal niet volgen. Aan de andere hand denk ik aan het feit dat stemmen op een kernvoorstel nu 20 ervaring (XP) voor uw Gotchi geeft.

Ik stel voor om een kleine afname van de ervaring (10 XP) toe te voegen voor mensen die op succesvolle Signal Voorstellen hebben gestemd, diegene die het quorum bereiken en worden opgewaardeerd tot Core Voorstellen. Het simpelweg laten vallen van XP voor alle Gemeenschapsvoorstellen kan leiden tot slechtere kwaliteitsinstellingen, wat niet het doel van dit voorstel zou moeten zijn.

Zelfs als 10 XP misschien niet veel is, het geeft mensen stimulansen om daadwerkelijk door de Signalen te kijken en te stemmen op kwalitatieve voorstellen, met een grotere kans op het bereiken van het quorum. Als DAO is betrokkenheid van de gemeenschap buitengewoon belangrijk en ik denk dat dit een kleine, maar fatsoenlijke stap in de goede richting is.

Als dit voorstel het quorum bereikt en doorgaat, zullen alle Aavegotchis die hun eigenaren aan het einde van de stemming 10 XP ontvangen!

Details van de AGIP zijn hier te vinden [hier](https://aavegotchi.medium.com/vote-agip7-earn-xp-for-successful-signal-proposals-d5eafdb93aae).

Optie 1: Ja, succesvolle SigProps geven XP

Optie 2: Nee, SigProps mag geen XP geven

**Stemperiode:** van 12 tot 18 oktober 2021

**Resultaten:**

tabel_agip7

[Link om te stemmen met Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmctiApzKZHoVsSpzWVfMVL1abRTUNXsoipupNGS52gEuZ)

<hr />

### Stemkracht gebaseerd op BRS
**Aavegotchi Voorstel Verbetering #8**

**Voorstel samenvatting:**Stemkracht voor Aavegotchis in het adres van een kiezer toevoegen met een waarde van 1 GHST per BRS (basislaagscore, niet inclusief uitgeruste wearables).

Details van de AGIP zijn hier te vinden [hier](https://aavegotchi.medium.com/vote-agip8-and-agip9-give-voting-power-to-aavegotchis-and-wearables-9c113373a0a2).

Optie 1: Ja, geef Stemvermogen aan Aavegotchi gebaseerd op BRS

Optie 2: Nee, Aavegotchis zou geen stemvermogen moeten hebben

**Stemperiode:** van 11 tot 17 oktober 2021

**Resultaten:**

tabel_agip8

[Link om te stemmen met Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmZnzgvkEzHvwkYPGLFQLtVvvoMzBXPWhznux1udHzbUim)

<hr />

### Stemkracht op basis van de Wearables' Maall Price
**Aavegotchi Voorstel Verbetering #9**

**Voorstel Samenvatting:** Voeg Stemkracht toe voor Wearables welke beheerd worden door Aavegotchis en in het stemadres.

Details van de AGIP zijn hier te vinden [hier](https://aavegotchi.medium.com/vote-agip8-and-agip9-give-voting-power-to-aavegotchis-and-wearables-9c113373a0a2).

Optie 1: Ja, geef Stemkracht aan Wearables op basis van de maximale prijs

Optie 2: Nee, Aavegotchis zou geen stemvermogen moeten hebben

**Stemperiode:** van 11 tot 17 oktober 2021

**Resultaten:**

tabel_agip9

[Link om te stemmen met Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/Qmat7jeAS1W3BBq7yDi2jkHjNoywmUEfrF2FdPiS9CcGHa)

<hr />

### Partnerschap tussen AavegotchiDAO, Pixelcraft, en DinoSwap
**Aavegotchi Voorstel Verbetering #10**

**Voorstel Samenvatting:** Sommige leden van de gemeenschap maken zich zorgen over de afnemende liquiditeit van GHST op Quickswap en hun geleidelijk dalende LP beloningen. In plaats van simpelweg meer liquiditeit toe te wijzen aan de pool, overwegen we om samen te werken met een snelle liquiditeitsaggregator genaamd DinoSwap. De voorwaarden omvatten een totaal van 200k USD ter waarde van GHST tokens die moeten worden toegewezen aan hun aanmoedigde ‘extinction pools’, waarvan de details hieronder zijn uitgewerkt.

Details van de AGIP zijn hier te vinden [hier](https://dao.aavegotchi.com/t/ghst-liquidity-rewards-on-new-launch-pixelcraft-dao-collaboration/1804).

Optie 1: Ja, laten we samenwerken met DinoSwap

Optie 2: Nee, geen partner met Dinoswap

**Stemperiode:** van 13 tot 20 oktober 2021

**Resultaten:**

tabel_agip10

[Link om te stemmen met Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmV3xdUskpTtd6JYyCgV7tjWeBGira2ZPFcdk2YDy3UPHE)

<hr />

### Liquidity Manager / FRENS Commissie
**Aavegotchi Voorstel Verbetering #11**

**Voorstel Samenvatting:**

*Probleem*

Om liquiditeit in QuickSwap te stimuleren, kunt u extra GRATIS beloningen ontvangen voor het staken van de Liquidity Pool (LP) tokens op de Aavegotchi website. Afhankelijk van het risico op onpermanente verliezen (IL) kunnen deze getallen verschillen, oorspronkelijk was het +35% voor GHST-QUICK, +20% voor GHST-ETH en +10% voor GHST-USDC. Omdat de tarieven manueel moeten worden aangepast en de prijzen sinds de invoering nogal wat zijn veranderd. zijn de FRENS beloningen heel veel uitgezet; GHST-QUICK is ongeveer +90%, terwijl GHST-USDC -10% verdient.

*Oplossing*

Geciteerd door [coderdan](/team#coder-dan): "Er is gesproken over het instellen van comités voor het beheer van bepaalde delen van Aavegotchi, Ik denk dat dit een interessante kandidaat zou kunnen zijn voor een dergelijke commissie. Op dit moment hebben we slechts twee [nu drie] paren die worden gestimuleerd door FRENS, maar dit kan in de toekomst veranderen.”

Het "comité" zou een multisig kunnen zijn van ten minste negen (misschien wel vijftien leden) leden met een sterke reputatie in de gemeenschap en hoge betrouwbaarheidstegenhangers van Gotchi. In de kern zou deze Liquidity-commissie de FRENS-tarieven controleren en aanpassen om de vooraf vastgestelde tarief in te kunnen spelen door het uitvoeren van contractuele aanroepen naar de GHST Staking contracten alleen beschikbaar voor een nieuwe "rateManager" rol die voor de commissie is gecreëerd

Voorlopig zou de commissie slechts één taak moeten hebben, namelijk het up-to-date houden van de FRENS-tarieven. In de toekomst zou dit kunnen worden uitgebreid tot partnerschappen, toezicht op de inflatie van de FRENS enz.

*Kandidaten*

Twee weken geleden hebben we een Discourse thread gemaakt (gekoppeld hierboven) voor belanghebbende partijen om zich kandidaat te stellen. Sindsdien hebben elf mensen zich aangemeld. Alle kandidaten zijn al een tijdje lid van de gemeenschap en hebben goede redenen om voor te kiezen. Aangezien dit nog steeds binnen het bereik van 9-15 ligt, is het het gemakkelijkst om de commissie samen te stellen met alle kandidaten.

Het is aan jullie, AavegotchiDAO. Moeten we deze stap zetten door Aavegotchi verder te decentraliseren en de FRENS in handen te geven van:

Angst, Jarrod, Kenymccornick, UnfitStone, Notorious_BTC, Doxy, Kokusho, Grip, Almond-Stew, Shanekoy en Moon

[Conversatie (Ide/voorstel)](https://dao.aavegotchi.com/t/committee-idea-liquidity-managers-for-managing-the-frens-s-of-liquidity-pairs/1905)

[Discourse Thread (Kandidaten)](https://dao.aavegotchi.com/t/frens-committee-applications/1944)

Optie 1: Ja, creëer de FRENS commissie

Optie 2: Nee, houd alles zoals het is

**Stemperiode:** van 17 tot 25 oktober 2021

**Resultaten:**

tabel_agip11

[Link om te stemmen met Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmdLouPY9ipn2ezC2RR5Fjcz8auhX1uLajk9QS8nrctfsY)

<hr />

### Start Haunt 2
**Core Prop**

**Voorstel Samenvatting:** Momenteel zijn Aavegotchis beperkt met een maximum van 10.000 omdat alleen Haunt 1 Portals bestaat. Dit maakt het verkrijgen van een eerste Aavegotchi onbetaalbaar. Met een tweede Haunt van nog 15.000 Portalen, willen we dit probleem aanpakken met inachtneming van unieke, verzamelbare aspecten van Haunt 1 Aavegotchis.

Onze visie is op een veel breder gebruik van speelbare NFT's, en de eerste stap om dat te bereiken betekent dat de schaarste memes achter moeten blijven en dat we ons moeten richten op het bieden van betekenisvolle unieke ervaringen aan meer mensen.

Details van de AGIP zijn hier te vinden [hier](https://dao.aavegotchi.com/t/coreprop-launch-haunt-2/2034)

Optie 1: Ja, start Haunt 2

Optie 2: Nee, start nu geen Haunt 2

**Stemperiode:** van 19 tot 26 oktober 2021

**Resultaten:**

tabel_launchHaunt2

[Link om te stemmen met Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmTuVnGnZSUC4uWRVQrd3HwmJATtvJVpjNikCkifChyJwY)

<hr />

### Voeg een Aging Mechanic toe om Aavegotchi rarity scores te beïnvloeden
**Aavegotchi Voorstel Verbetering #13**

**Voorstel Samenvatting:**

*Probleem*

Als nieuwe haunts worden vrijgegeven, of ze een bug fix bevatten die invloed heeft op de productie van gotchi eigenschappen, Er is een sterke verwatering van bestaande hoge BRS aan de gang. Vanwege de aard van RF en de beloningen, wordt deze verdunning uitsluitend gevoeld door degenen die veel in vorige Haunts hebben geïnvesteerd, en wie misschien niet de wens heeft om te verkopen vanwege emotionele bijstand, de middelen om meer te investeren, of de mogelijkheid om hun manier van ‘lip’ (door lokale belastingwetgevingen) te kunnen gebruiken in hogere BRS van de nieuwere haunts. Bovendien kan er in nieuwe haunts zeer grote statistische variatie optreden, het bijna onmogelijk maken om financiële langetermijnbesluiten te nemen, omdat de variatie eerdere haunt gewoon achterhaald kan maken. Dat laat veel te veel ruimte over aan "geluk".

*Oplossing*

De Aging Mechanic is een voorstel, dat oorspronkelijk door Tistou op discord is geïntroduceerd, en dat is bedoeld om alle bovengenoemde kwesties aan te pakken. Naast het creëren van een interessante nieuwe dynamiek van Aavegotchis waarop in de toekomst kan worden voortgebouwd (leeftijdsgrenzen voor activiteiten, wearables, nieuwe uiterlijkkwaliteiten, enz.). Het biedt een buffer van ongeveer zes maanden waarin oudere gotchis een BRS-boost hebben ten opzichte van nieuw opgewekte gotchis. Naarmate ze net naar gotchis kwamen, beginnen ze snel hun oudere tegenhangers in te halen.

In de geest van het gebruik van getallen die in de natuur voorkomen, wordt de formule gemodelleerd na de Fibonacci nummers x 1 miljoen. maar de eerste 0 vervangen door een 1 om beter bij het gebruik te passen. Concreet zijn de eerste 10 Fibonacci nummers (vervanging van de eerste 0) 1 1, 1, 2, 3, 5, 8, 13, 21, 34, waarvan de som 89 is. Het volgen van deze formule zou betekenen dat +1 BRS na 1 miljoen blokken, dan nog een +1 BRS na 2 miljoen blokken, nog een +1 BRS na 3 miljoen blokken, nog een +1 BRS na 5 miljoen blokken, …, tot een eindsom van +10 BRS na 89 miljoen blokken (ca. 6. jaren gebruik makend van de gemiddelde bloktijd van 2,3 seconden - het gemiddelde sinds 1 mei).

Deze oplossing zorgt voor een snellere boost in de eerste paar leeftijdsgroepen en vertraagt enorm na verloop van tijd veel om te voorkomen dat iets te OP is en laat meer recente gotchis uiteindelijk binnen een 1 BRS-punt van hun oudere en verstandigere broeder komen. Het stimuleert de opening en summoning van portalen in plaats van er op te gaan zitten, beiden verbeteren zowel de economie in het spel als de schaarste van portalen die nog steeds gesloten zijn. Bovenal is het een eerlijk systeem dat niemand ten goede komt op een ander gebied en betrokkenheid op de lange termijn beloont. terwijl we de effecten van plotselinge en agressieve verwatering tegengaan, zoals we nu zien.

*Aanpassingen gemaakt op oplossing*

* **De implementatie zal enigszins worden aangepast om de beschikbare datums van het geboorteblok te gebruiken in tegenstelling tot het bloknummer,** met epochtijden vooraf bepaald met dezelfde fibonacci intervallen voorgesteld in de sigprop en de huidige gemiddelde bloktijd. Dit maakt de implementatie veel eenvoudiger en maakt voorspelbare tijdlijnen mogelijk (omdat een bloktijd constante zou zijn, in tegenstelling tot variabele gebaseerd op onchain activiteit), daarnaast moet de functionaliteit van de mechanica worden gewaarborgd, indien zich in de toekomst eventuele veranderingen van het blockchainnetwerk of architectuur voordoen. De petting tijdsintervallen functioneren al in realtime en dus bestaat er een precedent hiervoor.

* **De 10 BRS cap is verwijderd.** De fibonacci intervallen fungeren zelf als een natuurlijke cap, omdat de tijd om verdere epochs te bereiken een exponentiële functie nadert. Het zal bijvoorbeeld meer dan 4 jaar duren om een extra BRS-bonus te krijgen (+11 totaal), en 6.5 jaren voor een volgende 10,5 jaar, enzovoorts.

* **De implementatie zou live gaan vóór het begin van Rarity Farming Seizoen 2.** Een van de doelen van aging is om een korte-termijnbuffer te bieden voor de effecten van statistische variatie wanneer er een nieuwe haunt wordt losgelaten. Om Haunt 1 al van dit voordeel te kunnen profiteren, moet de uitvoering zo snel mogelijk beginnen, zoals midden in seizoen 2 zou H2 ingelopen moeten zijn op de H1 bonus, met slechts een verschil van 1 tot 2 BRS.

Details van de AGIP zijn hier te vinden [hier](https://aavegotchi.medium.com/agip13-should-aavegotchi-introduce-an-aging-boost-5ee12e8c9f0)

Optie 1: Ja, implementeer aging stimulansen

Optie 2: Nee, voer nu niet uit

**Stemperiode:** van 2 tot 9 oktober 2021

**Resultaten:**

tabel_agip13

[Link om te stemmen met Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmcAQLdAyS9n7LWDu9qvRtdNqJa7FBStadrHq3xqjW9kCT)

<hr />

### Verdien FRENS met GHST-MATIC LP Tokens
**Aavegotchi Voorstel Verbetering #14**

**Voorstel samenvatting:** Polygon is een enorme reden voor het succes van Aavegotchi. Super lage transactiekosten betaald in MATIC hebben het team in staat gesteld een spel te bouwen waar veel activiteit plaatsvindt in de on-chain zoals petting, bid to earn veilingen, Baazaar verkopen en opslag van de Aavegotchi spelkunst.

Vanaf begin september begon Sushiswap met het bieden van 2x SUSHI beloningen voor het farmen van het GHST-MATIC LP paar op Sushiswap.

De FRENS Taask Force raadt aan om een FRENS incentive te betalen voor het GHST-MATIC LP pair op hun AMM.

We raden aan dat het doelpercentage van FRENS dat aan het GHST-MATIC LATIC LP paar wordt betaald hoger is dan de doelstimulans voor het GHST-ETH LP paar (120%) maar lager dan de doelstimulans voor het GHST-QUICK paar (135%).

Dit komt omdat het inpermanente verlies (IL) voor GHST-MATIC hoger is dan GHST-ETH maar lager dan GHST-QUICK. We raden een streefpercentage aan van 130 procent voor het GHST-MATIC LP-paar.

Momenteel bevindt het grootste deel van de liquiditeit van GHST zich op Quickswap.

Zie: [https://frens-taaskforce.vercel.app/](https://frens-taaskforce.vercel.app/)

Dit biedt een geweldige kans om een deel van de liquiditeit over te hevelen naar de algemeen aangenomen Sushiswap AMM en onze afhankelijkheid van Quickswap te verminderen.

Details van de AGIP zijn hier te vinden [hier](https://dao.aavegotchi.com/t/frens-incentive-for-matic-ghst-lp-pair-on-sushiswap/2336)

Optie 1: Ja, geef GRATIS aan GHHST-MATIC

Optie 2: Nee, geef geen GRATIS niet

**Stemperiode:** van 12 tot 19 oktober 2021

**Resultaten:**

tabel_agip14

[Link om te stemmen met Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0x42914b268d255efe0eea943d052e5dc7eab0cbbcde9d3cb809f027e3ea1f611f)

<hr />

### Maak een Wearables Taask Force
**Aavegotchi Voorstel Verbetering #15**

**Voorstel Samenvatting:**

*Motivatie*

Binnen het Aavegotchi ecosysteem spelen de wearables een vitale rol, of het nu BRS stimuleert voor rarity farming, het verbeteren van eigenschappen voor minigames, nut in de aankomende metaverse, of om ze gewoon te laten zien. Vanwege de complexiteit van de verschillende mogelijke assortimenten van gotchis, en de variëteit van mogelijke wearable statistieken, is het geen eenvoudige taak om tot een evenwichtige verdeling van de aan te dragen artikelen te komen. Het vrijgeven van nieuwe wearables zonder goede analyse kan leiden tot duplicatie (en verdunning) van bestaande items en een verdere scheuring van praktische sets voor gotchis met traits in een bepaalde richting.

*Specificatie*

Dit voorstel is gericht op de invoering van een Wearables Taask (WTF), waarvan het idee is voortgekomen uit discussies over bovengenoemde kwesties. Akin in the FRENS Taask Force, het doel van de WTO zou zijn om Pixelcraft te helpen bij het analyseren van de huidige verdeling van items binnen het ecosysteem vanvanuit een zeldzaamheid, en eigenaarschap modifiers perspectief, en in hoe deze analyse het best kan worden toegepast op toekomstige items. Deze Taask Force zou NIET de unilaterale mogelijkheid hebben om te bepalen wat en hoe nieuwe items worden vrijgegeven, maar zou volledig functioneren in een adviserende rol.

*Genomineerde*

Onder de genomineerden voor de Taask Force bevinden zich lange termijn gemeenschapsleden met een breed scala aan toepasselijke vaardigheden, inclusief statistische analyse, programmeer kennis, sterke ervaring in baazaar activiteit en voorafgaande DAO ervaring. Deze Taask Force zou veel baat hebben bij zoveel mogelijk stemmen en perspectieven, dus alle nominaties zijn opgenomen. De oprichting van deze Taask Force zou een grote stap voorwaarts zijn bij het creëren van een evenwichtiger ecosysteem en het helpen van de AavegotchiDAO.

**Volledige lijst met genomineerders:** Kuwlness, JG1 (Fantasma#1777), Beared, Actaeon, Thunderfish, Letsgobankless Kokusho, Ader1990.eth, Machete, Aimo217 (AL#4105), Notorious_BTC, MonsterRNG, Goobz, Diddlypoo

Details van de AGIP zijn hier te vinden [hier](https://dao.aavegotchi.com/t/wearables-taask-force/2350)

Optie 1: Ja, creëer de WTF

Optie 2: Nee, de WTF niet opzetten

**Stemperiode:** van 12 tot 19 oktober 2021

**Resultaten:**

tabel_agip15

[Link om te stemmen met Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0xa1f06ffcdd5f5d51c5f82022e8a25ecc7672252f8a47d9ee484b9fe3b6cd5b3a)

<hr />

### Stake 100k GHST om Minigame Beloningen te genereren
**Aavegotchi Voorstel Verbetering #16**

**Voorstel samenvatting:** Sommige frens hebben hun bezorgdheid geuit over het gebrek aan beloningen voor deelname aan Minigame evenementen. Aangezien er momenteel geen Aarcade Taask Force bestaat met een aangewezen budget Gotchinomics hebben het idee geopperd om 100k GHST in de schatkist te steken om toekomstige initiatieven te ondersteunen.

*Probleem*

Aavegotchi streeft ernaar een van de top Play2Earn projecten in de crypto gaming ruimte te zijn de lancering van het Gotchiverse Rijk is de hoeksteen voor het bereiken van dit langetermijndoel. Er is echter ruimte voor het verbeteren van de mogelijkheden op korte termijn door middel van seizoens evenementen. Het grootste probleem is het gebrek aan structuur en middelen.

*Oplossing*

Voordat u een speciale DAO van Aarcade creëert, is de eerste stap om play2earn beloningen in te schakelen en het creëren van een duurzame stroom van fondsen. Een eenvoudige oplossing zou zijn om een deel van de belangrijkste DAO schatkist te staken, zoals 100k GHST, om FRENS te genereren. Die kunnen dan worden getransformeerd in raffle tickets en worden weggegeven aan minispelers, door periodieke gebeurtenissen.

*Potentieel Risico*

Het uitzetten van GHST zal indirect een verwatering van FRENS/tickets betekenen. Omdat ze echter zouden worden verdeeld via mini-games, zou het effect minimaal moeten zijn in vergelijking met de verhoging van het engagement en het beroep op nieuwe mensen.

*Alternatieven*

Wacht tot de Aarcade DAO van start is gegaan en laat het nieuwe comité beslissen hoe middelen moeten worden aangewezen. Deze alternatieve optie zou echter betekenen dat kostbare tijd verloren gaat om aantrekkelijkere beloningen te genereren.

Details van de AGIP zijn hier te vinden [hier](https://dao.aavegotchi.com/t/creation-of-an-aarcade-dao/2128)

Optie 1: Ja, stake 100k GHST

Optie 2: Nee, wacht op Aarcade DAO

**Stemperiode:** van 10 tot 17 oktober 2021

**Resultaten:**

tabel_agip16

[Link om te stemmen met Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0xd654255f22e694369686e9791ff663f38a9f586bd4126831fc9d8ce384208964)

<hr />

### Toevoegen van Stemkracht aan REALM parcelen
**Aavegotchi Voorstel Verbetering #17**

**Voorstel Samenvatting:**

*Probleem:*

Met een nieuwe asset klasse toegevoegd aan de Aavegotchi familie in de vorm van realm percelen komt een nieuwe bron van GHST. Dit laat momenteel degenen die zwaar hebben geïnvesteerd in de nieuwe percelen met veel minder stemkracht in de Aavegotchi DAO.

*Oplossing:*

Omdat realmpercelen en de Gotchiverse zo'n integraal onderdeel zijn van het Aavegotchi ecosysteem, denk ik dat het alleen goed is dat realm-eigenaren een hoeveelheid stemrecht krijgen die evenredig is aan de grootte van hun Realm-plots. Dit zorgt ervoor dat hun stem kan worden gehoord, wat van bijzonder belang is wanneer toekomstige bestuursvoorstellen betrekking zullen hebben op de Gotchiverse.

Omdat elke plot een ingestelde grootte in pixels heeft, wat ook een schaalfactor is voor de hoeveelheid alchemica binnen het plot, het gedane voorstel is:

1 pixel = 1 GHST ter waarde van stemmen (64, 256, 2056) OF 1 pixel = 0.5 GHST waard van stemrecht (32, 128, 1028)

Een alternatief zou zijn om alle plot platte stemkracht te geven op basis van de veilingsverdieping. met een stem daarna, die het mogelijk maakt om de uiteindelijke stemverhoudingen te verfijnen, terwijl alle grondbezitters inspraak hebben.

Dit zou respectievelijk 100, 200 en 1300 GHST stemrecht geven aan humble, reasonable en spacious parcelen.

*CoreProp bewerkingen*

Een optie voor "Veiling verdieping" is ook toegevoegd. Dit brengt het stemverschil tot 20%, wat betekent dat elke optie 20% hoger moet zijn dan de volgende optie.

Details van de AGIP zijn hier te vinden [hier](https://dao.aavegotchi.com/t/voting-power-for-land-plots/2508)

Optie 1: Stemkracht van 0.5 GHST/pixel

Optie 2: Stemkracht van 1 GHST/pixel

Optie 3: Stemvermogen van veilingsvloer

Optie 4: geen stemrecht voor REALM

**Stemperiode:** van 10 tot 17 oktober 2021

**Resultaten:**

tabel_agip17

[Link om te stemmen met Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0x28b630e088240ee4bb4e680b071767b98b962a4006c71e71f00c782b86adfbab)

<hr />

### Gotchiverse Patch v0.1
**Aavegotchi Voorstel Verbetering #18**

**Voorstel Samenvatting:**

*Probleem:*

Hoewel de Gotchiverse nog niet live is, hebben we enkele gebieden geïdentificeerd die naar onze mening moeten worden aangepast voordat het spel wordt vrijgelaten. en wil deze zaken graag onder de aandacht van de gemeenschap brengen voor discussie en een besluit over het al dan niet uitvaardigen.

Om ervoor te zorgen dat geen enkele voorgestelde wijziging de hele partij kan terugdraaien, hebben we oorspronkelijk zes afzonderlijke momentopnames gemaakt. Deze CoreProp combineert de succesvolle SigProps met de eerste Gotchiverse Patch v0.1!

*Oplossing:*

Patch 0.1a

Op dit moment leggen we de belangrijkste details zoals bouwkosten en oogsttarieven voor de aanstaande Whitepaper, definitief vast. we ontdekten dat een van onze belangrijkste veronderstellingen de hoeveelheid Alchemica in elk pakje onderschat had ten opzichte van het totale aanbod. De patch zal de hoeveelheid Alchemica onder elk pakje verhogen zodat deze overeenkomt met de aanvankelijke voorraden en toewijzingen en emissietarieven.

De SigProp voor Patch 0.1a is doorgegeven aan de volgende nummers:

Ja: 13.14M GHST

Nee: 41.85k GHST

Patch 0.1a

Het was oorspronkelijk onze bedoeling om alleen een eenmalige boost te maken. het is duidelijk dat velen in de gemeenschap het GEO-document hebben geïnterpreteerd als een opleving van de middelen. Deze patch maakt het mogelijk om ook het parceel aan te vullen na elke Grote Strijd.

In tegenstelling tot parcelen is het aanvulleningspercentage echter een vast bedrag dat hetzelfde is per ronde. Bijvoorbeeld, een pakketje met "5" FUD boost ontvangt 5 porties FUD per boost ronde.

De SigProp voor Patch 0.1b is ook redelijk overtuigend gegaan:

Ja: 10.14M GHST

Nee: 2.85k GHST

Patch 0.1c

Zelfs met patch 0.1b geslaagd, boosts zullen nog steeds ondergewaardeerd worden vergeleken met de waarde die de markt ze heeft toegewezen, in relatie tot een vergelijkbaar parceel zonder boosten. Patch 0.1c stelt een verhogende boost voor met 5x om de waarde van een verhoging dichter bij de koers te brengen waar de markt op dit moment op waardeert.

De SigProp voor Patch 0.1c is niet geslaagd en ZAL NIET aanvaard worfden in Patch v0.1:

Ja: 5.14M GHST

Nee: 8.85k GHST

Toekomstige SigProps kunnen worden gemaakt om dit probleem afzonderlijk aan te pakken.

Patch 0.1a

De Gotchiverse Litepaper vermeldt dat Kinship zal worden ingeruild voor een dienst van Alchemica, in wezen een ‘verbranding’ kinship. We willen zeker het idee behouden van een ‘kinship boost’ voor channeling, maar na een diepgaandere bezinning zijn wij van mening dat er nu een betere manier is om dit te bereiken.

Een aanpak van “prestaties” vereist geen uitputting van de kinship van een Aavegotchi. In plaats daarvan zal hoge kinship Aavegotchis Alchemica Channelen tegen een iets hogere snelheid, afhankelijk van hun prestatieniveau.

De SigProp voor Patch 0.1d is ook doorgegeven:

Ja: 12.14M GHST

Nee: 431.85k GHST

Patch 0.1e & 0.1f

Districten bestonden niet als Citaadel concept toen de Litepaper voor het eerst werd gepubliceerd. Dat gezegd hebbende, hebben we altijd een gebied of gebieden voor Pixelcraft bedacht om diepgaande ervaringen te ontwikkelen die waarde toevoegen aan het hele spel. Een van onze vroegste ideeën, (voorafgegaan aan de Citaadel zelf!) was het reserveren van een plein in de stad voor realtime voor het stemmen met de DAO. Het idee van een spelende governance ervaring was een van de allereerste ideeën die de behoefte van Aavegotchi aan zijn eigen virtuele wereld zaaiden.

Patch 0.1e & 0.1f stelt voor om 1000 parcelen toe te wijzen aan Pixelcraft en de AavegotchiDAO in D27/D30. Beide patches kwamen overtuigend voorbij:

Ja: 11.94M GHST / 12.14M GHST

Nee: 615.78k GHST / 734.92K GHST

Besluit

En dat is het voor de eerste Gotchiverse Patch! Nu is het aan jullie, de AavegotchiDAO, om te beslissen of Patch v0.1 al dan niet moet worden toegepast.

Optie 1: Ja, implementeer Patch v0.1

Optie 2: Nee, voer nu niet uit

Details van de AGIP zijn hier te vinden [hier](https://dao.aavegotchi.com/t/gotchiverse-paatch-v0-1-thread/2791)

Optie 1: Ja, implementeer Patch v0.1

Optie 2: Nee, voer nu niet uit

**Stemperiode:** van 5 tot 12 oktober 2022

**Resultaten:**

tabel_agip18

[Link om te stemmen met Snapshot](https://vote.aavegotchi.com/#/proposal/0x396844d504394f7f335f070d443c33455300ee21d90db6c4b089760a3e0469bf)

<hr />

### GST Liquidity aanbieden op SynFutures
**Aavegotchi Voorstel Verbetering #19**

**Voorstel Samenvatting:**

Omdat Aavegotchi veel liquiditeit heeft verzameld op Spot DEXes, is het hoog tijd voor Aavegotchi om zijn Futures markt te creëren en te stimuleren. Derivatives markten vormen het grootste deel van de mondiale handelsactiviteit en geven gebruikers de mogelijkheid om hun investeringen te verhogen. Het toevoegen van GHST liquiditeit aan SynFutures zou mensen in staat stellen om longs (of shorts) te nemen op de toekomst van Aavegotchi. Maar waarom SynFutures?

Geweldige investeerders en teamachtergrond SynFutures worden ondersteund door Polychain, Pantera, Dragonfly, Framework, Standaard Crypto, Woo, en meer. De achtergrond van het team is een geweldige combinatie van traditionele financiën en DeFi. SynFutures is het enige project van zijn soort dat de lijst van assets door iedereen op een toelatige manier (in minder dan 30s) kan ondersteunen.

Beveiliging Ondersteunt door de solide ervaring in TradFi financial engineering and DeFi protocol security, heeft SynFutures veel risk management features (bijv.. anti-flashlening aanval, EMA vloeiende methode, enz.) en heeft externe codeaudits doorlopen.

Eenvoudig te beheren en te starten SynFutures ondersteunt een enkel token model om liquiditeit toe te voegen, wat betekent dat de Aavegotchi Schat alleen GHST hoeft te storten in plaats van twee tokens aan te bieden met het risico van impermanent verlies. We vragen om 200K GHST-tokens om de pool te starten. De liquiditeit kan op elk moment worden ingetrokken.

Groeipotentieel Handelsvolume en gebruikers groeien snel op SynFutures. De afgelopen 3 maanden sinds de SynFutures Alpha werd opgestart, bereikten we 47k-gebruikers van en $1bn+ in handelsvolume. Dit alles gebeurde zonder een autochtone SynFutures token, die nog meer gebruikers zou kunnen aantrekken.

Volumeanalyse Quickswap vs. SynFutures: Totale LPs: 150k / 40K Totale Handelsvolume: 100k / 20k Dagelijks handelsvolume: $100M / $29M

Het handelsvolume van de SynFutures bedraagt ~1/3e van QuickSwap, en de hoeveelheid handelaren is 1/5e zo groot als bij QuickSwap, Het handelsvolume van verschillende paren is echter meer geconcentreerd. SynFutures heeft 108 trading paren terwijl QuickSwap meer dan 22k paren heeft. Het dagelijkse handelsvolume van MATIC-USDC bij SynFutures sluit bijvoorbeeld op ongeveer $9 terwijl Quickswap $14 bereikt.

Details van de AGIP zijn hier te vinden [hier](https://dao.aavegotchi.com/t/provide-ghst-as-liquidity-on-the-derivatives-dex-synfutures/2664)

Optie 1: Ja, stake 100k GHST

Optie 2: Nee, voeg geen $200k aan GHST toe

**Stemperiode:** van 2 - 9 February 2022

**Resultaten:**

[Link om te stemmen met Snapshot](https://vote.aavegotchi.com/#/proposal/0x560e97ce27e9c99470a0a609e36d4c4cd20e948eae92691ea2ba2afb984e7e41)

<hr />

### Het creëren van de DAO Schatkist Taask Force
**Aavegotchi Voorstel Verbetering #20**

**Voorstel Samenvatting:**

We stellen voor om de DAO Schatkist Taask Force (DTF) op te richten. Dit comité zal in eerste instantie bestaan uit acht leden die het lidmaatschap binnen zes maanden opnieuw zullen beoordelen door de DAO.

Vanaf 12/07/2021 beschikt de DAO Schat (https://aavegotchi.com/treasury) bijna ~$11,408,400 ter waarde van DAI en GHST. In zijn oorspronkelijke vorm zal de commissie voorstellen voor behandeling voorleggen aan de DAO, die vervolgens in stemming zal worden gebracht en, indien goedgekeurd, zal worden goedgekeurd.

Voorgestelde missie verklaring

De Aavegotchi DAO Schatkist Taask Force is een dynamisch comité dat is toegewezen aan DAO schatkistmanagementvoorstellen ter overweging aan de gemeenschap en DAO heeft voorgelegd. De eerste missie en doelstellingen van de commissie zullen zijn: 1) de schatkist van de DAO ontwikkelen en optimaliseren met de nadruk op veiligheid, veiligheid en transparantie; 2) Partner met Pixelcraft om te helpen bij het ontwikkelen en identificeren van tools en infrastructuur voor lopende Schatbeheer; en 3) bevorderen en aanmoedigen van de groei van de Aavegotchi gemeenschap door het vergroten van het bewustzijn, het actief bevorderen van adoptie en het behouden van huidige gebruikersbetrokkenheid.

Initiële financiering

Na langdurige discussies met de taskforce, de gemeenschap en met coderdaan zou de DTF een eerste 50.000 GHST-begroting willen vragen. De 50.000 GHST budget zal worden overgeheveld van het Schat van de DAO naar de 8 handtekeningen Gnosis Safe. Deze begroting zal de flexibiliteit van de DAO enorm vergroten bij het stimuleren en belonen van betrokken gemeenschapsleden, ontwikkelaars, creatieven en algehele bijdragers. Dit budget zal nooit worden gebruikt om leden van het DTF te belonen. Het belangrijkste initiatief van de DTF zal zijn om een voorstel op te stellen voor het totale gebruik van de DAO-schatkist door een deel van de 10 miljoen dollar DAI/GHST te investeren in de rendementsopbrengst. Door het effectief inzetten van de DAO-schatkist, zouden zelfs bescheiden rendementen meer dan betalen voor het DTF-begrotingsverzoek. De DTF zal zorg dragen voor een uitgebreide boekhouding en de gemeenschap documenten verschaffen die met de nodige transparantie te maken hebben. Enkele potentiële toepassingen voor de begroting zijn het volgende:

* Beloon gemeenschap betrokkenheid en aarcade spelen
* Beloon spel ontwikkelaars en ontwerpers
* Beloon community applicatieontwikkelaars
* Beloon en erken de community artistieke bijdragen
* Beloon, erken en groei content makers en algemene marketinginspanningen
* Breid Aavegotchi en GHST's kansen uit voor gedecentraliseerde financiële toepassingen

De DTF ontwikkelt een gestructureerd plan en meerdere potentiële proefprojecten om deze fondsen zo goed mogelijk te benutten. We zullen werken aan de ontwikkeling van instrumenten om maximale transparantie bij het gebruik van de begroting mogelijk te maken. Voor uitgaven binnen deze 50.000 GHST begroting is geen goedkeuring van DAO nodig om een nuchter gebruik van de fondsen te maximaliseren. Voor verdere begrotingsverzoeken na de aanvankelijke 50.000 GHST zou een DAO-stemming nodig zijn.

De eerste 8 leden van de DTF

* BowtiedNerd
* Mori
* letsgobankloos
* Addison
* Deucehearts
* BackfireCapital
* Swappi
* Dr Wagmi

We waarderen de steun van de Aavegotchi gemeenschap en kijken uit naar ons eerste voorstel.

Details van de AGIP zijn hier te vinden [hier](https://dao.aavegotchi.com/t/establish-the-dao-treasury-taask-force/2460)

Optie 1: Ja, met 50k GHST budget

Optie 2: Ja, zonder 50k GHST budget

Optie 3: Nee, maak geen DTF aan

**Stemperiode:** van 2 tot 9 oktober 2022

**Resultaten:**

[Link om te stemmen met Snapshot](https://vote.aavegotchi.com/#/proposal/0x17f3eec096b26e87b3441f7cad53108f6933fd32ac67417de6ef7c94970502e4)

<hr />

### Naam van Aavegotchi Marketplace
**Momentopname Testen**

**Voorstel samenvatting:** Hoe moet de Aavegotchi NFT Marktplaats worden genoemd?

Aavegotchi lanceert zijn eigen NFT-marktplaats op Polygon in combinatie met het spel!

Hoe moeten we de officiële Aavegotchi Marketplace noemen?

Keuze A: Aavegotchi Baazaar

Keuze B: Aavegotchi Maarket

Keuze C: Geen

Het quorum voor deze stemming is vastgesteld op 500.000 GHST. Als het quorum niet is bereikt, kiest Pixelcraft een willekeurige winnaar.

Als "Geen" wint..., kunnen jullie beter met goede alternatieven beginnen!

**Stemperiode:** van 8 - 11 February 2021

**Resultaten:**

table_marketplacenaam

[Link om te stemmen met Snapshot](https://snapshot.page/#/aavegotchi.eth/proposal/QmRiRaQuwLuNr88yxvX61vtKM56NrY3KaMk4bk6w7g47fy)

<hr />

### Mogelijkheid voor GHST-USDC LP tokens om FRENS te verdienen

**Momentopname Testen**

**Voorstel samenvatting:** Moet GHST-USDC LP token in aanmerking komen om FRENS te verdienen?

Ons liquiditeitsmigratieprogramma is een groot succes geweest, waarbij al meer dan 8 miljoen GHST naar Polygon is gemigreerd. Echter, zoals veel leden van de gemeenschap hebben opgemerkt, liquiditeit voor het GHST-USDC paar is nog steeds niet diep genoeg om het handelen van grote hoeveelheden USDC voor GHST op Quickswap te ondersteunen.

Een manier om dit te verhelpen is door GHST-USDC toe te voegen als een paar in aanmerking voor FRENS op [https://aavegotchi.com/stake-polygon](https://aavegotchi.com/stake-polygon). Net zoals GHST-QUICK een ontvangst token stkGHST-QUICK heeft, kan GHST-USDC ook een stkGHST-USDC token hebben, die in aanmerking kan komen voor beloningen op Quickswap, als hun team dat nodig acht.

Aangezien dit besluit rechtstreeks van invloed is op gameplay, zijn wij van mening dat het een rijpe kandidaat is voor onze eerste Snapshot stemming op Polygon.

We stellen een GHST quorum van 500.000 vast voor deze stemming.

Het GHST-USDC LP token zal FRENS verdienen tegen dezelfde snelheid als enkel GHST, omdat inpermanente verliezen minimaal zijn en de kosten aanzienlijk zijn.

**Stemperiode:** van 8 - 11 February 2021

**Resultaten:**

tabel_ghstUsdcLp

[Link om te stemmen met Snapshot](https://snapshot.page/#/aavegotchi.eth/proposal/QmUpXPA5JF4ed9GUy5hNUTA7rT7VQjL7QXUTSxbtLQ1RqA)

<hr />

### Aantal portalen gekocht in één transactie

**Snapshot Voting**

**Proposal Summary:** How many Portals can be purchased in one transaction?

Discussion period has ended for this topic, and now it's time to vote! The most popular options were: 1, 5, and 10 Portals per transaction.

Our fren [@coderdannn](/team#coder-dan) also threw a spicy idea into the mix: an "Ape Tax" whereby higher numbers of Portals could be bought in a single transaction, but at a higher price. The Portals would be tiered as so:

* 0-5: 100 GHST each

* 6-15: 200 GHST each

* 16-25: 300 GHST each

So this leaves us with four options: 1, 5, 10, and 25 (w/ ape tax).

Let your $GHST token speak for you, and vote!

Voting period: 72 hrs Minimum quorum: 10% of GHST on Matic (~1.1M GHST)

AavegotchiDAO discussion topic 👇

[https://dao.aavegotchi.com/t/how-many-portals-should-be-bought-in-one-txn/17](https://dao.aavegotchi.com/t/how-many-portals-should-be-bought-in-one-txn/17)

**Voting Period:** 23 - 26 February 2021

**Resultaten:**

table_portalsPurchased

[Link om te stemmen met Snapshot](https://snapshot.page/#/aavegotchi.eth/proposal/QmUhKcn5YjKAPeGA1SfKQkNfw3P3hGRPgSGnTJGsfzw4Xi)