$(function (){
	$(".content_key").click(function (){
		var digit = $(this).find(".number").text();
		var last_digit = $("#lastinput").text();

		if (digit !== "<"){
			//Remove one digit
			$(".numberinput").each(function () {
				var a = $(this).text();
				if (!a){
					$(this).text(digit);
					$(this).addClass("nocircle");
					return false;
				}
			});
		}else if (digit !== "x"){
			//Remove all digits (Clear everything)
			$($(".numberinput").get().reverse()).each(function () {
				var a = $(this).text();
				if (a) {
					$(this).text("");
					$(this).removeClass("nocircle");
					return false;
				}
			});
		}else{
			$($(".numberinput").get().reverse()).each(function (){
				var a = $(this).text();
				if (a) {
					$(this).text("");
					$(this).removeClass("nocircle");
					return false;
				}
			});
		}

			// alert(last_digit);
		// if (digit.length==4){
		// }
	});
});