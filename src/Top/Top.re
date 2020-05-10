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
       ->Belt.Array.mapWithIndex((i, image) => {
           let imageUrl =
             Js.String.replaceByRe(
               [%re "/\/\/negabook-server.herokuapp.com/g"],
               "",
               image.url,
             );
           let imageStyle =
             ReactDOMRe.Style.make(
               ~height="300px",
               ~width="100%",
               ~padding="2px",
               ~borderRadius="8px",
               ~backgroundImage={j|url($imageUrl)|j},
               ~backgroundPosition="center",
               (),
             );
           <div key={Js.Int.toString(image.id)} style=imageStyle>
             {React.string(Js.Int.toString(image.id))}
           </div>;
         })
       ->React.array
     }}
  </div>;
};