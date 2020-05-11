[@react.component]
let make = () => {
  let url = ReasonReactRouter.useUrl();
  let content =
    switch (url.path) {
    | ["blinking-greeting"] =>
      <BlinkingGreeting> {React.string("Hello !")} </BlinkingGreeting>
    | ["image", id] => <Detail id />
    | [] => <Top />
    | _ => <NotFound />
    };

  <> content </>;
};