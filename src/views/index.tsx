import "assets/styles/App.less";

import { Typography } from "antd";
import MainLayout from "layouts/MainLayout";

function App() {
    return (
        <div className="App">
            <MainLayout>
                <Typography.Title>Welcome!</Typography.Title>
            </MainLayout>
        </div>
    );
}

export default App;
