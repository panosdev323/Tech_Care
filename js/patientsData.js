import { personalInfo } from "./personalInfo.js";

export const patientsData = (data) => {
    const patientsList = document.querySelector("#patientsList");
    data.forEach(d => {
        const li = 
            `<li class="d-flex mb-3">
                <img class="img-fluid me-1 align-self-center wd-40" src=${d.profile_picture ?? './images/patients.png'}>
                <div class="d-flex flex-column ms-1">
                    <span class="font-700">${d.name ?? "-"}</span>
                    <span class="secondary-color">${d.gender ?? "-"}, ${d.age ?? "-"}</span>
                </div>
            </li>`;
        patientsList.insertAdjacentHTML('beforeend', li);
        // taylor
        personalInfo(d);
    });
}