/**
 * @jsx React.DOM
 */

var HeaderDescription = React.createClass({
	componentDidMount: function() {
		
	},
	render: function() {

		var extension = ".png";
		if (window.devicePixelRatio >= 1.5) {
			extension = "@2x.png";
		}

		var imageList = this.props.images.map(function(item, index) {
			return (
				<img id={"img" + index} key={index} src={"img/header/" + item + extension} />
			);
		});

		return (
			<div className="headerDescriptionWrap">
				<div className="headerIcons">
					
					<div className="iconWrap" ref="slider">
						{imageList}
					</div>
				
				</div>
				<div className="headerContent">
					{this.props.data}
				</div>
			</div>
		);
	}
});

var HeaderComponent = React.createClass({
	render: function() {
		return (
			<div className="headerWrap">
				<div className="headerTitle">
					{this.props.data.title}
				</div>
				<div className="headerSubtitle">
					{this.props.data.subtitle}
				</div>

				<HeaderDescription data={this.props.data.description} images={this.props.data.images} />
			</div>
		);
	}

});