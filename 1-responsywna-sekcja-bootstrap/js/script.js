(function () {
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");

    function parallax(e) {
        let width = window.innerWidth / 2;
        let height = window.innerHeight / 2;
        let positionX = e.clientX - width;
        let positionY = e.clientY - height;

        const back = .005;
        const middle = .01;
        const front = .02;

        let backdDepth = `${50 - positionX * back}% ${50 - positionY * back}%`;
        let middleDepth = `${50 - positionX * middle}% ${50 - positionY * middle}%`;
        let frontDepth = `${50 - positionX * front}% ${50 - positionY * front}%`;

        let depthPosition = `${frontDepth}, ${middleDepth}, ${backdDepth}`;
        // console.log(depthPosition);
        elem.style.backgroundPosition = depthPosition;
    }

})();