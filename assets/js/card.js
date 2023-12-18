
/**
  * @type HTMLCanvasElement
*/


// FETCHING ELEMENTS
let cardCanvas = document.getElementById('card-canvas')
let context = cardCanvas.getContext('2d')
let backgroundSelect = document.getElementById('background');
let cardDownload = document.getElementById('card-download')
let recipientText = document.getElementById('recipient')
let greeting = document.getElementById('greeting')
let senderText = document.getElementById('sender')

// EVENT LISTENERS
// make the card
backgroundSelect.addEventListener('change', createCard);
recipientText.addEventListener('input', createCard);
greeting.addEventListener('input', createCard);
senderText.addEventListener('input', createCard);
// Save the card to your pc
cardDownload.addEventListener('click', saveCard)


// Function to create the card
function createCard() {
    // 1. Clear the canvas
    context.clearRect(0, 0, cardCanvas.width, cardCanvas.height);

    // 2. Get the selected background URL from the dropdown
    let backgroundUrl = `assets/images/image_${backgroundSelect.value}.jpg`;

    // 3. Load and draw the background image
    let backgroundImage = new Image();
    backgroundImage.src = backgroundUrl;
    backgroundImage.onload = function () {

        // Calculate the aspect ratio of the image
        const aspectRatio = backgroundImage.width / backgroundImage.height;

        // Calculate the dimensions of the canvas based on the image aspect ratio
        let canvasWidth = cardCanvas.parentElement.offsetWidth;
        let canvasHeight = canvasWidth / aspectRatio;

        // Set the canvas dimensions
        cardCanvas.width = canvasWidth;
        cardCanvas.height = canvasHeight;

        context.drawImage(backgroundImage, 0, 0, cardCanvas.width, cardCanvas.height);

        // 4. Draw the text on top of the background image

        const recipient = recipientText.value;
        const text = greeting.value;
        const sender = senderText.value;

        // left align
        // Calculate the coordinates to horizontally center the text
        const x = 30
        const y = 75

        context.font = "18px Lucida Bold";
        context.fillText(recipient, x, y - 20);
        context.fillText(text, x, y);
        context.fillText(sender, x, y + 20);
    }
}

// Function to save the card
function saveCard() {
    // 1. Convert the card canvas into a URL
    let cardUrl = cardCanvas.toDataURL('image/png');
    // 2. Update the download link and save URL link
    cardDownload.href = cardUrl;
}


const carousel = document.getElementById('carouselExampleIndicators')

// Updates the dropdown select field to match the carousel image
carousel.addEventListener('slide.bs.carousel', event => {
    backgroundSelect.value = event.to + 1;
    createCard();
})

// Updates the carousel image when the user selects a background image
// from the dropdown select field
backgroundSelect.addEventListener('change', event => {
    bootstrap.Carousel.getOrCreateInstance(carousel).to(backgroundSelect.value - 1)
})


// Creating the shareable link
const cardForm = document.getElementById("cardForm");

cardForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // base URL to display the card to the recipient
    const cardUrl = new URL('view-card.html', window.location.href);
    // turn the form fields into a query string
    const values = new URLSearchParams(new FormData(cardForm));

    // add the query string as the URL hash, so it can be retrieved by the 'receive message' page
    // btoa() encodes the query string so that the user's data is not shown directly in the URL
    cardUrl.hash = btoa(values.toString());

    // display the URL in a read-only text field so the user can copy and share it
    const urlField = document.getElementById("cardUrl");
    urlField.value = cardUrl.toString();

});

// Renders the canvas on load so that it displays the first image (instead of being empty)
createCard();
