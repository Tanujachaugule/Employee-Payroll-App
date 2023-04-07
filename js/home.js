window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

/* Template Literal ES6 feature */
const createInnerHtml = () => {   
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                       "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    const innerHtml = `${headerHtml}
        <tr>
            <td><img class="profile" alt="" width="30" src="images/images.png"\>
            </td>
                <td>Tanuja Chaugule</td>
                <td>Female</td>
                <td><div class='dept-label'>HR</div>
                    <div class='dept-label'>Engineering</div></td>
                <td>300000</td>
                <td>1 Nov 2020</td>
                <td>
                    <img id="1" onclick="remove(this)" alt="delete"
                         src="images/Deleteimage.jpeg" alt=""width="30"\>
                    <img id="1" alt="edit" onclick="update(this)"
                        src="images/editimages.jpeg" alt=""width="30"\>
                </td>
            </tr>
`;
document.querySelector('#table-display').innerHTML = innerHtml;
}
