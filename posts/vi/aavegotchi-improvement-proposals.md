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
<li><a href=#providing-ghst-liquidity-on-synfutures>Providing GHST Liquidity on SynFutures</a></li>
<li><a href=#creating-the-dao-treasury-taask-force>Creating the DAO Treasury Taask Force</a></li>
<li><a href=#adding-ghst-to-the-umbria-narni-bridge>Adding GHST to the Umbria Narni Bridge</a></li>
<li><a href=#launch-rarity-farming-szn-3>Launch Rarity Farming SZN 3</a></li>
<li><a href=#co-sponsoring-the-goodghosting-pool>Co-Sponsoring the GoodGhosting Pool</a></li>
<li><a href=#name-of-aavegotchi-marketplace>Name of Aavegotchi Marketplace</a></li>
<li><a href=#eligibility-of-ghst-usdc-lp-tokens-to-earn-frens>Eligibility of GHST-USDC LP tokens to earn FRENS</a></li>
<li><a href=#portals-purchased-in-one-transaction>Portals purchased in one transaction</a></li>
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

Although the Gotchiverse is not yet live, we have identified a few areas that we believe should be adjusted before the game is released, and would like to bring these items to the community’s attention for discussion and a decision on whether or not to enact.

To ensure no single proposed change can revert the entire batch, we originally created six separate snapshot SigProp Proposals. This CoreProp combines the successful SigProps into the first Gotchiverse Patch v0.1!

*Giải pháp:*

Patch 0.1a

As we were finalizing key details such as build costs and harvesting rates for the upcoming Whitepaper, we discovered that one of our key assumptions had undervalued the amount of Alchemica in each parcel relative to total supply. The patch will increase the amount of Alchemica under each parcel to match our initial Alchemica tokens’ supplies, allocations, and emissions rates.

The SigProp for Patch 0.1a passed with the following numbers:

Yes: 13.14M GHST

No: 41.85k GHST

Patch 0.1b

Although our original intention was to make boosts one-time only, it is clear that many in the community interpreted the GEO paper to mean that boosts would be replenished. This patch allows boosts to also replenish together with the parcel itself after each Great Battle.

However, unlike parcels, the replenish rate is a fixed amount that is the same per round. For example, a parcel with a “5” FUD boost receives 5 servings of FUD per boost round.

The SigProp for Patch 0.1b also passed pretty convincingly:

Yes: 10.36M GHST

No: 2.37M GHST

Patch 0.1c

Even with Patch 0.1b passed, boosts will still be undervalued compared to the value the market has assigned to them, relative to a similar parcel with no boosts. Patch 0.1c proposed increasing boosts by 5x to bring the value of a boost closer to what the market is currently valuing it at.

The SigProp for Patch 0.1c did not pass and WILL NOT BE INCLUDED in Patch v0.1:

Yes: 5.85M GHST

No: 8.04M GHST

Future SigProps may be created to address this issue separately.

Patch 0.1d

The Gotchiverse Litepaper mentions that Kinship will be exchanged for a serving of Alchemica, essentially “burning” kinship. We certainly want to maintain the idea of a “kinship boost” for channeling but after thinking more deeply, we now believe there is a better way to achieve this.

An “achievements” approach does not require depleting an Aavegotchi’s kinship. Instead, high kinship Aavegotchis will channel Alchemica at a slightly higher rate, depending on their achievement level.

The SigProp for Patch 0.1d also passed:

Yes: 12.64M GHST

No: 431.93k GHST

Patch 0.1e & 0.1f

Districts did not exist as a Citaadel concept when the Litepaper was first published. That said, we have always envisioned an area or areas for Pixelcraft to develop in-depth experiences that add value to the overall game. Likewise, one of our earliest ideas, (predating the Citaadel itself!) was to reserve a town square for real time DAO voting. The idea of having a gamified governance experience was one of the very earliest ideas seeding Aavegotchi’s need for its own virtual world.

