

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
            tableName: "supportedCollaterals",
            tableCaption: "",
            tableData: {
                headers: ["Image", "Name", "Description"],
                data: [
                    [`<img class="atoken" src="/spirit-force/aAAVE.svg" alt = "aAAVE token">`, "AAVE", "Governance token of Aave Protocol. Stakers provide security to the protocol."],
					[`<img class="atoken" src="/spirit-force/aDAI.svg" alt = "aDAI token">`, "DAI", "Stablecoin backed by collateral on the Maker Platform."],
					[`<img class="atoken" src="/spirit-force/aETH.svg" alt = "aETH token">`, "ETH", "Digital, global money. The currency of Ethereum DApps."],
					[`<img class="atoken" src="/spirit-force/aLINK.svg" alt = "aLINK token">`, "LINK", "Token that powers a decentralized oracle network."],
					[`<img class="atoken" src="/spirit-force/aUSDC.svg" alt = "aUSDC token">`, "USDC", "A fully collateralized US dollar stablecoin jointly created by Circle and Coinbase."],
					[`<img class="atoken" src="/spirit-force/aYFI.svg" alt = "aYFI token">`, "YFI", "Governance token of Yearn Finance."],
					[`<img class="atoken" src="/spirit-force/aUNI.svg" alt = "aUNI token">`, "UNI", "Governance token of Uniswap Exchange."],
					[`<img class="atoken" src="/spirit-force/aTUSD.svg" alt = "aTUSD token">`, "TUSD", "Stablecoin issued by TrustToken that is fully collateralized and legally protected."],
					[`<img class="atoken" src="/spirit-force/aUSDT.svg" alt = "aUSDT token">`, "USDT", "A stablecoin that mirrors the price of the U.S. dollar, issued by Tether."],
					[`<img class="atoken" src="/spirit-force/aWMATIC.svg" alt = "aWMATIC token">`, "MATIC", "Native token of Polygon Network"],
					[`<img class="atoken" src="/spirit-force/aWBTC.svg" alt = "aWBTC token">`, "WBTC", "Tokenized version of Bitcoin on Ethereum."],
					[`<img class="atoken" src="/spirit-force/aETH.svg" alt = "aETH token">`, "WETH", "Digital, global money. The currency of Ethereum DApps."]
                ]
            }
        },
    ]
