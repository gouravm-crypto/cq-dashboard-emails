const AGENTS = {
  ansari: {
    name:"Ansari_S", initials:"AS", color:"#b8860b",
    cq:94, audits:7, ncf:0, totalErrors:3,
    params:{ss:0, sol:1, prob:0, tag:0, fu:2},
    aois:[
      {cat:"sol", label:"Solution & Rec.", text:"Inform the customer of the resolution plan — on the exchange case, Ansari raised the right ticket but failed to inform the customer that the order would be proceeding as an exchange. Always close the loop with the customer on what action is being taken."},
      {cat:"fu", label:"Follow Up", text:"Personal follow-up ownership — on the autopay case, a ticket was raised and the support team replied within 10 minutes, but Ansari did not follow up with the customer for 3 days despite committing to a 24–48 hour timeline. Follow through on every commitment made."},
      {cat:"fu", label:"Follow Up", text:"Acknowledge customer feedback as a learning — on refund cases with repeat complaints, always close with a line like 'We take this feedback seriously and will use it as a learning.' It shows ownership and care."}
    ],
    cases:[
      {query:"Grievances / Exchange", score:88, comment:"Customer wanted to exchange or return a product. Ansari raised a support ticket to cancel pickup and convert to exchange. AOI — should have informed the customer that we are proceeding with an exchange, not left them without a clear next step."},
      {query:"Autopay Issue", score:71, comment:"Customer facing autopay issues. Ansari raised a ticket and the team replied within 10 minutes. AOI — no follow-up made the same day or next day despite committing to 24–48 hours. Ansari should have personally followed through."},
      {query:"Delivery Related", score:100, comment:"Good Work!!"},
      {query:"Order Status", score:100, comment:"Good Work!!"},
      {query:"Order Status", score:100, comment:"Good Work!!"},
      {query:"Refund", score:100, comment:"Good Work!! AOI — should acknowledge the customer's feedback as a learning opportunity, especially given their previous interactions. A closing line of ownership adds warmth and reassurance."},
      {query:"Order Status", score:100, comment:"Good Work!!"}
    ],
    paramCaseMap:{ss:[], sol:[0], prob:[], tag:[], fu:[1,5]}
  },
  ghouse: {
    name:"Ghouse_M", initials:"GM", color:"#2563eb",
    cq:93, audits:7, ncf:0, totalErrors:5,
    params:{ss:0, sol:3, prob:2, tag:0, fu:0},
    aois:[
      {cat:"sol", label:"Solution & Rec.", text:"Acknowledge what the customer is actually asking before moving to resolution — on the ring size case, the customer explicitly requested a cash refund. Ghouse provided a replacement solution without acknowledging the refund request first. A mandatory acknowledgement must come before any alternative is pitched."},
      {cat:"prob", label:"Probing", text:"Use the information already available — on the callback case, the customer had shared their registered mobile number. Ghouse replied asking for email and order details that could have been fetched from the mobile number directly. Always check Oneview first."},
      {cat:"sol", label:"Solution & Rec.", text:"Take personalised ownership when a customer has a store complaint — if a customer has already had a poor store experience, route them through backend contact (call or email), not back to the same store. The customer would have been more comfortable speaking to the backend team directly."}
    ],
    cases:[
      {query:"Escalation", score:100, comment:"Good Work!!"},
      {query:"Escalation", score:100, comment:"Good Work!!"},
      {query:"Escalation", score:100, comment:"Good Work!!"},
      {query:"Ring Size / TC Grievance", score:86, comment:"Customer placed order at store using TC at wrong ring size and requested a cash refund. Ghouse provided a replacement without acknowledging the refund request. AOI — acknowledge the customer's request first, then offer the alternative."},
      {query:"Order Status / EDD Missed", score:100, comment:"Customer reached out regarding delayed delivery. Ghouse raised a ticket with logistics and shared the update. Good work."},
      {query:"Store Complaint / Callback", score:67, comment:"Customer wanted a callback regarding order status. Ghouse replied asking for email and order details that were already available via their mobile number. AOI — should have fetched info from Oneview, called the customer directly, and handled the store complaint personally."},
      {query:"Product Enquiry", score:100, comment:"Customer enquired about a product's stock availability. Ghouse addressed the query and raised a callback lead for the pre-sales team. Good work."}
    ],
    paramCaseMap:{ss:[], sol:[3,5,5], prob:[5,5], tag:[], fu:[]}
  },
  jinal: {
    name:"Jinal_K", initials:"JK", color:"#16a34a",
    cq:86, audits:7, ncf:1, totalErrors:2,
    params:{ss:0, sol:0, prob:0, tag:0, fu:2},
    aois:[
      {cat:"fu", label:"Follow Up", text:"Follow up on time — the NCF case involved a Treasure Chest payment query where the customer had shared their bank statement as requested. Jinal failed to reply, turning it into a contactus NCF. Always action pending replies before closing."},
      {cat:"fu", label:"Follow Up", text:"Language quality — replace 'repeat customer' with 'loyal customer'. This small shift in phrasing reflects warmth and recognition of the customer relationship. Language choice matters in every outbound email."}
    ],
    cases:[
      {query:"Escalation", score:100, comment:"Good work!!"},
      {query:"Treasure Chest Payment", score:0, comment:"NCF — Customer reached out regarding a Treasure Chest payment of ₹1,000. Jinal asked for bank statement, customer shared it, but Jinal failed to reply. Since it was a ContactUs case, this is an NCF. AOI — always follow up on pending replies before ticket is closed."},
      {query:"Grievance", score:100, comment:"Good work!! AOI — replace 'repeat customer' with 'loyal customer'. A small but meaningful shift in language that adds warmth."},
      {query:"Escalation", score:100, comment:"Good Work!!"},
      {query:"Escalation", score:100, comment:"Good Work!!"},
      {query:"Escalation", score:100, comment:"Good Work!!"},
      {query:"15 Days Money Back", score:100, comment:"Good Work!!"}
    ],
    paramCaseMap:{ss:[], sol:[], prob:[], tag:[], fu:[1,2]}
  },
  preethi: {
    name:"Preethi_V", initials:"PV", color:"#7c3aed",
    cq:98, audits:7, ncf:0, totalErrors:2,
    params:{ss:0, sol:0, prob:0, tag:0, fu:2},
    aois:[
      {cat:"fu", label:"Follow Up", text:"Follow up on time — one audit had a good resolution but the follow-up was delayed. Timely follow-through after resolution is as important as the resolution itself. Don't leave the customer waiting without an update."},
      {cat:"sol", label:"Solution & Rec.", text:"Process completeness — when Priority Request is disabled, raise an Order Status SR ticket proactively. Don't leave the customer without an alternative escalation path. Know your workarounds."}
    ],
    cases:[
      {query:"Escalation", score:100, comment:"Good Work!!"},
      {query:"Escalation", score:86, comment:"Good Work!! AOI — follow up on time. Resolution was right, but the follow-up was delayed."},
      {query:"Grievance", score:100, comment:"Good Work!!"},
      {query:"Escalation", score:100, comment:"Good Work!!"},
      {query:"Escalation", score:100, comment:"Good Work!!"},
      {query:"Escalation", score:100, comment:"Good Work!!"},
      {query:"Order Status / Priority", score:100, comment:"Good Work!! AOI — when Priority Request is disabled, should raise an Order Status SR ticket proactively to keep the resolution on track."}
    ],
    paramCaseMap:{ss:[], sol:[6], prob:[], tag:[], fu:[1]}
  },
  safura: {
    name:"Safura_B", initials:"SB", color:"#0891b2",
    cq:92, audits:5, ncf:0, totalErrors:2,
    aois:[
      {cat:"ss", label:"Soft Skills", text:"Empathy in difficult situations — across multiple audits, empathy was flagged as missing. When a customer has faced repeated issues (e.g., multiple repairs within a year), acknowledge their frustration before providing information. Statements like 'I completely understand how disappointing this must be' go a long way."},
      {cat:"ss", label:"Soft Skills", text:"Terminology accuracy — it's xCLusive points, not 'exclusive points'. Details like brand-specific terminology matter and build trust with customers. Always use the correct product and program names."}
    ],
    params:{ss:2, sol:0, prob:0, tag:0, fu:0},
    cases:[
      {query:"Repair / Product Quality", score:80, comment:"Customer unhappy about multiple repair issues within a year. Safura responded with relevant information. AOI — could have empathised better and explored alternative resolutions. Good start for someone new to the system."},
      {query:"General / Ticket Follow-up", score:100, comment:"Good Work!! AOI — when a ticket gets an update within 2 hours, drop a follow-up email proactively. Don't wait for the customer to ask."},
      {query:"xCLusive Points Enquiry", score:80, comment:"AOI — empathy missing in the response. Also, it is xCLusive points, not 'exclusive points'. Please use the correct brand terminology."},
      {query:"Escalation", score:100, comment:"Good Work!!"},
      {query:"Escalation / Empathy", score:100, comment:"Good Work!! AOI — empathy missing. Always acknowledge the customer's situation before moving to resolution."}
    ],
    paramCaseMap:{ss:[0,2,4], sol:[], prob:[], tag:[], fu:[]}
  },
  surbhi: {
    name:"Surbhi_A", initials:"SA", color:"#ea580c",
    cq:63, audits:7, ncf:2, totalErrors:12,
    params:{ss:5, sol:5, prob:0, tag:0, fu:2},
    aois:[
      {cat:"ss", label:"Soft Skills", text:"Language and AI use — avoid phrases like 'completely validate your extreme frustration'. We cannot validate a customer's frustration. Also, multiple audits indicate over-reliance on AI-generated responses — always personalise and proofread before sending."},
      {cat:"sol", label:"Solution & Rec.", text:"Resolution accuracy and ownership — the Digi Gold/POP NCF was a significant service failure. Surbhi gave misleading resolution without clarifying the actual valuation terms, implicitly validating a demand that could not be met. Always understand the full context before replying on financial or policy-heavy cases."},
      {cat:"fu", label:"Follow Up", text:"Follow-up commitment — on the Order Status NCF, the customer followed up multiple times between 2nd May and 8th May with no reply. A private note was added but the ticket was closed without any customer reply. Every customer message needs a response. Never close without replying."}
    ],
    cases:[
      {query:"General", score:100, comment:"Good Work!!"},
      {query:"Repair Delay / Frustration", score:50, comment:"Customer frustrated about repair delay. Surbhi reached out internally for update. AOI — avoid 'completely validate your extreme frustration'. Also failed to build rapport and check for further assistance. Multiple feedbacks suggest over-reliance on AI-generated text."},
      {query:"Grievance / CS Inbound", score:100, comment:"Good Work!! AOI — should also acknowledge the concern about CS Inbound Calls not getting connected. Overall email quality needs to improve."},
      {query:"Store Order Cancelled / Refund", score:100, comment:"Customer's store order was cancelled and refund initiated without notice. Surbhi apologised and escalated to RM and Store. Good handling."},
      {query:"Store Drop / Refund vs Exchange", score:89, comment:"Customer dropped product at store expecting refund, but store raised exchange. Surbhi assisted with exchange first, then refund on re-confirmation. AOI — customer had stated refund from the first email. Should have read the initial request more carefully and been proactive."},
      {query:"Digi Gold / POP", score:0, comment:"NCF — Significant service failure. Customer disputed ₹12,000 capital loss on Digi Gold. Surbhi gave a vague refund reply without clarifying actual valuation terms, escalating a high-risk legal threat. AOI — on policy-heavy financial cases, understand fully before replying."},
      {query:"Order Status / Follow-up NCF", score:0, comment:"NCF — Customer followed up multiple times from 2nd May to 8th May. Surbhi added a private note and closed the ticket without replying to the customer. AOI — every customer message requires a response. Never close a ticket without replying."}
    ],
    paramCaseMap:{ss:[1,2,3], sol:[1,4,5,6], prob:[], tag:[], fu:[5,6]}
  }
};

const PARAM_LABELS = {ss:"Soft Skills", sol:"Solution & Rec.", prob:"Probing", tag:"Tagging", fu:"Follow Up"};
const PARAM_COLORS = {ss:"#ea580c", sol:"#dc2626", prob:"#2563eb", tag:"#7c3aed", fu:"#16a34a"};
