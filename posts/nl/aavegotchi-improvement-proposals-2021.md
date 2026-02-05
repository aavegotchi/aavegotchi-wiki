---
author: Coder Dan
date: '2020-04-23T07:00:00.000Z'
title: 'Aavegotchi Verbetervoorstellen (AGIP''s)'
description: 'A list of Aavegotchi Improvement Proposals (AGIPs) in Year 2021'
contributors: [ "unintelligent-nerd" ]
---

<div class="contentsBox">

**Inhoud**

<ol>
<li><a href=#add-fees-to-bonding-curve>Add fees to Bonding Curve</a></li>
<li><a href=#increase-daico-tap-for-ghst-purchases>Increase DAICO tap for GHST purchases</a></li>
<li><a href=#proposal-for-haunt-2>Proposal for Haunt 2</a></li>
<li><a href=#give-unique-non-transferable-background-to-haunt-1-aavegotchis>Give unique non-transferable Background to Haunt 1 Aavegotchis</a></li>
<li><a href=#add-fee-on-baazaar-to-support-rarity-farming>Add Fee on Baazaar to Support Rarity Farming</a></li>
<li><a href=#earn-xp-for-successful-signal-proposals>Earn XP for Successful Signal Proposals</a></li>
<li><a href=#voting-power-based-on-brs>Voting power based on BRS</a></li>
<li><a href=#voting-power-based-on-wearables--maall-price>Voting power based on Wearables' Maall Price</a></li>
<li><a href=#partnership-between-aavegotchidao--pixelcraft--and-dinoswap>Partnership between AavegotchiDAO, Pixelcraft, and DinoSwap</a></li>
<li><a href=#liquidity-manager---frens-committee>Liquidity Manager / FRENS Committee</a></li>
<li><a href=#launch-haunt-2>Launch Haunt 2</a></li>
<li><a href=#add-an-aging-mechanic-to-affect-aavegotchi-rarity-scores>Add an Aging Mechanic to affect Aavegotchi rarity scores</a></li>
<li><a href=#earn-frens-with-ghst-matic-lp-tokens>Earn FRENS with GHST-MATIC LP Tokens</a></li>
<li><a href=#create-a-wearables-taask-force>Create a Wearables Taask Force</a></li>
<li><a href=#stake-100k-ghst-to-generate-minigame-rewards>Stake 100k GHST to generate Minigame Rewards</a></li>
<li><a href=#adding-voting-power-to-realm-parcels>Adding Voting Power to REALM Parcels</a></li>
<li><a href=#name-of-aavegotchi-marketplace>Name of Aavegotchi Marketplace</a></li>
<li><a href=#eligibility-of-ghst-usdc-lp-tokens-to-earn-frens>Eligibility of GHST-USDC LP tokens to earn FRENS</a></li>
<li><a href=#portals-purchased-in-one-transaction>Portals purchased in one transaction</a></li>
</ol>

</div>

### Kosten toevoegen aan de Bonding Curve

**Aavegotchi Improvement Proposal #2**

**Proposal Summary:** The bonding curve is the main source of liquidity of GHST. Grote kopers en verkopers kunnen momenteel zonder kosten in- en uitkopen.

Onze marktmaker biedt de mogelijkheid om kosten toe te voegen aan koop- en verkooporders.

Meerdere leden van de gemeenschap hebben voorgesteld om kosten toe te voegen tot 0,3% om op de curve te kopen en te verkopen.

This is possible to do by calling the `updateFees` function on our bonding curve, but should we? Het is aan jullie, AavegotchiDAO.

Alle kosten die worden verdiend worden automatisch overgebracht naar het Schatkist adres van de DAO op 0xffe6280ae4e864d9af836b562359fd828ece8020 en wordt beschouwd als activa van AavegotchiDAO.

**Voting Period:** 18 - 21 January 2021

**Results:**

tabel_agip2

[Link to vote on Aragon UI](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/vote/1/)

<hr>

### Verhoog DAICO tik voor GHST aankopen

**Aavegotchi Improvement Proposal #3**

**Proposal Summary:** Player rewards and liquidity incentives are crucial to bootstrapping the Aavegotchi ecosystem to a level where it becomes self-sustained on trading volume and economic activity.

Wanneer GHST wordt uitgegeven in het Aavegotchi ecosysteem, wordt 33% automatisch verzonden naar een verbrand adres. In tegenstelling tot de meeste cryptocurrencies, verlaagt het verbranden van GHST (behalve via de bonding curve) de totale waarde van GHST, niet. omdat die waarde wordt opgeslagen als DAI in de verbindingscurve.

