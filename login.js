const captureData = function(event)
{
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    const storedPassword = getCookie(username);

    if(storedPassword === password)
    {
        window.location.href = "home.html";
    }

    else if (storedPassword === undefined)
    {
        alert("User is not registered.");
        window.location.href = "signup.html";
    }

    else
    {
        alert("Password is incorrect.");
        document.getElementById("password") = "";
    }
}

const form = document.querySelector("form");
form.addEventListener("submit", captureData);