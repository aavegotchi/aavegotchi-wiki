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
  - "unintelligent-nerd"
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

A Signal Proposal can be posted by anyone to the Community tab on [Snapshot](https://snapshot.org/#/aavegotchi.eth). Những lá phiếu này sẽ không bị ràng buộc, nhưng nếu đạt được số phiếu tối thiểu thì bản đề xuất này sẽ được nâng cấp thành một Bản Đề Xuất Chủ Chốt ràng buộc. Before you come up with a Signal Proposal, it is mandatory to discuss it with the community on the [DAO channel](https://discord.com/channels/732491344970383370/1031189663152623747) on Discord. Mục đích của việc này là để ý tưởng trở nên lý tưởng hơn và cũng là để xem liệu nó có nhận được sự hỗ trợ hết mình từ phía cộng đồng để có thể chuyển nó thành Bản Đề Xuất Hội Ý hay không. Vui lòng tham khảo bản mẫu trong [mục Creating Signal Proposals](/dao#creating-signal-proposals).

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

* You can participate in the discussions in the [DAO channel](https://discord.com/channels/732491344970383370/1031189663152623747) on Discord. Bọn mình hân hạnh được đón tiếp tất cả các bạn!

* Tham gia bỏ phiếu tại AavegotchiDAO (khi có thể!)

* [Aavegotchi Docs](https://docs.aavegotchi.com/overview/governance) liệt kê chi tiết danh sách các hàm liên quan đến DAO mà thành viên có thể gọi/dùng để thực hiện những thay đổi đã được vote. Giả dụ như asUSD được vote để trở thành một [loại tài sản ký gửi ](/posts/atokens)đi. Aavegotchi sẽ có thể triển khai thay đổi này bằng cách sử dụng hàm `addCollateralTypes()` và chỉ định asUSD sẽ nằm trong hàm đó.

## Các loại Đề Xuất

Có 2 lại đề xuất trong giai đoạn *Cocoon*:

* **Signal Proposal** — Một bản đề xuất có thể được đăng bởi bất kỳ ai. Những lá phiếu này sẽ không bị ràng buộc, nhưng nếu đạt được số phiếu tối thiểu thì bản đề xuất này sẽ được nâng cấp thành một Bản Đề Xuất Chủ Chốt ràng buộc. Share your proposal idea and discuss it with other community members in the [DAO channel](https://discord.com/channels/732491344970383370/1031189663152623747) on Discord. Once you have finalized the details of your proposal, create an official thread for it on the DAO channel using the framework outlined in the [Creating Signal Proposals](/dao#creating-signal-proposals) section below. After which, create a vote for it on [Snapshot](https://snapshot.org/#/aavegotchi.eth).

* **Core Proposal** — Nếu Signal Proposal đạt được 20% túc số hoặc hơn (lượng GHST được phép sử dụng để vote, có trên Polygon), Pixelcraft sẽ thông báo bản đề xuất trở thành Core Proposal. Những lượt vote này sẽ tích hợp và đủ điều kiện để mang đến [XP](/traits#experience) cho người tham gia.

<img class = "bodyImage" src = "/dao/proposal-type.png" alt = "Những loại đề xuất AavegotchiDAO" />

**Core Proposals** sẽ chia thành 3 loại:

*Lưu ý: Phần trăm túc số được tính bằng lượng GHST lưu thông hợp lệ trên Polygon, không phải tổng tổng số lượng!*

* **Smol votes:** Túc số đạt 5%. Loại này được dành cho những quyết định nhỏ, không ảnh hưởng đến meta hoặc giá trị hiện tại của Aavegotchi trong bất kỳ tình huống nào. (ví dụ như giới thiệu về các tính năng quần áo, bản đề xuất dành cho chiến lược marketing.

* **Medium votes:** Túc số đạt 10%. Những bản đề xuất này dành cho những quyết định sẽ ảnh hưởng kha khá đến meta (ví dụ nhưng mang đến những item mới, phân phối XP cho vật phẩm hoặc event, thay đổi một số thứ về Aavegotchi mà không làm ảnh hưởng đến điểm độ hiếm).

* **Galaxy votes:** Túc số đạt 20%. Những bản đề xuất này dành cho những quyết định lớn có ảnh hưởng mạnh đến meta và hệ sinh thái rộng lớn của Aavegotchi (ví dụ như thế hệ Haunt mới, thay đổi thứ gì đó về Aavegotchi mà ảnh hưởng đến điểm độ hiếm).

## Khác Biệt Số Phiếu

Cách biệt số phiếu là sự khác nhau giữa hai lựa chọn, và cho thấy liệu có đạt được sự đồng thuận hay chưa.

Đây là ví dụ về Core Proposal với 3 phương án:

* Phương án A đạt được 25%
* Phương án B đạt được 35%
* Phương án C đạt được 40%.

Cách biệt cần có là 5% (sự khác gia giữa phương án C [40%] và phương án B [35%]).

Việc này sẽ không đủ để đạt được đồng thuận, do đó bản Đề Xuất này sẽ không được thi hành.

Đặt biệt, bản đề xuất càng có nhiều phương án thì càng cần có nhiều Cách Biệt về Số phiếu để thể hiện sự đồng thuận.

Với COCOON, bọn mình sẽ bắt đầu đi theo những thước đo Cách Biệt sau, và sẽ điều chỉnh nếu cần thiết:

2 Phương án — 10% VD

3 Phương án — 15% VD

4 Phương án — 20% VD

## Tạo ra Đề xuất Hội ý

Để tạo bản đề xuất hội ý để #Gotchigang có thể bỏ phiếu, hãy làm theo format dưới đây:

* Tác giả + Id của Gotchi
* Link to the [DAO channel](https://discord.com/channels/732491344970383370/1031189663152623747) thread on Discord (Proposals without significant discussion will be automatically removed from Snapshot)
* Tóm tắt (bao gồm ý nghĩa, thời gian, mục đích và bất kỳ chỉ số đánh giá Kpi nào). Những bản đề xuất được copy paste từ những bản đề xuất đã tồn tại sẽ bị xoá những những bản đề xuất tương tự với những biến thể khác biệt sẽ được cho phép tồn tại song song.
* Ảnh hưởng
* Những mục đích cuối cùng và lợi ích đáng chú ý
* Nói lên những rủi ro tìm ẩn hoặc hậu quả không lường trước
* Kế hoạch dự phòng (Kế hoạch B, kế hoạch C, v. v.)
* Thời lượng của bản đề xuất không nên dài quá 30 ngày kể từ khi bắt đầu, vậy nên hãy đảm bảo rằng chỉ có những bản đề xuất đang cho phép bỏ phiếu mới được nằm trên bảng Snapshot cộng đồng.

Xem thêm chi tiết tại [bài viết Medium](https://aavegotchi.medium.com/scaling-aavegotchidao-c7e589de0333)này.

## Bỏ phiếu

Snapshot là một DApp phục vụ voting trên Ethereum. Votes made on Snapshot do not require any gas and are not on-chain. Aavegotchi's Snapshot page can be found [here](https://snapshot.org/#/aavegotchi.eth).

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

## Aavegotchi Improvement Proposals (AGIPs)

Truy cập vào trang [Aavegotchi Improvement Proposals](/aavegotchi-improvement-proposals) để cập nhận danh sách lịch sử bầu chọn.

Hãy bỏ phiếu cho các bản đề xuất để nhận [huy hiệu POAP](/poap) cho việc đó nhé!

## Ngân Quỹ

As responsible stewards, members of AavegotchiDAO will play a role in determining how these funds are to be allocated.

The AavegotchiDAO treasury is located [here](https://aavegotchi.com/treasury).

MikeyJay and Eitri proposed the creation of a DAO Treasury Dashboard in [AGIP-76](/aavegotchi-improvement-proposals#create-a-dao-treasury-dashboard). The completed dashboard can be found [here](https://dune.com/eitri/aavegotchi-dao-treasury)