Wat verbranden doet is DAI binnen de band vallen, door de reserveratio na verloop van tijd te verhogen, wat de prijs van GHT stabiliseert.

Om de verbranding te compenseren (die GHST uiteindelijk in een stabiele munt kan veranderen), raden we de gemeenschap aan de kraan te verhogen tot 150.000 DAI per maand. Dit zal helpen om de reserve van de bondingscurve in evenwicht te brengen, terwijl het ook 50K DAI extra oplevert per maand die aan spelers beloningen en liquiditeit stimulansen worden gegeven.

**Voting Period:** 18 - 21 January 2021

**Results:**

tabel_agip3

[Link to vote on Aragon UI](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/vote/2/)

<hr>

### Voorstel voor Haunt 2

**Aavegotchi Improvement Proposal #4**

**Proposal Summary:** 10,000 Portals is arguably not enough to satisfy the current level of demand for Aavegotchis. Daarom kan het nodig zijn om een nieuwe Haunt in te zetten om ervoor te zorgen dat iedereen die wil deelnemen een Aavegotchi kan bezitten. Dit voorstel biedt vier verschillende opties die door leden van de gemeenschap zijn voorgesteld, waaronder één optie om geen nieuwe Haunt te maken.

Details on the AGIP can be found [here](https://aavegotchi.medium.com/vote-when-haunt-2-making-haunts-more-unique-d975cbda4772).

Optie 1: Geen nieuwe Haunt, revisie in een maand

Optie 2: 10K Portalen, 100 GHST elk, 1 per txn

Optie 3: 25K portalen, 100 GHST elk, 5 per txn (w/stricter ape belasting)

Optie 4: Voorverkoop, waarin elke portemonnee kan abonneren voor 1 Portaal in ruil voor 100 GHST. Wanneer de periode voorafgaand aan de verkoop afloopt, worden alle portalen gemint en overgedragen aan hun eigenaars.

**Voting Period:** 17 - 24 March 2021

**Results:**

tabel_agip4

**Vote Differential not met. No Haunt 2 for now!**

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmNqRry73rWXb9tdyHummihcK58ga83Ru15AJRF3beFJ35)

<hr>

### Geef unieke niet-overdraagbare achtergrond aan Haunt 1 Aavegotchis

**Aavegotchi Improvement Proposal #5**

**Proposal Summary:** Many players are worried that Haunt 2 will be too similar to Haunt 1 and the newly-created [Haunts](/haunt) will devalue the “Genesis” Haunt. Een van de suggesties is om elke Haunt speciale achtergronden te geven om ze gemakkelijk te identificeren. Dit voorstel heeft een uitstekende discussie en aanzienlijke steun voor de bijbehorende Snapshot gekend. Houd er rekening mee dat alle Aavegotchis, ongeacht het besluit van de DAO over deze kwestie, speciale niet-overdraagbare "Haunt" badges zullen krijgen die hun Haunt identificeren. Dit voorstel richt zich specifiek op het idee van een niet-overdraagbare achtergrond die kan worden uitgerust in de Aavegotchi's BG wearable slot.

Details on the AGIP can be found [here](https://aavegotchi.medium.com/vote-when-haunt-2-making-haunts-more-unique-d975cbda4772).

Optie 1: Alleen Haunt 1 heeft een speciale achtergrond

Optie 2: Elke Haunt moet zijn eigen unieke achtergrond hebben

Optie 3: Nee, laat het zoals het is

**Voting Period:** 17 - 24 March 2021

**Results:**

tabel_agip5

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmfBrnUmfsX57vXWchr1mUNkqMWNeF6edEqdQq11MCvMHJ)

<hr>

### Vergoeding toevoegen op Baazaar om Rarity Farming te ondersteunen

**Aavegotchi Improvement Proposal #6**

**Proposal Summary:** With the announcement of SZN1 Rewards now official, we explore how to align the community's interests and rewards structures, as it pertains to Baazaar fees.

Op dit moment is 2% aan Pixelcraft en 1% aan schatkist van de DAO. Hoewel niet exclusief tot het verstrekken van RF beloningen, de schatkistfondsen zijn op dit moment niet verplicht om elk seizoen in welke vorm dan ook toe te wijzen aan de RF pool. Het voorstel is erop gericht de Baazaar-vergoedingen te verhogen van 3 procent naar 3,5 procent, waarbij de extra 0,5 procent rechtstreeks naar de Rarity Farming Beloningen gaat.

