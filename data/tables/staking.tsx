

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
            tableName: "stakingContractAddresses",
            tableCaption: "",
            tableData: {
                headers: ["Contract", "Address"],
                data: [
                    ["ghstStaking", "0xA02d547512Bb90002807499F05495Fe9C4C3943f"],
                    ["stkGHSTQUICK", "0xA02d547512Bb90002807499F05495Fe9C4C3943f"],
                    ["stkGHSTUSDC", "0x04439eC4ba8b09acfae0E9b5D75A82cC63b19f09"],
					["ghstQuickLP", "0x8b1fd78ad67c7da09b682c5392b65ca7caa101b9"],
					["ghstUsdcLP", "0x096c5ccb33cfc5732bcd1f3195c13dbefc4c82f4"]
                ]
            }
        },
	
        {
            tableName: "RaffleTickets",
            tableCaption: "",
            tableData: {
                headers: ["Category", "FRENS Required", "Image"],
                data: [
                    [`Common`, `50 FRENS`, `<img src = "/staking/ticket-common.svg" alt = "Aavegotchi Common Raffle Ticket">`],
                    [`Uncommon`, `250 FRENS`, `<img src = "/staking/ticket-uncommon.svg" alt = "Aavegotchi Uncommon Raffle Ticket">`],
                    [`Rare`, `500 FRENS`, `<img src = "/staking/ticket-rare.svg" alt = "Aavegotchi Rare Raffle Ticket">`],
					[`Legendary`, `2500 FRENS`, `<img src = "/staking/ticket-legendary.svg" alt = "Aavegotchi Legendary Raffle Ticket">`],
					[`Mythical`, `10000 FRENS`, `<img src = "/staking/ticket-mythical.svg" alt = "Aavegotchi Mythical Raffle Ticket">`],
					[`Godlike`, `50000 FRENS`, `<img src = "/staking/ticket-godlike.svg" alt = "Aavegotchi Godlike Raffle Ticket">`],
                ]
            }
        }
    ]
