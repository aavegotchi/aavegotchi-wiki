

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
                    [`<img class="atoken" src="/atokens/aDAI.svg" alt = "aDAI token">`, "aDAI", "Stablecoin backed by collateral on the Maker Platform.", "Yes"],
                    [`<img class="atoken" src="/atokens/aUSDC.svg" alt = "aUSDC token">`, "aUSDC", "A fully collateralized US dollar stablecoin jointly created by Circle and Coinbase.", "Yes"],
                    [`<img class="atoken" src="/atokens/aTUSD.svg" alt = "aTUSD token">`, "aTUSD", "Stablecoin issued by TrustToken that is fully collateralized and legally protected.", "TBC"],
                    [`<img class="atoken" src="/atokens/aUSDT.svg" alt = "aUSDT token">`, "aUSDT", "A stablecoin that mirrors the price of the U.S. dollar, issued by Tether.", "Yes"],
                    [`<img class="atoken" src="/atokens/asUSD.svg" alt = "asUSD token">`, "asUSD", "A synthetic USD token enabled by the Synthetix protocol.", "TBC"],
                    [`<img class="atoken" src="/atokens/aBUSD.svg" alt = "aBUSD token">`, "aBUSD", "A 1:1 USD-backed stable coin issued by Binance (in partnership with Paxos).", "TBC"],
					
                ]
            }
        },

        {
            tableName: "cryptocurrencies",
            tableCaption: "",
            tableData: {
                headers: ["Image", "Name", "Description", "Supported by Aavegotchi"],
                data: [
                    [`<img class="atoken" src="/atokens/aETH.svg" alt = "aETH token">`, "aETH", "Digital, global money. The currency of Ethereum DApps.", "Yes"],
					[`<img class="atoken" src="/atokens/aAAVE.svg" alt = "aAAVE token">`, "aAAVE", "Governance token of Aave Protocol. Stakers provide security to the protocol.", "Yes"],
                    [`<img class="atoken" src="/atokens/aUNI.svg" alt = "aUNI token">`, "aUNI", "Governance token of Uniswap Exchange.", "TBC"],
                    [`<img class="atoken" src="/atokens/aYFI.svg" alt = "aYFI token">`, "aYFI", "Governance token of Yearn Finance.", "TBC"],
                    [`<img class="atoken" src="/atokens/aBAT.svg" alt = "aBAT token">`, "aBAT", "Token that powers Brave Browser and digital advertising.", "TBC"],
                    [`<img class="atoken" src="/atokens/aREN.svg" alt = "aREN token">`, "aREN", "Token that powers the RenVM and Darknodes.", "TBC"],
                    [`<img class="atoken" src="/atokens/aENJ.svg" alt = "aENJ token">`, "aENJ", "Token used to back the value of assets created on Enjin.", "TBC"],
                    [`<img class="atoken" src="/atokens/aKNC.svg" alt = "aKNC token">`, "aKNC", "Token that powers Kyber Network.", "TBC"],
                    [`<img class="atoken" src="/atokens/aLINK.svg" alt = "aLINK token">`, "aLINK", "Token that powers a decentralized oracle network.", "Yes"],
                    [`<img class="atoken" src="/atokens/aMANA.svg" alt = "aMANA token">`, "aMANA", "Native currency in Decentraland.", "TBC"],
                    [`<img class="atoken" src="/atokens/aREP.svg" alt = "aREP token">`, "aREP", "Token used to participate in Augur's prediction markets.", "TBC"],
                    [`<img class="atoken" src="/atokens/aSNX.svg" alt = "aSNX token">`, "aSNX", "Token that backs the synthetic assets on Synthetix Exchange.", "TBC"],
                    [`<img class="atoken" src="/atokens/aWBTC.svg" alt = "aWBTC token">`, "aWBTC", "Tokenized version of Bitcoin on Ethereum.",  "TBC"],
                    [`<img class="atoken" src="/atokens/aZRX.svg" alt = "aZRX token">`, "aZRX", "Token that is used to pay fees on the 0x protocol.", "TBC"],

                ]
            }
        },


    ]
