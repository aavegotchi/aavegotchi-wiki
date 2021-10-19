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
<li><a href=#name-of-aavegotchi-marketplace>Đặt tên cho cho Chợ Trao Đổi Vật Phẩm Aavegotchi</a></li>
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

**Thời gian vote:**11 - 17 tháng Năm 2021

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

**Thời gian vote:**11 - 17 tháng Năm 2021

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

Chi tiết về bản AGIP này có thể được tìm thấy tại [đây](https://aavegotchi.medium.com/agip13-should-aavegotchi-introduce-an-aging-boost-5ee12e8c9f0)

Phương án 1: Vâng, tích hợp cơ chế trưởng thành

Phương án 2: Không, đừng tích hợp lúc này

**Thời gian vote:**2 - 9 tháng Mười 2021

[Đường link vote trên Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmcAQLdAyS9n7LWDu9qvRtdNqJa7FBStadrHq3xqjW9kCT)

<hr />

### Đặt tên cho cho Chợ Trao Đổi Vật Phẩm Aavegotchi
**Vote bằng Snapshot**

**Tóm tắt Bản Đề Xuất:** Chợ Trao Đổi NFT của Aavegotchi nên được gọi là gì?

Aavegotchi sẽ khởi chạy khu chợ NFT của riêng mình trên Polygon khi game khởi chạy!

Vậy ta nên gọi khu chợ chính chủ của Aavegotchi là gì nhỉ?

Lựa chọn A: Aavegotchi Baazaar

Lựa chọn B: Aavegotchi Maarket

Lựa chọn C: Không chọn 2 đáp án trên

Số phiếu tối thiểu để bản đề xuất này được thi hành là 500.000 GHST. Nếu không đạt được số phiếu tối thiểu này thì Pixelcraft sẽ chọn.

Nếu lựa chọn C được bầu nhiều nhất thì mấy fen nên chuẩn bị trước đáp án thay thế đi nhá!

**Thời gian vote:**8 - 11 tháng Hai 2021

**Kết quả:**

table_marketplaceName

[Đường link vote trên Snapshot](https://snapshot.page/#/aavegotchi.eth/proposal/QmRiRaQuwLuNr88yxvX61vtKM56NrY3KaMk4bk6w7g47fy)

<hr />

### Khả năng nhận FRENS khi stake token LP của GHST-USDC

**Vote bằng Snapshot**

**Tóm tắt Đề Xuất:** Stake GHST-USDC LP token thì có thể nhận FRENS được hay không?

Chương trình dịch chuyển thanh khoản của bọn mình đang thành công rực rỡ với hơn 8 tr GHST được chuyển đến Polygon. Tuy nhiên, theo ý kiến của nhiều thành viên trong cộng đồng, thanh khoản của cặp GHST-USDC không đủ sau để có thể hỗ trợ swap lượng lớn token USDC thành GHST trên Quickswap.

Bọn mình tin cách để giải quyết vấn đề này chính là thêm GHST-USDC thành một cặp token có thể nhận FRENS trên [https://aavegotchi.com/stake-polygon](https://aavegotchi.com/stake-polygon). Tương tự như khi GHST-QUICK nhận lại token stkGHST-QUICK, GHST-USDC có thể sẽ giúp người dùng nhận lại token stkGHST-USDC, để có thể nhận giải thưởng trên Quickswap, nếu team cảm thấy điều này là cần thiết.

Bởi điều này ảnh hưởng trực tiếp đến lối chơi nên bọn mình tin rằng đây chính là ứng cử viên sáng giá cho cuộc bầu chọn Snapshot đầu tiên trên Polygon.

Bọn mình đặt ra giới hạn thi hành tối thiểu là 500.000 GHST.

Token LP cặp GHST-USDC sẽ nhận được lượng FRENS tương tự như khi stake GHST, bởi tổn thất tạm thời khá nhỏ và phí thì lại nhiều.

**Thời gian vote:**8 - 11 tháng Hai 2021

**Kết quả:**

table_ghstUsdcLp

[Đường link vote trên Snapshot](https://snapshot.page/#/aavegotchi.eth/proposal/QmUpXPA5JF4ed9GUy5hNUTA7rT7VQjL7QXUTSxbtLQ1RqA)

<hr />

### Số lượng Portal mua được trong mỗi giao dịch

**Vote bằng Snapshot**

**Tóm tắt Bản Đề Xuất:** Có thể mua được tổng cộng bao nhiêu portal trong mỗi giao dịch?

Giai đoạn thảo luận dành cho chủ đề này đã kết thúc và giờ là lúc để bỏ phiếu! Những lựa chọn được tán thành nhiều nhất là: 1, 5, và 10 Portal cho mỗi giao dịch.

Anh bạn [@coderdannn](/team#coder-dan) của chúng ta cũng đã gợi ra một ý tưởng hết sức là lý tưởng kết hợp các phương án trên: một loại phí "Ape Tax" sẽ được thêm vào và người dùng mua càng nhiều Portal trong một giao dịch thì phí này sẽ càng cao. Giá Portal sẽ có các cấp độ như sau:

* Mua từ 0 đến 5 portal: mỗi Portal sẽ có giá là 100 GHST

* Portal thứ 6 đến portal thứ 15 sẽ có giá là 200 GHST mỗi cái

* Portal thứ 16 đến portal thứ 25 sẽ có giá 300 GHST mỗi cái

Phương án này sẽ mang đến cho ta tổng cộng 4 lựa chọn: mỗi giao dịch sẽ có thể mua 1, 5, 10 hoặc 25 portal (kèm thuế ape tax).

Hãy dùng token $GHST để nói lên quan điểm của mình và bỏ phiếu nào!

Thời gian vote kéo dài 72 tiếng Số phiếu tối thiểu để Phương án đề xuất được thi hành là 10% lượng GHST trên Polygon (khoảng 1tr1 GHST)

Chủ đề thảo luận của AavegotchiDAO 👇

[https://dao.aavegotchi.com/t/how-many-portals-should-be-bought-in-one-txn/17](https://dao.aavegotchi.com/t/how-many-portals-should-be-bought-in-one-txn/17)

**Thời gian vote:**23 - 26 tháng Hai 2021

**Kết quả:**

table_portalsPurchased

[Đường link vote trên Snapshot](https://snapshot.page/#/aavegotchi.eth/proposal/QmUhKcn5YjKAPeGA1SfKQkNfw3P3hGRPgSGnTJGsfzw4Xi)