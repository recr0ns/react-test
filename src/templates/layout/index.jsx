import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const Layout = (props) => {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div className="outer">
        <div className="container">
          {props.children}
        </div>
      </div>
    </MuiThemeProvider>
  );
};

Layout.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default Layout;
