$(function(){
//grab my elements and assign them to some variables.

    $('textarea').on('focusin', function() {
         var $inFocus = $(this);
         var $headline = $inFocus.prev();
         console.log($headline);
         $headline.attr('id', 'show-headline');
      });

    $('textarea').on('focusout', function(){
        var $outFocus = $(this);
        var $headline = $outFocus.prev();
        console.log($headline);
        $headline.attr('id', 'hide-headline');
    });

console.log("the jquery will go in here...");

});
