[@react.component]
let make = () => {
  let (title, setTitle) = React.useState(() => "");
  let (description, setDescription) = React.useState(() => "");
  let (file, setFile) = React.useState(() => "");

  <div style={ReactDOMRe.Style.make(~padding="10px", ())}>
    <div style={ReactDOMRe.Style.make()}>
      <label> {React.string("Title ")} </label>
      <input
        type_="text"
        value=title
        onChange={event => setTitle(ReactEvent.Form.target(event)##value)}
      />
    </div>
    <div style={ReactDOMRe.Style.make(~padding="20px 0", ())}>
      <label> {React.string("Description ")} </label>
      <input
        type_="text"
        value=description
        onChange={event =>
          setDescription(ReactEvent.Form.target(event)##value)
        }
      />
    </div>
    <input
      name="films"
      type_="file"
      multiple=false
      accept="image"
      id="films"
      style={ReactDOMRe.Style.make(~display="none", ())}
    />
    <label
      htmlFor="films"
      style={ReactDOMRe.Style.make(
        ~border="1px solid #999",
        ~borderRadius="3px",
        ~padding="5px 8px",
        (),
      )}>
      {React.string("Choose a file")}
    </label>
  </div>;
};