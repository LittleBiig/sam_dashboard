import React, {Component} from 'react';
import {PageHeader} from "antd";
import {API_PREFIX} from "../../constants/api";

class ProjectDetailContainer extends Component {
    routeChange = () => {
        let path = `${API_PREFIX}/projects`;
        this.props.history.push(path);
    };

    render() {
        return (
            <div>
                <PageHeader
                    onBack={this.routeChange}
                    title={this.props.match.params.id}
                    subTitle="A very cool apartment"
                />
            CONTENT
            </div>
        );
    }
}

export default ProjectDetailContainer;