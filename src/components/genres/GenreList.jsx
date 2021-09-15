import React from 'react';

import GenreItem from './GenreItem';
import classes from './GenreList.module.css';

export default function GenreList({ genresData, toggleFavorite }) {
  return (
    <article className={classes.grid}>
      {genresData.map((item) => (
        <GenreItem key={item.id} {...item} toggleFavorite={toggleFavorite} />
      ))}
    </article>
  );
}
