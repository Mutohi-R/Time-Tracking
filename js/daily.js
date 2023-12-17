const reports = document.querySelector('#report-card');

const fetchDailyData = () => {
    fetch("../data.json")
    .then((response) => response.json())
    .then(((data) => {
        data.forEach( report => {
            reports.insertAdjacentHTML('beforeEnd',`
                <section class="${report.title == 'Work' ? 'bg-accent-orange' : report.title == 'Play' ? 'bg-accent-blue' : report.title == 'Study' ? 'bg-accent-red' : report.title == 'Exercise' ? 'bg-accent-green' : report.title == 'Social' ? 'bg-accent-purple' : 'bg-accent-yellow' } tracking-bg">
                    <div class="grid gap-1 tracking bg-primary-400">
                    <div class="flex align-center justify-between">
                        <p class="fw-semibold">${report.title}</p>
                        <i class="fa-solid fa-ellipsis fa-lg menu" style="color: #bdc1ff;"></i>
                    </div>
                    <div class="time">
                        <p class="fs-700">${report.timeframes.daily.current}hrs</p>
                        <p class="text-clr-primary-100">Yesterday - ${report.timeframes.daily.previous}hrs</p>
                    </div>
                    </div>
                </section>
            `)
        })
    }))
}

fetchDailyData()