import * as React from 'react';
import { withRouter } from 'react-router';
import Alert from 'components/alert';
import Sidebar from 'components/sidebar';
import { translate } from 'config/strings';


export default withRouter(React.createClass({
  displayName: 'App',

  propTypes: {
    children: React.PropTypes.node,
    router: React.PropTypes.shape({
      push: React.PropTypes.func.isRequired,
    }).isRequired,
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
