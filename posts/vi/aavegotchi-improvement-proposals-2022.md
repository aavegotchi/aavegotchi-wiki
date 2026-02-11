---
author: Coder Dan
date: '2020-04-23T07:00:00.000Z'
title: 'Aavegotchi Improvement Proposals (AGIPs)'
description: 'A list of Aavegotchi Improvement Proposals (AGIPs) in Year 2022'
contributors: [ "unintelligent-nerd" ]
---

<div class="contentsBox">

**Nội dung**

<ol>
<li><a href=#gotchiverse-patch-v0-1>Gotchiverse Patch v0.1</a></li>
<li><a href=#providing-ghst-liquidity-on-synfutures>Providing GHST Liquidity on SynFutures</a></li>
<li><a href=#creating-the-dao-treasury-taask-force>Creating the DAO Treasury Taask Force</a></li>
<li><a href=#adding-ghst-to-the-umbria-narni-bridge>Adding GHST to the Umbria Narni Bridge</a></li>
<li><a href=#launch-rarity-farming-szn-3>Launch Rarity Farming SZN 3</a></li>
<li><a href=#co-sponsoring-the-goodghosting-pool>Co-Sponsoring the GoodGhosting Pool</a></li>
<li><a href=#deposit-3m-treasury-ghst-into-aave>Deposit 3M Treasury GHST into Aave</a></li>
<li><a href=#delay-gotchiverse-land-auction---raffle-3>Delay Gotchiverse Land Auction & Raffle 3</a></li>
<li><a href=#reducing-the-parcel-vrf-variance>Reducing the Parcel VRF Variance</a></li>
<li><a href=#alternative-gotchiverse-trait-mapping>Alternative Gotchiverse Trait Mapping</a></li>
<li><a href=#extending-the-dao-treasury-task-force-multisig>Extending the DAO Treasury Task Force Multisig</a></li>
<li><a href=#24h-windows-for-alchemical-channeling>24h Windows for Alchemical Channeling</a></li>
<li><a href=#scheduling-land-auction-raffle--3-for-june>Scheduling Land Auction/Raffle #3 for June</a></li>
<li><a href=#launch-of-rf-szn-4>Launch of RF Szn 4</a></li>
<li><a href=#use-dyst-voting-power-to-support-vqi-qi-on-dystopia>Use DYST voting Power to Support vQi-Qi on Dystopia</a></li>
<li><a href=#change-harvester-recipes>Change Harvester Recipes</a></li>
<li><a href=#aavegotchidao----pixelcraft-studios-1-75m-dai-token-swap>AavegotchiDAO <> Pixelcraft Studios 1.75M DAI Token Swap</a></li>
<li><a href=#delay-the-3rd-land-auction>Delay the 3rd LAND Auction</a></li>
<li><a href=#utilizing-the-channeling--hot-zone->Utilizing the Channeling “Hot Zone”</a></li>
<li><a href=#configure-vp-for-amghst--wapghst--and-all-gltr-staking>Configure VP for amGHST, wapGHST, and all GLTR Staking</a></li>
<li><a href=#stop-new-brs-wearable-emissions-until-further-notice>Stop new BRS Wearable Emissions until further notice</a></li>
<li><a href=#modifying-the-channeling-window>Modifying the Channeling Window</a></li>
<li><a href=#sunsetting-frens-immediately>Sunsetting FRENS Immediately</a></li>
<li><a href=#update-gltr-emissions>Update GLTR Emissions</a></li>
<li><a href=#setting-limits-on-the-number-of-borrowed-gotchis-allowed-per-wallet-address>Setting limits on the number of borrowed gotchis allowed per wallet address</a></li>
<li><a href=#add-dao-liquidity-to-ghst-alchemica-pairs>Add DAO Liquidity to GHST-Alchemica Pairs</a></li>
<li><a href=#mint-and-transfer-50-dao-parcels-and-4m-fud-eq--of-alchemica-to-the-dtf-for-contributor-compensation>Mint and Transfer 50 DAO Parcels and 4M FUD Eq. of Alchemica to the DTF for Contributor Compensation</a></li>
<li><a href=#preventing-owners-from-channeling-gotchis-listed-for-lending>Preventing Owners From Channeling Gotchis Listed For Lending</a></li>
<li><a href=#creating-new-wearable-sets>Creating New Wearable Sets</a></li>
<li><a href=#enacting-a-bonding-curve-emergency-plan>Enacting a Bonding Curve Emergency Plan</a></li>
<li><a href=#the-forge---request-for-funding-and-development>The Forge - Request for Funding and Development</a></li>
<li><a href=#adjust-aaltar-spillover-rates>Adjust Aaltar Spillover Rates</a></li>
<li><a href=#create-aavegotchidao-foundation>Create AavegotchiDAO Foundation</a></li>
<li><a href=#election-for-dao-foundation-s-9-directors-multisig-signers>Election for DAO Foundation’s 9 Directors/Multisig-Signers</a></li>
<li><a href=#rarity-farming-season-5>Rarity Farming Season 5</a></li>
<li><a href=#channel-alchemica-by-burning-kinship>Channel Alchemica by Burning Kinship</a></li>
</ol>

</div>

### Gotchiverse Patch v0.1

**Aavegotchi Improvement Proposal #18**

**Proposal Summary:**

_Problem:_

Dù Gotchiverse vẫn chưa lên sóng nhưng bọn mình đã xác định được một vài khu vực mà bọn mình tin rằng nên được điều chỉnh trước khi game ra mắt, và muốn những khía cạnh này nhận được sự chú ý của cộng đồng để thảo luận và quyết định xem có nên thực thi hay không.

Để đảm bảo không có thay đổi nào khiến đảo lộn cả lô cập nhật, ban đầu chúng tôi đã tạo ra sáu bản đề xuất SigProp riêng. Bản CoreProp này kết hợp các bản SigProp đã thành công vào trong Bản vá Gotchiverse v0.1!

_Solution:_

Bản vá 0.1a

Sau khi bọn mình đã hoàn tất các chi tiết then chốt ví dụ như giá xây dựng và mức độ xây dựng trong bản Whitepaper sắp tới, bọn mình đã khám phá ra một trong những dự đoán chủ yếu của bọn mình đã đánh giá thấp số lượng Alchemica trong mỗi gói đất về mặt tổng số lượng. Bản vá sẽ giúp tăng lượng Alchemica của mỗi gói đất để chúng phù hợp với lượng token Alchemica, sự phân bổ, và mức xuất ban đầu.

Bản SigProp dành cho Bản vá 0.1a được thông qua với các con số như sau:

Yes: 13. GHST

No: 41.85k GHST

Bản vá 0.1b

Dù ý định ban đầu của bọn mình là làm cho boost chỉ có giá trị sử dụng một lần, nhưng rõ ràng nhiều thành viên trong cộng đồng lại hiểu rằng boost có thể tái tạo. Bản vá này sẽ cho phép boost tự tái tạo sau mỗi trận Đại Chiến.

Tuy nhiên, không giống như các gói đất, mức độ tái tạo là một số lượng cố định ở mỗi vòng. Ví dụ, một gói đất với "5" FUD tăng cường sẽ được tăng 5 FUD mỗi vòng.

Bản SigProp dành cho bản vá 0.1b cũng đã được thông qua một cách thuyết phục:

Yes: 10.36M GHST

No: 2.37M GHST

Bản vá 0.1c

Thậm chí khi Bản Vá 01. b đã được thông qua, boost vẫn sẽ có giá trị thấp nếu so với giá trị mà thị trường đã gán cho chúng, nếu so với một gói đất tương tự mà không có boost. Bản vé 0.1c đã đề xuất về việc tăng cường boost lên 5x để mang giá trị của boost đến gần hơn giá trị hiện tại trên thị trường.

Bản SigProp dành cho Bản vá 0.1c đã không thông qua và SẼ KHÔNG NẰM TRONG Bản vá v0.1:

Yes: 5.85M GHST

No: 8.04M GHST

Những bản SigProp trong tương lai sẽ được tạo ra để giải quyết từng phần của vấn đề này.

Bản vá 0.1d

Gotchiverse Litepaper đã đề cập rằng Kinship sẽ được trao đổi thành một lượng Alchemica, nghĩa là "đốt" kinship. Bọn mình chắc chắn muốn duy kỳ ý tương về việc dùng kinship để truyền nhưng sau khi suy nghĩ sâu hơn, giờ bọn mình tin rằng có cách tốt hơn để đạt được việc này.

Một giải pháp "thành tựu" không yêu cầu phải xóa kinship của Aavegotchi đã được đề xuất. Thay vào đó, những Aavegotchi có kinship cao sẽ truyền Alchemica ở mức cao hơn một chút, tùy vào mức thành tựu.

Bản SigProp dành cho Bản vá 0.1d cũng sẽ được thông qua:

Yes: 12.64M GHST

No: 431.93k GHST

Patch 0.1e & 0.1f

Các quận không tồn tại khi Citaadel trong bản Litepaper được xuất bản lần đầu. Khi nói vậy, bọn mình luôn tìm một khu vực hoặc nhóm khu vực dành cho Pixelcraft để phát triển những trải nghiệm chuyên sâu có thể tăng giá trị tổng thể của game. Likewise, one of our earliest ideas, (predating the Citaadel itself!) was to reserve a town square for real time DAO voting. Ý tưởng về việc có được những trải nghiệm quản trị được game hóa đã là một phần trong những ý tưởng đầu tiên, giúp ươm mầm cho chu cầu sở hữu một thế giới ảo dành riêng cho Aavegotchi.

Patch 0.1e & 0.1f proposed allocating 1000 parcels each to Pixelcraft and the AavegotchiDAO in D27/D30. Cả hai Bản Vá đề đã được thông qua một cách thuyết phục:

Yes: 11.94M GHST / 12.14M GHST

No: 615.78k GHST / 734.92k GHST

Tổng kết

Và đó là tất cả nội dung của Bản Vá Gotchiverse đầu tiên! Giờ đây sẽ tùy thuộc vào bạn, AavegotchiDAO, để quyết định xem Patch v0.1 sẽ được tiến hành hay không.

Phương án 1: Vâng, tiến hành bản vá v0.1

Phương án 2: Không, đừng tích hợp Bản vá v0.1

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/gotchiverse-paatch-v0-1-thread/2791)

Phương án 1: Vâng, tiến hành bản vá v0.1

Phương án 2: Không, đừng tích hợp Bản vá v0.1

**Voting Period:** 5 - 12 January 2022

**Results:**

table_agip18

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x396844d504394f7f335f070d443c33455300ee21d90db6c4b089760a3e0469bf)

<hr>

### Cung cấp thanh khoản cho GHST trên SyncFutures

**Aavegotchi Improvement Proposal #19**

**Proposal Summary:**

Kể từ khi Aavegotchi thu thập được nhiều thanh khoản trên các sàn DEX dạng Spot thì giờ đã đến lúc để tạo và tăng cường cho thị trường giao dịch Tương Lai. Các thị trường phái sinh tạo nền khối lượng giao dịch toàn cầu cực lớn và cho phép người dùng tận dụng khoản đầu tư của mình. Việc thêm thanh khoản cho GHST trên SynFutures cho phép người chơi tận dụng longs (shorts) trên thị trường tương lai của Aavegotchi. Nhưng tại sao lại là SynFutures?

Những nhà đầu tư và background khủng
SynFutures được đỡ đầu bởi Polychain, Pantera, Dragonfly, Framework, Standard Crypto, Woo, và nhiều hơn nữa. Background của team là sự kết hợp mạnh mẽ giữa tài chính truyền thống và DeFi. SynFutures là dự án duy nhất có thể hỗ trợ niêm yết bất kỳ tài sản nào, bởi bất kỳ ai, theo dạng mở (trong vòng 30 giây).

Security
Backed by solid experience from the TradFi financial engineering and DeFi protocol safety, SynFutures has many risk management features (e.g. anti-flashloan attack, EMA smoothing method, etc.) and has gone through external code audits.

Dễ dàng quản lý và bắt đầu sử dụng
SynFutures hỗ trợ mô hình một token để thêm thanh khoản, nghĩa là Aavegotchi Treasury chỉ cần gửi GHST thay vì gửi hai loại token và gặp phải nguy cơ tổn thất tạm thời. Bọn mình xin một khoảng GHST trị giá 200k USD để bắt đầu pool. Thanh khoản có thể được rút bất kỳ lúc nào.

