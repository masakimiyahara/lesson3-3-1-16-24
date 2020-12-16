/* global $*/
$("input[name = 'search_input']").keyup(function(){
  let serchText = $(this).val();
  console.log("serchText")
  let target_1 = document.getElementsBy("image-text_1");
  if (target_1.indexOf(serchText)>= 0) {
        $(".image-content_1").removeClass("addhidden");
    } else {
        $(".image-content_1").addClass("addhidden");
    }
  let target_2 = document.getElementById(".image-text_2");
  if (target_2.indexOf(serchText)>= 0) {
        $(".image-content_2").removeClass("addhidden");
    } else {
        $(".image-content_2").addClass("addhidden");
    }
    let target_3 = document.getElementById(".image-text_3");
  if (target_3.indexOf(serchText)>= 0) {
        $(".image-content_3").removeClass("addhidden");
    } else {
        $(".image-content_3").addClass("addhidden");
    }
    let target_4 = document.getElementById(".image-text_4");
  if (target_4.indexOf(serchText)>= 0) {
        $(".image-content_4").removeClass("addhidden");
    } else {
        $(".image-content_4").addClass("addhidden");
    }
});