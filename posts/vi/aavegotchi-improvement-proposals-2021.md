---
author: Coder Dan
date: 2020-04-23T07:00:00.000Z
title: Aavegotchi Improvement Proposals (AGIPs)
description: A list of Aavegotchi Improvement Proposals (AGIPs) in Year 2021
contributors:
  - unintelligent-nerd
---

<div class="contentsBox">

**Nội dung**

<ol>
<li><a href=#add-fees-to-bonding-curve>Add fees to Bonding Curve</a></li>
<li><a href=#increase-daico-tap-for-ghst-purchases>Increase DAICO tap for GHST purchases</a></li>
<li><a href=#proposal-for-haunt-2>Proposal for Haunt 2</a></li>
<li><a href=#give-unique-non-transferable-background-to-haunt-1-aavegotchis>Give unique non-transferable Background to Haunt 1 Aavegotchis</a></li>
<li><a href=#add-fee-on-baazaar-to-support-rarity-farming>Add Fee on Baazaar to Support Rarity Farming</a></li>
<li><a href=#earn-xp-for-successful-signal-proposals>Earn XP for Successful Signal Proposals</a></li>
<li><a href=#voting-power-based-on-brs>Voting power based on BRS</a></li>
<li><a href=#voting-power-based-on-wearables--maall-price>Voting power based on Wearables' Maall Price</a></li>
<li><a href=#partnership-between-aavegotchidao--pixelcraft--and-dinoswap>Partnership between AavegotchiDAO, Pixelcraft, and DinoSwap</a></li>
<li><a href=#liquidity-manager---frens-committee>Liquidity Manager / FRENS Committee</a></li>
<li><a href=#launch-haunt-2>Launch Haunt 2</a></li>
<li><a href=#add-an-aging-mechanic-to-affect-aavegotchi-rarity-scores>Add an Aging Mechanic to affect Aavegotchi rarity scores</a></li>
<li><a href=#earn-frens-with-ghst-matic-lp-tokens>Earn FRENS with GHST-MATIC LP Tokens</a></li>
<li><a href=#create-a-wearables-taask-force>Create a Wearables Taask Force</a></li>
<li><a href=#stake-100k-ghst-to-generate-minigame-rewards>Stake 100k GHST to generate Minigame Rewards</a></li>
<li><a href=#adding-voting-power-to-realm-parcels>Adding Voting Power to REALM Parcels</a></li>
<li><a href=#name-of-aavegotchi-marketplace>Name of Aavegotchi Marketplace</a></li>
<li><a href=#eligibility-of-ghst-usdc-lp-tokens-to-earn-frens>Eligibility of GHST-USDC LP tokens to earn FRENS</a></li>
<li><a href=#portals-purchased-in-one-transaction>Portals purchased in one transaction</a></li>
</ol>

</div>

### Thêm Phí Giao Dịch Vào Bonding Curve

**Aavegotchi Improvement Proposal #2**

**Proposal Summary:** The bonding curve is the main source of liquidity of GHST. Những người mua và người bán số lượng lớn trong hiện tải không phải trả bất kỳ loại phí nào.

Trình tạo thị trường của chúng tôi có khả năng thêm phí vào các lệnh mua và bán.

Nhiều thành viên trong cộng đồng đã đề xuất thêm vào 0.3% phí giao dịch cho các hoạt động mua bán diễn ra trên bonding curve.

This is possible to do by calling the `updateFees` function on our bonding curve, but should we? Tất cả tuỳ thuộc vào bạn, AavegotchiDAO ơi.

Mọi loại phí sẽ tự động được chuyển đến địa chỉ của ngân quỹ DAO tại 0xffe6280ae4e864d9af836b562359fd828ece8020 và nó sẽ được xem là tài sản của AavegotchiDAO.

**Voting Period:** 18 - 21 January 2021

**Results:**

table_agip2

[Link to vote on Aragon UI](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/vote/1/)

<hr>

### Tăng lượng tap từ DAICO để mua lại GHST

**Aavegotchi Improvement Proposal #3**

**Proposal Summary:** Player rewards and liquidity incentives are crucial to bootstrapping the Aavegotchi ecosystem to a level where it becomes self-sustained on trading volume and economic activity.

Bất cứ khi nào GHST được tiêu xài trong hệ sinh thái Aavegotchi, 33% trong số đó sẽ tự động được gửi đến địa chỉ đốt. Không giống như hầu hết những đồng tiền điện tử khác, việc đốt GHST (trừ trường hợp thông qua bonding curve) sẽ không làm giảm tổng giá trị của GHST, bởi giá trị đó được lưu giữ bởi lượng DAI ở trong bonding curve.

Tác dụng của việc đốt token là để giữ DAI ở trong bonding curve, góp phần quan trọng trong việc tăng tỷ lệ lưu trữ theo thời gian, giúp ổn định giá của GHST.

Để có thể bắt đầu việc đốt token (việc mà cuối cùng có thể biến GHST là một đồng stablecoin), bọn mình khuyên cộng đồng nên tăng lượng tap lên thành 150.000 DAI mỗi tháng. Điều này sẽ giúp cho số dư được lưu giữ trong bonding curve, cùng lúc đó cũng cung cấp thêm 50.000 DAI mỗi tháng để tài trợ cho phần thưởng dành cho người chơi và khuyến khích thanh khoản.

