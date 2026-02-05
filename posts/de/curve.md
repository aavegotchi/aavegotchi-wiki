---
author: Unintelligent Nerd
date: '2020-04-23T07:00:00.000Z'
title: 'Bonding Curve'
description: 'Die Aavegotchi Bonding Curve'
image: "curve/bonding-curve.png"
contributors:
  - "unintelligent-nerd"
---


<div class="headerImageContainer">
<img class="headerImage" src="/curve/bonding-curve.png">
<p class="headerImageText">Die Bonding Curve</p>
</div>

Eine Token Bonding Curve (TBC) ist eine mathematische Kurve, die eine Beziehung zwischen Preis und Token-Angebot definiert.

In einer typischen TBC steigt der Preis, wenn das Angebot des Tokens steigt, und sinkt, wenn das Angebot sinkt. Da die Aavegotchi Bonding Curve durch ein [Aragon](/glossary#aragon) [Decentralized Autonomous Initial Coin Offering (DAICO)](/glossary#daico) gestartet wurde, wird in diesem Artikel auch auf DAICOs eingegangen.

<div class="contentsBox">

**Inhalte**

<ol>
<li><a href=#mechanics>Funktionsweise</a></li>
<li><a href=#aavegotchi-bonding-curve>Aavegotchi Bonding Curve</a></li>
<li><a href=#aavegotchi-daico>Aavegotchi DAICO</a></li>
<li><a href=#aavegotchi-token-supply-dynamics>Aavegotchi Token Angebots-Dynamik</a></li>
<li><a href=#learn-more>Learn More</a></li>
</ol>

</div>

## Funktionsweise

### Minting / Burning auf Nachfrage

Bonding Curves nutzen einen Preisfindungsalgorithmus, um als automatischer Market Maker zu dienen und eine immer verfügbare Liquiditätsquelle zu bieten. Nutzer können mit einer Bonding Curve interagieren, indem sie Token in den Reservepool der Curve einzahlen. Wenn sie dies tun, erstellt/minted die Bonding Curve die entsprechenden Tokens für den Nutzer, basierend auf dem Preisalgorithmus. Die neu erstellten Tokens können einen bestimmten Nutzen haben und sogar unter den Spielern gehandelt werden. Sie können aber jederzeit über die Bonding Curve gegen Tokens aus dem Reservepool zurückgetauscht werden.

Wenn ein Token über eine TBC gekauft wird, muss jeder nachfolgende Käufer einen etwas höheren Preis für den jeweiligen Token zahlen, wodurch ein potenzieller Gewinn für die früheren Investoren entsteht. Je mehr Menschen von dem Projekt erfahren und je mehr gekauft wird, desto mehr steigt der Wert der einzelnen Tokens entlang der Bonding Curve. Frühe Investoren, die vielversprechende Projekte finden, den an die Curve gebundenen Token kaufen und dann ihren Token wieder verkaufen, können später einen Gewinn erzielen.

### Formel

Bonding Curves gibt es in verschiedenen Formen und Grössen. Für das Aavegotchi-Projekt hat das Team die Bancor-Formel übernommen:

<img style = "border: 1px solid; margin-bottom: 15px" src = "/curve/reserve-ratio.png" alt = "token bonding curve" width = "750" />

### Erklärung der Formel

Der **Reserve Token** bezieht sich auf den Token, den Nutzer in die Bonding Curve einzahlen.

Der **Continuous Token** bezieht sich auf den Token, den man von der Bonding Curve beim Einzahlen des Reserve Tokens erhält.

Im Fall von Aavegotchi sind die Reserve und Continuous Tokens DAI bzw. GHST.

Das **Connecting Weight** (auch bekannt als Reserve Ratio) stellt ein festes Verhältnis (zwischen 0 und 100%) zwischen dem Gesamtwert des Continuous Token (Gesamtangebot × Stückpreis) und dem Wert seiner gesamten Reserve Tokens dar.  Dieses CW ist durch die Bancor-Formel konstant, da sowohl die Anzahl Reserve Tokens als auch der Gesamtwert des Continuous Token (aka. "Marktkapitalisierung") mit Käufen und Verkäufen schwanken.

Jeder Kauf oder Verkauf des Continuous Tokens (GHST) löst eine Zunahme oder Abnahme von Reserve Tokens (DAI) aus. Der Preis des Continuous Tokens in Bezug auf seine Reserve Tokens muss dann kontinuierlich neu berechnet werden, um das konfigurierte Connecting Weight / Ratio zwischen ihnen aufrechtzuerhalten.


Das Connecting Weight bestimmt, wie stark sich der Preis eines Continuous Tokens anpassen muss, um das Ratio aufrechtzuerhalten. Mit anderen Worten: seine Preissensitivität.

Ein höheres Reserveverhältnis zwischen dem Reserve Token und dem Continuous Token führt zu einer geringeren Preissensitivität. Das bedeutet, dass jeder Kauf und Verkauf einen unterproportionalen Einfluss auf die Preisbewegung des Continuous Tokens haben wird. Andererseits führt ein geringeres Verhältnis zwischen dem Reserve Token und dem Continuous Token zu einer höheren Preissensitivität. Das bedeutet, dass jeder Kauf und Verkauf einen überproportionalen Effekt auf die Preisbewegung des Continuous Tokens hat.

**Das Reserveverhältnis von Aavegotchi liegt bei 33%!** Das bedeutet, dass du keine Angst vor Whales haben musst. Sie können GHST nicht pump & dumpen, da die Bonding Curve gegen ihre riesigen Transaktionen geschützt ist!

Wenn du es in Aktion sehen willst, schau dir dieses interaktive Modell der Bonding Curve an, das Coderdan [hier](https://observablehq.com/@cinnabarhorse/aavegotchi-bonding-curve) erstellt hat.

THE CURVE IS FOREVER!

## Aavegotchi Bonding Curve
Die Aavegotchi Bonding Curve wurde am 14. September 2020 über einen Bonding Curve Smart Contract erstellt, der von [Aragon Fundraising](https://fundraising.aragon.black/) bereitgestellt wird. Nach dem Abschluss des Presales für 500'000 GHST wurde die Bonding Curve sofort freigegeben. Die Bonding Curve ist in ihrer Grösse unbegrenzt, hat kein Zeitlimit und bietet einen Startkurs von 0.2 Dai pro GHST. Sie hat ein Connecting Weight von 33%.

Du musst trotzdem KYC abschliessen, um direkt in der Curve kaufen/verkaufen zu können. Compliance ist wichtig - we live in a society, und wir wollen auch nicht, dass das Projekt von der Regierung zerstört wird. Einkäufe auf der Curve werden in DAI getätigt. Umgekehrt kannst du deine GHST für DAI zurück an die Curve verkaufen, aber warum solltest du das tun? :( :( :(

Wenn du aufgrund deiner Staatsbürgerschaft nicht in der Lage bist, KYC durchzuführen, mach dir keine Sorgen! **Du wirst immer noch in der Lage sein, mit jedem anderen Teil des Aavegotchi Metaverse zu interagieren.** Du musst einfach deine GHST von einem DEX wie Uniswap / Balancer kaufen, oder stattdessen von einem CEX wie OKEx. [Hier](/ghst#get-ghst) erfährst du, wie man GHST Tokens bekommt.

## Aavegotchi DAICO
Ein Decentralized Autonomous Initial Coin Offering (DAICO) ist eine neue Fundraising-Methode, die versucht, die besten Eigenschaften einer Dezentralen Autonomen Organisation (DAO) mit denen eines Initial Coin Offering (ICO) zu verbinden. Dadurch soll eine Struktur geschaffen werden, die dem Token-Sale-Fundraising-Modell ein höheres Mass an Effektivität verleiht. Ein DAICO ist ein Modell, bei dem die Investoren die Kontrolle über die gesammelten Gelder haben, sobald das Fundraising vorbei ist. Die Investoren können durch einen "Tap" Mechanismus Einfluss darauf nehmen, wie die Entwickler Zugang zu den Geldern haben und mit welcher Regelmässigkeit. Ausserdem können die Investoren auch für den Ausstieg aus dem Projekt stimmen und ihre Gelder zurückbekommen.

Das Aavegotchi Projekt hat die Token Bonding Curve durch einen DAICO auf Aragon gestartet.

**Dies ist SAFU. Entferne. Niemals. Die. Bonding. Curve. ** Es verhindert, dass die Investoren ihre Gelder verlieren, da sie letztendlich die Kontrolle über die Finanzen innerhalb des DAICO / der Bonding Curve haben!

Die erste Version des [AavegotchiDAO](/dao) startete im Tandem mit der GHST Distribution auf der Bonding Curve. GHST Nutzer hatten die Macht, über die Erhöhung / Beibehaltung der Mittel abzustimmen, die durch den Tap Mechanismus der Token Bonding Curve (TBC) Reserven an Pixelcraft Studios (dem Team hinter Aavegotchi) ausgeschüttet werden, um die Entwicklung zu unterstützen. Der erste Vorschlag des AavegotchiDAO, den Aavegotchi DAICO Tap von 50'000 DAI auf 100'000 DAI pro Monat zu erhöhen, wurde am 18. Oktober 2020 mit 99% Zustimmung angenommen.

## Aavegotchi Token Angebots-Dynamik
In unserer obigen Diskussion über die Token Bonding Curve / DAICO haben wir gelernt, dass das Gesamtangebot des GHST Tokens dynamisch ist. When investors purchase GHST using DAI from the bonding curve, new GHST tokens are minted and the total supply of circulating GHST would increase. When GHST tokens are sold back into the bonding curve, the GHST tokens would be burnt, the seller would receive an equivalent amount in DAI based on the prevailing GHST price on the bonding curve, and the circulating supply of GHST tokens would decrease.

Die Inflation von GHST Tokens durch Nettokäufe auf der Bonding Curve ist positiv mit dem GHST Preis korreliert. **Die Bonding Curve wurde mathematisch so programmiert, dass der Preis von GHST steigt, wenn das zirkulierende Angebot an GHST zunimmt.**

## Learn More

* Mehr über [Aragon Fundraising und Bonding Curves!](https://fundraising.aragon.black/components/bonding-curve)

* 101 zu Bonding Curves: [Bonding Curves Explained](https://yos.io/2018/11/10/bonding-curves/)

* Artikel über [Bonding Curves](https://defiprime.com/bonding-curve-explained) von DeFi Prime.

* Artikel über [DAICO](https://cointelegraph.com/explained/what-is-a-daico-explained) von Cointelegraph.