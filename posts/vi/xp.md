---
author: Unintelligent Nerd
date: '2020-04-23T07:00:00.000Z'
title: 'Aavegotchi Experience (XP)'
description: 'Học về Aavegotchi Experience (XP) tại đây!'
contributors:
  - "unintelligent-nerd"
---

Aavegotchi lên cấp khi nó nhận được nhiều kinh nghiệm (XP). Nhưng chính xác thì nó cần bao nhiêu XP ở mỗi cấp? Những người thích phân tích số liệu, chúng tôi có một vài con số cho các bạn đây!

<div class="contentsBox">

**Nội dung**

<ol>
<li><a href=#gaining-xp>Gaining XP</a></li>
<li><a href=#formula>Công thức</a></li>
<li><a href=#experience-table>Experience Table</a></li>
<li><a href=#tracking-xp-received>Tracking XP received</a></li>
</ol>

</div>

## Gaining XP
Aavegotchi có thể nhận được kinh nghiệm (XP) khi:
* Bỏ phiếu cho những đề xuất quan trọng trong [AavegotchiDAO](/dao)
* Tham gia vào các sự kiện được tổ chức trong Aavegotchi Discord (một bản Typeform sẽ được công bố trong sự kiện để mọi người có thể hoàn thành và nhận được XP cho Gotchi)
* Chơi [mini-games](/minigames) (trong một thời gian nhất định, được công bố trên Discord)

## Công thức
The following formula is used to determine the XP required for the next level:

(Current Level ^ 2) ÷ Constant, where Constant = 0.02

## Experience Table

The table below shows the XP required for each level. Before delving into the data, here are some helpful definitions of the key terms used:

* Current Level: Current Level of your Gotchi
* Next Level: Next Level of your Gotchi
* XP: Experience required to reach the next level that is specified in the **Next Level** column
* Difference: Difference in the XP required to reach the level in the **Next Level** column compared to the same column in the previous row
* Constant: A fixed value that is used in the computation of the XP required for the next level Formula

The maximum level that an aavegotchi could attain is 99. Any changes to the maximum level could be done through [AavegotchiDAO](/dao) proposals.

*Note: Aavegotchis start at Level 1. "Level 0" is included in the table for individuals who are interested to apply the formula and observe how XP computation works.*

table_XP

## Tracking XP received

Our frenly [aarchitect](/aarchitect) Frank Pfeift has created an application to track the XP that a Gotchi has received over its lifetime.

His app can be accessed [here](https://aavegotchi-xp-dashboard.vercel.app). Your Gotchi ID is the digits that are found at the end of the URL at your [Gotchi Profile Page](/aavegotchi-profile).