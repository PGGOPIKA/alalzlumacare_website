// Login Function
function login(event) {
    event.preventDefault();
    window.location.href = "dashboard.html";
}

// Profile Update Function
document.addEventListener("DOMContentLoaded", function () {
    const profileForm = document.getElementById("profile-form");
    
    if (profileForm) {
        profileForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Profile updated successfully!");
        });
    }
});
