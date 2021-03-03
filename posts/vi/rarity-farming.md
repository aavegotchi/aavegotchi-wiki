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
<p> <a href=#final-rarity-score>Final Rarity Score</a></p>
<li><a href=#rewards>Phần thưởng</a></li>
</ol>

</div>

## **Làm thế nào để có thể Farm Rarity?**
Có nhiều cách để bạn có thể tham gia vào hoạt động rarity farming. Bao gồm:

* **Hãy cẩn thận khi chọn một Aavegotchi với đặc điểm hiếm trong quá trình triệu hồi**

* **Trang bị [wearables](/posts/wearables) để có thể điều chỉnh đặc điểm cho Aavegotchi của mình**

* **Tương tác với minigame**

Để có nhiều thông tin hơn, hãy theo dõi đường link dẫn ở phần sidebar.

Điều này có nghĩa là độ hiếm của mỗi Aavegotchi là có động lực và sẽ thay đổi theo thời gian, khi sự phân bổ của các đặc điểm và phụ kiện trong thế giới của Aavegotchi thay đổi. Nói cách khác, sẽ không đơn giản chỉ có chiến thuật tăng cao một đặc điểm nào đó trong Aavegotchi của bạn. Bạn cũng cần phải xem xét hành động của người chơi khác. Ví dụ, nếu có quá nhiều người muốn chơi những bé gochi thành đánh nhau với điểm hiếu chiến cao, thì những đặc điểm này sẽ trở nên ít hiếm hơn, và độ hiếm Aavegotchi của bạn sẽ giảm xuống.

## **Tính Toán Độ Hiếm**

Có hai loại điểm độ hiếm trong trò chơi - Base Rarity Score (dành cho traits and wearables) & Absolute Rarity Score.

### Base Rarity Score

Base Rarity Score (BRS) có được từ độ hiếm tổng quan của cả đặc điểm và những phụ kiện được trang bị cho Aavegotchi.

#### Trait BRS

BRS của các trait thuộc về Aavegotchi được tính theo công thức:

```
if (number < 50) return 100 - number;
    else return number + 1;
```

*If trait value is **less than** 50, BRS = 100 - trait value*

*If trait value is **equal to or greater than** 50, BRS = trait value + 1*

#### Wearables BRS

Wearables BRS on the other hand, is dependent on its rarity. For example, rare [wearables](https://wiki.aavegotchi.com/en/wearables) yield 5 BRS and godlike wearables 50 BRS.

### Absolute Rarity Score

Absolute Rarity Score (ARS) is derived from the particular rarity of the Aavegotchi's traits in the overall Aavegotchi ecosystem. For example, if a lot of players have trained their Aavegotchis to have highest Energy Level, then the ARS for high Energy Level - TURNT would be lower than that of lowest Energy Level - WASTED. ARS is calculated in terms of percentiles out of 100 for each of the Aavegotchi traits. So if 5% of all Aavegotchis possess a WASTED trait for example, then the WASTED trait will contribute to a total score of 95 to the Aavegotchi's energy trait ARS.

### Final Rarity Score

<b>Final Rarity Score = Traits BRS + Wearables BRS + Traits ARS</b>

Example of the Final Rarity Score calculation is as shown below:

table_RarityScoreCalculationTable
<p style="margin-left: 2.8em"><i>BRS denotes Base Rarity Score; ARS denotes Absolute Rarity Score</i></p>

## Phần thưởng

In each period (length determined by AavegotchiDAO), the few rarest Aavegotchis with the **highest Final Rarity Scores** will receive a distribution of GHST rewards (derived from all sales involving GHST) that can be claimed by their owners.

Initially, there will be three categories of rewards:
* Top 100 Aavegotchi hiếm nhất (theo BRS, ARS, sắp tiến hành)
* Top 100 Aavegotchi Có Điểm [Kinship](/traits#kinship) Cao Nhất
* Top 100 [Nhiều Experience (XP)](/traits#experience) Nhất

The proportion of rewards allocated to each of the categories will be decided by the AavegotchiDAO.

More categories will be added later as the Aavegotchi game continues to develop.

Player Rewards will be distributed every two weeks via onchain snapshots. Initially, this will be a manual process handled by Pixelcraft, but eventually can be automated by the DAO. After each snapshot, rewards can be claimed by all successful rarity farmers and the next round immediately begins.

How are the GHST rewards for Rarity Farming funded? [40% of all GHST spent from wearables, consumables, and other game items are redirected into the Rarity Farming rewards pool](https://aavegotchi.medium.com/rarity-farming-has-arrived-heres-how-to-play-1f1d3342dbc8).

The final rarity score of an Aavegotchi in the overall Aavegotchi Universe is constantly shifting as players summon more Aavegotchis, equip more wearables, and level up their Aavegotchis. Thus, players must make strategic decisions on how they train and equip their Aavegotchis. That is how Aavegotchi's rarity farming encourage thoughtful gameplay and active participation from users, while rewarding the best farmers for their ghostly harvests.

There is currently no limit to how many interactions an Aavegotchi can perform each period, but if bot activity became a problem then the AavegotchiDAO could vote to add circuit breakers to reduce bot activity.



