

interface Table {
    tableName: string
    tableData: TableData[]
}

interface TableData {
    headers: any
    data: any
}

export const tables
    = [
        {
            tableName: "stablecoins",
            tableCaption: "",
            tableData: {
                headers: ["Image", "Name", "Description", "Supported by Aavegotchi"],
                data: [
                    [`<img class="atoken" src="/spirit-force/aDAI.svg" alt = "aDAI token">`, "aDAI", "Stablecoin backed by collateral on the Maker Platform.", "Yes"],
                    [`<img class="atoken" src="/spirit-force/aUSDC.svg" alt = "aUSDC token">`, "aUSDC", "A fully collateralized US dollar stablecoin jointly created by Circle and Coinbase.", "Yes"],
                    [`<img class="atoken" src="/spirit-force/aTUSD.svg" alt = "aTUSD token">`, "aTUSD", "Stablecoin issued by TrustToken that is fully collateralized and legally protected.", "TBC"],
                    [`<img class="atoken" src="/spirit-force/aUSDT.svg" alt = "aUSDT token">`, "aUSDT", "A stablecoin that mirrors the price of the U.S. dollar, issued by Tether.", "Yes"],
                    [`<img class="atoken" src="/spirit-force/asUSD.svg" alt = "asUSD token">`, "asUSD", "A synthetic USD token enabled by the Synthetix protocol.", "TBC"],
                    [`<img class="atoken" src="/spirit-force/aBUSD.svg" alt = "aBUSD token">`, "aBUSD", "A 1:1 USD-backed stable coin issued by Binance (in partnership with Paxos).", "TBC"],
					[`<img class="atoken" src="/spirit-force/aGUSD.svg" alt = "aGUSD token">`, "aGUSD", "A USD Stablecoin issued by Gemini.", "TBC"]					
                ]
            }
        },

        {
            tableName: "cryptocurrencies",
            tableCaption: "",
            tableData: {
                headers: ["Image", "Name", "Description", "Supported by Aavegotchi"],
                data: [
                    [`<img class="atoken" src="/spirit-force/aETH.svg" alt = "aETH token">`, "aETH", "Digital, global money. The currency of Ethereum DApps.", "Yes"],
					[`<img class="atoken" src="/spirit-force/aAAVE.svg" alt = "aAAVE token">`, "aAAVE", "Governance token of Aave Protocol. Stakers provide security to the protocol.", "Yes"],
                    [`<img class="atoken" src="/spirit-force/aUNI.svg" alt = "aUNI token">`, "aUNI", "Governance token of Uniswap Exchange.", "Yes"],
                    [`<img class="atoken" src="/spirit-force/aYFI.svg" alt = "aYFI token">`, "aYFI", "Governance token of Yearn Finance.", "Yes"],
                    [`<img class="atoken" src="/spirit-force/aBAT.svg" alt = "aBAT token">`, "aBAT", "Token that powers Brave Browser and digital advertising.", "TBC"],
                    [`<img class="atoken" src="/spirit-force/aREN.svg" alt = "aREN token">`, "aREN", "Token that powers the RenVM and Darknodes.", "TBC"],
                    [`<img class="atoken" src="/spirit-force/aENJ.svg" alt = "aENJ token">`, "aENJ", "Token used to back the value of assets created on Enjin.", "TBC"],
                    [`<img class="atoken" src="/spirit-force/aKNC.svg" alt = "aKNC token">`, "aKNC", "Token that powers Kyber Network.", "TBC"],
                    [`<img class="atoken" src="/spirit-force/aLINK.svg" alt = "aLINK token">`, "aLINK", "Token that powers a decentralized oracle network.", "Yes"],
                    [`<img class="atoken" src="/spirit-force/aMANA.svg" alt = "aMANA token">`, "aMANA", "Native currency in Decentraland.", "TBC"],
                    [`<img class="atoken" src="/spirit-force/aREP.svg" alt = "aREP token">`, "aREP", "Token used to participate in Augur's prediction markets.", "TBC"],
                    [`<img class="atoken" src="/spirit-force/aSNX.svg" alt = "aSNX token">`, "aSNX", "Token that backs the synthetic assets on Synthetix Exchange.", "TBC"],
                    [`<img class="atoken" src="/spirit-force/aWBTC.svg" alt = "aWBTC token">`, "aWBTC", "Tokenized version of Bitcoin on Ethereum.",  "TBC"],
                    [`<img class="atoken" src="/spirit-force/aZRX.svg" alt = "aZRX token">`, "aZRX", "Token that is used to pay fees on the 0x protocol.", "TBC"],
					[`<img class="atoken" src="/spirit-force/aCRV.svg" alt = "aCRV token">`, "aCRV", "Governance token of Curve Finance.", "TBC"],
					[`<img class="atoken" src="/spirit-force/aBAL.svg" alt = "aBAL token">`, "aBAL", "Governance token of Balancer.", "TBC"]
                ]
            }
        },


    ]
