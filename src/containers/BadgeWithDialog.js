/* BadgeWithDialog.jsx */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Badge, Button } from 'react-md';

import NotificationDialog from './NotificationDialog';

export default class BadgeWithDialog extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
        onDismiss: PropTypes.func.isRequired,
        notifications: PropTypes.array.isRequired,
    };

    state = { visible: false };

    componentDidMount() {
        this.badge = document.getElementById('notification-badge-toggle');
    }

    componentDidUpdate(prevProps, prevState) {
        const { visible } = this.state;
        if (visible === prevState.visible) {
            return;
        }

        window[`${visible ? 'add' : 'remove'}EventListener`]('click', this.handleOutsideClick);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.handleOutsideClick);
    }

    toggleDialog = () => {
        this.setState({ visible: !this.state.visible });
    };

    handleOutsideClick = (e) => {
        if (!this.badge || !this.badge.contains(e.target)) {
            this.setState({ visible: false });
        }
    };

    render() {
        const { visible } = this.state;
        const { notifications, className, onDismiss } = this.props;
        return (
            <>
                </>
        );
    }
}