Patch 0.1e & 0.1f proposed allocating 1000 parcels each to Pixelcraft and the AavegotchiDAO in D27/D30. Both Patches passed convincingly:

Yes: 11.94M GHST / 12.14M GHST

No: 615.78k GHST / 734.92k GHST

Conclusion

And that’s it for the first Gotchiverse Patch! Now it is up to you, the AavegotchiDAO, to decide if Patch v0.1 should be implemented or not.

Option 1: Yes, implement Patch v0.1

Option 2: No, do not implement Patch v0.1

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/gotchiverse-paatch-v0-1-thread/2791)

Option 1: Yes, implement Patch v0.1

Option 2: No, do not implement Patch v0.1

**Voting Period:** 5 - 12 January 2022

**Kết quả:**

table_agip18

[Đường link vote trên Snapshot](https://vote.aavegotchi.com/#/proposal/0x396844d504394f7f335f070d443c33455300ee21d90db6c4b089760a3e0469bf)

<hr />

### Providing GHST Liquidity on SynFutures
**Aavegotchi Improvement Proposal #19**

**Tóm Tắt Đề Xuất:**

Since Aavegotchi has gathered a lot of liquidity on Spot DEXes, it is high time for Aavegotchi to create and boost its Futures market. Derivatives markets make up the majority of global trading activity and allow users to leverage their investments. Adding GHST liquidity on SynFutures would allow people to take on leverage longs (or shorts) on the future of Aavegotchi. But why SynFutures?

Great investors and team background SynFutures is backed by Polychain, Pantera, Dragonfly, Framework, Standard Crypto, Woo, and more. The team’s background is a great combination of traditional finance and DeFi. SynFutures is the only project of its kind which can support the listing of any assets by anyone in a permissionless manner (in less than 30s).

Security Backed by solid experience from the TradFi financial engineering and DeFi protocol safety, SynFutures has many risk management features (e.g. anti-flashloan attack, EMA smoothing method, etc.) and has gone through external code audits.

Easy to manage and start SynFutures supports a single token model to add liquidity which means the Aavegotchi Treasury would only have to deposit GHST instead of offering two tokens with the risk of impermanent loss. We are asking for 200k worth of GHST tokens to kickstart the pool. The liquidity could be withdrawn anytime.

Growth Potential Trading volume and users are growing fast on SynFutures. For the past 3 months since the SynFutures Alpha launched, we reached 47k users of and $1bn+ in trading volume. All this happened without a native SynFutures token, which could attract even more users.

Volume analysis Quickswap vs. SynFutures: Total LPs: 150k / 40K Total traders: 100k / 20k Daily trading volume: $100M / $29M

SynFutures trading volume makes up ~1/3rd of QuickSwap, and the amount of traders is 1/5th as big as on QuickSwap, however, the trading volume for different pairs is more concentrated. SynFutures has 108 trading pairs while QuickSwap has more than 22k pairs. For example, the daily trading volume of MATIC-USDC on SynFutures closes in on around $9M, while Quickswap reaches $14M.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/provide-ghst-as-liquidity-on-the-derivatives-dex-synfutures/2664)

Option 1: Yes, add $200k in GHST

Option 2: No, do not add $200k in GHST

**Voting Period:** 2 - 9 February 2022

**Kết quả:**

table_agip19

[Đường link vote trên Snapshot](https://vote.aavegotchi.com/#/proposal/0x560e97ce27e9c99470a0a609e36d4c4cd20e948eae92691ea2ba2afb984e7e41)

<hr />

### Creating the DAO Treasury Taask Force
**Aavegotchi Improvement Proposal #20**

**Tóm Tắt Đề Xuất:**

We propose the creation of the DAO Treasury Taask Force (DTF). This committee will initially be composed of 8 members with reassessment of membership by the DAO within 6 months.

As of 12/07/2021, the DAO Treasury (https://aavegotchi.com/treasury) boasts nearly ~$11,408,400 worth of DAI and GHST. In its initial form, the committee will form proposals for consideration by the DAO which will subsequently be voted on and, if passed, enacted.

Proposed Mission Statement

The Aavegotchi DAO Treasury Taask Force is a dynamic committee assigned with making DAO treasury management proposals to the community and DAO for consideration. The initial mission and goals of the committee will be: 1) Grow and optimize the DAO treasury with an emphasis on safety, security and transparency; 2) Partner with Pixelcraft to assist in developing and identifying tools and infrastructure for ongoing DAO Treasury management; and 3) foster and encourage growth of the overall Aavegotchi community by increasing awareness, actively promoting adoption, and maintaining current user engagement.

