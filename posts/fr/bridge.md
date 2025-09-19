---
author: Dev Barnyard
date: "2025-09-18T00:00:00.000Z"
title: "Ponts de connexion"
description: "Le pont Aavegotchi (et d'autres ponts pour transférer des actifs vers et depuis Polygon)"
contributors:
  - "barneychambers"
  - "unintelligent-nerd"
---

<div class="headerImageContainer">
<img class="headerImage" src="/bridge/aavegotchi-bridge.gif">
<p class="headerImageText">Le pont Aavegotchi</p>
</div>

Un pont est un logiciel qui vous permet de transférer des actifs d'une blockchain à une autre.

Le projet initial était de lancer Aavegotchi sur le réseau principal Ethereum le 4 janvier 2021. En raison de frais de gaz élevés, la communauté a voté pour le lancement du projet sur [Polygon Network](/glossary#polygon) à la place. À la suite de cette décision, les actifs doivent être reliés d'un réseau à l'autre.

Pour faciliter le transfert des actifs, Pixelcraft studios a créé le pont Aavegotchi qui permet aux utilisateurs de renvoyer des actifs entre les deux réseaux. Depuis, d'autres solutions passerelles sont également arrivées sur place. Cette page couvrira certains des ponts les plus courants.

<div class="contentsBox">

**Contenu**

<ol>
<li><a href=#aavegotchi-bridge>Le pont Aavegotchi</a></li>
<li><a href=#decentralized-bridges>Ponts décentralisés</a></li>
<p><a href=#polygon-bridge>Pont Polygon</a></p>
<p><a href=#umbria-narni-bridge>Pont Umbria Narni</a></p>
<p><a href=#base-bridges>Base Bridges</a></p>
<li><a href=#centralized-bridges>Ponts centralisés</a></li>
<p><a href=#ascendex>AscendEX</a></p>
<p><a href=#transak>Transak</a></p>
<p><a href=#crypto-com>Crypto.com</a></p>
<p><a href=#binance>Binance</a></p>
</ol>

</div>

## Le pont Aavegotchi


Le pont Aavegotchi est le pont officiel créé par Pixelcraft Studios. Historically it supported transfers between Ethereum and Polygon. As of 2024-2025, Aavegotchi has migrated to Base; for GHST to Base, use the canonical Ethereum↔Base bridge or fast bridges.

<img class="bodyImage" src="/bridge/aavegotchi-bridge.png" alt="Le pont Aavegotchi" />

Le pont Aavegotchi est accessible [ici](https://aavegotchi.com/bridge).

Ce qui suit est un exemple étape par étape de passerelle de jetons ERC-20 du réseau principal Ethereum vers Polygon:

1). Cliquez sur l'image du jeton (encerclé en rouge ci-dessous) pour ouvrir un menu déroulant de jetons. Sélectionnez le jeton à transférer vers Polygon.

<img class = "bodyImage" src = "/bridge/select-atoken-to-convert.png" alt = "Pont Aavegotchi à Matic" />

2). Inscrire le montant qui doit être transféré.

<img class = "bodyImage" src = "/bridge/amount-to-transfer-to-matic.png" alt = "Pont Aavegotchi à Matic" />

3). Cliquez sur le bouton "Approuver le transfert".

4). Cliquez sur le bouton "Transfert vers Polygon".

5). Attendez ~10 minutes pour que votre actif apparaisse sur le réseau Polygon.

Le même concept s'applique pour l'envoi d'actifs depuis Polygon Network vers Ethereum Mainnet.

## Ponts décentralisés

### Pont Polygon

Le pont Polygon fut le premier pont entre Ethereum et Polygon. Il est le pont officiel de l'équipe Polygon, et utilise un modèle de validateur pour transférer des actifs entre Ethereum et Polygon. This bridge can transfer \$GHST tokens, but cannot bridge NFT assets.

Pour ceux qui veulent utiliser le Pont Polygon, voici les étapes à franchir:

1). Accédez au Portefeuille Polygon Web v2 à [https://wallet.polygon.technology](https://wallet.polygon.technology). Cliquez sur le pont Polygon (encerclé en rouge ci-dessous).

<img class="bodyImage" src="/bridge/polygon-bridge-frontpage.png" alt="Pont Polygon" />

2). Sélectionnez le jeton dans le menu déroulant, insérez le montant dans la zone de texte, et cliquez sur le bouton Transfert

<img class="bodyImage" src="/bridge/polygon-bridge.png" alt="Pont Polygon" />

Cela peut prendre jusqu'à 10 minutes pour que les jetons arrivent dans votre adresse Polygon.

Si vous avez besoin d'aide pour quoi que ce soit vous pouvez rejoindre le [Discord](https://discord.com/invite/rttCTkZ) Aavegotchi et demander à un autre membre de la communauté.

### Pont Umbria Narni

