import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const IconMenuExampleSimple = () => (
  <div>
    <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <MenuItem primaryText="Option 1" />
      <MenuItem primaryText="Option 2" />
      <MenuItem primaryText="Option 3" />
      <MenuItem primaryText="Option 4" />
      <MenuItem primaryText="Option 5" />
    </IconMenu>
  </div>
);

export default IconMenuExampleSimple;