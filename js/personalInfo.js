import { diagnosisStats } from "./diagnosisStats.js";

export const personalInfo = (d) => {
    if (d?.name == "Jessica Taylor") {
        const taylorList = document.querySelector("#taylorList");
        const taylor_li = 
        `<li>
            <div class="d-flex flex-column justify-content-center mb-3">
                <img class="img-fluid mb-2 align-self-center wd-120" src=${d.profile_picture ?? "-"}>
                <h5 class="align-self-center font-900">${d.name ?? "-"}</h5>
            </div>
            <div class="d-flex align-items-center justify-space-between mb-3">
                <img class="icons me-3" src="./images/schedule.png" alt="dob icon">
                <div class="d-flex flex-column">
                    <span>Date Of Birth</span>
                    <span class="font-600">${d.date_of_birth ?? "-"}</span>
                </div>
            </div>
            <div class="d-flex align-items-center justify-space-between mb-3">
                <img class="icons me-3" src="./images/gender.png" alt="gender icon">
                <div class="d-flex flex-column">
                    <span>Gender</span>
                    <span class="font-600">${d.gender ?? "-"}</span>
                </div>
            </div>
            <div class="d-flex align-items-center justify-space-between mb-3">
                <img class="icons me-3" src="./images/phone.png" alt="phone icon">
                <div class="d-flex flex-column">
                    <span>Contact info.</span>
                    <span class="font-600">${d.phone_number ?? "-"}</span>
                </div>
            </div>
            <div class="d-flex align-items-center justify-space-between mb-3">
                <img class="icons me-3" src="./images/phone.png" alt="phone icon">
                <div class="d-flex flex-column">
                    <span>Emergency Contacts</span>
                    <span class="font-600">${d.emergency_contact ?? "-"}</span>
                </div>
            </div>
            <div class="d-flex align-items-center justify-space-between mb-3">
                <img class="icons me-3" src="./images/insurance.png" alt="phone icon">
                <div class="d-flex flex-column">
                    <span>Insurance Provider</span>
                    <span class="font-600">${d.insurance_type ?? "-"}</span>
                </div>
            </div>
        </li>`;
        taylorList.insertAdjacentHTML('beforeend', taylor_li);
        const btn = `<button style="margin-left:2.5rem;" class="btn success br-25 mt-4 font-600">Show All Information</button>`
        taylorList.insertAdjacentHTML('beforeend', btn);
        // diagnosis stats
        diagnosisStats(d);
    }
}