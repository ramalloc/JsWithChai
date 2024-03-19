// random color generator 
const colorGenerator = () => {
    const hex = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
let setIntId;
function changeColor() {
    document.body.style.backgroundColor = colorGenerator();
}
const startChangingColor = () => {
    if (!setIntId) {
        setIntId = setInterval(changeColor, 1000)
    }
}
const stopChangingColor = () => {
    clearInterval(setIntId);
    setIntId = null;
}
document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)

