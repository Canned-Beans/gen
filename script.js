// Sample JSON file (you can replace this with a fetch from an actual .json file)
const links = [
    { "name": "Google", "url": "https://www.example.com" },
    { "name": "Bing", "url": "https://www.bing.com" },
    { "name": "YouTube", "url": "https://www.wikipedia.org" }
];

// Function to create buttons dynamically
function createButtons() {
    const buttonContainer = document.getElementById("button-container");

    links.forEach(link => {
        const button = document.createElement("button");
        button.innerText = link.name;
        button.onclick = function() {
            openIframe(link.url);
        };
        buttonContainer.appendChild(button);
    });
}

// Function to display the iframe in fullscreen
function openIframe(url) {
    const iframeContainer = document.getElementById("iframe-container");
    const iframe = document.getElementById("iframe");

    iframe.src = url; // Set the iframe source to the selected link
    iframeContainer.style.display = "block"; // Show the iframe container
}

// Initialize the page with buttons
createButtons();
