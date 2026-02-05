---
author: Unintelligent Nerd
date: '2020-04-23T07:00:00.000Z'
title: 'Fuerza Espiritual'
description: 'Todo sobre la Fuerza Espiritual de Aavegotchi'
image: "spirit force/aETH.svg"
contributors:
  - "unintelligent-nerd"
---

<div class="headerImageContainer">
<img class="headerImage" src="/spirit-force/aETH.png">
<p class="headerImageText">El aETH aToken</p>
</div>

Cada Aavegotchi es incorporado por su Fuerza Espiritual. Al abrir un [portal](/portals), ¡el invocador (¡tú!) tiene que infundir un Gotchi con Fuerza Espiritual para invocarlo a la vida!

Entonces, ¿qué es exactamente la Fuerza Espiritual?

Spirit Force are [Aave's](https://aave.com/) interest-bearing tokens embedded within your Aavegotchi! ¡Esto hace que tu Aavegotchi sea cada vez más valioso a lo largo del tiempo!

*In Aavegotchi, the terms "Spirit Force", "Collateral", "aTokens", "maTokens", and "amTokens" mean the same thing. Confused? Check out this [history page](/spirit-force-history) for more information.*

<div class="contentsBox">

**Contenidos**

<ol>
<li><a href=#supported-spirit-force>Supported Spirit Force</a></li>
<li><a href=#getting-atokens>Getting aTokens</a></li>
<li><a href=#converting-atokens-into-matokens>Converting aTokens into maTokens</a></li>
<li><a href=#differences-between-matokens-and-amtokens>Differences between maTokens and amTokens</a></li>
<li><a href=#aura-in-the-gotchiverse>Aura in the Gotchiverse</a></li>
</ol>

</div>

## Supported Spirit Force

table_supportedCollaterals

## Getting aTokens

*The following steps are taken from the [Zero to Hero Guide 2.0](https://medium.com/aave/aave-protocol-zero-to-hero-guide-e3f206e57e45) from Aave Medium. It has been replicated here for the reader's convenience.*

1). Head over to the <a href = "https://app.aave.com/">Aave Protocol</a> to get started!

2). Here you have a few options to link your crypto wallet, depending on which type of wallet you have:

<img src = "/spirit-force/connect-your-wallet.png" alt = "aave" class="bodyImage" />

3). Before you can use Aave Protocol, you’re going to want to have some crypto assets. The list of available crypto assets are shown in the <a href=#stablecoins>Stablecoins</a> and the <a href=#cryptocurrencies>Cryptocurrencies</a> sections above.

If you don’t own any crypto but you want to join the fun, you’ll need to convert your fiat currency (normal money, like dollars, euros, etc.) into a cryptographic asset (like one of the above).

Lucky for you, Aave recently introduced a fiat to crypto onramp where you can buy crypto assets directly from the Aave Protocol application! Now you can use Transak or Ramp Instant to buy the asset of your choice directly with a credit or debit card or wire transfer in just a few minutes (see below).

<img src = "/spirit-force/buy-with-fiat.png" alt = "aave" class="bodyImage" />

4). Once you have connected your wallet to the platform, you can deposit an asset into Aave Protocol. When you click “deposit”, the interface will show you what you have available in your wallet to deposit. You then select the asset you would like to deposit, choose how much to deposit, and then voilá, you’ve done it! *Note: there will be an "approve" transaction before the actual deposit transaction takes place. This is to grant permission to the deposit contract to use that particular asset you are depositing.*

<img src = "/spirit-force/deposit.gif" alt = "aave" class="bodyImage" />

As soon as your deposit transaction goes through, you benefit from the deposit interest rate. The aToken version of the asset can now be seen in your wallet.

## Converting aTokens into maTokens

Got your aTokens? Good!

Let's head over to the [maTokens](/matokens) page for Step 2!

## Differences between maTokens and amTokens

Tanto maTokens como amTokens acumulan interés. Sin embargo, *la forma en la que* adjuntan el interés es diferente:

* maTokens aumentan en **valor** a lo largo del tiempo. Esto se aplica a Haunt 1 Aavegotchis que utilizan maTokens. El valor de los maTokens está aumentando, pero como la cantidad no cambia, no es posible retirar maTokens de los Gotchis a menos que sacrifiques tu Gotchi para conseguir la garantía subyacente.

* amTokens aumentan en **cantidad** con el tiempo. Esto se aplica a Aavegotchis de Haunt 2 y en adelante. El interés acumulado se refleja como cantidad. Por lo tanto, es posible retirar amTokens una vez que se haya generado suficiente interés.

## Aura in the Gotchiverse

The larger your Gotchi's Spirit Force, the larger his/her aura in the [Gotchiverse](/gotchiverse).

The calculation for the aura size is as follows:

```
const radius = Phaser.Math.Clamp(248 + (level * 512) / 100, 124, 1024);
const intensity = Phaser.Math.Clamp(0.5 + level / 40, 0.5, 3.5);

let attenuation = 0.075;
if (level <= 10) attenuation = 0.055;
else if (level <= 20) attenuation = 0.045;
else if (level <= 50) attenuation = 0.03;
else attenuation = 0.025;
```