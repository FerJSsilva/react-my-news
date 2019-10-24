import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchSources } from '../../redux/actions/sources';
import { fetchNews, fetchNewsBySource } from '../../redux/actions/news';

class Header extends Component {
  componentDidMount() {
    const { onFetchSources } = this.props;

    onFetchSources();
  }

  changeSource(sourceId) {
    const { onFetchNews, onFetchNewsBySource } = this.props;

    if (sourceId !== 'none') {
      onFetchNewsBySource(sourceId);
    } else {
      onFetchNews();
    }
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
        <select
          defaultValue="none"
          className="filter"
          name="source"
          onChange={(event) => { this.changeSource(event.target.value); }}
        >
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
  onFetchNewsBySource: PropTypes.func.isRequired,
  onFetchNews: PropTypes.func.isRequired,
};

Header.defaultProps = {
  sources: [],
};

const mapStateToProps = ({ sources }) => ({
  sources,
});

const mapDispatchToProps = {
  onFetchSources: fetchSources,
  onFetchNewsBySource: fetchNewsBySource,
  onFetchNews: fetchNews,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
