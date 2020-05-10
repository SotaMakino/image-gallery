[@react.component]
let make = (~id) => {
  <header
    style={ReactDOMRe.Style.make(~fontSize="25px", ~margin="10px 0", ())}>
    {React.string(id)}
  </header>;
};