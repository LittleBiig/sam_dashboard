import React, {Component} from 'react';
import {Route, Switch} from "react-router";
import {API_PREFIX} from "../../constants/api";
import {Row} from "antd";
import RobotList from "./RobotList";
import RobotDetailContainer from "../RobotDetailPage/RobotDetailContainer";

class RobotListContainer extends Component {
    render() {
        return (
            <Row>
                <Switch>
                    <Route exact={true} path={`${API_PREFIX}/robots`} component={RobotList} />
                    <Route path={`${API_PREFIX}/robots/:id`} component={RobotDetailContainer} />
                </Switch>
            </Row>
        );
    }
}

export default RobotListContainer;