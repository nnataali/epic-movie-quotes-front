import { i18n, useTranslation } from 'next-i18next';
import { useForm, useWatch } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { fetchCSRFToken, forgotPassword } from 'services';
import {
  closeForgotPassword,
  openCheckEmail,
  openLoginModal,
} from 'stores/modalSlice';

const useForgotPassword = () => {
  const {
    register,
    getFieldState,
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm({ mode: 'all' });
  const { t } = useTranslation('authorization');
  const dispatch = useDispatch();
  const hideForgotPasswordHandler = () => {
    dispatch(closeForgotPassword());
  };
  const showLoginModalHandler = () => {
    dispatch(openLoginModal());
  };

  const showCheckEmailHandler = () => {
    dispatch(openCheckEmail());
  };

  const email = useWatch({
    control,
    name: 'email',
  });
  const onSubmit = async () => {
    try {
      await fetchCSRFToken();
      await forgotPassword({ email: email, local: i18n?.language });
      hideForgotPasswordHandler();
      showCheckEmailHandler();
    } catch (error: any) {
      const emailError = error.response.data.errors?.email;
      if (emailError) {
        setError('email', {
          type: 'notExist',
          message: t('errors:email_invalid') as string,
        });
      }
    }
  };

  return {
    register,
    getFieldState,
    handleSubmit,
    errors,
    onSubmit,
    hideForgotPasswordHandler,
    showLoginModalHandler,
    t,
  };
};

export default useForgotPassword;
