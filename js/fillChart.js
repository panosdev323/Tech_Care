import { displayChart } from "./chart.js";

export const fillChart = (diagnosisHistory, d) => {
    const diastolicArr=[];
    const systolicArr=[];
    const dataX = [];
    const systolicDts=[];
    const diastolicDts=[];
    const lastSixDiagnoses = diagnosisHistory.slice(0,6).reverse();
    lastSixDiagnoses.forEach(d=> {
        systolicDts.push(d.blood_pressure.systolic)
        diastolicDts.push(d.blood_pressure.diastolic)
        dataX.push(`${d.month.slice(0,3)}, ${d.year}`)
        diastolicArr.push(d.blood_pressure.diastolic.value)
        systolicArr.push(d.blood_pressure.systolic.value)
        displayChart(systolicArr, diastolicArr, dataX, systolicDts, diastolicDts)
    })
}