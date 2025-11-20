const container = document.querySelector('.container');

const refreshBtn = document.querySelector('.refresh');

const maxPaletteBoxes = 10;

const generateColors = () => {
    container.innerHTML = ''; // Clearing the container
    for (let i = 0; i < maxPaletteBoxes; i++) {

        // Generating a random color hex
        let randomColors = Math.floor(Math.random() * 0xffffff).toString(16);
        randomColors = `#${randomColors.padStart(6, "0")}`;

        // Creating a new li element and inserting it to a container
        const color = document.createElement("li");

        color.classList.add("color");

        color.innerHTML = `<div class="box" style="background: ${randomColors}"></div>
                           <span class="value">${randomColors}</span>`;

        // Adding click event to current li element to copy the code
        color.addEventListener('click', () => copyCode(color, randomColors));
        container.appendChild(color);

    };
};

generateColors();

const copyCode = (element, val) => {
    const colorElem = element.querySelector('.value');

    // Copying the hex value and updating the text to 'Copied', and changing it back to the hex value again after 1 second
    navigator.clipboard.writeText(val).then(()  => {
        colorElem.innerText = 'Copied';

        setTimeout(() => colorElem.innerText = val, 1000)
    }); 
};

refreshBtn.addEventListener('click', generateColors);