import "./Pricing.css";
import { CheckCircle } from "lucide-react";
const Pricing = ({ course }) => {
  const price = course?.coursePrice || "5000";
  const popularprice = course?.coursePoluparPrice || "8010";
  const paylink = course?.paylink || "";

  const plans = [
    {
      name: "Self Paced Learning",
      price: price,
      popular: false,
      features: [
        "Self-paced learning",
        "180+ hrs of content",
        "LMS access—6 months",
        "Access to all projects",
        "24/7 email support",
        "Certificate of completion",
      ],
    },
    {
      name: "Mentor Led Training",
      price: popularprice,
      popular: true,
      features: [
        "Mentor-led live training",
        "180+ hrs of live sessions",
        "LMS access—lifetime",
        "Access to all projects",
        "Resume building",
        "Interview preparation",
        "Job placement support",
        "Certificate of completion",
      ],
    },
  ];

  return (
    <section className="pricing">
      <div className="pricing__container">
        <div className="pricing__header">
          <div className="pricing__badge">PRICING PLAN</div>
          <h2 className="pricing__title">Choose Your Learning Path</h2>
          <p className="pricing__description">
            We provide both programs at affordable prices and student-friendly
            terms
          </p>
        </div>
        <div className="pricing__grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={
                plan.popular ? "pricing__card--popular" : "pricing__card"
              }
            >
              {plan.popular && (
                <div className="pricing__popular-badge-container">
                  <span className="pricing__popular-badge">Most Popular</span>
                </div>
              )}
              <h3 className="pricing__plan-name">{plan.name}</h3>
              <div className="pricing__price-container">
                <span className="pricing__currency">₹</span>
                <span className="pricing__price">{plan.price}</span>
              </div>
              <ul className="pricing__feature-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="pricing__feature-item">
                    <CheckCircle className="pricing__feature-icon" />
                    <span className="pricing__feature-text">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={
                  plan.popular
                    ? "pricing__button pricing__button--popular"
                    : "pricing__button pricing__button--standard"
                } onClick={() => window.open(paylink, "")}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
