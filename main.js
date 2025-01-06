contactWindow = document.getElementById("contact-window")
contactButton = document.getElementById("contact-button")

function openContactMe(){
    contactWindow.style.display = "block";
    contactWindow.style.visibility = "visible";
    contactButton.textContent = "Close";
} function closeContactMe() {
    contactWindow.style.display = "none";
    contactWindow.style.visibility = "hidden";
    contactButton.textContent = "Contact me"
}

function handleContactClick(){
    const display = contactWindow.style.display;
    if (display == "block"){
        closeContactMe();
    } else {
        openContactMe();
    }
}