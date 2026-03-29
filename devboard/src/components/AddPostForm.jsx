import { useState } from "react";

function AddPostForm({ onAddPost }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // e.preventDefault() ใช้เพื่อป้องกันการรีเฟรชหน้าเมื่อฟอร์มถูกส่ง
    if (!title.trim() || !body.trim()) return; // ป้องกันส่งว่าง

    onAddPost({ title, body });
    setTitle(""); // เคลียร์ form
    setBody("");
  }
  //Challenge:2.1 ตัวนับตัวอักษรในหัวข้อโพสต์
  const isTitleLimit = title.length > 90; // เตือนถ้าใกล้ถึง 100 ตัวอักษร

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        padding: "1rem",
        marginBottom: "1.5rem",
        background: "#f7fafc",
      }}
    >
      <h3 style={{ margin: "0 0 0.75rem", color: "#2d3748" }}>
        เพิ่มโพสต์ใหม่
      </h3>
      <div style={{ marginBottom: "0.5rem" }}>
        <input
          type="text"
          placeholder="หัวข้อโพสต์"
          value={title}
          onChange={(e) => setTitle(e.target.value)} // เพิ่ม onChange เพื่ออัปเดต title
          maxLength={100} // จำกัดตัวอักษรที่ 100
          style={{
            width: "100%",
            padding: "0.5rem",
            marginBottom: "0.25rem",
            border: "1px solid #cbd5e0",
            borderRadius: "4px",
            fontSize: "1rem",
            boxSizing: "border-box",
          }}
        />
        {/* ช่วยเตื่อนว่าใกล้ถึง limit */}
        <div
          style={{
            textAlign: "right",
            fontSize: "0.8rem",
            color: isTitleLimit ? "red" : "#a0aec0", // เปลี่ยนสีถ้าใกล้ถึง limit
          }}
        >
          {title.length}/100
        </div>
      </div>
      <textarea
        placeholder="เนื้อหาโพสต์"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows={3}
        style={{
          width: "100%",
          padding: "0.5rem",
          marginBottom: "0.75rem",
          border: "1px solid #cbd5e0",
          borderRadius: "4px",
          fontSize: "1rem",
          resize: "vertical",
          boxSizing: "border-box",
        }}
      />

      <button
        type="submit"
        style={{
          background: "#1e40af",
          color: "white",
          border: "none",
          padding: "0.5rem 1.5rem",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        โพสต์
      </button>
    </form>
  );
}

export default AddPostForm;
