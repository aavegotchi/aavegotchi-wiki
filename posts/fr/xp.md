---
author: Unintelligent Nerd
date: '2020-04-23T07:00:00.000Z'
title: 'Aavegotchi Experience (XP)'
description: 'Learn about Aavegotchi Experience (XP) here!'
contributors:
  - "unintelligent-nerd"
---

Les Aavegotchis augmentent de niveau au fur et à mesure qu'ils gagnent de l'expérience (XP) Mais quelle est la quantité exacte d'xp nécessaire à chaque niveau ? Chers data-analysts, nous avons quelques données qui peuvent vous intéresser !

<div class="contentsBox">

**Contents**

<ol>
<li><a href=#gaining-xp>Gagner de l'XP</a></li>
<li><a href=#formula>Formule mathématique</a></li>
<li><a href=#experience-table>Tableau d'XP</a></li>
<li><a href=#tracking-xp-received>Suivre l'XP reçue</a></li>
<li><a href=#xp-requirements-for-joining-guilds>Prérequis XP pour rejoindre les guildes</a></li>
</ol>

</div>

## Gagner de l'XP
Les Aavegotchis reçoivent de l'expérience (XP) en:
* Votant dans l'[AavegotchiDAO](/dao)
* Participant à des événements organisés sur le Discord Aavegotchi (un Typeform est lancé durant l'event pour permettre aux participants de recevoir l'XP pour leur Gotchis)
* Jouant à [mini-jeux](/minigames) (seulement pendant certaines périodes comme annoncé sur Discord)

## Formule mathématique
La formule suivante est utilisée pour déterminer l'XP requise pour le niveau suivant :

(Niveau actuel ^ 2) ÷ Constante, où Constante = 0.02

## Tableau d'XP

Le tableau ci-dessous montre l'XP requis pour chaque niveau. Avant de se plonger dans les données, voici quelques définitions des mots clés utilisés:

* Current Level : Niveau Actuel de votre Gotchi
* Next Level: Le prochain niveau que votre gotchi atteindra (Niveau Actuel +1)
* XP : Expérience requise pour atteindre le niveau suivant qui est spécifié dans la colonne **Next Level**
* Différence : Différence entre l'XP nécessaire pour atteindre le niveau dans la colonne **Niveau Prochain** et la même colonne de la ligne précédente
* Constant: Une valeur fixe nécessaire au calcul de l'XP nécessaire pour atteindre le niveau suivant

Le niveau maximum qu'un aavegotchi peut atteindre est 99. N'importe quel changement du niveau maximum pourrait être proposé sur l'[AavegotchiDAO](/dao).

*Note: Les Aavegotchis commencent tous au Niveau 1. Le "Niveau 0" est inclus dans le tableau pour les personnes qui souhaitent utiliser la formule pour comprendre comment fonctionne le calcul d'XP.*

table_XP

## Suivre l'XP reçue

Notre "fren" [aarchitect](/aarchitect) Frank Pfeift a créé une application pour suivre l'XP qu'un Gotchi a reçu au cours de sa vie.

Son application est accessible [ici](https://aavegotchi-xp-dashboard.vercel.app). Votre Gotchi ID peut être trouvé a la fin de l'URL de votre [Gotchi Profile Page](/aavegotchi-profile)

## Prérequis XP pour rejoindre les guildes

Les Gotchis sont des créatures sociales qui adorent trainer avec leurs "frens", mais comme les petits nouveaux du lycée qui essaient de participer à chacune des activités, ils s'épuisent avec trop d'activité sociale.

Au fur et à mesure qu'ils aqcuièrent de l'XP et deviennent plus ambitieux, leur équilibre vie privée/vie professionnelle s'améliore, ce qui leur permet d'assurer plus de responsabilités dans la [Guilde](/guild).

Ainsi, le nombre de guildes qu'un Gotchi peut rejoindre dépend de son niveau XP.

table_xpRequirementForGuilds