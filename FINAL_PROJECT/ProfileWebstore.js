document.addEventListener("DOMContentLoaded", function () {
    const followBtn = document.getElementById("followTrainer");

    followBtn.addEventListener("click", function () {
        if (this.innerText === "FOLLOW TRAINER") {
            this.innerText = "ALREADY FOLLOWING";
            this.classList.add("following");
        } else {
            this.innerText = "FOLLOW TRAINER";
            this.classList.remove("following");
        }
    });
});

function showSidebar() {
    const sidebar = document.querySelector('#sideBar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('#sideBar')
    sidebar.style.display = 'none'
}