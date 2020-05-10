[@bs.val] external fetch: string => Js.Promise.t('a) = "fetch";

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

[@react.component]
let make = () => {
  let (state, setState) = React.useState(() => LoadingImages);
  let goToDetail = id =>
    ReasonReactRouter.push(
      "/image"
      ++ "/"
      ++ {
        id;
      },
    );

  React.useEffect0(() => {
    Js.Promise.(
      fetch("https://negabook-server.herokuapp.com/negas.json")
      |> then_(response => response##json())
      |> then_(jsonResponse => {
           setState(_previousState =>
             LoadedImages(jsonResponse->Belt.Array.map(i => i.film_photos[0]))
           );
           Js.Promise.resolve();
         })
      |> catch(_err => {
           setState(_previousState => ErrorFetchingImages);
           Js.Promise.resolve();
         })
      |> ignore
    );
    None;
  });

  <div>
    {switch (state) {
     | ErrorFetchingImages => React.string("An error occurred!")
     | LoadingImages => React.string("Loading...")
     | LoadedImages(images) =>
       images
       ->Belt.Array.map(image => {
           let imageUrl =
             Js.String.replaceByRe(
               [%re "/\/\/negabook-server.herokuapp.com/g"],
               "",
               image.url,
             );
           let imageStyle =
             ReactDOMRe.Style.make(
               ~height="100%",
               ~width="97%",
               ~margin="10px",
               ~borderRadius="10px",
               (),
             );
           let stringId = Js.Int.toString(image.id);
           <div onClick={_ => goToDetail(stringId)}>
             <img key=stringId src=imageUrl style=imageStyle />
           </div>;
         })
       ->React.array
     }}
  </div>;
};