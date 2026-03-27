// Link ใช้สำหรับสร้างลิงก์ที่นำผู้ใช้กลับไปยังหน้าหลักเมื่อพวกเขาเข้าถึง URL ที่ไม่ถูกต้อง
import { Link } from "react-router-dom";
// หน้าสำหรับแสดงเมื่อผู้ใช้เข้าถึง URL ที่ไม่มีเส้นทางที่ตรงกับ Route ใด ๆ ใน App.jsx
function NotFoundPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Not Found</h1>
      <p>ไม่พบหน้าที่คุณต้องการ</p>
      <Link to="/">กลับไปที่หน้าหลัก</Link>
    </div>
  );
}

export default NotFoundPage;
