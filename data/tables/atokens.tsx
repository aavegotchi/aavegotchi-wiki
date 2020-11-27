

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
            tableCaption: "stablecoins",
            tableData: {
                headers: ["Image", "Name", "Supported by Aavegotchi"],
                data: [
                    [`<img class="atoken" src="/atokens/aDAI.svg" alt = "aDAI token">`, "aDAI", "Yes"],
                    [`<img class="atoken" src="/atokens/aUSDC.svg" alt = "aUSDC token">`, "aUSDC", "Yes"],
                    [`<img class="atoken" src="/atokens/aTUSD.svg" alt = "aTUSD token">`, "aTUSD", "Yes"],
                    [`<img class="atoken" src="/atokens/aUSDT.svg" alt = "aUSDT token">`, "aUSDT", "Yes"],
                    [`<img class="atoken" src="/atokens/asUSD.svg" alt = "asUSD token">`, "asUSD", "Yes"],
                    [`<img class="atoken" src="/atokens/aBUSD.svg" alt = "aBUSD token">`, "aBUSD", "Yes"],
					
                ]
            }
        },

        {
            tableName: "cryptocurrencies",
            tableCaption: "cryptocurrencies",
            tableData: {
                headers: ["Image", "Name", "Supported by Aavegotchi"],
                data: [
                    [`<img class="atoken" src="/atokens/aETH.svg" alt = "aETH token">`, "aETH", "Yes"],
                    [`<img class="atoken" src="/atokens/aUNI.svg" alt = "aUNI token">`, "aUNI", "Yes"],
                    [`<img class="atoken" src="/atokens/aYFI.svg" alt = "aYFI token">`, "aYFI", "Yes"],
                    [`<img class="atoken" src="/atokens/aBAT.svg" alt = "aBAT token">`, "aBAT", "Yes"],
                    [`<img class="atoken" src="/atokens/aREN.svg" alt = "aREN token">`, "aREN", "Yes"],
                    [`<img class="atoken" src="/atokens/aENJ.svg" alt = "aENJ token">`, "aENJ", "Yes"],
                    [`<img class="atoken" src="/atokens/aKNC.svg" alt = "aKNC token">`, "aKNC", "Yes"],
                    [`<img class="atoken" src="/atokens/aLINK.svg" alt = "aLINK token">`, "aLINK", "Yes"],
                    [`<img class="atoken" src="/atokens/aMANA.svg" alt = "aMANA token">`, "aMANA", "Yes"],
                    [`<img class="atoken" src="/atokens/aREP.svg" alt = "aREP token">`, "aREP", "Yes"],
                    [`<img class="atoken" src="/atokens/aSNX.svg" alt = "aSNX token">`, "aSNX", "Yes"],
                    [`<img class="atoken" src="/atokens/aWBTC.svg" alt = "aWBTC token">`, "aWBTC", "Yes"],
                    [`<img class="atoken" src="/atokens/aZRX.svg" alt = "aZRX token">`, "aZRX", "Yes"],

                ]
            }
        },


    ]
