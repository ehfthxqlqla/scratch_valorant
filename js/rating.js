// const { default: axios } = require("axios");

const setScreenSize = () => {
	const vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setScreenSize();

window.addEventListener('resize', setScreenSize);

const agree_button = document.querySelector(".css-poll-yes"),
disagree_button = document.querySelector(".css-poll-no"),
likes = document.querySelector(".js-likes"),
dislikes = document.querySelector(".js-dislikes"),
percents = document.querySelector(".js-percent");

function percentOf(value, total) {
	if (value === 0) {
		return 0;
	} else {
		return (value / total) * 100
	}
}

async function initLikes(){
	const res = await axios.get(`https://api.ehfthxqlqla.repl.co/api/v1/poll/count/scval`)

	const likes_count = res.data.yes,
	dislikes_count = res.data.no

	likes.innerText = likes_count
	dislikes.innerText = dislikes_count

	const likes_percent = Math.round(percentOf(likes_count, likes_count + dislikes_count)),
	dislikes_percent = Math.round(percentOf(dislikes_count, likes_count + dislikes_count), 0)

	percents.innerText = `${likes_percent}% / ${dislikes_percent}%`
}; initLikes()

agree_button.addEventListener("click", async function() {
	const is_polled = Boolean(window.localStorage.getItem("polled"))

	if (is_polled) {
		alert(`이미 투표했습니다.`)
		return
	}

	await axios.post(`https://API.ehfthxqlqla.repl.co/api/v1/poll/scval`, {
		yes:true,
		no:false
	})
	.then(() => {
		alert(`투표했습니다.`)
		window.localStorage.setItem("polled", true)
		initLikes()
	})
	.catch(() => {
		alert(`오류가 발생했습니다.`)
	})
})

disagree_button.addEventListener("click", async function() {
	const is_polled = Boolean(window.localStorage.getItem("polled"))

	if (is_polled) {
		alert(`이미 투표했습니다.`)
		return
	}

	await axios.post(`https://API.ehfthxqlqla.repl.co/api/v1/poll/scval`, {
		yes:false,
		no:true
	})
	.then(() => {
		alert(`투표했습니다.`)
		window.localStorage.setItem("polled", true)
		initLikes()
	})
	.catch(() => {
		alert(`오류가 발생했습니다.`)
	})
})