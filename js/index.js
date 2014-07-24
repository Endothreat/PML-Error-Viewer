$(document).ready(function() {
	$.ajax({
		url: "http://pmpc1310.npm.ac.uk/service/error",
		type: "GET",
		success: function(data) {
			$( "#error_message" ).toggleClass( "error_message" , false);
			add_row(data);
			$('table').dataTable({
				paginate: false,
				scrollY: 100000
			});
		},
		error: function(data, errorThrown, errorMessage) {
			// put error handling here
			console.log(data, errorThrown, errorMessage);
			add_error(errorThrown);
		}

	});

});

function add_error(errorMessage){
	$( "#error_message" ).toggleClass( "error_message" );
	$("#error_message").text(errorMessage);
}

function add_row(data) {
	var keys = Object.keys(data.output.errors);
	for (var i = 0; i < keys.length; i++) {
		var d = data.output.errors[keys[i]];
		var row = "<tr>";
		row += "<td>" + d.date_time + "</td>";
		row += "<td>" + d.user_id + "</td>";
		row += "<td>" + d.error_code + "</td>";
		row += "<td>" + d.details + "</td>";
		row += "<td>" + d.state_id + "</td>";
		row += "<td>" + d.ip_address + "</td>";
		row += "<td>" + d.id + "</td>";
		$('table').append(row);
	}
};