/** @param {int} target jump id offset */
function jump(target) {
  $('#menuOnOff').prop('checked', false);
  let speed = 400;
  $('body, html').animate({
      scrollTop: target,
    },
    speed, 'swing');
};
$('.js-feature').on('click', () => {
  let targetPoint = $('#feature').offset().top;
  jump(targetPoint);
});
$('.js-popular').on('click', () => {
  let targetPoint = $('#popular').offset().top;
  jump(targetPoint);
});
$('.js-media').on('click', () => {
  let targetPoint = $('#media').offset().top;
  jump(targetPoint);
});
$('.overlay').on('click', () => {
  $('#menuOnOff').prop('checked', false);
});
