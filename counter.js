(() => {
    const $counter = document.getElementById("js-counter");
    const $image = document.getElementById("js-image");
    const $imageAlt = document.getElementById("js-image-alt");

    const clickHandler = (e) => {
        const $targetButton = e.currentTarget;
        let currentCount = parseInt($counter.textContent);
        const step = parseInt($targetButton.getAttribute('data-step')) || 0;

        if ($targetButton.textContent === "+") {
            $counter.textContent = currentCount + 1;
        } else if ($targetButton.textContent === "-") {
            $counter.textContent = currentCount - 1;
        } else if ($targetButton.textContent === "+10") {
            $counter.textContent = currentCount + 10;
        } else if ($targetButton.textContent === "-10") {
            $counter.textContent = currentCount - 10;
        } else if (step !== 0) {
            $counter.textContent = currentCount + step;
        }

        //カウントが3の倍数に達したら画像とテキストを表示
        if (parseInt($counter.textContent) % 3 === 0 && parseInt($counter.textContent) !== 0) {
            $image.style.display = "block";
            $imageAlt.style.display = "block";
        } else {
            $image.style.display = "none";
            $imageAlt.style.display = "none";
        }
    }

    for (let index = 0; index < document.getElementsByClassName("js-button").length; index++) {
        document.getElementsByClassName("js-button")[index].addEventListener("click", (e) => clickHandler(e))
    }
})();