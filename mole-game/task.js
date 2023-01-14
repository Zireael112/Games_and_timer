let getHole = index => document.getElementById(`hole${index}`)
let deadMole = document.getElementById('dead')
let missMole = document.getElementById('lost')
let deadNum = Number(deadMole.textContent)
let missNum = Number(missMole.textContent)

const checkGame = (win, lost) => {
    if (win === 10) {
        alert('Вы победили!')
        location.reload()
    } else if (lost === 5) {
        alert('Вы проиграли!')
        location.reload()
    }
}

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function () {
        if (this.className.includes('hole_has-mole')) {
            deadNum += 1
            deadMole.textContent = deadNum
        } else {
            missNum += 1
            missMole.textContent = missNum
        }
        checkGame(deadNum, missNum)
    }
}