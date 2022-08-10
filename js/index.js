const setScreenSize = () => {
	const vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setScreenSize();

window.addEventListener('resize', setScreenSize);

(function(target){
    Array.from(target)
    .forEach((element) => {
        element.addEventListener("contextmenu", function(e){
            e.preventDefault()
        })

        element.addEventListener("mousedown", function(e){
            e.preventDefault()
        })
    })
})(document.querySelectorAll(".js-no-interact"));

(function(target){
    Array.from(target)
    .forEach((element) => {
        element.target = "_blank"
    })
})(document.querySelectorAll(".js-newtab"))

const audio = new Audio()

const introduce = document.querySelector(".js-introduce"),
download = document.querySelector(".js-download"),
rules = document.querySelector(".js-rules"),
tips = document.querySelector(".js-tips"),
tips_content = document.querySelector(".css-tips-tip"),
header = document.querySelector(".css-header")

header.style.position = "static"

const introducePage = document.querySelector(".css-introduce"),
downloadPage = document.querySelector(".css-download"),
rulesPage = document.querySelector(".css-rules"),
tipsPage = document.querySelector(".css-tips")

const pages = [introducePage, downloadPage, rulesPage, tipsPage]

const downloadButton = document.querySelector(".css-download-button")

introduce.addEventListener("click", function() {
    header.style.position = "static"

    pages.forEach((element) => {
        if (element.classList[0] === "css-introduce") {
            element.style.display = "block"
        } else {
            element.style.display = "none"
        }
    })
})

download.addEventListener("click", function() {
    header.style.position = "static"

    pages.forEach((element) => {
        if (element.classList[0] === "css-download") {
            element.style.display = "block"
        } else {
            element.style.display = "none"
        }
    })
})

rules.addEventListener("click", function() {
    header.style.position = "static"

    pages.forEach((element) => {
        if (element.classList[0] === "css-rules") {
            element.style.display = "block"
        } else {
            element.style.display = "none"
        }
    })
})

tips.addEventListener("click", function() {
    header.style.position = "static"

    pages.forEach((element) => {
        if (element.classList[0] === "css-tips") {
            element.style.display = "block"
        } else {
            element.style.display = "none"
        }
    })
})

downloadButton.addEventListener("click", function() {
    window.open("https://drive.google.com/uc?export=download&id=1LaYfBk_WPFJ7elouGyI7M5V8vr1MmVWf", '_blank')
})

const back_button = document.querySelector(".js-back"),
show_button = document.querySelector(".js-show"),
play_hitmarker = document.querySelector(".js-play-hitmarker"),
play_fire = document.querySelector(".js-play-fire"),
play_heal = document.querySelector(".js-play-heal"),
audio_source = {
    hitmarker:"../audios/hit_effect.mp3",
    fire:"../audios/vandal_shoot.mp3",
    heal:"../audios/heal.mp3"
}

back_button.addEventListener("click", function() {
    introduce.click()
})

show_button.addEventListener("click", function() {
    document.querySelector(".css-warn").remove()
    
    tips_content.style.display = "block"
    header.style.position = "fixed"
})

play_hitmarker.addEventListener("click", function() {
    audio.src = audio_source.hitmarker
    audio.play()
})

play_fire.addEventListener("click", function() {
    audio.src = audio_source.fire
    audio.play()
})

play_heal.addEventListener("click", function() {
    audio.src = audio_source.heal
    audio.play()
})