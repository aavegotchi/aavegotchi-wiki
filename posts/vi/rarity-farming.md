---
author: wagyuchicken
date: '2020-04-23T07:00:00.000Z'
title: 'Rarity Farming'
description: 'Mọi thứ bạn cần biết về Rarity Farming!'
contributors:
  - "cinnabarhorse"
  - "wagyuchicken"
  - "appellants"
---

<div class="headerImageContainer">
<img class="headerImage" src="/rarity-farming/rarity-farming.png">
<p class="headerImageText">Một Rarity Farmer</p>
</div>

**Giới thiệu**

Rarity farming là một cơ chế chơi game đột phá được đi đầu bởi Aavegotchi. Nó được thiết kế thể tưởng thưởng cho những người dùng tương tác một cách có chiến thuật và tích cực nhất với hệ sinh thái. Như thể hiện ở cái tên của nó, đây là quá trình mà bạn cố gắng nuôi nấng những bé Aavegotchi hiếm nhất, và nhận phần thưởng cho việc đó.

Trang wiki này sẽ giải thích cách mà bạn có thể tương tác trong rarity farming, và cách mà Aavegotchi được định hình. Hãy đọc tiếp đẻ hiểu thêm nhé!

<div class="contentsBox">

**Nội dung**

<ol>
<li><a href=#how-do-i-rarity-farm->Làm thế nào để có thể Farm Rarity?</a></p>
<li><a href=#calculating-rarity>Cách tính Rarity</a></li>
<p><a href=#base-rarity-score>Base Rarity Score</a></p>
<p><a href=#absolute-rarity-score>Absolute Rarity Score</a></p>
<p><a href=#final-rarity-score>Final Rarity Score</a></p>
<li><a href=#rewards>Phần thưởng</a></li>
<p><a href=#rarity-farming-seasons>Các Mùa Rarity Farming</a></p>
<p><a href=#collecting-rarity-farming-rewards>Thu Thập Phần Thưởng Từ Rarity Farming</a></p>
</ol>

</div>

## **Làm thế nào để có thể Farm Rarity?**
Có nhiều cách để bạn có thể tham gia vào hoạt động rarity farming. Bao gồm:

* **Hãy cẩn thận khi chọn một Aavegotchi với đặc điểm hiếm trong quá trình triệu hồi**

* **Trang bị [wearables](/wearables) để có thể điều chỉnh đặc điểm cho Aavegotchi của mình**

* **Tương tác trong [mini-games](/minigames)**

Để có nhiều thông tin hơn, hãy theo dõi đường link dẫn ở phần sidebar.

Điều này có nghĩa là độ hiếm của mỗi Aavegotchi là có động lực và sẽ thay đổi theo thời gian, khi sự phân bổ của các đặc điểm và phụ kiện trong thế giới của Aavegotchi thay đổi. Nói cách khác, sẽ không đơn giản chỉ có chiến thuật tăng cao một đặc điểm nào đó trong Aavegotchi của bạn. Bạn cũng cần phải xem xét hành động của người chơi khác. Ví dụ, nếu có quá nhiều người muốn chơi những bé gochi thành đánh nhau với điểm hiếu chiến cao, thì những đặc điểm này sẽ trở nên ít hiếm hơn, và độ hiếm Aavegotchi của bạn sẽ giảm xuống.

## **Tính Toán Độ Hiếm**

Có hai loại điểm độ hiếm trong trò chơi - Base Rarity Score (dành cho traits and wearables) & Absolute Rarity Score.

### Base Rarity Score

Base Rarity Score (BRS) is derived from the overall rarity of both the Aavegotchi's traits, equipped wearables, and their [age](/aging-mechanic).

#### Trait BRS

BRS của các trait thuộc về Aavegotchi được tính theo công thức:

```
if (number < 50) return 100 - number;
    else return number + 1;
```

*Nếu giá trị đặc tính **thấp hơn** 50, thì BRS = 100 - giá trị đặc tính*

*Nếu giá trị đặc tính **cao hơn** 50, thì BRS = giá trị đặc tính + 1*

#### Wearables BRS

Wearables BRS thì lại dựa vào độ hiếm của nó. For example, rare [wearables](/wearables) yield 5 BRS and godlike wearables 50 BRS.

