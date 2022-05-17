---
author: Coder Dan
date: '2020-04-23T07:00:00.000Z'
title: 'Aavegotchi Improvement Proposals (AGIPs)'
description: 'Danh sách cách Aavegotchi Improvement Proposals (AGIPs)'
contributors:
  - "unintelligent-nerd"
---

Chào mấy fen. Tham dự vào Aavegotchi Improvement Proposals (AGIPs) là điều mà những gotchi có trách nhiệm sẽ làm! Bạn cần phải bỏ phiếu và tiếng nói của bạn sẽ được thể hiện.

Cộng đồng của chúng ta đã phát triển đến mức nào rồi? Hãy xem qua thông tin lưu trữ về những lần bầu chọn đã qua tại đây nhé!

Psst! Nhận [Huy Hiệu POAP](/poap) nếu bạn đã bỏ phiếu cho AGIP trước đây!

<div class="contentsBox">

**Nội dung**

<ol>
<li><a href=#tap-increase-for-scaling-sprint>Tăng lượng Tap để Phát Triển Sâu Rộng</a></li>
<li><a href=#add-fees-to-bonding-curve>Thêm Phí Giao Dịch Vào Bonding Curve</a></li>
<li><a href=#increase-daico-tap-for-ghst-purchases>Tăng lượng tap từ DAICO để mua lại GHST</a></li>
<li><a href=#proposal-for-haunt-2>Đề Xuất Về Haunt 2</a></li>
<li><a href=#give-unique-non-transferable-background-to-haunt-1-aavegotchis>Tặng background độc quyền cho những Aavegotchi từ Haunt 1 (không chuyển sang ví khác được)</a></li>
<li><a href=#add-fee-on-baazaar-to-support-rarity-farming>Tăng Phí Baazaar Để Hỗ Trợ Cho Rarity Farming</a></li>
<li><a href=#earn-xp-for-successful-signal-proposals>Nhận XP từ những Bản Đề Xuất Hội Ý thành công</a></li>
<li><a href=#voting-power-based-on-brs>Quyền bỏ phiếu dựa trên BRS</a></li>
<li><a href=#voting-power-based-on-wearables--maall-price>Quyền bỏ phiếu dựa trên Giá Trang Phục trong Maall</a></li>
<li><a href=#partnership-between-aavegotchidao--pixelcraft--and-dinoswap>Quan hệ đối tác giữa AavegotchiDAO, Pixelcraft, và DinoSwap</a></li>
<li><a href=#liquidity-manager---frens-committee>Ban Quản Lý Thanh Khoản / Hội Đồng FRENS</a></li>
<li><a href=#launch-haunt-2>Triển Khai Haunt 2</a></li>
<li><a href=#add-an-aging-mechanic-to-affect-aavegotchi-rarity-scores>Thêm Cơ Chế Trưởng Thành để ảnh hưởng đến điểm độ hiếm của Aavegotchi</a></li>
<li><a href=#earn-frens-with-ghst-matic-lp-tokens>Kiếm FRENS với token LP GHST-MATIC</a></li>
<li><a href=#create-a-wearables-taask-force>Thành Lập Biệt Đội Trang Phục</a></li>
<li><a href=#stake-100k-ghst-to-generate-minigame-rewards>Stake 100k GHST để tạo ra phần thưởng cho Minigame</a></li>
<li><a href=#adding-voting-power-to-realm-parcels>Tăng Sức Mạnh Bỏ Phiếu Cho REALM Parcel</a></li>
<li><a href=#gotchiverse-patch-v0-1>Gotchiverse Patch v0.1</a></li>
<li><a href=#providing-ghst-liquidity-on-synfutures>Cung cấp thanh khoản cho GHST trên SyncFutures</a></li>
<li><a href=#creating-the-dao-treasury-taask-force>Thành lập Biệt Đội DAO Treasury</a></li>
<li><a href=#adding-ghst-to-the-umbria-narni-bridge>Thêm GHST vào Cầu Umbria Narni</a></li>
<li><a href=#launch-rarity-farming-szn-3>Triển Khai Rarity Farming Mùa 3</a></li>
<li><a href=#co-sponsoring-the-goodghosting-pool>Đồng Tài Trợ Cho Quỹ GoodGhosting</a></li>
<li><a href=#deposit-3m-treasury-ghst-into-aave>Gửi 3 triệu GHST Ngân Quỹ vào Aave</a></li>
<li><a href=#delay-gotchiverse-land-auction---raffle-3>Hoãn Đấu Giá và Xổ Số Land Gotchiverse 3</a></li>
<li><a href=#reducing-the-parcel-vrf-variance>Giảm Biến Số Parcel VRF</a></li>
<li><a href=#alternative-gotchiverse-trait-mapping>Thay Thế Cách Quy Đổi Chỉ Số Trait Gotchiverse</a></li>
<li><a href=#extending-the-dao-treasury-task-force-multisig>Mở rộng Ví Multisign Biệt Đội Ngân Quỹ DAO</a></li>
<li><a href=#name-of-aavegotchi-marketplace>Các marketplace (thị trường trao đổi) dành cho Aavegotchi</a></li>
<li><a href=#eligibility-of-ghst-usdc-lp-tokens-to-earn-frens>Khả năng nhận FRENS khi stake token LP của GHST-USDC</a></li>
<li><a href=#portals-purchased-in-one-transaction>Số lượng Portal mua được trong mỗi giao dịch</a></li>
</ol>

</div>

### Tăng lượng Tap để Phát Triển Sâu Rộng
**Aavegotchi Improvement Proposal #1**

**Tóm tắt đề xuất:** GHST Bonding Curve đã hoạt động được gần một tháng và điều đó có nghĩa là cơ hội để những người nắm giữ token GHST có thể điều chỉnh cơ chế tap của DAICO đã đến. AavegotchiDAO 1.0 được xây dựng trên nền tảng của Aragon và hoạt động trực tiếp với DAICO, nơi mà những người nắm giữ GHST có thể bỏ phiếu mỗi tháng một lần xem nên tăng hoặc giảm dòng tiền ngân quỹ dành cho team phát triển thông qua cơ chế tap. Cơ chế tap cung cấp lượng DAI được trích trực tiếp từ 7.5 triệu DAI được giữ trong GHST Bonding Curve.

Bọn mình đã kêu gọi cộng đồng Aavegotchi bầu chọn xem có nên tăng lượng tap từ 50k DAI/30 ngày thành 100k DAI/30 ngày hay không. 50k DAI không đủ để trang trải chi phí cho tất cả những thành tựu mà dự án đã đạt được (phát triển cộng đồng, token GHST, phát triển game), và những bước nhảy vọt tiếp theo sẽ còn đầy tham vọng hơn nữa. Những ràng buộc trong bộ code của AavegotchiDAO 1.0 giới hạn bản khuyến nghị này trong khuôn khổ chỉ có 50k DAI được thêm vào trong giai đoạn bầu cử của tháng này và do đó bọn mình đã khởi xướng trong đầu một chiến lược có mức ngân sách lên đến 100k DAI.

Ngân sách 50k DAI thêm vào sẽ được dùng trong 4 hạng mục khác nhau:
* Quỹ làm game giúp bọn mình có thể hoàn thiện thương lượng với những lập trình viên game chủ chốt.
* Những bản hợp đồng bổ sung dành cho những vị trí then chốt của các lĩnh vực marketing, design, và phát triển.
* Một bước tạo đà trong marketing giúp nhân rộng sự hiện diện của Aavegotchi.
* Phần thưởng dành cho cộng đồng để bọn mình có thể tiếp tục phát triển những chương trình (như team Aartists hay Aaprentices) nhằm tưởng thưởng cho những ai có nhiều cảm hứng nhất trong cộng đồng bọn mình.

**Thời gian vote:**15 - 19 tháng Mười 2020

**Kết quả:**

table_agip1

[Đường dẫn đến giao diện người dùng của Aragon](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/vote/0/)

<hr />

### Thêm Phí Giao Dịch Vào Bonding Curve
**Aavegotchi Improvement Proposal #2**

**Tóm Tắt Bản Đề Nghị:** Bonding curve là nguồn thanh khoản chính của GHST. Những người mua và người bán số lượng lớn trong hiện tải không phải trả bất kỳ loại phí nào.

Trình tạo thị trường của chúng tôi có khả năng thêm phí vào các lệnh mua và bán.

Nhiều thành viên trong cộng đồng đã đề xuất thêm vào 0.3% phí giao dịch cho các hoạt động mua bán diễn ra trên bonding curve.

Việc này có thể được thực hiện khi gọi hàm `updateFees` trên bonding curve của bọn mình, nhưng điều này có nên được thực hiện hay không? Tất cả tuỳ thuộc vào bạn, AavegotchiDAO ơi.

Mọi loại phí sẽ tự động được chuyển đến địa chỉ của ngân quỹ DAO tại 0xffe6280ae4e864d9af836b562359fd828ece8020 và nó sẽ được xem là tài sản của AavegotchiDAO.

**Thời gian vote:**18 - 21 tháng Mười 2021

**Kết quả:**

table_agip2

[Đường dẫn đến giao diện người dùng của Aragon](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/vote/1/)

<hr />

### Tăng lượng tap từ DAICO để mua lại GHST
**Aavegotchi Improvement Proposal #3**

**Tóm tắt bản đề nghị:**Phần thưởng cho người chơi và phần thưởng khuyến khích thanh khoản là rất quan trọng để có thể tạo đà phát triển cho hệ sinh thái Aavegotchi đến mức độ mà nó có thể tự duy trì dựa trên khối lượng giao dịch và các hoạt động kinh tế.

Bất cứ khi nào GHST được tiêu xài trong hệ sinh thái Aavegotchi, 33% trong số đó sẽ tự động được gửi đến địa chỉ đốt. Không giống như hầu hết những đồng tiền điện tử khác, việc đốt GHST (trừ trường hợp thông qua bonding curve) sẽ không làm giảm tổng giá trị của GHST, bởi giá trị đó được lưu giữ bởi lượng DAI ở trong bonding curve.

Tác dụng của việc đốt token là để giữ DAI ở trong bonding curve, góp phần quan trọng trong việc tăng tỷ lệ lưu trữ theo thời gian, giúp ổn định giá của GHST.

Để có thể bắt đầu việc đốt token (việc mà cuối cùng có thể biến GHST là một đồng stablecoin), bọn mình khuyên cộng đồng nên tăng lượng tap lên thành 150.000 DAI mỗi tháng. Điều này sẽ giúp cho số dư được lưu giữ trong bonding curve, cùng lúc đó cũng cung cấp thêm 50.000 DAI mỗi tháng để tài trợ cho phần thưởng dành cho người chơi và khuyến khích thanh khoản.

**Thời gian vote:**18 - 21 tháng Mười 2021

**Kết quả:**

table_agip3

[Đường dẫn đến giao diện người dùng của Aragon](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/vote/2/)

<hr />

### Đề Xuất Về Haunt 2
**Aavegotchi Improvement Proposal #4**

**Tóm tắt Bản Đề Xuất** Nhiều thành viên trong cộng đồng cho rằng 10k Portal là không đủ để đáp ứng nhu cầu sở hữu Aavegotchi trong hiện tại. Do đó, việc triển khai sự kiện Haunt mới sẽ là một yếu tố cần thiết giúp đảm bảo rằng bất cứ ai muốn tham gia vào game đều sẽ sở hữu Aavegotchi. Bản Core Proposal đưa ra bốn lựa chọn khác nhau được thành viên trong cộng đồng gọi ý, bao gồm phương án không tổ chứ thêm sự kiện Haunt mới.

