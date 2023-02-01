---
author: wagyuchicken
date: '2020-04-23T07:00:00.000Z'
title: 'Traits'
description: 'Mọi thứ bạn cần biết về trait của Aavegotchi!'
contributors:
  - "cinnabarhorse"
  - "wagyuchicken"
  - "unintelligent-nerd"
---

Aavegotchi được sinh ra với các trait. Giống như các đặc điểm để định hình rằng bạn là một con người, trait của Aavegotchi rất quan trọng trong việc định hình sự đống động của một bé ma! Những loại đặc điểm này mà chúng sở hữu có ảnh hưởng đến[Trait Base Rarity](/rarity-farming#base-rarity-score) của chúng, cách chúng thể hiện trong [minigame](/minigames) và

wearables</1> mà chúng được mặc. Những Aavegotchi được triệu hồi từ [portals](/portals) được sinh ra với tổ hợp những trait được chỉ định ngẫu nhiên. Tuy nhiên, trait của Aavegotchi có thể thay đổi được với <a href=#level>level</a>, những wearable được trang bị và những consumble đã dùng. </p>

<div class="contentsBox">

**Nội dung**

<ol>
<li><a href=#randomly-generated-traits>Chỉ Số Đặc Tính Ngẫu Nhiên </a></li>
<li><a href=#spirit-force-trait-modifiers>Yếu Tố Điều Chỉnh Chỉ Số Spirit Forces</a></li>
<li><a href=#kinship>Kinship</a></li>
<li><a href=#experience>Kinh nghiệm</a></li>
<li><a href=#level>Cấp độ</a></li>
<li><a href=#haunt>Haunt</a></li>
<li><a href=#alchemica-carrying-capacity>Alchemica Carrying Capacity</a></li>
<li><a href=#aging-mechanic>Aging Mechanic</a></li>
<li><a href=#trait-mappings>Trait Mappings</a></li>
</ol>

</div>

## Chỉ Số Đặc Tính Ngẫu Nhiên

Aavegotchi có sáu đặc điểm: 

* AGG = Aggressiveness (Hiếu Chiến)
* NRG = Energy (Năng Lượng)
* SPK = Spookiness (Đáng Sợ)
* BRN = Brain Size (Kích Thước Não)
* EYS = Hình Dạng Mắt
* EYC = Màu Mắt

Khi dùng dùng thuật ngữ RPG (Role-playing Game), `AGG` cũng tưng tự với Strength, `NRG` tương tự với Agility, `BRN` tương tự với Intelligence, and `SPK` là một trait cao cấp. Hãy nhớ rằng những trait này không hoàn toàn giống với những RPG tiêu chuẩn; trait có giá trị thấp trong metaverse của Aavegotchi thực sự rất mạnh!

Trait được định hình ở thời điểm người chơi mở [Portal](/portals). Khi mở Portal [Chainlink’s VRF random number generator function](/glossary#chainlink-vrf) được gọi để chỉ định các giá trị trait ngẫu nhiên cho Aavegotchi. Những giá trị trait này được phân bố theo beell-curve, và mỗi trait sẽ được chỉ định một giá trị trong số các giá trị Common, Uncommon, Rare, hoặc Mythical, tuỳ theo độ hiếm của chúng. Tỷ lệ nhận được mỗi đặc điểm với độ hiếm được thể hiện trong bảng dưới đây:

table_TraitsProbabilities

Bell curve của việc phân bố giá trị triat sẽ nhìn giống như dưới đây:

<img class="bodyImage" src="/traits/bell_curve.png" alt = "bell curve" />

Mới đầu, Aaavegotchi sở hữu sáu trait, dù cho những trait này có thể tăng lên trong tương lai thông qua việc vote trong [AavegotchiDAO](/dao). Một số trait, như màu sắc cơ thể của Aavegotchi (không phải mà trắng cũ đơn sắc), sẽ được AavegotchiDAO quyết trong mỗi sự kiện haunt mới!

Không giống như những game khác, trong Aavegotchi, không hề có trait "tối ưu". Mỗi thuộc tính (trừ hình dạng và màu sắc của mắt) sẽ có những hiệu ứng khác nhau trong những minigame khác nhau. Ví dụ, Aavegotchi có năng lượng cao hơn sẽ đua tốt hơn, những sẽ chơi tốt trong những minigame thiền. 

Bảng dưới đây thể hiện chi tiết các đặc điểm theo độ hiếm. *Chú ý: Hai bảng nên được xem như một. Nó đã được tách ra để có thể render trên thiết bị dị động*

table_TraitsByRarity1 table_TraitsByRarity2
<p style="margin-left: 3.0em"><i> (L) là viết tắt của "Low"; (H) là viết tắt của "High" </i></p>
<p style="margin-left: 3.0em"><i> *Những màu mắt phổ biến mang màu sắc của những tài sản ký gửi trên Aavegotchi của bạn. ví dụ màu cam dành cho aDAI, màu xanh da trời cho aAAVE, màu tím cho aETH, v.v. </i></p>

Để xem thông tin chi tiết về từng Hình Dạng Mắt, hãy xem qua [trang Hình Dạng Mắt](/eye-shape) nhé.



## Yếu Tố Điều Chỉnh Chỉ Số Spirit Forces

Loại [spirit force](/spirit-force) mà Aavegotchi sỡ hữu cũng ảnh hưởng đến giá trị đặc tính của chúng:

table_spiritForceModifiers



## Kinship

Kinship là độ trung thành mà Aavegotchi dành cho bạn. Xem thêm thông tin tại [trang Kinship](/kinship)</0>.



## Kinh nghiệm

Aavegotchi có thể nhận được kinh nghiệm (XP) khi:

* Bỏ phiếu cho những đề xuất quan trọng trong [AavegotchiDAO](/dao)
* Tham gia vào các sự kiện được tổ chức trong Aavegotchi Discord (một bản Typeform sẽ được công bố trong sự kiện để mọi người có thể hoàn thành và nhận được XP cho Gotchi)
* Chơi [mini-games](/minigames) (trong một thời gian nhất định, được công bố trên Discord)

Aavegotchi có thể được hi sinh để loại bỏ[tiền ký gửi được stake](/spirit-force) và chuyển tài sản đó sang cho một Aavegotchi khác. Aavegotchi đích sẽ nhận được 100% số kinh nghiệm mà Aavegotchi hi sinh sở hữu.

Kinship là tài khoản nội bộ nằm trong hợp đồng thông minh của Aavegotchi.

Kinship có thể được xem trên trang [thông tin của Aavegotchi](/aavegotchi-profile).



## Cấp độ

Aavegotchi lên cấp khi nó nhận được nhiều kinh nghiệm. Cứ mỗi ba cấp, Aavegotchi lại nhận được một [Spirit Point](/glossary#spirit-point) có thể phân phối vào để giúp tăng hoặc giảm một trait nhất định. Một số wearable chỉ có thể được mặc lên bởi những Aavegotchi ở một cấp độ nhất định.

Gotchi có cập độ càng cao thì tham gia được càng nhiều [guilds](/guild).

Để xem thông tin chi tiết về Xp cần cho mỗi cấp độ, bạn lòng nhấp vào [đây](/xp).

Cấp độ của Aavegotchi có thể được xem trên trang [thông tin của Aavegotchi](/aavegotchi-profile).



## Haunt

Giống như những người tiên phong trong Thế Giới Mới, Aavegotchi du hành từ Nether Realm đến Ether Realm theo nhóm được gọi là [Haunts](/haunt). Sự kiện Haunt đầu tiên bao gồm 10.000 Aavegotchi. Sau đó, những sự kiện Haunt mới phải được sự cho phép cả [AavegotchiDAO](/dao) thì mới được tiến hành. Một số wearable chỉ có thể được mặc lên bởi những Aavegotchi ở một cấp độ nhất định.

Haunt có thể hiểu nôm na là các phiên bản Aavegotchi, số hiệu Haunt sẽ có thể tìm thấy trên thông tin của Gotchi. Sẽ không có khác biệt về chỉ số giữa các Haunt.



## Alchemica Carrying Capacity

[BRS](/rarity-farming#base-rarity-score) is used to boost a gotchi's carrying capacity with the follow formula:



```
Carrying Capacity = 100 * (BRS/300)^2
```


E.g. a Gotchi with:

* BRS = 600 has a carrying capacity of 400 [Alchemica](/gotchus-alchemica) chunks

* BRS = 900 has a carrying capacity of 900 Alchemica chunks



## Aging Mechanic

[Aavegotchi Improvement Proposal 13](/aavegotchi-improvement-proposals#add-an-aging-mechanic-to-affect-aavegotchi-rarity-scores) giới thiệu về cơ chế trưởng thành dành cho Aavegotchi.

Gotchis sẽ nhận được một lượng [BRS](/rarity-farming#base-rarity-score) cộng thêm khi chúng lớn lên. Điều này giúp chống lại biến số giữa các Haunt và thưởng cho sự tương tác lâu dài.

Để có thêm thông tin, hãy xem qua trang [Cơ chế trưởng thành](/aging-mechanic).



## Trait Mappings

These 6 traits are the base traits. To turn Aavegotchi into a full-fledged game in the [Gotchiverse](/gotchiverse), we need more nuanced variables.

Find out what these base traits map into in the [Trait Mappings page](/trait-mappings).