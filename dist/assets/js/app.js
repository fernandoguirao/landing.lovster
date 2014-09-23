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

var getemail = getParameterByName('email');

if (getemail == 'success'){
	$('#modalSuccess').modal('toggle')
}

if (getemail == 'fail'){
	// Open modal
}

