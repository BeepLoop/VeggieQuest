document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target).entries());

    if(!data.email || !data.password) {
        console.error("email or password field not found");
        return;
    }

    if (data.email !== "admin@email.com" || data.password !== "admin") {
        console.error("incorrect credentials");
        return;
    }

    window.location.href = "homepage.html";
})
