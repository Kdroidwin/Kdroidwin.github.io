document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('toggle-sidebar');
  const sidebar = document.getElementById('sidebar');

  toggleBtn.addEventListener('click', function () {
    sidebar.classList.toggle('closed');
  });
});
