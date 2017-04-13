/*	------ Disable Input type number + / - --------
	Disable Input + atau -
	Karena type input number bisa termasuk + atau -
	Oleh karena itu apabila requirementnya phone number / tinggi badan / berat badan
	tidak mungkin input + atau - jadi didisable
*/
$("#form_berat").on("keydown", function(e) {
    var key = e.which;
    if ( key == 69 || key == 189 || key == 187) {
        e.preventDefault();
    }
});


/*	------ Max length Input Type Number --------
	Apabila input type number tidak dapat menggunakan maxlength
	dapat menggunakan function dibawah
 */
function enforce_maxlength(event) {
  var t = event.target;
  if (t.hasAttribute('maxlength')) {
    t.value = t.value.slice(0, t.getAttribute('maxlength'));
  }
}

document.body.addEventListener('input', enforce_maxlength);

/*
	Check Size Input File
*/
function validationSize(element){
 $(element).bind('change', function() {
     var sizeFile = Math.ceil(this.files[0].size/1024/1024);
     if(sizeFile > 10){
       reset($(element));
       alert("Mohon Maaf Ukuran File Maksimal : 10MB");
     }
 });
}

