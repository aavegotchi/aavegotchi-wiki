---
author: Coder Dan
date: '2020-04-23T07:00:00.000Z'
title: 'Aavegotchi'
description: 'Introduction to the Aavegotchi Wiki'
image: "aavegotchi.png"
contributors:
  - "cinnabarhorse"
  - "unintelligent-nerd"
---

<div class="headerImageContainer">
<img class="headerImage" src="/aavegotchi.png" alt="aavegotchi" />
<p class="headerImageText">Aavegotchi</p>
</div>

**Aavegotchi** là một game crypto thể loại sưu tập dựa trên khái niệm DeFi, được phát triển bởi Pixelcraft Studio, mà trong đó, người chơi có thể stake những nhân vật đại diện dạng NFT với những [aTokens](/posts/atokens) sinh lợi nhuận và tương tác với Aavegotchi [metaverse](/posts/metaverse). Trò chơi này là một sự kết hợp độc đáo giữa DeFi với NFT.

Aavegotchis là những bóng ma pixel cư ngụ trên blockchain Ethereum, tồn tại dựa trên tiêu chuẩn **ERC-721**. Giá trị của chúng được định hình bởi độ hiếm, được tính toán thông qua nhiều yếu tố, ví dụ như những đặc tính ban đầu, lượng tài sản ký gửi được stake, và [phụ kiện](/posts/wearables) được trang bị.

Để nâng cấp các Aavegotchi, người chơi cần tham gia vào hàng loạt các hoạt động bao gồm các mini-games, quản trị, và các buổi meetups. Aavegotchis cũng có thể tăng độ hiếm bằng cách trang bị những phụ kiện trong game và lên cấp.

Những Aavegotchi hiếm không chỉ có giá trị cao trên những thị trường thứ cấp, mà còn cho phép Aavegotchi hoạt động tốt hơn trong [rarity farming](https://wiki.aavegotchi.com/rarity-farming)—một minigame để tặng thưởng token GHST cho những Aavegotchis hiếm nhất.

Aavegotchi được quản trị bởi[AavegotchiDAO](/posts/dao), có quyền quyết định với tất cả ngân quỹ được sinh ra thông qua quá trình phân bổ [GHST token](/posts/ghst).

<div class="contentsBox">

**Nội dung**

<ol>
<li><a href=#about-aavegotchis>Về Aavegotchi</a></li>
<li><a href=#aavegotchi-value>Giá trị của Aavegotchi</a></li>
<li><a href=#the-aavegotchi-universe>Vũ trụ Aavegotchi</a></li>
</ol>

</div>

## Về Aavegotchi
Aavegotchis are rare crypto-collectibles living on the Ethereum blockchain, backed by the ERC-721 standard used in popular blockchain games such as CryptoKitties, Axie Infinity, and Cryptovoxels. Aavegotchis possess three attributes that determine their overall value and rarity within the Aavegotchi universe: **collateral stake, traits, and wearables.**

*  **Collateral stake:** Each Aavegotchi ERC721 NFT manages an escrow contract address that holds an Aave-backed ERC20 collateral, or “aToken”. [aTokens](https://wiki.aavegotchi.com/atokens) generate yield via Aave’s LendingPool, which increases the quantity of aTokens held in the wallet. Thus, the amount of aTokens held in the Aavegotchi’s escrow address grows over time.


*  **Traits:** Aavegotchis possess multiple traits that influence their rarity, their performance in mini-games, and the wearables they can equip. Some are generated randomly upon birth, and others depend on user interactions with the Aavegotchi. **See [Traits](/posts/traits).**

    * **Random Traits**: Upon birth, every Aavegotchi is assigned several random trait values using the ChainLink VRF random number generator. Trait values are distributed on a bell-curve, and each trait is assigned a value of Common, Uncommon, Rare, or Mythical depending on its rarity.

    *  **Kinship**: “Kinship” is not randomly assigned, but rather starts at a fixed value upon birth and increases or decreases based on various factors, such as how long the Aavegotchi has been with the same owner, and how often the owner interacts with it.

    *  **Experience:** Aavegotchis level up as they gain more experience by voting in AavegotchiDAO and participating in mini-games. Every three levels, Aavegotchis receive one [Spirit Point](/posts/glossary#spirit-point) that can be allocated towards increasing or decreasing a certain trait.

* **Wearables** In addition to managing the aToken escrow, Aavegotchis also extend the ERC998 Composables standard, which allows them to manage child NFTs, known as wearables in the Aavegotchi ecosystem. Not every wearable can be equipped by every Aavegotchi. Some wearables may be exclusively equipped by Aavegotchis staked with certain collaterals, those of a certain level, and those with certain traits. Some wearables can increase or decrease certain traits of an Aavegotchi. For example, equipping a sword may slightly boost an Aavegotchi’s aggressiveness, whereas equipping a Bob Marley shirt may decrease its energy level.

The relationship between Collateral stake, Traits, Wearables, and Kinship is best represented by an Onion Diagram (see below). Each layer builds upon the previous layers, with the sum being the Aavegotchi itself!

<img class = "bodyImage" src = "/introduction/aavegotchi-onion-diagram.png" alt = "Aavegotchi Onion Diagram" />

## Aavegotchi Value
The valuation of an Aavegotchi comes from both from its intrinsic value and from its rarity value.

* **Intrinsic value** Intrinsic value is the denominated value of the Aavegotchi’s staked collateral. If the Aavegotchi is staked with 10 aDAI, then the intrinsic value would be 10 aDAI, plus whatever extra aDAI has accrued from the Lending Pool. Initially, only ERC20 tokens listed on the Aave platform (aTokens) will be available as collaterals. However, once AavegotchiDAO launches, the community will be able to vote on which new collaterals to allow.

* **Rarity value** Rarity value is determined by calculating the rareness of each Aavegotchi’s traits and equipped wearables within the Aavegotchi universe. Unlike other NFT games, rarity is not a fixed value in Aavegotchi. It can change over time as Aavegotchis level up and equip different wearables. Thus, a rare Aavegotchi one week could become common, and vice versa, depending on the overall distribution of traits and wearables within the Aavegotchi universe. This enables a novel concept known as “rarity farming”, which is explained in more detail in the Aavegotchi official whitepaper to be released soon.

## The Aavegotchi Universe
The Aavegotchi Universe encompasses all the elements that allow Aavegotchis to operate:
* [Portals](/posts/portals)
* [GHST Utility Token](/posts/ghst)
* [AavegotchiDAO](/posts/dao)
* [Aavegotchi Realm](/posts/metaverse)