export interface ModalState {
  registerModal: boolean;
  loginModal: boolean;
  forgotPassword: boolean;
  checkEmail: boolean;
  resetPassword: boolean;
  passwordChanged: boolean;
  verificationNotif: boolean;
  verificationVerify: boolean;
  addMovieModal: boolean;
  addQuoteModal: boolean;
  viewQuoteModal: boolean;
  editQuoteModal: boolean;
  writeQuoteModal: boolean;
  editMovieModal: boolean;
  addEmailModal: boolean;
  updateUsernameModal: boolean;
  confirmChangesModal: boolean;
  updatePasswordModal: boolean;
  confirmPasswordModal: boolean;
  updateEmailsModal: boolean;
  addNewEmailModal: boolean;
  burgerMenuModal: boolean;
  notificationsModal: boolean;
  searchModal: boolean;
  deleteMovieModal: boolean;
  deleteQuoteModal: boolean;
}

export interface UserState {
  name: string;
  email: string;
  id: string;
  image: string;
  google_id: string;
}
export interface MoviesState {
  searchMovies: string[];
}

export interface QuotesState {
  searchQuotes: string[];
}
export interface RootState {
  modal: ModalState;
  user: UserState;
  movies: MoviesState;
  quotes: QuotesState;
}
