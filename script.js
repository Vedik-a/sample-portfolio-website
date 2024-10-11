document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeBtn = document.querySelector(".close");

    const sections = {
        education: "Details about your education can go here.",
        workExperience: "Details about your work experience can go here.",
        skills: "Details about your skills can go here.",
        certifications: "Details about your certifications can go here."
    };

    document.querySelectorAll('.clickable').forEach(section => {
        section.addEventListener('click', () => {
            modal.style.display = "block";
            const sectionId = section.id;
            modalTitle.textContent = section.textContent;
            modalDescription.textContent = sections[sectionId];
        });
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});



