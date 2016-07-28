import $ from 'jquery'

$(function() {
  const pathname = window.location.pathname;

  const basePath = pathname.split('_')[0];

  console.log(basePath);

  $('#navigation').find('a[href="'+basePath+'"]').addClass('active-link');

  $('.sub-nav').find('a[href="'+pathname+'"]').addClass('active-sub-link');

});