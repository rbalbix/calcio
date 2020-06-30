import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Tooltip, Zoom } from '@material-ui/core';

const Custom = withStyles({
  tooltip: {
    fontSize: '1.3rem',
  },
})(Tooltip);

export const CustomTooltip = ({ children, title }) => {
  return (
    <Custom title={title} TransitionComponent={Zoom} placement="top" arrow>
      {children}
    </Custom>
  );
};
