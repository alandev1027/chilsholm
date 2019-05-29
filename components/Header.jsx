import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import {headerTheme} from '../styles/styles'
const menuTitles = ["Sell", "Buy me", "Lease", "Rent me"];

class Header extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        {menuTitles.map(menuTitle => (
          <MenuItem onClick={this.handleMenuClose}>
            <Typography key={menuTitle} className={classes.menuButton}>
              {menuTitle}<span style={{ color: "#ff8124" }}>.</span>
            </Typography>
          </MenuItem>
        ))}
        <MenuItem onClick={this.handleMenuClose}>
          <Typography className={classes.menuButton}>
            More<span style={{ color: "#ff8124" }}>...</span>
          </Typography>
        </MenuItem>
      </Menu>
    );

    return (
      <div>
        <CssBaseline />
        <AppBar position="static" style={{ backgroundColor: '#fff' }}>
          <Toolbar>
            <Typography variant="display2" color="inherit" className={classes.toolbarTitle}>
              <span style={{ color: '#ff8124' }}>Chisholm&Gamon</span>
            </Typography>
            <div className={classes.sectionDesktop}>
              {menuTitles.map(menuTitle => (
                <Button key={menuTitle} className={classes.menuButton}>{menuTitle}<span style={{ color: "#ff8124" }}>.</span></Button>
              ))}
              <Button className={classes.menuButton}>More<span style={{ color: "#ff8124" }}>...</span></Button>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen}>
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(headerTheme)(Header);