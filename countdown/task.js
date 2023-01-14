const time = document.getElementById('timer')

const intervalId = setInterval(() => {
    if (Number(time.textContent) > 0) {
        time.textContent = Number(time.textContent) - 1
    } else {
        alert('Вы победили в конкурсе!')
        clearInterval(intervalId)
    }
}, 1000)
