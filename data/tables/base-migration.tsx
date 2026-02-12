
interface Table {
  tableName: string;
  tableData: TableData[];
}

interface TableData {
  headers: any;
  data: any;
}

export const tables = [
  {
    tableName: "timeline",
    tableCaption: "",
    tableData: {
      headers: ["Date", "Event"],
      data: [
        ["2020-2021", "Launch on Ethereum"],
        ["2021", "Migration to Polygon"],
        ["2024-04-17", "GHST token launched on Base"],
        ["2025-07-25", "Full migration to Base; Polygon frozen"],
      ],
    },
  },
];

