---
author: Unintelligent Nerd
date: '2020-04-23T07:00:00.000Z'
title: 'Cơ Chế Trưởng Thành'
description: 'Cơ Chế Trưởng Thành'
contributors:
  - "unintelligent-nerd"
---

Your gotchi friends are alive! Like you, too, they age — growing from infancy to adulthood.

Remember to celebrate your lil fren's birthday! They have one as well!

<div class="headerImageContainer">
<img class="headerImage" src="/aging-mechanic/aging-mechanic.png">
<p class="headerImageText">Deckaard Caain: Stay awhile and listen</p>
</div>

<div class="contentsBox">

**Nội dung**

<ol>
<li><a href=#rationale>Rationale</a></li>
<li><a href=#brs-boost>BRS Boost</a></li>
</ol>

</div>

## Rationale

[Aavegotchi Improvement Proposal 13](/aavegotchi-improvement-proposals#add-an-aging-mechanic-to-affect-aavegotchi-rarity-scores) giới thiệu về cơ chế trưởng thành dành cho Aavegotchi.

Gotchis would receive a small boost to their [BRS](/rarity-farming#base-rarity-score) as they age. Điều này giúp chống lại biến số giữa các Haunt và thưởng cho sự tương tác lâu dài.

This provides a buffer of approximately 6 months during which older gotchis have a BRS boost over newly summoned gotchis. Khi những gotchi vừa mới được triệu hồi lớn dần, chúng sẽ nhanh chóng bắt kịp với những đối thủ già cõi hơn.

The formula that is used to calculate the BRS boost is modeled after the Fibonacci numbers x 1 million, but replacing the first 0 with a 1 to better fit the use case.

This solution provides for a quicker boost in the first few epochs of age, and greatly flattens over time to avoid anything too OP and allow more recently summoned gotchis to **eventually** catch up to **within a 1 BRS boost** of their older and wiser brethren. Nó mang đến phần thưởng khuyến khích cho việc mở và triệu hồi gotchi từ cổng thay vì cứ khăng khăng giữ chúng, cả hai việc đều giúp tăng trưởng nền kinh tế trong game cũng như độ hiếm cũng chiếc cổng vẫn được giữ nguyên không mở. Hơn hết, đây là một hệ thống công bằng, không mang đến lợi ích cho riêng thế hệ haunt nào cả, và đơn giản là tưởng thưởng cho sự tương tác lâu dài, cũng như chống lại hiệu ứng của việc thay đổi mạnh mẽ và bất thình lình mà chúng ta đang thấy gần đây.

## BRS Boost

table_brsBoost

