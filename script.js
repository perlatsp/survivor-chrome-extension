// Survivor dictionary.
var spoilers = ['survivor', 'τσανκ', 'κινέζος', 'Ορέστης', 'αγώνισμα', 'Ορέστης', 'Σάρα', 'Τσανγκ', 'Μισθοφόρος',
'Λάουρα', 'Σπαλιάρας', 'Σπαλ', 'Χρανιώλα', 'Χρανιώτης', 'ΜΠΟ ', 'Ασυλία', 'Κολιδά', 'Μαχητές',
'Αγγελόπουλος', 'Βαλαβάνη', 'orestis', 'Ελισάβετ', 'ΒΑΛΑΒΑΝΗ'];

if(localStorage['spoilers']){
  // alert("yes");
}
/* const spoilers =localStorage['spoilers'].split(',');
 console.log('Spoilers Are: '+ spoilers);
*/


// Generate regex string.
const spoilersRegex = new RegExp(spoilers.join('|'), 'i');

// On document ready start looking for survivor.
$(document).ready(function () {
  killSurvivor();
  $(".delete").on('click',function () {
    $(this).parent().parent().parent().parent().remove(); //better solution ?
  });
  $(document).scroll(function () {
    setTimeout((function () {
      killSurvivor()
    }), 150);
  });
});

/**
 * Finds and terminates posts that contain survivor thinks.
 */
killSurvivor = function () {

  $(".delete").on('click',function () {
    $(this).parent().parent().parent().parent().remove(); //better solution ?
  });
  const newElements = $('.userContent');
  if (newElements.length === 0) {
    return;
  }
  newElements.each(function (index,value) {
    if (this.textContent.match(spoilersRegex) !== null) {
      var user = $(this).closest('.userContentWrapper').find('h5 a'); //users name
      $(this).closest('.userContentWrapper').replaceWith('<h1 class="userContentWrapper" style="padding: 3px;border:1px solid #F00;">' +
        '<a href="'+ user[0].href + '">'+ user[0].innerText + '</a> Posted something about Survivor<br>Why are you friends with this looser?</h1>' +
        '<hr>' +
        '<button class="delete" style="position:relative;left: 40%;">Delete This</button>');
    }
  });
};
