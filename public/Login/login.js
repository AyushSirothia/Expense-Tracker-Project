const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const message = document.getElementById("message");

    try {

        const response = await axios.post(
            "http://localhost:3000/user/login",
            {
                email: email,
                password: password
            }
        );

        console.log(response.data);

        alert(response.data.message);

        loginForm.reset();

    } catch (error) {

        console.log(error);

        message.style.color = "red";

        if (error.response) {

            message.innerText =
                "Error: Request failed with status code " +
                error.response.status;

        } else {

            message.innerText = "Error: Network Error";

        }
    }
});