**Voting Period:** 18 - 21 January 2021

**Results:**

table_agip3

[Link to vote on Aragon UI](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/vote/2/)

<hr>

### Đề Xuất Về Haunt 2

**Aavegotchi Improvement Proposal #4**

**Proposal Summary:** 10,000 Portals is arguably not enough to satisfy the current level of demand for Aavegotchis. Do đó, việc triển khai sự kiện Haunt mới sẽ là một yếu tố cần thiết giúp đảm bảo rằng bất cứ ai muốn tham gia vào game đều sẽ sở hữu Aavegotchi. Bản Core Proposal đưa ra bốn lựa chọn khác nhau được thành viên trong cộng đồng gọi ý, bao gồm phương án không tổ chứ thêm sự kiện Haunt mới.

Details on the AGIP can be found [here](https://aavegotchi.medium.com/vote-when-haunt-2-making-haunts-more-unique-d975cbda4772).

Phương án 1: Không tổ chức sự kiện Haunt 1, sẽ thảo luận thêm trong một tháng nữa

Phương án 2: Mở bán 10k Portal, mỗi Portal có giá 100 GHST, mua được một portal với mỗi giao dịch

Phương án 3: Mở bán 25k Portal, giá 100 GHST mỗi cái, mỗi giao dịch được mua tổng cộng 5 cái (thuế ape tax sẽ nặng hơn)

Phương án 4: Pre-sale, mỗi ví sẽ có quyền đăng ký mua 1 Portal với giá 100 GHST. Trong thời gian diễn ra sự kiện pre-sale, tất cả Portal sẽ được đúc ra và chuyển sang cho chủ nhân của chúng.

**Voting Period:** 17 - 24 March 2021

**Results:**

table_agip4

**Vote Differential not met. No Haunt 2 for now!**

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmNqRry73rWXb9tdyHummihcK58ga83Ru15AJRF3beFJ35)

<hr>

### Tặng background độc quyền cho những Aavegotchi từ Haunt 1 (không chuyển sang ví khác được)

**Aavegotchi Improvement Proposal #5**

**Proposal Summary:** Many players are worried that Haunt 2 will be too similar to Haunt 1 and the newly-created [Haunts](/haunt) will devalue the “Genesis” Haunt. Một trong những ý tưởng được đưa ra là mỗi Haunt sẽ nhận được một ảnh nền đặc biệt để dễ dàng phân biệt. Bản đề xuất này đã được bàn luận rất sôi nổi và được đồng tình nhiệt liệt trên Snapshot. Các bạn hãy lưu ý rằng dù cho quyết định của DAO là gì đi nữa thì tất cả các Aavegotchi đều sẽ nhận được những huy hiệu "Haunt" giúp phân biệt xem chúng được sinh ra từ sự kiện Haunt số mấy. Bản đề xuất này đặc biệt tập trung vào đề xuất tặng ảnh nền cho các Aavegotchi để chúng có thể trang bị vào ô trang phục BG và những ảnh nền này không thể chuyển sang Aavegotchi khác được.

Details on the AGIP can be found [here](https://aavegotchi.medium.com/vote-when-haunt-2-making-haunts-more-unique-d975cbda4772).

Phương án 1: Chỉ Haunt 1 mới nên được tặng ảnh nền đặc biệt

Phương án 2: Mỗi sự kiện Haunt sẽ nhận được một ảnh nền riêng

Phương án 3: Giữ nguyên như hiện tại

**Voting Period:** 17 - 24 March 2021

**Results:**

table_agip5

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmfBrnUmfsX57vXWchr1mUNkqMWNeF6edEqdQq11MCvMHJ)

<hr>

### Tăng Phí Baazaar Để Hỗ Trợ Cho Rarity Farming

**Aavegotchi Improvement Proposal #6**

**Proposal Summary:** With the announcement of SZN1 Rewards now official, we explore how to align the community's interests and rewards structures, as it pertains to Baazaar fees.

Hiện tại, 2% phí giao dịch đang được phân bổ cho Pixelcraft và 1% được phân bổ cho Ngân Quỹ của DAO. Mặc dù ngân quỹ không loại trừ việc hỗ trợ cho giải thưởng RF, nhưng hiện tại nó không được phép phân phát ở bất kỳ dạng nào cho quỹ giải thưởng RF của mỗi mùa. Bản đề xuất này hướng đến việc tăng trưởng phí Baazaar từ 3% đến 3,5%, cộng thêm 0,5% phí được chuyển thẳng đến quỹ giải thưởng Rarity Farming.

Details on the AGIP can be found [here](https://aavegotchi.medium.com/core-proposal-agip6-add-0-5-fee-on-baazaar-to-support-rarity-farming-5bf923c7f528).

Phương án 1: Có, tăng phí từ 3% thành 3,5%

Phương án 2: Không, giữ nguyên như cũ

**Voting Period:** 7 - 13 April 2021

**Results:**

table_agip6

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmPUueFJwpCz6rBiucnBYPLxTv2tetzxXWwCi2gSQFMJMW)

<hr>

