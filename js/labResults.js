export const labResults = (d) => {
    const labResults = document.querySelector("#labResults");
    d.lab_results.forEach(r=> {
        const li = `<li class="mb-3"><div class="d-flex justify-content-between"><span>${r}</span><img src="./images/download.png"></div></li>`;
        labResults.insertAdjacentHTML('beforeend', li);
    })
}