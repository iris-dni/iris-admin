import * as React from 'react';
import Alert from 'components/alert';
import Sidebar from 'components/sidebar';
import { translate } from 'config/strings';
import authenticated from 'auth';


export default authenticated(React.createClass({
  displayName: 'App',

  propTypes: {
    children: React.PropTypes.node,
    me: React.PropTypes.object,
  },

  render() {
    if (!window.__swaggerClient) {
      return (
        <div className="container-fluid" style={{ margin: 80 }}>
          <Alert message={translate('errors.swagger')} />
        </div>
      );
    }
    return (
      <div>
        <Sidebar />
        <div className="content-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}));
