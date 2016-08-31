import React, {Component} from "react";

import {MiscTextForm} from "./MiscTextForm";

class MiscText extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: "",
            supportJustification: ""
        };

        this.onTextChange = this.onTextChange.bind(this);
    }

    onTextChange(event) {
        let object = {};
        object[event.target.name] = event.target.value;
        this.setState(object);

        this.props.onMiscTextChange(this.state);
    }

    render() {
        return (
            <div>
                <MiscTextForm 
                    comments={this.state.comments}
                    supportJustification={this.state.supportJustification}
                    onTextChange={this.onTextChange} />
            </div>
        );
    }
}

export default MiscText;