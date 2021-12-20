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

¡Fuerza espiritual son fichas de interés integradas en tu Aavegotchi! ¡Esto hace que tu Aavegotchi sea cada vez más valioso a lo largo del tiempo!

En Aavegotchi, los términos "Fuerza del Espíritu", "Collateral", "aTokens", "maTokens", y "amTokens" significa lo mismo. ¿Confundido? Revisa esta [página de historial](/spirit-force-history) para más información.

Esta página te proporcionará información útil sobre cuáles son los tokens disponibles y cómo conseguirlos.

Ten en cuenta que eventualmente **necesitas maTokens/amTokens** para invocar tu Gotchis en Polygon Network. Hay varias maneras de obtener maTokens sin necesidad de pasar por aTokens. Sin embargo, por precaución, explicamos cómo conseguir aTokens aquí.

<div class="contentsBox">

**Contenidos**

<ol>
<li><a href=#about>Información</a></li>
<li><a href=#stablecoins>Monedas estables</a></li>
<li><a href=#cryptocurrencies>Criptomonedas</a></li>
<li><a href=#getting-atokens>Obteniendo aTokens</a></li>
<li><a href=#converting-atokens-into-matokens>Convirtiendo aTokens en maTokens</a></li>
<li><a href=#differences-between-matokens-and-amtokens>Diferencias entre maTokens y amTokens</a></li>
</ol>

</div>

## Información

Mientras que el activo subyacente se presta a los prestatarios, aTokens ganará interés en tiempo real, ¡directamente en su cartera! Realmente, puedes ver tu balance incrementar minuto a minuto.

aTokens se puede clasificar en una de dos categorías: (1) criptomonedas, o (2) monedas estables. Las criptomonedas son monedas digitales o virtuales que están protegidas por criptografía. Muchas criptomonedas son redes descentralizadas basadas en la tecnología blockchain—un libro de contabilidad distribuido administrado por una red de computadoras. Las monedas estables son una clase de criptomonedas que intenta ofrecer estabilidad de precios al estar vinculado a una referencia externa como el Dólar de Estados Unidos (USD). El mecanismo subyacente de pegging difiere entre monedas estables, y cada una de ellas tiene su propio perfil de riesgo.

Los siguientes [tokens](https://docs.aave.com/developers/deployed-contracts/deployed-contract-instances) (criptomonedas y monedas estables) están disponibles en el Protocolo de Aave. La columna *soportada por Aavegotchi* indica si un token dado estará disponible para el juego de Aavegotchi. La lista de tokens soportados no están finalizados; habrá votos de twitter/DAO para añadir más aTokens para el juego de Aavegotchi basado en la demanda del jugador.

## Monedas estables

table_stablecoins

## Criptomonedas

table_cryptocurrencies

## Obteniendo aTokens

*Los siguientes pasos se toman desde la [Guía Cero a la Guía del Héroe 2.0](https://medium.com/aave/aave-protocol-zero-to-hero-guide-e3f206e57e45) de Aave Medium. Se ha replicado aquí para la comodidad del lector.*

1). ¡Dirígete al <a href = "https://app.aave.com/">Protocolo de Aave</a> para empezar!

2). Aquí tienes algunas opciones para vincular tu criptocartera, dependiendo del tipo de cartera que tienes:

<img src = "/spirit-force/connect-your-wallet.png" alt = "aave" class="bodyImage" />

3). Before you can use Aave Protocol, you’re going to want to have some crypto assets. The list of available crypto assets are shown in the <a href=#stablecoins>Stablecoins</a> and the <a href=#cryptocurrencies>Cryptocurrencies</a> sections above.

If you don’t own any crypto but you want to join the fun, you’ll need to convert your fiat currency (normal money, like dollars, euros, etc.) into a cryptographic asset (like one of the above).

Lucky for you, Aave recently introduced a fiat to crypto onramp where you can buy crypto assets directly from the Aave Protocol application! Now you can use Transak or Ramp Instant to buy the asset of your choice directly with a credit or debit card or wire transfer in just a few minutes (see below).

<img src = "/spirit-force/buy-with-fiat.png" alt = "aave" class="bodyImage" />

4). Once you have connected your wallet to the platform, you can deposit an asset into Aave Protocol. When you click “deposit”, the interface will show you what you have available in your wallet to deposit. You then select the asset you would like to deposit, choose how much to deposit, and then voilá, you’ve done it! *Note: there will be an "approve" transaction before the actual deposit transaction takes place. This is to grant permission to the deposit contract to use that particular asset you are depositing.*

<img src = "/spirit-force/deposit.gif" alt = "aave" class="bodyImage" />

As soon as your deposit transaction goes through, you benefit from the deposit interest rate. The aToken version of the asset can now be seen in your wallet.

## Convirtiendo aTokens en maTokens

Got your aTokens? Good!

Let's head over to the [maTokens](/matokens) page for Step 2!

## Diferencias entre maTokens y amTokens

Both maTokens and amTokens accrue interest. However, *the way* they accrue interest differs:

* maTokens increase in **value** over time. This applies to Haunt 1 Aavegotchis that use maTokens. The value of the maTokens are increasing, but as the quantity does not change, it is not possible to withdraw maTokens from the Gotchis unless you sacrifice your Gotchi to get at the underlying collateral.

* amTokens increase in **quantity** over time. This applies to Aavegotchis from Haunt 2 and onwards. The interest accrued is reflected as quantity. Hence, it is possible to withdraw amTokens once sufficient interest has been generated.