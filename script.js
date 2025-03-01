const statusParagraph = document.getElementById("status");
const enterButton = document.getElementById("enterBtn");
const heading = document.getElementById("heading");

enterButton.addEventListener("click", () => {
    statusParagraph.style.display = "none";
    heading.innerText = "Entered Metaverse";
    heading.style.display = "block";
});
