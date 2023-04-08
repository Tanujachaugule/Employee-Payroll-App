window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

/* Template Literal ES6 feature */
const createInnerHtml = () => {   
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                       "<th>Salary</th><th>Start Date</th><th>Actions</th>";
        let innerHtml = `${headerHtml}`;
        let empPayrollList = createEmployeePayrollJSON();
        for (const empPayrollData of empPayrollList) {
            innerHtml = `${innerHtml}
        <tr>
            <td><img class="profile" alt="" width="30" src="images/images.png"\>
            </td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>${getDeptHtml(empPayrollData._department)}</td>
            <td>${empPayrollData._salary}</td>
            <td>${empPayrollData._startDate}</td>
                <td>
                    <img id="${empPayrollData._id}" onclick="remove(this)" alt="delete"
                         src="images/Deleteimage.jpeg" alt=""width="30"\>
                    <img id="${empPayrollData._id}" alt="edit" onclick="update(this)"
                        src="images/editimages.jpeg" alt=""width="30"\>
                </td>
            </tr>
    `;
}
document.querySelector('#table-display').innerHTML = innerHtml;
}
const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}

