import { deleteCookie } from 'cookies-next';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'services';
import { RootState } from 'types/stateTypes';

const useNavBar = () => {
  const router = useRouter();
  const { burgerMenuModal } = useSelector((store: RootState) => store.modal);
  const [selected, setSelected] = useState(
    router.locale === 'en' ? 'Eng' : 'ქართ'
  );
  const dispatch = useDispatch();
  const { t } = useTranslation('common');
  const logoutHandler = async () => {
    try {
      await logout();
      deleteCookie('XSRF-TOKEN');
      deleteCookie('authenticated');
      router.replace('/');
    } catch (error) {}
  };

  return {
    burgerMenuModal,
    router,
    selected,
    setSelected,
    dispatch,
    logoutHandler,
    t,
  };
};
export default useNavBar;
