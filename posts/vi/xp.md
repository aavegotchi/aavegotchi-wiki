---
author: Unintelligent Nerd
date: '2020-04-23T07:00:00.000Z'
title: 'Aavegotchi Experience (XP)'
description: 'Học về Aavegotchi Experience (XP) tại đây!'
contributors:
  - "unintelligent-nerd"
---

Aavegotchi lên cấp khi nó nhận được nhiều kinh nghiệm (XP). Nhưng chính xác thì nó cần bao nhiêu XP ở mỗi cấp? Data analysts, we have some numbers for you to crunch here!

<div class="contentsBox">

**Nội dung**

<ol>
<li><a href=#formula>Công thức</a></li>
<li><a href=#experience-table>Experience Table</a></li>
</ol>

</div>

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

*Note: Aavegotchis start at Level 1. "Level 0" is included in the table for individuals who are interested to apply the formula and observe how XP computation works.*

table_XP