#### Age

As your gotchi ages, they gain additional BRS. For more information, check out the [Aging Mechanic](/aging-mechanic) page.

### Absolute Rarity Score

Absolute Rarity Score (ARS) is derived from the particular rarity of the Aavegotchi's traits in the overall Aavegotchi ecosystem. For example, if a lot of players have trained their Aavegotchis to have highest Energy Level, then the ARS for high Energy Level - TURNT would be lower than that of lowest Energy Level - WASTED. ARS is calculated in terms of percentiles out of 100 for each of the Aavegotchi traits. So if 5% of all Aavegotchis possess a WASTED trait for example, then the WASTED trait will contribute to a total score of 95 to the Aavegotchi's energy trait ARS.

### Final Rarity Score

<b>Final Rarity Score = Traits BRS + Wearables BRS + Traits ARS</b>

Example of the Final Rarity Score calculation is as shown below:

table_RarityScoreCalculationTable
<p style="margin-left: 2.8em"><i>BRS denotes Base Rarity Score; ARS denotes Absolute Rarity Score</i></p>

**The formula for ARS is not determined yet. As a result, the values in the ARS column in the above table are imaginary.**

## Phần thưởng

In each season of Rarity Farming, the rarest Aavegotchis will receive a distribution of GHST rewards (derived from all sales involving GHST) that can be claimed by their owners.

Initially, there were 3 categories of rarity farming rewards:

* Aavegotchi Rarity Scores (tính bằng BRS, ARS sẽ được thêm trong mùa sau)
* Top [Điểm Kinship](/traits#kinship) Cao Nhất
* [Kinh nghiệm](/traits#experience)

For each category, rarity farming rewards are distributed based on a descending curve, with the top few Aavegotchis earning more GHST rewards than other Gotchis who are positioned lower on the curve. There will be a cut-off point where Gotchis below that point do not receive any rewards. So try your best to be above that cut-off point. You will at least win something! (For [Rarity Farming Season 1](https://aavegotchi.medium.com/aavegotchi-rarity-farming-season-1-rewards-finalized-2db81e9f66e8), the top 5000 Gotchis in each category would qualify for rarity farming rewards).

The proportion of rewards allocated to each of the categories will be decided by the AavegotchiDAO.

More categories will be added later as the Aavegotchi game continues to develop.

Player Rewards will be distributed every two weeks via onchain snapshots. Initially, this will be a manual process handled by Pixelcraft, but eventually can be automated by the DAO. After each snapshot, rewards can be claimed by all successful rarity farmers and the next round immediately begins.

How are the GHST rewards for Rarity Farming funded? [40% of all GHST spent from wearables, consumables, and other game items are redirected into the Rarity Farming rewards pool](https://aavegotchi.medium.com/rarity-farming-has-arrived-heres-how-to-play-1f1d3342dbc8).

The final rarity score of an Aavegotchi in the overall Aavegotchi Universe is constantly shifting as players summon more Aavegotchis, equip more wearables, and level up their Aavegotchis. Thus, players must make strategic decisions on how they train and equip their Aavegotchis. That is how Aavegotchi's rarity farming encourage thoughtful gameplay and active participation from users, while rewarding the best farmers for their ghostly harvests.

There is currently no limit to how many interactions an Aavegotchi can perform each period, but if bot activity became a problem then the AavegotchiDAO could vote to add circuit breakers to reduce bot activity.

### Các Mùa Rarity Farming

Rarity Farming is divided into different seasons. Each season has its own competition categories, size of reward pool, and reward distribution curve.

For data pertaining to the Rarity Farming Seasons, check out this [page](/rarity-farming-seasons).

### Thu Thập Phần Thưởng Từ Rarity Farming

Rarity Farming Rewards are disbursed to your Aavegotchi inventories (Yes! Each of your Aavegotchi has their own personal inventory!).

Trước tiên, hãy truy cập vào [trang My Aavegotchis](https://aavegotchi.com/aavegotchis). Click on any one of your Aavegotchi. Ở góc phải phía dưới của màn hình, sẽ có nút "Pocket". Click on it to view your Aavegotchi's inventory. You can see the amount of GHST your Gotchi has won from Rarity Farming (as well as their equipped wearables).