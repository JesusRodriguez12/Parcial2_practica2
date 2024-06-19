const firstNames = ["Jesus", "Eduardo", "Alberto", "Yussif", "Kairos", "Heyder", "Darla", "Delmy", "Andrea", "Wendy"];
const lastNames = ["Rodriguez", "Flores", "De la Cruz", "Graniel", "Lizarraga", "Ix", "Sánchez", "Ramírez", "Torres", "Flores"];
const generateBtn = document.getElementById('generateBtn');
const nameDisplay = document.getElementById('nameDisplay');

generateBtn.addEventListener('click', () => {
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    nameDisplay.textContent = `${randomFirstName} ${randomLastName}`;
    nameDisplay.style.opacity = 0;
    setTimeout(() => {
        nameDisplay.style.opacity = 1;
    }, 100);
});
