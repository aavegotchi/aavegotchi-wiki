---
author: Coder Dan
date: '2020-04-23T07:00:00.000Z'
title: 'AavegotchiDAO'
description: 'Tất tần tật về Portal trong Aavegotchi'
image: "icons/dao.svg"
contributors:
  - "vanilladelphia"
  - "cinnabarhorse"
  - "hackingmoneyph"
---

<div class="headerImageContainer">
<img class="headerImage" src="/dao/dao.png">
<p class="headerImageText">Sức Sống của AagotchiDAO</p>
</div>

[DAO](glossary#dao) là một dạng quản trị phi tập trung, cho phép người dùng token vote để có thể định hình các quyết định của tổ chức.

Aavegotchi nối gót những giao thức DeFi thành công như Compound và Synthetix bằng tiến trình "phân tán từng bậc", bắt đầu với team sáng lập, Pixelcraft Studios, những người đã tổ chức sự kiện phân bổ token được quản trị bởi DAO (DAICO) và đạt đỉnh điểm khi quyền quản trị trò chơi Aavegotchi, bao gồm tất cả các cơ chế, hợp đồng thông minh, và ngân quỹ, được trao lại dưới sự bảo hộ của AavegotchiDAO, nhưng phải luôn tuân theo luật chơi. Điều này sẽ được hoàn thành trong ba giai đoạn.

<div class="contentsBox">

**Nội dung**

<ol>
<li><a href=#genesis>Genesis</a></li>
<li><a href=#metamorphosis>Metamorphosis</a></li>
<li><a href=#oasis>Oasis</a></li>
<li><a href=#participating-in-governance>Tham Gia Quản Trị</a></li>
<li><a href=#voting>Bỏ phiếu</a></li>
<li><a href=#aavegotchi-improvement-proposals--agips->Aavegotchi Improvement Proposals (AGIPs)</a></li>
<li><a href=#treasury>Treasury</a></li>
</ol>

</div>

## Genesis

*Xem* [DAICO](https://wiki.aavegotchi.com/curve/#aavegotchi-daico).

Vòng lặp đầu tiên của AavegotchiDAO đã được triển khai cùng lúc với sự kiện phân bổ của token GHST. Người nắm giữ GHST có quyền vote để tăng/giảm lượng tài sản được phân bổ thông qua cơ chế tap (quỹ dành cho nhà phát triển) của quỹ dự trữ token bonding curve (TBC) dành cho Pixelcraft Studios (team đằng sau Aavegotchi) để hỗ trợ phát triển dự án. Đề nghị AavegotchiDAO đầu tiên về việc tăng giới lượng tap của Aavegotchi DAICO từ 50.000 DAI lên thành 100.000 DAI mỗi tháng đã vượt quá 99% phiếu tán thành vào ngày 18 tháng Mười năm 2020. Khi đã đến lúc để chuyển đến giai đoạn AavegotchiDAO Metamorphosis, người nắm giữ token cũng sẽ vote để việc dịch chuyển được diễn ra.

Người nắm giữ token sẽ không nhận được phần thưởng ở dạng GHST vì đã chủ động tham gia vào vòng lặp này của AavegotchiDAO.

## Metamorphosis

Metamorphosis là vòng lặp thứ 2 của AavegotchiDAO, và giữ vai trò quản trị những cơ chế game đơn giản của Aavegotchi, ví dụ như tổng cung của Aavegotchis, bổ sung những loại tài sản ký quỹ mới, quyết định đối với những tính năng, và thêm vào những trang bị được tạo ra bởi cộng đồng. Khi đến lúc phải chuyển sang AavegotchiDAO Oasis, AavegotchiDAO sẽ vote lần nữa để việc chuyển đổi được tiến hành.

Xem danh sách đầy đủ của các hành động có thể được tiến hành bởi AavegotchiDAO trong giai đoạn này tại mục [Governance](https://docs.aavegotchi.com/overview/governance) trong tài liệu hợp đồng thông minh của Aavegotchi.

Người nắm giữ token sẽ nhận được phần thưởng khi chủ động tham gia vào giai đoạn này của AavegotchiDAO.

## Oasis

Dù AavegotchiDAO OASIS là vòng lặp cuối cùng trong quá trình tiến hoá của AavegotchiDAO, nhưng đây mới chính là thời điểm mà Aavegotchi được công nhận là một trò chơi được quản trị bởi DAO. Tất cả những quyết định liên quan đến những chế của game, những cơ chế của REALM, việc chi tiêu của hệ sinh thái, và thậm chí là những nâng cấp trong hợp đồng thông minh sẽ được tiến hành vote thông qua AavegotchiDAO.

Người nắm giữ token sẽ nhận được phần thưởng ở dạng GHST khi chủ động tham gia vào vòng lặp này của AavegotchiDAO.

## Tham Gia Quản Trị
Mơ hồ ghê á! Ủa vậy sao tui tham gia vào AavegotchiDAO được bồ? Bạn êi, bọn mình lo hết! [Aavegotchi Docs](https://docs.aavegotchi.com/overview/governance) liệt kê chi tiết danh sách các hàm liên quan đến DAO mà thành viên có thể gọi/dùng để thực hiện những thay đổi đã được vote. Giả dụ như asUSD được vote để trở thành một [loại tài sản ký gửi ](/posts/atokens)đi. Aavegotchi sẽ có thể triển khai thay đổi này bằng cách sử dụng hàm `addCollateralTypes()` và chỉ định asUSD sẽ nằm trong hàm đó.

Nhiều thông tin chi tiết sẽ được công bố một khi trò chơi được triển khai!

## Bỏ phiếu

Có hai cách để bình chọn: (1) Bình chọn bằng Snapshot, và/hoặc (2) Argagon.


### Vote bằng Snapshot

Snapshot là một DApp phục vụ voting trên Ethereum. Những lá phiếu được tạo ra trên Snapshot không hề yêu cầu phải trả phí gas và không nằm trên blockchain. Trang Snapshot của Aavegotchi có thể được tìm thấy tại [đây](https://snapshot.page/#/aavegotchi.eth).

Để có thể vote trên Snapshot, hãy làm theo các bước sau đây:

1). Vào một bản đề xuất đang được mở.

2). Kết nối ví.

<img class = "bodyImage" src = "/dao/snapshot1.jpg" alt = "Snapshot Voting Ethereum" />
<img class = "bodyImage" src = "/dao/snapshot2.jpg" alt = "Snapshot Voting Ethereum" />

3). Bỏ phiếu cho một phương án, và nhấp "Vote" Một pop-up sẽ hiện lên để bạn có thể xác nhận lựa chọn của mình.

<img class = "bodyImage" src = "/dao/snapshot3.jpg" alt = "Snapshot Voting Ethereum" />
<img class = "bodyImage" src = "/dao/snapshot4.jpg" alt = "Snapshot Voting Ethereum" />

4). Metmask của bạn sẽ hiện pop-up lên. Ký vào giao dịch, và bạn đã hoàn tất!

<img class = "bodyImage" src = "/dao/snapshot5.jpg" alt = "kí vào giao dịch trên Snapshot Voting" />

### Vote bằng Aragon

Aragon là một công cụ để tạo và tham gia vào những tổ chức phân tán của Ethereum. Những lá phiếu được đưa ra trên Aragon yêu cầu trả phí gas và tồn tại trên blockchain.

Có thể xem trang Aragon của Aavegotchi tại đây[here](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/).

Để có thể vote trên Snapshot, hãy làm theo các bước sau đây:

1). Vào một bản đề xuất đang được mở.

