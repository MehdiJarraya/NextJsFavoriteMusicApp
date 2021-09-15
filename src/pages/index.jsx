import { Layout } from '../components/Layout';
import { genres } from '../data/genres';

const IndexPage = () => (
  <Layout title="ACB Coding Task">
    <header>
      <h1>Genres</h1>
    </header>
    <main>
      <ul>
        {genres.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </main>
  </Layout>
);

export default IndexPage;
