let loginStatus = false;

function init() {
    login()
}

document.addEventListener("DOMContentLoaded", init);
document.getElementById("loginButton").addEventListener("click", login);

document.addEventListener("click", (e) => {
    if (e.target.dataset.page) {
        renderMainContent(e.target.dataset.page);
    }
});

// Section for test login

async function login() {
    const loginButton = document.getElementById('loginButton');
    const main = document.getElementById('main');

    if (loginStatus) {
        loginButton.textContent = "Sign Out";

        const html = await renderHtmlContent("html/loggedIn.html");
        main.innerHTML = html;

        renderMainContent("landingPage");

    } else {
        loginButton.textContent = "Sign In";

        const html = await renderHtmlContent("html/loggedOut.html");
        main.innerHTML = html;
    }

    loginStatus = !loginStatus;
}

async function renderHtmlContent(path) {
    const response = await fetch(path);

    if (!response.ok) {
        throw new Error("HTML konnte nicht geladen werden: " + path);
    }

    return await response.text();
}

async function renderMainContent(content) {
    let htmlPath = './html/' + content + '.html';
    const html = await renderHtmlContent(htmlPath);
    document.getElementById('mainContent').innerHTML = html;
}