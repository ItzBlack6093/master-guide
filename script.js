function styleErrorDetect(){
    // document.getElementById("style_warning").classList.toggle("hidden", window.innerWidth / 1.5 > window.innerHeight)
}

document.addEventListener("DOMContentLoaded", e => {
    const bg = document.getElementById("background")
    const url = `/backgrounds/${Math.floor(Math.random() * 13)*100}.png`
    bg.src = url
    styleErrorDetect()
})

window.addEventListener(onresize, e => {
    styleErrorDetect()
    console.log('resize')
})

window.addEventListener("orientationchange", e => {
    styleErrorDetect()
    console.log('orientation')
})