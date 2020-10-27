var selectedRow = null
function OnFormSubmit () {
    if(validate()){
        var formData = readFormData();
        if(selectedRow == null)
        insertNewRecord(formData)
        else
        updaterecord(formData)
        resetform()
    }
}
function readFormData(){
    var formData = {}
    formData["FullName"] = document.getElementById("FullName").value;
    formData["EMP Code"] = document.getElementById("EMP Code").value;
    formData["Salary"] = document.getElementById("Salary").value;
    formData["City"] = document.getElementById("City").value;
    return formData
}
function insertNewRecord(data){
    var table = document.getElementById("emp");
    var cell1 = table.insertCell(0);
    cell1.innerHTML = data.FullName;
    var cell2 = table.insertCell(1);
    cell2.innerHTML = data.EMPCode;
    var cell3 = table.insertCell(2);
    cell3.innerHTML = data.Salary;
    var cell4 = table.insertCell(3);
    cell4.innerHTML = data.city;
    var cell5 = table.insertCell(4)
    cell5.innerHTML = `<a onClick = "onEdit(this)">Edit</a>
    <a onClick = onDelete(this)">Delete</a>`;
}
function resetform(){
    document.getElementById("FullName").value = "";
    document.getElementById("EMP Code").value = "";
    document.getElementById("Salary").value = "";
    document.getElementById("City").value = "";
    selectedRow = null;

}
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("FullName").value = selecteRow.cells[0].innerHTML;
    document.getElementById("EMP Code").value = selecteRow.cells[1].innerHTML;
    document.getElementById("Salary").value = selecteRow.cells[2].innerHTML;
    document.getElementById("City").value = selecteRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.empCode;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.city;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("FullName Validation error").value === "") {
        isValid = false;
        document.getElementById("FullName Validation error").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("FullName Validation error").classList.contains("hide")){
            document.getElementById("FullName Validation error").classList.add("hide");
        }
    }
    return isValid;
}
