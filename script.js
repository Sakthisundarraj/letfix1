const initialValues = [
    {
        id: 1,
        img:"assets/images/index/x01.jpg",
        title: "KAVIYA",
        description:
            "LETFIX is a place where anyone can learn any technology with industrial exposure.The trainers are mentoring in a way that helps us upskill ourselves better. Happy to be a part of LETFIX."
    },
    {
        id: 2,
        img:"assets/images/index/t2.jpg",
        title: "POOJA",
        description:
            "LETFIX's traning methodology is way more understandable, by which anyone can learn and build products. The practical training is the best part here.Happt to be a part of LETFIX",
    },
    {
        id: 3,
        img:"assets/images/index/t3.jpg",
        title: "THARUN",
        description:
            "LETFIX is a place where anyone can learn any technology with industrial exposure.The trainers are mentoring in a way that helps us upskill ourselves better. Happy to be a part of LETFIX.",
    },
    {
        id: 4,
        img:"assets/images/index/t4.jpg",
        title: "VISHNU",
        description:
            "LETFIX is a place where anyone can learn any technology with industrial exposure.The trainers are mentoring in a way that helps us upskill ourselves better. Happy to be a part of LETFIX.",

    },
];

document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.querySelector(".card-container");
    const overlay = document.getElementById("overlay");
    const overlayImage = document.getElementById("overlay-image");
    const overlayTitle = document.getElementById("overlay-title");
    const overlayDescription = document.getElementById("overlay-description");

    initialValues.forEach(value => {
        const card = document.createElement("div");
        card.className = "studentCard";
        card.innerHTML = `
            <button class="card-button" data-id="${value.id}">
                <img src="${value.img}" alt="${value.title}" class="studentImage">
                <span class="studentContent">
                    <h2>${value.title}</h2>
                    <div class="icon-container">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="#9c9da1" role="img" focusable="false" aria-hidden="true">
                            <path d="M8.75 4C8.75 3.58579 8.41421 3.25 8 3.25C7.58579 3.25 7.25 3.58579 7.25 4V7.25H4C3.58579 7.25 3.25 7.58579 3.25 8C3.25 8.41421 3.58579 8.75 4 8.75H7.25V12C7.25 12.4142 7.58579 12.75 8 12.75C8.41421 12.75 8.75 12.4142 8.75 12V8.75H12C12.4142 8.75 12.75 8.41421 12.75 8C12.75 7.58579 12.4142 7.25 12 7.25H8.75V4Z"></path>
                        </svg>
                    </div>
                </span>
            </button>
        `;
        cardContainer.appendChild(card);
    });

    document.querySelectorAll(".card-button").forEach(button => {
        button.addEventListener("click", function() {
            const id = this.dataset.id;
            const value = initialValues.find(item => item.id == id);

            overlayImage.src = value.img;
            overlayTitle.textContent = value.title;
            overlayDescription.textContent = value.description;

            overlay.style.display = "flex";
        });
    });

    overlay.addEventListener("click", () => {
        overlay.style.display = "none";
    });
});
