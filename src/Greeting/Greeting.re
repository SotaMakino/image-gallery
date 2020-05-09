[@react.component]
let make = (~name) => {
  let (count, setCount) = React.useState(() => 0);
  <>
    <p> {React.string(name ++ "clicked" ++ string_of_int(count))} </p>
    <button onClick={_ => setCount(_ => count + 1)}>
      {React.string("ClickMe")}
    </button>
    <button onClick={_ => setCount(_ => 0)}> {React.string("Reset")} </button>
  </>;
};