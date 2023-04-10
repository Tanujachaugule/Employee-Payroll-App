let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});

const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('employeePayrollData') ?
            JSON.parse(localStorage.getItem('employeePayrollData')) : [];
}
/* Template Literal ES6 feature */
const createInnerHtml = () => {
    if (empPayrollList.length == 0) return;   
    const headerHtml = "<tr><th>Profile</th><th>Name</th><th>Gender</th><th>Department</th>"+
                       "<th>Salary</th><th>Start Date</th><th>Actions</th></tr>";
        let innerHtml = `${headerHtml}`;
        //let employPayrollList = createEmployeePayrollJSON();
        for (const empPayrollData of empPayrollList) {
            innerHtml = `${innerHtml}
        <tr>
            <td><img class="profile" alt="" width="30" src="${empPayrollData.profileImg}"\>
            </td>
            <td>${empPayrollData.name}</td>
            <td>${empPayrollData.gender}</td>
            <td>${getDeptHtml(empPayrollData.department)}</td>
            <td>${empPayrollData.salary}</td>
            <td>${empPayrollData.startDate}</td>
                <td>
                    <img id="${empPayrollData.id}" onclick="remove(this)" alt="delete"
                         src="assets/assets/profile-images/Deleteimage.jpeg" alt="" width="30"\>
                    <img id="${empPayrollData.id}" alt="edit" onclick="update(this)"
                        src="assets/assets/profile-images/editimages.jpeg" alt="" width="30"\>
                </td>
            </tr>
    `;
}
document.querySelector('#display').innerHTML = innerHtml;
}
const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}

//D46UC1
const remove = (node) => {
    let empPayrollData1 = empPayrollList.find(empData => empData.id == node.id);
    if (!empPayrollData1) return;
    const index = empPayrollList
                  .map(empData => empData.id)
                  .indexOf(empPayrollData1.id);
    empPayrollList.splice(index, 1);
    localStorage.setItem("employeePayrollData", JSON.stringify(empPayrollList));
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
}