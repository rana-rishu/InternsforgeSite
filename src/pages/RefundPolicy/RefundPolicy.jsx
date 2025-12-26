import React from "react";
import "./RefundPolicy.css";

const RefundPolicy = () => {
  return (
    <div className="refund-policy-container">
      <div className="refund-policy-content">
        <h1 className="policy-main-title">Refund Policy</h1>

        <section className="policy-section">
          <h2 className="policy-section-title">
            1. Interpretation and Definitions
          </h2>

          <div className="policy-subsection">
            <h3 className="policy-subsection-title">I. Interpretation</h3>
            <p className="policy-text">
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or in plural.
            </p>
          </div>

          <div className="policy-subsection">
            <h3 className="policy-subsection-title">II. Definitions</h3>
            <p className="policy-text">
              For the purposes of this Return and Refund Policy:
            </p>
            <ul className="policy-list">
              <li>
                <strong>Company</strong> (referred to as either "the Company",
                "We", "Us" or "Our" in this Agreement) refers to Internsloom.
              </li>
              <li>
                <strong>Goods</strong> refer to the items offered for sale on
                the Service.
              </li>
              <li>
                <strong>Orders</strong> mean a request by you to purchase goods
                from us.
              </li>
              <li>
                <strong>Service</strong> refers to the website.
              </li>
              <li>
                <strong>Website</strong> refers to Internsloom, accessible from{" "}
                <a href="https://www.Internsloom.com/" className="policy-link">
                  https://www.Internsloom.com/
                </a>
              </li>
              <li>
                <strong>You</strong> means the individual accessing or using the
                Service, or the company, or other legal entity on behalf of
                which such individual is accessing or using the Service, as
                applicable.
              </li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">
            2. Your Order Cancellation Rights
          </h2>
          <p className="policy-text">
            You are entitled to cancel your order within 24 hours without giving
            any reason for doing so.
          </p>
          <p className="policy-text">
            The deadline for cancelling an order is 24 hours from the date on
            which you received the goods or on which a third party you have
            appointed, who is not the carrier, takes possession of the product
            delivered.
          </p>
          <p className="policy-text">
            In order to exercise your right of cancellation, you must inform us
            of your decision by means of a clear statement. You can inform us of
            your decision by email:{" "}
            <a href="mailto:support@Internsloom.com" className="policy-link">
              support@Internsloom.com
            </a>
          </p>
          <p className="policy-text">
            We will reimburse you no later than 14 days from the day on which we
            receive the returned goods. We will use the same means of payment as
            you used for the Order, and you will not incur any fees for such
            reimbursement.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">
            3. Conditions for Refund from User's End
          </h2>
          <p className="policy-text">
            In order for the Goods to be eligible for a return, please make sure
            that the Goods were purchased in the last 24 hours.
          </p>
          <p className="policy-text">
            We reserve the right to refuse returns of any merchandise that does
            not meet the above return conditions in our sole discretion.
          </p>
          <p className="policy-text">
            Email your purchase receipt:{" "}
            <a href="mailto:support@Internsloom.com" className="policy-link">
              support@Internsloom.com
            </a>
          </p>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">
            4. Conditions for Refund from Our End
          </h2>
          <p className="policy-text">
            Internsloom reserves the right to postpone/cancel the
            training/internship program because of the insufficient number of
            enrollments, unavailability of the slots and unavailability of
            mentors (under certain condition). You will be informed for the same
            and Internsloom is liable to refund the full amount without any
            deduction.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="policy-section-title">5. Contact Us</h2>
          <p className="policy-text">
            If you have any questions about our Returns and Refunds Policy,
            please contact us:
          </p>
          <p className="policy-text">
            By email:{" "}
            <a href="mailto:support@Internsloom.com" className="policy-link">
              support@Internsloom.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicy;
