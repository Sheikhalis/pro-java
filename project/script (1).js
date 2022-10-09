let height=72 //inches
let weight=175 //pounds
let inchToCm=2.54 //cm
let poundToKg=0.4535 //kg
let heightInCm=height*inchToCm
let weightInKg=weight*poundToKg
console.log('Height in inches: '+height)
console.log('Height in cm: '+heightInCm)
console.log('Weight in pounds: '+weight)
console.log('Weight in Kgs: '+weightInKg)
let bmi=weightInKg/((heightInCm/100)^2)
console.log('BMI: '+bmi)