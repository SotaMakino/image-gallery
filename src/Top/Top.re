[@bs.val] external fetch: string => Js.Promise.t('a) = "fetch";

[@react.component]
let make = () => {
  let (state, setState) = React.useState(() => Types.LoadingFilms);
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
           setState(_previousState => LoadedFilms(jsonResponse));
           Js.Promise.resolve();
         })
      |> catch(_err => {
           setState(_previousState => ErrorFetchingFilms);
           Js.Promise.resolve();
         })
      |> ignore
    );
    None;
  });

  <div>
    {switch (state) {
     | ErrorFetchingFilms => React.string("An error occurred!")
     | LoadingFilms => React.string("Loading...")
     | LoadedFilms(films) =>
       films
       ->Belt.Array.map(film => {
           let imageUrl =
             Js.String.replaceByRe(
               [%re "/\/\/negabook-server.herokuapp.com/g"],
               "",
               film.film_photos[0].url,
             );
           let imageStyle =
             ReactDOMRe.Style.make(
               ~height="100%",
               ~width="97%",
               ~margin="10px",
               ~borderRadius="10px",
               (),
             );
           let stringId = Js.Int.toString(film.id);
           <div key=stringId onClick={_ => goToDetail(stringId)}>
             <img src=imageUrl style=imageStyle />
           </div>;
         })
       ->React.array
     }}
  </div>;
};