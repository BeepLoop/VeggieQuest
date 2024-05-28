document.getElementById("register-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target).entries());
    console.log(data)
})
