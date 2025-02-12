import * as React from "react";

export const EmailTemplate = ({ messageData, name, email }) => (
  <section style={{ backgroundColor: "#f8f9fa", padding: "20px" }}>
    <section style={{ maxWidth: "600px", margin: "0 auto" }}>
      <section
        style={{
          background: "#fff",
          border: "1px solid #dedede",
          padding: "20px",
          textAlign: "left",
        }}
      >
        {/* <h4 style={{ color: "#6c757d" }}>Name: {name}</h4> */}
        <p style={{ color: "#6c757d", display: "flex" }}>
          <strong>{name},</strong>{" "}
          <p style={{ padding: "8px" }}>{messageData}</p>
        </p>
        <h4 style={{ color: "#6c757d" }}>Email: {email}</h4>
        {/* <a
          href="https://rajamitstm.in"
          style={{
            display: "inline-block",
            color: "#fff",
            backgroundColor: "#007bff",
            padding: "10px 20px",
            textDecoration: "none",
            borderRadius: "3px",
          }}
        >
          Visit Portfolio
        </a> */}
        {/* <p style={{ fontSize: "0.875rem", color: "#6c757d" }}>
          Thank you for your time,
        </p>
        <p style={{ fontSize: "0.875rem", color: "#6c757d" }}>Amit Kumar Raj</p> */}
      </section>
      <p style={{ textAlign: "center", color: "#6c757d" }}>
        © 2024 Amit Kumar Raj. All rights reserved.
      </p>
    </section>
  </section>
);

export const EmailTemplate2 = ({ name }) => (
  <section style={{ backgroundColor: "#f8f9fa", padding: "20px" }}>
    <section style={{ maxWidth: "600px", margin: "0 auto" }}>
      <section
        style={{
          background: "#fff",
          border: "1px solid #dedede",
          padding: "20px",
          textAlign: "left",
        }}
      >
        <p style={{ color: "#6c757d" }}>
          {`Dear ${name},`}
          <br />
          <br />
          {`Thank you for reaching out to us. This is an automated response to let you know that we have received your email. We appreciate your inquiry and will get back to you as soon as possible.`}
          <br />
          <br />
          {`Best Regards,`}
          <br />
          {`Amit Kumar Raj`}
          <br />
        </p>
        <a
          href="https://amitraj.in"
          style={{
            display: "inline-block",
            color: "#fff",
            backgroundColor: "#007bff",
            padding: "10px 20px",
            textDecoration: "none",
            borderRadius: "3px",
          }}
        >
          Visit Portfolio
        </a>
      </section>
      <p style={{ textAlign: "center", color: "#6c757d" }}>
        © 2024 Amit Kumar Raj. All rights reserved.
      </p>
    </section>
  </section>
);
