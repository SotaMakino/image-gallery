type image = {
  id: int,
  url: string,
};

type film = {
  id: int,
  title: string,
  descroption: string,
  film_photos: array(image),
};

type state =
  | LoadingImages
  | ErrorFetchingImages
  | LoadedImages(array(image));

type stateDetail =
  | LoadingImage
  | ErrorFetchingImage
  | LoadedImage(image);