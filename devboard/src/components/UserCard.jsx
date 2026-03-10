function UserCard({ name, email }) {
  // ดึงตัวอักษรแรกมาทำ avatar
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  const fiestchar = name[0].toUpperCase(); // ดึงตัวอักษรแรกและแปลงเป็นตัวพิมพ์ใหญ่
  let ByColer = "1e40af"; // กำหนดสีเริ่มต้นเป็นสีน้ำเงิน
  if (fiestchar >= "A" && fiestchar <= "G") {
    // ตรวจสอบช่วงตัวอักษรเพื่อกำหนดสี
    ByColer = "1e40af"; // สีน้ำเงินสำหรับ A-G
  } else if (fiestchar >= "H" && fiestchar <= "N") {
    // สีน้ำเงินเข้มสำหรับ G-M
    ByColer = "16a34a"; // สีเขียวสำหรับ H-N
  } else {
    ByColer = "7e22ce"; // สีม่วงสำหรับตัวอักษรอื่นๆ
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        padding: "0.75rem 1rem",
        marginBottom: "0.75rem",
        background: "white",
      }}
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          background: `#${ByColer}`, // ใช้สีที่กำหนดตามตัวอักษรแรก
          color: "white",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "0.9rem",
        }}
      >
        {initials}
      </div>
      <div>
        <div style={{ fontWeight: "bold", color: "#2d3748" }}>{name}</div>
        <div style={{ fontSize: "0.85rem", color: "#718096" }}>{email}</div>
      </div>
    </div>
  );
}

export default UserCard;
