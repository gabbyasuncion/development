import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ThumbsUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            thumbs: 0
        };
    }

    addThumb = () => {
        this.setState({
            thumbs:this.state.thumbs+1
        });
    }

    render() {
		return (
		<div>
			<button onClick={this.addThumb}>
				Likes: {this.state.thumbs}
			</button>
		</div>
		);
	}
}

export default ThumbsUp;
