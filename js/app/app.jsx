/**
 * @jsx React.DOM
 */

$(document).ready(function() {
	// once the DOM has loaded, React can start writing in components
	React.renderComponent(
		<ApplicationComponent url="data/portfolio.json" />,
		document.getElementById('content')
	);

	// if the page hasn't loaded in 300ms, display the spinner
	setTimeout(function() {
		if ($(".loadingPage").length > 0) {
			$(".loadingPage").removeClass("hidden");
		}
	}, 300);
});