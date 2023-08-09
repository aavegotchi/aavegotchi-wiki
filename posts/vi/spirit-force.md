---
author: Unintelligent Nerd
date: '2020-04-23T07:00:00.000Z'
title: 'Linh Lực'
description: 'Tất Tần Tật Về Linh Lực Trong Aavegotchi'
image: "spirit-force/aETH.svg"
contributors:
  - "unintelligent-nerd"
---

<div class="headerImageContainer">
<img class="headerImage" src="/spirit-force/aETH.png">
<p class="headerImageText">The aETH aToken / Đồng aETH (aToken của Ethereum)</p>
</div>

Mỗi Gotchi đều tồn tại nhờ vào Spirit Force. Khi mở [portal](/portals), người triệu hồi (bạn chứ ai nữa!) sẽ có thể ấn định Spirit Force vào Gotchi của mình để có thể triệu hồi người bạn mới chào đời!

Vậy thì Spirit Force chính xác là gì?

Spirit Force are [Aave's](https://aave.com/) interest-bearing tokens embedded within your Aavegotchi! Điều này khiến giá trị của Aavegotchi tăng dần theo thời gian!

*In Aavegotchi, the terms "Spirit Force", "Collateral", "aTokens", "maTokens", and "amTokens" mean the same thing. Confused? Check out this [history page](/spirit-force-history) for more information.*

<div class="contentsBox">

**Nội dung**

<ol>
<li><a href=#supported-spirit-force>Supported Spirit Force</a></li>
<li><a href=#buying-matokens-amtokens>Buying maTokens/amTokens</a></li>
<li><a href=#differences-between-matokens-and-amtokens>Differences between maTokens and amTokens</a></li>
<li><a href=#aura-in-the-gotchiverse>Aura in the Gotchiverse</a></li>
</ol>

</div>

## Supported Spirit Force

table_supportedCollaterals

## Buying maTokens/amTokens

Aavegotchis are unable to use your regular Aave aTokens. They need to use *specially created ones.* ;)

The type of token you need depends on the [haunt](/haunt) your Aavegotchi belongs to:

* Haunt 1 Aavegotchis: maTokens

* Haunt 2 (and onwards) Aavegotchis: amTokens

**Important: amTokens used as Spirit Force comes from Aave V2, not V3.**

After opening a portal, you are given a choice to select 1 Gotchi from among 10 Gotchis. If you do not have the particular type of Spirit Force (maToken/amToken) to summon the Gotchi, the top righthand corner of the UI provides a convenient way to acquire that spirit force.

The example in the screenshot below shows the summoning of an maWETH Gotchi. The summoner lacks maWETH in his/her wallet. To get maWETH, he/she could click on the "Get aWETH" text (circled in red in the screenshot below). He/she could then trade any existing tokens in their wallet for maWETH to summon the Gotchi.

<img class="bodyImage" src="/spirit-force/summoning-an-aavegotchi.png" />

## Differences between maTokens and amTokens

Both maTokens and amTokens accrue interest. However, *the way* they accrue interest differs:

* maTokens increase in **value** over time. This applies to Haunt 1 Aavegotchis that use maTokens. The value of the maTokens are increasing, but as the quantity does not change, it is not possible to withdraw maTokens from the Gotchis unless you sacrifice your Gotchi to get at the underlying collateral.

* amTokens increase in **quantity** over time. This applies to Aavegotchis from Haunt 2 and onwards. The interest accrued is reflected as quantity. Hence, it is possible to withdraw amTokens once sufficient interest has been generated.

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