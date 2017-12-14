<script type="text/javascript">
	$(document).ready(function() {
			$(document).on("click", "#add_comment", function () {
					var form = $("form[name='form']");
					form.css("display", "block");
					$("#add_comment").replaceWith(form);
			});

			$(document).on("click", "input[name='send']", function () {
				var comment = $("textarea[name='comment']").val();
				alert("Подождите идётзагрузка комментариев...");
				$("<p>" + comment + "</p>").appendTo("#comments");
			});
	});
</script>