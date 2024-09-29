"use client";

import { useState } from "react";

export default function TermsModal() {
  const [isChecked, setIsChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(true); // Modal is open by default

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleClose = () => {
    if (isChecked) {
      setIsOpen(false);
    } else {
      alert("Please agree to the terms and conditions to proceed.");
    }
  };

  return isOpen ? (
    <div className="modalOverlay">
      <div className="modalContainer">
        <h2>Terms and Conditions</h2>
        <div className="modalContent">
          <h3>1. Copyright and Licensing</h3>
          <p>
            1.1 Participants retain full copyright ownership of their
            submissions.
          </p>
          <p>
            1.2 By entering the competition, Participants grant Yourekaa a
            non-exclusive, worldwide, royalty-free license to use, showcase, and
            promote their submissions. This includes, but is not limited to, use
            in promotion, advertising, and publicity materials, both online and
            offline.
          </p>

          <h3>2. Credit and Attribution</h3>
          <p>
            2.1 Any external entities, such as galleries and publishers, that
            feature the submissions must credit Yourekaa alongside the creator
            as the source of the work. Participants are responsible for
            informing any external entities of this requirement.
          </p>
          <p>
            2.2 Yourekaa will always credit the creator when using their
            submissions for any promotional, advertising, or publicity purposes.
          </p>

          <h3>3. Use of Submissions</h3>
          <p>
            3.1 Yourekaa may use any submissions for promotion, advertising, and
            publicity without further compensation or consent from the
            Participants, provided that the creator is credited appropriately.
          </p>

          <h3>4. Release of Claims</h3>
          <p>
            4.1 By entering the competition, Participants agree to release
            Yourekaa from any claims, demands, or liabilities arising out of or
            in connection with the use of their image or likeness as part of the
            submission.
          </p>

          <h3>5. Marketing and Sales</h3>
          <p>
            5.1 If Yourekaa assists in marketing and selling a Participant’s
            submission, the participant will retain 70% of the proceeds from
            such sales, while Yourekaa will receive 30%.
          </p>

          <h3>6. Dispute Resolution</h3>
          <p>
            6.1 Any disputes arising out of or related to these Terms and
            Conditions, or the competition will after a first attempt at
            amicable settlement between the Parties, be resolved through
            arbitration pursuant to the Arbitration and Mediation Act 2023, and
            the place of Arbitration shall be Lagos State, Nigeria.
          </p>
          <p>
            6.2 If arbitration fails to resolve the dispute, Participants agree
            that Yourekaa will not be responsible for paying the legal fees of
            the aggrieved party.
          </p>

          <h3>7. Acceptance of Terms</h3>
          <p>
            7.1 By participating in the competition, Participants acknowledge
            that they have read, understood, and agree to be bound by these
            Terms and Conditions.
          </p>

          <h3>8. Modifications and Amendments</h3>
          <p>
            8.1 Yourekaa reserves the right to modify or amend these Terms and
            Conditions at any time without prior notice to Participants. Any
            changes will be posted on the competition’s official website.
          </p>

          <h3>9. Governing Law</h3>
          <p>
            9.1 These Terms and Conditions will be governed by and construed in
            accordance with the laws of the Federal Republic of Nigeria, without
            regard to its conflict of law principles.
          </p>

          <div className="agreementSection">
            <input
              type="checkbox"
              id="termsCheck"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="termsCheck">
              I agree to the terms and conditions
            </label>
          </div>
        </div>
        <button onClick={handleClose} className="closeButton">
          Close
        </button>
      </div>
    </div>
  ) : null;
}
