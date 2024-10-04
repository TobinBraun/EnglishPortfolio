document.addEventListener("DOMContentLoaded", function () {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const body = document.getElementById("body");
            const textDiv = document.createElement("p");
            textDiv.innerHTML = data.text;
            body.appendChild(textDiv);
        })
        .catch(error => console.error("Error fetching JSON data:", error));
});
