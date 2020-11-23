import * as React from "react";

const WriteApp = React.lazy(() => import("wdr_ui_write/App"));
const ReportApp = React.lazy(() => import("wdr_ui_report/App"));

const App = () => (
  <div>
    <h2>Main App</h2>
    <React.Suspense fallback="Loading Report">
      <ReportApp result={[]} />
    </React.Suspense>
    <React.Suspense fallback="Loading Writing board">
      <WriteApp />
    </React.Suspense>
  </div>
);

export default App;
