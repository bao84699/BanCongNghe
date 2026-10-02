
const introContainer = document.getElementById("introStatsContainer");
if (introContainer) {
    introContainer.innerHTML = renderIntroStats(
        "DỰ ÁN.", 
        "DỰ ÁN CỦA BCN", 
        "Khám phá những sản phẩm, dự án và hoạt động nổi bật được tạo ra bởi các thành viên của ban công nghệ."
    );
}
const projectList = document.getElementById("projectList");
if (projectList) {
    for (let i = 0 ; i < 8; i++) {
        projectList.innerHTML += projectCard();
    }
}
lucide.createIcons();
