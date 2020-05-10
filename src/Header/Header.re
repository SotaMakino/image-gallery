[@react.component]
let make = () => {
  <header
    style={ReactDOMRe.Style.make(~fontSize="25px", ~margin="10px 0", ())}>
    {React.string("Image Gallery")}
  </header>;
};