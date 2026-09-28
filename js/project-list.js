const projectList = document.getElementById("projectList");
if (projectList) {
    for (let i = 0 ; i < 8; i++) {
        projectList.innerHTML += projectCard();
    }
}
lucide.createIcons();
