(function() {
    "use strict";

    // create a circle object
    let circle = {
        radius: 5,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            let area = Math.PI  * Math.pow(circle.radius, 2);
            return area; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            let area = this.getArea()
            if (doRounding) {
                let roundedArea = Math.round(area);
            console.log("Area of a circle with radius: " + this.radius + ", is: " + roundedArea);
        } else {
                console.log("Area of a circle with radius: " + this.radius + ", is: " + area);
            }
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();