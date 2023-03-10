import { Layout } from 'components';
import { AddMovie } from 'components/movieList';
import Movies from 'components/movieList/movies/movies';
import { useSelector } from 'react-redux';
import { RootState } from 'types/stateTypes';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useMovieList } from 'hooks';

const MovieList = () => {
  const { addMovieModal } = useSelector((store: RootState) => store.modal);
  useMovieList();
  return (
    <Layout>
      <Head>
        <title> Movie Quotes</title>
      </Head>
      <div className=' lg:ml-80 my-8 flex justify-center items-center'>
        <Movies />
      </div>
      {addMovieModal && <AddMovie />}
    </Layout>
  );
};

export default MovieList;
export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'movies',
        'errors',
        'notifications',
      ])),
    },
  };
};
