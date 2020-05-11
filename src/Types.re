type image = {
  id: int,
  url: string,
};

type film = {
  id: int,
  title: string,
  description: string,
  film_photos: array(image),
};

type state =
  | LoadingFilms
  | ErrorFetchingFilms
  | LoadedFilms(array(film));

type stateDetail =
  | LoadingFilm
  | ErrorFetchingFilm
  | LoadedFilm(film);