---
author: Dev Barnyard
date: '2020-10-13T07:00:00.000Z'
title: 'ブリッジ'
description: 'Aavegotchiブリッジ（Polygonとの間でアセットを転送するため）'
contributors:
  - "barneychambers"
  - "unintelligent-nerd"
---

<div class="headerImageContainer">
<img class="headerImage" src="/bridge/aavegotchi-bridge.gif">
<p class="headerImageText">Aavegotchiブリッジ</p>
</div>

ブリッジは、あるブロックチェーンから別のブロックチェーンにアセットを転送できるようにするソフトウェアです。

当初の計画は、2021年1月4日にイーサリアムメインネットでAavegotchiを起動することでした。 ガスが高いため、コミュニティは代わりにPolygon Networkでプロジェクトを立ち上げることに投票しました。 この決定の結果として、資産はあるネットワークから別のネットワークにブリッジする必要があります。

アセットの転送を容易にするために、Pixelcraftスタジオはユーザーが両方のネットワーク間でアセットをやり取りできるようにするAavegotchiブリッジを作成しました。 それ以来、他の橋も現場に到着しました。 このページでは、最も一般的なブリッジのいくつかについて説明します。

<div class="contentsBox">

**内容**

<ol>
<li><a href=#aavegotchi-bridge>Aavegotchiブリッジ</a></li>
<li><a href=#decentralized-bridges>分散型ブリッジ</a></li>
<p><a href=#polygon-bridge>Polygonブリッジ</a></p>
<p><a href=#umbria-narni-bridge>Umbria Narniブリッジ（ウンブリア・ナルニ）</a></p>
<li><a href=#centralized-bridges>中央集権化ブリッジ</a></li>
<p><a href=#ascendex>AscendEX</a></p>
<p><a href=#transak>Transak</a></p>
<p><a href=#crypto-com>Crypto.com</a></p>
<p><a href=#binance>Binance</a></p>
</ol>

</div>

## Aavegotchiブリッジ

Aavegotchiブリッジは、Pixelcraftスタジオによって作成された公式のブリッジです。 現在、ERC-20トークンとERC-721アセット（ゴッチ）をEthereumメインネットからPolygonネットワークに、またはその逆に転送できます。 ERC-1155ウェアラブルのブリッジングはまもなく登場します。

<img class="bodyImage" src="/bridge/aavegotchi-bridge.png" alt="Aavegotchi Bridge" />

Aavegotchiブリッジは、[こちら](https://aavegotchi.com/bridge)からアクセスできます。

以下は、ERC-20トークンをEthereumメインネットからPolygonにブリッジするステップバイステップの例です。

1). トークンのイメージ（下の赤い丸で囲んだ部分）をクリックして、トークンのドロップダウンメニューを開きます。 Polygonに転送するトークンを選択します。

<img class = "bodyImage" src = "/bridge/select-atoken-to-convert.png" alt = "Aavegotchi Bridge to Matic" />

2). 送金する金額を入力します。

<img class = "bodyImage" src = "/bridge/amount-to-transfer-to-matic.png" alt = "Aavegotchi Bridge to Matic" />

3). 「転送を承認」ボタンをクリックします。

4). 「Polygonに転送」ボタンをクリックします。

5). アセットがPolygonネットワークに表示されるまで約10分待ちます。

同じ概念が、PolygonネットワークからEthereumメインネットにアセットを送り返す場合にも同じです。

## 分散型ブリッジ

### Polygonブリッジ
Polygonブリッジは、EthereumとPolygonの間に作成された最初のクロスチェーンブリッジでした。 これはPolygonチームの公式ブリッジであり、バリデーターモデルを使用して、EthereumとPolygonの間でアセットを転送します。 このブリッジは$GHSTトークンを転送できますが、NFTアセットをブリッジすることはできません。

Polygonブリッジを使用したい場合は、次の手順を実行してください。

1). [ https://wallet.polygon.technology ](https://wallet.polygon.technology)でPolygon Web Wallet v2をアクセスします。 Polygonブリッジ（下の赤い丸で囲んだ部分）をクリックします。

<img class="bodyImage" src="/bridge/polygon-bridge-frontpage.png" alt="Polygon Bridge" />

2). ドロップダウンメニューからトークンを選択し、テキストボックスに金額を入力して、[Transfer]ボタンをクリックします

<img class="bodyImage" src="/bridge/polygon-bridge.png" alt="Polygon Bridge" />

トークンがPolygonアドレスに到着するまでに最大10分かかる場合があります。

