// Fetch links from the JSON file
fetch('index.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(links => {
        console.log("Links loaded:", links); // Debugging the loaded links
        createButtons(links);
    })
    .catch(error => {
        console.error("Error loading the JSON file:", error);
    });

// Function to create buttons dynamically
function createButtons(links) {
    const buttonContainer = document.getElementById("button-container");

    if (!buttonContainer) {
        console.error("Button container not found.");
        return;
    }

    links.forEach(url => {
        // Extract the title from the URL (using the domain name)
        const title = getTitleFromURL(url);

        // Create a button
        const button = document.createElement("button");
        button.innerText = title; // Set button text as the extracted title
        button.onclick = function() {
            openIframe(url); // Open the corresponding URL in the iframe
        };
        buttonContainer.appendChild(button);
    });
}

// Function to extract a readable title from a URL
function getTitleFromURL(url) {
    const domain = new URL(url).hostname.replace('www.', '').split('.')[0];
    return domain.charAt(0).toUpperCase() + domain.slice(1); // Capitalize the first letter
}

// Function to display the iframe in fullscreen
function openIframe(url) {
    const iframeContainer = document.getElementById("iframe-container");
    const iframe = document.getElementById("iframe");

    iframe.src = url; // Set the iframe source to the selected link
    iframeContainer.style.display = "block"; // Show the iframe container
}
