import { categories } from "../../utils/helper.js";
import { TrendingUp, AudioLines, SwatchBook, BrainCircuit } from "lucide-react";

const iconMap = {
  TrendingUp: TrendingUp,
  AudioLines: AudioLines,
  SwatchBook: SwatchBook,
  BrainCircuit: BrainCircuit,
};

export default function DiverseSubject() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.subtitlebadge}>
            <div style={styles.subtitle}>WHY CHOOSE US </div>
          </div>
          <h2 style={styles.title}>
            Dive into online courses on
            <br />
            diverse subjects
          </h2>
        </div>
        <div className="categories-grid" style={styles.grid}>
          {categories.map((cat, idx) => {
            const IconComponent = iconMap[cat.iconName];
            return (
              <div key={idx} className="category-card" style={styles.card}>
                <div style={{ ...styles.iconBox, backgroundColor: cat.color }}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="category-text" style={styles.categoryText}>
                  <h3 style={styles.categoryName}>{cat.title}</h3>
                  <p style={styles.categorydescriptions}>{cat.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    width: "100%",
    padding: "64px 24px",
    backgroundColor: "#f9fafb",
  },
  container: {
    maxWidth: "1280px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "45px",
  },
  subtitlebadge: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    padding: "8px 20px",
    background: "#a0fecf9e",
    borderRadius: "50px",
    marginBottom: "0px",
    boxShadow: "0 2px 8px #7bffbda0",
  },
  subtitle: {
    color: "#0d9488",
    fontWeight: "600",
    fontSize: "clamp(12px, 2vw, 14px)",
    letterSpacing: "0.05em",
  },
  title: {
    fontSize: "clamp(20px, 3vw, 36px)",
    fontWeight: "700",
    color: "#111827",
    lineHeight: "1.3",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "24px",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "16px",
    backgroundColor: "#dbdadaff",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s, transform 0.3s",
    cursor: "pointer",
  },
  iconBox: {
    minWidth: "48px",
    width: "48px",
    height: "48px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
  },
  categoryText: {
    flex: 1,
  },
  categoryName: {
    fontWeight: "600",
    color: "#111827",
    margin: "0 0 8px 0",
    fontSize: "clamp(15px, 2.5vw, 20px)",
  },
  categorydescriptions: {
    margin: "0",
    fontWeight: "400",
    color: "#111827",
    fontSize: "16px",
    lineHeight: "1.5",
  },
};

const styleSheet = document.createElement("style");
styleSheet.textContent = `
  .category-card:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
    transform: translateY(-2px);
  }
  
  @media (max-width: 640px) {
    .categories-grid {
      grid-template-columns: 1fr !important;
    }
    h2 {
      font-size: 28px !important;
    }
    .category-card {
      flex-direction: column !important;
      align-items: flex-start !important;
      text-align: left !important;
    }
  }
  
  @media (min-width: 641px) and (max-width: 768px) {
    .categories-grid {
      grid-template-columns: 1fr !important;
    }
  }
  
  @media (min-width: 769px) and (max-width: 1023px) {
    .categories-grid {
      grid-template-columns: repeat(2, 1fr) !important;
    }
  }
  
  @media (min-width: 1024px) {
    .categories-grid {
      grid-template-columns: repeat(2, 1fr) !important;
    }
  }
`;
document.head.appendChild(styleSheet);
