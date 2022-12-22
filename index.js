console.log(0);

(async function () {
    try {
        const response = await fetch("/nav.json");
        const data = await response.json();

        data.forEach((item) => {
            const dom = document.querySelector("nav > ul");
            dom.innerHTML += toNavDom(item);
        });
    } catch (err) {
        const dom = document.querySelector("nav");
        dom.innerHTML = "Failed to fetch data!";
    }
})();
