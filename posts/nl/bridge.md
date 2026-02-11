---
author: Dev Barnyard
date: "2025-09-18T00:00:00.000Z"
title: "Brug"
description: "De Aavegotchi brug (en andere bruggen om Assets van en naar Polygon te verplaatsen)"
contributors:
  - "barneychambers"
  - "unintelligent-nerd"
---

<div class="headerImageContainer">
<img class="headerImage" src="/bridge/aavegotchi-bridge.gif">
<p class="headerImageText">De Aavegotchi Brug</p>
</div>

Een brug is een stukje software waarmee je activa van de ene blockchain naar de andere kunt overdragen.

Het oorspronkelijke plan was om Aavegotchi op Ethereum Mainnet op 4 januari 2021 te lanceren. Vanwege hoge gaskosten heeft de gemeenschap gestemd voor het starten van het project op [Polygon-netwerk](/glossary#polygon) in plaats daarvan. Als gevolg van dit besluit moeten activa worden overbrugd van het ene netwerk naar het andere.

Om de overdracht van activa te vergemakkelijken, heeft Pixelcraft studios de Aavegotchi Bridge gemaakt waarmee gebruikers assets heen en weer kunnen verzenden over beide netwerken. Sindsdien zijn ook andere brugoplossingen ter plaatse gearriveerd. Deze pagina zal enkele van de meest voorkomende bruggenbedekken.

<div class="contentsBox">

**Inhoud**

<ol>
<li><a href=#aavegotchi-bridge>De Aavegotchi Brug</a></li>
<li><a href=#decentralized-bridges>Gedecentraliseerde Bruggen</a></li>
<p><a href=#polygon-bridge>Polygon Brug</a></p>
<p><a href=#umbria-narni-bridge>Umbria Narni Bridge</a></p>
<p><a href=#base-bridges>Base Bridges</a></p>
<li><a href=#centralized-bridges>Gecentraliseerde Bruggen</a></li>
<p><a href=#ascendex>AscendEX</a></p>
<p><a href=#transak>Transak</a></p>
<p><a href=#crypto-com>Crypto.com</a></p>
<p><a href=#binance>Binance</a></p>
</ol>

</div>

## De Aavegotchi Brug


De Aavegotchi Brug is de officiële brug gemaakt door Pixelcraft Studios. Historically it supported transfers between Ethereum and Polygon. As of 2024-2025, Aavegotchi has migrated to Base; for GHST to Base, use the canonical Ethereum↔Base bridge or fast bridges.

<img class="bodyImage" src="/bridge/aavegotchi-bridge.png" alt="De Aavegotchi Brug" />

De Aavegotchi Brug kan [hier](https://aavegotchi.com/bridge) benaderd worden.

Het volgende is een stapsgewijze voorbeeld van het overbrugen van ERC-20 tokens van Ethereum Mainnet naar Polygon:

1). Klik op de tokenafbeelding (cirkeld in rood hieronder) om een dropdown menu van tokens te openen. Selecteer het token dat naar Polygon moet worden overgedragen.

<img class = "bodyImage" src = "/bridge/select-atoken-to-convert.png" alt = "Aavegotchi Brug naar Matic" />

2). Bepaal het bedrag dat moet worden overgedragen.

<img class = "bodyImage" src = "/bridge/amount-to-transfer-to-matic.png" alt = "Aavegotchi Brug naar Matic" />

3). Klik op de "Overdracht goedkeuren".

4). Klik op de knop "Transfer to Polygon".

5). Wacht ~10 minuten tot je asset op het Polygon-netwerk verschijnt.

Hetzelfde concept is van toepassing voor het terugsturen van activa naar Ethereum Mainnet vanuit het Polygon Network.

## Gedecentraliseerde Bruggen

### Polygon Brug

De Polygon-brug was de eerste brug tussen Ethereum en Polygon. Het is de officiële brug van het Polygon-team, en gebruikt een door validator gedreven model om activa tussen Ethereum en Polygon over te dragen. This bridge can transfer \$GHST tokens, but cannot bridge NFT assets.

Voor degenen die de Polygon-brug willen gebruiken, zijn hier de stappen die moeten worden gezet:

1). Toegang tot de Polygon Web Wallet v2 op [https://wallet.polygon.technology](https://wallet.polygon.technology). Klik op de Polygon Brug (omsingeld in het rood hieronder).

<img class="bodyImage" src="/bridge/polygon-bridge-frontpage.png" alt="Polygon Brug" />

2). Selecteer de token uit het dropdown menu, geef in het bedrag in het tekstvak en klik op de Overdracht knop

<img class="bodyImage" src="/bridge/polygon-bridge.png" alt="Polygon Brug" />

Het kan tot 10 minuten duren voordat de tokens in uw Polygoon-adres aankomen.

