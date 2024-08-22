export const diagnosticList = (d) => {
    const dList = document.querySelector("#diagnosticList")
    let tbody='';
    d.diagnostic_list.forEach(l=> {
        tbody+=`
            <tr>
                <td>${l.name ?? '-'}</td>
                <td>${l.description ?? '-'}</td>
                <td>${l.status ?? '-'}</td>
            </tr>
        `
    })
    const table=`
            <table class="table table-no-border">
                <tr>
                    <thead>
                        <th>Problem/Diagnosis</th>
                        <th>Description</th>
                        <th>Status</th>
                    </thead>
                </tr>
                ${tbody}
            </table>
        `
    dList.insertAdjacentHTML('beforeend', table);
}