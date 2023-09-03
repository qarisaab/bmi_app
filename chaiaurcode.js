const form = document.querySelector("form")
form.addEventListener("submit", function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector("#height").value)
    const result = document.querySelector('#results')
    const weight = parseInt(document.querySelector("#weight").value)
    if (height === "" || height < 0 || isNaN(height)){
        result.innerHTML = "Please Enter correct height"
    } else if (weight === "" || weight < 0 || isNaN(weight)){
        result.innerHTML = "Please Enter correct weight"}
        else {
            const bmi =(weight / ((height*height)/10000)).toFixed(2)
            if (bmi < 18.6){
                result.textContent = `Underweight with index of ${bmi}`
            } else if (bmi >= 18.6 && bmi <= 24.9){
                result.textContent = `Normal range with index of ${bmi}`
            } else if (bmi >= 24.9) {
                result.textContent = `overweight with index of ${bmi}`
            }
        }

    })