Als je hulp nodig hebt met iets dat je kan toetreden tot de Aavegotchi [Discord](https://discord.com/invite/rttCTkZ) en vraag een medelid van de gemeenschap aan.

### Umbria Narni Bridge

De Narni brug is een nieuwe brugoplossing gemaakt door Umbria Network, die gebruik maakt van een liquide brug model om de overbruggingskosten met 90 procent te verlagen. The Narni bridge resolves transactions in approximately 5 minutes, and costs approximately \$40 (100 GWEI) to transfer GHST tokens between the Ethereum and Polygon blockchains. Momenteel zijn alleen ERC-20 tokens compatibel met de Narni bridge; NFT's kunnen niet worden overbrugd.

Raadpleeg de volgende stappen om Umbria Narni Bridge te gebruiken:

1). Bezoek de [Umbria Narni Bridge](https://bridge.umbria.network/bridge). Selecteer de vertrek en bestemming netwerken.

<img class="bodyImage" src='/bridge/umbria-network-selection.png' />

2). Selecteer in het dropdown menu het token dat moet worden overbrugd.

<img class="bodyImage" src='/bridge/umbria-token-selection.png' />

3). Geef in de hoeveelheid te overbruggen token. De Narni bridge geeft een schatting van het aantal tokens dat u na de brug ontvangt. De brug kost 0,5% om activa tussen chains te overbruggen. De vergoedingen gaan naar de liquiditeitsaanbieders die activa op de brug van Narni leveren.

<img class="bodyImage" src='/bridge/umbria-fee-estimation.png' />

4). Op het punt van de bridge krijg je 2 opties (QR-code of MetaMask). Bridging met MetaMask is de aanbevolen aanpak. Het wordt ook aanbevolen om de snelste snelheid te selecteren die u zich kunt veroorloven om het risico te minimaliseren dat de transactie tijdelijk vastloopt.

<img class="bodyImage" src='/bridge/umbria-confirming-transaction.png' />

5). Na het verzenden van de transactie, zal een modal worden weergegeven. De 1ste sectie toont je transactieproces om de bridge te bereiken. Zodra uw transactie de bridge heeft bereikt, ontvangt u de eerste tik. Het kan een paar minuten duren voordat je beide ticks ontvangt, maar als het langer dan 10 minuten duurt, Neem contact op met het Umbria-team op Discord en ze helpen je het probleem op te lossen.

Tot slot ontvang je twee roze ticks, wat betekent dat je transactie succesvol is overbrugd, en je kunt de assets in je portemonnee zien op de bestemming van de blockchain. Je kunt de transactie op de doelblok verkenner ook zien door op de relevante knop op het scherm te klikken.

<img class="bodyImage" src='/bridge/umbria-confirmation.png' />

Als je vragen hebt over de Umbria Narni Bridge, of wil je graag chatten met een lid van de supportafdeling van het ontwikkelingsteam. neem contact op met het [Umbria Discord kanaal](https://discord.gg/8Ms7Cr4)

### Base Bridges

For GHST on Base:

- Canonical bridge (Ethereum↔Base): Superbridge
- Fast bridges (Polygon↔Base): Bungee, Jumper (availability subject to providers)

Refer to the official blog post “GHST Token Is Now Live on Base” for current guidance.

## Gecentraliseerde Bruggen

### AscendEX

AscendEX (voorheen BitMax) is een cryptocurrency platform waarmee opnames naar het Polygon Netwerk mogelijk zijn. Bekijk de infographic hieronder voor meer details.

<img class = "bodyImage" src = "/bridge/Using_AscendEX_and_play_Aavegotchi.jpg" alt = "AscendEX gebruiken om Aavegotchi te spelen" />

### Transak

Transak is een fiat-to-crypto betalingsgateway. Gebruikers betalen met hun creditcard en ontvangen de tokens op het wallet adres dat ze hebben opgegeven.

Zie dit [bericht](https://trasher.substack.com/p/buying-your-tokens-straight-into) van ons community lid voor een stap-voor-stap handleiding.

### Crypto.com

Crypto.com is een mobiele app portemonnee. Ze maken opname van MATIC en USDC in het Polygon-netwerk mogelijk.

1). Selecteer overdracht --> Opnemen --> Crypto --> Externe Wallet

2). Klik op het + teken aan de rechterbovenhoek

3). Selecteer de token dat moet worden ingetrokken. Als er een opname beschikbaar is voor dat specifieke token, zie je een optie voor "Polygon" in het veld "Netwerk selecteren" (zie de schermafbeelding hieronder).

<img class="bodyImage" src="/bridge/cryptocom-withdrawal.png" alt="Uitnemen van Crypto.com naar Polygon" />

### Binance

Binance is one of the largest cryptocurrency exchanges in the world.

As of 31st May 2022, they have [enabled GHST deposits and withdrawals directly on Polygon](https://blog.aavegotchi.com/binance-enables-ghst-deposits-and-withdrawals-on-polygon/).

<img class="bodyImage" src="/bridge/ghst-withdrawal-from-binance-to-polygon.png" alt="GHST withdrawal from Binance to Polygon" />