Details on the AGIP can be found [here](https://aavegotchi.medium.com/core-proposal-agip6-add-0-5-fee-on-baazaar-to-support-rarity-farming-5bf923c7f528).

Optie 1: Ja, verhoog kosten van 3 tot 3.5

Optie 2: Nee, de kosten laten zoals ze zijn

**Voting Period:** 7 - 13 April 2021

**Results:**

tabel_agip6

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmPUueFJwpCz6rBiucnBYPLxTv2tetzxXWwCi2gSQFMJMW)

<hr>

### Verdien XP voor succesvolle Signaal Voorstellen

**Aavegotchi Improvement Proposal #7**

**Proposal Summary:** We currently have a lot of Signal / Community Proposals on Snapshot and new posts on our forum everyday. Tot nu toe kon geen van deze voorstellen zelfs maar het quorum van 20 procent bereiken. De populairste bij @JG over het toevoegen van extra kosten voor RF kreeg slechts 2 miljoen GHST in stemmen (~11%)-hoewel het team besloot om het als een kernvoorstel te beschouwen. Na een upgrade naar Core hebben we recht door het quorum gebroken in minder dan 24 uur.

Ik denk dat daar twee voor de hand liggende redenen voor zijn. Aan de ene kant is onze Snapshot op dit moment een beetje chaotisch, waarbij sommige Signal Proposals het sjabloon helemaal niet volgen. Aan de andere hand denk ik aan het feit dat stemmen op een kernvoorstel nu 20 ervaring (XP) voor uw Gotchi geeft.

Ik stel voor om een kleine afname van de ervaring (10 XP) toe te voegen voor mensen die op succesvolle Signal Voorstellen hebben gestemd, diegene die het quorum bereiken en worden opgewaardeerd tot Core Voorstellen. Het simpelweg laten vallen van XP voor alle Gemeenschapsvoorstellen kan leiden tot slechtere kwaliteitsinstellingen, wat niet het doel van dit voorstel zou moeten zijn.

Zelfs als 10 XP misschien niet veel is, het geeft mensen stimulansen om daadwerkelijk door de Signalen te kijken en te stemmen op kwalitatieve voorstellen, met een grotere kans op het bereiken van het quorum. Als DAO is betrokkenheid van de gemeenschap buitengewoon belangrijk en ik denk dat dit een kleine, maar fatsoenlijke stap in de goede richting is.

Als dit voorstel het quorum bereikt en doorgaat, zullen alle Aavegotchis die hun eigenaren aan het einde van de stemming 10 XP ontvangen!

Details on the AGIP can be found [here](https://aavegotchi.medium.com/vote-agip7-earn-xp-for-successful-signal-proposals-d5eafdb93aae).

Optie 1: Ja, succesvolle SigProps geven XP

Optie 2: Nee, SigProps mag geen XP geven

**Voting Period:** 12 - 18 May 2021

**Results:**

tabel_agip7

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmctiApzKZHoVsSpzWVfMVL1abRTUNXsoipupNGS52gEuZ)

<hr>

### Stemkracht gebaseerd op BRS

**Aavegotchi Improvement Proposal #8**

**Proposal Summary:** Add Voting Power for Aavegotchis held in a voter’s address, at a rate of 1 GHST per BRS (base rarity score, not including equipped wearables).

Details on the AGIP can be found [here](https://aavegotchi.medium.com/vote-agip8-and-agip9-give-voting-power-to-aavegotchis-and-wearables-9c113373a0a2).

Optie 1: Ja, geef Stemvermogen aan Aavegotchi gebaseerd op BRS

Optie 2: Nee, Aavegotchis zou geen stemvermogen moeten hebben

**Voting Period:** 11 - 17 June 2021

**Results:**

tabel_agip8

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmZnzgvkEzHvwkYPGLFQLtVvvoMzBXPWhznux1udHzbUim)

<hr>

### Stemkracht op basis van de Wearables' Maall Price

**Aavegotchi Improvement Proposal #9**

**Proposal Summary:** Add Voting Power for Wearables held by Aavegotchis and in the voting address.

Details on the AGIP can be found [here](https://aavegotchi.medium.com/vote-agip8-and-agip9-give-voting-power-to-aavegotchis-and-wearables-9c113373a0a2).

Optie 1: Ja, geef Stemkracht aan Wearables op basis van de maximale prijs

Optie 2: Nee, Aavegotchis zou geen stemvermogen moeten hebben

**Voting Period:** 11 - 17 June 2021

**Results:**

tabel_agip9

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/Qmat7jeAS1W3BBq7yDi2jkHjNoywmUEfrF2FdPiS9CcGHa)

<hr>

### Partnerschap tussen AavegotchiDAO, Pixelcraft, en DinoSwap

**Aavegotchi Improvement Proposal #10**

