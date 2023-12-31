import "./App.css";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import MenuCards from "./MenuCards";
import ItemPage from "./ItemPage";
import Error from "./Error";
import NotFound from "./NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    async function FetchData() {
      try {
        setError("");
        setLoading(true);
        const res = await fetch("http://localhost:9000/items/");
        const json = await res.json();
        const { data, error } = json;
        if (res.ok) {
          setItems(data);
          setLoading(false);
        } else {
          setError(error);
          setLoading(false);
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    FetchData();
  }, []);

  const renderContent = () => {
    if (loading) {
      return (
        <Route path="/" element={<MenuCards setId={setId} items={items} />} />
      );
    } else if (error) {
      return <Route path="/" element={<Error error={error} />} />;
    } else {
      return (
        <Route path="/" element={<MenuCards setId={setId} items={items} />} />
      );
    }
  };

  return (
    <>
      <NavBar id={id} />
      <BrowserRouter>
        <Routes>
          {renderContent()}
          <Route path="/item/:id" element={<ItemPage setId={setId} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
