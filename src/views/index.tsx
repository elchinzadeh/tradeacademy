import "assets/styles/App.less";

import { Routes, Route } from "react-router-dom";

import MainLayout from "layouts/MainLayout";
import About from "views/About";
import Portfolio from "views/Portfolio";
import NotFound from "views/NotFound";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="about" element={<About />} />
                    <Route path="portfolio" element={<Portfolio />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
