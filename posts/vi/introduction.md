---
author: Coder Dan
date: '2020-04-23T07:00:00.000Z'
title: 'Aavegotchi'
description: 'Giới thiệu về trang Wiki của Aavegotchi'
image: "aavegotchi.png"
contributors:
  - "cinnabarhorse"
  - "unintelligent-nerd"
---

<div class="headerImageContainer">
<img class="headerImage" src="/aavegotchi.png" alt="aavegotchi" />
<p class="headerImageText">Aavegotchi</p>
</div>

**Aavegotchi** is a DeFi-enabled crypto collectibles game developed by Singapore-based Pixelcraft Studios that allows players to stake [Non-fungible tokens (NFTs)](/glossary#non-fungible-token) avatars with interest-generating [aTokens](/atokens) and interact with the Aavegotchi [metaverse](/metaverse). It is a unique combination of [Decentralized Finance (DeFi)](/glossary#defi-101) and NFTs.

Aavegotchis là những bóng ma pixel cư ngụ trên blockchain Ethereum, tồn tại dựa trên tiêu chuẩn
ERC-721**. Their value is determined by rarity level, which is calculated via multiple factors, such as base [traits](/traits), amount of staked collateral/aTokens, and equipped [wearables](/wearables).</p> 

Để nâng cấp các Aavegotchi, người chơi cần tham gia vào hàng loạt các hoạt động bao gồm các mini-games, quản trị, và các buổi meetups. Aavegotchis cũng có thể tăng độ hiếm bằng cách trang bị những phụ kiện trong game và lên cấp. 

Rare Aavegotchis not only have higher secondary [marketplace](/marketplace) value, they also enable the Aavegotchi to perform better in [rarity farming](/rarity-farming)—a minigame that rewards the rarest Aavegotchis with GHST tokens. 

Aavegotchi is governed by [AavegotchiDAO](/dao) that manages all funds generated through the [GHST token](/ghst) distribution.

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

*  **Collateral stake:** Each Aavegotchi ERC721 NFT manages an escrow contract address that holds an Aave-backed ERC20 collateral, or “aToken”. [aTokens](/atokens) generate yield via Aave’s LendingPool, which increases the quantity of aTokens held in the wallet. Do đó, lượng aToken được giữ trong địa chỉ ký quỹ của Aavegotchi sẽ tăng lên theo thời gian. 

*  **Đặc điểm: ** Aavegotchi sở hữu nhiều đặc điểm có ảnh hưởng đến độ hiếm, tính hiệu quả khi chơi mini game của chúng, và loại phụ kiện mà chúng có thể trang bị. Một số đặc điểm là bẩm sinh, và những đặc điểm khác lại phụ thuộc vào độ tương tác giữa người chơi và Aavegotchi. **See [Traits](/traits).**
  
      * **Đặc điểm ngẫu nhiên**: Từ khi được sinh ra, mỗi Aavegotchi sẽ được chỉ định một vài thông số đặc điểm ngẫu nhiên bằng cách sử chương trình phát sinh số ngẫu nhiên ChainLinh VRF. Giá trị đặc điểm được phân bổ theo đường cong hình quả chuông, và mỗi đặc điểm sẽ được gắn với một trong các giá trị bao gồm Common, Uncommon, Rare, or Mythical dựa vào độ hiếm của chúng.

    *  **Kinship**: “Kinship” is not randomly assigned, but rather starts at a fixed value (50) upon birth and increases or decreases based on various factors, such as how long the Aavegotchi has been with the same owner, and how often the owner interacts with it.

    *  **Kinh nghiệm:** Aavegotchi lên cấp khi có nhiều kinh nghiệm thông qua việc vote trong AavegotchiDAO và tham gia vào minigame. Cứ mỗi ba cấp, Aavegotchi lại nhận được một [Spirit Point](/glossary#spirit-point) có thể phân phối vào để giúp tăng hoặc giảm một trait nhất định.

* ** Phụ kiện ** Bên cạnh việc quản lý kho ký quỹ của aToken, Aavegotchi cũng được hỗ trợ thêm chuẩn ERC998 tạm thời, cho phép chúng quản lý những NFT con, được gọi là phụ kiện trong hệ sinh thái Aavegotchi. Không phải phụ kiện nào cũng có phù hợp với tất cả Aavegotchi. Một số phụ kiện có thể được trang bị cho một loại Aavegotchi được stake với một loại tiền ký quỹ nhất định, ở một cấp độ nhất định và với những đặc điểm nhất định. Một vài phụ kiện có thể tăng hoặc giảm một số đặc điểm trong Aavegotchi. Ví dụ, việc trang bị một thanh kiếm có thể làm tặng nhẹ tính hiếu chiến của Aavegotchi, trong khi đó việc trang bị một chiếc áo Bob Marley có thể giảm đi cấp độ năng lượng của nó.

Mối quan hệ giữa Collateral stake, Traits, Wearables, và Kinship được mô tả rõ nhất thông Đồ thị Onion (xem bên dưới). Mỗi lớp được xây dựng trên những lớp trước, và được phản ánh bằng chính Aavegotchi!

<img class = "bodyImage" src = "/introduction/aavegotchi-onion-diagram.png" alt = "Aavegotchi Onion Diagram" />



## Giá trị của Aavegotchi

Việc đánh giá Aavegotchi đến từ giá trị nội tại và độ hiếm của nó.

* **Giá trị nội tại** Giá trị nội tại là giá trị được định giá bằng lượng tiền ký quỹ stake trong Aavegotchi. Nếu Aavegotchi được stake với 10 aDAI, thì giá trị nội tại sẽ là khoản 10 aDAI, cộng thêm bất kỳ aDAI phát sinh nào có được từ Lending Pool. Initially, only [ERC20](/glossary#erc-20) tokens listed on the Aave platform (aTokens) will be available as collaterals. Tuy nhiên, một khi AavegotchiDAO được triển khai, cộng đồng sẽ có thể vote xem những loại tiền ký quỹ nào sẽ được cho phép. 

* **Giá trị hiếm** Giá trị hiếm được định hình bằng cách tính toán độ hiếm của một đặc điểm mà Aavegotchi sỡ hữu và những phụ kiện được trang bị trong thế giới Aavegotchi. Không giống như những game NFT khác, độ hiếm không phải là một giá trị cố định trong Aavegotchi. Nó có thể thay đổi theo thời gian khi Aavegotchis lên cấp và trang bị những phụ kiện khác. Dodos, một Aavegotchi hiếm trong tuần này có thể trở nên bình thường vào tuần sau, và vân vân, phụ thuộc vào sự phân bổ tổng thể của các thuộc tính và phụ kiện trong thế giới Aavegotchi. Từ đó, một khái niệm tuyệt vời mang tên "rarity farming" đã được sinh ra và được giải thích qua [trang này](/rarity-farming).



## Vũ trụ Aavegotchi

Vũ trụ Aavegotchi bao hàm tất cả những yếu tố cho phép các Aavegotchi được vận hành:

* [Portals](/portals)
* [Token Tiện ích GHST](/ghst)
* [AavegotchiDAO](/dao)
* [Aavegotchi Realm](/metaverse)