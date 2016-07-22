import $ from 'jquery'
import {createHistory} from 'history'

const history = createHistory();
  console.log(history);

$(function() {

  $('#navigation').find('a[href="'+window.location.pathname+'"]').addClass('active-link');
  history.listen(location => {
    console.log(location);
    $('#navigation').find(`a[href="${location.pathname}"]`).addClass('active-link');
  });

});