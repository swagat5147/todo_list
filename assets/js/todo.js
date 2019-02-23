//select and ddeselect the todos
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//delete todos
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	e.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which==13){
		var todoText = $(this).val();
		//take user input
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>")
	};
});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});