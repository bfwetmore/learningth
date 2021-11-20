/**
 * Calculates
 * @param width - the width of a rectangle
 * @param height - the height of a rectangle
 * @returns {number} - the area of the rectangle.
 */

function rect(width, height) {
    return width * height;
}

/**
 * Calculates and Returns the area of a prism.
 *
 * @param width - the width of a prism
 * @param height - the height of a prism
 * @param length - the length of a prism
 * @returns {number} - the area of a prism
 */
function prism(width, height, length) {
    return width * height * length;
}

/**
 * Calculates and returns the area of a rectangle
 *
 * @param radius - the radius of a circle
 * @returns {number} - the area of a circle
 */
function circle(radius) {
    return Math.PI * Math.pow(radius, 2);
}

/**
 * Calculates and returns the area of a Sphere
 *
 * @param radius - the radius of a sphere
 * @returns {number} - the area of a sphere
 */
function sphere(radius) {
    return (4 / 3) * Math.PI * Math.pow(radius, 3);
}

console.log(rect(5, 22));
console.log(prism(4.5, 12.5, 17.4));
console.log(circle(7.2));
console.log(sphere(7.2));
