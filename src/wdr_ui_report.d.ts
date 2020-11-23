/// <reference types="react" />

interface AppProps {
    result: Array<object>
}

declare module "wdr_ui_report/App" {
    const App: React.ComponentType<AppProps>;

    export default App;
}
