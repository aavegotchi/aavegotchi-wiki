

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
            tableName: "smartcontracts",
            tableCaption: "",
            tableData: {
                headers: ["Category", "Contract Address", "Link"],
                data: [
                    [`Raffle Tickets`, "0x93ea6ec350ace7473f7694d43dec2726a515e31a", [Opensea](https://opensea.io/collection/aavegotchi-frens-raffle-tickets)],
                    [`Wearable Vouchers`, "0xe54891774eed9277236bac10d82788aee0aed313", [Opensea](https://opensea.io/collection/aavegotchi-wearable-vouchers)],
					
                ]
            }
        }


    ]
