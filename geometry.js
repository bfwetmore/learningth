
function rect(width, height) {
    return width * height;
}

function prism(width, height, length) {
    return width * height * length;
}

function circle(radius) {
    return Math.PI * Math.pow(radius, 2);
}

function sphere(radius) {
    return (4 / 3) * Math.PI * Math.pow(radius, 3);
}

console.log(rect(5, 22));
console.log(prism(4.5, 12.5, 17.4));
console.log(circle(7.2));
console.log(sphere(7.2));

