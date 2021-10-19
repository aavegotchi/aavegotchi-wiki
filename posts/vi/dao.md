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
<li><a href=#cocoon>Cocoon</a></li>
<li><a href=#metamorphosis>Metamorphosis</a></li>
<li><a href=#oasis>Oasis</a></li>
<li><a href=#participating-in-governance>Tham Gia Quản Trị</a></li>
<li><a href=#aavegotchidao-forum>Diễn đàn AavegotchiDAO</a></li>
<li><a href=#type-of-proposals>Các loại Đề Xuất</a></li>
<li><a href=#vote-differentials>Khác Biệt Số Phiếu</a></li>
<li><a href=#creating-signal-proposals>Tạo ra Đề xuất Hội ý</a></li>
<li><a href=#voting>Bỏ phiếu</a></li>
<li><a href=#aavegotchi-improvement-proposals--agips->Aavegotchi Improvement Proposals (AGIPs)</a></li>
<li><a href=#treasury>Ngân Quỹ</a></li>
</ol>

</div>

## Genesis

*Xem* [DAICO](https://wiki.aavegotchi.com/curve/#aavegotchi-daico).

Vòng lặp đầu tiên của AavegotchiDAO đã được triển khai cùng lúc với sự kiện phân bổ của token GHST. Người nắm giữ GHST có quyền vote để tăng/giảm lượng tài sản được phân bổ thông qua cơ chế tap (quỹ dành cho nhà phát triển) của quỹ dự trữ token bonding curve (TBC) dành cho Pixelcraft Studios (team đằng sau Aavegotchi) để hỗ trợ phát triển dự án. Đề nghị AavegotchiDAO đầu tiên về việc tăng giới lượng tap của Aavegotchi DAICO từ 50.000 DAI lên thành 100.000 DAI mỗi tháng đã vượt quá 99% phiếu tán thành vào ngày 18 tháng Mười năm 2020. Khi đã đến lúc để chuyển đến giai đoạn AavegotchiDAO Metamorphosis, người nắm giữ token cũng sẽ vote để việc dịch chuyển được diễn ra.

Người nắm giữ token sẽ không nhận được phần thưởng ở dạng GHST vì đã chủ động tham gia vào vòng lặp này của AavegotchiDAO.

Các tính năng của Genesis bao gồm:

* Không cần sử dụng hợp đồng thông minh
* Nâng cấp hợp đồng
* Quản trị dựa trên token GHST
* Nền tảng: Aragon
* Phần thưởng: không có
* Nền tảng: Ethereum Mainnet

## Cocoon

Phiên bản 1.5 của AavegotchiDAO. Điểm trung gian giữa [Genesis](/dao#genesis) và [Metamorphosis](/dao#metamorphosis). Giai đoạn Cocoon sẽ ưu tiên mang đến những thay đổi ảnh hưởng đến cơ chế của game.

Những tính năng của giai đoạn này gồm có:

* Quyền kích hoạt hợp đồng của Pixelcraft
* Nâng cấp hợp đồng
* Quản trị dựa trên token GHST
* Nền tảng: Snapshot/Discourse
* Phần thưởng: [XP](/traits#experience) dành cho Những Bình Chọn Chủ Chốt
* Nền tảng: Polygon

Có 2 loại bầu cử trong giai đoạn Cocoon: (1) Bỏ Phiếu Hội Ý (Signal Proposal), và (2) Bỏ Phiếu Chủ Chốt (Core Proposal).

Signal Proposal có thể được đăng tải lên từ bất kỳ ai trong tab Community trên [Snapshot](https://snapshot.page/#/aavegotchi.eth). Những lá phiếu này sẽ không bị ràng buộc, nhưng nếu đạt được số phiếu tối thiểu thì bản đề xuất này sẽ được nâng cấp thành một Bản Đề Xuất Chủ Chốt ràng buộc. Trước khi viết ra Bản Đề Xuất Hội Ý, bạn bắt buộc phải thảo luận với cộng đồng tren Discord và/hoặc [diễn đàn AavegotchiDAO](https://dao.aavegotchi.com/). Mục đích của việc này là để ý tưởng trở nên lý tưởng hơn và cũng là để xem liệu nó có nhận được sự hỗ trợ hết mình từ phía cộng đồng để có thể chuyển nó thành Bản Đề Xuất Hội Ý hay không. Vui lòng tham khảo bản mẫu trong [mục Creating Signal Proposals](/dao#creating-signal-proposals).

Bản Đề Xuất Hội Ý sẽ được nâng cấp lên thành Bản Đề Xuất Chủ Chốt một khi trước đó nó đã được thông qua với mức thi hành tối thiểu cao hơn 20% lượng GHST có thể dùng để bỏ phiếu trên Polygon vào thời điểm bản đề xuất được tạo ra.

Một bản đề xuất chủ chốt là bản đề xuất mà Pixelcraft đã đẩy mạnh, với những phương án dựa trên Bản Đề Xuất Hội Ý đã đạt hoặc gần đạt được mức thi hành tối thiểu. Những lá phiếu này sẽ được hiện thực hoá và những ai tham gia sẽ nhận được phần thưởng XP.

Nếu Bản Đề Xuất Hội Ý của các bạn được nâng cấp thành công thành Bản Đề Xuất Chủ Chốt thì 150 [XP](/traits#experience)* sẽ được tặng cho Aavegotchi mà bạn đã ghi chú trong Bản Đề Xuất Hội Ý.

*Có thể tăng hoặc giảm thông qua giai đoạn COCOON

## Metamorphosis

Metamorphosis là vòng lặp thứ 2 của AavegotchiDAO, và giữ vai trò quản trị những cơ chế game đơn giản của Aavegotchi, ví dụ như tổng cung của Aavegotchis, bổ sung những loại tài sản ký quỹ mới, quyết định đối với những tính năng, và thêm vào những trang bị được tạo ra bởi cộng đồng. Khi đến lúc phải chuyển sang AavegotchiDAO Oasis, AavegotchiDAO sẽ vote lần nữa để việc chuyển đổi được tiến hành.

Xem danh sách đầy đủ của các hành động có thể được tiến hành bởi AavegotchiDAO trong giai đoạn này tại mục [Governance](https://docs.aavegotchi.com/overview/governance) trong tài liệu hợp đồng thông minh của Aavegotchi.

Người nắm giữ token sẽ nhận được phần thưởng khi chủ động tham gia vào giai đoạn này của AavegotchiDAO.

Những tính năng của giai đoạn này gồm có:

* Có thể thực thi hợp đồng thông minh
* Có thể nâng cấp những cơ chế nhất định
* Quản trị Aavegotchi + GHST
* Nền tảng: dapp front-end tuỳ chỉnh
* Phần thưởng: [XP](/traits#experience)+huy hiệu cho việc bỏ phiếu
* Nền tảng: Polygon

## Oasis

Dù AavegotchiDAO OASIS là vòng lặp cuối cùng trong quá trình tiến hoá của AavegotchiDAO, nhưng đây mới chính là thời điểm mà Aavegotchi được công nhận là một trò chơi được quản trị bởi DAO. Tất cả những quyết định liên quan đến những chế của game, những cơ chế của REALM, việc chi tiêu của hệ sinh thái, và thậm chí là những nâng cấp trong hợp đồng thông minh sẽ được tiến hành vote thông qua AavegotchiDAO.

Người nắm giữ token sẽ nhận được phần thưởng ở dạng GHST khi chủ động tham gia vào vòng lặp này của AavegotchiDAO.

Những tính năng của giai đoạn này gồm có:

* Có thể thực thi hợp đồng thông minh
* Có thể nâng cấp những cơ chế nhất định
* Quản trị Aavegotchi + GHST
* Nền tảng: Aavegotchi Realm
* Phần thưởng: [XP](/traits#experience)+huy hiệu cho việc bỏ phiếu
* Nền tảng: Polygon

## Tham Gia Quản Trị
Mơ hồ ghê á! Ủa vậy sao tui tham gia vào AavegotchiDAO được bồ? Bạn êi, bọn mình lo hết!

* Bạn có thể tham gia tranh luận tại [diễn đàn AavegotchiDAO](https://dao.aavegotchi.com/)hoặc #🌱dao-discussion trong Discord. Bọn mình hân hạnh được đón tiếp tất cả các bạn!

* Tham gia bỏ phiếu tại AavegotchiDAO (khi có thể!)

* [Aavegotchi Docs](https://docs.aavegotchi.com/overview/governance) liệt kê chi tiết danh sách các hàm liên quan đến DAO mà thành viên có thể gọi/dùng để thực hiện những thay đổi đã được vote. Giả dụ như asUSD được vote để trở thành một [loại tài sản ký gửi ](/posts/atokens)đi. Aavegotchi sẽ có thể triển khai thay đổi này bằng cách sử dụng hàm `addCollateralTypes()` và chỉ định asUSD sẽ nằm trong hàm đó.

## Diễn đàn AavegotchiDAO

Diễn Đàn Quản Trị AavegotchiDAO được vận hành trên Discourse. Sự có mặt của diễn đàn này sẽ giúp cộng đồng tập trung thảo luận những chủ đề liên quan đến cơ chế game Aavegotchi, yêu cầu ngân sách, và những đề xuất khác.

Bọn mình hy vọng rằng #GotchiGang sẽ trở thành một mô hình cho những game được sở hữu bởi DAO trong tương lai, vậy nên hãy tham gia và nhớ lịch sự với những người anh em trong cộng đồng nhé.

Diễn đàn có thể truy cập vào tại [đây](https://dao.aavegotchi.com/).

## Các loại Đề Xuất

Có 2 lại đề xuất trong giai đoạn *Cocoon*:

* **Signal Proposal** — Một bản đề xuất có thể được đăng bởi bất kỳ ai. Những lá phiếu này sẽ không bị ràng buộc, nhưng nếu đạt được số phiếu tối thiểu thì bản đề xuất này sẽ được nâng cấp thành một Bản Đề Xuất Chủ Chốt ràng buộc. Hãy chia sẻ ý tưởng đề xuất và thảo luận với những thành viên khác trong cọng đồng trên kênh #🌱dao-discussion hoặc [AavegotchiDAO Forum](https://dao.aavegotchi.com/). Một khi bạn đã hoàn thành chi tiết bài đề xuất, hãy tạo một bài viết trên diễn đàn AavegotchiDAO bằng cách sử dụng dàn bài được viết ra sẵn trong mục [Creating Signal Proposals](/dao#creating-signal-proposals) bên dưới. Sau đó, hãy tạo ra một bài bỏ phiếu tại [Snapshot](https://snapshot.page/#/aavegotchi.eth).

* **Core Proposal** — If a Signal Proposal achieves 20% or greater quorum (amount of circulating GHST eligible to vote on Polygon), Pixelcraft will reintroduce the proposal as a Core Proposal. These votes are binding and are eligible for [XP](/traits#experience) rewards to participants.

<img class = "bodyImage" src = "/dao/proposal-type.png" alt = "AavegotchiDAO Proposal Type" />

**Core Proposals** are further subdivided into 3 types:

*Reminder: Quorum percentages are calculated from the amount of circulating GHST eligible to vote on Polygon, not the total supply!*

* **Smol votes:** Quorum of 5%. These votes are intended for small decisions that do not affect the overall meta or value of existing Aavegotchis in any significant way (e.g. introduction of a cosmetic feature, proposal for a marketing strategy).

* **Medium votes:** Quorum of 10%. These votes are intended for decisions that may have some notable effect on the meta (e.g. introducing a new game item, allocating XP to some item or event, changing something about an Aavegotchi that does not affect its rarity score).

* **Galaxy votes:** Quorum of 20%. These votes are intended for major decisions that have significant effects on the meta and wider Aavegotchi ecosystem (e.g. a new Haunt, changing something about an Aavegotchi that affects its rarity score).

## Khác Biệt Số Phiếu

Vote differentials are the difference between the top two options, and are indicative of whether or not a reasonable consensus has been achieved.

Here is an example Core Proposal with 3 options:

* Option A receives 25%
* Option B receives 35%
* Option C receives 40%.

The required Vote Differential is 5% (the difference between Option C [40%] and Option B [35%]).

This would not be enough to achieve consensus, thus the Proposal is not implemented.

Typically, the more options a vote has, the higher Vote Differential it requires to demonstrate that true consensus has been reached.

For COCOON, we will begin with the following Vote Differential parameters, and course correct if necessary:

2 Options — 10% VD

3 Options — 15% VD

4 Options — 20% VD

## Tạo ra Đề xuất Hội ý

To create signal proposals for the #GotchiGang to vote on, please adhere to the following format:

* Author + GotchiID
* Link to the matching Discourse thread (Proposals without significant discussion in the forum will be automatically removed from Snapshot)
* Summary (include rationale, timeline, goals and any key performance indicators) Copy/paste proposals of existing proposals will be removed while proposals with similar but distinct variations are permitted to exist side by side.
* Effect
* Highlight end goal and benefits
* Acknowledge potential risks or unintended consequences
* Any alternative paths (Plan B, Plan C, etc)
* The end time of a proposal should not be longer than 30 days from its starting time, to ensure that only active proposals are displayed on Snapshot Community board.

More details can be found in this [Medium post](https://aavegotchi.medium.com/scaling-aavegotchidao-c7e589de0333).

## Bỏ phiếu

There are two ways to vote: (1) Snapshot Voting, and/or (2) Aragon Voting.

### Vote bằng Snapshot

Snapshot is a voting DApp on Ethereum. Votes made on Snapshot does not require any gas and are not on-chain. Aavegotchi's Snapshot page can be found [here](https://snapshot.page/#/aavegotchi.eth).

To vote on Snapshot, follow the steps below:

1). Go to an open proposal.

2). Connect your wallet.

<img class = "bodyImage" src = "/dao/snapshot1.jpg" alt = "Snapshot Voting Ethereum" />
<img class = "bodyImage" src = "/dao/snapshot2.jpg" alt = "Snapshot Voting Ethereum" />

3). Select a poll option, and click "Vote." A pop-up will appear to confirm your choice.

<img class = "bodyImage" src = "/dao/snapshot3.jpg" alt = "Snapshot Voting Ethereum" />
<img class = "bodyImage" src = "/dao/snapshot4.jpg" alt = "Snapshot Voting Ethereum" />

4). Your Metamask will pop up. Sign the transaction, and you're done!

<img class = "bodyImage" src = "/dao/snapshot5.jpg" alt = "sign transaction on Snapshot Voting" />

### Vote bằng Aragon

Aragon is a tool for creating and participating in decentralized organizations on Ethereum. Votes made on Aragon requires gas and exists on-chain.

Aavegotchi's Aragon page can be found [here](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/).

To vote on Aragon, follow the steps below:

1). Go to an open proposal.

2). Connect your wallet.

<img class = "bodyImage" src = "/dao/aragon1.jpg" alt = "Aragon Voting Ethereum" />

3). Choose to vote "Yes" or "No."

<img class = "bodyImage" src = "/dao/aragon2.jpg" alt = "Aragon Voting Ethereum" />

4). A Metamask transaction will pop-up. Take note that your transaction has to be mined to be confirmed, so consult a site like [gasnow](https://gasnow.org/) for the latest gas price.

5). Once your transaction is mined, your vote will be reflected accordingly.


<img class = "bodyImage" src = "/dao/aragon3.jpg" alt = "Aragon Voting Ethereum" />

## Aavegotchi Improvement Proposals (AGIPs)

See those votes on Aragon? They are Aavegotchi Improvement Proposals (AGIPs)!

Visit the [Aavegotchi Improvement Proposals](/aavegotchi-improvement-proposals) page for a list of historical votes. If you'd like to be informed of future proposals, follow [Aavegotchi on social media](/socialmedia).

## Ngân Quỹ

AavegotchiDAO earns 0.3% of all trades on the Aavegotchi [Bonding Curve](/curve) on Ethereum Mainnet. Đây là số tiền hiện có trong tất cả các quỹ của DAO.

As responsible stewards, members of AavegotchiDAO will play a role in determining how these funds are to be allocated.

The AavegotchiDAO treasury is located [here](https://aavegotchi.com/treasury).