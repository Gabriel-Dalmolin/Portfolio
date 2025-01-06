contactWindow = document.getElementById("contact-window")

function openContactMe(){
    contactWindow.style.display = "block";
    contactWindow.style.visibility = "visible";
} function closeContactMe() {
    contactWindow.style.display = "none";
    contactWindow.style.visibility = "hidden";
}

function handleContactClick(){
    const display = contactWindow.style.display;
    if (display == "block"){
        closeContactMe();
    } else {
        openContactMe();
    }
}