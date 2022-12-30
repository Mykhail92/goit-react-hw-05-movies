import { Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './GlobalStyles';
import { Header } from './Header/Header';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
export const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
      <GlobalStyles />
    </>
  );
};
