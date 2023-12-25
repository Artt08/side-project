document.getElementById('toggle-btn').addEventListener('click', function () {
  var sidebar = document.getElementById('sidebar');
  var content = document.getElementById('content');
  if (sidebar.style.left === '0px') {
    sidebar.style.left = '-200px';
    content.style.marginLeft = '0';
    this.innerHTML = '≡';
  } else {
    sidebar.style.left = '0px';
    content.style.marginLeft = '200px';
    this.innerHTML = '≡';
  }
});