2). Kết nối ví.

<img class = "bodyImage" src = "/dao/aragon1.jpg" alt = "Snapshot Voting Ethereum" />

3). Bình chọn "Yes" hoặc "No."

<img class = "bodyImage" src = "/dao/aragon2.jpg" alt = "Snapshot Voting Ethereum" />

4). Một giao dịch sẽ hiện lên thông qua pop-up của MetaMask. Hãy lưu ý rằng giao dịch của bạn cần phải được đào thì mới được xác nhận, vậy nên nãy tham khảo trang [gasnow](https://gasnow.org/) để nắm được giá gas mới nhất hiện nay.

5). Một khi giao dịch của bạn đã được đào xong, lá phiếu của bạn sẽ được phản ánh ngay sau đó.


<img class = "bodyImage" src = "/dao/aragon3.jpg" alt = "Snapshot Voting Ethereum" />

## Aavegotchi Improvement Proposals (AGIPs)

Vậy những lá phiếu này là từ Aragon hở? Chúng là Aavegotchi Improvement Proposals (AGIPs)!

Truy cập vào trang [Aavegotchi Improvement Proposals](/aavegotchi-improvement-proposals) để cập nhận danh sách lịch sử bầu chọn. Nếu cậu muốn được biết về những bản đề xuất trong tương lai, hãy theo dõi [những trang mạng xã hội của Aavegotchi](/socialmedia).

## Treasury

AavegotchiDAO earns 0.3% of all trades on the Aavegotchi [Bonding Curve](/curve) on Ethereum Mainnet. This is the current source of all DAO funds.

As responsible stewards, members of AavegotchiDAO will play a role in determining how these funds are to be allocated.

The AavegotchiDAO treasury is located [here](https://aavegotchi.com/treasury).