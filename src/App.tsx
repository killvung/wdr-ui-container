import * as React from "react";
const WriteApp = React.lazy(() => import("wdr_ui_write/App"));

const App = () => (
  <div>
    <h1>Typescript</h1>
    <h2>Main App</h2>
    <React.Suspense fallback="Loading Writing board">
      <WriteApp />
    </React.Suspense>
  </div>
);

export default App;
