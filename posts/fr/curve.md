---
author: Unintelligent Nerd
date: '2020-04-23'
title: 'Bonding Curve'
description: 'La Courbe de liaison d''Aavegotchi'
image: "curve/bonding-curve.png"
contributors:
  - "unintelligent-nerd"
---


<div class="headerImageContainer">
<img class="headerImage" src="/curve/bonding-curve.png">
<p class="headerImageText">La Courbe de liaison (Bonding Curve)</p>
</div>

Une courbe de liaison de jetons (TBC, pour token bonding curve) est une courbe mathématique qui définit une relation entre le prix et l'approvisionnement de jetons.

Dans un TBC typique, le prix augmente à mesure que l'offre de jeton augmente, et diminue à mesure que l'offre diminue. Alors que la courbe de liaison d'Aavegotchi a été lancé depuis [Aragon](/glossary#aragon)
 [Decentralized Autonomous Initial Coin Offering (DAICO)](/glossary#daico), cet article traite également de DAICOs.</p>

<div class="contentsBox">

**Contenu**

<ol>
<li><a href=#mechanics>Mécaniques</a></li>
<li><a href=#aavegotchi-bonding-curve>La Courbe de liaison d'Aavegotchi</a></li>
<li><a href=#aavegotchi-daico>Aavegotchi DAICO</a></li>
<li><a href=#aavegotchi-token-supply-dynamics>Dynamique de l'offre du token d'Aavegotchi</a></li>
<li><a href=#learn-more>Learn More</a></li>
</ol>

</div>

## Mécaniques



### Minting / Burning à la demande

Les courbes de liaison utilisent un algorithme de tarification pour servir de créateur de marché automatisé et fournir une source de liquidité toujours disponible. Les utilisateurs peuvent interagir avec une courbe de liaison en plaçant des jetons dans la pool de réserve de la courbe de liaison. Lorsqu'ils le font, la courbe de liaison mint les jetons correspondants pour l'utilisateur en se basant sur l'algorithme de prix. Les jetons nouvellement minted peuvent avoir une utilitée spécifique et même être échangés entre les utilisateurs, mais peut toujours être échangé à travers la courbe de liaison pour des jetons dans la pool de réserve de la courbe de liaison.

Lorsqu'un jeton est acheté via un TBC, chaque acheteur subséquent devra payer un prix légèrement plus élevé pour chaque jeton, générant ainsi un profit potentiel pour les premiers investisseurs. Au fur et à mesure que de plus en plus de gens découvrent le projet et l’achat se poursuit, la valeur de chaque jeton augmente progressivement tout au long de la courbe de liaison. Les premiers investisseurs qui trouvent des projets prometteurs tôt, achètent les jetons lier à la courbe de liaison pour ensuite les vendre plus tard pour gagner un profit à l'avenir.



### Formule

Les courbes de liaison se présentent sous différentes formes et tailles. Pour le projet Aavegotchi, l'équipe a adopté la formule de Bancor :

<img style = "border: 1px solid; margin-bottom: 15px" src = "/curve/reserve-ratio.png" alt = "token bonding curve" width = "750" />



### Explication de Formule

Le **Jeton de Réserve** fait référence au jeton que les utilisateurs stake dans la courbe de liaison.

Le **Jeton Continu** fait référence au jeton qui est reçu de la courbe de liaison lors du staking u du jeton de réserve.

Dans le cas d'Aavegotchi, la réserve et les jetons continus sont respectivement DAI et GHST. 

Le **Poids Connectant** (également connu sous le nom de Ratio de réserve ou Connecting Weight (CW)) représente un ratio fixe (entre 0 et 100%) entre la valeur totale du jeton continu (fourniture totale × prix unitaire) et la valeur de son solde de jeton de réserve.  Ce CW est constant par la formule Bancor tant que le solde du jeton de réserve et la valeur totale du jeton continu (c.-à-d. La "capitalisation du marché") fluctue avec les achats et les ventes.

Chaque achat ou vente du jeton continu (GHST) déclenche une augmentation ou une diminution des jetons de réserve (DAI). Le prix du jeton continu par rapport à ses jetons de réserve doit alors recalculer continuellement pour maintenir le poids de connexion (CW) configuré entre eux.

Le poids connectant (CW) détermine à quel point le prix d'un jeton continu doit être ajusté pour être maintenu à chaque transaction, ou, en d'autres termes, sa sensibilité aux prix. 

Un ratio de réserve plus élevé entre le solde du Jeton de Réserve et le Jeton Continu entraînera une baisse de la sensibilité au prix, ce qui signifie que chaque achat et vente aura un effet moindre que proportionné sur le mouvement de prix du Jeton Continu. Un ratio de réserve moins élevé entre le JEton de Réserve et le Jeton Continu entraînera une hausse de la sensibilité au prix, ce qui signifie que chaque achat et vente aura un effet plus important que proportionné sur le mouvement de prix du Jeton Continu.

**Le ratio de Réserve d'Aavegotchi est de 33% les ami(e)s!** Cela signifie que vous n'avez pas besoin de craindre les baleines. Ils ne peuvent pas faire de pump & dump sur le GHST car la courbe de liaison est durcie contre leurs transactions gigantesques !

Si vous voulez le voir en action, consultez ce modèle interactif de la courbe de liaison fait par Coderdan [ici](https://observablehq.com/@cinnabarhorse/aavegotchi-bonding-curve).

LA COURSE POUR TOUJOURS !



## La Courbe de liaison d'Aavegotchi

La courbe de liaison Aavegotchi a été créée le 14 septembre 2020 grâce à un contrat intelligent propulsé par [la collecte de fonds Aragon](https://fundraising.aragon.black/). Après la conclusion d'une prévente de 500 000 GHST, la courbe de liaison a été immédiatement ouverte. La courbe de liaison est illimitée en taille, n'a pas de limite de temps, et offre un prix d'ouverture de 0,2 Dai par GHST. Il a un poids de liaison de 33%.

Vous devrez compléter le KYC afin d’acheter/ vendre directement depuis la courbe. La conformité est importante les ami(e)s - nous vivons dans une société et nous ne voulons pas non plus que le projet soit accidenté par le gouvernement. Les achats effectués à partir de la courbe sont effectués en DAI. L'inverse s'applique aussi; vous pouvez revendre votre GHST à la courbe pour DAI, mais pourquoi voudriez-vous faire cela? :( :( :(

Si vous ne parvenez pas à exécuter la KYC en raison de votre citoyenneté, ne vous inquiétez pas! **Vous pourrez toujours interagir avec toutes les autres parties de la métaverse Aavegotchi.** Vous devez simplement acheter votre GHST sur un DEX comme Uniswap ou Balancer, ou un CEX comme OKex à la place. Apprenez comment obtenir des jetons GHST [ici](/ghst#get-ghst).



## Aavegotchi DAICO

Une Decentralized Autonomous Initial Coin Offering (DAICO) est une nouvelle méthode de collecte de fonds qui vise à incorporer les meilleures caractéristiques d'une organisation autonome décentralisée (DAO) avec celles d'une offre initiale de jetons (ICO) afin de créer une structure qui fournit un niveau d'efficacité plus élevé au modèle de collecte de fonds de vente de jetons. Un DAICO est un modèle par lequel les investisseurs ont le contrôle des fonds collectés une fois la collecte de fonds terminée. Les investisseurs pourraient influencer la façon dont les développeurs ont accès aux fonds et à quelle fréquence grâce à un mécanisme de "tapage". En outre, les investisseurs peuvent également voter pour supprimer le projet et faire rembourser leurs fonds.

Le projet Aavegotchi a lancé la courbe de liaison de jetons à travers un DAICO sur Aragon.

**Ceci est SAFE. Ne. Pas. Supprimer. La. Courbe. De Liasion.** Cela empêche les investisseurs de subir les pump & dump car ils ont finalement le contrôle des fonds grâce à DAICO et courbe de liaison!

La première itération du [AavegotchiDAO](/dao) a été lancée en tandem avec la distribution GHST sur la courbe de liaison. Les détenteurs de GHST ont eu le pouvoir de voter pour augmenter / maintenir les fonds distribués par le mécanisme de la courbe de liaison de jetons (TBC) à Pixelcraft Studios (l'équipe derrière Aavegotchi) pour soutenir le développement. La première proposition AavegotchiDAO d'augmenter le "tapage" d'Aavegotchi DAICO à partir de 50, 00 DAI à 100 000 DAI par mois sont passés avec une approbation de 99 % le 18 octobre 2020.



## Dynamique de l'offre du token d'Aavegotchi

Lors de notre discussion sur DAICO/courbe de liaison de jetons ci-dessus, nous avons appris que la fourniture totale du jeton de la GHST est dynamique. Lorsque les investisseurs achètent du GHST en utilisant du DAI à partir de la courbe de liaison, de nouveaux jetons de GHST sont mint et la fourniture totale de GHST en circulation augmente. Lorsque les jetons GHST sont revus dans la courbe de liaison, les jetons GHST seraient brûlés, le vendeur recevrait un montant équivalent en DAI en fonction du prix du GHST en vigueur sur la courbe de liaison, et la circulation des jetons de GHST diminueraient.

L'inflation des jetons GHST par des achats nets sur la courbe de liaison est corrélée positivement au prix du GHST. **La courbe de liaison a été programmée mathématiquement pour augmenter le prix de GHST alors que l'offre circulante de GHST augmente.**



## Learn More

* Pour en savoir plus sur [la collecte de fonds et la liaison avec Aragon !](https://fundraising.aragon.black/components/bonding-curve)

* En savoir plus sur les [courbes de liaison expliquées](https://yos.io/2018/11/10/bonding-curves/)

* Article sur les [Courbes de liaison](https://defiprime.com/bonding-curve-explained) par DeFi Prime.

* Article sur [DAICO](https://cointelegraph.com/explained/what-is-a-daico-explained) par the Coin Telegraph.