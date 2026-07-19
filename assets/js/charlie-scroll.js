const charlieSections = document.querySelectorAll(".scroll-section");

charlieSections.forEach(section => {

    const x = 0; // Math.floor(Math.random() * 1200) - 600;
    const y = 0; // Math.floor(Math.random() * 1200) - 600;
    const r = Math.floor(Math.random() * 60) - 30;
    const s = Math.random() * 0.2 + 0.4;
    const sy = 1 / s;

    section.style.setProperty("--x", `${x}px`);
    section.style.setProperty("--y", `${y}px`);
    section.style.setProperty("--r", `${r}deg`);
    section.style.setProperty("--s", `${s}`);
    section.style.setProperty("--sy", `${sy}`);
});


const charlieObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }

    });

});


charlieSections.forEach(section => charlieObserver.observe(section));