---
author: Unintelligent Nerd
date: '2020-04-23T07:00:00.000Z'
title: 'Aavegotchi Ervaring (XP)'
description: 'Lees hier meer over Aavegotchi Ervaring (XP)!'
contributors:
  - "unintelligent-nerd"
---

Aavegotchis gaan een level omhoog als ze meer XP krijgen). Maar hoeveel XP hebben ze nodig op elk niveau? Gegevens analisten, we hebben enkele cijfers om hier te crunchen!

<div class="contentsBox">

**Inhoud**

<ol>
<li><a href=#gaining-xp>Verkrijg XP</a></li>
<li><a href=#formula>Formule</a></li>
<li><a href=#experience-table>Ervaring Tabel</a></li>
<li><a href=#claiming-xp>Claiming XP</a></li>
<li><a href=#tracking-xp-received>Tracking XP received</a></li>
</ol>

</div>

## Verkrijg XP
Aavegotchis krijgen ervaring (XP) voor:
* Stemmen in een belangrijke [AavegotchiDAO](/dao) stem
* Deelnemen aan evenementen gehouden op Aavegotchi Discord (een Typeform zal worden vrijgegeven tijdens het evenement voor mensen om XP te ontvangen voor hun Gotchis)
* [min-games afspelen](/minigames) (alleen in bepaalde periodes als aangekondigd op Discord)

## Formule
De volgende formule wordt gebruikt om de XP te bepalen die nodig is voor het volgende level:

(Current Level ^ 2) ~Constant, waar Constant, = 0.02

## Ervaring Tabel

De onderstaande tabel toont de XP die nodig is voor elk level. Alvorens in de gegevens te duiken zijn hier enkele nuttige definities van de sleuteltermen gebruikt:

* Huidig Level: Huidig level van je Gotchi
* Volgend Level: Volgend Level van je Gotchi
* XP: Ervaring vereist om het volgende niveau te bereiken dat is aangegeven in de **Volgend Level** kolom
* Verschillen: verschil in de XP die nodig is om het niveau te bereiken in de **Volgend Level** kolom vergeleken met dezelfde kolom in de vorige rij
* Constante: een vaste waarde die wordt gebruikt in de berekening van de XP benodigd voor het volgende niveau Formule

Het maximale niveau dat een aavegotchi zou kunnen bemachtigen is 99. Eventuele wijzigingen in het maximale niveau kunnen worden doorgevoerd via [AavegotchiDAO](/dao) voorstellen.

*Opmerking: Aavegotchis begint op niveau 1. "Niveau 0" is opgenomen in de tabel voor individuen die geïnteresseerd zijn om de formule toe te passen en te observeren hoe XP berekeningen werken.*

tabel_XP

## Claiming XP

XP has to be claimed manually at the airdrop page here: https://dapp.aavegotchi.com/u/[XXXXX]/airdrops.

Replace the [XXXXX] with your wallet address in the URL above.

After voting on an [Aavegotchi Improvement Proposal (AGIP)](/aavegotchi-improvement-proposals), all Aavegotchis you owned at the block the AGIP was created are eligible for the XP claim. There is a bulk claim ("CLAIM ALL") function that allows you to claim the XP for all AGIPs you have voted on. If the CLAIM ALL function fails, you can claim the XP for each AGIP individually.

## Tracking XP received

Our frenly [aarchitect](/aarchitect) Frank Pfeift has created an application to track the XP that a Gotchi has received over its lifetime.

His app can be accessed [here](https://aavegotchi-xp-dashboard.vercel.app). Your Gotchi ID is the digits that are found at the end of the URL at your [Gotchi Profile Page](/aavegotchi-profile).