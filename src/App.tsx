import React, { useMemo, Suspense, lazy } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import getTheme from "./theme/theme";
import { ThemeProvider } from "@emotion/react";
import { Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import Product from "./pages/Product";
import User from "./pages/User";

const Home = lazy(() => import("./pages/Home"));

function App() {
  const darkMode = "OFF";
  const theme = useMemo(() => getTheme(darkMode), [darkMode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          <Route element={<SideBar />}>
            <Route index element={<Home />} />
            <Route path="/users">
              <Route index element={<User />} />
              <Route path=":userId" element={<div>userID</div>} />
              <Route path="new" element={<div>New</div>} />
            </Route>

            <Route path="/products">
              <Route index element={<Product />} />
              <Route path=":productId" element={<div>productId</div>} />
              <Route path="new" element={<div>new</div>} />
            </Route>

            <Route path="*" element={<div>Not-Found</div>} />
          </Route>
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
