const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const message = document.getElementById("message");

    try {

        const response = await axios.post(
            "http://localhost:3000/user/signup",
            {
                name: name,
                email: email,
                password: password
            }
        );

        console.log(response.data);

        message.style.color = "green";
        message.innerText = "Signup successful";

        signupForm.reset();

    } catch (error) {

        console.log(error);

        message.style.color = "red";

        if (error.response) {
            message.innerText = "Error: " + error.response.data.message;
        } else {
            message.innerText = "Error: Network Error";
        }
    }
});