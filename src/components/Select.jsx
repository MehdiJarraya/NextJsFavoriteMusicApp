import React from 'react';

export default function Select({ genresData = [], setGenresData }) {
  const handleOnChanage = (e) => {
    if (e.target.value === 'alphabetical') {
      setGenresData([
        ...genresData.sort((item1, item2) => {
          // eslint-disable-next-line no-nested-ternary
          return item1.title < item2.title
            ? -1
            : item1.title > item2.title
            ? 1
            : 0;
        }),
      ]);
    }
    if (e.target.value === 'shows') {
      setGenresData([
        ...genresData.sort((item1, item2) => item2.numShows - item1.numShows),
      ]);
    }
  };

  return (
    <div>
      <label htmlFor="sort-criteria">Sort by:</label>
      <select id="sort-criteria" name="sortCriteria" onChange={handleOnChanage}>
        <option value="alphabetical">Alphabetical </option>
        <option value="shows">No of Shows</option>
      </select>
    </div>
  );
}
