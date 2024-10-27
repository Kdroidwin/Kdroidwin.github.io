// script.js
document.addEventListener('DOMContentLoaded', function() {
    const toggleSidebarButton = document.getElementById('toggle-sidebar');
    const sidebar = document.getElementById('sidebar');
    const toggleNestedLinks = document.querySelectorAll('.toggle-nested');

    // サイドバーの表示/非表示を切り替える
    toggleSidebarButton.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
    });

    // ネストされたリストの表示/非表示を切り替える
    toggleNestedLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // デフォルトのリンク動作を防ぐ
            const nestedList = this.nextElementSibling;
            nestedList.style.display = nestedList.style.display === 'block' ? 'none' : 'block';
        });
    });
});