Le pont Narni Bridge est une nouvelle solution de pont créée par Umbria Network, qui utilise un modèle de pont de liquidité pour réduire le coût de passerelle de 90 %. The Narni bridge resolves transactions in approximately 5 minutes, and costs approximately \$40 (100 GWEI) to transfer GHST tokens between the Ethereum and Polygon blockchains. Actuellement, seuls les jetons ERC-20 sont compatibles avec le pont Narni; les NFTs ne peuvent pas être transférés.

Pour utiliser le pont Umbria Narni, veuillez vous suivre les étapes suivantes :

1). Visitez le [Pont Umbria Narni](https://bridge.umbria.network/bridge). Sélectionnez les réseaux d'origine et de destination.

<img class="bodyImage" src='/bridge/umbria-network-selection.png' />

2). Dans le menu déroulant, sélectionnez le jeton à transférer.

<img class="bodyImage" src='/bridge/umbria-token-selection.png' />

3). Indiquez la quantité de jeton à transférer. Le pont Narni fournira une estimation de la quantité de jetons que vous recevrez après la passerelle. Le pont prend des frais de 0,5 % pour transférer les actifs entre les chaînes. Les frais sont versés aux fournisseurs de liquidités qui fournissent des actifs sur le pont Narni.

<img class="bodyImage" src='/bridge/umbria-fee-estimation.png' />

4). A ce moment, vous aurez 2 options (code QR ou MetaMask). Le pont avec MetaMask est l’approche recommandée. Il est également recommandé de sélectionner la vitesse la plus rapide que vous puissiez vous permettre pour minimiser le risque que la transaction soit temporairement bloquée.

<img class="bodyImage" src='/bridge/umbria-confirming-transaction.png' />

5). Après l'envoi de la transaction, une fenêtre s'affiche. La 1ère section affiche votre processus de transaction pour atteindre le pont de connexion. Une fois que votre transaction a atteint le pont de connexion, vous recevrez le premier tick. Cela peut prendre quelques minutes pour recevoir les deux ticks, mais si cela prend plus de 10 minutes, contactez l'équipe de l'Umbria sur Discord et ils vous aideront à résoudre le problème.

Enfin, vous recevrez deux ticks roses, ce qui signifie que votre transaction a été réalisée avec succès, et vous pourrez voir les actifs dans votre portefeuille sur la blockchain de destination. Vous serez également en mesure de voir la transaction sur l'explorateur de blocs de destination en cliquant sur le bouton approprié à l'écran à ce niveau.

<img class="bodyImage" src='/bridge/umbria-confirmation.png' />

Si vous avez des questions à propos du pont Umbria Narni, ou si vous souhaitez discuter avec un membre de l'équipe de développement, rejoignez le canal [Discord d'Ombrie](https://discord.gg/8Ms7Cr4)

### Base Bridges

For GHST on Base:

- Canonical bridge (Ethereum↔Base): Superbridge
- Fast bridges (Polygon↔Base): Bungee, Jumper (availability subject to providers)

Refer to the official blog post “GHST Token Is Now Live on Base” for current guidance.

## Ponts centralisés

### AscendEX

AscendEX (anciennement BitMax) est une plateforme de crypto-monnaie qui permet des retraits vers Polygon Network. Pour plus de détails, consultez les infographiques ci-dessous.

<img class = "bodyImage" src = "/bridge/Using_AscendEX_and_play_Aavegotchi.jpg" alt = "Utiliser AscendEX pour jouer à Aavegotchi" />

### Transak

Transak est une passerelle de paiement fiduciaire à cryptomonnaie. Les utilisateurs paient en utilisant leur carte de crédit et reçoivent les jetons sur l'adresse de portefeuille qu'ils ont spécifiée.

Consultez ce [message](https://trasher.substack.com/p/buying-your-tokens-straight-into) d'un membre de la communauté pour un guide étape par étape.

### Crypto.com

Crypto.com est un portefeuille d'applications mobiles. Ils permettent le retrait de MATIC et USDC vers Polygon Network.

1). Sélectionnez Transfert --> Retirer --> Crypto --> Portefeuille externe

2). Cliquez sur le signe + dans le coin supérieur droit

3). Sélectionnez le jeton à retirer. Si le retrait est disponible pour ce jeton en particulier, vous verrez une option pour « Polygon » dans le champ « Sélectionner un réseau » (voir capture d'écran ci-dessous).

<img class="bodyImage" src="/bridge/cryptocom-withdrawal.png" alt="Retrait sur Crypto.com pour Polygon" />

### Binance

Binance is one of the largest cryptocurrency exchanges in the world.

As of 31st May 2022, they have [enabled GHST deposits and withdrawals directly on Polygon](https://blog.aavegotchi.com/binance-enables-ghst-deposits-and-withdrawals-on-polygon/).

<img class="bodyImage" src="/bridge/ghst-withdrawal-from-binance-to-polygon.png" alt="GHST withdrawal from Binance to Polygon" />