Tiềm Năng Phát Triển
Khối lượng giao dịch và người dùng đang tăng lên nhanh chóng trên SynFutures. Trong ba tháng qua kể từ khi SynFutures Alpha được triển khai, bọn mình đã đạt được 47k người dùng và 1 tỷ khối lượng giao dịch. Tất cả việc này xảy ra mà không cần có token SynFutures, vốn có thể thu hút nhiều người dùng hơn.

Phân tích khối lượng
Quickswap vs SynFutures:
Tổng LP: 150k / 40k
Tổng số trader: 100k / 20k
Khối lượng giao dịch hàng ngày: $100M / $29M

Khối lượng giao dịch của SynFutures bằng 1/3 giao dịch trên Quickswap, số lượng trader bằng 1/5, tuy nhiên khối lượng giao dịch cho mỗi cặp có phần tập trung hơn. SynFutures có 108 cặp giao dịch trong khi Quickswap có hơn 22k cặp. Ví dụ, khối lượng giao dịch hàng ngày của MATIC-USDC trên SynFutures đóng vào khoảng 9 triệu USD, trong khi đó Quickswap đạt 14 triệu USD.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/provide-ghst-as-liquidity-on-the-derivatives-dex-synfutures/2664)

Phương án 1: Đồng ý, stake GHST trị giá 200k USD

Phương án 2: Không đồng ý stake GHST trị giá 200k USD

**Voting Period:** 2 - 9 February 2022

**Results:**

table_agip19

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x560e97ce27e9c99470a0a609e36d4c4cd20e948eae92691ea2ba2afb984e7e41)

<hr>

### Thành lập Biệt Đội DAO Treasury

**Aavegotchi Improvement Proposal #20**

**Proposal Summary:**

Bọn mình đề xuất tạo ra Biệt Đội DAO Treasury (DTF). Hội đồng ban đầu sẽ bao gồm 8 thành viên với thâm niêm tham gia DAO trong vòng 6 tháng.

Vào ngày 12/07/2021, DAO Treasury (https://aavegotchi.com/treasury) có lượng DAI và GHST trị giá khoảng ~$11,408,400. Ban đầu, hội đồng sẽ thành lập các bản đề xuất về vấn đề mà DAO quan tâm và sau đó sẽ bỏ phiếu và nếu được thông qua thì sẽ được thi hành.

Tuyên bố Sứ mệnh

Biệt Đội Aavegotchi DAO là một hội đồng năng nổ được chỉ định để tạo ra các bản đề xuất quản lý ngân quỹ của DAO để cộng đồng và DAO có thể suy xét. Nhiệm vụ và mục tiêu ban đầu sẽ là: 1) Tăng và tối ưu ngân quỹ DAO với trọng tâm về an toàn, an ninh và minh bạch; 2) Hợp tác với Pixelcraft để hỗ trợ các công cụ phát triển và xác định và nền tảng cho việc quản lý DAO Treasury đang diễn ra, và 3) hỗ trợ và đảm bảo sự phát triển chung của cộng đồng Aavegotchi bằng cách tăng sự quan tâm, chủ động quản bá sự nhận biết, và duy trì sự tương tác của người dùng.

Ngân sách ban đầu

Sau cuộc thảo luận dài với biệt đội, cộng đồng, và cùng với coderdan, DTF muốn yêu cầu ngân sách 50k GHST. Ngân sách 50k GHST sẽ được chuyển từ Ngân Quỹ DAO sang chiếc ví Gnosis Safe với 8 chữ ký đồng thuận. Ngân sách này sẽ mở rộng sự linh hoạt của DAO một cách đáng kể trong việc khuyến khích và tặng thưởng cho cộng đồng, lập trình viên, nhà sáng tạo, và những người đóng góp chung. Ngân sách này sẽ không bao giờ được dùng để thưởng cho các thành viên trong DTF. Động lực chính của DTF sẽ là thành lập một bản đề xuất dành cho công dụng chung của DAO Treasury bằng cách đầu tư một ít trong số DAI/GHST trị giá 10 triệu USD trong các cơ hội sinh lãi suất. Với sự phát triển hiệu quả của Ngân Quỹ DAO, thậm chí những lợi nhuận khiêm tốn nhất cũng đủ để chi trả cho những yêu cầu ngân sách từ DTF. DTF sẽ đảm bảo việc kế toán dễ hiểu và cung cấp cho cộng đồng các tài liệu đối chứng để đảm bảo tính minh bạch. Một số công dụng tiềm năng từ ngân sách này bao gồm:

- Thưởng cho sự tương tác cộng đồng và trò chơi aaracde
- Thưởng cho các lập trình viên và nhà phát triển
- Thưởng cho các lập trình viên phát triển ứng dụng cộng đồng
- Thưởng cho các cống hiện nghệ thuật được cộng đồng công nhận
- Thưởng, công nhận, và phát triển mạng lưới content creater và những nỗ lực chung trong việc marketing
- Mở rộng Aavegotchi và những cơ hợi của GHST trong các ứng dụng tài chính phi tập trung

DTF đang phát triển một kế hoạch chi tiết và nhiều dự án pilot tiềm năng để có thể tận dụng tốt nhất những quỹ này. Bọn mình sẽ làm việc để phát triển các công cụ nhằm tối ưu hóa sự minh bạch trong việc sử dụng ngân sách. Chi phí nằm trong khoảng 50k GHST sẽ không cần sự đồng ý từ DAI để sử dụng nhanh nhất khoảng tiền này. Bất kỳ khoảng tiền nào được yêu cầu mà lớn hơn 50k GHST sẽ cần phải có sự bỏ phiếu từ DAO.

8 thành viên ban đầu của DTF

- BowtiedNerd
- Mori
- letsgobankless
- Addison
- Deucehearts
- BackfireCapital
- Swappi
- Dr Wagmi

Bọn mình rất biết yên sự hỗ trợ của cộng đồng Aavegotchi và mong chờ bản đề xuất đầu tiên của bọn mình.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/establish-the-dao-treasury-taask-force/2460)

Phương án 1: Vâng, với ngân sách 50k GHST

Phương án 2: Vâng, nhưng không có ngân sách 50k GHST

Phương án 3: Không, đừng tạo ra DTF

**Voting Period:** 2 - 9 February 2022

**Results:**

table_agip20

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x17f3eec096b26e87b3441f7cad53108f6933fd32ac67417de6ef7c94970502e4)

<hr>

### Thêm GHST vào Cầu Umbria Narni

**Aavegotchi Improvement Proposal #21**

**Proposal Summary:**

The Umbria Narni Bridge has implemented the GHST token, and is facilitating cheaper migration of GHST between the Ethereum <--> Polygon networks, compared to the official Polygon bridge. The Umbria Narni bridging cost is about 1/2 of the official polygon bridge cost and is also much faster (4 minutes, as opposed to > 1 hour).

Umbria Narni có thể chuyển tối đa 20% tổng số GHST thanh khoản trong mỗi lần chuyển. Ví dụ, với lượng token GHST 100k có trong một bên của pool, cầu có thể chuyển tối đa lượng GHST trị giá 20k USD trong mỗi giao dịch.

Hiện nay đang có lượng token GHST trị giá 14000 USD mỗi bên. Số tiền này chủ yếu được tài trợ bởi Umbria. Điều này đã cho phép chiếc cầu có thể chuyển tối đã lượng GHST 700 USD mỗi giao dịch - vốn rất tốt, nhưng bọn mình để ý rằng nhiều người muốn chuyển nhiều hơn trong mỗi giao dịch.

Bọn mình đề xuất AavegotchiDAO thêm lượng token GHST trị giá 100k USD vào mỗi pool của cầu (1. Polygon và 2. Ethereum). Có một vài lợi ích khi làm vậy:

The Aavegotchi DAO will earn a 0.2% bridging fee whenever anyone uses the bridge to migrate GHST tokens between Ethereum <--> Polygon. Vậy nên trong suốt quản thời gian stake, Aavegotchi sẽ kiếm được tiền. Nếu cầu Narni trở thành một giải pháp không cần thiết, AavegotchiDAO chỉ cần rút một cách đơn giản và tận hưởng lợi nhuận của mình.

Giờ đây, người dùng sẽ có thể chuyển những giao dịch GHST trị giá 20k USD.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/add-ghst-stake-to-the-umbria-narni-bridge/2836)

Phương án 1: Đồng ý, stake GHST trị giá 200k USD

Phương án 2: Không đồng ý stake GHST

**Voting Period:** 8 - 15 February 2022

**Results:**

table_agip21

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0xeaac981066e143c46c7a616d2e6ff004d7d4d354005e077f01e3698041e4780a)

<hr>

### Triển Khai Rarity Farming Mùa 3

**Aavegotchi Improvement Proposal #22**

**Proposal Summary:**

_Problem_

Hiện tại, Rarity Farming diễn ra không theo chu kỳ và rất khó dự đoán khi nào Aavegotchi sẽ ra mắt. Điều này khiến các nhà đầu tư tự hỏi rằng liệu họ có nên giữ Gotchi và Trang Phục, hay họ nên flip để tìm ROI tốt hơn trong những vòng kế tiếp hay không. Cộng đồng rất muốn có được sự chắc chắn / dự đoán cho cả về mặt đầu tư và mục đích lên kế hoạch.

_Solution_

Nếu tài trợ một cách đúng đắn, Rarity Farming sẽ diễn ra 3 lần 1 năm. Việc này sẽ phù hợp với bản chất theo mùa mà chúng ta đang theo đuổi, và nếu được lên kế hoạch kỹ lưỡng thì sẽ bên vững dựa trên các sự kiện đấu giá kiếm tiền chen giữa, thu nhập ngân quỹ thông qua staking và các đối tác (ví dụ như bản đề xuất Umbria), và những nguồn thu nhập khác như DAO Grant. Tác giả của bản đề xuất tin rằng Rarity Farming là một phần quan trọng của hệ sinh thái Gotchiverse, và thứ có thể xây dựng và cả thiện chứ không phải bỏ mặc.

_Distribution_

Với Mùa 3, mình đề xuất chúng ta sẽ trở lại mô tỷ lệ phần thưởng tiêu chuẩn, như đã được thử và trải nghiệm trong Rarity Farming Mùa 1. Các tân binh giờ đây đã trưởng thành và sẵn sàng thi đấu với những người anh cả. Điều này có nghĩa là 70% tiền thưởng sẽ được dành cho bản xếp hạng BRS, 20% dành cho bản xếp hạng kinship và 10% sẽ dành cho bản xếp hạng XP.

Dựa trên những cuộc thảo luận từ Forum thì đây sẽ là mô hình cuối cùng của SZN3:

- 4 vòng (2 tuần mỗi vòng)
- 1,5 triệu GHST cho quỹ phần thưởng GHST (1.4 triệu GHST đã được tài trợ sẵn)
- 70% BRS
- 20% Kinship
- 10% XP
- Top 5k Gotchis (20%) → Top 7.5k Gotchis (30%)
- 3 Mùa mỗi năm (xem bảng bên dưới)
- SZN 3: Tháng 2 - tháng 3
- SZN 4: tháng 6 - tháng 7
- SZN 5: tháng 10 - tháng 11

Updated Rewards Sheet: [Rarity Farming SZN 3 Distribution Model](https://docs.google.com/spreadsheets/d/1jH6IEJ7Xu_YvblgEPX9UpT-phLelJ5XsmknkaxQOg7A/)

Do thiếu đi 100k GHST so với con số đề xuất nên bản đề xuát này cũng sẽ bao gồm yêu cầu tài trợ số lượng token còn lại được lấy ra từ ngân quỹ AavegotchiDAO.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/season-3-for-q1-2022/2779)

Phương án 1: Có, hãy triển khai Haunt 3

Phương án 2: Có, nhưng với những con số khác

Phương án 3: Không, đừng triển khai RF SZN 3

**Voting Period:** 8 - 15 February 2022

**Results:**

table_agip22

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0x5ffa4d3b8f4c1d744424af5c0f079ebfa286c9aec9c35e898c2c02bee87a0b60)

<hr>

### Đồng Tài Trợ Cho Quỹ GoodGhosting

**Aavegotchi Improvement Proposal #23**

