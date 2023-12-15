const fortuneSayings = ['Don’t hold onto things that require a tight grip.', 'Vulnerability sounds like faith and looks like courage.', 'Sitting in silence with you is all the noise I need.', 'Tough love only works when there`s as much love as there is tough.', 'What good are wings, without the courage to fly.', 'Turn your wounds into wisdom.', 'You are your best thing.', 'Try and fail, but never fail to try.', 'Be bold, be courageous, be your best.', 'What we learn with pleasure we never forget.' ]
const closedCookie = document.querySelector('.cookie-closed')
const openedCookie = document.querySelector('.cookie-opened')
const openedCookieSayingContainer = openedCookie.querySelector('.fortune-text')
const closedCookieImage = closedCookie.querySelector('img')
const regenerateButton = openedCookie.querySelector('button')

closedCookieImage.addEventListener("click", handleOpenCookie)
regenerateButton.addEventListener("click", toggleScreen)
document.addEventListener("keypress", function (e) {
    if(e.key === 'Enter' && closedCookie.classList.contains('hide')) {
        toggleScreen()
    }
})

function toggleScreen () {
    closedCookie.classList.toggle('hide')
    openedCookie.classList.toggle('hide')
}

function handleOpenCookie () {
    let randomNumber = Math.floor(Math.random() * 10);
    openedCookieSayingContainer.innerText = fortuneSayings[randomNumber]
    toggleScreen()
}