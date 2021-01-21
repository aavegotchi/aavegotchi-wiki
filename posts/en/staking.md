---
author: Nick Mudge
date: '2020-04-23T07:00:00.000Z'
title: 'Staking'
description: 'Stake GHST, Make FRENS'
contributors: ["mudgen", "unintelligent-nerd"]
---


<div class="headerImageContainer">
<img class="headerImage" src="/staking/staking.png">
<p class="headerImageText">Stake GHST, Make FRENS!</p>
</div>

Staking refers to the process of locking up your cryptocurrency in return for rewards. This is no different in the Aavegotchi project. The native token, [GHST](/posts/ghst), can be staked in the Staking Contract to earn [FRENS](/posts/glossary#frens). 

FRENS are a non-transferable balance within the Aavegotchi Staking Contract. FRENS cannot be purchased. They are meant to reward stakers for their contributions to the Aavegotchi project.

FRENS can then be converted into Raffle Tickets, which can be entered into periodic Raffles to win prizes. 

Continue reading to learn how to stake GHST and earn prizes with your FRENS.

<div class="contentsBox">

**Contents**

<ol>
<li><a href=#purchasing-ghst>Purchasing GHST</a></li>
<li><a href=#how-to-stake>How to Stake</a></li>
<li><a href=#purchasing-raffle-tickets>Purchasing Raffle Tickets</a></li>
<li><a href=#entering-raffles>Entering Raffles</a></li>
<li><a href=#past-raffles-statistics>Past Raffles Statistics</a></li>
<li><a href=#more-resources>More Resources</a></li>
</ol>

</div>

## Purchasing GHST
First, you need to get your hands on some GHST tokens to stake. Our [GHST token page](/posts/ghst) covers the various ways in which you can get yourself some.

## How to Stake
Once you have some GHST tokens, it is time to stake them! 

There are four ways to stake: (1) staking GHST tokens [Mainnet], (2) staking Uniswap GHST-ETH LP tokens [Mainnet], (3) staking GHST tokens [Matic], and/or (4) the GHST-QUICK pool on QuickSwap [Matic].

*Note: Pre-sale GHST tokens cannot be staked until they are unlocked.*

### Staking GHST tokens [Mainnet]
This is the most straightforward way to stake GHST tokens. Head over to the [staking user interface](https://aavegotchi.com/stake). It will look like the image below.

<img class = "bodyImage" src = "/staking/staking-interface.png" alt = "aavegotchi staking">

Select "Stake on Mainnet" and you will be presented with another page with two boxes. The box on the left will be titled "Stake GHST Token" (see image below). If you are staking for the very first time, you have to click on the "Approve" button, which grants the Staking Contract access to your GHST tokens. Once the "Approve" transaction goes through, you can then key in the desired amount of GHST you would like to stake in the "Input amount" field. When you are done, hit the "Stake" button to initiate the staking process.

<img class = "bodyImage" src = "/staking/stake-ghst.png" alt = "stake ghst token aavegotchi">

*For every 1 GHST staked in this way, you receive 1 FRENS / Day.*

### Staking Uniswap GHST-ETH LP tokens [Mainnet]
A second, and more complicated, method is to stake the Uniswap GHST-ETH Liquidity Provider (LP) tokens. To do this, you have to have both GHST tokens and ETH in your wallet. Head over to the [GHST-ETH Uniswap pool](https://app.uniswap.org/#/add/0x3f382dbd960e3a9bbceae22651e88158d2791550/ETH) to add liquidity for both tokens (see image below). Users have to contribute liquidity at a ratio of 50% GHST and 50% ETH to the pool. The amount of GHST and ETH required to acquire 1 GHST-ETH LP token varies based on the price of the pool token at the time.  In return for staking both GHST and ETH, users will receive the GHST-ETH LP token from Uniswap. 

<img class = "bodyImage" src = "/staking/ghst-eth-uniswap-interface.png" alt = "GHST-ETH LP Tokens Aavegotchi staking">

Once you have acquired your GHST-ETH LP token, head to the [staking user interface](https://aavegotchi.com/stake). It will look like the image below.

<img class = "bodyImage" src = "/staking/staking-interface.png" alt = "aavegotchi staking">

Select "Stake on Mainnet" and you will be presented with another page with two boxes. The box on the right will be titled "Stake Uniswap GHST Token" (see image below). If you are staking for the very first time, you have to click on the "Approve" button, which grants the Staking Contract access to your GHST-ETH LP tokens. Once the "Approve" transaction goes through, you can then key in the desired amount of GHST-ETH LP tokens you would like to stake in the "Input amount" field. When you are done, hit the "Stake" button to initiate the staking process.

<img class = "bodyImage" src = "/staking/stake-uniswap-ghst-eth.png" alt = "stake uniswap ghst-eth LP token aavegotchi">
 
*For every 1 GHST-ETH staked in this way, you receive 100 FRENS / Day.*

Why the huge difference in the number of FRENS earned through this method? Staking GHST-ETH LP tokens has the risk of [impermanent loss](/posts/glossary#impermanent-loss). You are compensated for the increased risk you take.

### Staking GHST tokens [Matic]

The third method involves transferring GHST tokens from Ethereum Mainnet to the Matic Network, a layer 2 solution.

This is done by using the [Bridge to Matic Interface](https://aavegotchi.com/bridge). Approve the contract to use your GHST tokens. Once that transaction goes through, input the amount of GHST you would like to transfer to Matic Network. Once your transaction has confirmed on Ethereum, it takes roughly 7-8 minutes for your balance to reflect on Matic. Your balance will update automatically. Please be patient!

Next, you have to configure your Metamask to display your wallet balance. Do refer to this [Matic Guide](/matic) for detailed instructions on how one can configure their Metamask wallet to include the Matic Network.

Connect your Metamask to Matic Network and head over to the [Matic Staking Page](https://aavegotchi.com/stake-matic) on the Aavegotchi DApp. Approve the contract to use your GHST tokens on Matic. Once the transaction goes through, input the amount of GHST you would like to deposit. Presto! You are done!

### Staking in the GHST-QUICK pool on QuickSwap [Matic]

The fourth method involves transferring GHST tokens from Ethereum Mainnet to the Matic Network, a layer 2 solution.

Do refer to this [Matic Guide](/matic) for detailed instructions on how one can configure their Metamask wallet to include the Matic Network. Once that is done, follow the subsequent steps found in the [Matic Liquidity Migration Incentives post](https://aavegotchi.medium.com/ghst-token-live-on-matic-100k-usd-liquidity-migration-incentives-announced-faq-2590daa25d73).

1. Get some QUICK token from [QuickSwap](https://quickswap.exchange). The most liquid pairs are currently QUICK-UNI, QUICK-WETH and QUICK-USDC. Soon GHST-QUICK will also be an option.

2. Become a liquidity provider in the GHST-QUICK Pool on Quickswap.

3. Take your LP tokens received from Step 2 and stake them into the GHST-QUICK Staking Pool to get stkGHST.

4. Finally, take the stkGHST receipt tokens emitted from the GHST Staking Contract and stake them into the Quickswap Rewards pool at [https://quickswap.exchange/#/quick](https://quickswap.exchange/#/quick).

Now you are earning QUICK and FRENS!

Similar to Staking Uniswap GHST-ETH LP tokens, there is a risk of impermanent loss using this method as well.

## Purchasing Raffle Tickets

Once you have enough FRENS, head to the [Shop Bulk Buy user interface](https://aavegotchi.com/tickets) to purchase raffle tickets with FRENS.

Unlike FRENS, Raffle Tickets can be transferred from one wallet to another. They can also be bought/sold on [marketplaces](/marketplace).

There are six different categories of raffle tickets, ranging from Common (least valuable) to Godlike (most valuable):

table_RaffleTickets

Blog post: [Stake GHST, Make FRENS Live on Ethereum Mainnet!](
https://aavegotchi.medium.com/stake-ghst-make-frens-live-on-ethereum-mainnet-658bd507d67b)

Users are allowed to buy tickets belonging to different categories in a single transaction. You do **not** need to create separate buy transactions for each category of raffle ticket.

## Entering Raffles

A raffle runs for a period of time. During this period, you can submit your raffle tickets for a chance to win prizes. Submitting raffle tickets into the draw involves an Ethereum transaction; it is not done automatically. If you have many different categories of raffle tickets and wish to enter them together as a bundle, this is also possible. You do **not** need to create separate transactions for entering each category of raffle tickets into the raffle.

When the raffle is over, you can find out what prizes you have won and can claim them. 

If you choose not to participate in a given Raffle, you do not need to do anything with your raffle tickets. You can also accumulate raffle tickets for subsequent raffles if you like to do so.

As an example, the first raffle had a Chainlink Theme. Here were the prizes for the raffle:

<img class = "bodyImage" src = "/staking/link-raffle-prizes.png" alt = "Aavegotchi Chainlink-theme Raffle Prizes">

A total of 6010 prizes.

[Prizes on OpenSea](https://opensea.io/activity/aavegotchi-wearable-vouchers)

Each prize will be allocated to a randomly drawn raffle ticket, where each ticket has an equal chance of winning. 

You can improve your probability of winning by:
* Submitting multiple tickets
* Enter raffle ticket categories with more prizes (e.g. Common)

Random numbers for the Raffle prize winners are generated through Chainlink's [on-chain verifiable randomness generator](https://blog.chain.link/verifiable-random-functions-vrf-random-number-generation-rng-feature/).

The prizes, which are Wearable Vouchers, could be exchanged 1:1 for the actual Aavegotchi wearable once the game launches. This will take place at the [Aavegotchi Shop](https://aavegotchi.com/shop).

## Past Raffles Statistics
Knowing how to stake FRENS and participate in Raffles is good, you say. But what about the numbers? What are the probabilities of winning a wearable based on past raffles? Visit the [Raffles Statistics page](/raffles-stats) for the historical data.

## More Resources

- [Aavegotchi Raffles — A FRENLY Guide](https://aavegotchi.medium.com/aavegotchi-raffles-a-frenly-guide-66f624c9bc60)
- [Aavegotchi ❤ Chainlink Raffle — You Just WON](https://aavegotchi.medium.com/aavegotchi-chainlink-raffle-you-just-won-af87712f1018)
- [Anon and the Green Ticket](https://aavegotchi.medium.com/anon-and-the-green-ticket-5776969b3a69)