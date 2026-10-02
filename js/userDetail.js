const projectList = document.getElementById("projectList");
if (projectList) {
    for (let i = 0 ; i < 3; i++) {
        projectList.innerHTML += projectCard();
    }
}
lucide.createIcons();