### Nhận XP từ những Bản Đề Xuất Hội Ý thành công

**Aavegotchi Improvement Proposal #7**

**Proposal Summary:** We currently have a lot of Signal / Community Proposals on Snapshot and new posts on our forum everyday. Hiện tại những bản đề xuất ấy vẫn còn xa mới đạt được mức tối thiểu 20%. Bản đề xuất thịnh hành nhất là của @JG về việc thêm phí trong rarity farming, hiện tại chỉ được 2 triệu GHST (11%) - thậm chí team đã phải quyết định đưa nó lên thành Core Proposal. Sau khi được nâng cấp lên thành Core, chúng ta đã đánh bại mức tối thiểu trong vòng vỏn vẹn 24h.

Bọn mình nghĩ rõ ràng có hai lý do chính cho vấn đề này. Một mặt, Snapshot của chúng ta hiện tại rất rối bời, một số Signal Proposal không theo bản mẫu mà bọn mình đã soạn ra. Mặt khác - và bọn mình nghĩ rằng lý do này quan trọng hơn cả, chính là việc mỗi lá phiếu dành cho Core Proposal sẽ lấy về 20 Kinh nghiệm (XP) cho Gotchi.

Bọn mình đề xuất tặng thêm vào một lượng Kinh nghiệm nhỏ (10 XP) cho bất kỳ những ai đã bỏ phiếu cho những bản Đề Xuất Signal thành công, nghĩa là những bản đề xuất này phải đạt mức tối thiểu và được nâng lên thành Core. Việc chỉ tặng XP cho những bản Đề Xuất Cộng Đồng có thể sinh ra những đề nghị kém chất lượng và việc này sẽ không phải là mục đích của bản đề xuất này.

Cho dù 10 XP không nhiều nhưng nó sẽ khuyến khích mọi người đọc kỹ Bản Đề Xuất Signal và bỏ phiếu cho những bản đề xuất chất lượng có cơ hội đạt mức tối thiểu cao hơn. Với vai trò là DAO, sự tương tác của cộng đồng là cực kỳ quan trọng và tôi tin đây là một bước đi nhỏ như đủ để chúng ta đi đúng hướng.

Nếu bản Proposal này đạt mức tối thiểu và được thông qua, tất cả Aavegotchi của những ai đã bỏ phiếu sẽ được nhận 10 XP!

Details on the AGIP can be found [here](https://aavegotchi.medium.com/vote-agip7-earn-xp-for-successful-signal-proposals-d5eafdb93aae).

Phương án 1: Vâng, SigProp nào thành công sẽ nhận được XP

Phương án 2: Không, SigProp sẽ không nhận được XP

**Voting Period:** 12 - 18 May 2021

**Results:**

table_agip7

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmctiApzKZHoVsSpzWVfMVL1abRTUNXsoipupNGS52gEuZ)

<hr>

### Quyền bỏ phiếu dựa trên BRS

**Aavegotchi Improvement Proposal #8**

**Proposal Summary:** Add Voting Power for Aavegotchis held in a voter’s address, at a rate of 1 GHST per BRS (base rarity score, not including equipped wearables).

Details on the AGIP can be found [here](https://aavegotchi.medium.com/vote-agip8-and-agip9-give-voting-power-to-aavegotchis-and-wearables-9c113373a0a2).

Phương án 1: Vâng, trao quyền bỏ phiếu cho Aavegotchi dựa trên BRS

Phương án 2: Không, Aavegotchi không nên có quyền bỏ phiếu

**Voting Period:** 11 - 17 June 2021

**Results:**

table_agip8

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmZnzgvkEzHvwkYPGLFQLtVvvoMzBXPWhznux1udHzbUim)

<hr>

### Quyền bỏ phiếu dựa trên Giá Trang Phục trong Maall

**Aavegotchi Improvement Proposal #9**

**Proposal Summary:** Add Voting Power for Wearables held by Aavegotchis and in the voting address.

Details on the AGIP can be found [here](https://aavegotchi.medium.com/vote-agip8-and-agip9-give-voting-power-to-aavegotchis-and-wearables-9c113373a0a2).

Phương án 1: Vâng, trao quyền bỏ phiếu cho trang phục dựa trên giá ở Maall

Phương án 2: Không, trang phục không nên có quyền bỏ phiếu

**Voting Period:** 11 - 17 June 2021

**Results:**

table_agip9

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/Qmat7jeAS1W3BBq7yDi2jkHjNoywmUEfrF2FdPiS9CcGHa)

<hr>

### Quan hệ đối tác giữa AavegotchiDAO, Pixelcraft, và DinoSwap

**Aavegotchi Improvement Proposal #10**

**Proposal Summary:** Some community members are worried about the waning liquidity of GHST on Quickswap and their gradually decreasing LP rewards. Thay vì chỉ tăng thêm thanh khoản cho quỹ, bọn mình đang xem xem xét hợp tác với dự án một dự án tăng thanh khoản sớm được triển khai có tên gọi là DinoSwap. Điều khoản bao gồm việc cung cấp lượng token GHST trị giá 200k USD vào extinction pool có phần thưởng khuyến khích của họ và chi tiết đã được liệt kê phía dưới đây.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/ghst-liquidity-rewards-on-new-launch-pixelcraft-dao-collaboration/1804).

