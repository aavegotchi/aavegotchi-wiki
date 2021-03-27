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

Yes: 2540143.23957 GHST

No: 601.83249 GHST

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

Yes: 3726567.25851 GHST

No: 108143.33932 GHST

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

Yes: 3836093.44669 GHST

No: 33683.04753 GHST

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

25k portal, mỗi cái giá 100 GHST, mỗi giao dịch mua được 5 cái (với thuế ape tax rất gắt): 3540000 GHST (54,25%)

Không tổ chức thêm, sẽ bình chọn lại trong vòng 1 tháng nữa: 2510000 GHST (38,46%)

10k Portal, mỗi cái giá 100 GHST, mỗi giao dịch được quyền mua 1 cái: 377550 GHST (5,78%)

Phương án pre-sale: 98410 GHST (1,51%)

**Cách biệt trong số phiếu không đủ độ đồng thuận. Haunt 2 sẽ không được tổ chức vào thời điểm này!**

[Đường link vote trên Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmNqRry73rWXb9tdyHummihcK58ga83Ru15AJRF3beFJ35)

<hr />

### Tặng background độc quyền cho những Aavegotchi từ Haunt 1 (không chuyển sang ví khác được)
**Aavegotchi Improvement Proposal #5**

**Tóm tắt Bản Đề Xuất:**Nhiều người chơi lo rằng sự kiện Haunt 2 sẽ tương tự như Haunt 1 và những Haunt mới tạo ra sau này sẽ làm giảm giá trị của sự kiện Haunt "Nguyên thuỷ". Một trong những ý tưởng được đưa ra là mỗi Haunt sẽ nhận được một ảnh nền đặc biệt để dễ dàng phân biệt. Bản đề xuất này đã được bàn luận rất sôi nổi và được đồng tình nhiệt liệt trên Snapshot. Các bạn hãy lưu ý rằng dù cho quyết định của DAO là gì đi nữa thì tất cả các Aavegotchi đều sẽ nhận được những huy hiệu "Haunt" giúp phân biệt xem chúng được sinh ra từ sự kiện Haunt số mấy. Bản đề xuất này đặc biệt tập trung vào đề xuất tặng ảnh nền cho các Aavegotchi để chúng có thể trang bị vào ô trang phục BG và những ảnh nền này không thể chuyển sang Aavegotchi khác được.

Chi tiết về bản AGIP này có thể được tìm thấy tại [đây](https://aavegotchi.medium.com/vote-when-haunt-2-making-haunts-more-unique-d975cbda4772).

Phương án 1: Chỉ Haunt 1 mới nên được tặng ảnh nền đặc biệt

Phương án 2: Mỗi sự kiện Haunt sẽ nhận được một ảnh nền riêng

Phương án 3: Giữ nguyên như hiện tại

**Thời gian vote:**17 - 24 tháng Mười 2021

**Kết quả:**

Chỉ Haunt 1 mới được nhận ảnh nền đặc biệt: 3670000 GHST (63.09%)

Mỗi sự kiện Haunt sẽ nhận được một ảnh nền riêng: 2010000 GHST (34,53%)

Giữ nguyên như cũ: 138240 GHST (2,37%)

[Đường link vote trên Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmfBrnUmfsX57vXWchr1mUNkqMWNeF6edEqdQq11MCvMHJ)

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

Aavegotchi Baazaar: 973380 GHST

Aavegotchi Maarket: 683420 GHST

Không chọn bất cứ phương án nào: 150380 GHST

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

Yes: 2560000

No: 354030

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

25 portal mỗi giao dịch (kèm phí Ape Tax): 1500000

5 portal mỗi giao dịch: 921830

10 portal mỗi giao dịch: 201760

1 portal mỗi giao dịch: 169000

[Đường link vote trên Snapshot](https://snapshot.page/#/aavegotchi.eth/proposal/QmUhKcn5YjKAPeGA1SfKQkNfw3P3hGRPgSGnTJGsfzw4Xi)