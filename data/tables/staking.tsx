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
    tableName: "stakingContractAddresses",
    tableCaption: "",
    tableData: {
      headers: ["Contract", "Address"],
      data: [
        ["ghstStaking", "{{GLTR_STAKING_ADDRESS}}"],
        ["wapGHST", "{{WAP_GHST_ADDRESS}}"],
        ["stkGHST-QUICK", "{{stkGHST_QUICK}}"],
        ["stkGHST-USDC", "{{stkGHST_USDC}}"],
        ["stkGHST-MATIC", "0x6fcac9eee338e29205a24692bbf87e0eb9431997"],
        ["ghstQuickLP", "{{ghstQuickLP}}"],
        ["ghstUsdcLP", "{{ghstUsdcLP}}"],
      ],
    },
  },
];
