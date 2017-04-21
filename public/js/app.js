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

    //Img Input Default
 //    var $imgInput = $('#imgInput').val();
 //    console.log($imgInput);
 //    var defaultImg = ["http://d2q9kw5vp0we94.cloudfront.net/yarnlistthumb/5420108.jpg","http://i.ebayimg.com/00/s/ODAwWDgwMA==/z/FuAAAOSweW5VRTEH/$_58.JPG","http://d2q9kw5vp0we94.cloudfront.net/regular/5420140.jpg","http://d2q9kw5vp0we94.cloudfront.net/regular/5420179.jpg","http://d2q9kw5vp0we94.cloudfront.net/regular/5420162.jpg","http://www.planet-science.com/umbraco/ImageGen.ashx?image=/media/101174/rocket_91785903.jpg&width=600&constrain=true"];
 //
 // if(!$imgInput){
 // console.log("yo");
 //    $imgInput = defaultImg[Math.floor(Math.random()*6-1) + 1];
 //    console.log($imgInput);
 //    return $imgInput;
 // };

console.log("the jquery will go in here...");

});
