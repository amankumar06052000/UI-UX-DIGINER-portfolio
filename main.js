// ================= TAILWIND CONFIG =================
tailwind.config = {
    darkMode: 'class'
};

// ================= DARK MODE =================
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');

    localStorage.setItem(
        'theme',
        document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    );
}

// PAGE LOAD PAR THEME CHECK
if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
}

// ================= DOM READY =================
document.addEventListener("DOMContentLoaded", function () {

    // ===== CONTACT FORM =====
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const msg = document.getElementById("successMsg");
            msg.classList.remove("hidden");

            setTimeout(() => {
                msg.classList.add("hidden");
            }, 3000);

            this.reset();
        });
    }

    // ===== MOBILE DROPDOWN =====
    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", function () {
            mobileMenu.classList.toggle("hidden");
        });
    }

    // ===== SCROLL TO TOP =====
    const scrollBtn = document.getElementById("scrollTopBtn");

    if (scrollBtn) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                scrollBtn.classList.remove("opacity-0", "translate-y-20", "pointer-events-none");
                scrollBtn.classList.add("opacity-100", "translate-y-0");
            } else {
                scrollBtn.classList.add("opacity-0", "translate-y-20", "pointer-events-none");
                scrollBtn.classList.remove("opacity-100", "translate-y-0");
            }
        });

        scrollBtn.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

});
document.addEventListener("DOMContentLoaded", function () {

    // SHOW / HIDE PASSWORD 

    // Password Toggle
    const password = document.getElementById("password");
    const togglePassword = document.getElementById("togglePassword");

    togglePassword.addEventListener("click", function () {
        if (password.type === "password") {
            password.type = "text";
            this.textContent = "Hide";
        } else {
            password.type = "password";
            this.textContent = "Show";
        }
    });

    // Confirm Password Toggle
    const confirmPassword = document.getElementById("confirmPassword");
    const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");

    toggleConfirmPassword.addEventListener("click", function () {
        if (confirmPassword.type === "password") {
            confirmPassword.type = "text";
            this.textContent = "Hide";
        } else {
            confirmPassword.type = "password";
            this.textContent = "Show";
        }
    });



    // ===== FORM VALIDATION =====
    document.getElementById("myform").addEventListener("submit", function (e) {

        e.preventDefault();

        let phone = document.getElementById("phone").value.trim();
        let password = document.getElementById("password").value.trim();
        let email = document.getElementById("email").value.trim();
        let confirmPassword = document.getElementById("confirmPassword").value.trim();

        let phonePattern = /^[6-9][0-9]{9}$/;
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let passwordPattern = /^[0-9]{2}[a-z]{2}[0-9]{1}$/;

        document.getElementById("phoneError").innerText = "";
        document.getElementById("passwordError").innerText = "";
        document.getElementById("emailError").innerText = "";
        document.getElementById("confirmPasswordError").innerText = "";
        document.getElementById("successMessage").innerText = "";

        let isValid = true;

        if (phone === "" || !phonePattern.test(phone)) {
            document.getElementById("phoneError").innerText = "Enter valid phone number";
            isValid = false;
        }

        if (password === "" || !passwordPattern.test(password)) {
            document.getElementById("passwordError").innerText =
                "Password format: 12ab3";
            isValid = false;
        }

        if (confirmPassword !== password) {
            document.getElementById("confirmPasswordError").innerText =
                "Passwords do not match";
            isValid = false;
        }

        if (email === "" || !emailPattern.test(email)) {
            document.getElementById("emailError").innerText =
                "Enter valid email";
            isValid = false;
        }

        if (isValid) {
            document.getElementById("successMessage").innerText =
                "Form Submitted Successfully";
        }

    });

});