Phương án 1: Đồng ý, chúng ta sẽ hợp tác với DinoSwap

Phương án 2: Không, không nên hợp tác với Dinoswap

**Voting Period:** 13 - 20 June 2021

**Results:**

table_agip10

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmV3xdUskpTtd6JYyCgV7tjWeBGira2ZPFcdk2YDy3UPHE)

<hr>

### Ban Quản Lý Thanh Khoản / Hội Đồng FRENS

**Aavegotchi Improvement Proposal #11**

**Proposal Summary:**

_Problem_

Để khuyến khích thanh khoản trên Quickswap, bạn có thể kiếm thêm phần thưởng FRENS khi stake token LP trên website của Aavegotchi. Dựa trên nguy cơ Tổn Thất Tạm Thời (Impermanent Loss), những con số này có thể thay đổi, mới đầu sẽ là +35% với GHST-QUICK, +20% với GHST=ETH và +10% với GHST-USDC. Do tỷ lệ này cần phải được điều chỉnh bằng tay và giá có thể thay đổi một tý khi đưa ra tỷ lệ, giải thưởng FRENS sẽ khác biệt khá nhiều; GHST-QUICK vào khoảng +90%, trong khi GHST-USDC chỉ được -10%.

_Solution_

Quoted from [coderdan](/team#coder-dan):
"There has been talk of setting up committees for managing certain parts of Aavegotchi, and I believe this could be an interesting candidate for such a committee. Hiện tại chúng ta có ba cặp được khuyến khích bằng FRENS, nhưng điều này có thể thay đổi trong tương lại."

"Hội đồng" có thể là một chiếc ví nhiều chữ ký với ít nhất chín (có thể tối đa mười lăm) thành viên với danh tiếng tốt trong cộng đồng và tiếp cận rất nhiều với Gotchi. Nhiệm vụ then chốt của Hội Đồng Thanh Khoản là giám sát và điều chỉnh tỷ lệ FRENS để giữ được tỷ lệ đã định sẵn, bằng cách thực hiện việc gọi hợp đồng staking của GHST, vốn chỉ có thể thực hiện bởi vị trí "rateManager" được tạo ra cho hội đồng

Giờ đây hội đồng chỉ nên có một công việc - giữ cho tỷ lệ FRENS được cập nhật. Trong tương lai, nó có thể được mở rộng sang các đối tác, giám sát sự lạm phát điểm FRENS, v. v.

_Candidates_

Hai tuần trước, chúng tôi đã tạo ra một bài viết trên Discord (link ở phía trên) dành cho những ai mong muốn ứng tuyển. Kể từ đó, 11 người đã ứng tuyển. Tất cả ứng viên đều đã tham gia vào cộng đồng được một khoảng thời gian và dưa ra những lý do hợp lý để được lựa chọn. Do vẫn nằm trong khoảng 9-15 nên cách dễ dàng nhất chính là tất cả những người muốn tham gia đều sẽ trở thành hội đồng.

Tất cả tuỳ thuộc vào bạn, AavegotchiDAO ơi. Liệu chúng ta có nên thực hiện bước này để phân hoá Aavegotchi và đặt tỷ lệ FRENS vào bàn tay của:

Angst, Jarrod, Kenymccornick, UnfitStone, Notorious_BTC, Doxy, Kokusho, Grip, Almond-Stew, Shanekoy and Moon

[Discourse Thread (Idea/Proposal)](https://dao.aavegotchi.com/t/committee-idea-liquidity-managers-for-managing-the-frens-s-of-liquidity-pairs/1905)

[Discourse Thread (Candidates)](https://dao.aavegotchi.com/t/frens-committee-applications/1944)

Phương án 1: Vâng, hãy tạo ra Hội đồng FRENS

Phương án 2: Không, hãy giữ mọi thứ nguyên vẹn

**Voting Period:** 17 - 25 August 2021

**Results:**

table_agip11

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmdLouPY9ipn2ezC2RR5Fjcz8auhX1uLajk9QS8nrctfsY)

<hr>

### Triển Khai Haunt 2

**Core Prop**

**Proposal Summary:** Currently Aavegotchis are limited by a maximum possible 10,000 because only that many Haunt 1 Portals exist. Điều này khiến việc sở hữu được bé Aavegotchi đầu tiên trở nên khá đắt đỏ. Với việc sự kiện Haunt thứ 2 sẽ mở bán thêm 15k Portal, bọn mình mong có thể giải quyết được vấn đề này dù vẫn có thể giữ nguyên được sự độc đáo, tính sưu tập của các Aavegotchi Haunt 1.

Tầm nhìn của chúng tôi về lâu dài chính là ai cũng có thể chơi cùng các NFT, và bước đầu tiên để đạt được điều này chính là bỏ đi những meme về độ hiếm và tập trung vào việc mang đến những trải nghiệm độc đáo cho nhiều người dùng hơn.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/coreprop-launch-haunt-2/2034)

Phương án 1: Có, hãy triển khai Haunt 2

Phương án 2: Không, đừng triển khai Haunt 2

**Voting Period:** 19 - 26 July 2021

**Results:**

table_launchHaunt2

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmTuVnGnZSUC4uWRVQrd3HwmJATtvJVpjNikCkifChyJwY)

