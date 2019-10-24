import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchNews } from '../redux/actions/news';

class NewsList extends Component {
  componentDidMount() {
    const { onFetchNews } = this.props;

    onFetchNews();
  }

  render() {
    const { news } = this.props;

    console.log(news);

    return (
      <div className="news-list">
        <div className="news-control">
          <button type="button" className="show-more">
            Mostrar mais
          </button>
        </div>
      </div>
    );
  }
}

NewsList.propTypes = {
  news: PropTypes.objectOf(PropTypes.any),
  onFetchNews: PropTypes.func.isRequired,
};

NewsList.defaultProps = {
  news: [],
};

const mapStateToProps = ({ news }) => ({
  news,
});

const mapDispatchToProps = {
  onFetchNews: fetchNews,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
