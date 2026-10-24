// ادارة تسجيل الدخول والخروج
document.addEventListener("DOMContentLoaded", function () {
    let register=document.getElementById("register")
let Login=document.getElementById("Login")
let logout=document.getElementById("Logout")

let isLogged = localStorage.getItem("islog") === "true"

// اظهار واخفاء لينكات تسجيل الدخول والخروج
if (isLogged) {

        if (registerLink) registerLink.closest("li").style.display = "none"
        if (loginLink) loginLink.closest("li").style.display = "none"
        if (logoutLink) logoutLink.closest("li").style.display = "block"
    } else {

        if (registerLink) registerLink.closest("li").style.display = "block"
        if (loginLink) loginLink.closest("li").style.display = "block"
        if (logoutLink) logoutLink.closest("li").style.display = "none"
    }
// register
    let registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let fullName = document.getElementById("namee");
            let email = document.getElementById("emaill");
            let password = document.getElementById("passwordd");
            
            localStorage.setItem("namee", fullName.value);
            localStorage.setItem("emaill", email.value);
            localStorage.setItem("passwordd", password.value);
            localStorage.setItem("islog", "true");
            
            alert("Registered successfully.");
            window.location.href = 'index.html';
        });
    }

// login
    let loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let email2 = document.getElementById("email2");
            let password2 = document.getElementById("password2");
            
            let savedemail = localStorage.getItem("emaill");
            let savedpassword = localStorage.getItem("passwordd");

            if (email2.value === savedemail && password2.value === savedpassword) {
                localStorage.setItem("islog", "true");
                alert("Logged in successfully.");
                window.location.href = 'index.html';
            } else {
                alert("The data is incorrect.");
            }
        });
    }

// logout
    let logoutBtn = document.getElementById("Logout");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function (e) {
            e.preventDefault();
            localStorage.setItem("islog", "false");
            alert("Logged out successfully.");
            window.location.href = "index.html";
        });
    }
});