Initial Funding

After lengthy discussions with the task force, the community, and with coderdan, the DTF would like to request an initial 50,000 GHST budget. The 50,000 GHST budget would be transferred from the DAO Treasury to the 8 multi-signature Gnosis Safe. This budget will greatly expand the flexibility of the DAO in incentivizing and rewarding engaged community members, developers, creatives, and overall contributors. This budget will never be used to reward members of the DTF. The DTF’s core main initiative will be to form a proposal for overall use of the DAO Treasury by investing some of the $10 million DAI/GHST in yield bearing opportunities. With effective deployment of the DAO Treasury, even modest returns would more than pay for the DTF budget request. The DTF will ensure comprehensive accounting and provide community facing documentation to ensure transparency. Some potential uses for the budget include the following:

* Reward community engagement and aarcade play
* Reward game developers and designers
* Reward community application developers
* Reward and acknowledge community art contributions
* Reward, acknowledge and grow content creators and general marketing efforts
* Expand Aavegotchi and GHST’s opportunities for decentralized financial applications

The DTF is developing a structured plan and multiple potential pilot projects to best utilize these funds. We will work to develop tools to allow maximum transparency into the budget use. Expenses within this 50,000 GHST budget would not require a DAO approval in order to maximize nimble use of the funds. Any further budget requests beyond the initial 50,000 GHST would require a DAO vote.

The initial 8 members of the DTF

* BowtiedNerd
* Mori
* letsgobankless
* Addison
* Deucehearts
* BackfireCapital
* Swappi
* Dr Wagmi

We appreciate the Aavegotchi community’s support and look forward to our first proposal.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/establish-the-dao-treasury-taask-force/2460)

Option 1: Yes, with 50k GHST budget

Option 2: Yes, without 50k GHST budget

Option 3: No, do not create the DTF

**Voting Period:** 2 - 9 February 2022

**Kết quả:**

table_agip20

[Đường link vote trên Snapshot](https://vote.aavegotchi.com/#/proposal/0x17f3eec096b26e87b3441f7cad53108f6933fd32ac67417de6ef7c94970502e4)

<hr />

### Adding GHST to the Umbria Narni Bridge
**Aavegotchi Improvement Proposal #21**

**Tóm Tắt Đề Xuất:**

The Umbria Narni Bridge has implemented the GHST token, and is facilitating cheaper migration of GHST between the Ethereum <--> Polygon networks, compared to the official Polygon bridge. The Umbria Narni bridging cost is about 1/2 of the official polygon bridge cost and is also much faster (4 minutes, as opposed to > 1 hour).

The Umbria Narni bridge protocol can bridge a maximum of 20% of its total GHST liquidity, per bridging event. For example, with $100k of GHST tokens in one side of the pool, the bridge can migrate a maximum of $20k of GHST per single transaction.

Currently there is approximately $14,000 of GHST tokens on each side of the bridge. This is mostly funded by the Umbria team. This enables the bridge to be able to bridge a maximum of $700 of GHST tokens per transaction - which is pretty good, but we are aware that some users want to bridge much more in a single transaction.

We propose the Aavegotchi DAO add $100,000 of GHST to each bridge pool (1. Polygon and 2. Ethereum). There are a few advantages for doing so:

The Aavegotchi DAO will earn a 0.2% bridging fee whenever anyone uses the bridge to migrate GHST tokens between Ethereum <--> Polygon. So across time, the Aavegotchi DAO will make money. If the Narni bridge ever becomes an unnecessary solution, the Aavegotchi DAO can easily remove their liquidity and enjoy their profit.

Transactions up to approximately $21,000 of GHST will now be possible.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/add-ghst-stake-to-the-umbria-narni-bridge/2836)

