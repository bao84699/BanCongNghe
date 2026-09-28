function projectCard() {
    const isPage = window.location.pathname.includes('/page/');
    const link = isPage ? 'project-detail.html' : 'page/project-detail.html';
    
    return `<a href="${link}" class="project-card" >
            <div class="thumbnail"></div>
            <div class="information">
                <div class="title">BCN Landing Page</div>
                <div class="tag">
                    <div class="tag-temp">web</div>
                    <div class="tag-temp">K20</div>
                    <div class="tag-temp">2020</div>
                </div>
                <div class="description">
                    Website giới thiệu Ban Công Nghệ và các hoạt động của ban.
                </div>
                <div class="participant-favourite">
                    <div class="participant">
                        <div class="user"></div>
                        <div class="user"></div>
                        <div class="user"></div>
                        <div class="user"></div>
                        <div class="moreover">+3</div>
                    </div>
                    <div class="favourite" onclick="event.preventDefault(); /* do favourite action */">
                        <i data-lucide="bookmark"></i>
                    </div>
                </div>
            </div>
        </a>`;
}