<hr>

### Thêm Cơ Chế Trưởng Thành để ảnh hưởng đến điểm độ hiếm của Aavegotchi

**Aavegotchi Improvement Proposal #13**

**Proposal Summary:**

_Problem_

Khi các thế hệ haunt mới được hình thành, dù chúng có được sửa lại các yếu tố ảnh hưởng đến việc sinh ra các chỉ số cho gotchi hay không thì số lượng gotchi có BRS cao được sinh ra sẽ rất nhiều. Do bản chất của rarity farming và phần thưởng của nó, sự xuất hiện đó ảnh hưởng cực lớn đến những ai đầu tư nhiều vào những thế hệ gotchi cũ, và những người không muốn bán đi gotchi do đã có sự gắn kết về mặt cảm xúc, hay ý định đầu tư nhiều hơn, hoặc khả năng "flip" sang những gotchi có BRS cao hơn, thuộc những thế hệ haunt sau này (do luật thuế). Hơn nữa, phương sai về chỉ số có thể xảy ra trong những thế hệ haunt mới, khiến cho nó gần như không thể tạo ra những quyết định tài chính lâu dài, do phương sai có thể khiến cho những thế hệ haunt trước đó lỗi thời. Điều này khiến cho mọi thứ phụ thuộc vào "may mắn".

_Solution_

Cơ Chế Trưởng Thành là một bản đề xuất được trình bày lần đầu bởi thành viên Tistou trên Discord, được thiết kế để chỉ ra tất cả những vấn đề đã được đề cập, cũng như tại ra một cơ chế biến đổi mới thú vụ cho những Aavegotchi mà có thể được xây dựng trong tương lai (độ tuổi giới hạn dành cho các hoạt động, trang bị, phẩm chất của ngoại hình, v. v.). Nó tạo ra bước đệm khoảng 6 tháng trong suốt khoảng thời gian mà những gotchi lớn tuổi có được sự tặng trưởng BRS so với những gotchi vừa mới được triệu hồi. Khi những gotchi vừa mới được triệu hồi lớn dần, chúng sẽ nhanh chóng bắt kịp với những đối thủ già cõi hơn.

Trên tinh thần sử dụng những con số xảy ra trong tự nhiên, công thức này được đinh hình sau những số Fibonacci được nhân lên với 1 triệu, nhưng việc loại bỏ đi số 0 và 1 đầu tiên có vẻ hợp lý hơn cho trường hợp này. Đặc biệt, 10 số Fibonacci đầu tiên (thay thế cho số 0 đầu tiên) là 1, 1, 1, 2, 3, 5, 8, 13, 21, 34, có tổng là 89. Dựa theo công thức này thì cứ sau 1 triệu block sẽ được +1 BRS, rồi sau +1 BRS nữa sau 2 triệu block, +1 BRS nữa sau 3 triệu block, +1 BRS nữa sau 5 triệu block,..., đến khi đạt tổng +10 BRS sau 89 triệu block (khoảng 6.5 năm nếu sử dụng thời gian tạo block cơ bản là 2,3 giây -- mức trung bình kể từ ngày 1 tháng Năm).

Giải pháp này giúp tăng chỉ số một cách nhanh chóng chỉ trong một vài epoch, và san phẳng rõ rệt theo thời gian để tránh tình trạng các gotchi trở nên quá mạnh và cho phép những gotchi được triệu hồi gần đây có thể theo kịp chỉ trong 1 lần cộng thêm BRS cho gotchi lớn tuổi và từng trải hơn. Nó mang đến phần thưởng khuyến khích cho việc mở và triệu hồi gotchi từ cổng thay vì cứ khăng khăng giữ chúng, cả hai việc đều giúp tăng trưởng nền kinh tế trong game cũng như độ hiếm cũng chiếc cổng vẫn được giữ nguyên không mở. Hơn hết, đây là một hệ thống công bằng, không mang đến lợi ích cho riêng thế hệ haunt nào cả, và đơn giản là tưởng thưởng cho sự tương tác lâu dài, cũng như chống lại hiệu ứng của việc thay đổi mạnh mẽ và bất thình lình mà chúng ta đang thấy gần đây.

_Modifications made to Solution_

- **The implementation will be slightly modified to use the available onchain data of birth block timestamp as opposed to block number,** with epoch times predetermined using the same fibonacci intervals proposed in the sigprop and the current average block time. Điều này khiến cho việc tích hợp trở nên đơn đơn giản hơn, cho phép tạo ra những dòng thời gian dễ dự đoán (do mẫu số block time là một hằng số, ngược lại với biến số dựa trên hoạt động on chain), cũng như để đảm bảo chức năng của cơ chế nếu bất kỳ vấn đề cấu trúc hoặc mạng lưới blockchain nào thay đổi trong tương lai. Những khoảng nghỉ trong thời gian pet sử dụng thời gian thực, vậy nên một tiền lệ cho việc này đã tồn tại.

