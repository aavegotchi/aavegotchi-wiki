---
author: wagyuchicken
date: '2020-04-23T07:00:00.000Z'
title: 'Traits'
description: 'Mọi thứ bạn cần biết về trait của Aavegotchi!'
contributors:
  - "cinnabarhorse"
  - "wagyuchicken"
---

Aavegotchi được sinh ra với các trait. Giống như các đặc điểm để định hình rằng bạn là một con người, trait của Aavegotchi rất quan trọng trong việc định hình sự đống động của một bé ma! Những lại đặc điểm này mà chúng sở hữu có ảnh hưởng đến[Trait Base Rarity](/rarity-farming#base-rarity-score) của chúng, cách chúng thể hiện trong minigame và [wearables](/wearables) mà chúng được mặc. Những Aavegotchi được triệu hồi từ [portals](/portals) được sinh ra với tổ hợp những trait được chỉ định ngẫu nhiên. Tuy nhiên, trait của Aavegotchi có thể thay đổi được với <a href=#level>level</a>, những wearable được trang bị và những consumble đã dùng. 

<div class="contentsBox">

**Nội dung**

<ol>
<li><a href=#randomly-generated-traits>Randomly Generated Traits </a></li>
<li><a href=#kinship>Kinship</a></li>
<li><a href=#experience>Experience</a></li>
<li><a href=#level>Level</a></li>
<li><a href=#haunt>Haunt</a></li>
</ol>

</div>

## Randomly Generated Traits
Aavegotchi có sáu đặc điểm:

* AGG = Aggressiveness (Hiếu Chiến)
* NRG = Energy (Năng Lượng)
* SPK = Spookiness (Đáng Sợ)
* BRN = Brain Size (Kích Thước Não)
* EYS = Hình Dạng Mắt
* EYC = Màu Mắt

Khi dùng dùng thuật ngữ RPG (Role-playing Game), `AGG` cũng tưng tự với Strength, `NRG` tương tự với Agility, `BRN` tương tự với Intelligence, and `SPK` là một trait cao cấp. Hãy nhớ rằng những trait này không hoàn toàn giống với những RPG tiêu chuẩn; trait có giá trị thấp trong metaverse của Aavegotchi thực sự rất mạnh!

Trait được định hình ở thời điểm người chơi mở [Portal](/portal). Khi mở Portal [Chainlink’s VRF random number generator function](https://blog.chain.link/verifiable-random-functions-vrf-random-number-generation-rng-feature/) được gọi để chỉ định các giá trị trait ngẫu nhiên cho Aavegotchi. Những giá trị trait này được phân bố theo beell-curve, và mỗi trait sẽ được chỉ định một giá trị trong số các giá trị Common, Uncommon, Rare, hoặc Mythical, tuỳ theo độ hiếm của chúng. Tỷ lệ nhận được mỗi đặc điểm với độ hiếm được thể hiện trong bảng dưới đây:

table_TraitsProbabilities

Bell curve của việc phân bố giá trị triat sẽ nhìn giống như dưới đây:

<img class="bodyImage" src="/traits/bell_curve.png" alt = "bell curve" />

Mới đầu, Aaavegotchi sở hữu sáu trait, dù cho những trait này có thể tăng lên trong tương lai thông qua việc vote trong [AavegotchiDAO](/dao). Một số trait, như màu sắc cơ thể của Aavegotchi (không phải mà trắng cũ đơn sắc), sẽ được AavegotchiDAO quyết trong mỗi sự kiện haunt mới!

Không giống như những game khác, trong Aavegotchi, không hề có trait "tối ưu". Mỗi thuộc tính (trừ hình dạng và màu sắc của mắt) sẽ có những hiệu ứng khác nhau trong những minigame khác nhau. Ví dụ, Aavegotchi có năng lượng cao hơn sẽ đua tốt hơn, những sẽ chơi tốt trong những minigame thiền.

Bảng dưới đây thể hiện chi tiết các đặc điểm theo độ hiếm. *Chú ý: Hai bảng nên được xem như một. Nó đã được tách ra để có thể render trên thiết bị dị động*

table_TraitsByRarity1 table_TraitsByRarity2
<p style="margin-left: 3.0em"><i> (L) là viết tắt của "Low"; (H) là viết tắt của "High" </i></p>
<p style="margin-left: 3.0em"><i> *Những màu mắt phổ biến mang màu sắc của những tài sản ký gửi trên Aavegotchi của bạn. ví dụ màu cam dành cho aDAI, màu xanh da trời cho aAAVE, màu tím cho aETH, v.v. </i></p>

## Kinship
Kinship là độ trung thành mà Aavegotchi dành cho bạn. Kinship không được chỉ định ngẫu nhiên mà nó bắt đầu với mộ giá trị cố định là 50 và được triệu hồi và tăng lên hoặc giảm xuống dựa trên nhiều yếu tốt, ví dụ như khoảng thời gian mà Aavegotchi được ở bên cùng một chủ, và bao lâu thì chủ tương tác với nó một lần.

Đặc biệt, ở bên cạnh chủ càng lâu thì kinship sẽ càng cao, như bỏ roi bé Aavegotchi quá lâu thì cấp độ kinship sẽ giảm xuống. Aavegotchi không chỉ là những đường dẫn để bạn lưu giữ tài sản đầu tư của mình. Chúng là những chú ma có sức sống, thở được, và cần sức ảnh hưởng của bạn!

Cấp độ kinship cao có thể tăng cường sự thể hiện của Aavegotchi trong minigame, và cũng có thể giúp bạn nhân lên số phần thưởng trong GHST khi tham gia quản trị và [rarity farming](/rarity-farming). Kinship cấp độ thấp có thể có hiệu ứng ngược lại.

Một số cách để tăng cấp độ kinship cho Aavegotchi của bạn:
<ul>
<li>Aavegotchi được sinh ra với ý thức về sứ mệnh của một người công dân. Hãy mang Aavegotchi của bạn đến City Hall và cho nó vote trong AavegotchiDAO;</li>
<li>Tuy Aavegotchi là ma những chúng có những cơn đói cồn cào! Hãy cho Aavegotchi dùng những vật phẩm tiêu hao để chúng có thể cười rùng rợn;</li>
<li>Aavegotchi thích thử đồ mới. Hãy trang bị wearable mới cho Aavegotchi để thiết lập nên mối quan hệ gắn kết; </li>
<li>Aavegotchi cũng thích chơi! Hãy dẫn Aavegotchi đi ra ngoài nhảy múa ở Aavegotchi Realm và tăng cấp cho nó khi chơi minigame. </li>
</ul>

## Experience
Aavegotchi nhận được kinh nghiệm (XP) khi vote cho AavegotchiDAO và chơi minigame. Aavegotchi có thể được hi sinh để loại bỏ[tiền ký gửi được stake](/atokens) và chuyển tài sản đó sang cho một Aavegotchi khác. Aavegotchi đích sẽ nhận được 100% số kinh nghiệm mà Aavegotchi hi sinh sở hữu.

## Level
Aavegotchi lên cấp khi nó nhận được nhiều kinh nghiệm. Cứ mỗi ba cấp, Aavegotchi lại nhận được một [Spirit Point](/glossary#spirit-point) có thể phân phối vào để giúp tăng hoặc giảm một trait nhất định. Một số wearable chỉ có thể được mặc lên bởi những Aavegotchi ở một cấp độ nhất định.

For detailed information on the XP required for each level, click [here](/xp).

## Haunt
Like pioneers to the New World, Aavegotchis travel from the Nether Realm to the Ether Realm in groups known as Haunts. The initial Haunt contains 10,000 Aavegotchis. Thereafter, new Haunts must be approved for travel by the AavegotchiDAO. Some wearables can only be worn by Aavegotchis belonging to a certain Haunt.