**Proposal Summary:**

_What is GoodGhosting?_

GoodGhosting là một trò chơi tiết kiệm không thiệt hại, được xây dựng dựa trên Aave. Bọn mình đã triển khai những pool tiết kiệm đầu tiên trên Polygon, trong suốt mùa hè năm 2021. Hiện tại, bọn mình đã giúp hơn 7k người dùng tiết hiện hơn 600k Usd tài sản trên Polygon. Tất cả khi thu thập một số NFT đẹp và leo bảng xếp hạng.

Đội ngũ GoodGhosting tin vào một thế giới mà việc tiết kiệm đáng được thưởng, dễ dàng, và vui nhộn. Nhưng, việc tiết kiệm truyền thống không hề giống vậy. Bọn mình xây dựng các ứng dụng tiết kiệm xã hội phi tập trung kết hợp với các yếu tố thiết kế game nhằm mục đích tiết kiệm. Bọn mình muốn giúp cộng đồng phát triển thói quen tài chính tốt hơn và có được niềm vui song song đó.

_Potential collaboration_

Bọn mình muốn cộng đồng GoodGhosting biết đến Aaegotchi, bằng cách tạo ra một quỹ tiết kiệm theo chủ đề Aavegotchi. Quỹ này sẽ yêu cầu người chơi tiết kiệm token GHST, kiếm GHST từ đó. Bọn ình thấy rằng đây là một cơ hội “va chạm” rất tốt dành cho cả 2 cộng đồng.

Aavegotchi là một dự án độc đáo mà mình đã theo dõi từ lúc bắt đầu. Với cả vai trò người chơi cũng như cư dân của hệ sinh thái. Đúng vậy, cả người chơi và cư dân của hệ sinh thái. Bọn mình thấy rằng đây là một cơ hội “va chạm” rất tốt dành cho cả 2 cộng đồng

Ngoài việc mời tất cả người chơi Aavegotchi và DAO cụ họ tham gia vào pool tiết kiệm GHST sắp tới, GoodGhosting cũng muốn yêu cầu AavegotchiDAO đồng tài trợ cho pool.

_Our Request_

- Một khoảng tài trợ trị giá 7k GHST cho pool tiết kiệm này. Chia cho tất cả người chơi chiến thắng.
- Khả năng thưởng cho người tiết kiệm thành công với Gotchi XP, hoặc thay bằng FRENS. Hãy xem GoodGhosting là một trò minigame dài hạn, khuyến khích người chơi thu thập thêm nhiều GHST.
- Phần thưởng Aavegotchi NFT (trị giá 3000 GHST) sẽ được xổ số cho những người tham gia/chiến thằng ngẫu nhiên. Đây có thể là Trang Phục, Gotchi, vé Số hoặc gói đất Realm.

Phần thưởng này có thể do Aavegotchi hoặc GoodGhosting mua trên Baazaar. Với những phần thưởng cộng thêm này, bọn mình mong sẽ mang đến lợi ích cho một ít người chiến thắng thông qua hệ thống xổ số, hoặc /và một phần thưởng nhỏ hơn để phân phối dễ dàng cho tất cả người chiến thắng.

_What can GoodGhosting bring to the table?_

- Hơn 4000 WMATIC được tài trợ (từ quỹ phát triển DeFiForAll). Chia cho tất cả người chơi chiến thắng.
- Nhiều người dùng mới cho hệ sinh thái Aavegotchi. Hiện tại đã có hơn 20500 người tham gia vào pool tiết kiệm Celo và Polygon của bọn mình. Đa số họ đều chưa biết đến Aavegotchi hoặc GHST, và nhiều người có ý định tham gia Gotchigang.
- Bọn mình sẽ tạo một video Youtube để giới thiệu về Aavegotchi, và cách để sở hữu token GHST trên Polygon. Quảng bá đến cho người dùng của bọn mình.
- Bọn mình sẽ cho phép người dùng chơi GoodGhosting với Aavegotchi làm hình đại diện. Cái này sẽ hiện lên trong tab Players, cũng như những trang hồ sơ người chơi cá nhân trên Goodghosting.com
- Một số NFT rất đặt biệt được tạo ra từ Mali3D, họa sĩ của chính dự án
- Điểm GG cộng thêm cho tất cả những người sử dụng thành công

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/aavegotchidao-x-goodghosting-collaboration-request/2975/)

Phương án 1: Vâng, thưởng 10k GHST + XP

Phương án 2: Vâng, nhưng điều kiện cần thay đổi

Phương án 3: Không, không hỗ trợ GG

**Voting Period:** 9 - 15 February 2022

**Results:**

table_agip23

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0xdef7d35ea26832b4edffda176458f86744f402d7db151993ffe34f8122da7113)

<hr>

### Gửi 3 triệu GHST Ngân Quỹ vào Aave

**Aavegotchi Improvement Proposal #24**

**Proposal Summary:**

Cùng với Biệt Đội Dao Treasury (DTF), Dr Wagmi đã đề xuất về việc tận dụng ngay lập tức việc niêm yết GHST trên Aave bằng cách gửi 80% GHST từ DAO Treasury (3 triệu GHST) vào Aave dưới dạng tài sản thế chấp để kiếm thu nhập thụ động. Tỷ lệ sử dụng hiện tại đang là 45% với APR là 2,5%. Với khả năng sinh lời và sự phát triển nhanh chóng về cách thức sử dụng token GHST, bọn mình dự đoán được sự phát triển của nhu cầu vay mượn, và do đó, tiền lãi dành cho người gửi GHST và Ngân Quỹ DAO sẽ tăng lên. Aavegotchi DAO có thể thể hiện sự khéo léo, hiệu quả và kho ngân quỹ ấn tượng bằng cách nhanh chóng tận dụng cơ hội tạo thu nhập thụ động này. Điều này sẽ tạo lên tiếng vang mạnh mẽ trong cộng đồng DeFi và crypto rộng lớn và nahnh chóng mang đến thêm giá trị cho người nắm giữ token GHST thông qua sức mượn trong pool của Aave.

Số lượng 3 triệu GHST nạp vào ban đầy sẽ tượng trưng cho 80% ngân quỹ DAO của GHST. Số tiền này hoàn toàn của thể sử dụng bất kỳ lúc nào và rút bất kỳ lúc nào nếu DAO chỉ định ứng dụng khác. APR 3% là gần khoảng 90k USD có thể được dùng để đầu tư nhiều hơn vào hệ sinh thái Aavegotchi thông qua các hoạt động của DAO. Một bản đề xuất riêng về việc thêm 20% và khoảng 2,4 triệu DAI từ ngân quỹ có thể được xem xét. Bọn mình không đề xuất nhận amGHST từ số tiền gửi ban đầu này để stake nhận FRENS. Bản đề xuất này không yêu cầu nắm quyền multi-sign DTF đối với số tiền hoặc quyền quản lý về sau.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/deposit-3-000-000-ghst-from-the-dao-treasury-into-aave/3007)

Phương án 1: Vâng, nạp 3 triệu GHST

Phương án 2: Không, giữ GHST trong Ngân Quỹ

Phương án 3: Phiếu Trắng

**Voting Period:**  23 - 30 March 2022

**Results:**

table_agip24

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x2fd1336f439b29a7096478a1d9571acc83597b2b345103fdb35e02125f5a2dcd)

<hr>

### Hoãn Đấu Giá và Xổ Số Land Gotchiverse 3

**Aavegotchi Improvement Proposal #25**

**Proposal Summary:**

Pixelcraft has provided a schedule in Chapter 1 in the Gotchiverse Game Bible with the Gotchiverse Land Auction / Raffle 3 scheduled to occur Late February: [https://blog.aavegotchi.com/introducing-the-gotchiverse-game-bible/](https://blog.aavegotchi.com/introducing-the-gotchiverse-game-bible/)

Việc này đã được lên lịch để xảy ra trước khi các chương Gotchiverse Game Bible được đăng tải dựa theo bài viết nêu trên. 4 Chương nữa đã được công bố vào tháng Ba và sẽ nhiều bài viết hơn đã được công bố trong những tuần/tháng kế tiếp.

I propose the Land Auction & Raffle is delayed until the full release of Book One of the Gotchiverse occurs or the community votes for an additional sale.

Việc này chủ yếu là để đảm bảo cộng đồng có thể chuẩn bị trước cho số tiền đầu tư/lệnh đấu giá Land và chúng ta có thể giảm thiểu nguy cơ lập lại tình trạng đã xảy ra với những ai đặt giá quá tay và toang.

[CoreProp Edit: Since Book One is going to be fully published soon but there still seems to be little appetite for a REALM Sale, we have added a voting option to only start the next Auction & Raffle if a SigProp reaches Quorum and the respective CoreProp passes. Việc điều chỉnh này đã được thảo luận trước cùng Jarrod.]

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/chapter-1-the-gotchiverse-release-schedule/2939)

Phương án 1: Dời đến khi Quyển 1 được ra mắt xong

Phương án 2: Dời đến khi có Bản Đề Xuất Cộng Đồng

Phương án 3: Bắt Đầu Đấu Giá 3 càng sớm càng tốt

**Voting Period:** 23 - 30 March 2022

**Results:**

table_agip25

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0xa8ae9fff29189ddf79845a7875ccfc696273aa2fca9fed42140a6bbe55f12b97)

<hr>

### Giảm Biến Số Parcel VRF

**Aavegotchi Improvement Proposal #26**

**Proposal Summary:**

_Problem:_

Biến số VRF dành cho Alchemica bên dưới lòng đất (trung bình 0.2 - 1.8) vẫn có vẻ cao và có thể khiến nhiều người toang - hãy xem biểu đồ được đăng trong bài viết trên Discord.

Chủ sở hữu của một mảnh đất spacious có thể nhận được ít alchemica hơn một người chủ của mảnh đất reasonable may mắn - đó là lý do tại sao mình nghĩ đây là một trải nghiệm người dùng rất tệ, đặc biệt là khi chúng mình đã được báo trước là việc này sẽ không xảy ra. Hãy nhớ rằng vòng đầu tiên (quý) thì Alchemica sẽ được phân bố nhiều hơn thời điểm khác, vậy nên sự hụt hẫn ở vòng đầu có thể khiến ai đó bị tuột lại khá xa.

_Solution_

Mình muốn đề xuất hạ thấp biến số xuống ÍT NHẤT 0.5 - 1.5 nếu thậm chí không phải là 0.75 - 1.25 ở vòng đầu (Lựa chọn 1). Vấn đề của mình với biến số cao là mọi người đã đưa ra quyết định tài chính dựa trên những con số trung bình được đăng tải trước buổi đấu giá đầu tiên, khiến mọi người mất 50-80% giá trị Alchemica nằm bên dưới gói đất là một trải nghiệm người dùng tệ hại đối với mình.

Một phương án khác được đề xuất bởi Mori là tạo ra hệ phân bố nhị thức với khả năng cắt bỏ phần đuôi, vậy nên sẽ có thể thắng lớn nhưng gần như không thể thua tan nát (Phương án 2). Việc này sẽ dẫn đến lượng trung bình 100, nhỏ nhất là 60, và nhiều nhất là 800. Đây là một thay đổi có lý để thắng giải top, với chỉ ~0,02% gói đất có thể đạt được điều này. Ghi chú quan trọng: Phương án này sẽ giảm số trung bình là 100 xuống còn khoảng 83.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/reducing-the-vrf-variance-for-parcels/3069)

Option 1: Round 1 0.75 - 1.25 & 0.5 - 1.5

Phương án 2: Phân bố nhị thức

Phương án 3: Không, đừng thay đổi biến số

**Voting Period:** 23 - 30 March 2022

**Results:**

table_agip26

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x09c3132896ba5c8e677e018a86ba1a74729955f64799dbfd4e422058f9198817)

<hr>

### Thay Thế Cách Quy Đổi Chỉ Số Trait Gotchiverse

**Aavegotchi Improvement Proposal #27**

**Proposal Summary:**

With the introduction of Gotchiverse trait maps in the Game Bible Chapter 2, a significant discussion kicked off analyzing potential imbalances, weaknesses and areas for innovation in the original proposed trait map for NRG, AGG, SPK & BRN. CoreProp đề xuất về việc thay đổi hệ quy chiếu trait cho 4 đặc tính này thành:

