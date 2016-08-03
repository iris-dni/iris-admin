import * as React from 'react';
import { withRouter } from 'react-router';
import Alert from 'components/alert';
import Sidebar from 'components/sidebar';
import { translate } from 'config/strings';
import authenticated from 'auth';
import storage from 'helpers/storage';


export default authenticated(withRouter(React.createClass({
  displayName: 'App',

  propTypes: {
    children: React.PropTypes.node,
    me: React.PropTypes.object,
    router: React.PropTypes.shape({
      replace: React.PropTypes.func.isRequired,
    }).isRequired,
  },

  componentWillMount() {
    const redirectUrl = storage.getItem('redirect-url');
    storage.removeItem('redirect-url');
    if (redirectUrl) {
      this.props.router.replace(JSON.parse(redirectUrl));
    }
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
})));
