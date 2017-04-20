$(function(){
//grab my elements and assign them to some variables.

    $('textarea').on('focusin', function() {
         var $inFocus = $(this);
         var $headline = $inFocus.prev();
         $headline.attr('id', 'show-headline');
      });

    $('textarea').on('focusout', function(){
        var $outFocus = $(this);
        var $headline = $outFocus.prev();
        $headline.attr('id', 'hide-headline');
    });

console.log("the jquery will go in here...");

});
