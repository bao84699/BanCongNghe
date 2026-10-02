function renderIntroStats(text, title, information) {
    return `
        <section class="intro-stats">
            <div class="left">
                <div class="description">
                    <div class="kitu">//</div>
                    <div class="text">${text}</div>
                </div>
                <div class="title">${title}</div>
                <div class="information">${information}</div>
            </div>
            <div class="right">
                <div class="item">
                    <div class="icon">
                        <img src="../Images/ProjectList/section1/TongDuAn.svg" alt="">
                    </div>
                    <div class="number">42</div>
                    <div class="descript">Tổng dự án</div>
                </div>
                <div class="item">
                    <div class="icon">
                        <img src="../Images/ProjectList/section1/ThanhVien.svg" alt="">
                    </div>
                    <div class="number">156</div>
                    <div class="descript">Thành viên tham gia</div>
                </div>
                <div class="item">
                    <div class="icon">
                        <img src="../Images/ProjectList/section1/lich.svg" alt="">
                    </div>
                    <div class="number">2020</div>
                    <div class="descript">Được bắt đầu</div>
                </div>
                <div class="item">
                    <div class="icon">
                        <img src="../Images/ProjectList/section1/TongDuAn.svg" alt="">
                    </div>
                    <div class="number">12</div>
                    <div class="descript">Dự án nổi bật</div>
                </div>
            </div>
        </section>
    `;
}
