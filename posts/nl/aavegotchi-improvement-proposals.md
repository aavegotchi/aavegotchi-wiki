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

As we were finalizing key details such as build costs and harvesting rates for the upcoming Whitepaper, we discovered that one of our key assumptions had undervalued the amount of Alchemica in each parcel relative to total supply. The patch will increase the amount of Alchemica under each parcel to match our initial Alchemica tokens’ supplies, allocations, and emissions rates.

The SigProp for Patch 0.1a passed with the following numbers:

Yes: 13.14M GHST

No: 41.85k GHST

Patch 0.1b

Although our original intention was to make boosts one-time only, it is clear that many in the community interpreted the GEO paper to mean that boosts would be replenished. This patch allows boosts to also replenish together with the parcel itself after each Great Battle.

However, unlike parcels, the replenish rate is a fixed amount that is the same per round. For example, a parcel with a “5” FUD boost receives 5 servings of FUD per boost round.

The SigProp for Patch 0.1b also passed pretty convincingly:

Yes: 10.36M GHST

No: 2.37M GHST

Patch 0.1c

Even with Patch 0.1b passed, boosts will still be undervalued compared to the value the market has assigned to them, relative to a similar parcel with no boosts. Patch 0.1c proposed increasing boosts by 5x to bring the value of a boost closer to what the market is currently valuing it at.

The SigProp for Patch 0.1c did not pass and WILL NOT BE INCLUDED in Patch v0.1:

Yes: 5.85M GHST

No: 8.04M GHST

Future SigProps may be created to address this issue separately.

Patch 0.1d

The Gotchiverse Litepaper mentions that Kinship will be exchanged for a serving of Alchemica, essentially “burning” kinship. We certainly want to maintain the idea of a “kinship boost” for channeling but after thinking more deeply, we now believe there is a better way to achieve this.

An “achievements” approach does not require depleting an Aavegotchi’s kinship. Instead, high kinship Aavegotchis will channel Alchemica at a slightly higher rate, depending on their achievement level.

The SigProp for Patch 0.1d also passed:

Yes: 12.64M GHST

No: 431.93k GHST

Patch 0.1e & 0.1f

Districts did not exist as a Citaadel concept when the Litepaper was first published. That said, we have always envisioned an area or areas for Pixelcraft to develop in-depth experiences that add value to the overall game. Likewise, one of our earliest ideas, (predating the Citaadel itself!) was to reserve a town square for real time DAO voting. The idea of having a gamified governance experience was one of the very earliest ideas seeding Aavegotchi’s need for its own virtual world.

Patch 0.1e & 0.1f proposed allocating 1000 parcels each to Pixelcraft and the AavegotchiDAO in D27/D30. Both Patches passed convincingly:

Yes: 11.94M GHST / 12.14M GHST

No: 615.78k GHST / 734.92k GHST

Conclusion

And that’s it for the first Gotchiverse Patch! Now it is up to you, the AavegotchiDAO, to decide if Patch v0.1 should be implemented or not.

Option 1: Yes, implement Patch v0.1

Option 2: No, do not implement Patch v0.1

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/gotchiverse-paatch-v0-1-thread/2791)

Option 1: Yes, implement Patch v0.1

Option 2: No, do not implement Patch v0.1

**Voting Period:** 5 - 12 January 2022

**Resultaten:**

table_agip18

