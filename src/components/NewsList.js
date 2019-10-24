import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchNews } from '../redux/actions/news';
import News from './News';

class NewsList extends Component {
  state = {
    numberOfNews: 5,
  }

  componentDidMount() {
    const { onFetchNews } = this.props;

    onFetchNews();
  }

  showMore() {
    this.setState((state) => ({ numberOfNews: state.numberOfNews + 5 }));
  }

  renderNews() {
    const { numberOfNews } = this.state;
    const { news } = this.props;
    const { content, ids } = news;

    let newsToRender = [];

    if (ids.length > 0) {
      const newsToShow = numberOfNews > ids.length ? ids.length : numberOfNews;

      for (let index = 0; index < newsToShow; index += 1) {
        newsToRender = [
          ...newsToRender,
          <News
            key={index}
            headline={content[index].title}
            link={content[index].url}
            source={content[index].source && content[index].source.name}
            date={content[index].publishedAt}
          />,
        ];
      }
    }

    return newsToRender;
  }

  render() {
    return (
      <div className="news-list">
        {this.renderNews()}
        <div className="news-control">
          <button type="button" className="show-more" onClick={() => this.showMore()}>
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
