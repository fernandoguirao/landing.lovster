$('.carousel').carousel({
  interval: 4300
})

var hsize = $(window).height();
$('#first-block').css({'min-height':hsize+150});

// GET email

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var getemail = getParameterByName('register');

if (getemail == 'success'){
	$('#modalSuccess').modal('toggle');
  Pace.stop();
  $('body').addClass('pace-done');
  $('body').removeClass('pace-running');
}

if (getemail == 'fail'){
	$('#modalFail').modal('toggle');
  Pace.stop();
  $('body').addClass('pace-done');
  $('body').removeClass('pace-running');
}

