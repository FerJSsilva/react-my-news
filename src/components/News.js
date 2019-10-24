import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const News = ({
  headline, link, source, date,
}) => (
  <div className="news">
    <a className="news-headline" href={link} target="blank">
      {headline}
    </a>
    <div className="news-info">
      <div className="news-date">
        <span>{moment(date).format('DD/MM/YYYY')}</span>
      </div>
      <div className="news-source">
        <span>{source}</span>
      </div>
    </div>
  </div>
);

News.propTypes = {
  headline: PropTypes.string,
  link: PropTypes.string,
  source: PropTypes.string,
  date: PropTypes.string,
};

News.defaultProps = {
  headline: 'Unavailable Headline',
  link: 'Unavailable Link',
  source: 'Unavailable Source',
  date: 'Unavailable Date',
};

export default News;
