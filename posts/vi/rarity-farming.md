---
author: wagyuchicken
date: "2025-09-18T00:00:00.000Z"
title: "Rarity Farming"
description: "Mọi thứ bạn cần biết về Rarity Farming!"
contributors: '["cinnabarhorse", "wagyuchicken", "appellants", "unintelligent-nerd"] ---'
---

<div class="headerImageContainer">
<img class="headerImage" src="/rarity-farming/rarity-farming.png">
<p class="headerImageText">Một Rarity Farmer</p>
</div>

Rarity farming is an innovative game mechanism pioneered by Aavegotchi. It strives to reward the users who are the most thoughtfully and enthusiastically engaged with the ecosystem. As its name suggests, this is a process where you attempt to raise the rarest Aavegotchis, and get rewarded for doing so.

This wiki page will explain how you can engage in rarity farming, and how the rarest Aavegotchis are determined. Keep reading to learn more!

<div class="contentsBox">

**Nội dung**

<ol>
<li><a href=#how-do-i-rarity-farm->Làm thế nào để có thể Farm Rarity?</a></p>
<li><a href=#components-of-rarity-score>Components of Rarity Score</a></li>
<li><a href=#calculating-rarity-score>Calculating Rarity Score</a></li>
<li><a href=#rewards>Phần thưởng</a></li>
<p><a href=#rarity-farming-seasons>Các Mùa Rarity Farming</a></p>
<p><a href=#collecting-rarity-farming-rewards>Thu Thập Phần Thưởng Từ Rarity Farming</a></p>
</ol>

</div>

## Làm thế nào để có thể Farm Rarity?


Có nhiều cách để bạn có thể tham gia vào hoạt động rarity farming. Bao gồm:

- **Hãy cẩn thận khi chọn một Aavegotchi với đặc điểm hiếm trong quá trình triệu hồi**

- **Trang bị [wearables](/wearables) để có thể điều chỉnh đặc điểm cho Aavegotchi của mình**

Để có nhiều thông tin hơn, hãy theo dõi đường link dẫn ở phần sidebar.

