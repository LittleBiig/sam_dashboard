import React, {Component} from 'react';
import {Col, PageHeader, Row} from "antd";
import {API_PREFIX} from "../../constants/api";
import ProjectDetailHeader from "./ProjectDetailHeader";
import ProjectDetailContent from "./ProjectDetailContent";

class ProjectDetailContainer extends Component {
    routeChange = () => {
        let path = `${API_PREFIX}/projects`;
        this.props.history.push(path);
    };

    render() {
        return (
            <Row>
                <Col
                    xs={{ span: 20, offset: 2 }}
                    sm={{ span: 20, offset: 2 }}
                    md={{ span: 20, offset: 2 }}
                    lg={{ span: 20, offset: 2 }}
                    xl={{ span: 18, offset: 4 }}
                >
                    <PageHeader
                        onBack={this.routeChange}
                        title={this.props.match.params.id}
                        subTitle="A very cool apartment"
                    />
                    <ProjectDetailHeader {...this.props} _id={this.props.match.params.id}/>
                    <ProjectDetailContent/>
                </Col>
            </Row>
        );
    }
}

export default ProjectDetailContainer;