---
author: Unintelligent Nerd
date: '2020-04-23T07:00:00.000Z'
title: 'Bonding Curve'
description: 'The Aavegotchi Bonding Curve'
image: "curve/bonding-curve.png"
contributors:
  - "unintelligent-nerd"
---


<div class="headerImageContainer">
<img class="headerImage" src="/curve/bonding-curve.png">
<p class="headerImageText">Bonding Curve</p>
</div>

Token Bonding curve (TBC) là một vòng cung toán học cho thấy mối quan hệ giữa giá và lượng cung của token.

Trong một TBC điển hình, giá sẽ tăng khi lượng cung của token tăng lên, và giảm khi lượng cung giảm. Do Aavegotchi, Bonding Curve được triển khai thông qua [Decentralized Autonomous Initial Coin Offering (DAICO)](/glossary#daico) của
Aragon</0> nên bài viết này cũng sẽ bàn luận về các DAICO.</p>

<div class="contentsBox">

**Nội dung**

<ol>
<li><a href=#mechanics>Cơ chế</a></li>
<li><a href=#aavegotchi-bonding-curve>Aavegotchi Bonding Curve</a></li>
<li><a href=#aavegotchi-daico>Aavegotchi DAICO</a></li>
<li><a href=#aavegotchi-token-supply-dynamics>Những Động Lực Trong Lượng Cung Token của Aavegotchi</a></li>
<li><a href=#learn-more>Learn More</a></li>
</ol>

</div>

## Cơ chế



### Đúc/Đốt theo nhu cầu

Bonding Curves sử dụng một thuật toán giá để làm việc như ứng dụng tạo thị trường tự động và cung cấp một nguồn thanh khoản vô tận. Người dùng có thể tương tác với bonding curve bằng cách stake các token và trong quỹ dự trữ của bonding curve. Khi họ làm như vậy, bonding curve sẽ đúc ra các token để trả lại cho người dùng dựa trên thuật toán giá. Những token vừa đựa đúc có thể có những ứng dụng đặc thù và thậm chí là được giao dịch bởi người dùng những luôn có thể trao đổi lại thông qua bonding curve dành cho các token ở trong quỹ dự trữ của bonding curve.

Khi một token được mua thông qua TBC, mỗi người mua sau sẽ phải trả giá cao hơn một chút cho mỗi token, tạo ra nhiều tiềm năng lợi nhuận cho những người đầu tư từ sớm. Khi nhiều người biết về dự án hơn và việc mua hàng tiếp diễn, giá trị của mỗi token sẽ tăng dần với bonding curve. Những nhà đầu tư sớm tìm ra dự án ở giai đoạn đầu, mua token từ bonding curve, và sau đó bán lại token để có lợi nhuận trong tương lại.



### Công thức

Bonding curve khác nhau về hình dạng và kích thước. Với những dự án Aavegotchi, team phát triển đã ứng dựng Công thức của Bancor:

<img style = "border: 1px solid; margin-bottom: 15px" src = "/curve/reserve-ratio.png" alt = "token bonding curve" width = "750" />



### Giải thích công thức

**Quỹ dự trữ Token** chính là những token mà người dùng stake trong bonding curve.

** Continuous Token** được hiểu là token nhận được từ bonding curve dựa trên việc stake Reserve Token.

Trong trường hợp của Aavegotchi, Reserve và Continuous Token lần lượt là DAI và GHST. 

**Connecting Weight** (cũng được hiểu là Reserve Ratio) đại diện cho một tỷ lệ cố định (giữa 0 và 100%) giữa tổng giá trị của Continuous Token (tổng lượng cung x đơn vị giá) và giá trị số dư của Reserve Token.  CW là một hằng số có được từ Công thức của Bancor bởi số dư của Reserve Token và tổng giá trị của Continuous Token (hay còn gọi là 'vốn hoá thị trường') luôn dao động với những lệnh mua và lệnh bán.

Mỗi lệnh mua hoặc bán Continuous Token (GHST) sẽ khiến lượng Reserve Token (DAI) tăng hoặc giảm. Giá của Reserve Token sau đó phải được tính lại liên tục để duy trì Connecting Weight đã được cấu hình giữa chúng.

Connecting Weight cho thấy giá của Continuous Token cần được điều chỉnh rõ rệt như thế nào để có thể cân đối mỗi giao dịch, hay nói cách khác, là độ nhạy cảm về giá. 

Tỷ lệ dự trữ cao hơn giữa số dư của Reserve Token và Continuous Token sẽ khiến độ nhạy cảm giá thấp đi, nghĩa là mỗi lệnh mua bán sẽ có ít hiệu ứng tương xứng trên đường đi giá các Token Continuous hơn. Ngược lại, tỷ lệ thấp hơn giữa số dư Reserve Token và Continuous Token sẽ khiến cho độ nhạy cảm về giá cao hơn, nghĩa là mỗi lệnh mua bán sẽ có ít hiệu ứng tương xứng với đường đi của giá các Token Continuous hơn.

**Tỷ lệ Dự Trữ của Aavegotchi là 33% đấy mấy fen!** Nghĩa là fen không cần phải sợ mấy anh cá voi đâu nhé. Họ không thể nào pump rồi dump GHST bởi bonding curve được bảo vệ trước những giao dịch siêuuuuu khủng!

Nếu bạn muốn thấy tận mắt cơ chế này, hãy xem qua mô hình tương tác của bonding curve mà Coderdan đã làm [tại đây](https://observablehq.com/@cinnabarhorse/aavegotchi-bonding-curve).

THE CURVE NÉ VỜ ĐAI!



## Aavegotchi Bonding Curve

Aavegotchi Bonding Curve đã được tạo ra vào ngày 14 Tháng Chín năm 2020 thông qua một hợp đồng bonding curve thông minh được vận hành bởi [Aragon Fundraising](https://fundraising.aragon.black/). Sau khi kết thúc đợ presale với khoảng 500.000 GHST, thì bonding curve này đã được mở ra ngay lập tức. Bonding curve có kích thước vô tận, có thời gian vô hạn, và chào bán với giá ban đầu là 0.2 DAI mõi GHST. Connecting weight của nó là 33%.

Bạn cần phải hoàn thành thủ tục KYC để có thể mua/bán trực tiếp từ đường cong này. Tuân thủ pháp luật quan trọng lắm mấy bồ ơi - chúng ta sống trong một xã hội, và ta cũng không muốn dự án bị rút ruột bởi chính phủ. Lệnh mua thông qua bonding cure phải được thực hiện bằng DAI. Ngược lại cũng được, bạn có thể bán GHST lại cho bonding curve để lấy DAI, nhưng sao bạn lại làm thế cơ chứ? :( :( :(

Nếu bạn không thể thực hiện KYC với quốc tịch của mình thì cũng đừng lo! **Bạn vẫn có thể tương tác với mọi phần của Aavegotchi metaverse.** Bọn có thể chỉ đơn giản là mua lại GHST từ một DEX ví dụ như Uniswap hoặc Balancer, hoặc một CEX như OKex chẳng hạn. Xem thêm về cách sở hữu GHST [tại đây](/ghst#get-ghst).



## Aavegotchi DAICO

Decentralized Autonomous Initial Coin Offering (DAICO) là một hình thức gây quỹ mới với mong muốn kết hợp những đặc tính nổi trội nhất của Decentralized Autonomous Organization (DAO) với Initial Coin Offering (ICO) để tạo ra một cấu trúc để có thể mang đến một mô hình mở bán token gây vốn với độ hiệu quả cao hơn. DAICO là một mô hình mà trong đó các nhà đầu tư có quyền quyết định đối với ngân quỹ đã nhận được khi quá trình gọi vốn kết thúc. Các nhà đầu tư có sức ảnh hưởng đối với cách thức và mức độ mà những nhà phát triển dự án sử dụng ngân quỹ, thông qua cơ chế "tap". Thêm vào đó, các nhà đầu tư cũng có thể vote cho dự án biến mất và lấy lại tiền của mình.

Dự án Aavegotchi đã triển khai một bonding curve thông qua một sự kiện DAICO trên Aragon.

**Đây mới gọi là SAFU này. Không. Được. Loại. Bỏ. Bonding. Curve.** Nó ngăn không để những nhà đầu tư bị cuỗm vốn bởi họ có quyền hành tối thượng với số tiền nằm trong DAICO/Bonding curve!

Vòng lặp đầu tiên của [AavegotchiDAO](/dao) đã được triển khai cùng lúc với sự phân bổ GHST trong bonding curve. Người nắm giữ GHST có quyền vote để tăng/giảm lượng tài sản được phân bổ thông qua cơ chế tap (quỹ dành cho nhà phát triển) của quỹ dự trữ token bonding curve (TBC) dành cho Pixelcraft Studios (team đằng sau Aavegotchi) để hỗ trợ phát triển dự án. Đề nghị AavegotchiDAO đầu tiên về việc tăng giới lượng tap của Aavegotchi DAICO từ 50.000 DAI lên thành 100.000 DAI mỗi tháng đã vượt quá 99% phiếu tán thành vào ngày 18 tháng Mười năm 2020.



## Những Động Lực Trong Lượng Cung Token của Aavegotchi

Sau khi đã bàn luận về bonding curve/DAICO ở phía trên, chúng ta đã học được rằng tổng lượng cung của token GHST là một động lực. Khi các nhà đầu tư dùng DAI để mua GHST từ bonding curve, những token GHST được đúc và tổng lượng cung được phát hành của GHST sẽ tăng lên. Khi token GHST được bán lại vào trong bonding curve, token GHST sẽ bị đốt, người bán sẽ nhận lại được lượng DAI tương ứng dựa trên giá GHST thể hiện trên bonding curve, và nguồn cung của token GHST sẽ giảm xuống.

Tình trạng lạm phát của token GHST những lệnh mua hàng tịnh trên bonding curve tương quan tích cực với giá của GHST. **Bonding curve đang được lập trình toán học để khiến giá của GHST tăng lên khi lượng cung của GHST tăng lên.**



## Learn More

* Đọc nhèo hơn tại [Aragon Fundraising and bonding curves!](https://fundraising.aragon.black/components/bonding-curve)

* Đọc thêm tại [Bonding Curves Explained](https://yos.io/2018/11/10/bonding-curves/)

* Bài viết [Bonding Curves](https://defiprime.com/bonding-curve-explained) trên DeFi Prime.

* Bài viết về [DAICO](https://cointelegraph.com/explained/what-is-a-daico-explained) trên the Coin Telegraph.