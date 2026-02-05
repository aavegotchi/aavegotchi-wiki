

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
            tableName: "roflGnome",
            tableCaption: "",
            tableData: {
                headers: ["Image", "Name", "Rarity", "Quantity"],
                data: [
                    [`<img src="/aesthetica/rofl-gnome/common-rofl-gnome.png" alt="Common ROFL Gnome">`, "Common ROFL Gnome", "Common", "1000"],
					[`<img src="/aesthetica/rofl-gnome/uncommon-rofl-gnome.png" alt="Uncommon ROFL Gnome">`, "Uncommon ROFL Gnome", "Uncommon", "500"],
					[`<img src="/aesthetica/rofl-gnome/rare-rofl-gnome.png" alt="Rare ROFL Gnome">`, "Rare ROFL Gnome", "Rare", "250"],
					[`<img src="/aesthetica/rofl-gnome/legendary-rofl-gnome.png" alt="Legendary ROFL Gnome">`, "Legendary ROFL Gnome", "Legendary", "100"],
					[`<img src="/aesthetica/rofl-gnome/mythical-rofl-gnome.png" alt="Mythical ROFL Gnome">`, "Mythical ROFL Gnome", "Mythical", "50"],
					[`<img src="/aesthetica/rofl-gnome/godlike-rofl-gnome.png" alt="Godlike ROFL Gnome">`, "Godlike ROFL Gnome", "Godlike", "5"]
                ]
            }
        },
        {
            tableName: "realmGlobe",
            tableCaption: "",
            tableData: {
                headers: ["Image", "Name", "Rarity", "Quantity"],
                data: [
                    [`<img src="/aesthetica/realm-globe/common-realm-globe.gif" alt="Common REALM Globe">`, "Common REALM Globe", "Common", "1000"],
					[`<img src="/aesthetica/realm-globe/uncommon-realm-globe.gif" alt="Uncommon REALM Globe">`, "Uncommon REALM Globe", "Uncommon", "500"],
					[`<img src="/aesthetica/realm-globe/rare-realm-globe.gif" alt="Rare REALM Globe">`, "Rare REALM Globe", "Rare", "250"],
					[`<img src="/aesthetica/realm-globe/legendary-realm-globe.gif" alt="Legendary REALM Globe">`, "Legendary REALM Globe", "Legendary", "100"],
					[`<img src="/aesthetica/realm-globe/mythical-realm-globe.gif" alt="Mythical REALM Globe">`, "Mythical REALM Globe", "Mythical", "50"],
					[`<img src="/aesthetica/realm-globe/godlike-realm-globe.gif" alt="Godlike REALM Globe">`, "Godlike REALM Globe", "Godlike", "5"]
                ]
            }
        },
        {
            tableName: "smolFlower",
            tableCaption: "",
            tableData: {
                headers: ["Image", "Name", "Rarity", "Quantity"],
                data: [
                    [`<img src="/aesthetica/smol-flower/common-smol-flower.png" alt="Common Smol Flower">`, "Common Smol Flower", "Common", "1000"],
					[`<img src="/aesthetica/smol-flower/uncommon-smol-flower.png" alt="Uncommon Smol Flower">`, "Uncommon Smol Flower", "Uncommon", "500"],
					[`<img src="/aesthetica/smol-flower/rare-smol-flower.png" alt="Rare Smol Flower">`, "Rare Smol Flower", "Rare", "250"],
					[`<img src="/aesthetica/smol-flower/legendary-smol-flower.png" alt="Legendary Smol Flower">`, "Legendary Smol Flower", "Legendary", "100"],
					[`<img src="/aesthetica/smol-flower/mythical-smol-flower.png" alt="Mythical Smol Flower">`, "Mythical Smol Flower", "Mythical", "50"],
					[`<img src="/aesthetica/smol-flower/godlike-smol-flower.png" alt="Godlike Smol Flower">`, "Godlike Smol Flower", "Godlike", "5"]
                ]
            }
        },
		{
            tableName: "laavaLamp",
            tableCaption: "",
            tableData: {
                headers: ["Image", "Name", "Rarity", "Quantity"],
                data: [
                    [`<img src="/aesthetica/laava-lamp/common-laava-lamp.gif" alt="Common Laava Lamp">`, "Common Laava Lamp", "Common", "1000"],
					[`<img src="/aesthetica/laava-lamp/uncommon-laava-lamp.gif" alt="Uncommon Laava Lamp">`, "Uncommon Laava Lamp", "Uncommon", "500"],
					[`<img src="/aesthetica/laava-lamp/rare-laava-lamp.gif" alt="Rare Laava Lamp">`, "Rare Laava Lamp", "Rare", "250"],
					[`<img src="/aesthetica/laava-lamp/legendary-laava-lamp.gif" alt="Legendary Laava Lamp">`, "Legendary Laava Lamp", "Legendary", "100"],
					[`<img src="/aesthetica/laava-lamp/mythical-laava-lamp.gif" alt="Mythical Laava Lamp">`, "Mythical Laava Lamp", "Mythical", "50"],
					[`<img src="/aesthetica/laava-lamp/godlike-laava-lamp.gif" alt="Godlike Laava Lamp">`, "Godlike Laava Lamp", "Godlike", "5"]
                ]
            }
        },
		{
            tableName: "neonLight",
            tableCaption: "",
            tableData: {
                headers: ["Image", "Name", "Rarity", "Quantity"],
                data: [
                    [`<img src="/aesthetica/neon-light/common-neon-light.gif" alt="Common Neon Light">`, "Common Neon Light", "Common", "1000"],
					[`<img src="/aesthetica/neon-light/uncommon-neon-light.gif" alt="Uncommon Neon Light">`, "Uncommon Neon Light", "Uncommon", "500"],
					[`<img src="/aesthetica/neon-light/rare-neon-light.gif" alt="Rare Neon Light">`, "Rare Neon Light", "Rare", "250"],
					[`<img src="/aesthetica/neon-light/legendary-neon-light.gif" alt="Legendary Neon Light">`, "Legendary Neon Light", "Legendary", "100"],
					[`<img src="/aesthetica/neon-light/mythical-neon-light.gif" alt="Mythical Neon Light">`, "Mythical Neon Light", "Mythical", "50"],
					[`<img src="/aesthetica/neon-light/godlike-neon-light.gif" alt="Godlike Neon Light">`, "Godlike Neon Light", "Godlike", "5"]
                ]
            }
        },
		{
            tableName: "caampFire",
            tableCaption: "",
            tableData: {
                headers: ["Image", "Name", "Rarity", "Quantity"],
                data: [
                    [`<img src="/aesthetica/caamp-fire/common-caamp-fire.gif" alt="Common Caamp Fire">`, "Common Caamp Fire", "Common", "1000"],
					[`<img src="/aesthetica/caamp-fire/uncommon-caamp-fire.gif" alt="Uncommon Caamp Fire">`, "Uncommon Caamp Fire", "Uncommon", "500"],
					[`<img src="/aesthetica/caamp-fire/rare-caamp-fire.gif" alt="Rare Caamp Fire">`, "Rare Caamp Fire", "Rare", "250"],
					[`<img src="/aesthetica/caamp-fire/legendary-caamp-fire.gif" alt="Legendary Caamp Fire">`, "Legendary Caamp Fire", "Legendary", "100"],
					[`<img src="/aesthetica/caamp-fire/mythical-caamp-fire.gif" alt="Mythical Caamp Fire">`, "Mythical Caamp Fire", "Mythical", "50"],
					[`<img src="/aesthetica/caamp-fire/godlike-caamp-fire.gif" alt="Godlike Caamp Fire">`, "Godlike Caamp Fire", "Godlike", "5"]
                ]
            }
        }
    ]
