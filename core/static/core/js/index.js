$(document).ready(function(){
  $('.sidenav').sidenav();
});

if (screen.width > 800){
  heightFull = screen.height;
  height = heightFull - 120;
  banner = document.querySelector('#banner');
  banner.style.height = height + 'px';
}else{
  heightFull = screen.height;
  height = heightFull;
  banner = document.querySelector('#banner');
  banner.style.height = height + 'px';
}
