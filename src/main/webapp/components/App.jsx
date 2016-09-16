import React, {Component, PropTypes} from "react";

class App extends Component {
    render() {
        return (
            <div>
                {this.props.children}
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
}

export default App;