**Proposal Summary:** Some community members are worried about the waning liquidity of GHST on Quickswap and their gradually decreasing LP rewards. In plaats van simpelweg meer liquiditeit toe te wijzen aan de pool, overwegen we om samen te werken met een snelle liquiditeitsaggregator genaamd DinoSwap. De voorwaarden omvatten een totaal van 200k USD ter waarde van GHST tokens die moeten worden toegewezen aan hun aanmoedigde ‘extinction pools’, waarvan de details hieronder zijn uitgewerkt.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/ghst-liquidity-rewards-on-new-launch-pixelcraft-dao-collaboration/1804).

Optie 1: Ja, laten we samenwerken met DinoSwap

Optie 2: Nee, geen partner met Dinoswap

**Voting Period:** 13 - 20 June 2021

**Results:**

tabel_agip10

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmV3xdUskpTtd6JYyCgV7tjWeBGira2ZPFcdk2YDy3UPHE)

<hr>

### Liquidity Manager / FRENS commissie

**Aavegotchi Improvement Proposal #11**

**Proposal Summary:**

_Problem_

Om liquiditeit in QuickSwap te stimuleren, kunt u extra GRATIS beloningen ontvangen voor het staken van de Liquidity Pool (LP) tokens op de Aavegotchi website. Afhankelijk van het risico op onpermanente verliezen (IL) kunnen deze getallen verschillen, oorspronkelijk was het +35% voor GHST-QUICK, +20% voor GHST-ETH en +10% voor GHST-USDC. Omdat de tarieven manueel moeten worden aangepast en de prijzen sinds de invoering nogal wat zijn veranderd. zijn de FRENS beloningen heel veel uitgezet; GHST-QUICK is ongeveer +90%, terwijl GHST-USDC -10% verdient.

_Solution_

