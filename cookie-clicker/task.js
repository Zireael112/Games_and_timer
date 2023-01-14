const cookieImg = document.getElementById("cookie");
let cookieCount = document.getElementById("clicker__counter");

cookieImg.onclick = () => {
    cookieCount.textContent = Number(cookieCount.textContent) + 1
    if (Number(cookieCount.textContent) % 2 === 0 || Number(cookieCount.textContent) === 0) {
        cookieImg.width += 20
    } else {
        cookieImg.width -= 20
    }

}