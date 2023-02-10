/* eslint-disable @next/next/no-img-element */
import { Button } from 'components/button';
import { BackArrow, Movie, Home } from 'components/icons';
import Link from 'next/link';
import { burgerMenu } from 'stores/modalSlice';
import useBurgerMenu from './useBurgerMenu';
const BurgerMenu = () => {
  const { router, dispatch, name, image, logoutHandler } = useBurgerMenu();
  return (
    <div
      className=' flex inset-0 fixed '
      onClick={() => dispatch(burgerMenu())}
    >
      <div
        className='h-screen bg-blue-600  p-10'
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div
          className=' cursor-pointer'
          onClick={() => {
            dispatch(burgerMenu());
          }}
        >
          <BackArrow />
        </div>
        <div className='flex flex-col  gap-6 mt-10'>
          <div className='flex items-center gap-5'>
            {router.asPath === '/profile' ? (
              <div className=' w-16 h-16 bg-red-600 rounded-full flex justify-center items-center'>
                <img
                  src={`${image}`}
                  alt='avatar'
                  className=' w-[3.8rem] h-[3.8rem] rounded-full object-cover'
                />
              </div>
            ) : (
              <img
                src={`${image}`}
                alt='avatar'
                className=' w-[3.8rem] h-[3.8rem] rounded-full object-cover'
              />
            )}
            <div>
              <p className='text-2xl'>{name}</p>
              <Link href='/profile'>
                <p className='text-light-gray'>Edit your profile</p>
              </Link>
            </div>
          </div>
          <Link href='/news-feed'>
            <div className='flex items-center gap-5 text-lg ml-3'>
              <Home
                color={router.asPath === '/news-feed' ? '#E31221' : 'white'}
              />
              <p>News Feed</p>
            </div>
          </Link>
          <Link href='/movie-list'>
            <div className='flex items-center gap-5 text-lg ml-3'>
              <Movie
                color={router.asPath === '/movie-list' ? '#E31221' : 'white'}
              />
              <p>List of movies</p>
            </div>
          </Link>
          <Button
            item='log out'
            color='transparent'
            onClick={() => logoutHandler()}
          />
        </div>
      </div>
    </div>
  );
};
export default BurgerMenu;
