const projectList = document.getElementById("projectList");
const seeMore = document.getElementById("seeMore");
let isExpanded = false;
function renderCards() {
    if (!projectList) return;
    projectList.innerHTML = ""; 
    const count = isExpanded ? 6 : 3; 
    for (let i = 0 ; i < count; i++) {
        projectList.innerHTML += projectCard();
    }
    lucide.createIcons(); 
}
renderCards();
if (seeMore) {
    seeMore.addEventListener("click", function(event) {
        event.preventDefault(); 
        
        isExpanded = !isExpanded; 
        seeMore.innerHTML = isExpanded 
            ? `Thu gọn <i data-lucide="chevron-up"></i>` 
            : `Xem tất cả dự án <i data-lucide="chevron-down"></i>`;
        renderCards();
    });
}
