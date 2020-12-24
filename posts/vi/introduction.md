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
Aavegotchi là những vật sưu tầm có độ hiếm cư ngụ trên blockchain của Ethereum, được hỗ trợ bởi tiêu chuẩn ERC-721 được dùng trong những game blockchain nổi tiếng như CryptoKitties, Axie Infinity, và Cryptovoxels. Aavegotchis sở hữu ba thuộc tính định hình giá trị chung và độ hiếm của chúng trong vũ trụ Aavegotchi: **collecteral stake (số tiền ký gửi được stake), traits (đặc điểm), và wearables (phụ kiện).**

*  **Collateral stake:** Mỗi Aavegotchi ERC721 NFT sẽ gắn với một địa chỉ hợp đồng ký quỹ lưu trữ tài sản ký gửi theo tiêu chuẩn ERC20 được có được từ Aave Protocol, hay còn gọi là "aToken". [aTokens](https://wiki.aavegotchi.com/atokens) được tạo ra từ LendingPool (Quỹ Cho Vay) của Aave, với khả năng tăng số lượng aToken nắm giữ trong ví lên. Do đó, lượng aToken được giữ trong địa chỉ ký quỹ của Aavegotchi sẽ tăng lên theo thời gian.


*  **Đặc điểm: ** Aavegotchi sở hữu nhiều đặc điểm có ảnh hưởng đến độ hiếm, tính hiệu quả khi chơi mini game của chúng, và loại phụ kiện mà chúng có thể trang bị. Một số đặc điểm là bẩm sinh, và những đặc điểm khác lại phụ thuộc vào độ tương tác giữa người chơi và Aavegotchi. **Xem[ Đặc điểm](/posts/traits)**

    * **Đặc điểm ngẫu nhiên**: Từ khi được sinh ra, mỗi Aavegotchi sẽ được chỉ định một vài thông số đặc điểm ngẫu nhiên bằng cách sử chương trình phát sinh số ngẫu nhiên ChainLinh VRF. Giá trị đặc điểm được phân bổ theo đường cong hình quả chuông, và mỗi đặc điểm sẽ được gắn với một trong các giá trị bao gồm Common, Uncommon, Rare, or Mythical dựa vào độ hiếm của chúng.

    *  **Kinship**: "Kinship" sẽ không được chỉ định một cách ngẫu nhiên, nhưng sẽ bắt đầu ở một giá trị cố định khi sinh ra và sẽ tăng hoặc giảm dựa trên nhiều yếu tố, ví dụ như khoảng thời gian mà Aavegotchi được ở với cùng một người chủ, và cách người chủ tương tác với nó.

    *  **Kinh nghiệm:** Aavegotchi lên cấp khi có nhiều kinh nghiệm thông qua việc vote trong AavegotchiDAO và tham gia vào minigame. Cứ mỗi ba cấp độ, Aavegotchi sẽ nhận được một [ Spirit Point ](/posts/glossary#spirit-point) có thể được phân bổ cho việc tăng hoặc giảm một đặc điểm nhất định.

* ** Phụ kiện ** Bên cạnh việc quản lý kho ký quỹ của aToken, Aavegotchi cũng được hỗ trợ thêm chuẩn ERC998 tạm thời, cho phép chúng quản lý những NFT con, được gọi là phụ kiện trong hệ sinh thái Aavegotchi. Không phải phụ kiện nào cũng có phù hợp với tất cả Aavegotchi. Một số phụ kiện có thể được trang bị cho một loại Aavegotchi được stake với một loại tiền ký quỹ nhất định, ở một cấp độ nhất định và với những đặc điểm nhất định. Some wearables can increase or decrease certain traits of an Aavegotchi. For example, equipping a sword may slightly boost an Aavegotchi’s aggressiveness, whereas equipping a Bob Marley shirt may decrease its energy level.

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