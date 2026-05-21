var linkler = document.querySelectorAll("a[href^='#']");
linkler.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        var hedef = document.querySelector(this.getAttribute("href"));
        if (hedef) {
            hedef.scrollIntoView({ behavior: "smooth" });
        }
    });
});
