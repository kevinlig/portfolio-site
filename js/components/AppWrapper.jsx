/**
 * @jsx React.DOM
 */

var ApplicationError = React.createClass({
	render: function() {
		return (
			<div className="errorPage">
				<div className="errorWrap">
					<div className="errorContents">
						<div className="errorLeft" />
						<div className="errorRight">
							<div className="errorTitle">
								Something Went Wrong
							</div>
							<div className="errorDescription">
								An error occurred while preparing this page. Refresh and try again.
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

var ApplicationComponent = React.createClass({
	getInitialState: function() {
		return {
			headerData: {
				title: "Kevin Li",
				subtitle: "Portfolio",
				description: "",
				images: []
			},
			portfolioEntries: []
		}
	},
	loadingError: function() {
		React.renderComponent(
			<ApplicationError />,
			document.getElementById('content')
		);
	},
	componentWillMount: function() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			success: function(data) {
				this.setState({
					headerData: data.header,
					portfolioEntries: data.portfolio
				});
			}.bind(this),
			error: function() {
				this.loadingError();
			}.bind(this)
		});
	},
	render: function() {
		return (
			<div className="applicationWrap">
				<HeaderComponent data={this.state.headerData} />

				<BodyComponent entries={this.state.portfolioEntries} />

				<FooterComponent />
			</div>
		);
	}
});