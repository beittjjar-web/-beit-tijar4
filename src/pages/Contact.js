import React, { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    alert("تم إرسال الرسالة");
    setMessage("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>اتصل بنا</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          required
          value={message}
          onChange={e => setMessage(e.target.value)}
          rows={5}
          cols={50}
          placeholder="اكتب رسالتك هنا"
        />
        <br />
        <button type="submit" style={{ marginTop: 10 }}>إرسال</button>
      </form>
    </div>
  );
};

export default Contact;
