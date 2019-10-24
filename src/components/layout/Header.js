import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchSources } from '../../redux/actions/sources';

class Header extends Component {
  componentDidMount() {
    const { onFetchSources } = this.props;

    onFetchSources();
  }

  renderNews() {
    const { sources } = this.props;
    const { content } = sources;

    if (content) {
      return sources.ids.map((sourceId) => (
        <option
          key={content[sourceId].id}
          value={content[sourceId].id}
        >
          {content[sourceId].name}
        </option>
      ));
    }

    return null;
  }

  render() {
    return (
      <div className="header">
        <h1 className="title">Notícias</h1>
        <select defaultValue="none" className="filter" name="source">
          <option value="none">
            Filtrar por fonte
          </option>
          {this.renderNews()}
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
