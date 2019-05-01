import React, {Component} from 'react';

class ProjectDetailContainer extends Component {
    render() {
        return (
            <div>
                hello i'm the detail container
                {this.props.match.params.id}
            </div>
        );
    }
}

export default ProjectDetailContainer;