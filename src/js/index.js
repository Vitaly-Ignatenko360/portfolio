
document.getElementById('menu__mobill').onclick = function() {
  document.getElementById('menu__content').classList.add('menu__content_active')
}
document.getElementById('menu__mobill_cancel').onclick = function() {
  document.getElementById('menu__content').classList.remove('menu__content_active')
}
