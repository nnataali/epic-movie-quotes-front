export type AddQuoteTypes = {};

export type QuoteType = {
  image: string;
  movie_id: string;
  user_id: string;
  id: string;
  quote: {
    en: string;
    ge: string;
  };
};

export type UpdateQuoteType = {
  quote: {
    en: string;
    ge: string;
  };
  image: FileList;
  id: string;
};
