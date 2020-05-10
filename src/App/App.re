[@bs.val] external fetch: string => Js.Promise.t('a) = "fetch";

let goToBlinkingGreeting = () => {
  ReasonReactRouter.push("/blinking-greeting");
};

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

  <>
    <div onClick={_ => goToBlinkingGreeting()}>
      {React.string("Blinking greetings")}
    </div>
    <br />
    content
  </>;
};