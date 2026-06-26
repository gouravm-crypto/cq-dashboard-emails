const AGENTS = {
  safura: {
    name:"Safura_B", initials:"SB", color:"#0891b2",
    cq:96, audits:7, ncf:0, totalErrors:3,
    params:{ss:3, sol:0, prob:0, tag:0, fu:0},
    aois:[
      {cat:"ss", label:"Soft Skills", text:"Email structure and formatting — on the LTB/LTE case, the email structure was flagged at a brand level. Proper sequencing — greeting, acknowledgement, context, resolution, empathetic closure — must be followed every time. A draft was shared as feedback; please review and apply it going forward."},
      {cat:"ss", label:"Soft Skills", text:"Grammatical accuracy — on the LTB/LTE case, grammatical errors were found. Proofread every email before sending. Errors in written communication affect brand perception directly."},
      {cat:"ss", label:"Soft Skills", text:"Store-level specificity — on the delivery case, always specify the store name when referencing a store in an email. It acts as a re-confirmation for the customer and avoids ambiguity."}
    ],
    cases:[
      {query:"Dislike / Feedback", score:100, comment:"Good work on explaining the customer and further acknowledgement."},
      {query:"Escalation/Complaint", score:100, comment:"Good Work!"},
      {query:"Delivery Related", score:100, comment:"Good work!! AOI — Please specify the store name as it acts like a re-confirmation."},
      {query:"Refund", score:100, comment:"Good work!!"},
      {query:"LTB/LTE", score:57, comment:"Good work!! Internal communication found. AOI — Please structure emails properly. Grammatical errors found. Shared a draft as feedback."},
      {query:"Random / Enquiry", score:100, comment:"Good Work!!"},
      {query:"Quality Issues", score:100, comment:"Good work!!"}
    ],
    paramCaseMap:{ss:[4], sol:[], prob:[], tag:[], fu:[]}
  },
  bhavana: {
    name:"Bhavana_J", initials:"BJ", color:"#0d9488",
    cq:91, audits:7, ncf:0, totalErrors:4,
    params:{ss:4, sol:0, prob:0, tag:0, fu:0},
    aois:[
      {cat:"ss", label:"Soft Skills", text:"Empathy when customers follow up repeatedly — on the POP double-payment case, when the customer reached out again as a reminder, Bhavana failed to acknowledge the long wait and delay before responding. Always open with empathy when a customer has been waiting for a resolution."},
      {cat:"ss", label:"Soft Skills", text:"Email structure on sensitive quality cases — on the earring repair (non-consent size reduction) case, the email needed better sequencing: acknowledge the concern first, apologise for the discomfort, explain what went wrong, share next steps, provide resolution calculations, then close empathetically. This structure must be consistent."},
      {cat:"ss", label:"Soft Skills", text:"Probing in quality/repair cases — on the repair case, probing around the cause and impact could have been sharper. Understanding the full picture (was it in warranty, what did the customer want) before responding makes the resolution more precise and human."}
    ],
    cases:[
      {query:"Escalation/Complaint", score:100, comment:"Good work!!"},
      {query:"POP Enquiry", score:100, comment:"Good work!!"},
      {query:"Escalation/Complaint", score:100, comment:"Good work!!"},
      {query:"POP / Double Payment", score:71, comment:"Customer made a double payment from PhonePe for TC. When the customer reached out as a reminder again, Bhavana failed to empathise for the long wait and delay in revert. AOI — acknowledge the customer's frustration before providing updates."},
      {query:"Refund", score:100, comment:"Good work!!"},
      {query:"Repair / Quality Issue (Earring GWD)", score:71, comment:"Customer's earrings were cut shorter during repair (non-consent). Bhavana replied but the email could have been structured better. AOI — First acknowledge, apologise, explain what went wrong, share further steps, include resolution draft with calculations, then empathetic closure."},
      {query:"Grievance", score:100, comment:"Good Work!!"}
    ],
    paramCaseMap:{ss:[3,5], sol:[], prob:[], tag:[], fu:[]}
  },
  ansari: {
    name:"Ansari_S", initials:"AS", color:"#b8860b",
    cq:90, audits:7, ncf:0, totalErrors:5,
    params:{ss:3, sol:1, prob:0, tag:0, fu:1},
    aois:[
      {cat:"ss", label:"Soft Skills", text:"Empathy when customers have been waiting — on the multi-ticket escalation case, the customer had raised multiple tickets with no response before Ansari replied. Zero empathy was found in the reply. Always acknowledge the customer's frustration explicitly before moving to resolution."},
      {cat:"sol", label:"Solution & Rec.", text:"Proactive call ownership on sensitive quality cases — on the diamond fall case (2023 order), although Ansari shared the correct policy update, no callback was made to personally address the customer's situation. On cases involving long-standing commitments, a personal call to explain the scenario, check availability of the item, and explore LTE/LTB options would have been far more effective than an email alone."},
      {cat:"fu", label:"Follow Up", text:"Follow-up through alternative channels — on the diamond fall case, after sharing the resolution by email, Ansari should have called the customer proactively to close the loop personally. A written response alone is insufficient when a customer has an emotionally loaded, long-standing complaint."}
    ],
    cases:[
      {query:"Escalation / Multiple Tickets", score:57, comment:"Customer raised multiple tickets with no response. Ansari replied but with zero empathy. AOI — Acknowledge the customer's frustration before jumping to resolution."},
      {query:"Escalation/Complaint", score:100, comment:"Good work!!"},
      {query:"Quality Issues / Diamond Fall (2023)", score:71, comment:"Customer's diamond fell off in 2023 and was promised free repair. Policies changed; Ansari shared right details but no callback was made to personally address the customer's frustration. AOI — A call to check if diamond was available, explore LTE/LTB, and offer a human touch would have been ideal."},
      {query:"Random Enquiry", score:100, comment:"Good work!!"},
      {query:"Refund", score:100, comment:"Good work!! AOI — Please call the customer to avoid multiple interaction count. BOD given."},
      {query:"Offers & Discounts", score:100, comment:"Good work!! AOI — Please appreciate the customer for their loyalty towards CL."},
      {query:"Random Enquiry", score:100, comment:"Good work!!"}
    ],
    paramCaseMap:{ss:[0], sol:[2], prob:[], tag:[], fu:[2]}
  },
  preethi: {
    name:"Preethi_V", initials:"PV", color:"#7c3aed",
    cq:95, audits:7, ncf:0, totalErrors:4,
    params:{ss:3, sol:0, prob:0, tag:0, fu:1},
    aois:[
      {cat:"ss", label:"Soft Skills", text:"Empathy and grammar on payment-related cases — on the CTC instalment case, empathy was missed entirely and grammatical errors were found. Should have opened with 'Dear Dr. Abisek' and acknowledged the payment concern warmly before confirming details. Every email must be proofread before sending."},
      {cat:"ss", label:"Soft Skills", text:"Ownership language on quality cases — on the quality grievance case, after the customer shared their invoice and photograph, Preethi should have added a line of full responsibility: 'I would like to reassure you that we take full responsibility for looking into this and will absolutely help you resolve this issue completely.' This language anchors trust."},
      {cat:"fu", label:"Follow Up", text:"Timely follow-up on pending cases — on the delivery status case, Preethi raised a logistics ticket on 1st June and received an update the same day. The customer followed up on 2nd June with no reply until 3rd June. When an internal update has already been received, reply to the customer immediately — do not wait for them to follow up."}
    ],
    cases:[
      {query:"Escalation/Complaint", score:100, comment:"Good work!!"},
      {query:"Refund", score:100, comment:"Good work!!"},
      {query:"Delivery Related", score:100, comment:"Good Work!! (Internal communication found, order delivered same day of communication)"},
      {query:"Random / Enquiry", score:100, comment:"Good work!!"},
      {query:"Grievance / Quality Issues", score:100, comment:"Good Work!! AOI — Add empathetic ownership lines after invoice/photo acknowledgement: 'I would like to reassure you that we take full responsibility...'"},
      {query:"Payment Issues / CTC Instalment", score:57, comment:"Customer's CTC instalment payment not reflecting. Preethi confirmed payment and suggested logout/login. AOI — Empathy missed and grammatical errors found. Should have started with 'Dear Dr. Abisek'."},
      {query:"Delivery Related (Delayed Follow-up)", score:86, comment:"Preethi raised a logistics ticket on 1st June. Support replied same day. Customer followed up on 2nd June — no reply until 3rd June. AOI — Ensure timely follow-ups. Reply immediately when internal update is already in hand."}
    ],
    paramCaseMap:{ss:[5], sol:[], prob:[], tag:[], fu:[6]}
  },
  ghouse: {
    name:"Ghouse_M", initials:"GM", color:"#2563eb",
    cq:62, audits:7, ncf:2, totalErrors:12,
    params:{ss:7, sol:3, prob:0, tag:0, fu:2},
    aois:[
      {cat:"ss", label:"Soft Skills", text:"Empathy when customers state a concern — across multiple audits, empathy was flagged as missing. On the delivery case, after handling the request well, Ghouse should have empathised when the customer mentioned a problem with the post-delivery order. On the discolouration RCA case, the customer was not greeted with acknowledgement before Ghouse launched into information. Empathy must come first, always."},
      {cat:"ss", label:"Soft Skills", text:"Professional conduct on calls — on the discolouration RCA case, Ghouse was heard speaking to someone in the background in a regional language at the start of the call while the customer was on the line. This reflects poorly on professionalism. The customer is the only priority from the moment the call connects."},
      {cat:"sol", label:"Solution & Rec.", text:"Resolution ownership and not deflecting to other teams — on the RCA case, Ghouse redirected ownership to the store team rather than coordinating behind the scenes and owning the resolution. CX agents must own the fix internally and communicate to the customer as one unified voice."},
      {cat:"sol", label:"Solution & Rec.", text:"SLA commitment hygiene — on the RCA case, Ghouse committed to a 'Monday' resolution to the customer. This deadline was missed with no proactive communication. Never commit to a specific deadline unless you can guarantee it. If at risk, notify the customer before the deadline passes — not after they follow up."},
      {cat:"fu", label:"Follow Up", text:"Follow-up after missed calls — on the RCA case, Ghouse attempted a call on 23rd April which went unanswered. No follow-up SMS, email confirmation, or alternative attempt was made. A missed call is not a closed follow-up. Always attempt at least one more touchpoint — an SMS or a brief email — after any unanswered call."}
    ],
    cases:[
      {query:"Escalation / Delayed Revert", score:57, comment:"Customer mistakenly ordered two products. Several reassignments between agents; finally replied by Ghouse. Ghouse's reply lacked empathy — no revert to customer from 8th to 10th June."},
      {query:"Return / Money Back (Silver Bracelet)", score:86, comment:"Customer wanted to return a silver bracelet for their baby. Ghouse helped and raised money-back. AOI — Should have tried retention first with 15-day exchange before processing return."},
      {query:"Delivery / Pre-Event Request", score:86, comment:"Customer requested delivery before a ceremony. Ghouse handled it well with timely follow-up. AOI — Please empathise when customers state a problem with the order post-delivery while giving clarity."},
      {query:"Repair", score:100, comment:"Good work!!"},
      {query:"Payment Issues", score:100, comment:"Good work!!"},
      {query:"Quality Issues / Discolouration (RCA)", score:0, comment:"NCF — RCA case. Customer unhappy with discolouration. Ghouse spoke in regional language during call, gave irrelevant information, committed to Monday resolution but missed it with no update. Offered refund without customer asking. Several critical AOIs around empathy, ownership, SLA hygiene, and professionalism."},
      {query:"Escalation / Promise Breach (RCA)", score:0, comment:"NCF — RCA case. Responded with polished apology but redirected ownership to store team. Committed to Monday resolution, missed it with no customer update. No follow-up after unanswered call attempt. AOI: Own resolution internally, never commit to dates you can't guarantee, treat 7-month-old unresolved cases with urgency."}
    ],
    paramCaseMap:{ss:[0,5,6], sol:[5,6,1], prob:[], tag:[], fu:[5,6]}
  },
  jinal: {
    name:"Jinal_K", initials:"JK", color:"#16a34a",
    cq:55, audits:7, ncf:3, totalErrors:6,
    params:{ss:0, sol:4, prob:0, tag:0, fu:2},
    aois:[
      {cat:"sol", label:"Solution & Rec.", text:"Cover for absent teammates — on the Preethi follow-up case, the customer had replied on 8th June and Preethi was on Long Leave. The ticket was reassigned to Jinal, who should have replied in Preethi's name and closed the case rather than blindly reassigning. When a teammate is unavailable, own the response."},
      {cat:"sol", label:"Solution & Rec.", text:"Retention before refund on defective product cases — on the defective product case, Jinal gave the right initial options (good), but then ignored the replacement option and went straight to 15-day exchange. When the customer said 'return', Jinal assumed money-back and initiated a full refund without confirming. Always confirm with the customer whether they want money-back or exchange before acting."},
      {cat:"fu", label:"Follow Up", text:"Reply when a LinkedIn-escalated customer writes back — on the LTB/LTE NCF case, the customer had already escalated on LinkedIn. The ticket was assigned to Jinal. She failed to reply and blind-reassigned to Ansari despite his shift being over. Jinal should have responded in Ansari's name and closed the ticket. Blind reassignment with no customer reply is an NCF."},
      {cat:"fu", label:"Follow Up", text:"Proactive verification before denying — on the offers & discounts case, Jinal denied a 5% coupon request without first checking the correct profile or verifying whether another coupon existed. BOD was given this time. Going forward, always confirm the customer's profile details before closing a denial."}
    ],
    cases:[
      {query:"Escalation/Complaint", score:100, comment:"Good Work!!"},
      {query:"Escalation / Preethi FU (NCF)", score:0, comment:"NCF — Preethi's follow-up case. Customer had replied on 8th June; Preethi was on Long Leave. Ticket was assigned to Jinal, who failed to reply and blind-reassigned to Ansari. Jinal should have responded in Preethi's name rather than reassigning with no customer reply."},
      {query:"Random / Enquiry", score:100, comment:"Good Work!!"},
      {query:"Quality Issues / Defective Product (NCF)", score:0, comment:"NCF — Customer escalated defective product. Jinal gave options initially (good), but then ignored replacement and pushed straight to 15-day exchange. When customer said 'return', Jinal assumed money-back and initiated full refund without confirming. Failed to retain via replacement or exchange."},
      {query:"Offers & Discounts", score:86, comment:"AOI — Should take additional effort to confirm the profile in which the 5% coupon exists before denying. BOD given to not mark as NCF."},
      {query:"LTB/LTE / LinkedIn Escalation (NCF)", score:0, comment:"NCF — Customer had escalated on LinkedIn. Ticket assigned to Jinal; she failed to reply and blind-reassigned to Ansari despite his shift being over. Jinal should have responded in Ansari's name and closed the case. Blind reassignment with no reply is an NCF."},
      {query:"Pricing Related", score:100, comment:"Good Work!!"}
    ],
    paramCaseMap:{ss:[], sol:[1,3,5], prob:[], tag:[], fu:[1,5]}
  },
  surbhi: {
    name:"Surbhi_A", initials:"SA", color:"#ea580c",
    cq:87, audits:7, ncf:0, totalErrors:8,
    params:{ss:7, sol:1, prob:0, tag:0, fu:0},
    aois:[
      {cat:"ss", label:"Soft Skills", text:"Logical and contextual accuracy in replies — on the RTO refund case, Surbhi used a standard template telling the customer to wait 3–5 business days, completely ignoring that the refund was processed two months prior (April 9). She should have directed the customer to check with their bank using the ARN immediately, not asked them to wait. Always read the full case timeline before responding."},
      {cat:"ss", label:"Soft Skills", text:"Brand language compliance — on the RTO refund case, Surbhi used the word 'funds', which violates CaratLane's brand vocabulary guidelines. Always use the approved brand language. Review the brand language guide and refer to it when drafting emails on financial topics."},
      {cat:"ss", label:"Soft Skills", text:"Personalisation over templates — on the accolade case, Surbhi forgot to mention the employee's name (Mr. Pramod), addressed the customer as 'Dear Bandaru' (awkward without a title), ignored meaningful personal details (mangalsutra purchase, CTC sign-up), and used generic phrases like 'awesome customers like you'. Accolade emails must be warm, personal, and specific to the customer's story."},
      {cat:"sol", label:"Solution & Rec.", text:"Email structure — resolution before context is not brand-appropriate. On the repair case, Surbhi opened with 'a refund of the repair charges is not possible' before establishing context. The correct structure is: greeting → empathy → explanation (warranty expired, wear & tear finding) → resolution options → empathetic closure. Clarity first, negative news last."}
    ],
    cases:[
      {query:"Repair / Warranty Dispute", score:71, comment:"Email structure not at brand level — 'refund is not possible' was placed before explanation. AOI — Acknowledge first, then explain warranty status and wear & tear finding, then offer resolution options."},
      {query:"Refund", score:100, comment:"Good work!!"},
      {query:"Random / Enquiry", score:100, comment:"Good work!!"},
      {query:"Refund / RTO Order (Logical Failure)", score:71, comment:"AOI — Told customer to wait 3–5 days even though refund was processed 2 months prior (April 9). Should have directed customer to bank with ARN immediately. Used the word 'funds' (brand language violation). Failed to empathise with the 6-month delivery failure."},
      {query:"Delivery Related", score:71, comment:"Good work!! AOI — Avoid phrases like 'you do not have to pay anything extra' — sounds pleading rather than owning. Don't ask customers to ignore things. Use right phrases."},
      {query:"Accolade / Thank You Case", score:71, comment:"AOI — Forgot to mention the employee's name (Mr. Pramod). Addressed customer as 'Dear Bandaru' (awkward without title). Ignored meaningful details (mangalsutra, CTC sign-up). Sounded like a copy-paste template. Personal and warm response was needed."},
      {query:"Escalation/Complaint", score:100, comment:"Good work!!"}
    ],
    paramCaseMap:{ss:[0,3,4,5], sol:[0], prob:[], tag:[], fu:[]}
  }
};

const PARAM_LABELS = {ss:"Soft Skills", sol:"Solution & Rec.", prob:"Probing", tag:"Tagging", fu:"Follow Up"};
const PARAM_COLORS = {ss:"#ea580c", sol:"#dc2626", prob:"#2563eb", tag:"#7c3aed", fu:"#16a34a"};
