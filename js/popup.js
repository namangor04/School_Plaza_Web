function onLoad() {
    const desc = document.getElementsByClassName('description')[0];
    /* var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {},
        tmp;
    log(`url = ${url}`);
    for (var i = 0, l = params.length; i < l; i++) {
        tmp = params[i].split('=');
        data[tmp[0]] = tmp[1];
    }
    log(`url = ${url}, data = ${data}`);
    desc.innerText = data["cart"]; */
    desc.innerText = localStorage["cart"];
    log('Text Set');
}

document.getElementById("dismiss-popup-btn").addEventListener("click", function() {
    ///use this
    history.back();
    ///below not appropriate
    /* location.href = "./index.html"; */
});