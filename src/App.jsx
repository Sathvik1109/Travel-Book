import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// Components
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";

// Pages
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import ProtectedRoute from "./pages/ProtectedRoute";

// const Homepage = lazy();

// Contexts
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
// import { lazy } from "react";

// Bundle size before code splitting
// dist/assets/index-4o0jvSBu.css   31.12 kB │ gzip:   5.08 kB
// dist/assets/index-KjQCkUPZ.js   575.64 kB │ gzip: 168.61 kB

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CitiesProvider>
          <AuthProvider>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />}></Route>
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </AuthProvider>
        </CitiesProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
