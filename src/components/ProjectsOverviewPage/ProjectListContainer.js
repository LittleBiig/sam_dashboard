import React, {Component} from 'react';
import { Route, Switch } from "react-router";
import { API_PREFIX } from "../../constants/api";
import { Row } from "antd";
import ProjectList from "./ProjectList";
import ProjectDetailContainer from "../ProjectDetailPage/ProjectDetailContainer";

class ProjectListContainer extends Component {
    render() {
        return (
            <Row>
                <Switch>
                    <Route exact={true} path={`${API_PREFIX}/projects`} component={ProjectList} />
                    <Route path={`${API_PREFIX}/projects/:id`} component={ProjectDetailContainer} />
                </Switch>
            </Row>
        );
    }
}

export default ProjectListContainer;