[Link om te stemmen met Snapshot](https://vote.aavegotchi.com/#/proposal/0x396844d504394f7f335f070d443c33455300ee21d90db6c4b089760a3e0469bf)

<hr />

### GST Liquidity aanbieden op SynFutures
**Aavegotchi Improvement Proposal #19**

**Voorstel Samenvatting:**

Since Aavegotchi has gathered a lot of liquidity on Spot DEXes, it is high time for Aavegotchi to create and boost its Futures market. Derivatives markets make up the majority of global trading activity and allow users to leverage their investments. Adding GHST liquidity on SynFutures would allow people to take on leverage longs (or shorts) on the future of Aavegotchi. But why SynFutures?

Great investors and team background SynFutures is backed by Polychain, Pantera, Dragonfly, Framework, Standard Crypto, Woo, and more. The team’s background is a great combination of traditional finance and DeFi. SynFutures is the only project of its kind which can support the listing of any assets by anyone in a permissionless manner (in less than 30s).

Security Backed by solid experience from the TradFi financial engineering and DeFi protocol safety, SynFutures has many risk management features (e.g. anti-flashloan attack, EMA smoothing method, etc.) and has gone through external code audits.

Easy to manage and start SynFutures supports a single token model to add liquidity which means the Aavegotchi Treasury would only have to deposit GHST instead of offering two tokens with the risk of impermanent loss. We are asking for 200k worth of GHST tokens to kickstart the pool. The liquidity could be withdrawn anytime.

Growth Potential Trading volume and users are growing fast on SynFutures. For the past 3 months since the SynFutures Alpha launched, we reached 47k users of and $1bn+ in trading volume. All this happened without a native SynFutures token, which could attract even more users.

Volume analysis Quickswap vs. SynFutures: Total LPs: 150k / 40K Total traders: 100k / 20k Daily trading volume: $100M / $29M

SynFutures trading volume makes up ~1/3rd of QuickSwap, and the amount of traders is 1/5th as big as on QuickSwap, however, the trading volume for different pairs is more concentrated. SynFutures has 108 trading pairs while QuickSwap has more than 22k pairs. For example, the daily trading volume of MATIC-USDC on SynFutures closes in on around $9M, while Quickswap reaches $14M.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/provide-ghst-as-liquidity-on-the-derivatives-dex-synfutures/2664)

Option 1: Yes, add $200k in GHST

Option 2: No, do not add $200k in GHST

**Voting Period:** 2 - 9 February 2022

**Resultaten:**

[Link om te stemmen met Snapshot](https://vote.aavegotchi.com/#/proposal/0x560e97ce27e9c99470a0a609e36d4c4cd20e948eae92691ea2ba2afb984e7e41)

<hr />

### Het creëren van de DAO schatkist Taask Force
**Aavegotchi Improvement Proposal #20**

**Voorstel Samenvatting:**

We propose the creation of the DAO Treasury Taask Force (DTF). This committee will initially be composed of 8 members with reassessment of membership by the DAO within 6 months.

As of 12/07/2021, the DAO Treasury (https://aavegotchi.com/treasury) boasts nearly ~$11,408,400 worth of DAI and GHST. In its initial form, the committee will form proposals for consideration by the DAO which will subsequently be voted on and, if passed, enacted.

Proposed Mission Statement

The Aavegotchi DAO Treasury Taask Force is a dynamic committee assigned with making DAO treasury management proposals to the community and DAO for consideration. The initial mission and goals of the committee will be: 1) Grow and optimize the DAO treasury with an emphasis on safety, security and transparency; 2) Partner with Pixelcraft to assist in developing and identifying tools and infrastructure for ongoing DAO Treasury management; and 3) foster and encourage growth of the overall Aavegotchi community by increasing awareness, actively promoting adoption, and maintaining current user engagement.

Initial Funding

After lengthy discussions with the task force, the community, and with coderdan, the DTF would like to request an initial 50,000 GHST budget. The 50,000 GHST budget would be transferred from the DAO Treasury to the 8 multi-signature Gnosis Safe. This budget will greatly expand the flexibility of the DAO in incentivizing and rewarding engaged community members, developers, creatives, and overall contributors. This budget will never be used to reward members of the DTF. The DTF’s core main initiative will be to form a proposal for overall use of the DAO Treasury by investing some of the $10 million DAI/GHST in yield bearing opportunities. With effective deployment of the DAO Treasury, even modest returns would more than pay for the DTF budget request. The DTF will ensure comprehensive accounting and provide community facing documentation to ensure transparency. Some potential uses for the budget include the following:

