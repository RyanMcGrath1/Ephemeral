const table = document.getElementById('emptbl');
const cellCount = table.rows[0].cells.length;

function getData() {
    const rowCount = table.rows.length;
    const totals = [0, 0, 0, 0, 0, 0];
    for(let i = 0; i < rowCount - 1; i++) {
        const amount = document.getElementsByName(`amount`)[i].value;
        const dept = document.getElementsByName(`department`)[i].value;
        if (dept) {
            totals[dept] += rowCount;
        } else {
            // warn that a department is missing!
        }
    }
    // this is the compiled totals from the table.
    console.log('!', totals);



}

function addRows() {
    const existingRows = table.rows.length - 1; // this number includes the header, so we're subtracting 1
    const newRow = table.insertRow();    // add the new row in
    // and then set the contents to a new blank item - just name each item the same name, and we can access it with the index above
    newRow.innerHTML = `<td id="col0">
            <input type="number" name="empname" id="chargeNum"/>
        </td>
        <td id="col1">
            <input type="text" name="name"/>
        </td>
        <td id="col2">
            <input type="number" name="amount"/>
        </td>
        <td id="col3">
            <select name="department" id="dept">
                <option value="">Select Department</option>
                <option value="0">Restaurants</option>
                <option value="1">Gasoline</option>
                <option value="2">Home Improvement</option>
                <option value="3">Grocery</option>
                <option value="4">Merchandise</option>
                <option value="5">Misc</option>
            </select>
        </td>`;
}

function deleteRows() {
    // this needs to be re-read each time, because the table will be different
    const rowCount = table.rows.length;

    if (rowCount > '2') {
        table.deleteRow(rowCount - 1);
    } else {
        alert('There should be at least one row');
    }

}