Option 1: Yes, add $200k GHST

Option 2: No, do not add any GHST

**Voting Period:** 8 - 15 February 2022

**Kết quả:**

[Đường link vote trên Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0xeaac981066e143c46c7a616d2e6ff004d7d4d354005e077f01e3698041e4780a)

<hr />

### Launch Rarity Farming SZN 3
**Aavegotchi Improvement Proposal #22**

**Tóm Tắt Đề Xuất:**

*Vấn đề*

Currently, Rarity Farming Seasons happen sporadically and are difficult to account for in the cadence of Aavegotchi releases. It leaves investors wondering if they should hold onto their Gotchis and Wearables, or if they might find better ROI flipping into the next rounds. It would be desirable to have a bit of certainty / predictability for both investor sentiment and for planning purposes.

*Giải pháp*

If possible funding-wise, Rarity Farming should happen three times a year. It would fit in with the seasonal nature we are already following, and if properly planned could be sustainable based on GBM Sales in-between seasons, Treasury revenue via staking and partnerships (such as the Umbra Bridge proposal), and other streams of revenue such as DAO Grants. The author of this proposal believes Rarity Farming is an essential part of the Gotchiverse ecosystem, and something to build out and improve upon rather than scrap.

*Phân Phối*

For Season 3, I suggest we go back to the standard reward ratio, as was tried and tested in Rarity Farming Season 1. The rookies of the similarly named rookie board are now all grown up and ready to compete with the big boys. This would mean 70% of payouts go to the BRS leaderboard, 20% to the Kinship leaderboard and 10% to the XP leaderboard.

Based on Forum discussions this would be the final model for SZN3:

* 4 Rounds (2 weeks each)
* 1.5 Million GHST Rewards Pool (1.4m GHST funded already)
* 70% BRS
* 20% Kinship
* 10% XP
* Top 5k Gotchis (20%) → Top 7.5k Gotchis (30%)
* 3 Seasons per Year (approx. schedule below)
* SZN 3: February - March
* SZN 4: June - July
* SZN 5: October - November

Updated Rewards Sheet: [Rarity Farming SZN 3 Distribution Model](https://docs.google.com/spreadsheets/d/1jH6IEJ7Xu_YvblgEPX9UpT-phLelJ5XsmknkaxQOg7A/)

Since there is a ~100k GHST discrepancy between the proposed amount to be distributed and GHST currently in the rewards pool, this proposal includes a funding request for the remaining amount to be taken out of the AavegotchiDAO Treasury.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/season-3-for-q1-2022/2779)

Option 1: Yes, launch RF SZN 3

Option 2: Yes, but different params

Option 3: No, don't launch RF SZN 3

**Voting Period:** 8 - 15 February 2022

**Kết quả:**

[Đường link vote trên Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0x5ffa4d3b8f4c1d744424af5c0f079ebfa286c9aec9c35e898c2c02bee87a0b60)

<hr />

### Co-Sponsoring the GoodGhosting Pool
**Aavegotchi Improvement Proposal #23**

**Tóm Tắt Đề Xuất:**

*What is GoodGhosting?*

GoodGhosting is a no-loss savings game, built on top of Aave. We launched our very first DeFi savings pools on Polygon, during the summer of 2021. So far, we have helped over 7000 users to save over $600k worth of assets on Polygon. All while collecting some nice NFTs and climbing our leaderboard.

The GoodGhosting team believes in a world where saving is rewarding, easy and fun. Yet, traditional saving is none of that. We build decentralized social saving applications that combine game design elements with goal-based saving. We want to help our community to develop better financial habits, and have fun at the same time.

*Potential collaboration*

