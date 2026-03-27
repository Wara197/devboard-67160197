import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PostDetailPage from "./pages/PostDetailPage";
import ProfilePage from "./pages/ProfilePage";
import FavoritesPage from "./pages/FavoritesPage";
import NotFoundPage from "./pages/NotFoundPage";
//NotFoundPage จะถูกแสดงเมื่อผู้ใช้เข้าถึง URL ที่ไม่ตรงกับ Route ใดๆใน App.jsx

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/:id" element={<PostDetailPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          {/* route สุดท้ายสำหรับ 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App;
