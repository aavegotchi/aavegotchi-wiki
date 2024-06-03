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
<li><a href=#claiming-xp>Claiming XP</a></li>
<li><a href=#tracking-xp-received>Tracking XP received</a></li>
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

## Claiming XP

XP has to be claimed manually at the airdrop page here: https://dapp.aavegotchi.com/u/[XXXXX]/airdrops.

Replace the [XXXXX] with your wallet address in the URL above.

After voting on an [Aavegotchi Improvement Proposal (AGIP)](/aavegotchi-improvement-proposals), all Aavegotchis you owned at the block the AGIP was created are eligible for the XP claim. There is a bulk claim ("CLAIM ALL") function that allows you to claim the XP for all AGIPs you have voted on. If the CLAIM ALL function fails, you can claim the XP for each AGIP individually.

## Tracking XP received

Our frenly [aarchitect](/aarchitect) Frank Pfeift has created an application to track the XP that a Gotchi has received over its lifetime.

His app can be accessed [here](https://aavegotchi-xp-dashboard.vercel.app). Your Gotchi ID is the digits that are found at the end of the URL at your [Gotchi Profile Page](/aavegotchi-profile).