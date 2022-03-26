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

The Base Channel Rate ban đầu sẽ ở mức 20 FUD, 10 FOMO, 5 ALPHA, và 2 KEK. This Rate may need to be adjusted by the community over time to prevent going over the Alchemica budget for Alchemical Channeling (25% of total supply over the lifetime of the game, 50% of which is allocated to Guild Channeling).

Every extra Aavegotchi holding the designated Wearable that joins in the ritual increases the total by the Base Channel Rate **Gotchi Presence**, which results in exponentially more Alchemica being dropped:

table_gotchiPresenceBonus

**Wearable Crest Rarity Multiplier** designates the base rate at which Alchemica is dropped:

table_wearableMultiplier

## Liên kết Guild với Crest

*Wearable Crests*

A Gotchi Lodge has to link with a Wearable Crest on-chain before it can engage in Alchemical Channeling. Initially, only **one** Guild can use each Wearable.

A Gotchi Lodge will be considered “linked” with its Wearable Crest if its [REALM parcel](/gotchiverse#realm-parcel-sizes) holds a special ERC-1155 Wearable Crest NFT onchain.

This ERC-1155 Crest cannot be purchased off the open market, but must be won in a [Bid-to-earn Auction](/aauction) using GLTR. Auctions will be held every **three months** for all Wearable Crests, and the winners of those auctions will automatically be transferred the Wearable Crests on-chain, thus earning their Guild the privilege to engage in Guild Channeling.

This gives a strong incentive for Guilds to hold and LP their Alchemica, to continue earning GLTR, and providing Guild Channeling for their members.

*Insignia Crests*

Each Gotchi Lodge can mint an onchain ERC-1155 Insignia Crest for its members, to allow access to the Lodge without holding the Wearable Crest. The Lodge owner can update the Crest metadata to change the name and appearance of the Crest, but not the Crest’s onchain ID.

## Danh sách Guild

table_guild

## Bản Đồ Guild

Guilds organize themselves in districts. The following guild map has been compiled by MonsterRNG#3333 of Avid Aavegotchis

<img class="bodyImage" src="/guild/guild-map.png" alt="Aavegotchi Guild Map" />