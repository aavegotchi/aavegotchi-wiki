---
author: Coder Dan
date: '2020-04-23T07:00:00.000Z'
title: 'AavegotchiDAO'
description: 'All about AavegotchiDAO'
image: "icons/dao.svg"
contributors:
  - "vanilladelphia"
  - "cinnabarhorse"
---

<div class="headerImageContainer">
<img class="headerImage" src="/dao/dao.png">
<p class="headerImageText">Sức Sống của AagotchiDAO</p>
</div>

DAO là một dạng quản trị phi tập trung cho phép người nắm giữ token có quyền vote để định hình cho các quyết định của một tổ chức.

Aavegotchi nối gót những giao thức DeFi thành công như Compound và Synthetix bằng tiến trình "phân tán từng bậc", bắt đầu với team sáng lập, Pixelcraft Studios, những người đã tổ chức sự kiện phân bổ token được quản trị bởi DAO (DAICO) và đạt đỉnh điểm khi quyền quản trị trò chơi Aavegotchi, bao gồm tất cả các cơ chế, hợp đồng thông minh, và ngân quỹ, được trao lại dưới sự bảo hộ của AavegotchiDAO, nhưng phải luôn tuân theo môi trường pháp lý. Điều này sẽ được hoàn thành trong ba giai đoạn.

<div class="contentsBox">

**Nội dung**

<ol>
<li><a href=#genesis>Genesis</a></li>
<li><a href=#metamorphosis>Metamorphosis</a></li>
<li><a href=#oasis>Oasis</a></li>
<li><a href=#participating-in-governance>Participating in Governance</a></li>
</ol>

</div>

## Genesis

*Xem* [DAICO](https://wiki.aavegotchi.com/curve/#aavegotchi-daico).

Vòng lặp đầu tiên của AavegotchiDAO đã được triển khai cùng lúc với sự kiện phân bổ của token GHST. Người nắm giữ token GHST có thể vote cho việc tăng/giảm một cơ chế "tap" để chuyển ngân quỹ từ quỹ dự trữ của token bonding curve (TBC) sang cho Pixelcraft để hỗ trợ quá trình phát triển. Khi đã đến lúc để chuyển đến giai đoạn AavegotchiDAO Metamorphosis, người nắm giữ token cũng sẽ vote để việc dịch chuyển được diễn ra.

Người nắm giữ token sẽ không nhận được phần thưởng ở dạng GHST vì đã chủ động tham gia vào vòng lặp này của AavegotchiDAO.

## Metamorphosis

Metamorphosis là vòng lặp thứ 2 của AavegotchiDAO, và giữ vai trò quản trị những cơ chế game đơn giản của AavegotchiDAO, ví dụ như tổng cung của Aavegotchis, bổ sung những loại tài sản ký quỹ mới và quyết định đối với những tính năng, và thêm vào những trang bị được tạo ra bởi cộng đồng. When the time comes to migrate to AavegotchiDAO OASIS, the AavegotchiDAO will again vote to perform the migration.

A full list of actions available to perform by the AavegotchiDAO in this phase is available in the [Governance](https://docs.aavegotchi.com/overview/governance) section of the Aavegotchi smart contract documentation.

Token holders will receive rewards in the form of GHST for active participation in this iteration of AavegotchiDAO.

## Oasis

Although AavegotchiDAO OASIS is the final iteration of AavegotchiDAO’s evolution, it is only the beginning of the realization of a DAO-governed game. All decisions related to Aavegotchi game mechanics, REALM mechanics, ecosystem spending, and even smart contract upgrades will be voted on by the AavegotchiDAO.

Token holders will receive rewards in GHST for active participation in this iteration of AavegotchiDAO.

## Participating in Governance
I'm psyched up! So how do I participate in the AavegotchiDAO? Fren, we got you covered! The [Aavegotchi Docs](https://docs.aavegotchi.com/overview/governance) details the list of DAO functions that members can call/use in order to implement changes that have been voted in. For example, let's say that asUSD has been voted in as a [collateral type](/posts/atokens). AavegotchiDAO could implement the change by using the `addCollateralTypes()` function and specifying asUSD within the function.

More details will be fleshed out once the game releases!