import GenreList from '../components/genres/GenreList';
import { Layout } from '../components/Layout';
import Select from '../components/Select';

const IndexPage = ({ genresData = [], toggleFavorite, setGenresData }) => (
  <Layout title="All music genre">
    <header style={{ display: 'flex', justifyContent: 'space-between' }}>
      <h1>Shows by Genre ({genresData.length})</h1>
      <Select genresData={genresData} setGenresData={setGenresData} />
    </header>
    <GenreList genresData={genresData} toggleFavorite={toggleFavorite} />
  </Layout>
);

export default IndexPage;
