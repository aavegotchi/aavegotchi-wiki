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

*Nếu giá trị đặc tính **thấp hơn**50, thì BRS = 100 - giá trị đặc tính*

*Nếu giá trị đặc tính **thấp hơn**50, thì BRS = giá trị đặc tính + 1*

#### Wearables BRS

Wearables BRS thì lại dựa vào độ hiếm của nó. Ví dụ [wearables](https://wiki.aavegotchi.com/en/wearables) rare sẽ cho 5BRS và wearables godlike sẽ cho 50 BRS.

### Absolute Rarity Score

Absolute Rarity Score (ARS) có được từ độ hiếm nhất định trong trait của Aavegotchi trong cả hệ sinh thái Aavegotchi. Ví dụ, nếu có nhiều người chơi train Aavegotchi của mình để có Cấp Độ Năng Lượng cao nhất, vậy thì ARS dành cho Cấp Độ Năng Lượng cao - TURNT sẽ thấp hơn Cấp Độ Năng Lượng thấp nhất - WASTED. ARS được thính theo phần trăm đối với mỗi trait của Aavegotchi. Bởi vậy ví dụ nếu chỉ 5% Aavegotchi sỡ hữu đặc tính WASTED thì WASTED sẽ mang đến tổng cộng 95 điểm cho ARS của đặc tính năng lượng mà Aavegotchi sỡ hữu.

### Final Rarity Score

<b>Final Rarity Score = Traits BRS + Wearables BRS + Traits ARS</b>

Ví dụ về cách tính Final Rarity Score được thể hiện phía dưới:

table_RarityScoreCalculationTable
<p style="margin-left: 2.8em"><i>BRS là viết tắt của Base Rarity Score; ARS là viết tắt của Absolute Rarity Score</i></p>

*Công thức tính ARS vẫn chưa hoàn chỉnh. Do đó, giá trị trên cột ARS sẽ thay đổi.*

## Phần thưởng

Trong mỗi giai đoạn (AavegotchiDAO sẽ quyết định thời lượng), một vài Aavegotchi hết nhất với <b>Final Rarity Score cao nhất</b> sẽ nhận được thưởng GHST (có được từ tất cả những đợt sale bao gồm cả GHST) mà có thể nhận từ người chủ của mình.

Khi mới bắt đầu, sẽ có ba loại Phần Thưởng cho Người Chơi:
* Aavegotchi Rarity Scores (tính bằng BRS, ARS sẽ được thêm trong mùa sau)
* Top [Điểm Kinship](/traits#kinship) Cao Nhất
* [Kinh nghiệm](/traits#experience)

Với mỗi hạng mục, giải thưởng dành cho rarity farming sẽ được phân phối dựa trên đường cong giảm dần, trong đó chỉ một số Aavegotchi trên đỉnh có thể kiếm được nhiều hơn những Gotchi nằm ở phần dưới của đường cong. Sẽ có những điểm cắt mà ở Gotchi nào ở dưới điểm đó sẽ không nhận được phần thưởng. Vậy nên hãy cố gắng hết sức để nằm ở trên điểm cắt đó. Thế nào rồi bạn cũng thắng được chút ít mà thôi! (Xem thêm về [Rarity Farming Season 1](https://aavegotchi.medium.com/aavegotchi-rarity-farming-season-1-rewards-finalized-2db81e9f66e8), top 5000 Gotchi trong mỗi hạng mục sẽ nhận được giải thưởng từ rarity farming).

The proportion of rewards allocated to each of the categories will be decided by the AavegotchiDAO.

More categories will be added later as the Aavegotchi game continues to develop.

Player Rewards will be distributed every two weeks via onchain snapshots. Initially, this will be a manual process handled by Pixelcraft, but eventually can be automated by the DAO. After each snapshot, rewards can be claimed by all successful rarity farmers and the next round immediately begins.

How are the GHST rewards for Rarity Farming funded? [40% of all GHST spent from wearables, consumables, and other game items are redirected into the Rarity Farming rewards pool](https://aavegotchi.medium.com/rarity-farming-has-arrived-heres-how-to-play-1f1d3342dbc8).

The final rarity score of an Aavegotchi in the overall Aavegotchi Universe is constantly shifting as players summon more Aavegotchis, equip more wearables, and level up their Aavegotchis. Thus, players must make strategic decisions on how they train and equip their Aavegotchis. That is how Aavegotchi's rarity farming encourage thoughtful gameplay and active participation from users, while rewarding the best farmers for their ghostly harvests.

There is currently no limit to how many interactions an Aavegotchi can perform each period, but if bot activity became a problem then the AavegotchiDAO could vote to add circuit breakers to reduce bot activity.