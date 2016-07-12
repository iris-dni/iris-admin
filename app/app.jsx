import * as React from 'react';
import { withRouter } from 'react-router';
import Sidebar from 'components/sidebar';


export default withRouter(React.createClass({
  displayName: 'App',

  propTypes: {
    children: React.PropTypes.node,
    router: React.PropTypes.shape({
      push: React.PropTypes.func.isRequired,
    }).isRequired,
  },

  render() {
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
