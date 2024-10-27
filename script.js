// JavaScriptコード
const toggleButton = document.getElementById('toggle-sidebar');
const sidebar = document.getElementById('sidebar');
const container = document.getElementById('container');

// ハンバーガーメニューをクリックしたときの処理
toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('hidden'); // サイドバーの表示/非表示を切り替え
});

// サイドバー以外の部分をクリックしたときの処理
container.addEventListener('click', (event) => {
    if (sidebar.classList.contains('hidden') === false && !sidebar.contains(event.target) && event.target !== toggleButton) {
        sidebar.classList.add('hidden'); // サイドバーを閉じる
    }
});