NRG: Máu Tối Đa (0 NRG) <===> Thể Lực Tối Đa (100 NRG)

AGG: Sức Phòng Thủ (0 AGG) <===> Tốc Độ Hành Động (100 AGG)

SPK: HP & AP Regen (0 SPK) <===> Ethereality (100 SPK)

BRN: Sức Mạnh Đánh Gần (0 BRN) <===> Sức Mạnh Đánh Xa (100 BRN)

EYS: Chờ Xác Nhận

EYC: Chờ Xác Nhận

Xem qua chủ đề trên diễn đàn DAO để hiểu đầy đủ ý nghĩa của những thay đổi này (bao gôm cả phần FAQ).

Ảnh Hưởng Chính Đối Với Hệ Quy Đổi Mới

- Tốc độ di chuyển được xóa khỏi biểu đồ quy đổi sẽ giúp cả thiện trải nghiệm người dùng (UX) dành cho tất cả người chơi mới bắt đầu tham gai Gotchiverse, cả mới và cũ,
- Sức chứa bị gỡ bỏ khỏi bản đồ sẽ sửa chữa lại sự mất cân bằng của 1 chỉ số farm vs 7 chỉ số combat gồm NRG, AGG, SPK và BRN,
- Giờ đây đã có sự khác biệt rõ ràng giữa những gotchi chuyên về sức mạnh vật lý và kỹ năng (pháp sư),
- Hiện đã có sự khác nhau rõ ràng giữa tướng đánh gần và đánh xa,
- Thần lực giờ đây có thể xem như "May mắn" và ảnh hưởng đến khả năng nó tránh, chí mạng, lướt qua tường và tất cả những hành động dựa trên cơ hội trong Gotchiverse.

_End Goal_

Để cộng đồng và Pixelcraft cùng nhau xây dựng một biểu đồ quy đổi thật là cân bằng, trải nghiệm người chơi tuyệt vời, và sự bền vững, đồng thời cho phép sự linh hoạt trong việc tích hợp buff trang bị và kỹ năng liên kết với chỉ số trait trong tương lai.

_Risks_

Có nguy cơ một số người chơi và nhà đầu tư đã mua gotchi dựa trên những chỉ số quy đổi cũ. Một lưu ý quan trọng cần nhớ là những chỉ số trait này luôn được xem là không vĩnh viễn trong Game Bible. TUY NHIÊN, bọn mình tin chắc rằng bản đồ mới được đề xuất ở đây thậm chí sẽ đa dạng và giải trí hơn trong phong cách chơi dành cho những nhà đầu tư OG và người chơi mới để có thể trải nghiệm và chơi game.

_Final Important Notes_

Có nhiều cách để chỉ số Trait ảnh hưởn gđến việc cân bằng (âm dương tuyến tính, không đối xứng, buff chỉ bắt đầu từ 50 và lợi nhuận giảm dần, v. v.). Hệ Thống Cân Bằng Trait vẫn đang được xem xét bởi cộng đồng nên hãy đón chờ những cuộc gọi kế tiếp từ Pixelcraft (để thực tham gia vào đó) và một bản SignProp khác nhé!
EYS và EYC vẫn đang được cộng đồng xem xét. Một số ý tưởng thú vị bao gồm khả năng farm/alchemica/HUD đã được đề xuất. Hãy nhớ rằng nếu bạn nên tham gia và nói lên những suy nghĩ của mình nhé!

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/alternative-gotchiverse-trait-mapping-for-nrg-agg-spk-brn/3135)

Phương án 1: Vâng, hãy dùng bản quy đổi mới này

Không, hãy sử dụng bản cũ

**Voting Period:** 23 - 30 March 2022

**Results:**

table_agip27

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0xbe4999b68f97f0e3406d65aff4e36a97768af72eb5cbd16c92641dcfdd6f35c9)

<hr>

### Mở rộng Ví Multisign Biệt Đội Ngân Quỹ DAO

**Aavegotchi Improvement Proposal #28**

**Proposal Summary:**

Chào các bạn, trong Chương 2 chúng tôi đã đề xuất về việc 10% Gotchus Alchemica nền được mở khóa dần trong 30 năm để sử dụng cho các mục đích trong Hệ Sinh Thái. Mục tiêu chính của việc này là để đảm bảo thanh khoản lâu dài giữa các nền tảng, bao gôm GAX, nhiều sàn DEX khác trên Polygon, Mainnet, và thậm chí là CEX.

Những người theo dõi dự án kỹ lưỡng biết rằng bọn mình luôn cố làm mọi thứ "như trong sách", để giúp Aavegotchi trở thành một ví dụ điển hình cho tính phi tập trung và tuân thủ pháp lý. Chúng ta đang ở những giai đoạn cuối cùng để đặt ra một công ty pháp lý mới cho Aavegotchi (cụ thể là một Tổ Chức Panama) và sẽ sớm thông báo về các ứng dụng để phục vụ.

Về mặt kỹ thuật, bọn mình cũng đang làm việc về vấn đề áp dụng quản trị on-chain cho giao thức Aavegotchi. Tuy nhiên, việc này sẽ tốt ít thời gian, do cần phải nâng cấp để triển khai token GHST trên Polygon.

Dù tất cả những việc này xảy ra ở phía sau cành gà, bọn mình cũng đang triển khai NĂM token Alchemica ERC20 mới và mở khóa một lượng lớn số token này để vào hợp đồng mở khóa chậm.

Vì lý do pháp lý và chiến lược, bọn mình tin rằng phần phân bố cho Hệ Sinh Thái không nên được quản lý bởi Pixelcraft mà nên được quản lý bởi AavegotchiDAO. Biệt Đội Ngân Quỹ DAO sẽ được tạo ra để quản trị một phần ngân quỹ DAO, nhưng số lượng người ký rất ít và theo ý kiến của mình thì điều này không đủ để giữ một số tiền lớn như vậy.

Do đó, mình đề xuất tạo ra một chiếc ví multisign dưới biệt đội DTF hiện tại, với 15 nguiowf ký tên thay vì 6 người. **Eleven** out of fifteen signatures would be required to confirm transactions.

Ví multisign này sẽ có lợi cho Hợp Đồng Mở Khóa Chậm Hệ Sinh Thái (nắm giữ 10% nguồn cung của token Alchemica, trả chậm trong 30 năm), và cũng có thể kế thừa 1 triệu GHST được phân bổ ban đầu trong suốt quá trình tạo ra GHST cho việc xây dựng Hệ Sinh Thái, giúp giữ được thanh khoản Alchemica.

Ở phía bọn mình, bọn mình sẽ triển khai Alchemica và tạo ra các quỹ thanh khoản ban đầu trên Quickswap, sau đó bọn mình sẽ chuyển quyền sở hữu của vesting contract sang cho ví multisign. Sau thời điểm đó, DTF sẽ quyết định việc cung cấp thanh khoản.

Let’s goooo Gotchigang!

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/dao-treasury-task-force-extension-thread/3119)

[Ghi chú cuối cùng: Bạn có thể bỏ phiếu cho nhiều thành viên cùng lúc, top 9 lựa chọn sẽ được bầu! Bài thuyết trình ngắn về các thành viên có thể được tìm htaays trong chủ đề thảo luận]

Phương án 1: Kokusho

Phương án 2: MGG

Phương án 3: Chonya

Phương án 4: Pgendreau

Phương án 5: Diddlypoo

Phương án 6: Tburd.eth

Phương án 7: Jarrod

Phương án 8: MarvinP

Phương án 9: Notorious_BTC

Phương án 10: Hardkor

Phương án 11: Yanik

Phương án 12: Master_Yin

Phương án 13: Nestor

Phương án 14: Chichi

**Voting Period:** 23 - 30 March 2022

**Results:**

table_agip28

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x8b5862698c550b53e57f6ce4628a7a13ed5a4772e541c414e9a27fbcf95cf8c2)

<hr>

### Khung Thời Gian 24h Để Truyền Khoáng Sản

**Aavegotchi Improvement Proposal #29**

**Proposal Summary:**

Như đã được chỉ ra cụ thể trong Chương 3 Gotchiverse Chân Kinh, việc truyền khoáng cá nhân sẽ hoạt động thông qua một khung thời gian 24 giờ đếm ngược, ngay sau khi một Aavegotchi truyền khoáng từ một altar. Bọn mình đề xuất sửa lại thành một hệ thống thời gian 24h giờ chạy từ 00:00 UTC đến 23:59 UTC, trong đó, một gotchi có thể truyền bất cứ lúc nào trong khung thời gian 24h.

_TIMELINE_

Bản đề xuất nên được thực hiện trước 18 tháng 5, 2022 (ngày bắt đầu truyền cá nhân) hoặc bất cứ lúc nào Pixelcraft có thể làm được…

_RATIONALE_

Với cơ chế đến ngược 12 tiếng của petting vào 1 năm trước, chúng ta đều nhận thấy rằng một thời gian tương tác định sẵn với gotchi rất khó có thể duy trì dựa trên các sự kiện trong thế giới thực, mạng lag, công việc ở công ty và việc gia đình. Bọn mìn không muốn những hạn chế này lặp lại với việc truyền cá nhân.

Hạn chế trên đã dẫn đến việc nhiều người phải làm ra bot để đảm bảo việc tương tác hiệu quả nhất, kết quả là sự tương tác với người dùng bị giảm đi. Bằng cách xóa bỏ hạn chế trong việc truyền cá nhân, việc người chơi tương tác một cách tích cực với gotchi trong việc truyền khoáng hàng ngày sẽ được cải thiện.

Nhiều người chơi có nhiều gotchi, nhiều gói đất, nhiều altar ở khắp Citaadel. Những người chơi này đã thể hiện sự ủng hộ của mình đối với cộng đồng và không nên bị hạn chế sự hiệu quả qua việc giảm thời gian đếm ngược 24h. Họ nên vẫn có thể truyền một cách thoải mái mỗi ngày với tất cả gotchi khi có việc bận.

_BENEFITS_

Giải pháp 24h truyền khoáng sẽ:
Cải thiện chất lượng sống của chủ gotchi,

- Giảm thời gian tương tác không thuận lợi,
- Giảm thiểu tắc nghẽn mạng tại thời điểm tương tác và,
- Tăng mức độ tương tác hàng ngày cho những người chơi không có nhiều thời gian.

_RISKS_

Việc triển khai bản đề xuất sẽ không bắt kịp với ngày bắt đầu cho phép truyền là 18/5.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/giving-gotchi-owners-the-ability-to-reduce-cooldown-time-for-solo-channeling/3107).

Phương án 1: Đồng ý, 24 giờ một lần

Phương án 2: Không đồng ý, reset thời gian 24h sau mỗi lần tương tác

**Voting Period:** 21 - 28 May 2022

**Results:**

table_agip29

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0xbe89c5f01a02817058d66459cb00a399c45aa8991e29121fb1ca3b0e11e0c84b)

<hr>

### Đặt Lịch Đấu Giá/Xổ Số #3 Vào Tháng Sáu

**Aavegotchi Improvement Proposal #30**

**Proposal Summary:**

Đề xuất đấu giá đất / xổ số 3:

- Tổ chức đấu giá và xổ số trong tháng 6
- Tổng cộng 8.000 gói đất từ chủ yếu là các quận 1, 6, 13, 23, 24, 25, 26. Các bưu kiện từ các quận đã đấu giá / xổ số trước đó cũng sẽ được bán. The exact selection can be seen in the Discussion Thread: [https://dao.aavegotchi.com/t/proposal-for-land-auction-raffle-3-within-1-week-of-citaadel-release/3487/36](https://dao.aavegotchi.com/t/proposal-for-land-auction-raffle-3-within-1-week-of-citaadel-release/3487/36)
- 70% (5.600) gói đất trong đấu giá, 30% (2.400) trong sổ xố

Phân Bố Doanh Thu Chế Tạo:

- 40% doanh thu dành cho quỹ Rarity Farming
- 40% gửi cho Pixelcraft Studios
- 20% dành cho AavegotchiDAO
- 0% đốt

Đề xuất này được tổng hợp từ phản hồi của cộng đồng trong vài tuần qua và cố gắng cân bằng các yếu tố sau: pha loãng NFT; một cuộc đấu giá / xổ số diễn ra quá gấp gáp; thanh khoản GHST sẵn có không đầy đủ; quan ngại về kinh phí của Rarity Farming Season 4; tận dụng động lực và tiếp thị của bản phát hành trò chơi đầy đủ. A June Auction will allow >2 weeks of Citaadel gameplay and will allow sufficient time for marketing and business development efforts to capture maximum investment. Có đủ Phần thưởng Gotchiverse sau hai cuộc đấu giá đất đầu tiên và việc bán này sẽ giúp tài trợ cho RFS4 và thậm chí có thể là một phần của Phần 5.

Đề xuất này đã được thảo luận với nhóm Pixelcraft, những người ủng hộ nó và cảm thấy ngày thực hiện mục tiêu là khả thi.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/proposal-for-land-auction-raffle-3-within-1-week-of-citaadel-release/3487/15)

