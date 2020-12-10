

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
            tableName: "linkWearablesTable",
            tableCaption: "Link-Themed Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats"],
                data: [
                    [`<img src="/wearables/link/camo-cap.svg" />`, "1", "Camo Hat", "Common", "AGG +1"],
                    [`<img src="/wearables/link/camo-pants.svg" />`, "2", "Camo Pants", "Common", "AGG +1"],
                    [`<img src="/wearables/link/mk2-grenade.svg" />`, "3", "MK2 Grenade", "Common", "AGG +1"],
                    [`<img src="/wearables/link/snow-camo-cap.svg" />`, "4", "Snow Camo Hat", "Uncommon", "AGG +1, SPK +1"],
                    [`<img src="/wearables/link/snow-camo-pants.svg" />`, "5", "Snow Camo Hat", "Uncommon", "AGG +1, SPK +1"],
                    [`<img src="/wearables/link/m67-grenade.svg" />`, "6", "M67 Grenade", "Uncommon", "AGG +2"],
                    [`<img src="/wearables/link/marine-cap.svg" />`, "7", "Marine Cap", "Rare", "AGG +2, BRN +1"],
                    [`<img src="/wearables/link/marine-suit.svg" />`, "8", "Marine Jacket", "Rare", "AGG +2, BRN +1"],
                    [`<img src="/wearables/link/walkie-talkie.svg" />`, "9", "Walkie Talkie", "Rare", "NRG +1, SPK +1, BRN +1"],
                    [`<img src="/wearables/link/link-white-cap.svg" />`, "10", "Link White Hat", "Legendary", "AGG +2, BRN +2"],
                    [`<img src="/wearables/link/link-mess-dress.svg" />`, "11", "Link Mess Dress", "Legendary", "AGG +2, BRN +2"],
                    [`<img src="/wearables/link/link-bubbly.svg" />`, "12", "Link Bubbly", "Legendary", "NRG +2, BRN -2"],
                    [`<img src="/wearables/link/sergey-beard.svg" />`, "13", "Sergey Beard", "Mythical", "NRG -1, AGG +1, BRN +3"],

                    [`<img src="/wearables/link/sergey-eyes.svg" />`, "14", "Sergey Eyes", "Mythical", "SPK +1, BRN +4"],
                    [`<img src="/wearables/link/sergey-red.svg" />`, "15", "Red Plaid", "Mythical", "NRG +3, AGG +2"],
                    [`<img src="/wearables/link/sergey-blue.svg" />`, "16", "Blue Plaid", "Godlike", "NRG -4, AGG -2"],
                    [`<img src="/wearables/link/link-cube.svg" />`, "17", "LINK Cube", "Godlike", "BRN +6"],

                ]
            }
        },

        {
            tableName: "aaveWearablesTable",
            tableCaption: "Aave-Themed Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats"],
                data: [
                    [`<img src="/wearables/aave/hero-mask.svg" />`, "18", "Aave Hero Mask", "Common", "SPK +1"],
                    [`<img src="/wearables/aave/hero-shirt.svg" />`, "19", "Aave Hero Shirt", "Common", "SPK +1"],
                    [`<img src="/wearables/aave/aave-plush-toy.svg" />`, "20", "Aave Plush Toy", "Common", "SPK +1"],
                    [`<img src="/wearables/aave/captain-aave-mask.svg" />`, "21", "Captain Aave Mask", "Uncommon", "NRG +1, SPK +1"],
                    [`<img src="/wearables/aave/captain-aave-suit.svg" />`, "22", "Captain Aave Suit", "Uncommon", "NRG +1, SPK +1"],
                    [`<img src="/wearables/aave/captain-aave-shield.svg" />`, "23", "Captain Aave Shield", "Uncommon", "NRG +2"],
                    [`<img src="/wearables/aave/thaave-helmet.svg" />`, "24", "Thaave Helmet", "Rare", "NRG +2, SPK +1"],
                    [`<img src="/wearables/aave/thaave-suit.svg" />`, "25", "Thaave Suit", "Rare", "NRG +2, SPK +1"],
                    [`<img src="/wearables/aave/thaave-hammer.svg" />`, "26", "Thaave Hammer", "Rare", "NRG +3"],
                    [`<img src="/wearables/aave/marc-hair.svg" />`, "27", "Marc Hair", "Legendary", "NRG +2, AGG +2"],
                    [`<img src="/wearables/aave/marc-outfit.svg" />`, "28", "Marc Outfit", "Legendary", "NRG +2, AGG +2"],
                    [`<img src="/wearables/aave/rekt-sign.svg" />`, "29", "REKT Sign", "Legendary", "BRN -4"],
                    [`<img src="/wearables/aave/jordan-hair.svg" />`, "30", "Jordan Hair", "Mythical", "AGG -2, SPK +3"],

                    [`<img src="/wearables/aave/jordan-suit.svg" />`, "31", "Jordan Suit", "Mythical", "NRG -3, SPK +1, BRN +1"],
                    [`<img src="/wearables/aave/aave-flag.svg" />`, "32", "Aave Flag", "Mythical", "AGG -2, SPK +3"],
                    [`<img src="/wearables/aave/stani-hair.svg" />`, "33", "Stani Hair", "Godlike", "AGG -3, BRN +3"],
                    [`<img src="/wearables/aave/stani-lifejacket.svg" />`, "34", "Stani Lifejacket", "Godlike", "NRG +3, AGG -3"],
                    [`<img src="/wearables/aave/aave-boat.svg" />`, "35", "Aave Boat", "Godlike", "AGG -6"],

                ]
            }
        },


    ]
