const btn = document.querySelector(".btn")
const funStart = () => {
    const fah = document.querySelector(".Fahrenheit").value
    let calculation = (fah-32)/1.8
    
    const cel = document.querySelector(".Celsius").value=calculation.toFixed(2)+" ° Celsius"
    
}
btn.addEventListener("click",funStart)