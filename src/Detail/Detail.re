[@bs.val] external fetch: string => Js.Promise.t('a) = "fetch";

[@react.component]
let make = (~id) => {
  let (state, setState) = React.useState(() => Types.LoadingFilm);

  React.useEffect0(() => {
    Js.Promise.(
      fetch("https://negabook-server.herokuapp.com/negas/" ++ id)
      |> then_(response => response##json())
      |> then_(jsonResponse => {
           setState(_previousState => LoadedFilm(jsonResponse));
           Js.Promise.resolve();
         })
      |> catch(_err => {
           setState(_previousState => ErrorFetchingFilm);
           Js.Promise.resolve();
         })
      |> ignore
    );
    None;
  });

  <div>
    {switch (state) {
     | ErrorFetchingFilm => React.string("An error occurred!")
     | LoadingFilm => React.string("Loading...")
     | LoadedFilm(film) =>
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
       <div>
         <div
           style={ReactDOMRe.Style.make(
             ~fontSize="14px",
             ~padding="0 18px",
             (),
           )}>
           <h4> {React.string(Js.Int.toString(film.film_photos[0].id))} </h4>
           <h4> {React.string(film.title)} </h4>
           <h4> {React.string(film.description)} </h4>
         </div>
         <img src=imageUrl style=imageStyle />
       </div>;
     }}
  </div>;
};