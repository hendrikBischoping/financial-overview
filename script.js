// let loginStatus = false;
let loginStatus = true;

function init() {
    login()
}

// Section for test login

function login() {
    let loginButton = document.getElementById('loginButton');
    let main = document.getElementById('main');
    loginButton.innerHTML = "";
    main.innerHTML = ""
    
    if (loginStatus) {
        loginButton.innerHTML = "Sign Out"
        // main.innerHTML = renderLoginContent();
        renderHtmlContent("html/loggedIn.html").then(html => {
            document.getElementById('main').innerHTML = html;
        })
    } else {
        loginButton.innerHTML = "Sign In"
        // main.innerHTML += renderLogoutContent();
        renderHtmlContent("html/loggedOut.html").then(html => {
            document.getElementById('main').innerHTML = html;
        })
    }

    loginStatus = !loginStatus;
}

async function renderHtmlContent(htmlFilePath) {
    const response = await fetch(htmlFilePath);
    const html = await response.text();
    return html;
}

async function renderMainContent(content) {
    let htmlPath = './html/'+content+`.html`;
    console.log(htmlPath);
    renderHtmlContent(htmlPath).then(html => {
            document.getElementById('mainContent').innerHTML = html;
})
}