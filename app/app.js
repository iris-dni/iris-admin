import * as React from 'react';
import { withRouter } from 'react-router';
import Alert from 'components/alert';
import Sidebar from 'components/sidebar';
import { translate } from 'config/strings';
import authenticated from 'auth';
import storage from 'helpers/storage';
import PetitionAPI from 'petition/api';
import { CITY_PORTAL_PARAM, CITY_PORTAL_CLEAR_FILTER } from 'petition/api';
import { retrieveCityPortalId } from 'petition/api';


const predefinedPetitionSearches = [
  {
    id: 'pending',
    label: 'Pending Petition Reviews ($1)',
    state: ['supportable.pending']
  },
  {
    id: 'sendLetter',
    label: 'Pending Petition Letters ($1)',
    state: ['processing.sendLetterRequested']
  },
  {
    id: 'approveLetter',
    label: 'Pending Petition Feedback ($1)',
    state: ['processing.letterResponseArrived']
  },
  {
    id: 'noletterresponse',
    label: 'No Letter Response ($1)',
    state: ['processing.noLetterResponse']
  }
];


const searchPetitions = (cityPortalId) => {
  const promises = predefinedPetitionSearches.map(search => {
    const params = { state: search.state, limit: 0 };
    if (cityPortalId !== CITY_PORTAL_CLEAR_FILTER) {
      params[CITY_PORTAL_PARAM] = cityPortalId;
    }
    return PetitionAPI.search(params);
  });
  return Promise.all(promises);
};


export default authenticated(withRouter(React.createClass({
  displayName: 'App',

  propTypes: {
    children: React.PropTypes.node,
    location: React.PropTypes.shape({
      query: React.PropTypes.object.isRequired,
    }).isRequired,
    me: React.PropTypes.object,
    router: React.PropTypes.shape({
      replace: React.PropTypes.func.isRequired,
    }).isRequired,
  },

  getInitialState() {
    return {
      cityPortalId: retrieveCityPortalId(this.props.location).id,
      petitionTotals: []
    };
  },

  componentWillMount() {
    const redirectUrl = storage.getItem('redirect-url');
    storage.removeItem('redirect-url');
    if (redirectUrl) {
      this.props.router.replace(JSON.parse(redirectUrl));
    }

    this._updatePetitionsTotals();
  },

  componentWillReceiveProps(nextProps) {
    // (re)fetch the 'petitions totals' if a new 'city portal id' was set
    const currentCityPortalId = this.state.cityPortalId;
    const nextCityPortalId = nextProps.location.query[CITY_PORTAL_PARAM];
    if (currentCityPortalId !== nextCityPortalId) {
      this.setState({ cityPortalId: nextCityPortalId }, this._updatePetitionsTotals);
    }
  },

  _updatePetitionsTotals() {
    searchPetitions(this.state.cityPortalId).then(results => {
      this.setState({ petitionTotals: results.map(result => result.total) });
    }).catch((error) => {
      // fail silently, we just lose the amounts in the navigation bar
      // eslint-disable-next-line no-console
      console.warn(error);
    });
  },

  render() {
    if (!window.__swaggerClient) {
      return (
        <div className="container-fluid" style={{ margin: 80 }}>
          <Alert message={translate('errors.swagger')} />
        </div>
      );
    }

    let openIssues = 0;
    const { petitionTotals } = this.state;
    const petitionSearches = predefinedPetitionSearches.map((search, index) => {
      let total = '?';
      if (petitionTotals && (petitionTotals.length > index)) {
        total = petitionTotals[index];
        openIssues += total;
      }
      return Object.assign({}, search, {label: search.label.replace('$1', total)});
    });

    return (
      <div>
        <Sidebar petitionSearches={petitionSearches} />
        <div className="content-container">
          {React.cloneElement(this.props.children, {openIssues: (openIssues > 0) ? openIssues.toString() : '?'})}
        </div>
      </div>
    );
  }
})));
