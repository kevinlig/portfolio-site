/**
 * @jsx React.DOM
 */

var PortfolioFeature = React.createClass({
	render: function() {
		return (
			<div />
		);
	}
});

var PortfolioImage = React.createClass({
	render: function() {
		var extension = ".png";
		if (window.devicePixelRatio > 1) {
			extension = "@2x.png";
		}

		return (
			<img className="screenshot" src={"/img/projects/" + this.props.image.src + extension} alt={this.props.image.alt} />
		);
	}
})

var PortfolioImageSlider = React.createClass({
	componentDidMount: function() {
		// start the slider
	    $(this.refs.slider.getDOMNode()).bxSlider({
			infiniteLoop: true,
			auto: true
		});
	},
	render: function() {

		var imageList = this.props.imageList.map(function(imageItem, index) {

			var extension = ".png";
			if (window.devicePixelRatio > 1) {
				extension = "@2x.png";
			}

			return (
				<li>
					<img src={"/img/projects/" + imageItem.src + extension} alt={imageItem.alt} key={index} />
				</li>
			);
		});

		return (
			<div className="portfolioSlider">
				<ul className="bxslider" ref="slider">
					{imageList}
				</ul>
			</div>
		);
	}
});


var TechnologyItem = React.createClass({
	render: function() {
		return (
			<li className={"techItem " + this.props.data.icon}>
				{this.props.data.text}
			</li>
		);
	}
});

var TechnologyList = React.createClass({
	render: function() {
		var techList = [];
		for (var i = 0; i < this.props.data.length; i++) {
			var listItem = <TechnologyItem data={this.props.data[i]} />;
			techList.push(listItem);
		}

		return (
			<ul className="techList">
				{techList}
			</ul>
		);
	}
});

var LinkItem = React.createClass({
	render: function() {

		var itemText = <span>{this.props.data.title}</span>;
		if (this.props.data.link != undefined) {
			itemText = <a href={this.props.data.link}>{this.props.data.title}</a>;
		}

		return (
			<li className={"linkItem " + this.props.data.icon}>
				{itemText}
			</li>
		);
	}
});

var LinkList = React.createClass({
	render: function() {
		var linkList = [];
		for (var i = 0; i < this.props.data.length; i++) {
			var listItem = <LinkItem data={this.props.data[i]} />;
			linkList.push(listItem);
		}

		return (
			<ul className="linkList">
				{linkList}
			</ul>
		);
	}
});

var PortfolioEntry = React.createClass({
	render: function() {
		var className = "entryItem";
		if (this.props.key == 0) {
			className += " firstItem";
		}

		var topSeparator;
		if (this.props.key > 0) {
			topSeparator = <hr className="entrySeparator" />;
		}

		var portfolioImage;
		if (this.props.data.images.length > 1) {
			portfolioImage = <PortfolioImageSlider imageList={this.props.data.images} />;
		}
		else {
			portfolioImage = <PortfolioImage image={this.props.data.images[0]} />;
		}
		
		return (
			<div className={className}>
				{topSeparator}

				<div className="projectTitle">
					{this.props.data.title}
				</div>
				<div className="portfolio2Col">
					<div className="portfolioLeft">
						{portfolioImage}
					</div>
					<div className="portfolioRight">
						<div className="portfolioDescription" dangerouslySetInnerHTML={{__html: this.props.data.description}} />
						<TechnologyList data={this.props.data.techList} />
						<hr className="listSeparator" />
						<LinkList data={this.props.data.linkList} />
					</div>
				</div>
			</div>
		);
	}
});

var BodyComponent = React.createClass({
	render: function() {

		var portfolioEntries = this.props.entries.map(function(item, index) {
			return (
				<PortfolioEntry key={index} data={item} />
			);
		});

		return (
			<div className="portfolioBody">
				{portfolioEntries}
			</div>
		);
	}
});

var FooterComponent = React.createClass({
	render: function() {
		return (
			<div className="footer">
				{String.fromCharCode(169) + " 2014 Kevin Li"}
			</div>
		);
	}
});