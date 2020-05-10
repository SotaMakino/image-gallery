[@bs.val] external fetch: string => Js.Promise.t('a) = "fetch";

[@react.component]
let make = (~id) => {
  let (state, setState) = React.useState(() => Types.LoadingImage);

  React.useEffect0(() => {
    Js.Promise.(
      fetch("https://negabook-server.herokuapp.com/negas.json")
      |> then_(response => response##json())
      |> then_(jsonResponse => {
           let images =
             jsonResponse->Belt.Array.map((i: Types.film) =>
               i.film_photos[0]
             );
           let image =
             List.filter(
               (item: Types.image) => item.id == id,
               Belt.List.fromArray(images),
             );
           setState(_previousState =>
             LoadedImage(Belt.List.toArray(image)[0])
           );
           Js.Promise.resolve();
         })
      |> catch(_err => {
           setState(_previousState => ErrorFetchingImage);
           Js.Promise.resolve();
         })
      |> ignore
    );
    None;
  });

  <div>
    {switch (state) {
     | ErrorFetchingImage => React.string("An error occurred!")
     | LoadingImage => React.string("Loading...")
     | LoadedImage(image) =>
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
       <div>
         <div style={ReactDOMRe.Style.make(~fontSize="15px", ())}>
           {React.string(Js.Int.toString(id))}
         </div>
         <img src=imageUrl style=imageStyle />
       </div>;
     }}
  </div>;
};