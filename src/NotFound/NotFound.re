let str = ReasonReact.string;

[@react.component]
let make = () =>
  <div className="section is-fullheight">
    <h1 className="is-size-1"> {"404" |> str} </h1>
    <h2 className="is-size-2"> {"Not Found" |> str} </h2>
    <hr />
    <a href="/login" className="is-size-4"> {"Login" |> str} </a>
    <p className="is-size-5"> {"or" |> str} </p>
    <a href="/register" className="is-size-4"> {"Register" |> str} </a>
    <hr />
    <a href="/" className="is-size-4">
      {{j|⬅️ Back to Homepage|j} |> str}
    </a>
  </div>;