export function validateEmail(text) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(text)
}

export const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export function handleLanguageCode(code: string) {
    let finalCode: string
    //Handle some cases
    if (code.toLowerCase() === "zh-cn") finalCode = "cn"
    else if (!code) finalCode = "en"
    else finalCode = code
    console.log('final code:', finalCode)
    return finalCode.slice(0, 2);
}

export function addTablesToMarkdown(markdown, pageName) {

    try {
        const tables = require(`./data/tables/${pageName}.tsx`).tables

        let finalMarkdown = markdown

        tables.forEach((table) => {

            console.log('table', table)

            const replaceMarkdown = generateMarkdownTableFromJson(table)
            //  console.log('replace:', replaceMarkdown)
            finalMarkdown = finalMarkdown.replace(`table_${table.tableName}`, replaceMarkdown)
        });


        return finalMarkdown;
    } catch (error) {
        console.log('no tables found')
        return markdown

    }


}

export function generateMarkdownTableFromJson(table) {

    let tableData = table.tableData

    //Begin table
    let finalMarkdown = "<table>"

    finalMarkdown = finalMarkdown.concat(`<caption>${table.tableCaption}</caption>`)

    //Add headers
    finalMarkdown = finalMarkdown.concat("<thead>")
    tableData.headers.forEach((header) => {
        finalMarkdown = finalMarkdown.concat(`<th>${header}</th>`)
    });
    finalMarkdown = finalMarkdown.concat("</thead>")

    //Add rows
    tableData.data.forEach(row => {

        let rowMarkdown = "<tr>"
        row.forEach(item => {

            rowMarkdown = rowMarkdown.concat(`<td>${item}</td>`)
        });
        finalMarkdown = finalMarkdown.concat(rowMarkdown).concat("</tr>")
    });


    //Close table
    return finalMarkdown.concat("</table>")


}