const AGENTS = {
  ansari: {
    name:"Ansari_S", initials:"AS", color:"#b8860b",
    cq:90, audits:7, ncf:0, totalErrors:7,
    params:{ss:5, sol:0, prob:2, tag:1, fu:0},
    aois:[
      {cat:"ss", label:"Soft Skills", text:"Empathy in negative sentiment situations — missed connecting with the customer's frustration and acknowledging occasions before jumping into the resolution."},
      {cat:"ss", label:"Soft Skills", text:"Use ownership-driven phrases — 'we understand the urgency and are prioritising this' builds more confidence than a neutral acknowledgement."},
      {cat:"prob", label:"Probing", text:"Probing should lead to resolution — ask questions that help close the issue completely in one go, not just document the concern."}
    ],
    cases:[
      {query:"Pricing Related", score:57, comment:"Customer questioned about the making charges change. JC was not aware about new policy change. AOI — JC should be knowledgeable about this and frame replies better."},
      {query:"Invoice", score:71, comment:"Customer reported a discrepancy in invoice. JC confirmed and notified the store. AOI — JC should explain the GWD pointer and how the invoice is made. Educating the customer on this via email helps them refer in future."},
      {query:"GWD", score:100, comment:"GWD Query. Well handled."},
      {query:"Payment Issues", score:90, comment:"Customer reached out to confirm the payment made via Gpay. Ansari raised a ticket and followed up. Should have thanked the customer for sharing payment details and screenshot."},
      {query:"Pricing Related", score:94, comment:"Customer was irate due to lack of understanding from store. Ansari spoke and understood concerns. Order was a store order but tagged under online. Overall — Good Email!"},
      {query:"Digi Gold", score:88, comment:"Customer looking for Digi Gold purchase status. Ansari confirmed credit to account. Could have guided the customer on where to check balances and what the available balance is."},
      {query:"Order Status", score:100, comment:"Order status query handled well. Gold coin order UC was cleared. Good work."}
    ],
    paramCaseMap:{ss:[0,1,3,4], sol:[], prob:[1,5], tag:[4], fu:[]}
  },
  jinal: {
    name:"Jinal_K", initials:"JK", color:"#16a34a",
    cq:88, audits:7, ncf:0, totalErrors:9,
    params:{ss:1, sol:4, prob:1, tag:0, fu:3},
    aois:[
      {cat:"sol", label:"Solution", text:"First replies need to be more complete — include GWD details, bank update steps, and next actions upfront to avoid back-and-forth with the customer."},
      {cat:"ss", label:"Soft Skills", text:"Tone in written communication — avoid monotonous or templated phrasing; use warmer, assurance-driven language specific to the customer's situation."},
      {cat:"prob", label:"Probing", text:"One audit had an irrelevant first reply — ensure the response directly addresses what the customer asked before anything else."}
    ],
    cases:[
      {query:"Replacement", score:86, comment:"Should have used better phrases for assurance and empathy."},
      {query:"Digi Gold", score:100, comment:"Customer reached out regarding Digi Gold payment not yet credited. JC gave the right info."},
      {query:"Order Status", score:100, comment:"Well Done!"},
      {query:"Order Cancellation", score:80, comment:"Online order delayed due to ERP. Jinal assisted with re-attempt and refund. AOI — could have proactively informed about GWD and invoice refund in two parts, and asked customer to update bank details on app prior."},
      {query:"Order Status", score:100, comment:"Order status query, required action taken. Good work."},
      {query:"Order", score:50, comment:"Irrelevant first reply and delayed follow up. Should have responded to what was asked first."},
      {query:"Order", score:100, comment:"Well Done!"}
    ],
    paramCaseMap:{ss:[0], sol:[3,5], prob:[5], tag:[], fu:[3,5,6]}
  },
  ghouse: {
    name:"Ghouse_M", initials:"GM", color:"#2563eb",
    cq:89, audits:7, ncf:0, totalErrors:8,
    params:{ss:1, sol:3, prob:3, tag:1, fu:0},
    aois:[
      {cat:"prob", label:"Probing", text:"Probing should connect directly to the resolution path — missed asking the right clarifying questions before replying in 2 audits."},
      {cat:"ss", label:"Soft Skills", text:"Phrase quality — use language that conveys care and urgency rather than neutral statements."},
      {cat:"sol", label:"Solution", text:"Policy awareness gap — making charges change was recent and training is yet to be scheduled. Partially attributed — JC to stay updated as and when policy communications are shared."}
    ],
    cases:[
      {query:"Pricing Related", score:71, comment:"Customer questioned about making charges change. The policy change was recent and training is yet to be scheduled — error is partially attributed to JC and partially to the training gap. Score revised to 71%."},
      {query:"Invoice", score:71, comment:"Customer reported invoice discrepancy. JC confirmed and notified store. AOI — JC should explain the GWD pointer and how invoice is made."},
      {query:"Refund", score:88, comment:"Customer had double payment. Consultant should have used better phrases like 'while we understand the refund is much awaited, we request you to kindly wait till 7-10 working days at maximum'."},
      {query:"Order Status", score:94, comment:"Good Job! Just 1 AOI — tagged as manufacturing delay, it was transit delay."},
      {query:"Order", score:100, comment:"Well done!"},
      {query:"POP", score:100, comment:"Good work."},
      {query:"Order Status", score:100, comment:"Customer reached out for status on delay. Ghouse provided the updates. Good email."}
    ],
    paramCaseMap:{ss:[2], sol:[0,1,2], prob:[0,1,3], tag:[3], fu:[]}
  },
  preethi: {
    name:"Preethi_V", initials:"PV", color:"#7c3aed",
    cq:87, audits:7, ncf:0, totalErrors:10,
    params:{ss:0, sol:5, prob:1, tag:4, fu:0},
    aois:[
      {cat:"sol", label:"Solution", text:"Always pitch exchange before raising a Money Back — retention should be the first step, MB only when the customer insists after being offered an alternative."},
      {cat:"tag", label:"Tagging", text:"Tagging errors across multiple audits — store orders logged as online, incorrect 2nd-level dispositions selected. Check order source and issue type before closing every ticket."},
      {cat:"sol", label:"Solution", text:"Proactive information sharing missed — GWD, invoice process, and store complaint routing should be covered in the same email, not left for the customer to follow up on."}
    ],
    cases:[
      {query:"15 Days Money Back", score:86, comment:"Customer panicked since they missed the 15-day return period. JC checked and raised moneyback. AOI — Always pitch for exchange first, a confirmation was missed and raised for moneyback straight away."},
      {query:"Order Related", score:75, comment:"Customer reached out for assistance with order and ETAs. Sharing the ETA or a follow-up ETA was missed in the first response."},
      {query:"Order Status", score:94, comment:"Customer was unhappy with store handling. Preethi took required action. AOI — Failed to tag it under the right category."},
      {query:"POP", score:90, comment:"Customer complained about silver coin orders. Preethi handled well but failed to inform we shall be in touch with the store."},
      {query:"Order", score:100, comment:"Well Done!"},
      {query:"Pickup Delayed", score:100, comment:"Customer's order was not getting picked up. Preethi raised required tickets and assisted. Good Email."},
      {query:"Pricing Related", score:63, comment:"AOI — Incorrect tagging, store order tagged as online. Could have proactively informed about GWD."}
    ],
    paramCaseMap:{ss:[], sol:[0,1,3,6], prob:[6], tag:[2,3,4,6], fu:[]}
  },
  surbhi: {
    name:"Surbhi_A", initials:"SA", color:"#ea580c",
    cq:76, audits:7, ncf:0, totalErrors:18,
    params:{ss:4, sol:4, prob:5, tag:2, fu:2},
    aois:[
      {cat:"sol", label:"Solution", text:"Ownership on resolutions — missed walking the customer through the full repair process (timelines, charges, what to expect at store) before routing them out. Take the lead."},
      {cat:"ss", label:"Soft Skills", text:"Proof-read before sending — one audit had a logically incorrect sentence that would have confused the customer. Every outbound email needs a quick review."},
      {cat:"prob", label:"Probing", text:"Incomplete first responses — failed to proactively inform the customer about repair timelines and process; customer was routed to store without adequate context."}
    ],
    cases:[
      {query:"Order", score:100, comment:"Good work!"},
      {query:"Email Change", score:78, comment:"Customer wanted to change email. Although query resolved, JC used an irrelevant sentence. AOI — Proof read before sending."},
      {query:"Repair", score:38, comment:"Customer reached out for product quality issues and repair charges. Consultant should have asked why customer did not reach out earlier. Incorrect resolutions."},
      {query:"Refund", score:100, comment:"Good Work."},
      {query:"Order Related", score:75, comment:"Customer had reached out to update the pincode. AOI — Missed follow up. Failed to email/WhatsApp as per commitment."},
      {query:"Order Status", score:100, comment:"Customer reached out for delivery confirmation. Tickets raised. Well Done!"},
      {query:"Repair Request", score:44, comment:"Customer lost stopper of earrings and wanted repair. Consultant assisted but failed to proactively inform repair process. Ticket closed as product quality instead of repair request."}
    ],
    paramCaseMap:{ss:[1,2,6], sol:[2,6], prob:[1,2,5,6], tag:[4,6], fu:[4,6]}
  }
};

const PARAM_LABELS = {ss:"Soft Skills", sol:"Solution & Rec.", prob:"Probing", tag:"Tagging", fu:"Follow Up"};
const PARAM_COLORS = {ss:"#ea580c", sol:"#dc2626", prob:"#2563eb", tag:"#7c3aed", fu:"#16a34a"};