Phương án 1: Có, 8k gói đất vào tháng 6

Phương án 2: Không thêm gói đất mới

**Voting Period:** 21 - 28 May 2022

**Results:**

table_agip30

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0x658926263e4ce1eca559950bcb0f5d8f203758c5c99b30999bb7f082552695b8)

<hr>

### Triển Khai RF Mùa 4

**Aavegotchi Improvement Proposal #31**

**Proposal Summary:**

Theo sau bản đề xuất core vào ngày 15 tháng Hai, mình muốn dùng khoảnh khác này để hợp thức hóa việc bắt đầu mùa 4 với gotchi-DAO.

Do không hề có sự thay đổi lớn nào về BRS, XP hoặc hệ thống kinship diễn ra kể từ mùa trước, và kể từ khi bản đề xuất này được thông qua, mình đề xuất chúng ta giữ các thông số tương tự như mùa 3.

Như vậy, đây sẽ là mô hình cuối của Mùa 4:

4 Vòng (mỗi vòng 2 tuần) với pool thưởng 1,5 triệu GHST - sẽ được tài trợ bởi sự kiện bán land AGIP30.

- 70% BRS

- 20% Kinship

- 10% XP

- Top 7.5k Gotchis (30%)

Do trong sự kiện bán land AGIP30 lượng tiền thưởng không đủ 1,5tr GHST nên mình đề nghị số tiền thưởng 1,5tr GHST sẽ được lấy từ ngân quỹ DAO như đã được thảo luận trong AGIP-23.

DAO có thể sắp nhận được rất nhiều GHST do bản đề xuất mua lại DAI có thể sắp được thông qua trong tương lai gần, vậy nên nó sẽ rất hợp lý.

Nếu bạn không biết, đây là bản tóm tắt về lịch tổ chức Rarity Farming;

Mùa 4 (được nói đến trong bản đề xuất này): tháng Sáu - tháng Bảy

SZN 5: tháng 10 - tháng 11

SZN 6: Tháng 2 - tháng 3 2023

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/launch-of-rf-szn4/3875)

Phương án 1: Vâng, chính thức bắt đầu RF Mùa 4

Phương án 2: Không, đừng triển khai RF SZN 4

**Voting Period:** 22 - 29 June 2022

**Results:**

table_agip31

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x2ddd04ae165c6f6245f4cdd83abd00bb1644bf78fd6719eae394f9db4e00d910)

<hr>

### Dùng DYST Để Hỗ Trợ Cặp vQi-Qi trên Dystopia

**Aavegotchi Improvement Proposal #32**

**Proposal Summary:**

The Aavegotchi DAO should use its DYST voting power to support the vQi-Qi pool on DystopiaSwap indefinitely. Any community member can submit an additional signal prop should reallocation be considered.. Indefinite support will avoid overly frequent Sig Prop submissions that are only tangentially related to the Aavegotchi DAO.

_Background:_

Dystopia Swap is an automated market maker with ve(3,3) mechanics which was recently launched on Polygon. They airdropped a big portion of their initial token supply to Polygon dApps including the Aavegotchi protocol, QiDAO, and the GotchiVault. This voting token is used to allocate scheduled rewards similar to QiDAO’s Qi. This means it is up to our Aavegotchi community to decide how to best use our airdropped voting power to support the DeFi aspect for Aavegotchi and GHST. I propose that this voting power be used to support the vQi-Qi pool which secures liquidity and rewards for the ~4M GHST in the vGHST protocol.

A brief overview of why this is good for GHST:

1. GHST users deposit their GHST for vGHST using the GotchiVault (3.83M vGHST exist currently)

2. vGHST can be deposited in QiDAO as collateral for borrowing MAI

3. Qi rewards are paid to borrowers based on a biweekly vote by Qi holders

4. Qi that is staked for 4 years has 4x the voting power- this is known as eQi. vQi is a liquid form of eQi that allows holders to sell the token. vQi voting power is always used for vGHST. 5. The current vQi supply is 833k which means 3.3M eQi voting power.

5. The system requires adequate vQi-Qi liquidity to be sustainable. This vote incentivizes the vQi-Qi pool which will deepen liquidity and create a flywheel effect in increasing vGHST rewards on QiDAO.

6. More rewards for vGHST means more rewards in the hands of the Aavegotchi community

None of the other pools directly benefit GHST holders which is why only vQi-Qi is included in this SigProp (https://www.dystopia.exchange/vote).

Thank you for your support as the GotchiVault runs with the DeFi aspect of our DeFi RPG, seeks to add value to GHST, and solidifies Aavegotchi’s position as a cornerstone of Polygon DeFi and gaming.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/use-dyst-voting-power-for-the-vqi-qi-pool/4010)

Option 1: Yes. Vote for vQi-Qi

Option 2: No. Vote for someone else

Phương án 3: Phiếu Trắng

**Voting Period:** 22 - 29 June 2022

**Results:**

table_agip32

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x68dc76a5d1069e58f1409d644824044df823c304fc349f85b38ccb0fcd95e4a4)

<hr>

### Đổi Công Thức Máy Thu Hoạch

**Aavegotchi Improvement Proposal #33**

**Proposal Summary:**

The original harvester recipes:

- Discourage upgrading parcels beyond levels 3 & 4.

- Are too expensive in cost and punishing in yields at the higher levels.

- Easily allow for the Low Leveloor to extract insanely high yields with very little investment.

- Are too inexpensive from a time-to-build perspective. This diminishes the effectiveness of makers and the utility of GLTR.

After a month and a half of theorising, simulating, and refining MikeyJay, coderdan, letsgobankless, and myself have arrived at a final recipe which we believe best solves the above problem.

The proposed recipe changes to the harvester:

- Promote dynamic gameplay with a multitude of winning strategies

- Make high level harvesters not only viable, but desirable

- Reduces inflation of alchemica

- Handicap the Low Leveloor strategySignificantly increase build time for each installation which promote a healthy GLTR economy. This increase drives more utility to the maaker.

This topic has been discussed at length. For a full understanding, I highly encourage you to read through the [forum thread](https://dao.aavegotchi.com/t/something-aint-right-with-installation-upgrades-resolved-and-in-progress/3715), [simulation results](https://drive.google.com/drive/folders/1WB8L6aEPEdGnEgxcRUD3ysRwko2fjzMU), and recipe changes. The [Bot Strategy](https://github.com/mikey-jay/realm-simulator#readme) provides insight into how the simulation bots operated.

_Associated Risks_

Given the amount of time invested in recreating this recipe, there are few contingencies.

The reduction in alchemica inflation also means a reduced ROI (in terms of alchemica, not necessarily \$$$)

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/something-aint-right-with-installation-upgrades-resolved-and-in-progress/3715)

Option 1: Yes, Change the Recipes

Option 2: No, Keep Things the Same

**Voting Period:** 22 - 29 June 2022

**Results:**

table_agip33

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x599754e6bf5a683d0a44aadbcad78df0522bdeb448437ff79c70b6077408fe58)

<hr>

### Swap Lượng Token Trị Giá 1,75tr DAI AavegotchiDAO <> Pixelcraft Studios

**Aavegotchi Improvement Proposal #34**

**Proposal Summary:**

_Summary_

This proposal aims to swap 1.75 million DAI from AavegotchiDAO’s treasury with an equal value of GHST from Pixelcraft Studios’ balance sheet.

_Rationale_

The launch of the Gotchiverse has introduced new and increasing infra costs for Pixelcraft Studios that cannot be paid for in GHST (or any crypto for that matter). These costs primarily consist of usage of AWS and Redis Enterprise for real-time gameplay in the Gotchiverse, and will continue to scale up as the game gets more popular.

To pay for these costs, we have outlined several options:

- Raise funding from VCs

- Liquidate GHST into DAI and swap for fiat

- Use GHST as collateral on Aave to take loans in DAI

- Perform a token swap with AavegotchiDAO

We believe Option 4 (Token Swap) is the best available option at the moment. We strongly value our independence from VCs, prefer not to have debt on our balance sheet, and do not want to market sell GHST acquired from sales.

Therefore, we propose a token swap between AavegotchiDAO and Pixelcraft Studios to ensure adequate fiat runway for several years of further development, no matter how bearish the market becomes.

_Key Details_

At the time of this writing, AavegotchiDAO treasury holds roughly:

- 2.5 Million DAI

- 3.5 Million GHST

- 3 Million Alchemica
  (Live source here: [AavegotchiDAO Treasury Balance](https://app.aavegotchi.com/treasury))

Pixelcraft Studios, on the other hand, is heavily skewed toward GHST with over 6.7 Million GHST in our primary revenue wallet while our only DAI is coming from [the curve’s monthly 150k DAI faucet](https://aavegotchi.medium.com/vote-before-you-move-to-matic-stop-over-at-aavegotchidao-cb394134f357), 50k of which is already earmarked for GHST purchases.

Pixelcraft Studios has been able to effectively grow the team and support infrastructure costs without needing to liquidate any significant amount of GHST. But last month’s launch of the Gotchiverse and anticipated continued growth has pushed operating costs dramatically higher. Server costs for the April playdrop, for example, exceeded 40k USD, and that is projected to grow in the months ahead.

Such operating expenses are anticipated but we have to acknowledge that these subscriptions and invoices almost always insist on trad banking (fiat). We would prefer to not have to sell GHST in order to achieve the necessary growth budget.

The DAO’s revenue from the GHST bonding curve opens up the possibility of a large-scale exchange of assets between our two parties. With the game live, GHST off its all time highs, and a DAO treasury that is well established, we believe this is the right time to propose an OTC token swap.

For the purposes of this token swap, a valuation for GHST that all can agree on must be established. There are many ways to arrive at such, so in the interest of expediency, I am proposing an intuitive method that also tips the scale generously in the DAO’s direction:

_GHST valuation methodology_

Pixelcraft Studios has calculated GHST’s average price from Tuesday, June 14 to Saturday, June 18 (duration of the SigProp via CoinGecko) with a 5% discount applied to the final price: USD 1.28. If DAO voters find the results agreeable, they may vote to approve this CoreProp.

_Execution_

If the CoreProp passes, the token swap should process in a predictable way. I suggest the token swap occur with the following method of execution:

- Pixelcraft Studios shall first transfer the agreed upon amount of GHST (defined in the CoreProp) to the AavegotchiDAO treasury wallet.

- AavegotchiDAO treasury wallet (currently managed via multisig by Pixelcraft team) shall transfer 1.75 million DAI within 8 hours of receiving the GHST to the Pixelcraft Studios primary revenue wallet.

- Pixelcraft Studios shall make an announcement in Aavegotchi Discord confirming the reception of the DAI, thus concluding the token swap.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/token-swap-1-75m-dai-from-aavegotchidao-for-ghst-from-pixelcraft-studios/3769)

Option 1: Yes, perform a swap of 1.75M DAI

Option 2: No, don't perform a token swap

**Voting Period:** 22 - 29 June 2022

**Results:**

table_agip34

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0xe9ceb07837c7b04420f33fb324c220694241c84ffd6bb50c2651e3376326adb3)

<hr>

### Hoãn Thời Gian Đấu Giá Land 3

**Aavegotchi Improvement Proposal #35**

**Proposal Summary:**

We are fast approaching the end of June when the LAND 3 auction/raffle is scheduled for based on the AGIP-30 core prop. However, since this core prop was started (20th May) a lot of things have changed:

- Harvester release has been delayed

- We are in the middle of a bloodbath in the markets

- LAND prices have dropped 30-70%

- LAND bazaar volume has dropped 90%

- There's been huge selling pressure on alchemica prices

Due to these significant changes in the market, its seems right to allow the DAO to have another emergency vote on whether to go ahead with the LAND auction or not as releasing an auction in this market is very likely to drive down assets prices across the ecosystem.

Coderdan confirmed it is viable to stop the auction but we must act quickly frens:

My thoughts are that it's generally not ideal to do a token sale in the middle of a market bloodbath as we are currently experiencing. Assets from all sectors of crypto are down, not just Aavegotchi. We are actually holding fairly strong in comparison.

However, the DAO has voted to do this sale, and it passed overwhelmingly, so the DAO will also need to vote to delay it."

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/delay-the-3rd-land-auction/4063)

