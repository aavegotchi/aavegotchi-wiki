---
author: Unintelligent Nerd
date: '2020-04-23T07:00:00.000Z'
title: 'Aavegotchi Guilds'
description: 'Aavegotchi Guilds'
contributors:
  - "unintelligent-nerd"
---

Lối chơi trong REALM sẽ sớm được trình làng! Sẽ có nhiều hoạt động trong Gotchiverse - từ xả hội hoá đến đồng truyền trong Gotchi Lodge. Hãy làm quen thật nhiều người bạn và tham gia vào các hoạt động chỉ thuộc về Guild nhé!

<div class="contentsBox">

**Nội dung**

<ol>
<li><a href=#accessing-a-guild>Truy cập vào Guild</a></li>
<li><a href=#guild-channeling>Truyền theo Guild</a></li>
<li><a href=#linking-your-guild-to-a-crest>Liên kết Guild với Crest</a></li>
<li><a href=#list-of-guilds>Danh sách Guild</a></li>
<li><a href=#guild-map>Bản Đồ Guild</a></li>
</ol>

</div>

## Truy cập vào Guild

Gotchi có thể vào Gotchi Lodges bằng "Guild Crest." Guild Crest là một NFT đặc biệt phải được giữ hoặc trang bị cho Aavegotchi.

Mặc định, Gotchi Lodges sẽ có thể được truy cập bởi bất kỳ Gotchi nào sở hữu Guild Crest đặc thù trong Ví (truy cập mở). nhưng Guild cũng có thể giới hạn truy cập đối với những Gotchi ID nhất định bằng cách yêu cầu Aavegotchi ứng tuyển membership (giới hạn truy cập) hoặc thậm chí là chỉ định Aavegotchi nào có thể ứng tuyển quyền thành viên (whitelist).

Có 2 loại Guild Crests:

* **Wearables Crests**: Một loại [Trang Phục](/wearables) ERC1155 của giao thức Aavegotchi (ví dụ như Common Rofl, hoặc Aave Hero Mask) với nguồn cung giới hạn.

* **Insignia Crests**: Một loại NFT ERC1155 không có số lượng cố định, có thể được tạo ra bởi Chủ Sở Hữu Guild và được giữ bởi các thành viên Aavegotchi để cho phép truy cập vào Gotchi Lodge.

Mỗi Gotchi Lodge có thể liên kết một Insignia Crest và tối đa 3 Wearable Crests. Sự khác biệt lớn nhất giữa hai loại Crest này là **Wearable Crests** mang đến những quyền lợi trong việc Truyền Theo Guild, trong khi đó **Insignia Crests** chỉ cho phép tham gia vào Guild.

## Truyền theo Guild

Guild Channeling (hay còn gọi là Communal Channeling) là một nghi thức mà các thành viên của Guild có thể tương tác mỗi tuần để triệu hồi Alchemica rơi xuống từ Gotchiverse.

Alchemica kiếm được phụ thuộc vào 3 yếu tố:

* **Base Channel Rate** – lượng Alchemica được phân bổ, trước khi điều chỉnh.

* **Gotchi Presence** – số lượng thành viên Guild có mặt

* **Wearable Crest Rarity** – độ hiếm của Trang phục được sử dụng trong hoạt động truyền

The Base Channel Rate ban đầu sẽ ở mức 20 FUD, 10 FOMO, 5 ALPHA, và 2 KEK. Tỷ lệ này có thể sẽ được điều chỉnh bởi cộng đồng theo thời gian để ngăn không cho vượt quá nguồn cung Alchemica dành cho việc việc truyền Khoáng sản (25% tổng lượng cung theo thời gian của game, 50% được phân bổ cho việc Truyền Guild).

Với mỗi Aavegotchi đang nắm giữ Trang Phục được chỉ định tham gai vào nghi thức sẽ tăng Base Channel Rate **Gotchi Presence**, dẫn đến việc cực nhiều Alchemica được rơi ra:

table_gotchiPresenceBonus

**Wearable Crest Rarity Multiplier** chỉ định tỷ lệ Alchemica cơ bản rơi ra:

table_wearableMultiplier

## Liên kết Guild với Crest

*Wearable Sets*

Gotchi Lodge cần phải được liên kết với Wearable Crest on-chain trước khi nó được liên kết với Alchemical Channeling. Ban đầu, chỉ **một** Guild có thể sử dụng mỗi lại Trang Phục.

Một Gotchi Lodge được xem là "đã liên kết" với Wearable Crest nếu [gói đất REALM](/gotchiverse#realm-parcel-sizes) nắm giữ một ERC-1155 Wearable Crest NFT onchain.

ERC-1155 Crest không thể được mua từ thị trường mở, nhưng có thể thắng được thông qua [Đấu Giá Kiếm Tiền](/aauction) bằng GLTR. Các sự kiện đấu giá được tổ chức cứ mỗi **ba tháng** đối với tất cả Wearable Crests, và người chiến thắng những sự kiện đấu giá này sẽ tự động được chuyển cho Wearable Crests on-chain, do đó Guild họ sẽ kiếm được đặc quyền tương tác với hoạt động Truyền theo Guild.

Điều này mang đến một phần thưởng khuyến khích mạnh mẽ để Guild nắm giữ và cung cấp thanh khoảng cho Alchemica, để tiếp tục kiếm GLTR, và cung cấp hoạt động truyền Guild cho mem.

*Insignia Crests*

Mỗi Gotchi Lodge có thể mint ra một Insignia Crest ERC-1155 onchain cho thành viên của mình, để họ truy cập vào Lodge mà không cần phải nắm giữ Wearable Crest. Chủ sỡ hữu Lodge có thể nâng cấp metadata của Crest để thay đổi tên và hình dạng của Crest, nhưng không thể thay đổi ID onchain của Crest.

## Danh sách Guild

table_guild

## Bản Đồ Guild

Guild tự sắp xếp vị trí của mình tại các quận. Bản đồ guild này đã được thực hiện bởi MonsterRNG#3333 của Guild Avid Aavegotchi

<img class="bodyImage" src="/guild/guild-map.png" alt="Bản Đồ Guild Aavegotchi" />