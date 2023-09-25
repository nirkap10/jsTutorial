// Write a function that calculates the circle area by a given radius
// as an argument. Print the area as it is calculated and then print
// it rounded to two decimal places

const areaCalculator = function(radius){
    const area = radius*radius*Math.PI;
    console.log(area);
    console.log(area.toFixed(2));
}
areaCalculator(3);