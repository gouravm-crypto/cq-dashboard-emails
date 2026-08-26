const AGENTS = {
  bhavana: {
    name:"Bhavana_J", initials:"BJ", color:"#0d9488",
    cq:95, audits:10, ncf:0, totalErrors:6,
    params:{ss:5, sol:1, prob:0, tag:0, fu:0},
    aois:[
      {cat:"ss", label:"Soft Skills", text:"Match the tone to the situation, especially escalations. On the LTE case, a structured, numbered escalation was answered without addressing each point systematically, and on a CTC redemption for a customer facing a health emergency, the reply leaned on unedited template language instead of a warmer, personalised tone. When a customer signals urgency or distress, slow down and write specifically for them."},
      {cat:"ss", label:"Soft Skills", text:"Lead with empathy on refund and payment cases even when the resolution itself is correct. The refund-related case was handled well operationally, but the final email lacked empathy and needed a softer close."},
      {cat:"sol", label:"Solution & Rec.", text:"Mark BOD instead of letting a good save go unflagged when a case is only saved by template edits. On the CTC-to-Digi Gold conversion for a customer citing a health emergency, the underlying request was fulfilled but the delivery needed a BOD flag for the emergency handling and tone."}
    ],
    cases:[
      {query:"CTC", score:100, comment:"The customer reached out requesting written confirmation regarding whether a 5-day grace period applied to her CaratLane Treasure Chest monthly installment due on August 13th, and if there would be any financial penalty or impact on her plan. Bhavana responded promptly within ~30 minutes (10:33 AM), accurately confirming the policy details (explaining that a 10-day grace period is provided) while clearly outlining the policy condition regarding proportional discount reduction for delayed payments."},
      {query:"Order Status", score:100, comment:"Good Work!!"},
      {query:"GWD", score:80, comment:"Good work!!"},
      {query:"COD", score:60, comment:"The customer sent an email sharing feedback regarding their visit to the Mysuru store, expressing disappointment that the store refused home delivery without a 50% advance payment. The customer noted they ended up purchasing from a competitor as a result. Bhavana responded promptly within 22 minutes, offering a clear and empathetic apology, correctly clarifying CaratLane's in-store Cash-on-Delivery (COD) policy (50% upfront payment required), and acknowledging that the communication at the store could have been handled better."},
      {query:"Payment Failure / Credit Balance", score:110, comment:"Good work!!"},
      {query:"Refund Related", score:90, comment:"Good work!! Last email could have been better, lacked empathy. Mentioned a better version in pvt notes."},
      {query:"LTE", score:90, comment:"BOD given. Corrective email mentioned in private notes for reference: while the core resolution was handled correctly, whenever a customer sends a structured or numbered escalation, try to answer each point systematically. Additionally, when a customer expresses high frustration or mentions external escalations like consumer forum or NCH, personalize the response with stronger ownership phrases rather than standard templates."},
      {query:"LTE/LTB", score:100, comment:"Good Work!!"},
      {query:"CTC", score:65, comment:"The customer requested an urgent plan redemption into Digi Gold due to a health emergency. Bhavana handled the email and processed the request to convert the Treasure Chest plan to Digi Gold. While the core request was fulfilled, the email heavily relied on unedited template scripts, leading to a robotic tone during an emergency. BOD given for not marking NCF."},
      {query:"Refund", score:110, comment:"Amazing work Bhavana! Following up with the customer before them reaching out sets the right example, keep this up!!"}
    ],
    paramCaseMap:{ss:[5,6,8], sol:[8], prob:[], tag:[], fu:[]}
  },
  preethi: {
    name:"Preethi_V", initials:"PV", color:"#7c3aed",
    cq:94, audits:10, ncf:0, totalErrors:6,
    params:{ss:3, sol:3, prob:0, tag:0, fu:0},
    aois:[
      {cat:"ss", label:"Soft Skills", text:"Acknowledge a delay before explaining policy. On the repair status case, the customer had waited over 16 days past a promised 48-hour callback, but Preethi jumped straight to the store instruction without acknowledging the communication lapse. On a second repair status update, a changed dispatch date landed without any empathy for the extra wait. Open with an apology for the delay before moving into the process."},
      {cat:"sol", label:"Solution & Rec.", text:"Explain the 'why', not just the 'what'. On the repair case, the customer wasn't told why both earrings are needed for a proper repair match. On a diamond policy question, the ₹2 Lakh threshold for the 15-day money-back clause was left out. On the second repair status case, the response needed clearer, more proactive assurance about the extra delay. Always close the information gap completely, not just partially."}
    ],
    cases:[
      {query:"Repair Status", score:65, comment:"The customer reached out regarding order #EZNOIGCM9EB5I-JR, stating he submitted a damaged earring for repair under warranty, received an email on August 1st promising a callback within 48 hours, but was left waiting for over 16 days. Preethi identified that only one earring was submitted and instructed the customer to bring the second piece to the store. While policy-compliant, Preethi missed acknowledging the 16-day communication lapse and failed to educate the customer on why both pieces are required for repair."},
      {query:"Order Status", score:100, comment:"Good Work!!"},
      {query:"xCLusive points", score:100, comment:"Good work!!"},
      {query:"Presale Callback", score:90, comment:"Good work on arranging a sales callback however basic information could be shared via email, suggestive response mentioned in PVT notes."},
      {query:"CTC", score:100, comment:"Good work!!"},
      {query:"Repair Status", score:80, comment:"Customer reached out to check the repair status of their order. Preethi initially handled the query on the 10th and informed the customer that the item was ready for dispatch and would reach the store within 3 to 4 days. However, on the 12th, the update was changed to a new dispatch date of August 17th. Preethi failed to show empathy for the initial miscommunication and the additional delay. AOI: the response could have been structured much better with proactive empathy and clear assurances."},
      {query:"Pricing Related", score:100, comment:"Good Work!!"},
      {query:"Repair Request", score:100, comment:"Good work!! Better personalisation and structure needed."},
      {query:"General Query", score:80, comment:"Good work!!"},
      {query:"Treasure Chest", score:100, comment:"Good work!!"}
    ],
    paramCaseMap:{ss:[0,5], sol:[0,3,5], prob:[], tag:[], fu:[]}
  },
  ghouse: {
    name:"Ghouse_M", initials:"GM", color:"#2563eb",
    cq:91, audits:10, ncf:0, totalErrors:6,
    params:{ss:5, sol:1, prob:0, tag:0, fu:0},
    aois:[
      {cat:"ss", label:"Soft Skills", text:"Empathize before updating. On the repair status case, Ghouse jumped straight to a status update without acknowledging the delay the customer had already flagged. On another complaint, the customer's frustration went unaddressed while Ghouse simply provided information. Open every reply, especially ones responding to a complaint, with a genuine acknowledgment of the wait or the inconvenience."},
      {cat:"sol", label:"Solution & Rec.", text:"Own the resolution instead of pushing it back onto the customer. On the exchange/quality case, the customer explicitly asked CaratLane to place the replacement order directly, but Ghouse only credited the profile balance and left the quality defect and re-order unaddressed, requiring the customer to place a fresh order herself."}
    ],
    cases:[
      {query:"Incorrect SKU delivered", score:80, comment:"The customer filed a severe grievance regarding order #EZAMDCHK7A79I-JR, stating she was billed for an 18KT gold chain at the Ahmedabad store, but upon submitting it for repair after it broke in May 2026, the Medinipur store revealed the piece was actually 14KT gold. Ghouse responded by confirming that an exception approval was obtained to replace the item with an 18KT gold chain, while looping in the Midnapore store management. (BOD) because the relevant store team was actively looped in, the core resolution was achieved, but Ghouse missed providing a concrete ETA and used a tone that underplayed a serious 2.5-month purity discrepancy."},
      {query:"Order Status", score:100, comment:"The customer reached out regarding a severe delivery delay for a ring. Ghouse responded promptly, correctly identifying the root cause (Quality Control rejection) and offering options to either wait with expedited dispatch or cancel for a store credit/refund. Escalated the order to high priority, set a clear revised ETA, and explained the remaining steps. Good work!!"},
      {query:"Feedback", score:100, comment:"The customer filed a sensitive complaint regarding staff behavior at a store. Ghouse responded by confirming an internal escalation and, when the customer reiterated her frustration, sent a follow-up confirming higher management review, looping in the store team, and offering a complimentary gift to rebuild trust. Good work!!"},
      {query:"Exchange", score:60, comment:"The customer filed a complaint regarding an order picked up for return/exchange due to a quality issue (broken screw), left with zero updates. Ghouse replied confirming a credit to her profile balance, but failed to address the quality defect raised and missed taking proactive ownership to place the replacement order directly as requested. Suggestive response mentioned in private notes."},
      {query:"Feedback", score:100, comment:"The customer sent a detailed complaint regarding poor hospitality at a store during her first purchase. Ghouse handled the ticket promptly, validating her frustration, citing brand values, escalating to store management, and following up appropriately when the customer replied. Good Work!!"},
      {query:"Order Tracking / Status", score:80, comment:"Good work! BOD."},
      {query:"Repair Status", score:65, comment:"Ghouse failed to express empathy towards the customer completely and just provided an update, instead of first apologizing for the delay in updating the customer on their repair status."},
      {query:"Product Quality", score:100, comment:"Good work!!"},
      {query:"Escalation/Complaint", score:70, comment:"As per the customer's complaint email, Ghouse should have empathised better."},
      {query:"Order Cancellation", score:80, comment:"Good Work!!"}
    ],
    paramCaseMap:{ss:[6,8], sol:[3], prob:[], tag:[], fu:[]}
  },
  safura: {
    name:"Safura_B", initials:"SB", color:"#0891b2",
    cq:81, audits:10, ncf:1, totalErrors:7,
    params:{ss:3, sol:2, prob:0, tag:0, fu:2},
    aois:[
      {cat:"ss", label:"Soft Skills", text:"Give the complete picture and check the calendar before replying. On the price difference case, Safura explained the technical pricing error but abruptly asked for a large additional balance without a line-item breakdown, and showed no empathy for a 2-month delay. On a return request case, negative phrasing like 'we are unable to raise it' was used instead of a constructive, structured response."},
      {cat:"sol", label:"Solution & Rec.", text:"Check the actual timeline before repeating a canned response. On the refund status case, Safura told the customer to wait 7 to 10 business days when the refund had already been processed 16 days earlier, well past that window. On the price difference case, the missing calculation breakdown and reframing around asset value were also gaps."},
      {cat:"fu", label:"Follow Up", text:"Track every reopened ticket to closure. The xClusive review points case was reopened with a promised 24 to 48 hour resolution, but no follow-up email was ever sent, leaving it overdue and resulting in an NCF."}
    ],
    cases:[
      {query:"Refund Status", score:70, comment:"Always check the date when a refund was processed before sending standard template lines. Since the refund was completed on August 3rd and Safura replied on August 19th, more than 10 business days had already passed. Instead of telling the customer to wait 7-10 business days as per the canned response, she should have informed them the turnaround time had passed, provided the ARN, and asked them to check with their bank."},
      {query:"Feedback", score:80, comment:"Good work!!"},
      {query:"Price Difference", score:45, comment:"The customer filed a formal complaint regarding an order confirmed at a lower price, but the store demanded a much higher amount at pickup, citing a 'system error'. Safura acknowledged the technical error but abruptly informed the customer that a large additional balance was required. She failed to provide a line-item calculation breakdown, lacked empathy regarding the 2-month delay, and missed reframing the payment around the higher physical gold asset value and future exchange benefits. Suggestive response added to PVT notes; BOD given for not marking NCF."},
      {query:"Review Points (NCF)", score:0, comment:"NCF. The customer reached out stating she uploaded a product review with a picture but did not receive her 200 xClusive points reward. Safura incorrectly responded that points for the purchase itself were added, completely missing the review bonus query. After a private note, Safura reopened the ticket promising a resolution in 24-48 hours, but no follow-up email or resolution was ever sent, leaving the ticket severely overdue."},
      {query:"Product Quality", score:100, comment:"Good Work!! AOI: Since it was a bad experience for a high value purchase, please try to call such customers at least once for personalised assistance."},
      {query:"Return Request", score:70, comment:"Customer was unable to raise a return request from their end, showing an error. Safura followed the basic canned response without seeking a screenshot of the error for preventive measures. AOI: please refrain from negative statements such as 'we are unable to raise it', need to structure emails better."},
      {query:"Replacement Request", score:100, comment:"Good work!! Closing email could be better, will discuss during feedback. BOD given."},
      {query:"Credit Balance", score:100, comment:"Good Work!!"},
      {query:"GWD", score:80, comment:"Good Work!!"},
      {query:"Profile Balance", score:100, comment:"Good Work!!"}
    ],
    paramCaseMap:{ss:[2,5], sol:[0,2], prob:[], tag:[], fu:[3]}
  },
  ansari: {
    name:"Ansari_S", initials:"AS", color:"#b8860b",
    cq:78, audits:10, ncf:2, totalErrors:12,
    params:{ss:4, sol:3, prob:1, tag:0, fu:4},
    aois:[
      {cat:"ss", label:"Soft Skills", text:"Engage with escalated, emotional customers instead of going quiet. On two separate grievances that both became NCFs, Ansari went completely silent after a customer proposed a compromise or after promising to revert - one on a ring exchange dispute, one on a degraded Shaya pearl piece. On a routine order status case, the customer's name was misspelled in both emails sent. Read the emotional tone of a message and proofread every reply before sending, especially on complaints."},
      {cat:"sol", label:"Solution & Rec.", text:"Own the resolution end to end. On the ring exchange grievance, the customer's Full Value Exchange compromise with a balance-credit request was merged into the thread and never actioned. On the Shaya pearl complaint, a promised 24-hour revert never happened. Whenever a case is merged or escalated, make sure someone still drives it to a close."},
      {cat:"prob", label:"Probing", text:"Look for ways to retain a customer, not only to close a ticket. On the ring exchange grievance, no attempt was made to explore what would keep the customer engaged with the brand even as she proposed a reasonable compromise."},
      {cat:"fu", label:"Follow Up", text:"Every merged or reopened ticket needs a scheduled follow-up. Both NCF cases involved a promise (a revert, a compromise reply) that was never followed through on, leaving live grievances to go completely unaddressed for days."}
    ],
    cases:[
      {query:"Order Status", score:80, comment:"Good work!!"},
      {query:"Order Status", score:80, comment:"Good work!! Empathy could be better."},
      {query:"Order Status", score:80, comment:"Good work!!"},
      {query:"Product Quality (NCF)", score:0, comment:"NCF. The customer filed a formal grievance regarding a defective ring purchased Aug 1st and store misconduct. While initially demanding a full refund, her follow-up email showed a clear willingness to compromise through a Full Value Exchange for a cheaper alternative ring, with one core blocker about the balance refund. Ansari merged this email into the thread and completely went silent, missing an easy, low-effort win to de-escalate a high-risk grievance."},
      {query:"Product Quality (NCF)", score:0, comment:"NCF. The customer sent a formal grievance regarding a Shaya pearl piece that degraded in quality, detailing emotional distress and loss of brand trust. Ansari sent a cold, 2-line acknowledgment promising to revert with a solution the next day. However, no follow-up email or resolution was ever sent, leaving an active grievance completely unaddressed."},
      {query:"GWD", score:80, comment:"The customer requested a refund for a price difference between what she paid and the final invoice value. Ansari responded, clearly explaining that gold weight variations during manufacturing alter the final invoice price, and confirmed the excess amount was being refunded to her original payment method."},
      {query:"Order Status", score:75, comment:"Good work on the follow up!! However please proofread your emails before sending - customer's name was incorrect in both emails sent, and the structure of the email needs to be better. Added suggestive response in PVT notes."},
      {query:"Refund Delay", score:100, comment:"Good work!! Please structure the email better, suggested response added in PVT notes."},
      {query:"Order Status", score:110, comment:"Good work!!"},
      {query:"Order Cancellation", score:80, comment:"Good work!!"}
    ],
    paramCaseMap:{ss:[3,4,6], sol:[3,4], prob:[3], tag:[], fu:[3,4]}
  }
};

const PARAM_LABELS = {ss:"Soft Skills", sol:"Solution & Rec.", prob:"Probing", tag:"Tagging", fu:"Follow Up"};
const PARAM_COLORS = {ss:"#ea580c", sol:"#dc2626", prob:"#2563eb", tag:"#7c3aed", fu:"#16a34a"};
