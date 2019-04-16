import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { NavigationDrawer } from 'react-md';
import { toTitle } from './utils/strings';

import NavItemLink from './NavItemLink';
import RobotsRobot from "./components/RobotsOverviewPage/RobotsRobot";
import LoginForm from "./components/Login/LoginForm";
import RobotsOverview from "./components/RobotsOverviewPage/RobotsOverview";

const TO_PREFIX = '/api';

const navItems = [{
    label: 'Login',
    to: `${TO_PREFIX}/login`,
    exact: true,
    icon: 'Login icon',
},{
    label: 'Home',
    to: `${TO_PREFIX}/home`,
    exact: true,
    icon: 'Home icon',
},{
    label: 'My Robots',
    to: `${TO_PREFIX}/myrobots`,
    exact: true,
    icon: 'My Robots icon',
}, {
    label: 'My Projects',
    to: `${TO_PREFIX}/myprojects`,
    icon: 'My Projects icon',
},];

const styles = {
    content: { minHeight: 'auto' },
};

class Root extends PureComponent {
    static propTypes = {
        location: PropTypes.object.isRequired,
    };

    constructor(props) {
        super();

        this.state = { toolbarTitle: this.getCurrentTitle(props) };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ toolbarTitle: this.getCurrentTitle(nextProps) });
    }

    getCurrentTitle = ({ location: { pathname } }) => {
        const lastSection = pathname.substring(pathname.lastIndexOf('/') + 1);
        if (lastSection === 'navigation-drawers') {
            return 'RobotsRobot';
        }

        return toTitle(lastSection);
    };

    render() {
        const { toolbarTitle } = this.state;
        const { location } = this.props;
        return (
            <NavigationDrawer
                toolbarTitle={toolbarTitle}
                mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
                tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
                desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
                navItems={navItems.map(props => <NavItemLink {...props} key={props.to} />)}
                contentId="main-demo-content"
                contentStyle={styles.content}
                contentClassName="md-grid"
            >
                <Switch key={location.pathname}>
                    <Route path={navItems[0].to} exact component={LoginForm} />
                    <Route path={navItems[1].to} component={LoginForm} />
                    <Route path={navItems[2].to} component={RobotsOverview} />
                    <Route path={navItems[3].to} component={RobotsOverview} />
                </Switch>
            </NavigationDrawer>
        );
    }
}
export default withRouter(Root);