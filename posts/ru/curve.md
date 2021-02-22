---
author: Unintelligent Nerd
date: '2020-04-23T07:00:00.000Z'
title: 'Изогнутая кривая'
description: 'Изогнутая кривая Aavegotchi'
image: "кривая/изогнутая-кривая.png"
contributors:
  - "unintelligent-nerd"
---


<div class="headerImageContainer">
<img class="headerImage" src="/curve/bonding-curve.png">
<p class="headerImageText">Изогнутая кривая</p>
</div>

Изогнутая кривая токенов (token bonding curve или TBC) — это математическая кривая, определяющая соотношение между ценой токенов и их предложением.

В стандартной TBC цена токенов увеличивается по мере роста предложения. В стандартной TBC цена токенов увеличивается по мере роста предложения и снижается по мере уменьшения предложения. Поскольку Изогнутая Кривая Aavegotchi была запущена через [децентрализованное автономное первоначальное предложение монет (DAICO)](/glossary#daico) на платформе [Aragon](/glossary#aragon), в этой статье также обсуждаются DAICO.

<div class="contentsBox">

Содержание:

<ol>
<li><a href=#mechanics>Механика</a></li>
<li><a href=#aavegotchi-bonding-curve>Изогнутая кривая Aavegotchi</a></li>
<li><a href=#aavegotchi-daico>Aavegotchi DAICO</a></li>
<li><a href=#aavegotchi-token-supply-dynamics>Динамика предложения токенов Aavegotchi</a></li>
<li><a href=#arbitrage>Арбитраж</a></li>
<li><a href=#learn-more>Больше информации</a></li>
</ol>

</div>

## Механика

### Minting / Burning on demand

Изогнутые кривые пользуются алгоритмом ценообразования, чтобы служить в качестве автоматического маркетмейкера и обеспечивать всегда доступный источник ликвидности. Пользователи могут взаимодействовать с кривой, размещая токены в ее резервном пуле. Когда они это делают, изогнутая кривая создает для пользователя соответствующие токены на основе алгоритма ценообразования. Только что выпущенные токены могут иметь определенную полезность и даже торговаться, но всегда могут быть обменены обратно через кривую на токены в ее резервном пуле.

Когда токен приобретается через TBC, каждый последующий покупатель должен будет заплатить более высокую цену за токен, что принесет потенциальную прибыль ранним инвесторам. Когда все больше людей узнают о проекте, и покупки токенов продолжаются, их стоимость постепенно возрастает по изогнутой кривой. Поэтому ранние инвесторы, которые раньше других находят перспективные проекты и покупают токены через кривую TBC, в будущем, при их продаже, могут получить прибыль.

### ФОРМУЛА

Изогнутые кривые бывают разных форм и размеров. Для проекта Aavegotchi команда приняла Формулу Bancor:

<img style = "border: 1px solid; margin-bottom: 15px" src = "/curve/reserve-ratio.png" alt = "token bonding curve" width = "750" />

### ОБЪЯСНЕНИЕ ФОРМУЛЫ

**Резервный Токен** относится к токену, который пользователи помещают в изогнутую кривую.

**Непрерывный Токен** относится к токену, который получают из изогнутой кривой при размещении Резервного Токена.

В случае с Aavegotchi Резервный и Непрерывный Токены — это DAI и GHST соответственно.

**Связующий Вес** (также известный как Коэффициент Резерва) представляет собой фиксированное соотношение (от 0 до 100%) между общей ценностью Непрерывных Токенов (общее предложение × цена единицы) и значением баланса его Резервных Токенов.  Связующий Вес является константой по формуле Bancor, поскольку как баланс Резервного Токена, так и общая стоимость Непрерывного Токена (также известная как рыночная капитализация) колеблются в зависимости от покупок и продаж.

Каждая покупка или продажа Непрерывного Токена (GHST) вызывает увеличение или уменьшение Резервных токенов (DAI). Поэтому цена Непрерывного Токена по отношению к его Резервным Токенам должна постоянно пересчитываться для поддержания их Связующего Веса.


Связующий Вес определяет ценовую чувствительность, он указывает, как должна корректироваться цена Непрерывного Токена, чтобы поддерживаться с каждой транзакцией.

Более высокое соотношение резервов между балансом Резервного Токена и Непрерывным Токеном приведет к снижению чувствительности цены, а это означает, что каждая покупка и продажа будут иметь менее пропорциональное влияние на движение цены Непрерывного Токена. И наоборот, более низкое соотношение между балансом Резервного токена и Непрерывным Токеном приведет к повышению чувствительности цен, а это означает, что каждая покупка и продажа будут иметь более пропорциональное влияние на движение цены Непрерывного Токена.

**Коэффициент Резерва Aavegotchi составляет 33%!** Это означает, что вам не нужно бояться китов. Они не могут пампить и дампить токены GHST, так как изогнутая кривая нацелена против слишком крупных транзакций!

Если вы хотите увидеть это в действии, ознакомьтесь с этой интерактивной моделью изогнутой кривой от Coderdan [тут](https://observablehq.com/@cinnabarhorse/aavegotchi-bonding-curve).

КРИВАЯ ВЕЧНА!

## Изогнутая кривая Aavegotchi
Изогнутая кривая Aavegotchi была создана 14 сентября 2020 года с помощью смарт-контракта, поддерживаемого [Aragon Fundraising](https://fundraising.aragon.black/). Кривая была немедленно открыта сразу после завершения предпродажи на 500 000 GHST. Кривая не ограничена по размеру, не имеет ограничений по времени и предлагает цену открытия 0,2 DAI за GHST. Ее Связующий Вес составляет 33%.

Вам нужно будет пройти KYC, чтобы покупать/продавать токены через кривую. Чуваки, соблюдение требований важно, ведь мы живем в обществе и не хотим, чтобы правительство препятствовало проекту. Покупки с помощью кривой производится в DAI. Это работает так же и в обратную сторону, вы можете продать свой GHST на рынок за DAI, но зачем вам это делать? :( :( :(

Если вы не можете пройти KYC из-за своего гражданства, не волнуйтесь! **Вы по-прежнему сможете взаимодействовать с любой другой частью метавселенной Aavegotchi**.  Вам просто нужно приобрести GHST на DEX, например Uniswap или Balancer, или на CEX, например OKex. Узнайте, как получить токены GHST [здесь](/ghst#get-ghst).

## Aavegotchi DAICO
Децентрализованное автономное первоначальное предложение монет (DAICO) — это новый метод сбора средств, который направлен на объединение лучших характеристик децентрализованной автономной организации (DAO) с функциями первоначального предложения монет (ICO). DAICO — это модель, согласно которой инвесторы имеют контроль над собранными средствами после завершения их сбора. The investors could influence how developers have access to the funds and at what frequency through a "tap" mechanism. In addition, investors can also vote to do away with the project and have their funds returned.

The Aavegotchi project launched the token bonding curve through a DAICO on Aragon.

**This is SAFU. Do. Not. Remove. The. Bonding. Curve.** It prevents investors from getting rugged as they ultimately have control over the funds within the DAICO/bonding curve!

The first iteration of [AavegotchiDAO](/dao) launched in tandem with the GHST distribution on the bonding curve. GHST holders had the power to vote on increasing / maintaining the funds distributed by the tap mechanism of the token bonding curve (TBC) reserve to Pixelcraft Studios (the team behind Aavegotchi) to support development. The first AavegotchiDAO proposal of increasing the Aavegotchi DAICO tap from 50,000 DAI to 100,000 DAI per month passed with 99% approval on 18 October 2020.

## Динамика предложения токенов Aavegotchi
In our discussion of the token bonding curve/DAICO above, we learned that the total supply of the GHST token is dynamic. When investors use their DAI to buy GHST from the bonding curve, new GHST tokens are minted and the total supply of circulating GHST would increase. The reverse holds true as well. When users sell their GHST back into the bonding curve, they receive an equivalent amount in DAI based on the prevailing GHST price on the bonding curve.

The inflation of GHST tokens through net purchases on the bonding curve is positively correlated to the GHST price. **The bonding curve has been mathematically programmed to increase the price of GHST as the circulating supply of GHST increases.**

## Арбитраж
For users who have completed KYC, they will be able to arbitrage the GHST price differences between the token bonding curve and other DEXes such as Uniswap and Balancer. According to [Investopedia](https://www.investopedia.com/terms/a/arbitrage.asp), "Arbitrage is the purchase and sale of an asset in order to profit from a difference in the asset's price between markets. It is a trade that profits by exploiting the price differences of identical or similar financial instruments in different markets or in different forms. Arbitrage exists as a result of market inefficiencies and would therefore not exist if all markets were perfectly efficient." This is possible as DEXes come equipped with their own Automated Market Maker (AMM) formula and the net purchase/sale actions of GHST tokens on these DEXes would result in prices that are different from the token bonding curve. A savvy investor might consider exploiting such inefficiencies in the market (*alpha leak here*).

## Больше информации

* For more on [Aragon Fundraising and bonding curves!](https://fundraising.aragon.black/components/bonding-curve)

* Read more at [Bonding Curves Explained](https://yos.io/2018/11/10/bonding-curves/)

* Article on [Bonding Curves](https://defiprime.com/bonding-curve-explained) by DeFi Prime.

* Article on [DAICO](https://cointelegraph.com/explained/what-is-a-daico-explained) by the Coin Telegraph.