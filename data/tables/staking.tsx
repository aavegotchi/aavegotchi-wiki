

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
