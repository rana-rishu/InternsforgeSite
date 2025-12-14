import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "./../../utils/helper.js";

export default function Accordions() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Got Questions? We've Got Answers!</h2>
        </div>
        <div style={styles.faqList}>
          {faqs.map((faq, idx) => (
            <div key={idx} style={styles.faqItem}>
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                style={styles.faqButton}
              >
                <span style={styles.question}>{faq.q}</span>
                <ChevronDown
                  style={{
                    ...styles.chevron,
                    transform:
                      openFaq === idx ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              {openFaq === idx && <div style={styles.answer}>{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "64px 24px",
    backgroundColor: "#ffffff",
  },
  container: {
    maxWidth: "768px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "48px",
  },
  title: {
    fontSize: "36px",
    justifyContent: "center",
    fontWeight: "700",
    color: "#111827",
    lineHeight: "1.2",
  },
  faqList: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  faqItem: {
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    overflow: "hidden",
  },
  faqButton: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
    textAlign: "left",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.2s",
    fontSize: "16px",
  },
  question: {
    fontWeight: "600",
    color: "#111827",
  },
  chevron: {
    width: "20px",
    height: "20px",
    color: "#4b5563",
    transition: "transform 0.2s",
    flexShrink: 0,
  },
  answer: {
    padding: "0 20px 20px 20px",
    color: "#4b5563",
    lineHeight: "1.6",
  },
};

const styleSheet = document.createElement("style");
styleSheet.textContent = `
  button:hover {
    background-color: #f9fafb !important;
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 28px !important;
    }
  }
`;
document.head.appendChild(styleSheet);
