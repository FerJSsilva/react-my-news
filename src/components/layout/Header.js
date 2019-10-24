import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchSources } from '../../redux/actions/sources';

class Header extends Component {
  componentDidMount() {
    const { onFetchSources } = this.props;

    onFetchSources();
  }

  render() {
    const { sources } = this.props;

    console.log(sources);
    return (
      <div className="header">
        <h1 className="title">Notícias</h1>
        <select defaultValue="none" className="filter" name="source">
          <option value="none">
            Filtrar por fonte
          </option>
          <option value="blasting-news">Blasting News</option>
          <option value="globo">Globo</option>
          <option value="google-news-br">Google News Brasil</option>
          <option value="info-money">Info Money</option>
        </select>
      </div>
    );
  }
}

Header.propTypes = {
  sources: PropTypes.objectOf(PropTypes.any),
  onFetchSources: PropTypes.func.isRequired,
};

Header.defaultProps = {
  sources: [],
};

const mapStateToProps = ({ sources }) => ({
  sources,
});

const mapDispatchToProps = {
  onFetchSources: fetchSources,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
