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
<li><a href=#gaining-xp>Kiếm XP</a></li>
<li><a href=#formula>Công thức</a></li>
<li><a href=#experience-table>Bản Kinh Nghiệm</a></li>
<li><a href=#claiming-xp>Claiming XP</a></li>
<li><a href=#tracking-xp-received>Tracking XP received</a></li>
</ol>

</div>

## Kiếm XP
Aavegotchi có thể nhận được kinh nghiệm (XP) khi:
* Bỏ phiếu cho những đề xuất quan trọng trong [AavegotchiDAO](/dao)
* Tham gia vào các sự kiện được tổ chức trong Aavegotchi Discord (một bản Typeform sẽ được công bố trong sự kiện để mọi người có thể hoàn thành và nhận được XP cho Gotchi)
* Chơi [mini-games](/minigames) (trong một thời gian nhất định, được công bố trên Discord)

## Công thức
Công thức sau được dùng để xác định lượng XP cần có để lên cấp tiếp theo:

(Cấp độ hiện tại ^ 2) ÷ Hằng số, với hằng số = 0.02

## Bản Kinh Nghiệm

Bản dưới đây cho thấy lượng XP cần có cho mỗi cấp. Trướng khi đào sâu vào dữ liệu, ở đây có một vài định nghĩa hữu ích cũng những thuật ngữ then chốt sẽ được dùng:

* Cấp Hiện Tại: Cấp Hiện Tại của Gotchi
* Cấp Tiếp Theo: Cấp Tiếp Theo của Gotchi
* XP: Kinh nghiệm nhận được khi đạt đến cấp độ tiếp theo, được chỉ ra trong cột **Next Level**
* Khác biệt: Khác biệt trong XP được yêu cầu để có thể đạt được cấp độ trong cột **Next Level** khi so sánh với cột tương tự trong hàng trước
* Hằng số: Một gái trị cố định được dùng trong việc tính toán lượng XP cần để dùng Công Thức Tính Cấp Tiếp Theo

Cấp độ cao nhất mà một aavegotchi có thể đạt được là 99. Bất kỳ sự thay đổi nào về cấp độ tối đã có thể được chấp thuận thông qua những đề nghị của [AavegotchiDAO](/dao).

*Chú ý: Aavegotchi bắt đầu với Cấp Độ 1. "Level 0" bao gồm trong bảng dành cho những ai muốn áp dụng công thức và xem XP được tính như thế nào.*

table_XP

## Claiming XP

XP has to be claimed manually at the airdrop page here: https://dapp.aavegotchi.com/u/[XXXXX]/airdrops.

Replace the [XXXXX] with your wallet address in the URL above.

After voting on an [Aavegotchi Improvement Proposal (AGIP)](/aavegotchi-improvement-proposals), all Aavegotchis you owned at the block the AGIP was created are eligible for the XP claim. There is a bulk claim ("CLAIM ALL") function that allows you to claim the XP for all AGIPs you have voted on. If the CLAIM ALL function fails, you can claim the XP for each AGIP individually.

## Tracking XP received

Our frenly [aarchitect](/aarchitect) Frank Pfeift has created an application to track the XP that a Gotchi has received over its lifetime.

His app can be accessed [here](https://aavegotchi-xp-dashboard.vercel.app). Your Gotchi ID is the digits that are found at the end of the URL at your [Gotchi Profile Page](/aavegotchi-profile).