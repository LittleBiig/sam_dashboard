import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Route, Switch} from 'react-router-dom';
import {Drawer } from 'react-md';
import { toTitle } from './utils/strings';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import NavItemLink from './containers/NavItemLink';
import RobotListItem from "./components/RobotsOverviewPage/RobotListItem";
import LoginForm from "./components/Login/LoginForm";
import RobotList from "./components/RobotsOverviewPage/RobotList";
import {Icon} from "antd";
import ToolbarWithBadge from "./containers/ToolbarWithBadge";
import ProjectsOverview from "./components/ProjectsOverviewPage/ProjectsOverview";
import {API_PREFIX} from "./constants/api";
import RobotListContainer from "./components/RobotsOverviewPage/RobotListContainer";



const unsplash = 'https://unsplash.it/100?image=';

const NOTIFICATIONS = [{
    id: 'fake-google-notification-1',
    image: `${unsplash}1027`,
    alt: 'A lady from unsplash.it',
    message: 'Emilia Kristensen shared an image with you.',
}, {
    id: 'fake-google-notification-2',
    image: `${unsplash}1025`,
    alt: 'A pug in a blanket',
    message: 'Scot Dixon did something amazing. Why don\'t you check it out?',
}, {
    id: 'fake-google-notification-3',
    image: `${unsplash}1011`,
    alt: 'A lady in a canoe',
    message: 'Candida Salomon went canoeing. Check out the pictures they uploaded!',
}, {
    id: 'fake-google-notification-4',
    image: `${unsplash}903`,
    alt: 'A pretty moon',
    message: 'You won\'t believe these 5 things about some random planet!',
}, {
    id: 'fake-google-notification-5',
    image: `${unsplash}883`,
    alt: 'A guy with clouds in the background',
    message: 'Clouds. Clouds. Clouds. I\'m out of dummy data ideas.',
}];

const navItems = [{
    label: 'Login',
    to: `${API_PREFIX}/login`,
    exact: true,
    icon: <Icon type="login" />,
},{
    label: 'Home',
    to: `${API_PREFIX}/home`,
    exact: true,
    icon: <Icon type="home" />,
},{
    label: 'My Robots',
    to: `${API_PREFIX}/robots`,
    exact: true,
    icon: <Icon type="robot" />,
}, {
    label: 'My Projects',
    to: `${API_PREFIX}/projects`,
    exact: false,
    icon: <Icon type="project" />,
},{
    label: 'My Robot Details',
    to: `${API_PREFIX}/robots/:id`,
    exact: true,
    icon: <Icon type="profile" />,
},];

class Root extends PureComponent {
    static propTypes = {
        location: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            visible: true,
            notifications: NOTIFICATIONS,
        };
    }

    componentDidMount() {
        // Need to set the renderNode since the drawer uses an overlay
        this.dialog = document.getElementById('drawer-routing-example-dialog');
    }

    getCurrentTitle = ({ location: { pathname } }) => {
        const lastSection = pathname.substring(pathname.lastIndexOf('/') + 1);
        if (lastSection === 'navigation-drawers') {
            return 'RobotListItem';
        }

        return toTitle(lastSection);
    };

    showDrawer = () => {
        this.setState({ visible: true });
    };

    hideDrawer = () => {
        this.setState({ visible: false });
    };

    handleVisibility = (visible) => {
        this.setState({ visible });
    };

    dismiss = (index) => {
        const notifications = this.state.notifications.slice();
        notifications.splice(index, 1);
        this.setState({ notifications });
    };

    render() {
        const { location } = this.props;
        const { visible } = this.state;

        const navItemsMapped = navItems.map(props => <NavItemLink {...props} key={props.to} />);
        console.log("navItemsMapped");
        console.log(navItemsMapped);
        navItemsMapped.splice(4,1);

        return (
            <div>
                <ToolbarWithBadge notifications={this.state.notifications} onDismiss={this.dismiss} />
                <CSSTransitionGroup
                    component="div"
                    transitionName="md-cross-fade"
                    transitionEnterTimeout={300}
                    transitionLeave={false}
                    className="md-toolbar-relative"
                >
                    <Switch key={location.pathname}>
                        <Route path={navItems[0].to} exact component={LoginForm} />
                        <Route path={navItems[1].to} component={LoginForm} />
                        <Route path={navItems[2].to} component={RobotListContainer} />
                        <Route path={navItems[3].to} component={ProjectsOverview} />
                    </Switch>
                </CSSTransitionGroup>
                <Drawer
                    type={Drawer.DrawerTypes.FULL_HEIGHT}
                    visible={visible}
                    onVisibilityChange={this.handleVisibility}
                    renderNode={this.dialog}
                    navItems={navItemsMapped}
                />
            </div>
        );
    }
}
export default withRouter(Root);

