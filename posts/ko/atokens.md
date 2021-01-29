---
author: Unintelligent Nerd
date: '2020-04-23T07:00:00.000Z'
title: 'aTokens'
description: '아베고치 aToken에 관한 모든 것'
image: "atokens/aETH.svg"
contributors:
  - "unintelligent-nerd"
---

<div class="headerImageContainer">
<img class="headerImage" src="/atokens/aETH.png">
<p class="headerImageText">aETH aToken</p>
</div>

aToken은 [Aave](https://aave.com) Protocol에서 만든 '이자가 붙는' 토큰입니다. aToken들은 예치금이 있을 때 채굴되며 예치금을 다시 돌려받을 때 소각됩니다. aToken은 Aave Protocol에 예치된 자산의 가치와 1:1로 연동이 됩니다. aToken은 자유롭게 저장되고 교환되며 거래됩니다. Aave Protocol에 대해 좀 더 자세히 알고 싶은 분들은 [Aave FAQ](https://docs.aave.com/faq/)를 확인하세요! :)

그럼 aToken은 아베고치와 어떤 관련이 있을까요? 모든 아베고치는 생명이 부여되기 전에 aToken을 통해 가치를 확인받아야 하며 [포탈](/pages/portals)을 통해 소환되어져야 합니다. 예외는 없습니다! 따라서 여러분은 aToken이 필요하며 지금 여기서 여러분은 이용 가능한 aToken의 종류와 얻을 수 있는 방법에 대한 몇가지 도움되는 정보를 얻을 수 있습니다.

아베고치가 이더리움 메인넷에서 [메틱(Matic) 네트워크](/glossary#matic-network)로  변경되었을 때 aToken들은 메틱 네트워크에서도 이용가능해야만 했습니다. 하지만 다행히도 우리 팀의 유능한 개발자인 [Nick Mudge](/team#nick-mudge)가 메틱 네트워크로의 브릿징을 해냈습니다. 참고로 메틱 네트워크에서 aToken들은 maToken으로 알려져 있습니다.

게이머의 관점에서 아베고치 플레이에 몇가지 과정이 필요합니다.

1. 1. aToken 획득하기
2. aToken을 maToken으로 전환하기
3. 포탈을 개방시킨 후, maToken을 담보로 삼아서 아베고치를 소환시키기.

이번 페이지에서는 aToken의 방식을 알려드릴 것입니다.

참고로 아베고치에서 "Spirit Force", "담보(Collateral)", "aToken", 그리고 "maToken"은 모두 같은 의미입니다.

<div class="contentsBox">

** 목차 **

<ol>
<li><a href=#about>aToken이란</a></li>
<li><a href=#stablecoins>스테이블 코인</a></li>
<li><a href=#cryptocurrencies>암호화폐</a></li>
<li><a href=#getting-atokens>aToken 획득하기</a></li>
<li><a href=#converting-atokens-into-matokens>aToken을 maToken으로 전환하기</a></li>
</ol>

</div>

## aToken이란

기본 자산이 대출자에게 대출되는 동안, aToken은 실시간으로 지갑에서 이자가 붙습니다. 심지어 1분마다 잔액이 증가하는 것을 볼 수 있습니다.

aToken은 두 가지의 범주 속에서 하나로 결정될 수 있습니다. 바로 (1) 암호화폐 또는 (2) 스테이블 코인 입니다. 암호화폐는 디지털 상에서 사용되는 가상의 통화로 암호화되어 있습니다. 많은 암호화폐들은 분산된 컴퓨터들로 구성된 네트워크에 의해 작동되는 분산 원장, 즉 블록체인 기술을 기반으로한 탈중앙화된 네트워크들입니다. 반면 스테이블 코인은 USD와 같은 외부의 가치와 연동되어 가격 안정성을 제공하려고 하는 암호화폐의 한 종류입니다. 가치 연동에 있어 근원적인 메커니즘은 스테이블 코인마다 차이가 있고 각각의 방식엔 리스크가 존재합니다.


다음의 암호화폐 또는 스테이블 코인 으로 분류되는 [aToken](https://docs.aave.com/developers/deployed-contracts/deployed-contract-instances)들은 Aave Protocol에서 이용가능합니다. 그리고 *Supported by Aavegotchi* 칼럼에서 특정한 aToken이 아베고치 게임플레이에 이용할 수 있는지 아닌지를 알려줍니다. 하지만 지원되는 리스트에 있는 aToken들이 끝은 아닙니다. 트위터 또는 DAO에서의 투표를 통해 플레이어의 수요에 따라 아베고치 게임 플레이에서 더 많은 aToken들이 추가될 수 있습니다.

## 스테이블 코인

표 - 스테이블 코인

## 암호화폐

표 - 암호화폐

## aToken 획득하기

*Aave 미디엄에서 가져온 [ Zero to Hero Guide 2.0](https://medium.com/aave/zero-to-hero-guide-2-0-dadce0f3e834) 에 따르면 다음의 과정이 필요합니다. 독자들의 편의를 위해 내용 그대로 가져왔습니다 :)*

1). 우선 시작하기 위해서 <a href = "https://app.aave.com/">Aave Protocl</a>로 이동하셔야 합니다.

2). 여러분이 이용하는 지갑의 종류에 따라 crypto  지갑을 연결할 수 있는 옵션을 선택합니다.

<img src = "/atokens/connect-your-wallet.png" alt = "aave" class="bodyImage" />

3). Aave Protocol을 이용하기 전에 먼저 crypto 자산을 가지고 있어야만 합니다. 이용가능한 crypto 자산의 목록은 위에 있는 <a href=#stablecoins> 스테이블 코인 </a> 그리고 <a href=#cryptocurrencies> 암호화폐 </a> 표를 통해 확인할 수 있습니다.

만약 crypto를 가지고 있지 않지만 아베고치를 이용하고 싶다면 당신의 fiat(달러, 유로와 같은 화폐)을 위에 있는 것들 중 하나로 전환해야 합니다.

다행히도 Aave는 최근에 Aave Protocol의 어플리케이션에서 바로 crypto를 구매할 수 있는 fiat - crypto 서비스를 도입하였습니다. 이제 Transak이나 Ramp Instant를 통해 여러분이 선택한 자산을 신용카드나 직불카드 또는 송금으로 단 몇 분만에 구매할 수 있게 되었습니다.

<img src = "/atokens/buy-with-fiat.png" alt = "aave" class="bodyImage" />

4). 그 후 플랫폼으로 지갑을 연결했다면 Aave Protocol로 자산을 예치할 수 있습니다. "Deposit"을 클릭하면, 지갑에서 어떤 자산을 예치할 수 있는지에 대해 알려줄 것입니다. 예치하길 원화는 자산을 택하고, 수량을 정하고 나면 해낸 것입니다! * 주의 : 실질적인 예치 거래가 발생하기 전에 거래를 "승인"해야 하는 거래가 추가적으로 있습니다. 이는 예치중인 특정 자산을 사용하기 위해 예치 계약에 허가를 부여하는 것입니다.*

<img src = "/atokens/deposit.gif" alt = "aave" class="bodyImage" />

그 후, 예치거래가 끝나는 즉시 예치 이자율에 따라 수익을 얻을 수 있습니다. 그리고 예치된 자산이 aToken으로 지갑에 나타날 것입니다.

## aToken을 maToken으로 전환하기

aToken을 획득하셨나요? 좋습니다!

그렇다면 이제 [ maTokens ](/matokens) 페이지로 이동해 Step2를 진행해봅시다!