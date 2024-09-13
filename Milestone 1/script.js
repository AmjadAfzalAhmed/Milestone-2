"use strict";
const toggleSkillsBtn = document.getElementById("toggle-btn");
const skillsSection = document.getElementById("skills-section");
toggleSkillsBtn === null || toggleSkillsBtn === void 0 ? void 0 : toggleSkillsBtn.addEventListener("click", () => {
    if (skillsSection) {
        if (skillsSection.style.display === "none") {
            skillsSection.style.display = "block";
        }
        else {
            skillsSection.style.display = "none";
        }
    }
});
