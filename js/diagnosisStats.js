import { currentMonth } from "./currentMonth.js";
import { labResults } from "./labResults.js";
import { fillChart } from "./fillChart.js";
import { diagnosticList } from "./diagnosticList.js";

export const diagnosisStats = (d) => {
    labResults(d);    
    const diagnosisStats = document.querySelector("#diagnosisStats")
    const diagnosisHistory = d?.diagnosis_history ?? null;
    if (diagnosisHistory) {
        fillChart(diagnosisHistory,d);
        const lastDiagnosis = diagnosisHistory.find(diagnosis => diagnosis.month === currentMonth());
        if(lastDiagnosis?.respiratory_rate?.value) {
            const respiratory = `
                <div class="col-md-4">
                    <div class="repDiv px-3 py-3 br-8">
                        <img class="img-fluid diagnosisIcon" src="./images/rep.png">
                        <span class="d-block mt-3">Respiratory Rate</span>
                        <h3 class="d-block">${lastDiagnosis.respiratory_rate.value} bpm</h3>
                        <span class="d-block mt-3">${lastDiagnosis.respiratory_rate.levels ?? "-"}</span>
                    </div>
                </div>
            `
            diagnosisStats.insertAdjacentHTML('beforeend', respiratory);
        }
        if(lastDiagnosis?.temperature?.value) {
            const respiratory = `
                <div class="col-md-4">
                    <div class="tempDiv px-3 py-3 br-8">
                        <img class="img-fluid diagnosisIcon" src="./images/temp.png">
                        <span class="d-block mt-3">Temperature</span>
                        <h3 class="d-block">${lastDiagnosis.temperature.value} &deg;F</h3>
                        <span class="d-block mt-3">${lastDiagnosis.temperature.levels ?? "-"}</span>
                    </div>
                </div>
            `
            diagnosisStats.insertAdjacentHTML('beforeend', respiratory);
        }
        if(lastDiagnosis?.heart_rate?.value) {
            const respiratory = `
                <div class="col-md-4">
                    <div class="heartDiv px-3 py-3 br-8">
                        <img class="img-fluid diagnosisIcon" src="./images/rep.png">
                        <span class="d-block mt-3">Heart Rate</span>
                        <h3 class="d-block">${lastDiagnosis.heart_rate.value} bpm</h3>
                        <span class="d-block mt-3">${lastDiagnosis.heart_rate.levels ?? "-"}</span>
                    </div>
                </div>
            `
            diagnosisStats.insertAdjacentHTML('beforeend', respiratory);
        }
    }
    diagnosticList(d)
}