Option 1: Yes, delay LAND 3 Release

Option 2: No, continue as planned

**Voting Period:** 22 - 29 June 2022

**Results:**

table_agip35

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0xf614634f7b1864d19ea144dd68280df6c3cb3e514e2e20929767e6ccd2f4022c)

<hr>

### Tận Dụng "Vùng Nóng" Truyền Khoáng

**Aavegotchi Improvement Proposal #36**

**Proposal Summary:**

There has been a lot of heated discussion about bots, scholars, spillover and more. A lot of it completely misses the point though, at least in my opinion. I went more in-depth on why I don't believe botting to be the primary problem at the moment in a comment [here](https://dao.aavegotchi.com/t/keeping-the-status-quo-of-disabled-spillover-for-a-while/3845/172).

So I started playing around with the numbers for spillover radius & rate, but I just couldn't find a satisfying solution. Reducing them only by a bit would barely have an effect, while reducing them drastically would devalue high level Aaltars. When I went through the blog post on channeling radius it finally clicked though! The mechanic was right there, just not utilized to its full potential (or at all really): The Hot Zone.

It became obvious pretty quickly that the Hot Zone wasn't so hot after all. The name simply implied that statistically speaking, 10% of the spillover would spawn inside of the inner 10% radius, 20% inside of the inner 20%, etc. This results in a slightly higher drop rate closer to the parcel, but in reality it barely makes a difference (only a single digit % of all spillover spawns in the "Hot Zone"). I want to propose allocating a fixed % of the spilled Alchemica based on Aaltar level.

Combined with a proposed radius of 60 Gotchis (compared to the 64x32 measurements of a Spacious), dropping a larger amount of Alchemica inside of the Hot Zone would suddenly make spillover feel much more like actual spillover instead of a random token drop around the map.

Imo this would:

- Create an interesting mechanic around the concept of spillover (as seen in the OG trailer)

- Add an incentive for players to pick up their spilled tokens instead of channeling & logging off (and writing off the spillover completely)

- Reduce the advantage of bots, since picking up spillover becomes less of a grinding & more of a channeling mechanic

- Overall make the Gotchiverse in its current form more interesting

Lastly, I would like to note one thing. This proposal suggests introducing the Hot Zone mechanic as soon as spillover is resumed. However, the reverse is not the case. This proposal is not a vote to turn spillover back on, I merely believe it to be one piece in the larger puzzle.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/utilizing-the-channeling-hot-zone/4055)

Option 1: Yes, use the proposed model

Option 2: No, don't change anything

**Voting Period:** 22 - 29 June 2022

**Results:**

table_agip36

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0xd610a038fb70717cefa788332d6cfbfd4504723fa2b33dc5689b542752da3cde)

<hr>

### Configure VP for amGHST, wapGHST, and all GLTR Staking

**Aavegotchi Improvement Proposal #37**

**Proposal Summary:**

As we have now launched GLTR staking and most of us have moved our liquidity from the FRENS pools to the GLTR pools, it is time to make those pools officially part of the voting power.

The VP would be as follows, which is simply a continuation of how we have done everything on the FRENS staking side-

The affected pairs and tokens to be added, are as follows -

- amGHST(GHST staked on Aave)

- wapGHST (unstaked, staked on FRENS side, or staked on GLTR side)

- stkGHST-USDC (not added on GLTR side yet)

- stkGHST-MATIC (not added on GLTR side yet)

- stkGHST-GLTR

- stkGHST-FUD

- stkGHST-FOMO

- stkGHST-ALPHA

- stkGHST-KEK

VP is calculated as follows -

- amGHST, wapGHST - 1 VP per token

- All supported pairs that receive GLTR rewards - 1 VP per GHST staked, calculated at time of Snapshot. Again, this is simply a continuation of how we have treated GHST and staking in the past.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/vp-for-wapghst-alchemica-lps-and-glitter-lps/4106)

Option 1: Yes, do it

Option 2: No, don't

**Voting Period:** 3 - 10 August 2022

**Results:**

table_agip37

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x9923aab6825158ec2503d88e3ee2f9c5fbb12000581d06343ac9829aa59b66a6)

<hr>

### Stop new BRS Wearable Emissions until further notice

**Aavegotchi Improvement Proposal #38**

**Proposal Summary:**

_Problem_

Over the lifespan of Aavegotchi, we've endured many wearable dilution events which have negatively impacted our community by:

- Loss of investor confidence (and investors)

- Depreciation of asset values

- No known schedule for releases, resulting in uncertainty in the markets

- In bullish conditions, new wearables would be released, capping our upside growth

It makes sense to have a wearables budget. Something the whole community can see and investors can easily digest. A cap based on total live gotchis was proposed, but in truth it does not accurately depict the true usage of assets.

The community by and large agrees on a budget, however at this moment in time, we don't have the metrics or data to create one. This budget is likely going to come from data such as daily active users (once PvP is live).

_Proposal_

This proposal is simple and straightforward:

1. No new BRS-based wearables until the DAO votes on a budget

2. That budget will be developed at a later date once the data is available

The idea is to restore investor confidence and allow us to sleep a bit easier at night, knowing that our assets will not suffer from spontaneous dilution.

Note: this proposal does not include aesthetic wearables, new set creations, or set rebalances (such as Link Marine)

_Associated Risks_

I don't see any potential risks for this proposal.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/setting-a-fixed-cap-on-new-wearables/4211)

Option 1: Yes, stop new wearables

Option 2: No, keep things as is

**Voting Period:** 3 - 10 August 2022

**Results:**

table_agip38

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0xec282bd937a1d85a17726cc00711b78e2fc2f0125ff9af127ddb77497dd024e5)

<hr>

### Modifying the Channeling Window

**Aavegotchi Improvement Proposal #39**

**Proposal Summary:**

After trying out the 24 hour channeling window, many people were displeased with the results that it achieved.

Issues with the current system include extra server load from Midnight to 1 UTC, the creation of a "prime time" where there is a short window of time where most alchemica is spilled, and problems caused by needing to channel a gotchi before putting it on the market(we do not have the full action control lists yet).

The goal of this sig prop, is to give quality of life improvements to Gotchi owners with creating an exploitable mechanic or causing undue server loads or other issues.

The proposed solutions are to either to A) revert to the original implementation, as presented in the Gotchiverse Bible, B) Leave the system as is and let the issues resolve themselves over time, or C) Keep the current system, but add a feature that lets you burn glitter to move your gotchi(s) channeling window reset time forward by one block, per glitter spent.

The implementation, would be that we are given a way to adjust one or all gotchis channeling window, by spending GLTR to move the window forward one block per GLTR spent. It will only be possible to move the time forward, and you can only do this, if the gotchi(s) are currently able to channel.

The risks associated with this are that there will be unintended consequences, as always.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/giving-gotchi-owners-the-ability-to-reduce-cooldown-time-for-solo-channeling/3107)

Option 1: Revert to the original solution

Option 2: Keep the current solution

Option 3: Use GLTR to move channeling

**Voting Period:** 26 August - 2 September 2022

**Results:**

table_agip39

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0xb41fe70a12f107d9dc8f0c8aa0346b53d9c35866a5e71ce717253f02ba4ddd7b)

<hr>

### Sunsetting FRENS Immediately

**Aavegotchi Improvement Proposal #40**

**Proposal Summary:**

I propose that we cease FRENS emissions immediately. FRENS emissions have been used as a liquidity mining (LM) incentive by providing GHST holders and liquidity providers access to future content through the raffle system. While this was an initially effective tool for LM, it is now doing more harm than good. Outlined below and in the forum thread are the reasons why Aavegotchi should sunset FRENS:

- Eliminating FRENS will reduce Aaveogotchi protocol pressure to hold dilutional events by eliminating ongoing “content debt” created by FRENS emissions

- GHST has alternative staking utility with GLTR liquidity mining

- Shifting focus to alchemica/GLTR pairs reallocates LM rewards to asset holders who are more directly providing value to the ecosystem in the form of liquidity vs single-sided GHST staking which provides limited and historically overcompensated value

- Future content events can generate protocol revenue instead of paying out content debt. This allows for a more sustainable revenue stream for Pixelcraft and the Aavegotchi DAO

- The value of future content can be captured on-chain with GLTR/Alchemica/GHST instead of off-chain with FRENS

- Capturing on-chain value of the above native assets will significantly add utility to all tokens

- Current FRENS and raffle ticket holders must be acknowledged with raffle(s). There are multiple avenues for this which are outlined in the DAO forum thread. The community can design and publicize events to utilize these FRENS which will be an easier task if we stop further emissions and narrow the scope of the raffle with cessation of FRENS’ emissions.

There will be an additional signal proposal outlining changes to GLTR emissions to support liquidity provision for the GHST token specifically. While the bonding curve is in place, it is important that a sustainable GHST liquidity plan is in place that captures and rewards LPs fairly and sustainably.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/sunset-frens-by-october-1st/4255)

Option 1: Sunset FRENS immediately

Option 2: Taper FRENS w/ end date of 10/1

Option 3: Keep FRENS as they are

**Voting Period:** 26 August - 2 September 2022

**Results:**

table_agip40

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x9d8fa69132f66ad8e665549cff91c08de8687a72d2702cb66cd41dbb877f09f7)

<hr>

### Update GLTR Emissions

**Aavegotchi Improvement Proposal #41**

**Proposal Summary:**

I propose that we alter GLTR emissions to optimize GHST liquidity and support the sunsetting of FRENS as outlined in the “Sunset FRENS" proposal.

The above proposal and this one will accomplish the following:

- Retire the GHST-QUICK liquidity pool liquidity mining rewards (currently FRENS)

- Retire the GHST-WETH liquidity pool mining rewards (currently FRENS)

- Retire the GHST-MATIC liquidity pool mining rewards (currently FRENS + GLTR)

- Add 5% weight to the GHST-USDC LM rewards (taken from GHST-MATIC) for a total of 20%

- This consolidation will maximize our most successful pool in GHST-USDC. It will eliminate rewards for unpopular pools and help grow our most successful pool. The GHST-WETH pair was borne from the Dinoswap pool which is a failed project. The GHST-MATIC pair is the only one on SushiSwap which is an inactive exchange on Polygon. Neither project offers ongoing LM incentives. The increase in GHST-USDC LM rewards is necessary to offer compensation for the impermanent loss risk incurred by the pair, otherwise single-sided staking for wapGHST will be prioritized and not afford further depth in the GHST-USDC pool. Below is the chart with highlighted changes to GLTR emissions and resultant estimated APYs.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/sunset-frens-by-october-1st/4255)

Option 1: Yes. Increase USDC remove MATIC.

Option 2: No. Leave emissions unchanged.

**Voting Period:** 26 August - 2 September 2022

**Results:**

table_agip41

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x304df0644d5ba0c929066959c5a2d585a2597630fa90a4642ffe8315e256d31a)

<hr>

### Setting limits on the number of borrowed gotchis allowed per wallet address

**Aavegotchi Improvement Proposal #42**

**Proposal Summary:**

Until recently there have been no limits on the number of gotchis an address can borrow at the same time, either from a whitelist or from the open (non whitelisted) market.

This was recently changed to a limit of 1 borrowed gotchi on the open market and 1 by default on all whitelists. A whitelist owner can change the number of allowed borrowed gotchis per address using Louper Dev, and soon, through the official UI.

This change was put in place with no warning as an experiment in anti botting measures. Community members had reported difficulty in securing a gotchi to borrow for channelling, particularly around the 0:00UTC reset time, which has been attributed to bots scraping all the best rental offers before humans get a chance.

The change has so far seen Gotchigang report an increase in available gotchis to borrow around reset time which is a positive.