Quoted from [coderdan](/team#coder-dan):
"There has been talk of setting up committees for managing certain parts of Aavegotchi, and I believe this could be an interesting candidate for such a committee. Op dit moment hebben we slechts twee [nu drie] paren die worden gestimuleerd door FRENS, maar dit kan in de toekomst veranderen.”

Het "comité" zou een multisig kunnen zijn van ten minste negen (misschien wel vijftien leden) leden met een sterke reputatie in de gemeenschap en hoge betrouwbaarheidstegenhangers van Gotchi. In de kern zou deze Liquidity-commissie de FRENS-tarieven controleren en aanpassen om de vooraf vastgestelde tarief in te kunnen spelen door het uitvoeren van contractuele aanroepen naar de GHST Staking contracten alleen beschikbaar voor een nieuwe "rateManager" rol die voor de commissie is gecreëerd

Voorlopig zou de commissie slechts één taak moeten hebben, namelijk het up-to-date houden van de FRENS-tarieven. In de toekomst zou dit kunnen worden uitgebreid tot partnerschappen, toezicht op de inflatie van de FRENS enz.

_Candidates_

Twee weken geleden hebben we een Discourse thread gemaakt (gekoppeld hierboven) voor belanghebbende partijen om zich kandidaat te stellen. Sindsdien hebben elf mensen zich aangemeld. Alle kandidaten zijn al een tijdje lid van de gemeenschap en hebben goede redenen om voor te kiezen. Aangezien dit nog steeds binnen het bereik van 9-15 ligt, is het het gemakkelijkst om de commissie samen te stellen met alle kandidaten.

Het is aan jullie, AavegotchiDAO. Moeten we deze stap zetten door Aavegotchi verder te decentraliseren en de FRENS in handen te geven van:

Angst, Jarrod, Kenymccornick, UnfitStone, Notorious_BTC, Doxy, Kokusho, Grip, Almond-Stew, Shanekoy en Moon

[Discourse Thread (Idea/Proposal)](https://dao.aavegotchi.com/t/committee-idea-liquidity-managers-for-managing-the-frens-s-of-liquidity-pairs/1905)

[Discourse Thread (Candidates)](https://dao.aavegotchi.com/t/frens-committee-applications/1944)

Optie 1: Ja, creëer de FRENS commissie

Optie 2: Nee, houd alles zoals het is

**Voting Period:** 17 - 25 August 2021

**Results:**

tabel_agip11

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmdLouPY9ipn2ezC2RR5Fjcz8auhX1uLajk9QS8nrctfsY)

<hr>

### Start Haunt 2

**Core Prop**

**Proposal Summary:** Currently Aavegotchis are limited by a maximum possible 10,000 because only that many Haunt 1 Portals exist. Dit maakt het verkrijgen van een eerste Aavegotchi onbetaalbaar. Met een tweede Haunt van nog 15.000 Portalen, willen we dit probleem aanpakken met inachtneming van unieke, verzamelbare aspecten van Haunt 1 Aavegotchis.

Onze visie is op een veel breder gebruik van speelbare NFT's, en de eerste stap om dat te bereiken betekent dat de schaarste memes achter moeten blijven en dat we ons moeten richten op het bieden van betekenisvolle unieke ervaringen aan meer mensen.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/coreprop-launch-haunt-2/2034)

Optie 1: Ja, start Haunt 2

Optie 2: Nee, start nu geen Haunt 2

**Voting Period:** 19 - 26 July 2021

**Results:**

tabel_launchHaunt2

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmTuVnGnZSUC4uWRVQrd3HwmJATtvJVpjNikCkifChyJwY)

<hr>

### Voeg een Aging Mechanic toe om Aavegotchi rarity scores te beïnvloeden

**Aavegotchi Improvement Proposal #13**

**Proposal Summary:**

_Problem_

Als nieuwe haunts worden vrijgegeven, of ze een bug fix bevatten die invloed heeft op de productie van gotchi eigenschappen, Er is een sterke verwatering van bestaande hoge BRS aan de gang. Vanwege de aard van RF en de beloningen, wordt deze verdunning uitsluitend gevoeld door degenen die veel in vorige Haunts hebben geïnvesteerd, en wie misschien niet de wens heeft om te verkopen vanwege emotionele bijstand, de middelen om meer te investeren, of de mogelijkheid om hun manier van ‘lip’ (door lokale belastingwetgevingen) te kunnen gebruiken in hogere BRS van de nieuwere haunts. Bovendien kan er in nieuwe haunts zeer grote statistische variatie optreden, het bijna onmogelijk maken om financiële langetermijnbesluiten te nemen, omdat de variatie eerdere haunt gewoon achterhaald kan maken. Dat laat veel te veel ruimte over aan "geluk".

_Solution_

De Aging Mechanic is een voorstel, dat oorspronkelijk door Tistou op discord is geïntroduceerd, en dat is bedoeld om alle bovengenoemde kwesties aan te pakken. Naast het creëren van een interessante nieuwe dynamiek van Aavegotchis waarop in de toekomst kan worden voortgebouwd (leeftijdsgrenzen voor activiteiten, wearables, nieuwe uiterlijkkwaliteiten, enz.). Het biedt een buffer van ongeveer zes maanden waarin oudere gotchis een BRS-boost hebben ten opzichte van nieuw opgewekte gotchis. Naarmate ze net naar gotchis kwamen, beginnen ze snel hun oudere tegenhangers in te halen.

In de geest van het gebruik van getallen die in de natuur voorkomen, wordt de formule gemodelleerd na de Fibonacci nummers x 1 miljoen. maar de eerste 0 vervangen door een 1 om beter bij het gebruik te passen. Concreet zijn de eerste 10 Fibonacci nummers (vervanging van de eerste 0) 1 1, 1, 2, 3, 5, 8, 13, 21, 34, waarvan de som 89 is. Het volgen van deze formule zou betekenen dat +1 BRS na 1 miljoen blokken, dan nog een +1 BRS na 2 miljoen blokken, nog een +1 BRS na 3 miljoen blokken, nog een +1 BRS na 5 miljoen blokken, …, tot een eindsom van +10 BRS na 89 miljoen blokken (ca. 6. jaren gebruik makend van de gemiddelde bloktijd van 2,3 seconden - het gemiddelde sinds 1 mei).

Deze oplossing zorgt voor een snellere boost in de eerste paar leeftijdsgroepen en vertraagt enorm na verloop van tijd veel om te voorkomen dat iets te OP is en laat meer recente gotchis uiteindelijk binnen een 1 BRS-punt van hun oudere en verstandigere broeder komen. Het stimuleert de opening en summoning van portalen in plaats van er op te gaan zitten, beiden verbeteren zowel de economie in het spel als de schaarste van portalen die nog steeds gesloten zijn. Bovenal is het een eerlijk systeem dat niemand ten goede komt op een ander gebied en betrokkenheid op de lange termijn beloont. terwijl we de effecten van plotselinge en agressieve verwatering tegengaan, zoals we nu zien.

_Modifications made to Solution_

- **The implementation will be slightly modified to use the available onchain data of birth block timestamp as opposed to block number,** with epoch times predetermined using the same fibonacci intervals proposed in the sigprop and the current average block time. Dit maakt de implementatie veel eenvoudiger en maakt voorspelbare tijdlijnen mogelijk (omdat een bloktijd constante zou zijn, in tegenstelling tot variabele gebaseerd op onchain activiteit), daarnaast moet de functionaliteit van de mechanica worden gewaarborgd, indien zich in de toekomst eventuele veranderingen van het blockchainnetwerk of architectuur voordoen. De petting tijdsintervallen functioneren al in realtime en dus bestaat er een precedent hiervoor.

- **The 10 BRS cap is removed.** The fibonacci intervals themselves act as a natural cap, as the time to reach further epochs approximates an exponential function. Het zal bijvoorbeeld meer dan 4 jaar duren om een extra BRS-bonus te krijgen (+11 totaal), en 6.5 jaren voor een volgende 10,5 jaar, enzovoorts.

- **The implementation would go live prior to the beginning of Rarity Farming Season 2.** One of the goals of aging is to provide a short term buffer to the effects of statistical variance once a new haunt is released. Om Haunt 1 al van dit voordeel te kunnen profiteren, moet de uitvoering zo snel mogelijk beginnen, zoals midden in seizoen 2 zou H2 ingelopen moeten zijn op de H1 bonus, met slechts een verschil van 1 tot 2 BRS.

Details on the AGIP can be found [here](https://aavegotchi.medium.com/agip13-should-aavegotchi-introduce-an-aging-boost-5ee12e8c9f0)

Optie 1: Ja, implementeer aging stimulansen

Optie 2: Nee, voer nu niet uit

**Voting Period:** 2 - 9 October 2021

**Results:**

tabel_agip13

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmcAQLdAyS9n7LWDu9qvRtdNqJa7FBStadrHq3xqjW9kCT)

<hr>

### Verdien FRENS met GHST-MATIC LP Tokens

**Aavegotchi Improvement Proposal #14**

**Proposal Summary:** Polygon has been a huge reason behind the success of Aavegotchi. Super lage transactiekosten betaald in MATIC hebben het team in staat gesteld een spel te bouwen waar veel activiteit plaatsvindt in de on-chain zoals petting, bid to earn veilingen, Baazaar verkopen en opslag van de Aavegotchi spelkunst.

Vanaf begin september begon Sushiswap met het bieden van 2x SUSHI beloningen voor het farmen van het GHST-MATIC LP paar op Sushiswap.

De FRENS Taask Force raadt aan om een FRENS incentive te betalen voor het GHST-MATIC LP pair op hun AMM.

We raden aan dat het doelpercentage van FRENS dat aan het GHST-MATIC LATIC LP paar wordt betaald hoger is dan de doelstimulans voor het GHST-ETH LP paar (120%) maar lager dan de doelstimulans voor het GHST-QUICK paar (135%).

Dit komt omdat het inpermanente verlies (IL) voor GHST-MATIC hoger is dan GHST-ETH maar lager dan GHST-QUICK. We raden een streefpercentage aan van 130 procent voor het GHST-MATIC LP-paar.

Momenteel bevindt het grootste deel van de liquiditeit van GHST zich op Quickswap.

See: [https://frens-taaskforce.vercel.app/](https://frens-taaskforce.vercel.app/)

Dit biedt een geweldige kans om een deel van de liquiditeit over te hevelen naar de algemeen aangenomen Sushiswap AMM en onze afhankelijkheid van Quickswap te verminderen.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/frens-incentive-for-matic-ghst-lp-pair-on-sushiswap/2336)

Optie 1: Ja, geef GRATIS aan GHHST-MATIC

Optie 2: Nee, geef geen GRATIS niet

**Voting Period:** 12 - 19 November 2021

**Results:**

tabel_agip14

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0x42914b268d255efe0eea943d052e5dc7eab0cbbcde9d3cb809f027e3ea1f611f)