- **The 10 BRS cap is removed.** The fibonacci intervals themselves act as a natural cap, as the time to reach further epochs approximates an exponential function. Ví dụ, sẽ mất hơn 4 năm để được cộng thêm BRS (+11 tổng cộng), sau đó là 6,5 năm nữa, rồi sau đó là 10,5 năm nữa, v. v.

- **The implementation would go live prior to the beginning of Rarity Farming Season 2.** One of the goals of aging is to provide a short term buffer to the effects of statistical variance once a new haunt is released. Để Haunt 1 có thể trải nghiệm xem việc này có mang lại tác dụng gì không thì nó cần phải được triển khai càng sớm càng tốt, bởi vào giữa màu 2, các gotchi H2 đều gần như sẽ đuổi kịp chỉ số cộng thêm của H1, và cách biệt chỉ 1 2 điểm BRS mà thôi.

Details on the AGIP can be found [here](https://aavegotchi.medium.com/agip13-should-aavegotchi-introduce-an-aging-boost-5ee12e8c9f0)

Phương án 1: Vâng, tích hợp cơ chế trưởng thành

Phương án 2: Không, đừng tích hợp lúc này

**Voting Period:** 2 - 9 October 2021

**Results:**

table_agip13

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmcAQLdAyS9n7LWDu9qvRtdNqJa7FBStadrHq3xqjW9kCT)

<hr>

### Kiếm FRENS với token LP GHST-MATIC

**Aavegotchi Improvement Proposal #14**

**Proposal Summary:** Polygon has been a huge reason behind the success of Aavegotchi. Phí giao dịch cực thấp được thanh toán bằng MATIC đã cho phép đội ngũ phát triển một trò chơi với rất nhiều hoạt động diễn ra trên blockchain ví dụ như pet, đấu giá kiếm tiền, giao dịch trên Baazaar, và lưu trữ đồ hoạ của game Aavegotchi.

Vào đầu tháng Chín, Sushiswap đã bắt đầu phần thưởng 2x SUSHI để người dùng có thể farm từ cặp token LP GHST-MATIC trên Sushiswap.

Biệt Đội FRENS khuyến nghị về việc cho mang đến phần thưởng FRENS cho cặp LP GSHT-MATIC trên AMM.

Bọn mình khuyến nghị rằng tỷ lệ FRENS xác định được trả cho cặp LP GHST-MATIC lớn hơn so với phần thưởng đã xác định dành cho cặp LP GHST-ETH (120%) nhưng sẽ thấp hơn phần thưởng xác định dành cho cặp GHST-QUICK (135%).

Điều này là do nguy cơ Impermanent Loss (IL) dành cho GHST-MATIC cao hơn so với GHST-ETH nhưng thấp hơn so với GHST-QUICK. Bọn mình khuyến nghị mức xác định dành cho cặp LP GHST-MATIC là 130%.

Gần đây, phần lớn thành khoản dành cho GHST đều nằm ở Quickswap.

See: [https://frens-taaskforce.vercel.app/](https://frens-taaskforce.vercel.app/)

Điều này mang đến một cơ hội lớn để di chuyển một lượng thanh khoản đến cho AMM Sushiswap được sử dụng rộng rãi và giảm đi sự phụ thuộc vào Quickswap.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/frens-incentive-for-matic-ghst-lp-pair-on-sushiswap/2336)

Phương án 1: Đúng, tặng FRENS cho GHST-MATIC

Phương án 2: Không, đừng đưa FRENS

**Voting Period:** 12 - 19 November 2021

**Results:**

table_agip14

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0x42914b268d255efe0eea943d052e5dc7eab0cbbcde9d3cb809f027e3ea1f611f)

<hr>

### Thành Lập Biệt Đội Trang Phục

**Aavegotchi Improvement Proposal #15**

**Proposal Summary:**

_Motivation_

Trong hệ sinh thái của Aavegotchi, trang phục đóng một vài trò quan trọng, vừa có khả năng tăng BRS trong rarity farming, tăng chỉ số trong minigame, khả năng đa dụng trong metaverse sắp tới, hoặc chỉ trang trí cho đẹp. Do sự phức tạp trong loạt chỉ số khả dĩ khác nhau của gotchi, và những chỉ số trang phục khác nhau, việc phân phối cân bằng các trang bị mặc được không phải là dễ dàng. Việc mang đến những trang bị mới mà không phân tích kỹ lưỡng có thể dễ dẫn đến việc trùng lặp (và bị loãng) các trang phục đang tồn tại và pha loãng thêm các tập hợp có thể áp dụng thực tế cho gotchis có phạm vi tính trạng theo những hướng nhất định.

_Specification_

Bản đề xuất này đề nghị tạo ra một Biệt Đội Trang Phục (WTF), ý tưởng này khởi nguồn từ những cuộc thảo luận liên quan đến những vấn đề trên. Tương tự Bội Đội FRENS, mục tiêu của WTF là hỗ trợ Pixelcraft trong việc phân tích sự phân bố hiện tại của bác vật phẩm nằm trong hệ sinh thái, từ ô đồ, độ hiếm, điểm điều chỉnh, và cách phân tích tốt nhất có thể áp dụng cho những vật phẩm trong tương lai. Biệt Đội này sẽ KHÔNG có khả năng định hướng vật phẩm sắp tới sẽ dược bán bằng cách nào và đó là gì, nhưng sẽ hoạt động hoàn toàn theo hướng cố vấn.