On the negative side, other Gotchigang have reported being unable to fully channel their aaltars due to not being able to rent enough gotchis. This is particularly for borrowers who’ve paid, say, 20ghst for a long term rental and are now stuck with that 1 gotchi and are unable to channel other parcels using other borrowed gotchis. This issue will tend to grow over time as people level up their aaltars and generate more channelling opportunities. The current limit on the open market is a disincentive to levelling up aaltars and purchasing more land for those without enough gotchis who prefer longer term rentals. It could also severely limit the demand for lending out gotchis long term, however it forces people to approach multiple guilds/whitelist owners for spots which is a positive for the social element of the game.

A poll was run in the weekly DAO Hangout by CoderDan with the results suggesting most community members would prefer the allowed number of borrowed gotchis on the open market to reflect the number of parcels a wallet address holds plus 1, so in theory each parcel could be channelled once per day whilst still holding longer term rentals. For single channel rentals this is less of a concern as people can return a gotchi and borrow another as soon as they’ve finished using it.

Further increasing the borrowing limit up to the number of available channellings per address was suggested by considering aaltar levels as well, but it was deemed too inefficient to be constantly recalculating this number dynamically in the background.

As this was an experiment, I propose we revert these changes back now and continue to monitor the impacts so we can be clearer on the severity of the botting issue and be more confident in the effectiveness of this solution, whilst voting to implement the below.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/reform-public-rental-market/4089)

Option 1: Limit market to # of parcels + 1

Option 2: Keep original unlimited system

Option 3: Unlimited open, limit whitelists

Option 4: Limit open market to 1

**Voting Period:** 26 August - 2 September 2022

**Results:**

table_agip42

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x9b2559ed4cd5dd0c4c3c9b90b73e0e93c839aef64cd00df2d65cc8e97886ac0f)

<hr>

### Add DAO Liquidity to GHST-Alchemica Pairs

**Aavegotchi Improvement Proposal #43**

**Proposal Summary:**

I propose that the Aavegotchi DAO add 50,000 GHST + matching alchemica liquidity to the GHST-Alchemica pairs. Further, I propose that we do not stake corresponding LP tokens for GLTR.

The benefits of adding liquidity are multiple:

- Allows for lower slippage trading which will attract more trading and investment

- Legitimizes the Aavegotchi ecosystem, its farming, and the native tokens

- Supports land investors and, more specifically, those actively farming their land

- Allows the DAO to earn trading fees on the liquidity provided

There are also some risks which should be considered:

- Impermanent loss may decrease the net dollar value of DAO treasury funds

- Asks a difficult question of whether or not to stake LP tokens for GLTR and compete directly against community stakers for rewards

- Paying for liquidity is an expense in our ecosystem. In the long term, revenue must outweigh expenses for the Aavegotchi economy to thrive and assets to gain value. We should seriously consider our expenses vs revenues moving forward as we incentivize liquidity, hence the recent passed proposal to terminate FRENS which will both decrease expenses and allow NFT distributions to generate revenues

There is currently only $732,000 TOTAL in liquidity among the four alchemica-GHST pairs. Anything above a 1500 GHST swap has a price impact >1% which is not acceptable for a GameFi blue chip looking to instill investor confidence and attract new, large builders. Let’s bolster liquidity now and develop a sustainable and predictable plan to continue to add DAO liquidity at an, ideally, expense neutral rate. We can partner with the incoming DAO Project Manager(s) and community bounty hunters to further define DAO revenues and expenses to formulate our liquidity plan.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/add-dao-liquidity-to-ghst-alchemica-pairs/4309)

Option 1: Add 50k GHST + equal alchemica

Option 2: Add 30k GHST + equal alchemica

Option 3: Do not add GHST/alchemica to LPs

**Voting Period:** 13 - 20 October 2022

**Results:**

table_agip43

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x57055266d44a9c8679807c917fb0518bfd3ea92e6f21e81b977ce9892c191b6a)

<hr>

### Mint and Transfer 50 DAO Parcels and 4M FUD Eq. of Alchemica to the DTF for Contributor Compensation

**Aavegotchi Improvement Proposal #44**

**Proposal Summary:**

I propose that 50 DAO parcels from district 30 be minted and sent to the DTF multisig in addition to 4M FUD Equivalents worth of alchemica.

This will allow us to leverage DAO assets other than GHST to compensate our contributors. We have a variety of assets as a protocol, some of which have considerable goodwill value such as parcels in the DAO district. We can leverage these assets to better compensate and acknowledge past, current, and prospective contributors. Parallel to this effort, a transparent, stepwise process towards earning a DAO parcel will be designed. Potential pros of using alchemica/minted NFT displays/parcels as compensation:

- Gives the DAO more options in reimbursing contributors

- Leverages assets outside of GHST

- Develops and promotes a contributor/builder culture specifically inside the gotchiverse

- May have potential cascade effect where contributors build and develop their earned parcels, keeping assets within the ecosystem

- Fosters building and development in the DAO district which should hopefully be a spotlight of activity in the gotchiverse.

An example of contributor compensation would be a DAO parcel with a LE NFT display and custom NFT – an incredibly meaningful and valuable token of appreciation for DAO contributions.

The specific parcels will be defined in the core proposition if this signal proposition passes. Feedback and ideas on specific parcel allocation is appreciated and should be directed to the included DAO discourse thread above. If the DTF is absorbed by the new DAO structure, the parcels and alchemica can be sent to the same multisig holding the DTF budget funds.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/requesting-alchemica-and-30-dao-parcels-for-the-dtf-to-use-as-contributor-compensation/4401)

Option 1: Yes. Transfer Parcels/alchemica

Option 2: No. Don't use parcels/alch.

**Voting Period:** 13 - 20 October 2022

**Results:**

table_agip44

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x1338064afddf6631e90e1a95d12117cf516e5de54e00eb557db5996845f75f47)

<hr>

### Preventing Owners From Channeling Gotchis Listed For Lending

**Aavegotchi Improvement Proposal #45**

**Proposal Summary:**

The idea here is fairly simple. To prevent gotchi owners from channeling their gotchis while they are listed for rent on the aavegotchi site. The reason for this is that we saw at least a few instances of owners listing their gotchis for rent then immediately after channeling. What would happen was that an unexpecting player would check the rental market after the gotchi was rented but before it got channeled and would then be stuck renting a channeled gotchi. The owner would get the channeling alchemica as well as the rental fees from the borrower.

This hasn’t been a widespread issue yet because not many people are maliciously doing it, it also needs to be timed well with someone checking the rental market at the wrong moment. But I don’t believe there is any benefit to allowing owners the ability to make use of this exploit.

As per Dan on the thread, the implementation is ready so it won’t require anymore dev time, there just happened to be some minor pushback on this idea so the devs don’t want to implement it without a vote.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/preventing-gotchis-listed-for-rental-from-being-able-to-channel/4388)

Option 1: Stop listed Gotchi from channeling

Option 2: Do nothing

**Voting Period:** 2 - 10 November 2022

**Results:**

table_agip45

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0xfa99468d3de270ad12ae805651cae5b7a2a52ac3f1e0ff547308c6c7055ee040)

<hr>

### Creating New Wearable Sets

**Aavegotchi Improvement Proposal #46**

**Proposal Summary:**

During the new wearables moratorium, the opportunities to fix existing sets and to introduce new sets involving ONLY current wearables were identified.

The "broken" sets were successfully fixed via patch, and different members of the community put forth their suggestions for new wearable sets. Existing Pixelcraft guidelines for the composition and bonuses of each wearable set, mainly based on the rarity of the highest component, were applied.

In the referenced forum link, polls were established for all members of the community to be able to express their support for a particular set.

The spreadsheet with details for all proposed sets is available at: [https://docs.google.com/spreadsheets/d/174ea8dzcO3yiBOgCvAIdUuQkK5_AHG3FoZdMunAJZYY](https://docs.google.com/spreadsheets/d/174ea8dzcO3yiBOgCvAIdUuQkK5_AHG3FoZdMunAJZYY)

The ideation Discord thread where the ideas for the sets were brainstormed can be referenced at: [https://discord.com/channels/732491344970383370/992288286271864832/1002569658634862602](https://discord.com/channels/732491344970383370/992288286271864832/1002569658634862602)

It was decided by consensus that Pixelcraft would retain ultimate veto and decision power in the ultimate implementation of these sets. At large, this effort has been also a means to share with the broader Aavegotchi DAO public how the process has previously worked between WTF and Pixelcraft i.e. a volunteer-dependent process, that nonetheless can achieve great things for the ecosystem by harnessing the different talents and creativity of all of our frens.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/new-wearable-sets-existing-wearables-only/4421)

Option 1: Yes, create new sets

Option 2: No, don't do anything

Phương án 3: Phiếu Trắng

**Voting Period:** 2 - 10 November 2022

**Results:**

table_agip46

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x4955553b76b9bcaaa0bb0cec2928d0bed759cf957c17f02496452f8d1426c85c)

<hr>

### Enacting a Bonding Curve Emergency Plan

**Aavegotchi Improvement Proposal #47**

**Proposal Summary:**

There is a lot of uncertainty concerning the regulation of decentralized smart contracts (Tornado Cash) and stablecoins. Since GHST is closely tied to DAI's value, we need to monitor those developments very closely. If anything happens to DAI, our entire treasury (and GHST's stability) is at risk.

In this proposal I want to define the potential cases of emergency and the actions the multisig currently managing the GHST Bonding Curve on Ethereum mainnet needs to take to mitigate risks. Again, as long as DAI works as intended, this proposal does not suggest messing with the Curve - that is a completely separate discussion.

_Emergency Scenarios_

1. DAI loses dollar peg: As long as USDC backing is intact, no action needed. Signers should however set alerts for $0.95 and $0.90 to be notified of a potential depeg so they're able to act immediately as the situation unrolls.
2. MakerDAO shifts away from a dollar backing: Very long-term strategic consideration, will probably take 2-3 years to unfold. No immediate action needed, more relevant for the discussion surrounding a general Curve shutdown.
3. This is the important one. MakerDAO contracts get blacklisted by Circle (USDC) due to regulatory reasons: Signers would have to act immediately to protect the value of GHST's backing. I propose immediately shutting down the Curve and swapping the DAI for USDC. This ensures that we lock in some of our treasury's value, it does however remove the main source of liquidity for GHST. To make sure GHST doesn't enter a free fall, $5M worth of USDC should immediately be paired with $5M worth of treasury GHST in our main Quickswap pool.

Using the current numbers, this would leave us with ~$18M USDC - the majority of which should be used to buy back the paired GHST and build up a larger LP position. The initial LP position would double our current pool and buy enough time to decide on next steps.

Keep in mind that this is a very unlikely emergency scenario. We should be prepared for everything though, getting caught with our pants down could wipe out a large sum of our treasury value and put GHST in a very vulnerable position.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/bonding-curve-emergency-plan/4397)

Option 1: Yes, follow this Emergency Plan

Option 2: No, ignore this Emergency Plan

**Voting Period:** 2 - 10 November 2022

**Results:**

table_agip47

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x73f93b7e65d0e45f5cce9e46b019d60f49a7a3d1b43bf9e3e12a718cccbe7769)

<hr>

### The Forge - Request for Funding and Development

**Aavegotchi Improvement Proposal #48**

**Proposal Summary:**

Introducing the Forge:

TL;DR

- You can turn wearables into other wearables with the forge mechanic

- Wearables are made of alloys + schematics (the recipe) + Frames

- This allows many new wearable designs

- This process can be deflationary, making room for new wearable sales and protecting current asset value

- This 50,000 GHST will go to fund the development of the Forge, its mechanics, smart contracts, art, and educational materials

- The goal is for the DAO to do as much of the work as possible to avoid delaying Pixelcraft’s other efforts

- See the Project Overview and Google Sheet documents for extensive details

- Know that this is all a work in progress and we would all benefit from broad DAO contributions

_Budget Request and Purpose:_

50k GHST to pay for development of smart contract work, economics team, project management, art bounties, dashboard bounties, and event/rewards for launch

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/the-forge-aalloys-essence-and-smithing-a-massive-proposal/4432)

Option 1: Yes, fund the Project 50k GHST

Option 2: No, don’t fund development

**Voting Period:** 2 - 10 November 2022

**Results:**

