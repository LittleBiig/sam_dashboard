/* ToolbarWithBadge.jsx */
import React from 'react';
import { Toolbar } from 'react-md';

import BadgeWithDialog from './BadgeWithDialog';

const ToolbarWithBadge = ({ nav, notifications, onDismiss }) => (
    <Toolbar
        colored
        nav={nav}
        title="SAM"
        actions={
            <BadgeWithDialog notifications={notifications} onDismiss={onDismiss} />
        }
    />
);

export default ToolbarWithBadge;