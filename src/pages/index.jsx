import GenreList from '../components/genres/GenreList';
import { Layout } from '../components/Layout';

const IndexPage = ({ genresData = [], toggleFavorite }) => (
  <Layout title="All music genre">
    <header>
      <h1>Shows by Genre ({genresData.length})</h1>
    </header>
    <GenreList genresData={genresData} toggleFavorite={toggleFavorite} />
  </Layout>
);

export default IndexPage;