Điều này có nghĩa là độ hiếm của mỗi Aavegotchi là có động lực và sẽ thay đổi theo thời gian, khi sự phân bổ của các đặc điểm và phụ kiện trong thế giới của Aavegotchi thay đổi. Nói cách khác, sẽ không đơn giản chỉ có chiến thuật tăng cao một đặc điểm nào đó trong Aavegotchi của bạn. Bạn cũng cần phải xem xét hành động của người chơi khác. For instance, if other players [sacrifice](/traits#experience) a number of Gotchis to boost a particular Gotchi, they could overtake you on the Experience/XP category of the Rarity Farming leaderboards.

## Components of Rarity Score

### Base Rarity Score

Base Rarity Score (BRS) có được từ tổng số điểm độ hiếm trait của Aavegotchi, các trang bị đã mặc lên và [tuổi](/aging-mechanic) của chúng.

#### Trait BRS

BRS của các trait thuộc về Aavegotchi được tính theo công thức:

```
if (number < 50) return 100 - number;
    else return number + 1;
```

_Nếu giá trị đặc tính **thấp hơn** 50, thì BRS = 100 - giá trị đặc tính_

_Nếu giá trị đặc tính **cao hơn** 50, thì BRS = giá trị đặc tính + 1_

#### Wearables BRS

Wearables BRS thì lại dựa vào độ hiếm của nó. Ví dụ [wearables](/wearables) rare sẽ cho 5BRS và wearables godlike sẽ cho 50 BRS.

#### Age

Khi Gotchi lớn lên, chúng sẽ nhận thêm BRS. Để có thêm thông tin, hãy xem qua trang [Cơ chế trưởng thành](/aging-mechanic).

## Calculating Rarity Score

Example of Rarity Score calculation is as shown below:

table_RarityScoreCalculationTable

## Phần thưởng

In each season of Rarity Farming, the rarest Aavegotchis receive GHST rewards that can be claimed by their owners. Recent seasons (e.g., Season 10/11) have run on Base.

Khi mới bắt đầu, sẽ có ba loại Phần Thưởng cho Người Chơi:

- Aavegotchi Rarity Scores (tính bằng BRS, ARS sẽ được thêm trong mùa sau)
- Top [Điểm Kinship](/traits#kinship) Cao Nhất
- [Kinh nghiệm](/traits#experience)

Với mỗi hạng mục, giải thưởng dành cho rarity farming sẽ được phân phối dựa trên đường cong giảm dần, trong đó chỉ một số Aavegotchi trên đỉnh có thể kiếm được nhiều hơn những Gotchi nằm ở phần dưới của đường cong. Sẽ có những điểm cắt mà ở Gotchi nào ở dưới điểm đó sẽ không nhận được phần thưởng. Vậy nên hãy cố gắng hết sức để nằm ở trên điểm cắt đó. Thế nào rồi bạn cũng thắng được chút ít mà thôi!

Lượng phần thưởng phân bổ cho từng hạng mục sẽ được quyết định bởi AavegotchiDAO.

Sẽ có nhiều hạng mục được thêm vào, khi trò chơi tiếp tục phát triển. Some of these new one-off categories include:

- Rookie Kinship
- Rookie Experience/XP
- Gotchi Battler

Phần thưởng sẽ được phân phát mỗi hai tuần thông qua snapshot trên snapshot. Ban đầu, quá trình này sẽ được team Pixelcraft tự quản lý, những về sau nó sẽ được tự động giải quyết bởi DAO. Sau mỗi lần snapshot, giải thưởng có thể được nhận bởi tất cả những người nông dân thành công trong việc cày độ hiếm và vòng đua top kế tiếp sẽ bắt đầu ngay lập tức.

Giải thưởng GHST dành cho Rarity Farming được tài trợ bằng cách nào? [40% trong số tổng lượng GHST được dùng để mua wearables, consumables, và những vật phẩm game khác được chuyển lại vào quỹ giải thưởng dành cho Rarity Farming](https://aavegotchi.medium.com/rarity-farming-has-arrived-heres-how-to-play-1f1d3342dbc8).

Điểm độ hiếm cuối cùng của một Aavegotchi trong cả Vũ Trụ Aavegotchi vẫn đang biến đổi không ngừng khi người chơi triệu hồi Aavegotchi, trang bị các wearable, và nâng cấp cho Aavegotchi. Do đó, người chơi phải có những quyết định chiến thuật với cách mà họ train và trang bị cho Aavegotchi. Đây là cách mà cơ chế rarity farming trong Aavegotchi khuyến khích lối chơi chiến thuật và sự tham gia tích cực từ phía người chơi, rồi thưởng cho những anh "nông dân" chịu cày cuốc trên những vụ mùa ma quái của mình nhất.

Hiện tại thì không có giới hạn đối với số lần tương tác mà một Aavegotchi có thể thực hiện trong mỗi giai đoạn, những nếu một hoạt động nào đó của bot trở thành vấn đề thì AavegotchiDAO có thể vote để thêm biện pháp ngăn chặn chúng.

### Các Mùa Rarity Farming

Rarity Farming được chia thành các mùa khác nhau. Mỗi mùa có các hạng mục riêng, kích thước quỹ giải thưởng và đường cong phân bố giải thưởng.

For data pertaining to the Rarity Farming Seasons (including Base-era seasons), check out this [page](/rarity-farming-seasons) and the official blog.

### Thu Thập Phần Thưởng Từ Rarity Farming

Phần Thưởng Dành cho Rarity Farming đã được trả về ví của Aavegotchi (Đúng vậy! Mỗi Gotchi có riêng cho mình một túi hành trang cá nhân!).

Trước tiên, hãy truy cập vào [trang My Aavegotchis](https://aavegotchi.com/aavegotchis). Nhấp vào một Aavegotchi bất kỳ. Ở góc phải phía dưới của màn hình, sẽ có nút "Pocket". Nhấp vào đó để xem túi đồ của Aavegotchi. Bạn có thể xem được lượng GHST mà Gotchi nhận được từ Rarity Farming (cũng như những món vật phẩm đã được trang bị).
