const toggleButton = document.getElementById('toggle-sidebar');
const sidebar = document.getElementById('sidebar');
const container = document.getElementById('container');

// ハンバーガーメニューをクリックしたときの処理
toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('active'); // サ
