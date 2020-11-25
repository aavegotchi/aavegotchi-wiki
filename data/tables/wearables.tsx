

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
                    [`<img src="/wearables/link/camo-cap.svg" />`, "1", "Camo Hat", "Common", "TBD"],
                    [`<img src="/wearables/link/camo-pants.svg" />`, "2", "Camo Pants", "Common", "TBD"],
                    [`<img src="/wearables/link/mk2-grenade.svg" />`, "3", "MK2 Grenade", "Common", "TBD"],
                    [`<img src="/wearables/link/snow-camo-cap.svg" />`, "4", "Snow Camo Hat", "Uncommon", "TBD"],
                    [`<img src="/wearables/link/snow-camo-pants.svg" />`, "5", "Snow Camo Hat", "Uncommon", "TBD"],
                    [`<img src="/wearables/link/m67-grenade.svg" />`, "6", "M67 Grenade", "Uncommon", "TBD"],
                    [`<img src="/wearables/link/marine-cap.svg" />`, "7", "Marine Cap", "Rare", "TBD"],
                    [`<img src="/wearables/link/marine-suit.svg" />`, "8", "Marine Jacket", "Rare", "TBD"],
                    [`<img src="/wearables/link/walkie-talkie.svg" />`, "9", "Walkie Talkie", "Rare", "TBD"],
                    [`<img src="/wearables/link/link-white-cap.svg" />`, "10", "Link White Hat", "Legendary", "TBD"],
                    [`<img src="/wearables/link/link-mess-dress.svg" />`, "11", "Link Mess Dress", "Legendary", "TBD"],
                    [`<img src="/wearables/link/link-bubbly.svg" />`, "12", "Link Bubbly", "Legendary", "TBD"],
                    [`<img src="/wearables/link/sergey-beard.svg" />`, "13", "Sergey Beard", "Mythical", "TBD"],

                    [`<img src="/wearables/link/sergey-eyes.svg" />`, "14", "Sergey Eyes", "Mythical", "TBD"],
                    [`<img src="/wearables/link/sergey-red.svg" />`, "15", "Red Plaid", "Mythical", "TBD"],
                    [`<img src="/wearables/link/sergey-blue.svg" />`, "16", "Blue Plaid", "Godlike", "TBD"],
                    [`<img src="/wearables/link/link-cube.svg" />`, "16", "LINK Cube", "Godlike", "TBD"],

                ]
            }
        },

        {
            tableName: "aaveWearablesTable",
            tableCaption: "Aave-Themed Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats"],
                data: [
                    [`<img src="/wearables/link/camo-cap.svg" />`, "1", "Camo Hat", "Common", "TBD"],
                    [`<img src="/wearables/link/camo-pants.svg" />`, "2", "Camo Pants", "Common", "TBD"],
                    [`<img src="/wearables/link/mk2-grenade.svg" />`, "3", "MK2 Grenade", "Common", "TBD"],
                    [`<img src="/wearables/link/snow-camo-cap.svg" />`, "4", "Snow Camo Hat", "Uncommon", "TBD"],
                    [`<img src="/wearables/link/snow-camo-pants.svg" />`, "5", "Snow Camo Hat", "Uncommon", "TBD"],
                    [`<img src="/wearables/link/m67-grenade.svg" />`, "6", "M67 Grenade", "Uncommon", "TBD"],
                    [`<img src="/wearables/link/marine-cap.svg" />`, "7", "Marine Cap", "Rare", "TBD"],
                    [`<img src="/wearables/link/marine-suit.svg" />`, "8", "Marine Jacket", "Rare", "TBD"],
                    [`<img src="/wearables/link/walkie-talkie.svg" />`, "9", "Walkie Talkie", "Rare", "TBD"],
                    [`<img src="/wearables/link/link-white-cap.svg" />`, "10", "Link White Hat", "Legendary", "TBD"],
                    [`<img src="/wearables/link/link-mess-dress.svg" />`, "11", "Link Mess Dress", "Legendary", "TBD"],
                    [`<img src="/wearables/link/link-bubbly.svg" />`, "12", "Link Bubbly", "Legendary", "TBD"],
                    [`<img src="/wearables/link/sergey-beard.svg" />`, "13", "Sergey Beard", "Mythical", "TBD"],

                    [`<img src="/wearables/link/sergey-eyes.svg" />`, "14", "Sergey Eyes", "Mythical", "TBD"],
                    [`<img src="/wearables/link/sergey-red.svg" />`, "15", "Red Plaid", "Mythical", "TBD"],
                    [`<img src="/wearables/link/sergey-blue.svg" />`, "16", "Blue Plaid", "Godlike", "TBD"],
                    [`<img src="/wearables/link/link-cube.svg" />`, "16", "LINK Cube", "Godlike", "TBD"],

                ]
            }
        },


    ]
