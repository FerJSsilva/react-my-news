import React from 'react';

const Header = () => (
  <div className="header">
    <h1 className="title">Notícias</h1>
    <select className="filter" name="source">
      <option hidden disabled selected>
        Filtrar por fonte
      </option>
      <option value="none">Nenhum</option>
      <option value="blasting-news">Blasting News</option>
      <option value="globo">Globo</option>
      <option value="google-news-br">Google News Brasil</option>
      <option value="info-money">Info Money</option>
    </select>
  </div>
);

export default Header;