_Nominees_

Các ứng cử viên cho Biệt Đội này bao gồm những thành viên kỳ cực trong cộng đồng với nhiều kỹ năng có thể ứng dụng được, bao gồm kỹ năng phân tích số liệu, lập trình và kinh nghiệm lăn lộn trong hoạt động của baazaar, và kinh nghiệm từng làm việc với DAO. Biệt Đội này sẽ hưởng nhiều quyền lợi khi có càng nhiều tiếng nói và góc nhìn, vậy nên tất cả các ứng viên đều được tham gia.
Việc thành lập Biệt Đội này sẽ là một bước tiến lớn đến việc tạo ra một hệ sinh thái cân bằng và giúp cho AavegotchiDAO trưởng thành.

**Full list of nominees:** Kuwlness, JG1 (Fantasma#1777), Bearded, Actaeon, Thunderfish, Letsgobankless, Kokusho, Ader1990.eth, Machete, Aimo217 (AL#4105), Notorious_BTC, MonsterRNG, Goobz, Diddlypoo

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/wearables-taask-force/2350)

Phương án 1: Vâng, hãy thành lập WTF

Phương án 2: Không, đừng thành lập WTF

**Voting Period:** 12 - 19 November 2021

**Results:**

table_agip15

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0xa1f06ffcdd5f5d51c5f82022e8a25ecc7672252f8a47d9ee484b9fe3b6cd5b3a)

<hr>

### Stake 100k GHST để tạo ra phần thưởng cho Minigame

**Aavegotchi Improvement Proposal #16**

**Proposal Summary:** Some frens have expressed concern over the lack of rewards for participating in Minigame events. Do hiện tại không có Biệt Đội Aarcade với ngân sách được chỉ định nên Gotchinomics đã nghĩ về việc stake 100k GHST vào Ngân Quỹ để hỗ trợ cho các phần thưởng trong tương lai.

_Problem_

Aavegotchi mong muốn trở thành một trong những dự án PlaytoEarn trong giới gaming, và việc triển khai Gotchiverse Realm chính là nền tảng để đạt được mục tiêu dài hạn này. Tuy nhiên, vẫn có thể cải thiện những khả năng trong ngắn hạn thông qua những sự kiện gaming theo mùa. Vấn đề chủ yếu ở đây là thiếu ngân sách.

_Solution_

Trước khi tạo ra một DAO dành riêng cho Aarcade, bước đầu tiên cho mang đến phần thưởng play2earn để tạo ra một nguồn tiền bền vững. Một phương pháp đơn giản và ít rủi ro là stake một phần ngân quỹ DAO, khoảng tầm 100k GHST, để tạo ra FRENS. Số tiền ấy có thể chuyển thành vé xổ số và mang tặng cho những người tham gia chơi mini game thông qua những sự kiện theo từng thời điểm.

_Potential risks_

Stake GHST sẽ làm hòa tan một cách gián tiếp tỷ lệ giữa FRENS và vé. Tuy nhiên, do chúng được phân bổ thông qua phần thưởng mini game nên ảnh hưởng của nó sẽ tối thiểu so với khả năng tăng tương tác và thu hút người chơi mới.

_Alternatives_

Đợi đến khi Aarcade DAO triển khai và để cho ủy ban mới quyết định cách phân bố ngân quỹ. Tuy nhiên, phương án thay thế này có thể sẽ làm mất đi khoản thời gian quý báu mà trong đó chúng ta có thể tạo ra nhiều phần thưởng hấp dẫn hơn.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/creation-of-an-aarcade-dao/2128)

Phương án 1: Đồng ý, stake 100k GHST

Phương án 2: Không, hãy đợi Aarcade DAO

**Voting Period:** 10 - 17 December 2021

**Results:**

table_agip16

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0xd654255f22e694369686e9791ff663f38a9f586bd4126831fc9d8ce384208964)

<hr>

### Tăng Sức Mạnh Bỏ Phiếu Cho REALM Parcel

**Aavegotchi Improvement Proposal #17**

**Proposal Summary:**

_Problem:_

Với một dạng tài sản mới được thêm vào gia đình Aavegotchi dưới dạng các ô đất realm, một số lượng GHST mới được sinh ra. Việc này hiện tại khiến cho những ai đầu tư thật nhiều vào những ô đất mới sở hữu ít sức mạnh bỏ phiếu hơn nhiều trong Aavegotchi DAO.

_Solution:_

Do những ô đất realm và Gotchiverse là những phần không thể thiếu của hệ sinh thái Aavegotchi nên mình tin rằng chỉ khi nào những người sở hữu realm có được một lượng sức mạnh tương ứng với số lượng ô đất mà họ sở hữu thì mới hợp lý. Điều này đảm bảo rằng ý kiến của tất cả mọi người đều sẽ được lắng nghe, và đó là một phần đặc biệt quan trọng trong những bản đề xuất tương lai, liên quan đến Gotchiverse.

Do mỗi ô đất đều có một kích thước pixel và cũng là thước đo cho số lượng khoáng sản bên trong mỗi ô đất, bản đề xuất mang đến những phương án sau đây:

