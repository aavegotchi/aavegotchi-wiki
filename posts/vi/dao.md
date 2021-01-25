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
<li><a href=#aavegotchi-improvement-proposals--agips->Aavegotchi Improvement Proposals</a></li>
<li><a href=#snapshot-voting>Snapshot Voting</a></li>
<li><a href=#aragon-voting>Aragon Voting</a></li>
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

## Aavegotchi Improvement Proposals (AGIPS)

Aavegotchi Improvement Proposals (AGIPS) are onchain votes that the community participates in.

Visit the [Aavegotchi Improvement Proposals](/aavegotchi-improvement-proposals) page for a list of historical votes. If you'd like to be informed of future proposals, follow [Aavegotchi on social media](/socialmedia).

## Snapshot Voting

Snapshot is a gasless way of voting, and you can see the [Aavegotchi Snapshot here](https://snapshot.page/#/aavegotchi.eth).

1. Go to an open proposal.

2. Connect your wallet.

<img class = "bodyImage" src = "/dao/snapshot1" alt = "snapshot connect" />
<img class = "bodyImage" src = "/dao/snapshot2" alt = "snapshot connect" />

3. Sell a poll option, and click "Vote." A pop-up will appear to confirm your choice.

<img class = "bodyImage" src = "/dao/snapshot3" alt = "snapshot vote" />
<img class = "bodyImage" src = "/dao/snapshot4" alt = "snapshot vote" />

4. Your Metamask will pop up. Sign the transaction, and you're done!

<img class = "bodyImage" src = "/dao/snapshot5" alt = "sign transaction" />

## Aragon Voting

Aragon is an on-chain vote, and you can see the [Aavegotchi Aragon page here](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/).

1. Go to an open proposal.

2. Connect your wallet.

<img class = "bodyImage" src = "/dao/aragon1" alt = "aragon connect" />

3. Choose to vote "Yes" or "No."

<img class = "bodyImage" src = "/dao/aragon2" alt = "aragon choice" />

4. A Metamask transaction will pop-up. Take note that your transaction has to be mined to be confirmed, so consult a site like [gasnow](https://gasnow.org/) for the latest gas price.

5. Once your transaction is mined, your vote will be reflected accordingly.


<img class = "bodyImage" src = "/dao/aragon3" alt = "aragon final" />
