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

Base Rarity Score (BRS) có được từ tổng số điểm độ hiếm trait của Aavegotchi, các trang bị đã mặc lên và [tuổi](/aging-mechanic) của chúng.

#### Trait BRS

BRS của các trait thuộc về Aavegotchi được tính theo công thức:

```
if (number < 50) return 100 - number;
    else return number + 1;
```

*Nếu giá trị đặc tính **thấp hơn** 50, thì BRS = 100 - giá trị đặc tính*

*Nếu giá trị đặc tính **cao hơn** 50, thì BRS = giá trị đặc tính + 1*

#### Wearables BRS

Wearables BRS thì lại dựa vào độ hiếm của nó. Ví dụ [wearables](/wearables) rare sẽ cho 5BRS và wearables godlike sẽ cho 50 BRS.

#### Age

Khi Gotchi lớn lên, chúng sẽ nhận thêm BRS. Để có thêm thông tin, hãy xem qua trang [Cơ chế trưởng thành](/aging-mechanic).

### Absolute Rarity Score

Absolute Rarity Score (ARS) có được từ độ hiếm nhất định trong trait của Aavegotchi trong cả hệ sinh thái Aavegotchi. Ví dụ, nếu có nhiều người chơi train Aavegotchi của mình để có Cấp Độ Năng Lượng cao nhất, vậy thì ARS dành cho Cấp Độ Năng Lượng cao - TURNT sẽ thấp hơn Cấp Độ Năng Lượng thấp nhất - WASTED. ARS được thính theo phần trăm đối với mỗi trait của Aavegotchi. Vậy nên ví dụ nếu tất cả Aavegotchi sở hữu một trait với trạng thái WASTED thì trait này sẽ mang đến 95 cho ARS đặc điểm năng luowjgn của Aavegotchi.

### Final Rarity Score

<b>Final Rarity Score = Traits BRS + Wearables BRS + Traits ARS</b>

Ví dụ về cách tính Final Rarity Score được thể hiện phía dưới:

table_RarityScoreCalculationTable
<p style="margin-left: 2.8em"><i>BRS là viết tắt của Base Rarity Score; ARS là viết tắt của Absolute Rarity Score</i></p>

**Công thức tính ARS vẫn chưa hoàn chỉnh. Do đó, giá trị trên cột ARS chỉ mang tính chất tượng trưng.**

## Phần thưởng

Trong mỗi giai đoạn (AavegotchiDAO sẽ quyết định thời lượng), một vài Aavegotchi hết nhất với <b>Final Rarity Score cao nhất</b> sẽ nhận được thưởng GHST (có được từ tất cả những đợt sale bao gồm cả GHST) mà có thể nhận từ người chủ của mình.

Khi mới bắt đầu, sẽ có ba loại Phần Thưởng cho Người Chơi:

* Aavegotchi Rarity Scores (tính bằng BRS, ARS sẽ được thêm trong mùa sau)
* Top [Điểm Kinship](/traits#kinship) Cao Nhất
* [Kinh nghiệm](/traits#experience)

Với mỗi hạng mục, giải thưởng dành cho rarity farming sẽ được phân phối dựa trên đường cong giảm dần, trong đó chỉ một số Aavegotchi trên đỉnh có thể kiếm được nhiều hơn những Gotchi nằm ở phần dưới của đường cong. Sẽ có những điểm cắt mà ở Gotchi nào ở dưới điểm đó sẽ không nhận được phần thưởng. Vậy nên hãy cố gắng hết sức để nằm ở trên điểm cắt đó. Thế nào rồi bạn cũng thắng được chút ít mà thôi! (Xem thêm về [Rarity Farming Season 1](https://aavegotchi.medium.com/aavegotchi-rarity-farming-season-1-rewards-finalized-2db81e9f66e8), top 5000 Gotchi trong mỗi hạng mục sẽ nhận được giải thưởng từ rarity farming).

Lượng phần thưởng phân bổ cho từng hạng mục sẽ được quyết định bởi AavegotchiDAO.

Sẽ có nhiều hạng mục được thêm vào, khi trò chơi tiếp tục phát triển.

Phần thưởng sẽ được phân phát mỗi hai tuần thông qua snapshot trên snapshot. Ban đầu, quá trình này sẽ được team Pixelcraft tự quản lý, những về sau nó sẽ được tự động giải quyết bởi DAO. Sau mỗi lần snapshot, giải thưởng có thể được nhận bởi tất cả những người nông dân thành công trong việc cày độ hiếm và vòng đua top kế tiếp sẽ bắt đầu ngay lập tức.

Giải thưởng GHST dành cho Rarity Farming được tài trợ bằng cách nào? [40% trong số tổng lượng GHST được dùng để mua wearables, consumables, và những vật phẩm game khác được chuyển lại vào quỹ giải thưởng dành cho Rarity Farming](https://aavegotchi.medium.com/rarity-farming-has-arrived-heres-how-to-play-1f1d3342dbc8).

Điểm độ hiếm cuối cùng của một Aavegotchi trong cả Vũ Trụ Aavegotchi vẫn đang biến đổi không ngừng khi người chơi triệu hồi Aavegotchi, trang bị các wearable, và nâng cấp cho Aavegotchi. Do đó, người chơi phải có những quyết định chiến thuật với cách mà họ train và trang bị cho Aavegotchi. Đây là cách mà cơ chế rarity farming trong Aavegotchi khuyến khích lối chơi chiến thuật và sự tham gia tích cực từ phía người chơi, rồi thưởng cho những anh "nông dân" chịu cày cuốc trên những vụ mùa ma quái của mình nhất.

Hiện tại thì không có giới hạn đối với số lần tương tác mà một Aavegotchi có thể thực hiện trong mỗi giai đoạn, những nếu một hoạt động nào đó của bot trở thành vấn đề thì AavegotchiDAO có thể vote để thêm biện pháp ngăn chặn chúng.

### Các Mùa Rarity Farming

Rarity Farming được chia thành các mùa khác nhau. Mỗi mùa có các hạng mục riêng, kích thước quỹ giải thưởng và đường cong phân bố giải thưởng.

Để xem dữ liệu phần thưởng Rarity Farming của các mùa, hãy xem qua [trang](/rarity-farming-seasons) này.

### Thu Thập Phần Thưởng Từ Rarity Farming

Phần Thưởng Dành cho Rarity Farming đã được trả về ví của Aavegotchi (Đúng vậy! Mỗi Gotchi có riêng cho mình một túi hành trang cá nhân!).

Trước tiên, hãy truy cập vào [trang My Aavegotchis](https://aavegotchi.com/aavegotchis). Nhấp vào một Aavegotchi bất kỳ. Ở góc phải phía dưới của màn hình, sẽ có nút "Pocket". Nhấp vào đó để xem túi đồ của Aavegotchi. Bạn có thể xem được lượng GHST mà Gotchi nhận được từ Rarity Farming (cũng như những món vật phẩm đã được trang bị).