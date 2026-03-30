import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";

const App = () => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);

  const BASE_URL = "http://localhost:8000";

  useEffect(() => {
    const fetchCitiesAPI = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
        console.log(data);
      } catch (err) {
        alert("Error Loading Data....", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCitiesAPI();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route
              index
              element={<CityList cities={cities} loading={loading} />}
            />
            <Route
              path="cities"
              element={<CityList cities={cities} loading={loading} />}
            />
            <Route
              path="countries"
              element={<CountryList loading={loading} cities={cities} />}
            />
            <Route path="form" element={<p>Form</p>} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
