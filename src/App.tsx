import * as React from "react";
const DrawApp = React.lazy(() => import("wdr_ui_draw/App"));

const App = () => (
  <div>
    <h1>Typescript</h1>
    <h2>Main App</h2>
    <React.Suspense fallback="Loading Drawing board">
      <DrawApp />
    </React.Suspense>
  </div>
);

export default App;
