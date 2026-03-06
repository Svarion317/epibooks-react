import MyNav from "./components/MyNav";
import AllTheBooks from "./components/AllTheBooks";
import Welcome from "./components/Welcome";
import MyFooter from "./components/MyFooter";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import NotFound from "./pages/NotFound";
import BookDetail from "./pages/BookDetail";

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <BrowserRouter>
      <div className="app-shell">
        <MyNav searchText={searchText} setSearchText={setSearchText} />
        <main className="app-main">
          <Routes>
            <Route
              path="/"
              element={
                <div className="page-enter">
                  <Welcome />
                  <AllTheBooks searchText={searchText} />
                </div>
              }
            />
            <Route
              path="/:asin"
              element={
                <div className="page-enter">
                  <BookDetail />
                </div>
              }
            />
            <Route
              path="*"
              element={
                <div className="page-enter">
                  <NotFound />
                </div>
              }
            />
          </Routes>
        </main>
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
