document.addEventListener("DOMContentLoaded", function () {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const textDiv = document.getElementById("text_div");
            for (let i = 0; i < data.text.length; i++) {
                const paragraph = document.createElement("p");
                paragraph.innerHTML = data.text[i];
                textDiv.appendChild(paragraph);
            }
        })
        .catch(error => console.error("Error fetching JSON data:", error));
});