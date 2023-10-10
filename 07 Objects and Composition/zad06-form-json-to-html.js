function jsonToHtml(arr) {
    let students = JSON.parse(arr);

    // Initialize the HTML string for the table
    let tableHTML = '<table>\n';

    tableHTML += '   <tr>'

    // Create the table header row
    for (const key in students[0]) {
        if (students[0].hasOwnProperty(key)) {
            tableHTML += `<th>${escapeHTML(key)}</th>`
        }
    }
    tableHTML += '</tr>\n'

    // Create table rows for each student
    students.forEach(student => {
        tableHTML += '   <tr>';
        for (const key in student) {
            if (student.hasOwnProperty(key)) {
                tableHTML += `<td>${escapeHTML(student[key])}</td>`;
            }
        }
        tableHTML += '</tr>\n';
    });

    // Close the table
    tableHTML += '</table>';
    console.log(tableHTML);

    function escapeHTML(text) {
        const escapeChars = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;',
            '`': '&#x60;',
        };
        return text.toString().replace((/[&<>"'`]/g), char => escapeChars[char]);
    }
}

jsonToHtml(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`);