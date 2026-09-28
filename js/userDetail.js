const projectList = document.getElementById("projectList");
if (projectList) {
    for (let i = 0 ; i < 4; i++) {
        projectList.innerHTML += projectCard();
    }
}
lucide.createIcons();