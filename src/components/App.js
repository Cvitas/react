import React,{ Component } from "react";
import { connect } from 'react-redux'
class App extends Component{
	render(){
		let childs = React.Children.toArray(this.props.children);
		return(
			<div className="app-container">
				<div className="wrapper">
                    { childs }
				</div>
			</div>
		)
	}
}

export default connect()(App)