<hr>

### Maak een Wearables Taask Force

**Aavegotchi Improvement Proposal #15**

**Proposal Summary:**

_Motivation_

Binnen het Aavegotchi ecosysteem spelen de wearables een vitale rol, of het nu BRS stimuleert voor rarity farming, het verbeteren van eigenschappen voor minigames, nut in de aankomende metaverse, of om ze gewoon te laten zien. Vanwege de complexiteit van de verschillende mogelijke assortimenten van gotchis, en de variëteit van mogelijke wearable statistieken, is het geen eenvoudige taak om tot een evenwichtige verdeling van de aan te dragen artikelen te komen. Het vrijgeven van nieuwe wearables zonder goede analyse kan leiden tot duplicatie (en verdunning) van bestaande items en een verdere scheuring van praktische sets voor gotchis met traits in een bepaalde richting.

_Specification_

Dit voorstel is gericht op de invoering van een Wearables Taask (WTF), waarvan het idee is voortgekomen uit discussies over bovengenoemde kwesties. Akin in the FRENS Taask Force, het doel van de WTO zou zijn om Pixelcraft te helpen bij het analyseren van de huidige verdeling van items binnen het ecosysteem vanvanuit een zeldzaamheid, en eigenaarschap modifiers perspectief, en in hoe deze analyse het best kan worden toegepast op toekomstige items. Deze Taask Force zou NIET de unilaterale mogelijkheid hebben om te bepalen wat en hoe nieuwe items worden vrijgegeven, maar zou volledig functioneren in een adviserende rol.