1 pixel = 1 GHST sức mạnh bỏ phiếu (64, 256, 2056)
HOẶC
1 pixel = 0,5 sức mạnh bỏ phiếu (32, 128, 1028)

Một phương pháp thay thế ở đây là mang cho mỗi ô đất một sức mạnh bỏ phiếu ngang bằng, dựa trên giá sàn đấu giá, người sở hữu vừa có một lượng sức mạnh vừ phải, vừa đảm bảo rằng tất cả đều có tiếng nói cho mình.

Phương án này sẽ mang đến lần lượt 100, 200, và 1300 GHST cho gói đất humble, reasonable, và spacious.

_CoreProp Edits_

Phương án "giá sàn Đấu Giá" đã được thêm vào. Điều này mang đến cách biệt số phiếu lên đến 20%, nghĩa là bất kỳ phương án nào cũng phải cao hơn 20% so với phương án cao thứ hai để được thông qua.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/voting-power-for-land-plots/2508)

Phương án 1: 0,5 GHST sức mạnh vote cho mỗi pixel

Phương án 2: 1 GHST sức mạnh vote cho mỗi pixel

Phương án 3: Sức mạnh vote dựa trên giá sàn đấu giá

Phương án 4: Không trao sức mạnh bỏ phiếu cho REALM

**Voting Period:** 10 - 17 December 2021

**Results:**

table_agip17

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0x28b630e088240ee4bb4e680b071767b98b962a4006c71e71f00c782b86adfbab)

<hr>

### Name of Aavegotchi Marketplace

**Snapshot Voting**

**Proposal Summary:** What should the Aavegotchi NFT Marketplace be called?

Aavegotchi is launching its own NFT marketplace on Polygon in tandem with the game!

What should we call the official Aavegotchi Marketplace?

Choice A: Aavegotchi Baazaar

Choice B: Aavegotchi Maarket

Choice C: Neither

The quorum for this vote is set to 500,000 GHST. If quorum is not reached, Pixelcraft will draw straws.

If "Neither" wins...you guys better start coming up with some good alternatives!

**Voting Period:** 8 - 11 February 2021

**Results:**

table_marketplaceName

[Link to vote on Snapshot](https://snapshot.page/#/aavegotchi.eth/proposal/QmRiRaQuwLuNr88yxvX61vtKM56NrY3KaMk4bk6w7g47fy)

<hr>

### Eligibility of GHST-USDC LP tokens to earn FRENS

**Snapshot Voting**

**Proposal Summary:** Should GHST-USDC LP token be eligible to earn FRENS?

Our liquidity migration program has been a huge success, with over 8M GHST migrated to Polygon already. However, as many community members have noted, liquidity for the GHST-USDC pair is still not deep enough to support trading large amounts of USDC for GHST on Quickswap.

We believe one way to remedy this is by adding GHST-USDC as a pair eligible for FRENS on [https://aavegotchi.com/stake-polygon](https://aavegotchi.com/stake-polygon). Just like GHST-QUICK has a receipt token stkGHST-QUICK, staked GHST-USDC can also emit a stkGHST-USDC token, which may be eligible for rewards on Quickswap, if their team deems it necessary.

Since this decision directly affects gameplay, we believe it is a ripe candidate for our first Snapshot vote on Polygon.

We are setting a 500,000 GHST quorum for this vote to be enacted.

The GHST-USDC LP token will earn FRENS at the same rate as just staking GHST, since impermanent loss is minimal and fees are significant.

**Voting Period:** 8 - 11 February 2021

**Results:**

table_ghstUsdcLp

[Link to vote on Snapshot](https://snapshot.page/#/aavegotchi.eth/proposal/QmUpXPA5JF4ed9GUy5hNUTA7rT7VQjL7QXUTSxbtLQ1RqA)

<hr>

### Portals purchased in one transaction

**Snapshot Voting**

**Proposal Summary:** How many Portals can be purchased in one transaction?

Discussion period has ended for this topic, and now it's time to vote! The most popular options were: 1, 5, and 10 Portals per transaction.

Our fren [@coderdannn](/team#coder-dan) also threw a spicy idea into the mix: an "Ape Tax" whereby higher numbers of Portals could be bought in a single transaction, but at a higher price. The Portals would be tiered as so:

- 0-5: 100 GHST each

- 6-15: 200 GHST each

- 16-25: 300 GHST each

So this leaves us with four options: 1, 5, 10, and 25 (w/ ape tax).

Let your $GHST token speak for you, and vote!

Voting period: 72 hrs
Minimum quorum: 10% of GHST on Matic (~1.1M GHST)

AavegotchiDAO discussion topic 👇

[https://dao.aavegotchi.com/t/how-many-portals-should-be-bought-in-one-txn/17](https://dao.aavegotchi.com/t/how-many-portals-should-be-bought-in-one-txn/17)

**Voting Period:** 23 - 26 February 2021

**Results:**

table_portalsPurchased

[Link to vote on Snapshot](https://snapshot.page/#/aavegotchi.eth/proposal/QmUhKcn5YjKAPeGA1SfKQkNfw3P3hGRPgSGnTJGsfzw4Xi)