table_agip48

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x3f162f96d0bf396cb2cc3f9f39818cbaee7747441e0c50785b84aa243797b940)

<hr>

### Adjust Aaltar Spillover Rates

**Aavegotchi Improvement Proposal #49**

**Proposal Summary:**

There's been a lot of debate in the DAO this week around alchemica inflation. It's clear that our economy cannot handle the amount of tokens being currently issued. Therefore, we have come up with a proposal to increase spillover rate in lower level aaltars to help reduce the amount of alchemica being issued and encourage frens to upgrade their aaltars. We believe this will stabilize the economy until more alchemica sinks are introduced in the eagerly anticipated combat release.

The table in the Discourse thread shows the Daily FUD inflation rate caused by chanelling, broken down by aaltar level. You can see the current inflation levels and spillover rates, our new proposed spillover rates and the reduction in inflation this will cause.

We believe these measures are necessary given current economic conditions but we are always free as a DAO to change them at a later date in light of new information or more alchemica sinks being introduced.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/alternative-alchemica-economic-plan/4490)

Option 1: Change to Proposed Aaltar Rates

Option 2: Do Nothing

**Voting Period:** 11 - 19 November 2022

**Results:**

table_agip49

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x534f44397f79c8583ceef44e42ffa8e246e15f3498aac92b3e34b65c313782f3)

<hr>

### Create AavegotchiDAO Foundation

**Aavegotchi Improvement Proposal #50**

**Proposal Summary:**

AavegotchiDAO was summoned as a 100% on-chain DAO in September 2020 via the deployment of the GHST bonding curve. Since then, the DAO has matured into one of the world’s most active with over forty successful AGIPs passed and extremely healthy metrics on Snapshot. Over this period we also graduated across our DAO’s roadmap, going from DAO 1.0 into the more experimental period known as Cocoon, our precursor to Metamorphosis (AKA DAO 2.0). Achieving Metamorphosis requires the DAO to further decentralize and accept more responsibilities currently guarded by the original summoners and Pixelcraft Studios.

Today we propose the next major step forward by suggesting it is time for AavegotchiDAO to add an off-chain presence to our decentralized autonomous organization. The following proposal is rooted in months of research and interfacing with a variety of legal advisors. We also take the practices of leading peers such as ENS and Sushi into consideration, opting for Foundation formation in the Cayman Islands coupled with on-chain governance being secured as primary via the Foundation’s Constitution.

My proposal is for us to form the AavegotchiDAO Foundation in the Cayman Islands as soon as possible by following these steps:

- Gather all interested in serving as one of nine Directors on the Foundation. These nine Directors simultaneously are seated on the Foundation’s newly formed multisig wallet. All serving must be KYC’d.

- Host election via Snapshot where the nine most voted for shall serve as Directors of the Foundation until further notice (The DAO should likely flesh out details for term length etc with a separate AGIP at a later date). The election shall happen in parallel to this proposal’s CoreProp.

- Submit the nine fully KYC’d Directors details to our legal counsel from LEX DAO so that they can immediately begin Foundation formation. This will be completed in days, not weeks.

- Upon formation of the Foundation, the Directors shall create the new Foundation’s primary multisig using Gnosis.

- Pixelcraft Studios shall transfer DAO Treasury multisig funds to the Foundation multisig, including DAI, GHST, and Alchemica on both Ethereum and Polygon networks.

- The Foundation is thus formed, ready to execute transactions according to the will of AavegotchiDAO. Further definitions of responsibilities, scope, goals and limits can be defined by the DAO at a later date.

**FOUNDATION DETAILS**

_Entity_

- A Cayman Islands foundation with a board consisting of 9 Directors, who are also the multisig signers of the DAO Treasury wallet.

- Legal Counsel shall arrange a local officer to act as secretary fulfilling basic administrative requirements until further notice.

- Legal Counsel shall arrange a local corporate secretarial service to assist with Foundation formation, documentation and production of financial statements.

_DAO Treasury_

- All DAO treasury funds present and future shall be transferred to the Board’s multisig.

- The GHST Bonding Curve Council tokens could potentially also be transferred to the multisig signers, via a new AGIP proposal.

- Eventually, all protocol contracts could be owned by this multisig, or if that is deemed not ideal, could be owned by the DAO itself (onchain voting) with the Board multisig action as a last resort Guardian to prevent malicious transactions.

_Bank Account_

Upon formation of the Foundation, legal counsel will confer with our corporate secretary to establish a Cayman Island’s bank account on the Foundation’s behalf. While not immediately useful, we have requested that this bank account be opened so as to futureproof the DAO to be able to natively settle any off-chain expenses (tradfi subscription fees, service providers, etc).

_Board of Directors_

Consists of nine doxxed Directors that also act as multisig signers on the DAO Treasury multisig. The DAO Treasury multisig shall be set at 5/9 signers in order to execute.

Paid position starting at 8000 GHST per year, paying 2000 GHST to each Directory directly from the Treasury multisig every 90 days.

The Board acts as the executor of the DAO’s wishes. If individual Directors disagree with an action of the DAO, they can choose to resign but they cannot vote or act against a verified on-chain AGIP’s intent.

Candidates should:

- Be upstanding members of AavegotchiDAO with good reputations

- Be familiar with smart contract interactions

- Possess a hardware wallet and know how to use it

- Be willing to have your name on a Cayman entity and be doxxed to Pixelcraft Studios

- (Nice to have) Be familiar with creating transactions and signing on Gnosis Safe

_The Officer_

The Foundation also requires at least one Officer to serve an official capacity for signing off-chain documentation. Legal offers a package to deliver one local Officer to fulfill this role. This is not a role for advocacy so this Officer will simply execute signatures at the direction of the Directors. Of course, AavegotchiDAO can always revisit or even expand Officer roles at any point.

_The Constitution_

Legal Counsel will draft and supply a first version of a Constitution that takes best practices from fellow DAOs into consideration. Counsel will submit this Constitution in the form of a commentable Google Sheet for our community to give feedback and suggest changes.

Counsel and the DAO shall go back and forth in up to three drafts before the Constitution is sent to Snapshot for a three-day CoreProp regarding ratification.

If ratification fails, another two drafts shall be edited before re-submitting for another CoreProp vote. This process continues until a ratification of the Constitution is achieved.

Due to the critical nature of this CoreProp and the fact that it skips the SigProp step, the CoreProp vote shall require a voting result with those in approval at 66% or greater.

_Benefits of Formation_

- Independence; greater separation of Pixelcraft Studios from AavegotchiDAO

- Board can execute proposals on behalf of the DAO (Liquidity provision, GHST staking, funding Dework, etc.)

_Risks of Formation_

- More responsibility on AavegotchiDAO governance

- More exposure to any future policy shifts specifically in the Cayman Islands jurisdiction

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/form-aavegotchidao-foundation-with-9-directors-multisig-signers/4551)

Option 1: Yes, let’s form AavegotchiDAO Foundation

Option 2: No, let’s wait and discuss more

**Voting Period:** 27 November - 4 December 2022

**Results:**

table_agip50

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x345ddec87f19d29b438ac88d0f947798af6edadbe1116cb64f96edc931f06fb3)

<hr>

### Election for DAO Foundation’s 9 Directors/Multisig-Signers

**Aavegotchi Improvement Proposal #51**

**Proposal Summary:**

This COREProp Will serve as the election for the AavegotchiDAO Foundation’s 9 Directors/Multisig-Signers.

The board of Directors Consists of nine doxxed Directors that also act as multisig signers on the DAO Treasury multisig. The DAO Treasury multisig shall be set at 5/9 signers in order to execute.

Director is a paid position starting at 8000 GHST per year, paying 2000 GHST to each Director directly from the Treasury multisig every 90 days.

The Board acts as the executor of the DAO’s wishes. If individual Directors disagree with an action of the DAO, they can choose to resign but they cannot vote or act against a verified on-chain AGIP’s intent.

Directors have no legislative power, execute off-chain commands of the DAO, and simultaneously serve as signers of the Foundation's gnosis multisig.

Their first order of business once elected will be creating that multisig.

Candidates should:

- Be upstanding members of AavegotchiDAO with good reputations

- Be familiar with smart contract interactions

- Possess a hardware wallet and know how to use it

- Be willing to have your name on a Cayman entity and be doxxed to Pixelcraft Studios

- (Nice to have) Be familiar with creating transactions and signing on Gnosis Safe

The following community members have signaled their interest in becoming AavegotchiDAO Foundation Directors:

- CryptoGotchi#9089

- Maxicrouton#1596

- Mori#5912

- Nofuturistic#1972

- Zaunzi#1831

- PG#0811

- MichaelF#0901

- yanik#0015

- Choyna#0001

- Rikige#0073

- fifoooo#8782

- cookheisenberg#9322 (SirLinkiest)

- notorious_BTC#2084

- brillz#7019

- Mycaleum#8283

- 0xzfi#4880

- Zeitgeist#6030

- Umami#9686

- Mcabandonpants#1498

- Kokusho#9945

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/form-aavegotchidao-foundation-with-9-directors-multisig-signers/4551)

Please read each of their pitches before casting your vote at: [https://discord.com/channels/732491344970383370/1042466123574157382/1042466123574157382](https://discord.com/channels/732491344970383370/1042466123574157382/1042466123574157382)

Option 1: CryptoGotchi#9089

Option 2: Maxicrouton#1596

Option 3: Mori#5912

Option 4: Nofuturistic#1972

Option 5: Zaunzi#1831

Option 6: PG#0811

Option 7: MichaelF#0901

Option 8: yanik#0015

Option 9: Choyna#0001

Option 10: Rikige#0073

Option 11: fifoooo#8782

Option 12: cookheisenberg#9322 (SirLinkiest)

Option 13: notorious_BTC#2084

Option 14: brillz#7019

Option 15: Kokusho#9945

**Voting Period:** 27 November - 4 December 2022

**Results:**

table_agip51

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x1b8438ec161f2b18dad49ebfcc9524340d030f4ec69a5fd71f732290ccb51bb4)

<hr>

### Rarity Farming Season 5

**Aavegotchi Improvement Proposal #52**

**Proposal Summary:**

Gm frens,

I come to you bearing the anticipated S5 sigprop!

In the spirit of “if it ain’t broke don’t fix it”, I propose we keep things business as usual, since I believe our community has been having a bit of "change fatigue" of late - please refresh yourselves on the params of the past four seasons below:

4 Rounds (2 weeks each) 1.5 Million GHST Rewards Pool - to be funded by the DAO Treasury:

- 70% BRS

- 20% Kinship

- 10% XP

Top 7.5k Gotchis (30%)

Ideal launch period in the mind of the author: after the deployment of The Forge, or January 2023, whichever comes first.

Thank you as always for your consideration and your votes.

Stay spooky frens!

Changes from Sigprop:

The author has agreed that the next Rarity Farming Season should come after the deployment of The Forge, or January 2023, whichever comes first.

The source of funds has been updated from Gotchiverse Player Rewards wallet to DAO treasury.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/rf-szn-5-kickoff/4424)

Option 1: Yes, have S5 RF

Option 2: No, Don’t have S5 RF

Option 3: Yes, but with different params

**Voting Period:** 27 November - 4 December 2022

**Results:**

table_agip52

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x84119ecd3be2cd0fd2382ffaf2db0490967b3456ff19695e6629fdeeb9058dbb)

<hr>

### Channel Alchemica by Burning Kinship

**Aavegotchi Improvement Proposal #53**

**Proposal Summary:**

I propose to charge -4 kinship each time gotchi is channelling the altar.

This change gives a gotchi a choice to:

(1) accumulate kinship (+2 kinship /day) and improve the character farming specs

(2) take alchemica now and lose on the yield multiplier

By implementing this elegant and relatively simple solution, we are not only changing the alchemica dynamics and cutting the efficient inflation by 50% (in the wild should be closer to 60/40 or 40/60, depending on market conditions), but also making a game more strategic and exciting for long term players.

Such change is an excellent alternative to the current economic proposals and additionally will reduce the MATIC spend for channelling in half.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/kinship-og-kinship-economical-proposal/4524)

Option 1: Implement original kinship mechanics

Option 2: Do not implement

**Voting Period:** 27 November - 4 December 2022

**Results:**

table_agip53

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0xfb3766f05a6990514c618db06c2a74d8fd36298694740799e2dd23424a297115)