---
author: Unintelligent Nerd
date: '2020-04-23T07:00:00.000Z'
title: 'Aging Mechanic'
description: 'Aging Mechanic'
contributors:
  - "unintelligent-nerd"
---

Những người bạn gotchi của bạn đang sống! Cũng tương tự như như bạn, chúng lớn lên, từ em bé thành người lớn.

Hãy nhớ tổ chức sinh nhật cho người bạn nhỏ của mình nhé! Chúng cũng có sinh nhật đấy!

<div class="headerImageContainer">
<img class="headerImage" src="/aging-mechanic/aging-mechanic.png">
<p class="headerImageText">Deckaard Caain: Hãy ở lại và lắng nghe nhé</p>
</div>

<div class="contentsBox">

**Nội dung**

<ol>
<li><a href=#rationale>Nguyên tắc hoạt động</a></li>
<li><a href=#brs-boost>Tăng BRS</a></li>
</ol>

</div>

## Nguyên tắc hoạt động

[Aavegotchi Improvement Proposal 13](/aavegotchi-improvement-proposals#add-an-aging-mechanic-to-affect-aavegotchi-rarity-scores) giới thiệu về cơ chế trưởng thành dành cho Aavegotchi.

Gotchis sẽ nhận được một lượng [BRS](/rarity-farming#base-rarity-score) cộng thêm khi chúng lớn lên. Điều này giúp chống lại biến số giữa các Haunt và thưởng cho sự tương tác lâu dài.

Nó tạo ra bước đệm khoảng 6 tháng trong suốt khoảng thời gian mà những gotchi lớn tuổi có được sự tặng trưởng BRS so với những gotchi vừa mới được triệu hồi. Khi những gotchi vừa mới được triệu hồi lớn dần, chúng sẽ nhanh chóng bắt kịp với những đối thủ già cõi hơn.

Trên tinh thần sử dụng những con số xảy ra trong tự nhiên, công thức này được đinh hình sau những số Fibonacci được nhân lên với 1 triệu, nhưng việc loại bỏ đi số 0 và 1 đầu tiên có vẻ hợp lý hơn cho trường hợp này.

Giải pháp này giúp tăng chỉ số một cách nhanh chóng chỉ trong một vài epoch, và san phẳng rõ rệt theo thời gian để tránh tình trạng các gotchi trở nên quá mạnh và cho phép những gotchi được triệu hồi gần đây có thể theo kịp chỉ trong 1 lần cộng thêm BRS cho gotchi lớn tuổi và từng trải hơn. Nó mang đến phần thưởng khuyến khích cho việc mở và triệu hồi gotchi từ cổng thay vì cứ khăng khăng giữ chúng, cả hai việc đều giúp tăng trưởng nền kinh tế trong game cũng như độ hiếm cũng chiếc cổng vẫn được giữ nguyên không mở. Hơn hết, đây là một hệ thống công bằng, không mang đến lợi ích cho riêng thế hệ haunt nào cả, và đơn giản là tưởng thưởng cho sự tương tác lâu dài, cũng như chống lại hiệu ứng của việc thay đổi mạnh mẽ và bất thình lình mà chúng ta đang thấy gần đây.

## Tăng BRS

table_brsBoost

