/* global $*/
$("input[name = 'search_input']").keyup(function(){
  let serchText = $(this).val();
  console.log("serchText")
   let target_1 = $(".image-text_1").text();
  if (target_1.indexOf(serchText) >= 0) {
        $(".image-content_1").removeClass("hidden");
    } else {
        $(".image-content_1").addClass("hidden");
    }
  let target_2 = $(".image-text_2").text();
  if (target_2.indexOf(serchText)>= 0) {
        $(".image-content_2").removeClass("hidden");
    } else {
        $(".image-content_2").addClass("hidden");
    }
    let target_3 = $(".image-text_3").text();
  if (target_3.indexOf(serchText)>= 0) {
        $(".image-content_3").removeClass("hidden");
    } else {
        $(".image-content_3").addClass("hidden");
    }
    let target_4 = $(".image-text_4").text();
  if (target_4.indexOf(serchText)>= 0) {
        $(".image-content_4").removeClass("hidden");
    } else {
        $(".image-content_4").addClass("hidden");
    }
});