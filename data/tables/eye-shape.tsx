

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
                headers: ["Name", "Range", "Image"],
                data: [
					[`Rare Low 1`, `2-4`, `<img src="/eye-shape/rare-low-1.svg" alt = "Aavegotchi Rare Low 1 Eye Shape">`],
					[`Rare Low 2`, `5-6`, `<img src="/eye-shape/rare-low-2.svg" alt = "Aavegotchi Rare Low 2 Eye Shape">`],
					[`Rare Low 3`, `7-9`, `<img src="/eye-shape/rare-low-3.svg" alt = "Aavegotchi Rare Low 3 Eye Shape">`],
					[`Uncommon Low 1`, `10-14`, `<img src="/eye-shape/uncommon-low-1.svg" alt = "Aavegotchi Uncommon Low 1 Eye Shape">`],
					[`Uncommon Low 2`, `15-19`, `<img src="/eye-shape/uncommon-low-2.svg" alt = "Aavegotchi Uncommon Low 2 Eye Shape">`],
					[`Uncommon Low 3`, `20-24`, `<img src="/eye-shape/uncommon-low-3.svg" alt = "Aavegotchi Uncommon Low 3 Eye Shape">`],
					[`Common 1`, `25-41`, `<img src="/eye-shape/common-1.svg" alt = "Aavegotchi Common 1 Eye Shape">`],
					[`Common 2`, `42-57`, `<img src="/eye-shape/common-2.svg" alt = "Aavegotchi Common 2 Eye Shape">`],
					[`Common 3`, `58-74`, `<img src="/eye-shape/common-3.svg" alt = "Aavegotchi Common 3 Eye Shape">`],
					[`Uncommon High 1`, `75-79`, `<img src="/eye-shape/uncommon-high-1.svg" alt = "Aavegotchi Uncommon High 1 Eye Shape">`],
					[`Uncommon High 2`, `80-84`, `<img src="/eye-shape/uncommon-high-2.svg" alt = "Aavegotchi Uncommon High 2 Eye Shape">`],
					[`Uncommon High 3`, `85-89`, `<img src="/eye-shape/uncommon-high-3.svg" alt = "Aavegotchi Uncommon High 3 Eye Shape">`],
					[`Rare High 1`, `90-92`, `<img src="/eye-shape/rare-high-1.svg" alt = "Aavegotchi Rare High 1 Eye Shape">`],
					[`Rare High 2`, `93-94`, `<img src="/eye-shape/rare-high-2.svg" alt = "Aavegotchi Rare High 2 Eye Shape">`],
					[`Rare High 3`, `95-97`, `<img src="/eye-shape/rare-high-3.svg" alt = "Aavegotchi Rare High 3 Eye Shape">`],
					[`AAVE Collateral`, `98-99`, `<img src="/eye-shape/AAVE-collateral.svg" alt = "Aavegotchi AAVE Collateral Eye Shape">`],
					[`DAI Collateral`, `98-99`, `<img src="/eye-shape/DAI-collateral.svg" alt = "Aavegotchi DAI Collateral Eye Shape">`],
					[`ETH Collateral`, `98-99`, `<img src="/eye-shape/ETH-collateral.svg" alt = "Aavegotchi ETH Collateral Eye Shape">`],
					[`LINK Collateral`, `98-99`, `<img src="/eye-shape/LINK-collateral.svg" alt = "Aavegotchi LINK Collateral Eye Shape">`],
					[`USDC Collateral`, `98-99`, `<img src="/eye-shape/USDC-collateral.svg" alt = "Aavegotchi USDC Collateral Eye Shape">`],
					[`YFI Collateral`, `98-99`, `<img src="/eye-shape/YFI-collateral.svg" alt = "Aavegotchi YFI Collateral Eye Shape">`],
					[`UNI Collateral`, `98-99`, `<img src="/eye-shape/UNI-collateral.svg" alt = "Aavegotchi UNI Collateral Eye Shape">`],
					[`TUSD Collateral`, `98-99`, `<img src="/eye-shape/TUSD-collateral.svg" alt = "Aavegotchi TUSD Collateral Eye Shape">`],
					[`USDT Collateral`, `98-99`, `<img src="/eye-shape/USDT-collateral.svg" alt = "Aavegotchi USDT Collateral Eye Shape">`]
                ]
            }
        },
		{
            tableName: "haunt1EyeShape",
            tableCaption: "",
            tableData: {
                headers: ["Name", "Range", "Image"],
                data: [
				    [`Mythical Low 1`, `0`, `<img src="/eye-shape/mythical-low-1.svg" alt = "Aavegotchi Haunt 1 Mythical Low 1 Eye Shape">`],
					[`Mythical Low 2`, `1`, `<img src="/eye-shape/mythical-low-2.svg" alt = "Aavegotchi Haunt 1 Mythical Low 2 Eye Shape">`]
                ]
            }
        },		
		{
            tableName: "haunt2EyeShape",
            tableCaption: "",
            tableData: {
                headers: ["Name", "Range", "Image"],
                data: [
				    [`Mythical Low 1`, `0`, `<img src="/eye-shape/Aavegotchi-H2-EyesShape-Mythical-Low-1.svg" alt = "Aavegotchi Haunt 2 Mythical Low 1 Eye Shape">`],
					[`Mythical Low 2`, `1`, `<img src="/eye-shape/Aavegotchi-H2-EyesShape-Mythical-Low-2.svg" alt = "Aavegotchi Haunt 2 Mythical Low 1 Eye Shape">`],
					[`Polygon/MATIC Collateral`, `98-99`, `<img src="/eye-shape/Aavegotchi-H2-Collaterals-Polygon-Eyes.svg" alt = "Aavegotchi Polygon/MATIC Collateral Eye Shape">`],
					[`WBTC Collateral`, `98-99`, `<img src="/eye-shape/Aavegotchi-H2-Collaterals-wBTC-Eyes.svg" alt = "Aavegotchi WBTC Collateral Eye Shape">`],
					[`WETH Collateral`, `98-99`, `<img src="/eye-shape/Aavegotchi-H2-Collaterals-wETH-Eyes.svg" alt = "Aavegotchi WETH Collateral 2 Eye Shape">`]
                ]
            }
        },
		
    ]
