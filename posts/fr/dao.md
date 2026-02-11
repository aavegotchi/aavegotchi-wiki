---
author: Coder Dan
date: '2020-04-23'
title: 'AavegotchiDAO'
description: 'Tout sur la DAO d''Aavegotchi'
image: "icons/dao.svg"
contributors:
  - "vanilladelphia"
  - "cinnabarhorse"
  - "hackingmoneyph"
---

<div class="headerImageContainer">
<img class="headerImage" src="/dao/dao.png">
<p class="headerImageText">La crête AavegotchiDAO</p>
</div>

Une [DAO](glossary#dao) est une forme décentralisée de gouvernance, qui permet aux détenteurs de jetons de voter afin de choisir la façon dont l'organisation prend des décisions.

Aavegotchi suit les traces de protocoles DeFi réussis tels que Compound et Synthetix en suivant un processus de « décentralisation progressive », en commençant par l'équipe fondatrice, Pixelcraft Studios organisant un événement de distribution de jetons (DAICO) dirigé par la DAO et culminant en plaçant la gouvernance d'Aavegotchi, y compris tous les mécanismes de jeu, les contrats intelligents, et le financement, sous les auspices de l'AavegotchiDAO, mais toujours soumis à l'environnement réglementaire dominant. Cela se fera en trois phases.

<div class="contentsBox">

**Contenu**

<ol>
<li><a href=#genesis>Genèse</a></li>
<li><a href=#cocoon>Cocon</a></li>
<li><a href=#metamorphosis>Métamorphose</a></li>
<li><a href=#oasis>Oasis</a></li>
<li><a href=#participating-in-governance>Participer à la gouvernance</a></li>
<li><a href=#aavegotchidao-forum>Forum AavegotchiDAO</a></li>
<li><a href=#type-of-proposals>Type de propositions</a></li>
<li><a href=#vote-differentials>Différences de vote</a></li>
<li><a href=#creating-signal-proposals>Création de propositions Signal</a></li>
<li><a href=#voting>Vote</a></li>
<li><a href=#aavegotchi-improvement-proposals--agips->Proposition d'Amélioration d'Aavegotchi (AGIPs)</a></li>
<li><a href=#treasury>Trésorerie</a></li>
</ol>

</div>

## Genèse

*Voir* [DAICO](/curve#aavegotchi-daico).

La première itération du AavegotchiDAO a été lancée en tandem avec la distribution GHST sur la courbe de liaison. Les détenteurs de GHST ont eu le pouvoir de voter pour augmenter / maintenir les fonds distribués par le mécanisme de la [courbe de liaison de jetons (TBC)](/curve) réservé à Pixelcraft Studios (l'équipe derrière Aavegotchi) pour soutenir le développement. La première proposition AavegotchiDAO d'augmenter le "tapage" d'Aavegotchi DAICO à partir de 50, 00 DAI à 100 000 DAI par mois est passés avec une approbation de 99 % le 18 octobre 2020. Lorsque le moment sera venu de migrer vers AavegotchiDAO Metamorphose, les détenteurs de jetons voteront également pour effectuer la migration.

Les détenteurs de jetons ne recevront pas de récompenses en GHST pour leur participation active à cette itération d'AavegotchiDAO.

Les caractéristiques de la Genèse comprennent :

* Aucun appel de smart contract
* Aucune amélioration du contrat
* Gouvernance basée sur les jetons GHST
* Plateforme: Aragon
* Récompenses : Aucune
* Couche : Réseau principal Ethereum

## Cocon

V1.5 d'AavegotchiDAO. Le point intermédiaire entre [Genèse](/dao#genesis) et [Métamorphose](/dao#metamorphosis). La priorité l'étape Cocoon est d'influencer la mécanique du jeu.

Ses caractéristiques principales sont les suivantes :

* Appels de contrat éffectué par Pixelcraft
* Aucune amélioration du contrat
* Gouvernance basée sur les jetons GHST
* Plateforme : Snapshot/Discours
* Récompenses : [XP](/traits#experience) pour les votes de base (Core)
* Couche : Polygon

Il y a deux types de votes à l'étape Cocoon: (1) Proposition de signal, et (2) Proposition fondamentale (Core).

Une proposition Signal peut être postée par n'importe qui dans l'onglet Communauté sur [Snapshot](https://snapshot.org/#/aavegotchi.eth). Ces votes ne sont pas contraignants, mais si le quorum est atteint, la proposition sera automatiquement mise à jour en une proposition de base contraignante (Core). Avant de présenter une proposition Signal, il est obligatoire d'en discuter avec la communauté sur Discord et/ou [Discours/AavegotchiDAO Forum](https://dao.aavegotchi.com/). Le raisonnement est de continuer à s'organiser et de découvrir s'il y a un soutien digne à faire avancer la proposition de signal. Veuillez suivre le modèle trouvé dans la section [Créer des propositions de Signal](/dao#creating-signal-proposals).

La proposition Signal sera mise à niveau vers une proposition de base dès que la première aura atteint un quorum atteignant 20 % de la circulation de GHST pouvant voter sur Polygon au moment de la création de la proposition.

Une proposition de base est une proposition que Pixelcraft soumet, avec des options basées sur des propositions Signal qui ont atteint ou presque atteint le quorum. Ces votes sont liés et sont admissibles aux récompenses XP pour les participants.

Si votre proposition Signal est mise à jour avec succès vers une proposition de fondamentale, 150 [XP](/traits#experience)* sera donné aux Aavegotchi que vous avez notés dans votre proposition Signal.

*Peut augmenter ou diminuer tout au long de la période COCOON

## Métamorphose

La métamorphose est la deuxième itération d'AavegotchiDAO, et est chargée de gérer les mécanismes de jeu simples d'Aavegotchi, comme la fourniture totale d'Aavegotchis, l'ajout de nouvelles garanties, la décision de leurs fonctions, et l'ajout de nouveaux équipements créées par la communauté. Lorsque le moment sera venu de migrer vers AavegotchiDAO Metamorphose, les détenteurs de jetons voteront également pour effectuer la migration.

Une liste complète des actions disponibles à effectuer par l'AavegotchiDAO dans cette phase est disponible dans la section [Gouvernance](https://docs.aavegotchi.com/overview/governance) de la documentation sur le contrat intelligent d'Aavegotchi.

Les détenteurs de jetons ne recevront pas de récompenses en GHST pour leur participation active à cette itération d'AavegotchiDAO.

Ses caractéristiques principales sont les suivantes :

* Peut exécuter des appels intelligents de contrat
* Peut améliorer certains mécanismes
* Aavegotchi + GHST gouvernance
* Plateforme : front-end dapp personnalisé
* Récompenses : [XP](/traits#experience) + des badges pour les votants
* Couche : Polygon

## Oasis

Bien que AavegotchiDAO Oasis soit l’itération finale de l’évolution d’AavegotchiDAO, ce n’est que le début de la réalisation d’un jeu gouverné par le DAO. Toutes les décisions relatives à la mécanique du jeu Aavegotchi, la mécanique du REALM, les dépenses écosystémiques, et même les mises à jour du contrat intelligentes seront votées par l'AavegotchiDAO.

Les détenteurs de jetons ne recevront pas de récompenses en GHST pour leur participation active à cette itération d'AavegotchiDAO.

Ses caractéristiques principales sont les suivantes :

* Peut exécuter des appels intelligents de contrat
* Peut améliorer certains mécanismes
* Aavegotchi + GHST gouvernance
* Plateforme: Aavegotchi Realm
* Récompenses : [XP](/traits#experience) + des badges pour les votants
* Couche : Polygon

## Participer à la gouvernance
Je suis excité ! Alors, comment puis-je participer à l'AavegotchiDAO? Nous sommes là pour vous guider !

* Vous pouvez participer aux discussions sur le forum [AavegotchiDAO](https://dao.aavegotchi.com/) ou sur le canal #🌱dao-discussion sur Discord. Nous souhaitons la bienvenue à tout le monde!

* Participer aux votes AavegotchiDAO (quand ils sont disponibles!)

* Les [Docs Aavegotchi](https://docs.aavegotchi.com/overview/governance) détaillent la liste des fonctions DAO que les membres peuvent appeler/utiliser afin d'implémenter les changements qui ont été votés. Par exemple, disons que asUSD a été voté comme un [type de garantie](/atokens). AavegotchiDAO pourrait implémenter le changement en utilisant la fonction `addCollateralTypes()` et en spécifiant asUSD dans la fonction.

## Forum AavegotchiDAO

Le Forum de Gouvernance AavegotchiDAO est alimenté par le Discours. Avoir ce forum aidera à centraliser la discussion sur des sujets importants liés aux mécanismes de jeu Aavegotchi, aux demandes de financement et à d'autres propositions.

Nous espérons que #GotchiGang pourra devenir un modèle pour les jeux DAO dans le futur, alors impliquez-vous et n'oubliez pas d'être aimable envers vos amis.

Vous pouvez trouver le Forum [ici](https://dao.aavegotchi.com/).

## Type de propositions

Il y a 2 types de propositions à l'étape *Cocoon*:

* **Proposition Signal** - Une proposition qui peut être postée par n'importe qui. Ces votes ne sont pas contraignants, mais si le quorum est atteint, la proposition sera automatiquement mise à jour en une proposition de base contraignante (Core). Partagez votre idée de proposition et discutez-la avec d'autres membres de la communauté sur le canal #🌱dao-discussion sur Discord ou sur le [Forum AavegotchiDAO](https://dao.aavegotchi.com/). Une fois que vous avez finalisé les détails de votre proposition, créer un fil de discussion officiel sur le forum AavegotchiDAO en utilisant le cadre décrit dans la section [Créer des propositions de signaux](/dao#creating-signal-proposals) ci-dessous. Après quoi, créez un vote pour cela sur [Snapshot](https://snapshot.org/#/aavegotchi.eth).

* **Proposition de base** – Si une proposition de signal atteint 20% ou plus de quorum (quantité de GHST circulante éligible au vote sur Polygon), Pixelcraft réintroduira la proposition en tant que proposition principale. Ces votes sont liés et sont éligibles aux récompenses [XP](/traits#experience) pour les participants.

<img class = "bodyImage" src = "/dao/proposal-type.png" alt = "AavegotchiDAO Proposal Type" />

**Les propositions de base** sont de plus subdivisées en 3 types :

*Rappel : Les pourcentages de quorum sont calculés à partir du montant de GHST circulante éligible au vote sur Polygon, pas la quantité totale!*

* **Smol votes:** Quorum of 5%. These votes are intended for small decisions that do not affect the overall meta or value of existing Aavegotchis in any significant way (e.g. introduction of a cosmetic feature, proposal for a marketing strategy).

* **Medium votes:** Quorum of 10%. These votes are intended for decisions that may have some notable effect on the meta (e.g. introducing a new game item, allocating XP to some item or event, changing something about an Aavegotchi that does not affect its rarity score).

* **Galaxy votes:** Quorum of 20%. These votes are intended for major decisions that have significant effects on the meta and wider Aavegotchi ecosystem (e.g. a new Haunt, changing something about an Aavegotchi that affects its rarity score).

## Différences de vote

Vote differentials are the difference between the top two options, and are indicative of whether or not a reasonable consensus has been achieved.

Here is an example Core Proposal with 3 options:

* Option A receives 25%
* Option B receives 35%
* Option C receives 40%.

The required Vote Differential is 5% (the difference between Option C [40%] and Option B [35%]).

This would not be enough to achieve consensus, thus the Proposal is not implemented.

Typically, the more options a vote has, the higher Vote Differential it requires to demonstrate that true consensus has been reached.

For COCOON, we will begin with the following Vote Differential parameters, and course correct if necessary:

2 Options — 10% VD

3 Options — 15% VD

4 Options — 20% VD

## Création de propositions Signal

To create signal proposals for the #GotchiGang to vote on, please adhere to the following format:

* Author + GotchiID
* Link to the matching Discourse thread (Proposals without significant discussion in the forum will be automatically removed from Snapshot)
* Summary (include rationale, timeline, goals and any key performance indicators) Copy/paste proposals of existing proposals will be removed while proposals with similar but distinct variations are permitted to exist side by side.
* Effect
* Highlight end goal and benefits
* Acknowledge potential risks or unintended consequences
* Any alternative paths (Plan B, Plan C, etc)
* The end time of a proposal should not be longer than 30 days from its starting time, to ensure that only active proposals are displayed on Snapshot Community board.

More details can be found in this [Medium post](https://web.archive.org/web/*/https://aavegotchi.medium.com/scaling-aavegotchidao-c7e589de0333).

## Vote

There are two ways to vote: (1) Snapshot Voting, and/or (2) Aragon Voting.

### Snapshot Voting

Snapshot is a voting DApp on Ethereum. Votes made on Snapshot does not require any gas and are not on-chain. Aavegotchi's Snapshot page can be found [here](https://snapshot.org/#/aavegotchi.eth).

To vote on Snapshot, follow the steps below:

1). Go to an open proposal.

2). Connect your wallet.

<img class = "bodyImage" src = "/dao/snapshot1.jpg" alt = "Snapshot Voting Ethereum" />
<img class = "bodyImage" src = "/dao/snapshot2.jpg" alt = "Snapshot Voting Ethereum" />

3). Select a poll option, and click "Vote." A pop-up will appear to confirm your choice.

<img class = "bodyImage" src = "/dao/snapshot3.jpg" alt = "Snapshot Voting Ethereum" />
<img class = "bodyImage" src = "/dao/snapshot4.jpg" alt = "Snapshot Voting Ethereum" />

4). Your Metamask will pop up. Sign the transaction, and you're done!

<img class = "bodyImage" src = "/dao/snapshot5.jpg" alt = "sign transaction on Snapshot Voting" />

### Aragon Voting

Aragon is a tool for creating and participating in decentralized organizations on Ethereum. Votes made on Aragon requires gas and exists on-chain.

Aavegotchi's Aragon page can be found [here](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/).

To vote on Aragon, follow the steps below:

1). Go to an open proposal.

2). Connect your wallet.

<img class = "bodyImage" src = "/dao/aragon1.jpg" alt = "Aragon Voting Ethereum" />

3). Choose to vote "Yes" or "No."

<img class = "bodyImage" src = "/dao/aragon2.jpg" alt = "Aragon Voting Ethereum" />

4). A Metamask transaction will pop-up. Take note that your transaction has to be mined to be confirmed, so consult a site like [gasnow](https://gasnow.org/) for the latest gas price.

5). Once your transaction is mined, your vote will be reflected accordingly.


<img class = "bodyImage" src = "/dao/aragon3.jpg" alt = "Aragon Voting Ethereum" />

## Aavegotchi Improvement Proposals (AGIPs)

See those votes on Aragon? They are Aavegotchi Improvement Proposals (AGIPs)!

Visit the [Aavegotchi Improvement Proposals](/aavegotchi-improvement-proposals) page for a list of historical votes. If you'd like to be informed of future proposals, follow [Aavegotchi on social media](/socialmedia).

Vote on AGIPs and get [POAP badges](/poap) for it!

## Trésorerie

AavegotchiDAO earns 0.3% of all trades on the Aavegotchi [Bonding Curve](/curve) on Ethereum Mainnet. This is the current source of all DAO funds.

As responsible stewards, members of AavegotchiDAO will play a role in determining how these funds are to be allocated.

The AavegotchiDAO treasury is located [here](https://aavegotchi.com/dao?p=treasury).