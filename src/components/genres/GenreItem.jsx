import React from 'react';

import classes from './GenreItem.module.css';

export default function GenreItem({
  color,
  title,
  numShows,
  isFavorite,
  toggleFavorite,
  id,
}) {
  return (
    <section
      className={classes.genreItem}
      style={{
        background: color,
      }}
    >
      <svg
        className={classes.favIcon}
        height="23"
        onClick={() => toggleFavorite(id)}
        width="26"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.5 0c-2.889 0-5.489 1.869-6.5 4.313C11.989 1.869 9.389 0 6.5 0 2.889 0 0 2.731 0 6.469 0 11.5 5.489 15.525 13 23c7.511-7.475 13-11.5 13-16.531C26 2.73 23.111 0 19.5 0z"
          fill={isFavorite ? '#fff' : 'none'}
          fillRule="evenodd"
          stroke="#fff"
        />
      </svg>
      <div className={classes.centerContent}>
        <h2>{title}</h2>
        <p>{`${numShows} Shows`}</p>
      </div>
    </section>
  );
}