We want to expose the GoodGhosting community to Aavegotchi, by introducing an Aavegotchi-themed savings pool. This pool will require players to save in GHST tokens, and earn them more GHST on top. We see it as a fun opportunity to cross-pollinate the GoodGhosting and Aavegotchi communities.

Aavegotchi is a one-of-a-kind project we have been keeping a close eye on from the very start. Both as players and as ecosystem residents. In our opinion, it envisions everything that DeFi and Web3 is about 👻

Besides inviting all Aavegotchi users and the DAO itself to participate in the upcoming GHST savings pool, GoodGhosting would like to request the AavegotchiDAO to consider co-sponsoring this pool.

*Our Request*

* A total of 7000 GHST in sponsorship for this savings pool. To be shared between all winning players.
* The ability to reward successful savers with Gotchi XP, or alternatively FRENS. Considering GoodGhosting an extensive mini-game that encourages people to stack more GHST.
* An allocation of Aavegotchi NFTs (worth up to 3000 GHST) to be raffled to random participants and/or to all winners. These could be Wearables, Gotchi’s, Raffle tickets or Realm parcels.

These could either be provided by the AavegotchiDAO, or alternatively purchased by the GoodGhosting team on the Bazaar. For these additional incentives, we hope to provide benefits to a small handful of lucky winners (via a raffle system), and/or a smaller reward that is feasible to be delivered to all winners.

*What can GoodGhosting bring to the table?*

* Up to 4000 WMATIC tokens in sponsorship (from our DeFiForAll grant). To be shared between all winning players.
* An influx of new users into the Aavegotchi ecosystem. So far over 20500 users joined our Celo and Polygon savings pools. Most have not yet been exposed to Aavegotchi or GHST, and many are likely to join the Gotchigang.
* We will create a YouTube video explaining Aavegotchi, and how to obtain the GHST token on Polygon. Directed at our community members.
* We will allow users to play GoodGhosting using their Aavegotchis as avatar. This will show up in the shared ‘Players’ tab, as well as in the individual player profiles on Goodghosting.com
* Some very special NFTs by our in-house artist Mali3D
* An increased GG score for all successful savers

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/aavegotchidao-x-goodghosting-collaboration-request/2975/)

Option 1: Yes, 10k GHST for rewards + XP

Option 2: Yes, but under different terms

Option 3: No, do not support GG

**Voting Period:** 9 - 15 February 2022

**Kết quả:**

[Đường link vote trên Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0xdef7d35ea26832b4edffda176458f86744f402d7db151993ffe34f8122da7113)

<hr />

### Name of Aavegotchi Marketplace
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

### Eligibility of GHST-USDC LP tokens to earn FRENS

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

### Portals purchased in one transaction

**Vote bằng Snapshot**

**Proposal Summary:** How many Portals can be purchased in one transaction?

Discussion period has ended for this topic, and now it's time to vote! The most popular options were: 1, 5, and 10 Portals per transaction.

Our fren [@coderdannn](/team#coder-dan) also threw a spicy idea into the mix: an "Ape Tax" whereby higher numbers of Portals could be bought in a single transaction, but at a higher price. The Portals would be tiered as so:

* 0-5: 100 GHST each

* 6-15: 200 GHST each

* 16-25: 300 GHST each

So this leaves us with four options: 1, 5, 10, and 25 (w/ ape tax).

Let your $GHST token speak for you, and vote!

Voting period: 72 hrs Minimum quorum: 10% of GHST on Matic (~1.1M GHST)

AavegotchiDAO discussion topic 👇

[https://dao.aavegotchi.com/t/how-many-portals-should-be-bought-in-one-txn/17](https://dao.aavegotchi.com/t/how-many-portals-should-be-bought-in-one-txn/17)

**Voting Period:** 23 - 26 February 2021

**Kết quả:**

table_portalsPurchased

[Đường link vote trên Snapshot](https://snapshot.page/#/aavegotchi.eth/proposal/QmUhKcn5YjKAPeGA1SfKQkNfw3P3hGRPgSGnTJGsfzw4Xi)