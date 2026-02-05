

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
            tableName: "eyeShape",
            tableCaption: "",
            tableData: {
                headers: ["Name", "Range", "Image", "Gameplay Effect"],
                data: [
					[`Rare Low 1`, `2-4`, `<img src="/eye-shape/rare-low-1.svg" alt = "Aavegotchi Rare Low 1 Eye Shape">`, "Faster Health Regen"],
					[`Rare Low 2`, `5-6`, `<img src="/eye-shape/rare-low-2.svg" alt = "Aavegotchi Rare Low 2 Eye Shape">`, "Slower Stamina Usage"],
					[`Rare Low 3`, `7-9`, `<img src="/eye-shape/rare-low-3.svg" alt = "Aavegotchi Rare Low 3 Eye Shape">`, "Faster Health Regen + Slower Stamina Usage"],
					[`Uncommon Low 1`, `10-14`, `<img src="/eye-shape/uncommon-low-1.svg" alt = "Aavegotchi Uncommon Low 1 Eye Shape">`, "More Melee Evasion"],
					[`Uncommon Low 2`, `15-19`, `<img src="/eye-shape/uncommon-low-2.svg" alt = "Aavegotchi Uncommon Low 2 Eye Shape">`, "More Ranged Evasion"],
					[`Uncommon Low 3`, `20-24`, `<img src="/eye-shape/uncommon-low-3.svg" alt = "Aavegotchi Uncommon Low 3 Eye Shape">`, "More Evasion"],
					[`Common 1`, `25-41`, `<img src="/eye-shape/common-1.svg" alt = "Aavegotchi Common 1 Eye Shape">`, "More Base Damage"],
					[`Common 2`, `42-57`, `<img src="/eye-shape/common-2.svg" alt = "Aavegotchi Common 2 Eye Shape">`, "More Base + Max Damage"],
					[`Common 3`, `58-74`, `<img src="/eye-shape/common-3.svg" alt = "Aavegotchi Common 3 Eye Shape">`, "More Max Damage"],
					[`Uncommon High 1`, `75-79`, `<img src="/eye-shape/uncommon-high-1.svg" alt = "Aavegotchi Uncommon High 1 Eye Shape">`, "More Melee Attack Speed"],
					[`Uncommon High 2`, `80-84`, `<img src="/eye-shape/uncommon-high-2.svg" alt = "Aavegotchi Uncommon High 2 Eye Shape">`, "More Ranged Attack Speed"],
					[`Uncommon High 3`, `85-89`, `<img src="/eye-shape/uncommon-high-3.svg" alt = "Aavegotchi Uncommon High 3 Eye Shape">`, "More Attack Speed"],
					[`Rare High 1`, `90-92`, `<img src="/eye-shape/rare-high-1.svg" alt = "Aavegotchi Rare High 1 Eye Shape">`, "More Road Speed"],
					[`Rare High 2`, `93-94`, `<img src="/eye-shape/rare-high-2.svg" alt = "Aavegotchi Rare High 2 Eye Shape">`, "More Alchemica Speed"],
					[`Rare High 3`, `95-97`, `<img src="/eye-shape/rare-high-3.svg" alt = "Aavegotchi Rare High 3 Eye Shape">`, "More Speed"],
					[`AAVE Collateral`, `98-99`, `<img src="/eye-shape/AAVE-collateral.svg" alt = "Aavegotchi AAVE Collateral Eye Shape">`, "More Ranged Evasion"],
					[`DAI Collateral`, `98-99`, `<img src="/eye-shape/DAI-collateral.svg" alt = "Aavegotchi DAI Collateral Eye Shape">`, "More Base Damage"],
					[`ETH Collateral`, `98-99`, `<img src="/eye-shape/ETH-collateral.svg" alt = "Aavegotchi ETH Collateral Eye Shape">`, "More Vision Range"],
					[`LINK Collateral`, `98-99`, `<img src="/eye-shape/LINK-collateral.svg" alt = "Aavegotchi LINK Collateral Eye Shape">`, "More Attack Evasion"],
					[`USDC Collateral`, `98-99`, `<img src="/eye-shape/USDC-collateral.svg" alt = "Aavegotchi USDC Collateral Eye Shape">`, "More Ranged Armor"],
					[`YFI Collateral`, `98-99`, `<img src="/eye-shape/YFI-collateral.svg" alt = "Aavegotchi YFI Collateral Eye Shape">`, "More Alchemica Speed"],
					[`UNI Collateral`, `98-99`, `<img src="/eye-shape/UNI-collateral.svg" alt = "Aavegotchi UNI Collateral Eye Shape">`, "Faster Health Regen"],
					[`TUSD Collateral`, `98-99`, `<img src="/eye-shape/TUSD-collateral.svg" alt = "Aavegotchi TUSD Collateral Eye Shape">`, "More Max Damage"],
					[`USDT Collateral`, `98-99`, `<img src="/eye-shape/USDT-collateral.svg" alt = "Aavegotchi USDT Collateral Eye Shape">`, "More Base + Max Damage"]
                ]
            }
        },
		{
            tableName: "haunt1EyeShape",
            tableCaption: "",
            tableData: {
                headers: ["Name", "Range", "Image", "Gameplay Effect"],
                data: [
				    [`Mythical Low 1`, `0`, `<img src="/eye-shape/mythical-low-1.svg" alt = "Aavegotchi Haunt 1 Mythical Low 1 Eye Shape">`, "More Melee Armor"],
					[`Mythical Low 2`, `1`, `<img src="/eye-shape/mythical-low-2.svg" alt = "Aavegotchi Haunt 1 Mythical Low 2 Eye Shape">`, "More Melee Damage"]
                ]
            }
        },		
		{
            tableName: "haunt2EyeShape",
            tableCaption: "",
            tableData: {
                headers: ["Name", "Range", "Image", "Gameplay Effect"],
                data: [
				    [`Mythical Low 1`, `0`, `<img src="/eye-shape/Aavegotchi-H2-EyesShape-Mythical-Low-1.svg" alt = "Aavegotchi Haunt 2 Mythical Low 1 Eye Shape">`, "More Lickquidator Damage"],
					[`Mythical Low 2`, `1`, `<img src="/eye-shape/Aavegotchi-H2-EyesShape-Mythical-Low-2.svg" alt = "Aavegotchi Haunt 2 Mythical Low 1 Eye Shape">`, "More Evasion"],
					[`Polygon/MATIC Collateral`, `98-99`, `<img src="/eye-shape/Aavegotchi-H2-Collaterals-Polygon-Eyes.svg" alt = "Aavegotchi Polygon/MATIC Collateral Eye Shape">`, "More Attack Speed"],
					[`WBTC Collateral`, `98-99`, `<img src="/eye-shape/Aavegotchi-H2-Collaterals-wBTC-Eyes.svg" alt = "Aavegotchi WBTC Collateral Eye Shape">`, "More Melee Evasion"],
					[`WETH Collateral`, `98-99`, `<img src="/eye-shape/Aavegotchi-H2-Collaterals-wETH-Eyes.svg" alt = "Aavegotchi WETH Collateral 2 Eye Shape">`, "Slower Stamina Usage"]
                ]
            }
        },
		
    ]
