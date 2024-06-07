const updatess = () => {

    const seconds = document.getElementById("seconds")
    const minutes = document.getElementById("minutes")
    const hour = document.getElementById("hour")
    const date = document.getElementById("date")
    const ampm = document.getElementById("ampm")


    const d = new Date()

    let s = d.getSeconds()

    let m = d.getMinutes()

    let h = d.getHours()

    let da = d.getFullYear()
    let ds = d.getDate()
    let mt = d.getUTCMonth() + 1
    

    let noon = h < 12 ? "AM" : "PM"

    ampm.innerText = noon
    // let noon = ampm.innerHTML

    // if (h > 12) {
    //     h = h - 12

    //     noon = "am"

    //     console.log(noon)
    //     }
    //     console.log(noon)    



    s = s < 10 ? '0' + s : s
    m = m < 10 ? '0' + m : m
    h = h < 10 ? '0' + h : h

    seconds.textContent = s
    minutes.textContent = m
    hour.innerHTML = h
    date.innerHTML = `${ds}/${mt}/${da}`

}



setInterval(() => {
    updatess()
}, 1000);