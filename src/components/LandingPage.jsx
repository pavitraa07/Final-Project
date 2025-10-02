import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PasswordPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "Brington@123") {
      navigate("/home");
    } else {
      setError("Incorrect password.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f7f8fa",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        margin: 0,
        padding: 0,
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "700",
          color: "#212529",
          marginBottom: "10px",
        }}
      >
        Guest Area
      </h1>

      <p
        style={{
          fontSize: "18px",
          color: "#6c757d",
          marginBottom: "30px",
          width: "fit-content",
          textAlign: "center",
        }}
      >
        Please enter the password below
      </p>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
          placeholder="Password"
          style={{
            width: "250px",
            border: "none",
            borderBottom: "3px solid #1aa877ff",
            outline: "none",
            fontSize: "16px",
            padding: "8px 0",
            textAlign: "center",
            marginBottom: "20px",
            backgroundColor: "transparent",
            color: "#212529",
          }}
        />

        <div style={{ color: "#dc3545", height: "20px", marginBottom: "20px", fontSize: "14px" }}>
          {error}
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: "#40bd93ff",
            color: "white",
            padding: "14px 40px", 
            fontSize: "16px",
            fontWeight: "500",
            cursor: "pointer",
            transition: "background-color 0.2s, transform 0.1s",
            width: "280px", 
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#74d799ff")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#40bd93ff")}
          onMouseDown={(e) => (e.target.style.transform = "scale(0.98)")}
          onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
        >
          Go
        </button>
      </form>
    </div>
  );
}