_Nominees_

Onder de genomineerden voor de Taask Force bevinden zich lange termijn gemeenschapsleden met een breed scala aan toepasselijke vaardigheden, inclusief statistische analyse, programmeer kennis, sterke ervaring in baazaar activiteit en voorafgaande DAO ervaring. Deze Taask Force zou veel baat hebben bij zoveel mogelijk stemmen en perspectieven, dus alle nominaties zijn opgenomen.
De oprichting van deze Taask Force zou een grote stap voorwaarts zijn bij het creëren van een evenwichtiger ecosysteem en het helpen van de AavegotchiDAO.

**Full list of nominees:** Kuwlness, JG1 (Fantasma#1777), Bearded, Actaeon, Thunderfish, Letsgobankless, Kokusho, Ader1990.eth, Machete, Aimo217 (AL#4105), Notorious_BTC, MonsterRNG, Goobz, Diddlypoo

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/wearables-taask-force/2350)

Optie 1: Ja, creëer de WTF

Optie 2: Nee, de WTF niet opzetten

**Voting Period:** 12 - 19 November 2021

**Results:**

tabel_agip15

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0xa1f06ffcdd5f5d51c5f82022e8a25ecc7672252f8a47d9ee484b9fe3b6cd5b3a)

<hr>

### Stake 100k GHST om Minigame Beloningen te genereren

**Aavegotchi Improvement Proposal #16**

**Proposal Summary:** Some frens have expressed concern over the lack of rewards for participating in Minigame events. Aangezien er momenteel geen Aarcade Taask Force bestaat met een aangewezen budget Gotchinomics hebben het idee geopperd om 100k GHST in de schatkist te steken om toekomstige initiatieven te ondersteunen.

_Problem_

Aavegotchi streeft ernaar een van de top Play2Earn projecten in de crypto gaming ruimte te zijn de lancering van het Gotchiverse Rijk is de hoeksteen voor het bereiken van dit langetermijndoel. Er is echter ruimte voor het verbeteren van de mogelijkheden op korte termijn door middel van seizoens evenementen. Het grootste probleem is het gebrek aan structuur en middelen.

_Solution_

Voordat u een speciale DAO van Aarcade creëert, is de eerste stap om play2earn beloningen in te schakelen en het creëren van een duurzame stroom van fondsen. Een eenvoudige oplossing zou zijn om een deel van de belangrijkste DAO schatkist te staken, zoals 100k GHST, om FRENS te genereren. Die kunnen dan worden getransformeerd in raffle tickets en worden weggegeven aan minispelers, door periodieke gebeurtenissen.

_Potential risks_

Het uitzetten van GHST zal indirect een verwatering van FRENS/tickets betekenen. Omdat ze echter zouden worden verdeeld via mini-games, zou het effect minimaal moeten zijn in vergelijking met de verhoging van het engagement en het beroep op nieuwe mensen.

_Alternatives_

Wacht tot de Aarcade DAO van start is gegaan en laat het nieuwe comité beslissen hoe middelen moeten worden aangewezen. Deze alternatieve optie zou echter betekenen dat kostbare tijd verloren gaat om aantrekkelijkere beloningen te genereren.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/creation-of-an-aarcade-dao/2128)

Optie 1: Ja, stake 100k GHST

Optie 2: Nee, wacht op Aarcade DAO

**Voting Period:** 10 - 17 December 2021

**Results:**

tabel_agip16

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0xd654255f22e694369686e9791ff663f38a9f586bd4126831fc9d8ce384208964)

<hr>

### Toevoegen van Stemkracht aan REALM parcelen

**Aavegotchi Improvement Proposal #17**

**Proposal Summary:**

_Problem:_

Met een nieuwe asset klasse toegevoegd aan de Aavegotchi familie in de vorm van realm percelen komt een nieuwe bron van GHST. Dit laat momenteel degenen die zwaar hebben geïnvesteerd in de nieuwe percelen met veel minder stemkracht in de Aavegotchi DAO.

_Solution:_

