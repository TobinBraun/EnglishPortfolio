document.addEventListener("DOMContentLoaded", function () {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const body = document.getElementById("body");

            //const nameElement = document.createElement("p");
            //nameElement.textContent = "Name: " + data.name;

            //const ageElement = document.createElement("p");
            //ageElement.textContent = "Age: " + data.age;

            const textDiv = document.createElement("p");
            textDiv.innerHTML = data.text;

            // Append the elements to the "dataDisplay" div
            dataDisplay.appendChild(textDiv);
        })
        .catch(error => console.error("Error fetching JSON data:", error));
});
