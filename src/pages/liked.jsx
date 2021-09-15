import GenreList from '../components/genres/GenreList';
import { Layout } from '../components/Layout';

const LikedGenrePage = ({ genresData, toggleFavorite }) => (
  <Layout title="Favorites genre">
    <header>
      <h1>Favorite Genres</h1>
    </header>
    <GenreList
      genresData={genresData.filter((item) => item.isFavorite)}
      toggleFavorite={toggleFavorite}
    />
  </Layout>
);

export default LikedGenrePage;
