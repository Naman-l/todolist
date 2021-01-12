//check specific todos by clcicking
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");

	//if($(this).css("color")==="rgb (128,128,128)")
	//{
	//	$(this).css("color","black");
	//}
	//else{
	//$(this).css({
	//	color:"gray";
	//	textDecoration:"line-through";

});

//click on x to delete todo

$('ul').on("click","span",function(event)
	{

	$(this).parent().fadeOut(500,function()
		{
			$(this).remove();
		});
	event.stopPropogation();
	});


//taking input
$("input[type='text']").keypress(function(event){
	if(event.which===13){
		var todotxt= $(this).val();
		$(this).val("");
		//creare a new li and add to ul
		$('ul').append("<li><span> <i class='fa fa-trash'></i></span>"+todotxt+"</li>");



	}

});


$("#toggleform").on("click",function(){
	$("input [type='text']").fadeToggle();
});