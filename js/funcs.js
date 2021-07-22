function log(content) {
    console.log(content);
}

function openImage(url) {
    window.open(url);
}

function itemClickResponse(index) {
    switch (index) {
        case 1:
            location.href = "./index.html"
            break;
        default:
            break;
    }
}