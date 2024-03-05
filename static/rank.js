function mySubmitFunction(e) {
    e.preventDefault();
    if (validForm()) {
        window.location = "../views/thanku.html";
    }
    return false;
}

function validForm() {
    const locationElem = document.querySelector("#location");
    const nameElem = document.querySelector("#TypeOfCycling");
    const rateElem = document.querySelector("#rate");
    const reviewElem = document.querySelector("#review");


    if ((!locationElem.value)|| (locationElem.value=="hide")) {
        locationElem.classList.add("invalid");
        alert("Location is required");
        return false;
    }
    locationElem.classList.remove("invalid");

    if ((!nameElem.value) || (nameElem.value=="hide")) {
        nameElem.classList.add("invalid");
        alert("Route name is required");
        return false;
    }
    nameElem.classList.remove("invalid");

    if (!rateElem.value) {
        rateElem.classList.add("invalid");
        alert("You must rate your experience");
        return false;
    }
    rateElem.classList.remove("invalid");

    if (!reviewElem.value) {
        reviewElem.classList.add("invalid");
        alert("Review is required");
        return false;
    }
    reviewElem.classList.remove("invalid");

    return true;
}
