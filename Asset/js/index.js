// Xử lý ẩn/hiện menu khi nhấn nút
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-btn");
    const navMenu = document.querySelector(".nav");

    if (menuButton && navMenu) {
        menuButton.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }
});
// Các ô thu nhỏ phóng to
document.querySelectorAll('.item').forEach((item) => {
    const randomDuration = Math.random() * 2 + 1; // Duration từ 1s đến 3s
    const randomDelay = Math.random() * 4; // Delay từ 0s đến 2s

    item.style.animation = `random-scale ${randomDuration}s ease-in-out ${randomDelay}s infinite`;
});