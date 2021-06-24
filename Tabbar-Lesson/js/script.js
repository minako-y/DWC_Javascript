$('#tab-contents .tab[id!= "tab1"]').hide();

$('#tab-menu a').on('click',function(event){
  $("#tab-contents .tab").hide();
  $("#tab-menu .active").removeClass("active");
  $(this).addClass("active");
  $($(this).attr("href")).show();
  event.preventDefault();
});

/*
$('#tab-menu a').on('click',function(event){
  $("#tab-contents .tab").hide();
  $("#tab-menu a").removeAttr("class","active");
  $(this).attr("class","active");
  $($(this).attr("href")).show();
  event.preventDefault();
});
*/
