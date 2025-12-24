const captureData = function(event)
{
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("new-password").value;
    const confPassword = document.getElementById("confirm-password").value;

    if(password !== confPassword)
    {
        alert("Passwords don't match.");
        document.getElementById("confirm-password").value = "";
        return;
    }   
    

    if(validateData(username,password) === true)
    {
        setCookie(username, password,30);
        window.location.href = "login.html"
    }
    
};

const validateData = function(username,password)
{
  
    if(username.length < 3)
    {
        alert("Username must be at least 3 characters.");
        return false;
    }
    
    if(password.length < 5)
    {
        alert("Password must be longer than 5 characters.");
        return false;    
    }

    const capitalLetterPattern = /[A-Z]/;
    if (!capitalLetterPattern.test(password)) {
        alert("Password must contain at least one CAPITAL letter.");
        return false;
    }

    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialCharPattern.test(password)) {
        alert("Password must contain at least one special character (e.g., ! @ # $).");
        return false;
    }

    return true;
}

const form = document.querySelector("form");
form.addEventListener("submit",captureData)