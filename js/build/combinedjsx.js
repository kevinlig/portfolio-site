/**
 * @jsx React.DOM
 */

var HeaderDescription = React.createClass({displayName: 'HeaderDescription',
	componentDidMount: function() {
		
	},
	render: function() {

		var extension = ".png";
		if (window.devicePixelRatio >= 1.5) {
			extension = "@2x.png";
		}

		var imageList = this.props.images.map(function(item, index) {
			return (
				React.DOM.img( {id:"img" + index, src:"img/header/" + item + extension} )
			);
		});

		return (
			React.DOM.div( {className:"headerDescriptionWrap"}, 
				React.DOM.div( {className:"headerIcons"}, 
					
					React.DOM.div( {className:"iconWrap", ref:"slider"}, 
						imageList
					)
				
				),
				React.DOM.div( {className:"headerContent"}, 
					this.props.data
				)
			)
		);
	}
});

var HeaderComponent = React.createClass({displayName: 'HeaderComponent',
	render: function() {
		return (
			React.DOM.div( {className:"headerWrap"}, 
				React.DOM.div( {className:"headerTitle"}, 
					this.props.data.title
				),
				React.DOM.div( {className:"headerSubtitle"}, 
					this.props.data.subtitle
				),

				HeaderDescription( {data:this.props.data.description, images:this.props.data.images} )
			)
		);
	}

});
/**
 * @jsx React.DOM
 */

var PortfolioFeature = React.createClass({displayName: 'PortfolioFeature',
	render: function() {
		return (
			React.DOM.div(null )
		);
	}
});

var PortfolioImage = React.createClass({displayName: 'PortfolioImage',
	render: function() {
		var extension = ".png";
		if (window.devicePixelRatio > 1) {
			extension = "@2x.png";
		}

		return (
			React.DOM.img( {className:"screenshot", src:"img/projects/" + this.props.image.src + extension, alt:this.props.image.alt} )
		);
	}
})

var PortfolioImageSlider = React.createClass({displayName: 'PortfolioImageSlider',
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
				React.DOM.li(null, 
					React.DOM.img( {src:"img/projects/" + imageItem.src + extension, alt:imageItem.alt, key:index} )
				)
			);
		});

		return (
			React.DOM.div( {className:"portfolioSlider"}, 
				React.DOM.ul( {className:"bxslider", ref:"slider"}, 
					imageList
				)
			)
		);
	}
});


var TechnologyItem = React.createClass({displayName: 'TechnologyItem',
	render: function() {
		return (
			React.DOM.li( {className:"techItem " + this.props.data.icon}, 
				this.props.data.text
			)
		);
	}
});

var TechnologyList = React.createClass({displayName: 'TechnologyList',
	render: function() {
		var techList = [];
		for (var i = 0; i < this.props.data.length; i++) {
			var listItem = TechnologyItem( {data:this.props.data[i]} );
			techList.push(listItem);
		}

		return (
			React.DOM.ul( {className:"techList"}, 
				techList
			)
		);
	}
});

var LinkItem = React.createClass({displayName: 'LinkItem',
	render: function() {

		var itemText = React.DOM.span(null, this.props.data.title);
		if (this.props.data.link != undefined) {
			itemText = React.DOM.a( {href:this.props.data.link}, this.props.data.title);
		}

		return (
			React.DOM.li( {className:"linkItem " + this.props.data.icon}, 
				itemText
			)
		);
	}
});

var LinkList = React.createClass({displayName: 'LinkList',
	render: function() {
		var linkList = [];
		for (var i = 0; i < this.props.data.length; i++) {
			var listItem = LinkItem( {data:this.props.data[i]} );
			linkList.push(listItem);
		}

		return (
			React.DOM.ul( {className:"linkList"}, 
				linkList
			)
		);
	}
});

var PortfolioEntry = React.createClass({displayName: 'PortfolioEntry',
	render: function() {
		var className = "entryItem";
		if (this.props.key == 0) {
			className += " firstItem";
		}

		var topSeparator;
		if (this.props.key > 0) {
			topSeparator = React.DOM.hr( {className:"entrySeparator"} );
		}

		var portfolioImage;
		if (this.props.data.images.length > 1) {
			portfolioImage = PortfolioImageSlider( {imageList:this.props.data.images} );
		}
		else {
			portfolioImage = PortfolioImage( {image:this.props.data.images[0]} );
		}
		
		return (
			React.DOM.div( {className:className}, 
				topSeparator,

				React.DOM.div( {className:"projectTitle"}, 
					this.props.data.title
				),
				React.DOM.div( {className:"portfolio2Col"}, 
					React.DOM.div( {className:"portfolioLeft"}, 
						portfolioImage
					),
					React.DOM.div( {className:"portfolioRight"}, 
						React.DOM.div( {className:"portfolioDescription", dangerouslySetInnerHTML:{__html: this.props.data.description}} ),
						TechnologyList( {data:this.props.data.techList} ),
						React.DOM.hr( {className:"listSeparator"} ),
						LinkList( {data:this.props.data.linkList} )
					)
				)
			)
		);
	}
});

var BodyComponent = React.createClass({displayName: 'BodyComponent',
	render: function() {

		var portfolioEntries = this.props.entries.map(function(item, index) {
			return (
				PortfolioEntry( {key:index, data:item} )
			);
		});

		return (
			React.DOM.div( {className:"portfolioBody"}, 
				portfolioEntries
			)
		);
	}
});

var FooterComponent = React.createClass({displayName: 'FooterComponent',
	render: function() {
		return (
			React.DOM.div( {className:"footer"}, 
				String.fromCharCode(169) + " 2014 Kevin Li"
			)
		);
	}
});
/**
 * @jsx React.DOM
 */

var ApplicationError = React.createClass({displayName: 'ApplicationError',
	render: function() {
		return (
			React.DOM.div( {className:"errorPage"}, 
				React.DOM.div( {className:"errorWrap"}, 
					React.DOM.div( {className:"errorContents"}, 
						React.DOM.div( {className:"errorLeft"} ),
						React.DOM.div( {className:"errorRight"}, 
							React.DOM.div( {className:"errorTitle"}, 
								"Something Went Wrong"
							),
							React.DOM.div( {className:"errorDescription"}, 
								"An error occurred while preparing this page. Refresh and try again."
							)
						)
					)
				)
			)
		);
	}
});

var ApplicationComponent = React.createClass({displayName: 'ApplicationComponent',
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
			ApplicationError(null ),
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
			React.DOM.div( {className:"applicationWrap"}, 
				HeaderComponent( {data:this.state.headerData} ),

				BodyComponent( {entries:this.state.portfolioEntries} ),

				FooterComponent(null )
			)
		);
	}
});
/**
 * @jsx React.DOM
 */

$(document).ready(function() {
	// once the DOM has loaded, React can start writing in components
	React.renderComponent(
		ApplicationComponent( {url:"data/portfolio.json"} ),
		document.getElementById('content')
	);

	// if the page hasn't loaded in 300ms, display the spinner
	setTimeout(function() {
		if ($(".loadingPage").length > 0) {
			$(".loadingPage").removeClass("hidden");
		}
	}, 300);
});