Omdat realmpercelen en de Gotchiverse zo'n integraal onderdeel zijn van het Aavegotchi ecosysteem, denk ik dat het alleen goed is dat realm-eigenaren een hoeveelheid stemrecht krijgen die evenredig is aan de grootte van hun Realm-plots. Dit zorgt ervoor dat hun stem kan worden gehoord, wat van bijzonder belang is wanneer toekomstige bestuursvoorstellen betrekking zullen hebben op de Gotchiverse.

Omdat elke plot een ingestelde grootte in pixels heeft, wat ook een schaalfactor is voor de hoeveelheid alchemica binnen het plot, het gedane voorstel is:

1 pixel = 1 GHST ter waarde van stemmen (64, 256, 2056)
OF
1 pixel = 0.5 GHST waard van stemrecht (32, 128, 1028)

Een alternatief zou zijn om alle plot platte stemkracht te geven op basis van de veilingsverdieping. met een stem daarna, die het mogelijk maakt om de uiteindelijke stemverhoudingen te verfijnen, terwijl alle grondbezitters inspraak hebben.

Dit zou respectievelijk 100, 200 en 1300 GHST stemrecht geven aan humble, reasonable en spacious parcelen.

_CoreProp Edits_

Een optie voor "Veiling verdieping" is ook toegevoegd. Dit brengt het stemverschil tot 20%, wat betekent dat elke optie 20% hoger moet zijn dan de volgende optie.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/voting-power-for-land-plots/2508)

Optie 1: Stemkracht van 0.5 GHST/pixel

Optie 2: Stemkracht van 1 GHST/pixel

Optie 3: Stemvermogen van veilingsvloer

Optie 4: geen stemrecht voor REALM

**Voting Period:** 10 - 17 December 2021

**Results:**

tabel_agip17

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0x28b630e088240ee4bb4e680b071767b98b962a4006c71e71f00c782b86adfbab)

<hr>

### Name of Aavegotchi Marketplace

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

**Results:**

table_marketplaceName

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmRiRaQuwLuNr88yxvX61vtKM56NrY3KaMk4bk6w7g47fy)

<hr>

### Eligibility of GHST-USDC LP tokens to earn FRENS

**Snapshot Voting**

**Proposal Summary:** Should GHST-USDC LP token be eligible to earn FRENS?

Our liquidity migration program has been a huge success, with over 8M GHST migrated to Polygon already. However, as many community members have noted, liquidity for the GHST-USDC pair is still not deep enough to support trading large amounts of USDC for GHST on Quickswap.

We believe one way to remedy this is by adding GHST-USDC as a pair eligible for FRENS on [https://aavegotchi.com/stake-polygon](https://aavegotchi.com/stake-polygon). Just like GHST-QUICK has a receipt token stkGHST-QUICK, staked GHST-USDC can also emit a stkGHST-USDC token, which may be eligible for rewards on Quickswap, if their team deems it necessary.

Since this decision directly affects gameplay, we believe it is a ripe candidate for our first Snapshot vote on Polygon.

We are setting a 500,000 GHST quorum for this vote to be enacted.

The GHST-USDC LP token will earn FRENS at the same rate as just staking GHST, since impermanent loss is minimal and fees are significant.

**Voting Period:** 8 - 11 February 2021

**Results:**

table_ghstUsdcLp

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmUpXPA5JF4ed9GUy5hNUTA7rT7VQjL7QXUTSxbtLQ1RqA)

<hr>

### Portals purchased in one transaction

**Snapshot Voting**

**Proposal Summary:** How many Portals can be purchased in one transaction?

Discussion period has ended for this topic, and now it's time to vote! The most popular options were: 1, 5, and 10 Portals per transaction.

Our fren [@coderdannn](/team#coder-dan) also threw a spicy idea into the mix: an "Ape Tax" whereby higher numbers of Portals could be bought in a single transaction, but at a higher price. The Portals would be tiered as so:

- 0-5: 100 GHST each

- 6-15: 200 GHST each

- 16-25: 300 GHST each

So this leaves us with four options: 1, 5, 10, and 25 (w/ ape tax).

Let your $GHST token speak for you, and vote!

Voting period: 72 hrs
Minimum quorum: 10% of GHST on Matic (~1.1M GHST)

AavegotchiDAO discussion topic 👇

[https://dao.aavegotchi.com/t/how-many-portals-should-be-bought-in-one-txn/17](https://dao.aavegotchi.com/t/how-many-portals-should-be-bought-in-one-txn/17)

**Voting Period:** 23 - 26 February 2021

**Results:**

table_portalsPurchased

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmUhKcn5YjKAPeGA1SfKQkNfw3P3hGRPgSGnTJGsfzw4Xi)