
import { patientsData } from "./patientsData.js";

export async function fetchData() {
    try {
        const url = 'https://fedskillstest.coalitiontechnologies.workers.dev';
        const credentials = btoa(`coalition:skills-test`);
        const response = await fetch(url, {
            method:"GET",
            headers: {
                'Authorization': `Basic ${credentials}`
            }
        });
        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        // update lists
        patientsData(data);        
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}