import { useEffect, useState } from "react";

const initialForm = { name: "", email: "", phone: "", message: "" };

export default function BrochureLeadModal({ open, onClose, source = "Brochure Download", product }) {
  const [form, setForm] = useState(initialForm);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!open) {
      setForm(initialForm);
      setError("");
      setSending(false);
      setSuccess(false);
    }
  }, [open]);

  const handleChange = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
  };

  const downloadBrochure = () => {
    const url = `${import.meta.env.BASE_URL}suntech_brochure.pdf`;
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "suntech_brochure.pdf";
    anchor.target = "_blank";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (sending) return;

    setError("");
    if (!form.name.trim() || !form.email.trim()) {
      setError("Please enter your name and email.");
      return;
    }

    setSending(true);

    try {
      const response = await fetch("/api/brochure-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: form.message.trim(),
          source,
          product,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Unable to submit lead.");
      }

      setSuccess(true);
      downloadBrochure();
    } catch (err) {
      setError(err.message || "Failed to submit the form. Please try again.");
    } finally {
      setSending(false);
    }
  };

  if (!open) {
    return null;
  }

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={sheetStyle} onClick={(event) => event.stopPropagation()}>
        <button type="button" onClick={onClose} style={closeStyle} aria-label="Close brochure form">
          ×
        </button>

        <div style={headerStyle}>
          <div>
            <p style={eyebrowStyle}>Download Brochure</p>
            <h2 style={titleStyle}>Get the Suntech product brochure</h2>
            <p style={subtitleStyle}>
              Submit your details and the brochure download will begin immediately after the lead is received.
            </p>
          </div>
        </div>

        {success ? (
          <div style={successStyle}>
            <span style={successIconStyle}>✓</span>
            <div>
              <h3 style={successTitleStyle}>Thank you!</h3>
              <p style={successTextStyle}>Your request has been submitted. The download should start automatically.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={formStyle}>
            <label style={labelStyle}>
              Full Name <span style={requiredStyle}>*</span>
            </label>
            <input
              type="text"
              value={form.name}
              onChange={handleChange("name")}
              style={inputStyle}
              placeholder="Your full name"
              required
            />

            <label style={labelStyle}>
              Email <span style={requiredStyle}>*</span>
            </label>
            <input
              type="email"
              value={form.email}
              onChange={handleChange("email")}
              style={inputStyle}
              placeholder="you@company.com"
              required
            />

            <label style={labelStyle}>Phone</label>
            <input
              type="tel"
              value={form.phone}
              onChange={handleChange("phone")}
              style={inputStyle}
              placeholder="+91 98765 43210"
            />

            <label style={labelStyle}>Message</label>
            <textarea
              value={form.message}
              onChange={handleChange("message")}
              style={textareaStyle}
              placeholder="Tell us your application, product, or machine interest."
              rows={4}
            />

            <p style={noteStyle}>
              We will send this lead to <strong>sales@suntechpac.com</strong> and begin the brochure download on success.
            </p>

            {error && <div style={errorStyle}>{error}</div>}

            <button type="submit" style={buttonStyle} disabled={sending}>
              {sending ? "Submitting..." : "Send & Download Brochure"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

const overlayStyle = {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(20, 28, 40, 0.65)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "24px",
  zIndex: 9999,
};

const sheetStyle = {
  width: "100%",
  maxWidth: "520px",
  background: "#fff",
  borderRadius: "20px",
  boxShadow: "0 32px 80px rgba(15, 23, 42, 0.16)",
  padding: "30px 30px 26px",
  position: "relative",
};

const closeStyle = {
  position: "absolute",
  top: "18px",
  right: "18px",
  width: "36px",
  height: "36px",
  border: "none",
  borderRadius: "50%",
  background: "#f4f4f6",
  color: "#1f2937",
  cursor: "pointer",
  fontSize: "22px",
  lineHeight: "1",
};

const headerStyle = {
  marginBottom: "20px",
};

const eyebrowStyle = {
  margin: 0,
  fontSize: "11px",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "#b45309",
  fontWeight: 700,
};

const titleStyle = {
  margin: "10px 0 10px",
  fontSize: "24px",
  lineHeight: "1.2",
  color: "#111827",
};

const subtitleStyle = {
  margin: 0,
  fontSize: "14px",
  lineHeight: "1.7",
  color: "#4b5563",
};

const formStyle = {
  display: "grid",
  gap: "14px",
};

const labelStyle = {
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "0.08em",
  color: "#374151",
  textTransform: "uppercase",
};

const requiredStyle = {
  color: "#b45309",
};

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "12px",
  border: "1px solid #d1d5db",
  fontSize: "15px",
  color: "#111827",
  background: "#f8fafc",
};

const textareaStyle = {
  ...inputStyle,
  minHeight: "104px",
  resize: "vertical",
};

const buttonStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  padding: "14px 16px",
  borderRadius: "12px",
  border: "none",
  background: "#e3721b",
  color: "#fff",
  fontSize: "14px",
  fontWeight: 700,
  cursor: "pointer",
};

const noteStyle = {
  margin: "0",
  fontSize: "13px",
  color: "#6b7280",
  lineHeight: "1.6",
};

const errorStyle = {
  padding: "12px 14px",
  borderRadius: "10px",
  background: "#fee2e2",
  color: "#b91c1c",
  fontSize: "13px",
};

const successStyle = {
  borderRadius: "16px",
  background: "#f9fafb",
  padding: "24px",
  display: "grid",
  gap: "18px",
};

const successIconStyle = {
  width: "52px",
  height: "52px",
  borderRadius: "50%",
  background: "#d1fae5",
  color: "#047857",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "24px",
};

const successTitleStyle = {
  margin: 0,
  fontSize: "20px",
  color: "#111827",
};

const successTextStyle = {
  margin: 0,
  color: "#4b5563",
  lineHeight: "1.7",
};