Chi tiết về bản AGIP này có thể được tìm thấy tại [đây](https://aavegotchi.medium.com/vote-when-haunt-2-making-haunts-more-unique-d975cbda4772).

Phương án 1: Không tổ chức sự kiện Haunt 1, sẽ thảo luận thêm trong một tháng nữa

Phương án 2: Mở bán 10k Portal, mỗi Portal có giá 100 GHST, mua được một portal với mỗi giao dịch

Phương án 3: Mở bán 25k Portal, giá 100 GHST mỗi cái, mỗi giao dịch được mua tổng cộng 5 cái (thuế ape tax sẽ nặng hơn)

Phương án 4: Pre-sale, mỗi ví sẽ có quyền đăng ký mua 1 Portal với giá 100 GHST. Trong thời gian diễn ra sự kiện pre-sale, tất cả Portal sẽ được đúc ra và chuyển sang cho chủ nhân của chúng.

**Thời gian vote:**17 - 24 tháng Mười 2021

**Kết quả:**

table_agip4

**Cách biệt trong số phiếu không đủ độ đồng thuận. Haunt 2 sẽ không được tổ chức vào thời điểm này!**

[Đường link vote trên Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmNqRry73rWXb9tdyHummihcK58ga83Ru15AJRF3beFJ35)

<hr />

### Tặng background độc quyền cho những Aavegotchi từ Haunt 1 (không chuyển sang ví khác được)
**Aavegotchi Improvement Proposal #5**

**Tóm tắt Bản Đề Xuất:**Nhiều người chơi lo rằng sự kiện Haunt 2 sẽ tương tự như [Haunt 1](/haunt) và những Haunt mới tạo ra sau này sẽ làm giảm giá trị của sự kiện Haunt "Nguyên thuỷ". Một trong những ý tưởng được đưa ra là mỗi Haunt sẽ nhận được một ảnh nền đặc biệt để dễ dàng phân biệt. Bản đề xuất này đã được bàn luận rất sôi nổi và được đồng tình nhiệt liệt trên Snapshot. Các bạn hãy lưu ý rằng dù cho quyết định của DAO là gì đi nữa thì tất cả các Aavegotchi đều sẽ nhận được những huy hiệu "Haunt" giúp phân biệt xem chúng được sinh ra từ sự kiện Haunt số mấy. Bản đề xuất này đặc biệt tập trung vào đề xuất tặng ảnh nền cho các Aavegotchi để chúng có thể trang bị vào ô trang phục BG và những ảnh nền này không thể chuyển sang Aavegotchi khác được.

Chi tiết về bản AGIP này có thể được tìm thấy tại [đây](https://aavegotchi.medium.com/vote-when-haunt-2-making-haunts-more-unique-d975cbda4772).

Phương án 1: Chỉ Haunt 1 mới nên được tặng ảnh nền đặc biệt

Phương án 2: Mỗi sự kiện Haunt sẽ nhận được một ảnh nền riêng

Phương án 3: Giữ nguyên như hiện tại

**Thời gian vote:**17 - 24 tháng Mười 2021

**Kết quả:**

table_agip5

[Đường link vote trên Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmfBrnUmfsX57vXWchr1mUNkqMWNeF6edEqdQq11MCvMHJ)

<hr />

### Tăng Phí Baazaar Để Hỗ Trợ Cho Rarity Farming
**Aavegotchi Improvement Proposal #6**

**Tóm Tắt Đề Xuất:** Sau khi Giải Thưởng dành cho Mùa 1 chính thức được công bố, bọn mình đã tìm hiểu thêm cách để kết nối ý kiến của cộng đồng với cơ cấu giải thưởng, bởi nó có mối quan hệ mật thiết với phí giao dịch trên Baazaar.

Hiện tại, 2% phí giao dịch đang được phân bổ cho Pixelcraft và 1% được phân bổ cho Ngân Quỹ của DAO. Mặc dù ngân quỹ không loại trừ việc hỗ trợ cho giải thưởng RF, nhưng hiện tại nó không được phép phân phát ở bất kỳ dạng nào cho quỹ giải thưởng RF của mỗi mùa. Bản đề xuất này hướng đến việc tăng trưởng phí Baazaar từ 3% đến 3,5%, cộng thêm 0,5% phí được chuyển thẳng đến quỹ giải thưởng Rarity Farming.

Chi tiết về bản AGIP này có thể được tìm thấy tại [đây](https://aavegotchi.medium.com/core-proposal-agip6-add-0-5-fee-on-baazaar-to-support-rarity-farming-5bf923c7f528).

Phương án 1: Có, tăng phí từ 3% thành 3,5%

Phương án 2: Không, giữ nguyên như cũ

**Thời gian vote:**7 - 13 tháng Mười 2021

**Kết quả:**

table_agip6

[Đường link vote trên Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmPUueFJwpCz6rBiucnBYPLxTv2tetzxXWwCi2gSQFMJMW)

<hr />

### Nhận XP từ những Bản Đề Xuất Hội Ý thành công
**Aavegotchi Improvement Proposal #7**

**Tóm tắt Đề Xuất:** Bọn mình hiện đang có rất nhiều Bản Đề Xuất Hội Ý / Cộng Đồng trên Snapshot và rất nhiều bài viết mới trên diễn đàn mỗi ngày. Hiện tại những bản đề xuất ấy vẫn còn xa mới đạt được mức tối thiểu 20%. Bản đề xuất thịnh hành nhất là của @JG về việc thêm phí trong rarity farming, hiện tại chỉ được 2 triệu GHST (11%) - thậm chí team đã phải quyết định đưa nó lên thành Core Proposal. Sau khi được nâng cấp lên thành Core, chúng ta đã đánh bại mức tối thiểu trong vòng vỏn vẹn 24h.

Bọn mình nghĩ rõ ràng có hai lý do chính cho vấn đề này. Một mặt, Snapshot của chúng ta hiện tại rất rối bời, một số Signal Proposal không theo bản mẫu mà bọn mình đã soạn ra. Mặt khác - và bọn mình nghĩ rằng lý do này quan trọng hơn cả, chính là việc mỗi lá phiếu dành cho Core Proposal sẽ lấy về 20 Kinh nghiệm (XP) cho Gotchi.

Bọn mình đề xuất tặng thêm vào một lượng Kinh nghiệm nhỏ (10 XP) cho bất kỳ những ai đã bỏ phiếu cho những bản Đề Xuất Signal thành công, nghĩa là những bản đề xuất này phải đạt mức tối thiểu và được nâng lên thành Core. Việc chỉ tặng XP cho những bản Đề Xuất Cộng Đồng có thể sinh ra những đề nghị kém chất lượng và việc này sẽ không phải là mục đích của bản đề xuất này.

Cho dù 10 XP không nhiều nhưng nó sẽ khuyến khích mọi người đọc kỹ Bản Đề Xuất Signal và bỏ phiếu cho những bản đề xuất chất lượng có cơ hội đạt mức tối thiểu cao hơn. Với vai trò là DAO, sự tương tác của cộng đồng là cực kỳ quan trọng và tôi tin đây là một bước đi nhỏ như đủ để chúng ta đi đúng hướng.

Nếu bản Proposal này đạt mức tối thiểu và được thông qua, tất cả Aavegotchi của những ai đã bỏ phiếu sẽ được nhận 10 XP!

Chi tiết về bản AGIP này có thể được tìm thấy tại [đây](https://aavegotchi.medium.com/vote-agip7-earn-xp-for-successful-signal-proposals-d5eafdb93aae).

Phương án 1: Vâng, SigProp nào thành công sẽ nhận được XP

Phương án 2: Không, SigProp sẽ không nhận được XP

**Thời gian vote:**12 - 18 tháng Năm 2021

**Kết quả:**

table_agip7

[Đường link vote trên Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmctiApzKZHoVsSpzWVfMVL1abRTUNXsoipupNGS52gEuZ)

<hr />

### Quyền bỏ phiếu dựa trên BRS
**Aavegotchi Improvement Proposal #8**

**Tóm tắt Đề xuất:** Thêm quyền bỏ phiếu cho Aavegotchi trong ví của người bỏ phiếu với tỷ lệ 1 GHST mỗi điểm BRS (điểm độ hiếm gốc, không bao gồm các trang phục được mặc).

Chi tiết về bản AGIP này có thể được tìm thấy tại [đây](https://aavegotchi.medium.com/vote-agip8-and-agip9-give-voting-power-to-aavegotchis-and-wearables-9c113373a0a2).

Phương án 1: Vâng, trao quyền bỏ phiếu cho Aavegotchi dựa trên BRS

Phương án 2: Không, Aavegotchi không nên có quyền bỏ phiếu

**Thời gian vote:**11 - 17 tháng 7 Năm 2021

**Kết quả:**

table_agip8

[Đường link vote trên Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmZnzgvkEzHvwkYPGLFQLtVvvoMzBXPWhznux1udHzbUim)

<hr />

### Quyền bỏ phiếu dựa trên Giá Trang Phục trong Maall
**Aavegotchi Improvement Proposal #9**

**Tóm tắt đề xuất:** Trao quyền bỏ phiếu của trang phục cho Aavegotchi ở trong tài khoản bỏ phiếu.

Chi tiết về bản AGIP này có thể được tìm thấy tại [đây](https://aavegotchi.medium.com/vote-agip8-and-agip9-give-voting-power-to-aavegotchis-and-wearables-9c113373a0a2).

Phương án 1: Vâng, trao quyền bỏ phiếu cho trang phục dựa trên giá ở Maall

Phương án 2: Không, trang phục không nên có quyền bỏ phiếu

**Thời gian vote:**11 - 17 tháng 7 Năm 2021

**Kết quả:**

table_agip9

[Đường link vote trên Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/Qmat7jeAS1W3BBq7yDi2jkHjNoywmUEfrF2FdPiS9CcGHa)

<hr />

### Quan hệ đối tác giữa AavegotchiDAO, Pixelcraft, và DinoSwap
**Aavegotchi Improvement Proposal #10**

**Tóm tắt Đề Xuất:** Một vài thành viên trong cộng đồng khá lo lắng về vấn đề thanh khoản của GHST trên Quickswap đang vơi đi và phần thưởng LP đang sụt giảm. Thay vì chỉ tăng thêm thanh khoản cho quỹ, bọn mình đang xem xem xét hợp tác với dự án một dự án tăng thanh khoản sớm được triển khai có tên gọi là DinoSwap. Điều khoản bao gồm việc cung cấp lượng token GHST trị giá 200k USD vào extinction pool có phần thưởng khuyến khích của họ và chi tiết đã được liệt kê phía dưới đây.

Chi tiết về bản AGIP này có thể được tìm thấy tại [đây](https://dao.aavegotchi.com/t/ghst-liquidity-rewards-on-new-launch-pixelcraft-dao-collaboration/1804).

Phương án 1: Đồng ý, chúng ta sẽ hợp tác với DinoSwap

Phương án 2: Không, không nên hợp tác với Dinoswap

**Thời gian vote:**13 - 20 tháng Năm 2021

**Kết quả:**

table_agip10

[Đường link vote trên Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmV3xdUskpTtd6JYyCgV7tjWeBGira2ZPFcdk2YDy3UPHE)

<hr />

### Ban Quản Lý Thanh Khoản / Hội Đồng FRENS
**Aavegotchi Improvement Proposal #11**

**Tóm Tắt Đề Xuất:**

*Vấn đề*

Để khuyến khích thanh khoản trên Quickswap, bạn có thể kiếm thêm phần thưởng FRENS khi stake token LP trên website của Aavegotchi. Dựa trên nguy cơ Tổn Thất Tạm Thời (Impermanent Loss), những con số này có thể thay đổi, mới đầu sẽ là +35% với GHST-QUICK, +20% với GHST=ETH và +10% với GHST-USDC. Do tỷ lệ này cần phải được điều chỉnh bằng tay và giá có thể thay đổi một tý khi đưa ra tỷ lệ, giải thưởng FRENS sẽ khác biệt khá nhiều; GHST-QUICK vào khoảng +90%, trong khi GHST-USDC chỉ được -10%.

*Giải pháp*

Trích lời [coderdan](/team#coder-dan): "Đã có nhiều tranh luận với hội đồng về việc quản lý nhiều phần khác nhau của Aavegotchi, và mình tin chắc rằng đây có thể là một ứng cử viên thú vị cho một cộng đồng như thế. Hiện tại chúng ta có ba cặp được khuyến khích bằng FRENS, nhưng điều này có thể thay đổi trong tương lại."

"Hội đồng" có thể là một chiếc ví nhiều chữ ký với ít nhất chín (có thể tối đa mười lăm) thành viên với danh tiếng tốt trong cộng đồng và tiếp cận rất nhiều với Gotchi. Nhiệm vụ then chốt của Hội Đồng Thanh Khoản là giám sát và điều chỉnh tỷ lệ FRENS để giữ được tỷ lệ đã định sẵn, bằng cách thực hiện việc gọi hợp đồng staking của GHST, vốn chỉ có thể thực hiện bởi vị trí "rateManager" được tạo ra cho hội đồng

Giờ đây hội đồng chỉ nên có một công việc - giữ cho tỷ lệ FRENS được cập nhật. Trong tương lai, nó có thể được mở rộng sang các đối tác, giám sát sự lạm phát điểm FRENS, v. v.

*Ứng viên*

Hai tuần trước, chúng tôi đã tạo ra một bài viết trên Discord (link ở phía trên) dành cho những ai mong muốn ứng tuyển. Kể từ đó, 11 người đã ứng tuyển. Tất cả ứng viên đều đã tham gia vào cộng đồng được một khoảng thời gian và dưa ra những lý do hợp lý để được lựa chọn. Do vẫn nằm trong khoảng 9-15 nên cách dễ dàng nhất chính là tất cả những người muốn tham gia đều sẽ trở thành hội đồng.

Tất cả tuỳ thuộc vào bạn, AavegotchiDAO ơi. Liệu chúng ta có nên thực hiện bước này để phân hoá Aavegotchi và đặt tỷ lệ FRENS vào bàn tay của:

Angst, Jarrod, Kenymccornick, UnfitStone, Notorious_BTC, Doxy, Kokusho, Grip, Almond-Stew, Shanekoy and Moon

[Bài viết Discourse (Ý tưởng/Bản đề xuất)](https://dao.aavegotchi.com/t/committee-idea-liquidity-managers-for-managing-the-frens-s-of-liquidity-pairs/1905)

[Bài viết Discourse (Ứng viên)](https://dao.aavegotchi.com/t/frens-committee-applications/1944)

Phương án 1: Vâng, hãy tạo ra Hội đồng FRENS

Phương án 2: Không, hãy giữ mọi thứ nguyên vẹn

**Thời gian bỏ phiếu:**17 - 25 tháng Năm 2021

**Kết quả:**

table_agip11

[Đường link vote trên Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmdLouPY9ipn2ezC2RR5Fjcz8auhX1uLajk9QS8nrctfsY)

<hr />

### Triển Khai Haunt 2
**Core Prop**

**Tóm Tắt Đề Xuất:** Gần đây số lượng Aavegotchi đã bị giới hạn ở mức 10k bởi chỉ có từng ấy Portal Haunt 1 tồn tại. Điều này khiến việc sở hữu được bé Aavegotchi đầu tiên trở nên khá đắt đỏ. Với việc sự kiện Haunt thứ 2 sẽ mở bán thêm 15k Portal, bọn mình mong có thể giải quyết được vấn đề này dù vẫn có thể giữ nguyên được sự độc đáo, tính sưu tập của các Aavegotchi Haunt 1.

Tầm nhìn của chúng tôi về lâu dài chính là ai cũng có thể chơi cùng các NFT, và bước đầu tiên để đạt được điều này chính là bỏ đi những meme về độ hiếm và tập trung vào việc mang đến những trải nghiệm độc đáo cho nhiều người dùng hơn.

Chi tiết về bản AGIP này có thể được tìm thấy tại [đây](https://dao.aavegotchi.com/t/coreprop-launch-haunt-2/2034)

Phương án 1: Có, hãy triển khai Haunt 2

Phương án 2: Không, đừng triển khai Haunt 2

**Thời gian vote:**19 - 26 tháng 7 Năm 2021

**Kết quả:**

table_launchHaunt2

[Đường link vote trên Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmTuVnGnZSUC4uWRVQrd3HwmJATtvJVpjNikCkifChyJwY)

<hr />

### Thêm Cơ Chế Trưởng Thành để ảnh hưởng đến điểm độ hiếm của Aavegotchi
**Aavegotchi Improvement Proposal #13**

**Tóm Tắt Đề Xuất:**

*Vấn đề*

Khi các thế hệ haunt mới được hình thành, dù chúng có được sửa lại các yếu tố ảnh hưởng đến việc sinh ra các chỉ số cho gotchi hay không thì số lượng gotchi có BRS cao được sinh ra sẽ rất nhiều. Do bản chất của rarity farming và phần thưởng của nó, sự xuất hiện đó ảnh hưởng cực lớn đến những ai đầu tư nhiều vào những thế hệ gotchi cũ, và những người không muốn bán đi gotchi do đã có sự gắn kết về mặt cảm xúc, hay ý định đầu tư nhiều hơn, hoặc khả năng "flip" sang những gotchi có BRS cao hơn, thuộc những thế hệ haunt sau này (do luật thuế). Hơn nữa, phương sai về chỉ số có thể xảy ra trong những thế hệ haunt mới, khiến cho nó gần như không thể tạo ra những quyết định tài chính lâu dài, do phương sai có thể khiến cho những thế hệ haunt trước đó lỗi thời. Điều này khiến cho mọi thứ phụ thuộc vào "may mắn".

*Giải pháp*

Cơ Chế Trưởng Thành là một bản đề xuất được trình bày lần đầu bởi thành viên Tistou trên Discord, được thiết kế để chỉ ra tất cả những vấn đề đã được đề cập, cũng như tại ra một cơ chế biến đổi mới thú vụ cho những Aavegotchi mà có thể được xây dựng trong tương lai (độ tuổi giới hạn dành cho các hoạt động, trang bị, phẩm chất của ngoại hình, v. v.). Nó tạo ra bước đệm khoảng 6 tháng trong suốt khoảng thời gian mà những gotchi lớn tuổi có được sự tặng trưởng BRS so với những gotchi vừa mới được triệu hồi. Khi những gotchi vừa mới được triệu hồi lớn dần, chúng sẽ nhanh chóng bắt kịp với những đối thủ già cõi hơn.

Trên tinh thần sử dụng những con số xảy ra trong tự nhiên, công thức này được đinh hình sau những số Fibonacci được nhân lên với 1 triệu, nhưng việc loại bỏ đi số 0 và 1 đầu tiên có vẻ hợp lý hơn cho trường hợp này. Đặc biệt, 10 số Fibonacci đầu tiên (thay thế cho số 0 đầu tiên) là 1, 1, 1, 2, 3, 5, 8, 13, 21, 34, có tổng là 89. Dựa theo công thức này thì cứ sau 1 triệu block sẽ được +1 BRS, rồi sau +1 BRS nữa sau 2 triệu block, +1 BRS nữa sau 3 triệu block, +1 BRS nữa sau 5 triệu block,..., đến khi đạt tổng +10 BRS sau 89 triệu block (khoảng 6.5 năm nếu sử dụng thời gian tạo block cơ bản là 2,3 giây -- mức trung bình kể từ ngày 1 tháng Năm).

Giải pháp này giúp tăng chỉ số một cách nhanh chóng chỉ trong một vài epoch, và san phẳng rõ rệt theo thời gian để tránh tình trạng các gotchi trở nên quá mạnh và cho phép những gotchi được triệu hồi gần đây có thể theo kịp chỉ trong 1 lần cộng thêm BRS cho gotchi lớn tuổi và từng trải hơn. Nó mang đến phần thưởng khuyến khích cho việc mở và triệu hồi gotchi từ cổng thay vì cứ khăng khăng giữ chúng, cả hai việc đều giúp tăng trưởng nền kinh tế trong game cũng như độ hiếm cũng chiếc cổng vẫn được giữ nguyên không mở. Hơn hết, đây là một hệ thống công bằng, không mang đến lợi ích cho riêng thế hệ haunt nào cả, và đơn giản là tưởng thưởng cho sự tương tác lâu dài, cũng như chống lại hiệu ứng của việc thay đổi mạnh mẽ và bất thình lình mà chúng ta đang thấy gần đây.

*Điều chỉnh Giải pháp*

* **Việc tích hợp sẽ được điều chỉnh nhẹ nhàng để có thể sử dụng những dữ liệu thời gian sinh ra on-chian thay vì block number, ** với thời gian epoch được định sẵn bằng cách sử dụng những con số fibonacci được đề xuất trong sigprop và thời gian tạo block trung bình trong hiện tại. Điều này khiến cho việc tích hợp trở nên đơn đơn giản hơn, cho phép tạo ra những dòng thời gian dễ dự đoán (do mẫu số block time là một hằng số, ngược lại với biến số dựa trên hoạt động on chain), cũng như để đảm bảo chức năng của cơ chế nếu bất kỳ vấn đề cấu trúc hoặc mạng lưới blockchain nào thay đổi trong tương lai. Những khoảng nghỉ trong thời gian pet sử dụng thời gian thực, vậy nên một tiền lệ cho việc này đã tồn tại.

* **Mức tối đa 10 BRS đã được bỏ đi.** Bản thân các khoảng nghỉ fibonacci là một giới hạn tự nhiên, khi thời gian để chạm đến một epoch tiếp theo xấp xỉ với một hàm số mũ. Ví dụ, sẽ mất hơn 4 năm để được cộng thêm BRS (+11 tổng cộng), sau đó là 6,5 năm nữa, rồi sau đó là 10,5 năm nữa, v. v.

* **Sự tích hợp này sẽ diễn ra vào lúc Rarity Farming Mùa 2 bắt đầu.** Một trong những mục đích của cơ chế trưởng thành là mang đến một bước đệm cho hiệu ứng của phương sai số liệu một khi thế hệ haunt mới được công bố. Để Haunt 1 có thể trải nghiệm xem việc này có mang lại tác dụng gì không thì nó cần phải được triển khai càng sớm càng tốt, bởi vào giữa màu 2, các gotchi H2 đều gần như sẽ đuổi kịp chỉ số cộng thêm của H1, và cách biệt chỉ 1 2 điểm BRS mà thôi.

Chi tiết về bản AGIP này có thể được tìm thấy tại [đây](https://aavegotchi. medium. com/agip13-should-aavegotchi-introduce-an-aging-boost-5ee12e8c9f0)

Phương án 1: Vâng, tích hợp cơ chế trưởng thành

Phương án 2: Không, đừng tích hợp lúc này

**Thời gian vote:**2 - 9 tháng Mười 2021

**Kết quả:**

table_agip13

[Đường link vote trên Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmcAQLdAyS9n7LWDu9qvRtdNqJa7FBStadrHq3xqjW9kCT)

<hr />

### Kiếm FRENS với token LP GHST-MATIC
**Aavegotchi Improvement Proposal #14**

**Tóm tắt Đề Xuất:** Polygon là một trong những lý do chính đứng sau thành công của Aavegotchi. Phí giao dịch cực thấp được thanh toán bằng MATIC đã cho phép đội ngũ phát triển một trò chơi với rất nhiều hoạt động diễn ra trên blockchain ví dụ như pet, đấu giá kiếm tiền, giao dịch trên Baazaar, và lưu trữ đồ hoạ của game Aavegotchi.

Vào đầu tháng Chín, Sushiswap đã bắt đầu phần thưởng 2x SUSHI để người dùng có thể farm từ cặp token LP GHST-MATIC trên Sushiswap.

Biệt Đội FRENS khuyến nghị về việc cho mang đến phần thưởng FRENS cho cặp LP GSHT-MATIC trên AMM.

Bọn mình khuyến nghị rằng tỷ lệ FRENS xác định được trả cho cặp LP GHST-MATIC lớn hơn so với phần thưởng đã xác định dành cho cặp LP GHST-ETH (120%) nhưng sẽ thấp hơn phần thưởng xác định dành cho cặp GHST-QUICK (135%).

Điều này là do nguy cơ Impermanent Loss (IL) dành cho GHST-MATIC cao hơn so với GHST-ETH nhưng thấp hơn so với GHST-QUICK. Bọn mình khuyến nghị mức xác định dành cho cặp LP GHST-MATIC là 130%.

Gần đây, phần lớn thành khoản dành cho GHST đều nằm ở Quickswap.

Hãy xem qua [https://frens-taaskforce.vercel.app/](https://frens-taaskforce.vercel.app/)

Điều này mang đến một cơ hội lớn để di chuyển một lượng thanh khoản đến cho AMM Sushiswap được sử dụng rộng rãi và giảm đi sự phụ thuộc vào Quickswap.

Chi tiết về bản AGIP này có thể được tìm thấy tại [đây](https://dao.aavegotchi.com/t/frens-incentive-for-matic-ghst-lp-pair-on-sushiswap/2336)

Phương án 1: Đúng, tặng FRENS cho GHST-MATIC

Phương án 2: Không, đừng đưa FRENS

**Thời gian vote:**12 - 19 tháng Mười 2021

**Kết quả:**

table_agip14

[Đường link vote trên Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0x42914b268d255efe0eea943d052e5dc7eab0cbbcde9d3cb809f027e3ea1f611f)

<hr />

### Thành Lập Biệt Đội Trang Phục
**Aavegotchi Improvement Proposal #15**

**Tóm Tắt Đề Xuất:**

*Động Lực*

Trong hệ sinh thái của Aavegotchi, trang phục đóng một vài trò quan trọng, vừa có khả năng tăng BRS trong rarity farming, tăng chỉ số trong minigame, khả năng đa dụng trong metaverse sắp tới, hoặc chỉ trang trí cho đẹp. Do sự phức tạp trong loạt chỉ số khả dĩ khác nhau của gotchi, và những chỉ số trang phục khác nhau, việc phân phối cân bằng các trang bị mặc được không phải là dễ dàng. Việc mang đến những trang bị mới mà không phân tích kỹ lưỡng có thể dễ dẫn đến việc trùng lặp (và bị loãng) các trang phục đang tồn tại và pha loãng thêm các tập hợp có thể áp dụng thực tế cho gotchis có phạm vi tính trạng theo những hướng nhất định.

*Chi Tiết*

Bản đề xuất này đề nghị tạo ra một Biệt Đội Trang Phục (WTF), ý tưởng này khởi nguồn từ những cuộc thảo luận liên quan đến những vấn đề trên. Tương tự Bội Đội FRENS, mục tiêu của WTF là hỗ trợ Pixelcraft trong việc phân tích sự phân bố hiện tại của bác vật phẩm nằm trong hệ sinh thái, từ ô đồ, độ hiếm, điểm điều chỉnh, và cách phân tích tốt nhất có thể áp dụng cho những vật phẩm trong tương lai. Biệt Đội này sẽ KHÔNG có khả năng định hướng vật phẩm sắp tới sẽ dược bán bằng cách nào và đó là gì, nhưng sẽ hoạt động hoàn toàn theo hướng cố vấn.

*Ứng cử viên*

Các ứng cử viên cho Biệt Đội này bao gồm những thành viên kỳ cực trong cộng đồng với nhiều kỹ năng có thể ứng dụng được, bao gồm kỹ năng phân tích số liệu, lập trình và kinh nghiệm lăn lộn trong hoạt động của baazaar, và kinh nghiệm từng làm việc với DAO. Biệt Đội này sẽ hưởng nhiều quyền lợi khi có càng nhiều tiếng nói và góc nhìn, vậy nên tất cả các ứng viên đều được tham gia. Việc thành lập Biệt Đội này sẽ là một bước tiến lớn đến việc tạo ra một hệ sinh thái cân bằng và giúp cho AavegotchiDAO trưởng thành.

**Danh sách tất cả ứng cử viên:** Kuwlness, JG1 (Fantasma#1777), Bearded, Actaeon, Thunderfish, Letsgobankless, Kokusho, Ader1990.eth, Machete, Aimo217 (AL#4105), Notorious_BTC, MonsterRNG, Goobz, Diddlypoo

Chi tiết về bản AGIP này có thể được tìm thấy tại [đây](https://dao.aavegotchi.com/t/wearables-taask-force/2350)

Phương án 1: Vâng, hãy thành lập WTF

Phương án 2: Không, đừng thành lập WTF

**Thời gian vote:**12 - 19 tháng Mười 2021

**Kết quả:**

table_agip15

[Đường link vote trên Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0xa1f06ffcdd5f5d51c5f82022e8a25ecc7672252f8a47d9ee484b9fe3b6cd5b3a)

<hr />

### Stake 100k GHST để tạo ra phần thưởng cho Minigame
**Aavegotchi Improvement Proposal #16**

**Tóm Tắt Đề Xuất:** Một vài người bạn đã cho thấy sự quan ngại về việc thiếu đi phần thưởng khi tham gia vào các sự kiện Minigame. Do hiện tại không có Biệt Đội Aarcade với ngân sách được chỉ định nên Gotchinomics đã nghĩ về việc stake 100k GHST vào Ngân Quỹ để hỗ trợ cho các phần thưởng trong tương lai.

*Vấn đề*

Aavegotchi mong muốn trở thành một trong những dự án PlaytoEarn trong giới gaming, và việc triển khai Gotchiverse Realm chính là nền tảng để đạt được mục tiêu dài hạn này. Tuy nhiên, vẫn có thể cải thiện những khả năng trong ngắn hạn thông qua những sự kiện gaming theo mùa. Vấn đề chủ yếu ở đây là thiếu ngân sách.

*Giải pháp*

Trước khi tạo ra một DAO dành riêng cho Aarcade, bước đầu tiên cho mang đến phần thưởng play2earn để tạo ra một nguồn tiền bền vững. Một phương pháp đơn giản và ít rủi ro là stake một phần ngân quỹ DAO, khoảng tầm 100k GHST, để tạo ra FRENS. Số tiền ấy có thể chuyển thành vé xổ số và mang tặng cho những người tham gia chơi mini game thông qua những sự kiện theo từng thời điểm.

*Các nguy cơ hiện hữu*

Stake GHST sẽ làm hòa tan một cách gián tiếp tỷ lệ giữa FRENS và vé. Tuy nhiên, do chúng được phân bổ thông qua phần thưởng mini game nên ảnh hưởng của nó sẽ tối thiểu so với khả năng tăng tương tác và thu hút người chơi mới.

*Lựa chọn thay thế*

Đợi đến khi Aarcade DAO triển khai và để cho ủy ban mới quyết định cách phân bố ngân quỹ. Tuy nhiên, phương án thay thế này có thể sẽ làm mất đi khoản thời gian quý báu mà trong đó chúng ta có thể tạo ra nhiều phần thưởng hấp dẫn hơn.

Chi tiết về bản AGIP này có thể được tìm thấy tại [đây](https://dao.aavegotchi.com/t/creation-of-an-aarcade-dao/2128)

Phương án 1: Đồng ý, stake 100k GHST

Phương án 2: Không, hãy đợi Aarcade DAO

**Thời gian vote:**10 - 17 tháng Mười Hai 2021

**Kết quả:**

table_agip16

[Đường link vote trên Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0xd654255f22e694369686e9791ff663f38a9f586bd4126831fc9d8ce384208964)

<hr />

### Tăng Sức Mạnh Bỏ Phiếu Cho REALM Parcel
**Aavegotchi Improvement Proposal #17**

**Tóm Tắt Đề Xuất:**

*Vấn đề:*

Với một dạng tài sản mới được thêm vào gia đình Aavegotchi dưới dạng các ô đất realm, một số lượng GHST mới được sinh ra. Việc này hiện tại khiến cho những ai đầu tư thật nhiều vào những ô đất mới sở hữu ít sức mạnh bỏ phiếu hơn nhiều trong Aavegotchi DAO.

*Giải pháp:*

Do những ô đất realm và Gotchiverse là những phần không thể thiếu của hệ sinh thái Aavegotchi nên mình tin rằng chỉ khi nào những người sở hữu realm có được một lượng sức mạnh tương ứng với số lượng ô đất mà họ sở hữu thì mới hợp lý. Điều này đảm bảo rằng ý kiến của tất cả mọi người đều sẽ được lắng nghe, và đó là một phần đặc biệt quan trọng trong những bản đề xuất tương lai, liên quan đến Gotchiverse.

Do mỗi ô đất đều có một kích thước pixel và cũng là thước đo cho số lượng khoáng sản bên trong mỗi ô đất, bản đề xuất mang đến những phương án sau đây:

1 pixel = 1 GHST sức mạnh bỏ phiếu (64, 256, 2056) HOẶC 1 pixel = 0,5 sức mạnh bỏ phiếu (32, 128, 1028)

Một phương pháp thay thế ở đây là mang cho mỗi ô đất một sức mạnh bỏ phiếu ngang bằng, dựa trên giá sàn đấu giá, người sở hữu vừa có một lượng sức mạnh vừ phải, vừa đảm bảo rằng tất cả đều có tiếng nói cho mình.

Phương án này sẽ mang đến lần lượt 100, 200, và 1300 GHST cho gói đất humble, reasonable, và spacious.

*Chỉnh sửa cho CoreProp*

Phương án "giá sàn Đấu Giá" đã được thêm vào. Điều này mang đến cách biệt số phiếu lên đến 20%, nghĩa là bất kỳ phương án nào cũng phải cao hơn 20% so với phương án cao thứ hai để được thông qua.

Chi tiết về bản AGIP này có thể được tìm thấy tại [đây](https://dao.aavegotchi.com/t/voting-power-for-land-plots/2508)

Phương án 1: 0,5 GHST sức mạnh vote cho mỗi pixel

Phương án 2: 1 GHST sức mạnh vote cho mỗi pixel

Phương án 3: Sức mạnh vote dựa trên giá sàn đấu giá

Phương án 4: Không trao sức mạnh bỏ phiếu cho REALM

**Thời gian vote:**10 - 17 tháng Mười Hai 2021

**Kết quả:**

table_agip17

[Đường link vote trên Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0x28b630e088240ee4bb4e680b071767b98b962a4006c71e71f00c782b86adfbab)

<hr />

### Gotchiverse Patch v0.1
**Aavegotchi Improvement Proposal #18**

**Tóm Tắt Đề Xuất:**

*Vấn đề:*

Dù Gotchiverse vẫn chưa lên sóng nhưng bọn mình đã xác định được một vài khu vực mà bọn mình tin rằng nên được điều chỉnh trước khi game ra mắt, và muốn những khía cạnh này nhận được sự chú ý của cộng đồng để thảo luận và quyết định xem có nên thực thi hay không.

Để đảm bảo không có thay đổi nào khiến đảo lộn cả lô cập nhật, ban đầu chúng tôi đã tạo ra sáu bản đề xuất SigProp riêng. Bản CoreProp này kết hợp các bản SigProp đã thành công vào trong Bản vá Gotchiverse v0.1!

*Giải pháp:*

Bản vá 0.1a

Sau khi bọn mình đã hoàn tất các chi tiết then chốt ví dụ như giá xây dựng và mức độ xây dựng trong bản Whitepaper sắp tới, bọn mình đã khám phá ra một trong những dự đoán chủ yếu của bọn mình đã đánh giá thấp số lượng Alchemica trong mỗi gói đất về mặt tổng số lượng. Bản vá sẽ giúp tăng lượng Alchemica của mỗi gói đất để chúng phù hợp với lượng token Alchemica, sự phân bổ, và mức xuất ban đầu.

Bản SigProp dành cho Bản vá 0.1a được thông qua với các con số như sau:

Yes: 13. GHST

No: 41.85k GHST

Bản vá 0.1b

Dù ý định ban đầu của bọn mình là làm cho boost chỉ có giá trị sử dụng một lần, nhưng rõ ràng nhiều thành viên trong cộng đồng lại hiểu rằng boost có thể tái tạo. Bản vá này sẽ cho phép boost tự tái tạo sau mỗi trận Đại Chiến.

Tuy nhiên, không giống như các gói đất, mức độ tái tạo là một số lượng cố định ở mỗi vòng. Ví dụ, một gói đất với "5" FUD tăng cường sẽ được tăng 5 FUD mỗi vòng.

Bản SigProp dành cho bản vá 0.1b cũng đã được thông qua một cách thuyết phục:

Yes: 10.36M GHST

No: 2.37M GHST

Bản vá 0.1c

Thậm chí khi Bản Vá 01. b đã được thông qua, boost vẫn sẽ có giá trị thấp nếu so với giá trị mà thị trường đã gán cho chúng, nếu so với một gói đất tương tự mà không có boost. Bản vé 0.1c đã đề xuất về việc tăng cường boost lên 5x để mang giá trị của boost đến gần hơn giá trị hiện tại trên thị trường.

Bản SigProp dành cho Bản vá 0.1c đã không thông qua và SẼ KHÔNG NẰM TRONG Bản vá v0.1:

Yes: 5.85M GHST

No: 8.04M GHST

Những bản SigProp trong tương lai sẽ được tạo ra để giải quyết từng phần của vấn đề này.

Bản vá 0.1d

Gotchiverse Litepaper đã đề cập rằng Kinship sẽ được trao đổi thành một lượng Alchemica, nghĩa là "đốt" kinship. Bọn mình chắc chắn muốn duy kỳ ý tương về việc dùng kinship để truyền nhưng sau khi suy nghĩ sâu hơn, giờ bọn mình tin rằng có cách tốt hơn để đạt được việc này.

Một giải pháp "thành tựu" không yêu cầu phải xóa kinship của Aavegotchi đã được đề xuất. Thay vào đó, những Aavegotchi có kinship cao sẽ truyền Alchemica ở mức cao hơn một chút, tùy vào mức thành tựu.

Bản SigProp dành cho Bản vá 0.1d cũng sẽ được thông qua:

Yes: 12.64M GHST

No: 431.93k GHST

Bản vá 0.1e & 0.1f

Các quận không tồn tại khi Citaadel trong bản Litepaper được xuất bản lần đầu. Khi nói vậy, bọn mình luôn tìm một khu vực hoặc nhóm khu vực dành cho Pixelcraft để phát triển những trải nghiệm chuyên sâu có thể tăng giá trị tổng thể của game. Tương tự, một trong những ý tưởng ban đầu (Citaadel trước khi nó được như hiện tại) là giữ lại một quản trường để có thể bỏ phiếu DAO theo thời gian thực. Ý tưởng về việc có được những trải nghiệm quản trị được game hóa đã là một phần trong những ý tưởng đầu tiên, giúp ươm mầm cho chu cầu sở hữu một thế giới ảo dành riêng cho Aavegotchi.

Bản Vá 0.1e & 0.1f đề xuất phân phối 1000 gói đất cho Pixelcraft và AavegotchiDAO tại quận 27/30. Cả hai Bản Vá đề đã được thông qua một cách thuyết phục:

Yes: 11.94M GHST / 12.14M GHST

No: 615.78k GHST / 734.92k GHST

Tổng kết

Và đó là tất cả nội dung của Bản Vá Gotchiverse đầu tiên! Giờ đây sẽ tùy thuộc vào bạn, AavegotchiDAO, để quyết định xem Patch v0.1 sẽ được tiến hành hay không.

Phương án 1: Vâng, tiến hành bản vá v0.1

Phương án 2: Không, đừng tích hợp Bản vá v0.1

Chi tiết về bản AGIP này có thể được tìm thấy tại [đây](https://dao.aavegotchi.com/t/gotchiverse-paatch-v0-1-thread/2791)

Phương án 1: Vâng, tiến hành bản vá v0.1

Phương án 2: Không, đừng tích hợp Bản vá v0.1

**Thời gian vote:**5 - 12 tháng Mười 2022

**Kết quả:**

table_agip18

[Đường link vote trên Snapshot](https://vote.aavegotchi.com/#/proposal/0x396844d504394f7f335f070d443c33455300ee21d90db6c4b089760a3e0469bf)

<hr />

### Cung cấp thanh khoản cho GHST trên SyncFutures
**Aavegotchi Improvement Proposal #19**

**Tóm Tắt Đề Xuất:**

Kể từ khi Aavegotchi thu thập được nhiều thanh khoản trên các sàn DEX dạng Spot thì giờ đã đến lúc để tạo và tăng cường cho thị trường giao dịch Tương Lai. Các thị trường phái sinh tạo nền khối lượng giao dịch toàn cầu cực lớn và cho phép người dùng tận dụng khoản đầu tư của mình. Việc thêm thanh khoản cho GHST trên SynFutures cho phép người chơi tận dụng longs (shorts) trên thị trường tương lai của Aavegotchi. Nhưng tại sao lại là SynFutures?

Những nhà đầu tư và background khủng SynFutures được đỡ đầu bởi Polychain, Pantera, Dragonfly, Framework, Standard Crypto, Woo, và nhiều hơn nữa. Background của team là sự kết hợp mạnh mẽ giữa tài chính truyền thống và DeFi. SynFutures là dự án duy nhất có thể hỗ trợ niêm yết bất kỳ tài sản nào, bởi bất kỳ ai, theo dạng mở (trong vòng 30 giây).

An Ninh Được đỡ đầu bởi kinh nghiệm từ kỹ sư tài chính TradFi và sự an ninh của giao thức DeFi, SynFutures có rất nhiều uếu tốt quản trị rủi ro (ví dụ như tất công flashloan, và phương thức EMA mượt mà, v.v.) và đã trải qua nhiều vòng kiểm định code từ bên ngoài.

Dễ dàng quản lý và bắt đầu sử dụng SynFutures hỗ trợ mô hình một token để thêm thanh khoản, nghĩa là Aavegotchi Treasury chỉ cần gửi GHST thay vì gửi hai loại token và gặp phải nguy cơ tổn thất tạm thời. Bọn mình xin một khoảng GHST trị giá 200k USD để bắt đầu pool. Thanh khoản có thể được rút bất kỳ lúc nào.

Tiềm Năng Phát Triển Khối lượng giao dịch và người dùng đang tăng lên nhanh chóng trên SynFutures. Trong ba tháng qua kể từ khi SynFutures Alpha được triển khai, bọn mình đã đạt được 47k người dùng và 1 tỷ khối lượng giao dịch. Tất cả việc này xảy ra mà không cần có token SynFutures, vốn có thể thu hút nhiều người dùng hơn.

Phân tích khối lượng Quickswap vs SynFutures: Tổng LP: 150k / 40k Tổng số trader: 100k / 20k Khối lượng giao dịch hàng ngày: $100M / $29M

Khối lượng giao dịch của SynFutures bằng 1/3 giao dịch trên Quickswap, số lượng trader bằng 1/5, tuy nhiên khối lượng giao dịch cho mỗi cặp có phần tập trung hơn. SynFutures có 108 cặp giao dịch trong khi Quickswap có hơn 22k cặp. Ví dụ, khối lượng giao dịch hàng ngày của MATIC-USDC trên SynFutures đóng vào khoảng 9 triệu USD, trong khi đó Quickswap đạt 14 triệu USD.

Chi tiết về bản AGIP này có thể được tìm thấy tại [đây](https://dao.aavegotchi.com/t/provide-ghst-as-liquidity-on-the-derivatives-dex-synfutures/2664)

Phương án 1: Đồng ý, stake GHST trị giá 200k USD

Phương án 2: Không đồng ý stake GHST trị giá 200k USD

**Thời gian vote:**2 - 9 tháng Hai 2022

**Kết quả:**

table_agip19

[Đường link vote trên Snapshot](https://vote.aavegotchi.com/#/proposal/0x560e97ce27e9c99470a0a609e36d4c4cd20e948eae92691ea2ba2afb984e7e41)

<hr />

### Thành lập Biệt Đội DAO Treasury
**Aavegotchi Improvement Proposal #20**

**Tóm Tắt Đề Xuất:**

Bọn mình đề xuất tạo ra Biệt Đội DAO Treasury (DTF). Hội đồng ban đầu sẽ bao gồm 8 thành viên với thâm niêm tham gia DAO trong vòng 6 tháng.

Vào ngày 12/07/2021, DAO Treasury (https://aavegotchi.com/treasury) có lượng DAI và GHST trị giá khoảng ~$11,408,400. Ban đầu, hội đồng sẽ thành lập các bản đề xuất về vấn đề mà DAO quan tâm và sau đó sẽ bỏ phiếu và nếu được thông qua thì sẽ được thi hành.

Tuyên bố Sứ mệnh

Biệt Đội Aavegotchi DAO là một hội đồng năng nổ được chỉ định để tạo ra các bản đề xuất quản lý ngân quỹ của DAO để cộng đồng và DAO có thể suy xét. Nhiệm vụ và mục tiêu ban đầu sẽ là: 1) Tăng và tối ưu ngân quỹ DAO với trọng tâm về an toàn, an ninh và minh bạch; 2) Hợp tác với Pixelcraft để hỗ trợ các công cụ phát triển và xác định và nền tảng cho việc quản lý DAO Treasury đang diễn ra, và 3) hỗ trợ và đảm bảo sự phát triển chung của cộng đồng Aavegotchi bằng cách tăng sự quan tâm, chủ động quản bá sự nhận biết, và duy trì sự tương tác của người dùng.

Ngân sách ban đầu

Sau cuộc thảo luận dài với biệt đội, cộng đồng, và cùng với coderdan, DTF muốn yêu cầu ngân sách 50k GHST. Ngân sách 50k GHST sẽ được chuyển từ Ngân Quỹ DAO sang chiếc ví Gnosis Safe với 8 chữ ký đồng thuận. Ngân sách này sẽ mở rộng sự linh hoạt của DAO một cách đáng kể trong việc khuyến khích và tặng thưởng cho cộng đồng, lập trình viên, nhà sáng tạo, và những người đóng góp chung. Ngân sách này sẽ không bao giờ được dùng để thưởng cho các thành viên trong DTF. Động lực chính của DTF sẽ là thành lập một bản đề xuất dành cho công dụng chung của DAO Treasury bằng cách đầu tư một ít trong số DAI/GHST trị giá 10 triệu USD trong các cơ hội sinh lãi suất. Với sự phát triển hiệu quả của Ngân Quỹ DAO, thậm chí những lợi nhuận khiêm tốn nhất cũng đủ để chi trả cho những yêu cầu ngân sách từ DTF. DTF sẽ đảm bảo việc kế toán dễ hiểu và cung cấp cho cộng đồng các tài liệu đối chứng để đảm bảo tính minh bạch. Một số công dụng tiềm năng từ ngân sách này bao gồm:

* Thưởng cho sự tương tác cộng đồng và trò chơi aaracde
* Thưởng cho các lập trình viên và nhà phát triển
* Thưởng cho các lập trình viên phát triển ứng dụng cộng đồng
* Thưởng cho các cống hiện nghệ thuật được cộng đồng công nhận
* Thưởng, công nhận, và phát triển mạng lưới content creater và những nỗ lực chung trong việc marketing
* Mở rộng Aavegotchi và những cơ hợi của GHST trong các ứng dụng tài chính phi tập trung

DTF đang phát triển một kế hoạch chi tiết và nhiều dự án pilot tiềm năng để có thể tận dụng tốt nhất những quỹ này. Bọn mình sẽ làm việc để phát triển các công cụ nhằm tối ưu hóa sự minh bạch trong việc sử dụng ngân sách. Chi phí nằm trong khoảng 50k GHST sẽ không cần sự đồng ý từ DAI để sử dụng nhanh nhất khoảng tiền này. Bất kỳ khoảng tiền nào được yêu cầu mà lớn hơn 50k GHST sẽ cần phải có sự bỏ phiếu từ DAO.

8 thành viên ban đầu của DTF

* BowtiedNerd
* Mori
* letsgobankless
* Addison
* Deucehearts
* BackfireCapital
* Swappi
* Dr Wagmi

Bọn mình rất biết yên sự hỗ trợ của cộng đồng Aavegotchi và mong chờ bản đề xuất đầu tiên của bọn mình.

Chi tiết về bản AGIP này có thể được tìm thấy tại [đây](https://dao.aavegotchi.com/t/establish-the-dao-treasury-taask-force/2460)

Phương án 1: Vâng, với ngân sách 50k GHST

Phương án 2: Vâng, nhưng không có ngân sách 50k GHST

Phương án 3: Không, đừng tạo ra DTF

**Thời gian vote:**2 - 9 tháng Hai 2022

**Kết quả:**

table_agip20

[Đường link vote trên Snapshot](https://vote.aavegotchi.com/#/proposal/0x17f3eec096b26e87b3441f7cad53108f6933fd32ac67417de6ef7c94970502e4)

<hr />

### Thêm GHST vào Cầu Umbria Narni
**Aavegotchi Improvement Proposal #21**

**Tóm Tắt Đề Xuất:**

Umbria Narni Bridge đã tích hợp GHST token, và đang giúp hỗ trợ quá trình chuyển dịch GHST cực rẻ giữa Ethereum <--> Polygon, nếu so sánh với cầu chính thức của Polygon. Umbria Narni tính phí chuyển mạng vòa khoảng 1/2 so với cầu chính thức của polygon và thâm chí là nhanh hơn rất nhiều (4 phút, so với > 1 giờ).

Umbria Narni có thể chuyển tối đa 20% tổng số GHST thanh khoản trong mỗi lần chuyển. Ví dụ, với lượng token GHST 100k có trong một bên của pool, cầu có thể chuyển tối đa lượng GHST trị giá 20k USD trong mỗi giao dịch.

Hiện nay đang có lượng token GHST trị giá 14000 USD mỗi bên. Số tiền này chủ yếu được tài trợ bởi Umbria. Điều này đã cho phép chiếc cầu có thể chuyển tối đã lượng GHST 700 USD mỗi giao dịch - vốn rất tốt, nhưng bọn mình để ý rằng nhiều người muốn chuyển nhiều hơn trong mỗi giao dịch.

Bọn mình đề xuất AavegotchiDAO thêm lượng token GHST trị giá 100k USD vào mỗi pool của cầu (1. Polygon và 2. Ethereum). Có một vài lợi ích khi làm vậy:

AavegotchiDAO sẽ kiếm được 0,2% phí chuyển bất cứ khi nào có ai đó dùng cầu để chuyển token giữa Ethereum <--> Polygon. Vậy nên trong suốt quản thời gian stake, Aavegotchi sẽ kiếm được tiền. Nếu cầu Narni trở thành một giải pháp không cần thiết, AavegotchiDAO chỉ cần rút một cách đơn giản và tận hưởng lợi nhuận của mình.

Giờ đây, người dùng sẽ có thể chuyển những giao dịch GHST trị giá 20k USD.

Chi tiết về bản AGIP này có thể được tìm thấy tại [đây](https://dao.aavegotchi.com/t/add-ghst-stake-to-the-umbria-narni-bridge/2836)

Phương án 1: Đồng ý, stake GHST trị giá 200k USD

Phương án 2: Không đồng ý stake GHST

**Thời gian vote:**8 - 15 tháng Hai 2022

**Kết quả:**

table_agip21

[Đường link vote trên Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0xeaac981066e143c46c7a616d2e6ff004d7d4d354005e077f01e3698041e4780a)

<hr />

### Triển Khai Rarity Farming Mùa 3
**Aavegotchi Improvement Proposal #22**

**Tóm Tắt Đề Xuất:**

*Vấn đề*

Hiện tại, Rarity Farming diễn ra không theo chu kỳ và rất khó dự đoán khi nào Aavegotchi sẽ ra mắt. Điều này khiến các nhà đầu tư tự hỏi rằng liệu họ có nên giữ Gotchi và Trang Phục, hay họ nên flip để tìm ROI tốt hơn trong những vòng kế tiếp hay không. Cộng đồng rất muốn có được sự chắc chắn / dự đoán cho cả về mặt đầu tư và mục đích lên kế hoạch.

*Giải pháp*

Nếu tài trợ một cách đúng đắn, Rarity Farming sẽ diễn ra 3 lần 1 năm. Việc này sẽ phù hợp với bản chất theo mùa mà chúng ta đang theo đuổi, và nếu được lên kế hoạch kỹ lưỡng thì sẽ bên vững dựa trên các sự kiện đấu giá kiếm tiền chen giữa, thu nhập ngân quỹ thông qua staking và các đối tác (ví dụ như bản đề xuất Umbria), và những nguồn thu nhập khác như DAO Grant. Tác giả của bản đề xuất tin rằng Rarity Farming là một phần quan trọng của hệ sinh thái Gotchiverse, và thứ có thể xây dựng và cả thiện chứ không phải bỏ mặc.

*Phân Phối*

Với Mùa 3, mình đề xuất chúng ta sẽ trở lại mô tỷ lệ phần thưởng tiêu chuẩn, như đã được thử và trải nghiệm trong Rarity Farming Mùa 1. Các tân binh giờ đây đã trưởng thành và sẵn sàng thi đấu với những người anh cả. Điều này có nghĩa là 70% tiền thưởng sẽ được dành cho bản xếp hạng BRS, 20% dành cho bản xếp hạng kinship và 10% sẽ dành cho bản xếp hạng XP.

Dựa trên những cuộc thảo luận từ Forum thì đây sẽ là mô hình cuối cùng của SZN3:

* 4 vòng (2 tuần mỗi vòng)
* 1,5 triệu GHST cho quỹ phần thưởng GHST (1.4 triệu GHST đã được tài trợ sẵn)
* 70% BRS
* 20% Kinship
* 10% XP
* Top 5k Gotchis (20%) → Top 7.5k Gotchis (30%)
* 3 Mùa mỗi năm (xem bảng bên dưới)
* SZN 3: Tháng 2 - tháng 3
* SZN 4: tháng 6 - tháng 7
* SZN 5: tháng 10 - tháng 11

Cập nhật phần thưởng: [Mô hình phát thưởng Rarity Farming SZN 3](https://docs.google.com/spreadsheets/d/1jH6IEJ7Xu_YvblgEPX9UpT-phLelJ5XsmknkaxQOg7A/)

Do thiếu đi 100k GHST so với con số đề xuất nên bản đề xuát này cũng sẽ bao gồm yêu cầu tài trợ số lượng token còn lại được lấy ra từ ngân quỹ AavegotchiDAO.

Chi tiết về bản AGIP này có thể được tìm thấy tại [đây](https://dao.aavegotchi.com/t/season-3-for-q1-2022/2779)

Phương án 1: Có, hãy triển khai Haunt 3

Phương án 2: Có, nhưng với những con số khác

Phương án 3: Không, đừng triển khai RF SZN 3

**Thời gian vote:**8 - 15 tháng Hai 2022

**Kết quả:**

table_agip22

[Đường link vote trên Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0x5ffa4d3b8f4c1d744424af5c0f079ebfa286c9aec9c35e898c2c02bee87a0b60)

<hr />

### Đồng Tài Trợ Cho Quỹ GoodGhosting
**Aavegotchi Improvement Proposal #23**

**Tóm Tắt Đề Xuất:**

*GoodGhosting là gì?*

GoodGhosting là một trò chơi tiết kiệm không thiệt hại, được xây dựng dựa trên Aave. Bọn mình đã triển khai những pool tiết kiệm đầu tiên trên Polygon, trong suốt mùa hè năm 2021. Hiện tại, bọn mình đã giúp hơn 7k người dùng tiết hiện hơn 600k Usd tài sản trên Polygon. Tất cả khi thu thập một số NFT đẹp và leo bảng xếp hạng.

Đội ngũ GoodGhosting tin vào một thế giới mà việc tiết kiệm đáng được thưởng, dễ dàng, và vui nhộn. Nhưng, việc tiết kiệm truyền thống không hề giống vậy. Bọn mình xây dựng các ứng dụng tiết kiệm xã hội phi tập trung kết hợp với các yếu tố thiết kế game nhằm mục đích tiết kiệm. Bọn mình muốn giúp cộng đồng phát triển thói quen tài chính tốt hơn và có được niềm vui song song đó.

*Quan Hệ Hợp Tác Tiềm Năng*

Bọn mình muốn cộng đồng GoodGhosting biết đến Aaegotchi, bằng cách tạo ra một quỹ tiết kiệm theo chủ đề Aavegotchi. Quỹ này sẽ yêu cầu người chơi tiết kiệm token GHST, kiếm GHST từ đó. Bọn ình thấy rằng đây là một cơ hội “va chạm” rất tốt dành cho cả 2 cộng đồng.

Aavegotchi là một dự án độc đáo mà mình đã theo dõi từ lúc bắt đầu. Với cả vai trò người chơi cũng như cư dân của hệ sinh thái. Đúng vậy, cả người chơi và cư dân của hệ sinh thái. Bọn mình thấy rằng đây là một cơ hội “va chạm” rất tốt dành cho cả 2 cộng đồng

Ngoài việc mời tất cả người chơi Aavegotchi và DAO cụ họ tham gia vào pool tiết kiệm GHST sắp tới, GoodGhosting cũng muốn yêu cầu AavegotchiDAO đồng tài trợ cho pool.

*Yêu Cầu Của Bọn Mình*

* Một khoảng tài trợ trị giá 7k GHST cho pool tiết kiệm này. Chia cho tất cả người chơi chiến thắng.
* Khả năng thưởng cho người tiết kiệm thành công với Gotchi XP, hoặc thay bằng FRENS. Hãy xem GoodGhosting là một trò minigame dài hạn, khuyến khích người chơi thu thập thêm nhiều GHST.
* Phần thưởng Aavegotchi NFT (trị giá 3000 GHST) sẽ được xổ số cho những người tham gia/chiến thằng ngẫu nhiên. Đây có thể là Trang Phục, Gotchi, vé Số hoặc gói đất Realm.

Phần thưởng này có thể do Aavegotchi hoặc GoodGhosting mua trên Baazaar. Với những phần thưởng cộng thêm này, bọn mình mong sẽ mang đến lợi ích cho một ít người chiến thắng thông qua hệ thống xổ số, hoặc /và một phần thưởng nhỏ hơn để phân phối dễ dàng cho tất cả người chiến thắng.

*GoodGhosting có thể mang đến những gì?*

* Hơn 4000 WMATIC được tài trợ (từ quỹ phát triển DeFiForAll). Chia cho tất cả người chơi chiến thắng.
* Nhiều người dùng mới cho hệ sinh thái Aavegotchi. Hiện tại đã có hơn 20500 người tham gia vào pool tiết kiệm Celo và Polygon của bọn mình. Đa số họ đều chưa biết đến Aavegotchi hoặc GHST, và nhiều người có ý định tham gia Gotchigang.
* Bọn mình sẽ tạo một video Youtube để giới thiệu về Aavegotchi, và cách để sở hữu token GHST trên Polygon. Quảng bá đến cho người dùng của bọn mình.
* Bọn mình sẽ cho phép người dùng chơi GoodGhosting với Aavegotchi làm hình đại diện. Cái này sẽ hiện lên trong tab Players, cũng như những trang hồ sơ người chơi cá nhân trên Goodghosting.com
* Một số NFT rất đặt biệt được tạo ra từ Mali3D, họa sĩ của chính dự án
* Điểm GG cộng thêm cho tất cả những người sử dụng thành công

Chi tiết về bản AGIP này có thể được tìm thấy tại [đây](https://dao.aavegotchi.com/t/aavegotchidao-x-goodghosting-collaboration-request/2975/)

Phương án 1: Vâng, thưởng 10k GHST + XP

Phương án 2: Vâng, nhưng điều kiện cần thay đổi

Phương án 3: Không, không hỗ trợ GG

**Thời gian vote:**9 - 15 tháng Hai 2022

**Kết quả:**

table_agip23

[Đường link vote trên Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0xdef7d35ea26832b4edffda176458f86744f402d7db151993ffe34f8122da7113)

<hr />

### Gửi 3 triệu GHST Ngân Quỹ vào Aave
**Aavegotchi Improvement Proposal #24**

**Tóm Tắt Đề Xuất:**

Cùng với Biệt Đội Dao Treasury (DTF), Dr Wagmi đã đề xuất về việc tận dụng ngay lập tức việc niêm yết GHST trên Aave bằng cách gửi 80% GHST từ DAO Treasury (3 triệu GHST) vào Aave dưới dạng tài sản thế chấp để kiếm thu nhập thụ động. Tỷ lệ sử dụng hiện tại đang là 45% với APR là 2,5%. Với khả năng sinh lời và sự phát triển nhanh chóng về cách thức sử dụng token GHST, bọn mình dự đoán được sự phát triển của nhu cầu vay mượn, và do đó, tiền lãi dành cho người gửi GHST và Ngân Quỹ DAO sẽ tăng lên. Aavegotchi DAO có thể thể hiện sự khéo léo, hiệu quả và kho ngân quỹ ấn tượng bằng cách nhanh chóng tận dụng cơ hội tạo thu nhập thụ động này. Điều này sẽ tạo lên tiếng vang mạnh mẽ trong cộng đồng DeFi và crypto rộng lớn và nahnh chóng mang đến thêm giá trị cho người nắm giữ token GHST thông qua sức mượn trong pool của Aave.

Số lượng 3 triệu GHST nạp vào ban đầy sẽ tượng trưng cho 80% ngân quỹ DAO của GHST. Số tiền này hoàn toàn của thể sử dụng bất kỳ lúc nào và rút bất kỳ lúc nào nếu DAO chỉ định ứng dụng khác. APR 3% là gần khoảng 90k USD có thể được dùng để đầu tư nhiều hơn vào hệ sinh thái Aavegotchi thông qua các hoạt động của DAO. Một bản đề xuất riêng về việc thêm 20% và khoảng 2,4 triệu DAI từ ngân quỹ có thể được xem xét. Bọn mình không đề xuất nhận amGHST từ số tiền gửi ban đầu này để stake nhận FRENS. Bản đề xuất này không yêu cầu nắm quyền multi-sign DTF đối với số tiền hoặc quyền quản lý về sau.

Chi tiết về bản AGIP này có thể được tìm thấy tại [đây](https://dao.aavegotchi.com/t/deposit-3-000-000-ghst-from-the-dao-treasury-into-aave/3007)

Phương án 1: Vâng, nạp 3 triệu GHST

Phương án 2: Không, giữ GHST trong Ngân Quỹ

Phương án 3: Phiếu Trắng

**Thời gian vote:**23 - 30 tháng Ba 2022

**Kết quả:**

table_agip24

[Đường link vote trên Snapshot](https://vote.aavegotchi.com/#/proposal/0x2fd1336f439b29a7096478a1d9571acc83597b2b345103fdb35e02125f5a2dcd)

<hr />

### Hoãn Đấu Giá và& Xổ Số Land Gotchiverse 3
**Aavegotchi Improvement Proposal #25**

**Tóm Tắt Đề Xuất:**

Pixelcraft đã cung cấp một lịch tình cho Chương 1 trong Gotchiverse Game Bible với sự kiện Đấu Giá / Xổ Số Land Gotchiverse được đặt lịch tổ chức vào cuối tháng Hai [https://blog.aavegotchi.com/introducing-the-gotchiverse-game-bible/](https://blog.aavegotchi.com/introducing-the-gotchiverse-game-bible/)

Việc này đã được lên lịch để xảy ra trước khi các chương Gotchiverse Game Bible được đăng tải dựa theo bài viết nêu trên. 4 Chương nữa đã được công bố vào tháng Ba và sẽ nhiều bài viết hơn đã được công bố trong những tuần/tháng kế tiếp.

Mình đề xuất dời sự kiện Đấu Giá & Xổ Số Land đến khi Quyển Một của Gotchiverse diễn ra hoặc khi cộng đồng đồng ý tổ chức thêm.

Việc này chủ yếu là để đảm bảo cộng đồng có thể chuẩn bị trước cho số tiền đầu tư/lệnh đấu giá Land và chúng ta có thể giảm thiểu nguy cơ lập lại tình trạng đã xảy ra với những ai đặt giá quá tay và toang.

[Chỉnh Sửa CoreProp: Do Quyển Một sắp được đăng tải trong tương lai gần nhưng vẫn có nhu cầu dành cho sự kiện mở bán REALM, nên chúng mình đã thêm một phương án bỏ phiếu để sự kiện Đấu Giá & Xổ Số sẽ chỉ bắt đầu khi SigProp đặt Túc Số và từng bản CoreProp được thông qua. Việc điều chỉnh này đã được thảo luận trước cùng Jarrod.]

Chi tiết về bản AGIP này có thể được tìm thấy tại [đây](https://dao.aavegotchi.com/t/chapter-1-the-gotchiverse-release-schedule/2939)

Phương án 1: Dời đến khi Quyển 1 được ra mắt xong

Phương án 2: Dời đến khi có Bản Đề Xuất Cộng Đồng

Phương án 3: Bắt Đầu Đấu Giá 3 càng sớm càng tốt

**Thời gian vote:**23 - 30 tháng Mười 2022

**Kết quả:**

table_agip25

[Đường link vote trên Snapshot](https://vote.aavegotchi.com/#/proposal/0xa8ae9fff29189ddf79845a7875ccfc696273aa2fca9fed42140a6bbe55f12b97)

<hr />

### Giảm Biến Số Parcel VRF
**Aavegotchi Improvement Proposal #26**

**Tóm Tắt Đề Xuất:**

*Vấn đề:*

Biến số VRF dành cho Alchemica bên dưới lòng đất (trung bình 0.2 - 1.8) vẫn có vẻ cao và có thể khiến nhiều người toang - hãy xem biểu đồ được đăng trong bài viết trên Discord.

Chủ sở hữu của một mảnh đất spacious có thể nhận được ít alchemica hơn một người chủ của mảnh đất reasonable may mắn - đó là lý do tại sao mình nghĩ đây là một trải nghiệm người dùng rất tệ, đặc biệt là khi chúng mình đã được báo trước là việc này sẽ không xảy ra. Hãy nhớ rằng vòng đầu tiên (quý) thì Alchemica sẽ được phân bố nhiều hơn thời điểm khác, vậy nên sự hụt hẫn ở vòng đầu có thể khiến ai đó bị tuột lại khá xa.

*Giải pháp*

Mình muốn đề xuất hạ thấp biến số xuống ÍT NHẤT 0.5 - 1.5 nếu thậm chí không phải là 0.75 - 1.25 ở vòng đầu (Lựa chọn 1). Vấn đề của mình với biến số cao là mọi người đã đưa ra quyết định tài chính dựa trên những con số trung bình được đăng tải trước buổi đấu giá đầu tiên, khiến mọi người mất 50-80% giá trị Alchemica nằm bên dưới gói đất là một trải nghiệm người dùng tệ hại đối với mình.

Một phương án khác được đề xuất bởi Mori là tạo ra hệ phân bố nhị thức với khả năng cắt bỏ phần đuôi, vậy nên sẽ có thể thắng lớn nhưng gần như không thể thua tan nát (Phương án 2). Việc này sẽ dẫn đến lượng trung bình 100, nhỏ nhất là 60, và nhiều nhất là 800. Đây là một thay đổi có lý để thắng giải top, với chỉ ~0,02% gói đất có thể đạt được điều này. Ghi chú quan trọng: Phương án này sẽ giảm số trung bình là 100 xuống còn khoảng 83.

Chi tiết về bản AGIP này có thể được tìm thấy tại [đây](https://dao.aavegotchi.com/t/reducing-the-vrf-variance-for-parcels/3069)

Phương án 1: Round 1 0.75 - 1.25 & 0.5 - 1.5

Phương án 2: Phân bố nhị thức

Phương án 3: Không, đừng thay đổi biến số

**Thời gian vote:**23 - 30 tháng Mười 2022

**Kết quả:**

table_agip26

[Đường link vote trên Snapshot](https://vote.aavegotchi.com/#/proposal/0x09c3132896ba5c8e677e018a86ba1a74729955f64799dbfd4e422058f9198817)

<hr />

### Thay Thế Cách Quy Đổi Chỉ Số Trait Gotchiverse
**Aavegotchi Improvement Proposal #27**

**Tóm Tắt Đề Xuất:**

Với sự xuất hiện của hệ quy đổi chỉ số đặc tính Gotchiverse trong Game Bible Chương 2, một cuộc thảo luận đáng chú ý đã bắt đầu về những sự mất cân bằng tiềm ẩn, điểm yếu, và những lĩnh vực đột phát trong hệ quy đổi điểm đặc tính được đề ra ban đầu cho NRG, AGG, SPK & BRN. This CoreProp proposes to change the trait mappings for these 4 traits to:

NRG: HP Capacity (0 NRG) <===> AP Capacity (100 NRG)

AGG: Defense Power (0 AGG) <===> Action Speed (100 AGG)

SPK: HP & AP Regen (0 SPK) <===> Ethereality (100 SPK)

BRN: Melee Power (0 BRN) <===> Ranged Power (100 BRN)

EYS: To Be Confirmed

EYC: To Be Confirmed

Please refer to the DAO forum thread for a full rundown on what these changes mean (including an FAQ section).

Core Effects of the New Trait Map

* Tốc độ di chuyển được xóa khỏi biểu đồ quy đổi sẽ giúp cả thiện trải nghiệm người dùng (UX) dành cho tất cả người chơi mới bắt đầu tham gai Gotchiverse, cả mới và cũ,
* Sức chứa bị gỡ bỏ khỏi bản đồ sẽ sửa chữa lại sự mất cân bằng của 1 chỉ số farm vs 7 chỉ số combat gồm NRG, AGG, SPK và BRN,
* Giờ đây đã có sự khác biệt rõ ràng giữa những gotchi chuyên về sức mạnh vật lý và kỹ năng (pháp sư),
* Hiện đã có sự khác nhau rõ ràng giữa tướng đánh gần và đánh xa,
* Thần lực giờ đây có thể xem như "May mắn" và ảnh hưởng đến khả năng nó tránh, chí mạng, lướt qua tường và tất cả những hành động dựa trên cơ hội trong Gotchiverse.

*End Goal*

For the community and Pixelcraft to build a trait map together that is balanced, has excellent UX, playability and longevity while simultaneously allowing the flexibility to implement wearable buffs and abilities that work with the traits in the future.

*Risks*

There is potential that some players and investors have already purchased gotchis based on the original trait mappings. It is important to note that these traits were always specified as non-immutable in the Game Bible HOWEVER, we strongly believe the new trait maps proposed here will create even moar diverse and entertaining play styles for OG investors and new players alike to experiment with and enjoy playing.

*Final Important Notes*

There are a number of ways these Traits can scale (Yin/Yang linear, asymmetric, buff only starting from 50 and diminishing returns to name a few). The Trait Scaling System is still under review by the community so look forward to further calls with Pixelcraft (to really get into the nitty gritty) and another SigProp! EYS and EYC are still under review by the community. A number of interesting ideas including farming/alchemica/HUD abilities have been proposed. Make sure you get involved and have your say on how you’d like to see these evolve too!

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/alternative-gotchiverse-trait-mapping-for-nrg-agg-spk-brn/3135)

Option 1: Yes, use the new Trait Map

Option 2: No, stick with the original

**Thời gian vote:**23 - 30 tháng Mười 2022

**Kết quả:**

table_agip27

[Đường link vote trên Snapshot](https://vote.aavegotchi.com/#/proposal/0xbe4999b68f97f0e3406d65aff4e36a97768af72eb5cbd16c92641dcfdd6f35c9)

<hr />

### Mở rộng Ví Multisign Biệt Đội Ngân Quỹ DAO
**Aavegotchi Improvement Proposal #28**

**Tóm Tắt Đề Xuất:**

Hi frens, in Chapter 2 we proposed that 10% of the Gotchus Alchemica supply be vested over 30 years to be used for Ecosystem purposes. The primary goal of this allocation is to ensure excellent long-term liquidity across many platforms, including the GAX, various DEXes on Polygon, Mainnet, and even CEXes.

Those who follow the project carefully know that we always try to do everything “by the book”, to make Aavegotchi a model case study for decentralization and legal compliance. We are currently in the final stages of setting up a new legal wrapper for AavegotchiDAO (more specifically, a Panama Foundation) and will soon be making an announcement for applications to serve.

On the technical side, we are also working to implement onchain governance of the Aavegotchi protocol. However, this will take some time, as it requires upgrades to the deployed GHST token on Polygon.

While all of this is happening in the background, we are also launching FIVE new ERC20 Alchemica tokens and locking a sizable amount of them into vesting contracts.

For both legal and strategic reasons, we believe that the Ecosystem allocation should not be managed by Pixelcraft, but instead by AavegotchiDAO. The DAO Treasury Force has already been created to manage some of the DAO treasury, but the number of signers is quite few (six) and in my opinion insufficient to hold such a sum of funds.

Therefore, I propose we create an additional multisig under the current DTF, with fifteen signers instead of the current six. **Eleven** out of fifteen signatures would be required to confirm transactions.

This multisig would be the beneficiary of the Ecosystem Vesting Contract (which holds 10% of each Alchemica’s token supply, vested over 30 years), and could also inherit the 1M GHST originally allocated during the GHST creation for Ecosystem building, to help bootstrap Alchemica liquidity.

On our side, we will deploy the Alchemica and create initial liquidity pools on Quickswap, after which we will transfer ownership of the vesting contract to the multisig. After that point, it will be up to the DTF to coordinate liquidity provision.

Let’s goooo Gotchigang!

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/dao-treasury-task-force-extension-thread/3119)

[Final note: You can vote for multiple members at once, the top 9 choices will then get elected! Short pitches for everyone can be found in the discussion thread]

Option 1: Kokusho

Option 2: MGG

Option 3: Choyna

Option 4: Pgendreau

Option 5: Diddlypoo

Option 6: Tburd.eth

Option 7: Jarrod

Option 8: MarvinP

Option 9: Notorious_BTC

Option 10: Hardkor

Option 11: Yanik

Option 12: Master_Yin

Option 13: Nestor

Option 14: Chichi

**Thời gian vote:**23 - 30 tháng Mười 2022

**Kết quả:**

table_agip28

[Đường link vote trên Snapshot](https://vote.aavegotchi.com/#/proposal/0x8b5862698c550b53e57f6ce4628a7a13ed5a4772e541c414e9a27fbcf95cf8c2)

<hr />

### Các marketplace (thị trường trao đổi) dành cho Aavegotchi
**Vote bằng Snapshot**

**Proposal Summary:** What should the Aavegotchi NFT Marketplace be called?

Aavegotchi is launching its own NFT marketplace on Polygon in tandem with the game!

What should we call the official Aavegotchi Marketplace?

Choice A: Aavegotchi Baazaar

Choice B: Aavegotchi Maarket

Choice C: Neither

The quorum for this vote is set to 500,000 GHST. If quorum is not reached, Pixelcraft will draw straws.

If "Neither" wins...you guys better start coming up with some good alternatives!

**Voting Period:** 8 - 11 February 2021

**Kết quả:**

table_marketplaceName

[Đường link vote trên Snapshot](https://snapshot.page/#/aavegotchi.eth/proposal/QmRiRaQuwLuNr88yxvX61vtKM56NrY3KaMk4bk6w7g47fy)

<hr />

### Khả năng nhận FRENS khi stake token LP của GHST-USDC

**Vote bằng Snapshot**

**Proposal Summary:** Should GHST-USDC LP token be eligible to earn FRENS?

Our liquidity migration program has been a huge success, with over 8M GHST migrated to Polygon already. However, as many community members have noted, liquidity for the GHST-USDC pair is still not deep enough to support trading large amounts of USDC for GHST on Quickswap.

We believe one way to remedy this is by adding GHST-USDC as a pair eligible for FRENS on [https://aavegotchi.com/stake-polygon](https://aavegotchi.com/stake-polygon). Just like GHST-QUICK has a receipt token stkGHST-QUICK, staked GHST-USDC can also emit a stkGHST-USDC token, which may be eligible for rewards on Quickswap, if their team deems it necessary.

Since this decision directly affects gameplay, we believe it is a ripe candidate for our first Snapshot vote on Polygon.

We are setting a 500,000 GHST quorum for this vote to be enacted.

The GHST-USDC LP token will earn FRENS at the same rate as just staking GHST, since impermanent loss is minimal and fees are significant.

**Voting Period:** 8 - 11 February 2021

**Kết quả:**

table_ghstUsdcLp

[Đường link vote trên Snapshot](https://snapshot.page/#/aavegotchi.eth/proposal/QmUpXPA5JF4ed9GUy5hNUTA7rT7VQjL7QXUTSxbtLQ1RqA)

<hr />

### Số lượng Portal mua được trong mỗi giao dịch

**Vote bằng Snapshot**

**Proposal Summary:** How many Portals can be purchased in one transaction?

Discussion period has ended for this topic, and now it's time to vote! The most popular options were: 1, 5, and 10 Portals per transaction.

Our fren [@coderdannn](/team#coder-dan) also threw a spicy idea into the mix: an "Ape Tax" whereby higher numbers of Portals could be bought in a single transaction, but at a higher price. The Portals would be tiered as so:

* Mua từ 0 đến 5 portal: mỗi Portal sẽ có giá là 100 GHST

* Portal thứ 6 đến portal thứ 15 sẽ có giá là 200 GHST mỗi cái

* Portal thứ 16 đến portal thứ 25 sẽ có giá 300 GHST mỗi cái

So this leaves us with four options: 1, 5, 10, and 25 (w/ ape tax).

Let your $GHST token speak for you, and vote!

Voting period: 72 hrs Minimum quorum: 10% of GHST on Matic (~1.1M GHST)

AavegotchiDAO discussion topic 👇

[https://dao.aavegotchi.com/t/how-many-portals-should-be-bought-in-one-txn/17](https://dao.aavegotchi.com/t/how-many-portals-should-be-bought-in-one-txn/17)

**Voting Period:** 23 - 26 February 2021

**Kết quả:**

table_portalsPurchased

[Đường link vote trên Snapshot](https://snapshot.page/#/aavegotchi.eth/proposal/QmUhKcn5YjKAPeGA1SfKQkNfw3P3hGRPgSGnTJGsfzw4Xi)