* Reward community engagement and aarcade play
* Reward game developers and designers
* Reward community application developers
* Reward and acknowledge community art contributions
* Reward, acknowledge and grow content creators and general marketing efforts
* Expand Aavegotchi and GHST’s opportunities for decentralized financial applications

The DTF is developing a structured plan and multiple potential pilot projects to best utilize these funds. We will work to develop tools to allow maximum transparency into the budget use. Expenses within this 50,000 GHST budget would not require a DAO approval in order to maximize nimble use of the funds. Any further budget requests beyond the initial 50,000 GHST would require a DAO vote.

The initial 8 members of the DTF

* BowtiedNerd
* Mori
* letsgobankless
* Addison
* Deucehearts
* BackfireCapital
* Swappi
* Dr Wagmi

We appreciate the Aavegotchi community’s support and look forward to our first proposal.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/establish-the-dao-treasury-taask-force/2460)

Option 1: Yes, with 50k GHST budget

Option 2: Yes, without 50k GHST budget

Option 3: No, do not create the DTF

**Voting Period:** 2 - 9 February 2022

**Resultaten:**

[Link om te stemmen met Snapshot](https://vote.aavegotchi.com/#/proposal/0x17f3eec096b26e87b3441f7cad53108f6933fd32ac67417de6ef7c94970502e4)

<hr />

### Naam van Aavegotchi Marketplace
**Snapshot Voting**

**Proposal Summary:** What should the Aavegotchi NFT Marketplace be called?

Aavegotchi is launching its own NFT marketplace on Polygon in tandem with the game!

What should we call the official Aavegotchi Marketplace?

Choice A: Aavegotchi Baazaar

Choice B: Aavegotchi Maarket

Choice C: Neither

The quorum for this vote is set to 500,000 GHST. If quorum is not reached, Pixelcraft will draw straws.

If "Neither" wins...you guys better start coming up with some good alternatives!

**Voting Period:** 8 - 11 February 2021

**Resultaten:**

table_marketplaceName

[Link om te stemmen met Snapshot](https://snapshot.page/#/aavegotchi.eth/proposal/QmRiRaQuwLuNr88yxvX61vtKM56NrY3KaMk4bk6w7g47fy)

<hr />

### Mogelijkheid van GHST-USDC LP tokens om FRENS te verdienen

**Snapshot Voting**

**Proposal Summary:** Should GHST-USDC LP token be eligible to earn FRENS?

Our liquidity migration program has been a huge success, with over 8M GHST migrated to Polygon already. However, as many community members have noted, liquidity for the GHST-USDC pair is still not deep enough to support trading large amounts of USDC for GHST on Quickswap.

We believe one way to remedy this is by adding GHST-USDC as a pair eligible for FRENS on [https://aavegotchi.com/stake-polygon](https://aavegotchi.com/stake-polygon). Just like GHST-QUICK has a receipt token stkGHST-QUICK, staked GHST-USDC can also emit a stkGHST-USDC token, which may be eligible for rewards on Quickswap, if their team deems it necessary.

Since this decision directly affects gameplay, we believe it is a ripe candidate for our first Snapshot vote on Polygon.

We are setting a 500,000 GHST quorum for this vote to be enacted.

The GHST-USDC LP token will earn FRENS at the same rate as just staking GHST, since impermanent loss is minimal and fees are significant.

**Voting Period:** 8 - 11 February 2021

**Resultaten:**

table_ghstUsdcLp

[Link om te stemmen met Snapshot](https://snapshot.page/#/aavegotchi.eth/proposal/QmUpXPA5JF4ed9GUy5hNUTA7rT7VQjL7QXUTSxbtLQ1RqA)

<hr />

### Portalen gekocht in één transactie

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