何かサポートが必要な場合は、Aavegotchi [ Discord ](https://discord.com/invite/rttCTkZ)に参加して、フレンリーなコミュニティに聞いてください。

### Umbria Narniブリッジ（ウンブリア・ナルニ）
Narniブリッジは、ウンブリアネットワークによって作成された新しいブリッジソリューションであり、流動性ブリッジモデルを使用して、ブリッジのコストを最大90％削減します。 Narniブリッジは約5分でトランザクションを解決し、EthereumとPolygonのブロックチェーン間でGHSTトークンを転送するのに約〜100 GWEIかかります。 現在、ERC-20トークンのみがNarniブリッジと互換性があります。 NFTはブリッジできません。

Umbria Narniブリッジを使用するには、次の手順を参照してください。

1). [Umbria Narniブリッジ](https://bridge.umbria.network/bridge)をご覧ください。 発信元ネットワークと宛先ネットワークを選択します。

<img class="bodyImage" src='/bridge/umbria-network-selection.png' />

2). ドロップダウンメニューから、ブリッジするトークンを選択します。

<img class="bodyImage" src='/bridge/umbria-token-selection.png' />

3). ブリッジするトークンの金額を入力します。 Narniブリッジは、ブリッジした後に受け取るトークンの量の見積もりを提供します。 ブリッジは、チェーン間でアセットをブリッジするために0.5％の手数料がかかります。 料金はNarniブリッジをサポートする流動性プロバイダーに支払われます。

<img class="bodyImage" src='/bridge/umbria-fee-estimation.png' />

4). ブリッジするの時点で、2つのオプション（QRコードまたはMetaMask）が提供されます。 MetaMaskを使用したブリッジングが推奨されるアプローチです。 また、トランザクションがスタックするリスクを最小限に抑えるために、余裕のある最速の速度を選択することをお勧めします。

<img class="bodyImage" src='/bridge/umbria-confirming-transaction.png' />

5). トランザクションを送信した後、モーダルが表示されます。 最初のセクションには、ブリッジに向かうトランザクションプロセスが表示されます。 トランザクションがブリッジに到達すると、最初のチェックマークを受け取ります。 両方のティックを受け取るまでに数分かかる場合がありますが、10分以上かかる場合は、DiscordのUmbriaチームに連絡してください。問題の解決に役立ちます。

最後に、2つのピンクのチェックマークが表示されます。これは、トランザクションが正常にブリッジされたことを意味し、宛先ブロックチェーンのウォレット内のアセットを確認できるようになります。 この段階で画面上の関連するボタンをクリックすると、宛先ブロックエクスプローラーでトランザクションを確認することもできます。

<img class="bodyImage" src='/bridge/umbria-confirmation.png' />

Umbria Narniブリッジについて質問がある場合、または開発者チームのサポートメンバーとチャットしたい場合は、[Umbria Discordチャネル](https://discord.gg/8Ms7Cr4)に連絡してください。

## 中央集権化ブリッジ

### AscendEX

AscendEX（以前のBitMax）は、Polygonネットワークへの引き出しを可能にする暗号通貨プラットフォームです。 詳細については、以下のインフォグラフィックを確認してください。

<img class = "bodyImage" src = "/bridge/Using_AscendEX_and_play_Aavegotchi.jpg" alt = "Using AscendEX to play Aavegotchi" />

### Transak

Transakは、法定通貨から暗号通貨への支払いゲートウェイです。 ユーザーはクレジットカードを使用して支払い、指定したウォレットアドレスでトークンを受け取ります。

ステップバイステップガイドについては、コミュニティメンバーによるこの

投稿</ 0>を参照してください。</p> 



### Crypto.com

Crypto.comはモバイルアプリウォレットです。 Crypto.comでPolygonネットワークへのMATICまたはUSDCの撤回を可能にします。

1). [転送]を選択して--> 引き出す--> クリプト--> 外部ウォレット

2). 右上隅にある「+」記号をクリックします

3). 引き出すトークンを選択します。 その特定のトークンで引き出しが利用できる場合は、[ネットワークの選択]フィールドに[Polygon]のオプションが表示されます（下のスクリーンショットを参照）。

<img class="bodyImage" src="/bridge/cryptocom-withdrawal.png" alt="Crypto.com withdrawal to Polygon" />



### Binance

バイナンスは、世界最大の暗号通貨取引所の1つです。

2022年5月31日現在、[ポリゴンで直接GHSTの入出金ができるようになっているそうです](https://blog.aavegotchi.com/binance-enables-ghst-deposits-and-withdrawals-on-polygon/)。

<img class="bodyImage" src="/bridge/ghst-withdrawal-from-binance-to-polygon.png" alt="BinanceからPolygonへのGHST引き落とし" />