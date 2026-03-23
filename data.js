const AGENTS = {
  ansari: {
    name:"Ansari_S", initials:"AS", color:"#b8860b",
    cq:90, audits:7, ncf:0, totalErrors:5,
    params:{ss:2, sol:0, prob:2, tag:1, fu:0},
    aois:[
      {cat:"ss", label:"Soft Skills", text:"Empathy in negative sentiment situations — missed connecting with the customer's frustration and acknowledging occasions before moving to resolution."},
      {cat:"prob", label:"Probing", text:"Resolution-linked probing — should have detailed all steps (bank details, app process) in the first reply itself to avoid back-and-forth interactions."},
      {cat:"tag", label:"Tagging", text:"Tagging accuracy — one case tagged under wrong category. Always verify order source and correct disposition before closing."}
    ],
    cases:[
      {query:"LTB/LTE", score:89, comment:"Customer wanted to return a product under LTB. JC assisted. AOI — should have detailed the steps in first reply itself: bank details on app, avoiding extra interaction count."},
      {query:"GWD", score:100, comment:"GWD Query. Well handled."},
      {query:"Order Status", score:69, comment:"Customer reached out regarding order delay. Executive checked and informed. AOI — failed to empathise better as the sentiment was negative; occasion was missed."},
      {query:"Payment Issues", score:90, comment:"Customer reached out to confirm Gpay payment not reflecting. Ansari raised a ticket and followed up to confirm. Good follow through."},
      {query:"Pricing Related", score:94, comment:"Customer was iRate due to lack of understanding from Store. Ansari spoke, understood concerns, apologised and shared details. Good email — tagged correctly."},
      {query:"Order Status", score:100, comment:"Customer was not available to share OTP during delivery. Re-attempted. Order now stands delivered. Good job."},
      {query:"Digi Gold", score:88, comment:"Customer looking for Digi Gold purchase status. Ansari confirmed credit to account. AOI — could have guided the customer on where to check balances and available balance."}
    ],
    paramCaseMap:{ss:[2,3], sol:[], prob:[0,6], tag:[4], fu:[]}
  },
  jinal: {
    name:"Jinal_K", initials:"JK", color:"#16a34a",
    cq:90, audits:7, ncf:0, totalErrors:4,
    params:{ss:0, sol:2, prob:1, tag:0, fu:1},
    aois:[
      {cat:"sol", label:"Solution", text:"Complete first replies — one case had an irrelevant first reply. Always directly address what the customer asked before anything else."},
      {cat:"sol", label:"Solution", text:"Proactive information sharing — could have informed about GWD, invoice refund process, and asked customer to update bank details on app prior to re-attempt."},
      {cat:"fu", label:"Follow Up", text:"Delayed follow up — one case had an irrelevant first reply followed by a delayed follow up. Both count as separate AOIs."}
    ],
    cases:[
      {query:"Replacement", score:100, comment:"Good Work. AOI — Please take ownership since cx was unhappy with other channels. A line like 'I will ensure this gets resolved for you' builds confidence."},
      {query:"Digi Gold", score:100, comment:"Customer reached out regarding Digi Gold payment not yet credited. JC gave the right info. Well handled."},
      {query:"General", score:100, comment:"Well Done!"},
      {query:"General", score:50, comment:"Irrelevant first reply and delayed follow up. AOI — always respond directly to what the customer asked first."},
      {query:"General", score:100, comment:"Well Done!"},
      {query:"Order Cancellation", score:80, comment:"Online order delayed due to ERP. Jinal assisted with re-attempt and refund. AOI — could have proactively informed about GWD and invoice refund in two parts, and asked customer to update bank details on app prior."},
      {query:"Order Status", score:100, comment:"Gold coin order placed but UC was not cleared. Required action taken. Order now stands approved. Good work."}
    ],
    paramCaseMap:{ss:[], sol:[3,5], prob:[5], tag:[], fu:[3]}
  },
  ghouse: {
    name:"Ghouse_M", initials:"GM", color:"#2563eb",
    cq:89, audits:7, ncf:0, totalErrors:5,
    params:{ss:1, sol:2, prob:1, tag:1, fu:0},
    aois:[
      {cat:"sol", label:"Solution", text:"Policy awareness — making charges change was recent and training is yet to be scheduled. Error is partially attributed to JC and partially to the training gap. Stay updated as policy communications are shared."},
      {cat:"prob", label:"Probing", text:"Resolution-linked probing — should have asked the right clarifying questions before replying to ensure complete resolution in one go."},
      {cat:"ss", label:"Soft Skills", text:"Phrase quality — use language that conveys care and urgency, e.g. 'while we understand the refund is much awaited, we request you to kindly wait till 7-10 working days at maximum'."}
    ],
    cases:[
      {query:"Pricing Related", score:71, comment:"Customer questioned about making charges change. The policy change was recent and training is yet to be scheduled — error is partially attributed to JC and partially to the training gap. Score revised to 71%."},
      {query:"Invoice", score:71, comment:"Customer reported invoice discrepancy. JC confirmed and notified store. AOI — should explain the GWD pointer and how invoice is made. Educating the customer helps them refer in future."},
      {query:"Refund", score:88, comment:"Customer had double payment at store. Auto refund processed. AOI — consultant should have used better phrases like 'while we understand the refund is much awaited, we request you to kindly wait till 7-10 working days at maximum'."},
      {query:"Order Status", score:94, comment:"Good Job! Just 1 AOI — tagged as manufacturing delay, it was transit delay."},
      {query:"General", score:100, comment:"Well done!"},
      {query:"POP", score:100, comment:"Good work."},
      {query:"Order Status", score:100, comment:"Customer reached out for status on delay. Ghouse provided the updates. Good email."}
    ],
    paramCaseMap:{ss:[2], sol:[0,1], prob:[1], tag:[3], fu:[]}
  },
  preethi: {
    name:"Preethi_V", initials:"PV", color:"#7c3aed",
    cq:87, audits:7, ncf:0, totalErrors:7,
    params:{ss:0, sol:4, prob:1, tag:2, fu:0},
    aois:[
      {cat:"sol", label:"Solution", text:"Always pitch exchange before raising a Money Back — retention should be the first step. MB only when the customer insists after being offered an alternative."},
      {cat:"tag", label:"Tagging", text:"Tagging errors across multiple audits — incorrect 2nd-level dispositions, store complaints not acknowledged correctly. Always verify before closing."},
      {cat:"sol", label:"Solution", text:"Proactive information sharing missed — ETA, GWD, store complaint routing should all be covered in the same email, not left for the customer to follow up on."}
    ],
    cases:[
      {query:"15 Days Money Back", score:86, comment:"Customer panicked since they missed the 15-day return period. JC confirmed order is under 15 days and raised moneyback. AOI — always pitch for exchange first before raising MB."},
      {query:"General", score:100, comment:"Well Done!"},
      {query:"Order Related", score:75, comment:"Customer reached out for assistance with order and ETAs. Sharing the ETA or a follow-up ETA was missed in the first response. Overall email could have been better."},
      {query:"Order Status", score:94, comment:"Customer was unhappy with store handling. Preethi took required action. AOI — failed to tag it under the right category."},
      {query:"POP", score:90, comment:"Customer complained about silver coin orders. Preethi handled well but failed to inform we shall be in touch with the store. Store complaint should be acknowledged."},
      {query:"Pickup Delayed", score:100, comment:"Customer's order was not getting picked up. Preethi raised required tickets and assisted. Good Email."},
      {query:"Pricing Related", score:63, comment:"Customer placed order at store, price breakup shared. Making charges had changed. AOI — incorrect tagging (store order), could have proactively informed about GWD and price change context."}
    ],
    paramCaseMap:{ss:[], sol:[0,2,4,6], prob:[6], tag:[3,6], fu:[]}
  },
  surbhi: {
    name:"Surbhi_A", initials:"SA", color:"#ea580c",
    cq:76, audits:7, ncf:0, totalErrors:10,
    params:{ss:2, sol:3, prob:3, tag:1, fu:1},
    aois:[
      {cat:"sol", label:"Solution", text:"Ownership on resolutions — missed walking the customer through the full repair process (timelines, charges, what to expect at store) before routing them out. Take the lead."},
      {cat:"prob", label:"Probing", text:"Probing before resolution — one repair case had no probing on why the customer hadn't reached out earlier, leading to incomplete resolution. Ask before you answer."},
      {cat:"ss", label:"Soft Skills", text:"Proof-read before sending — one audit had a logically incorrect sentence that would have confused the customer. Every outbound email needs a quick review."}
    ],
    cases:[
      {query:"General", score:100, comment:"Good work!"},
      {query:"General", score:78, comment:"Customer wanted to change email. Query resolved but JC used an irrelevant sentence. AOI — Proof read before sending."},
      {query:"Repair", score:38, comment:"Customer reached out for product quality issues and repair charges within 6 months. Consultant should have asked why cx didn't reach out earlier. Incorrect resolutions given."},
      {query:"Refund", score:100, comment:"Good Work."},
      {query:"Order Related", score:75, comment:"Customer reached out to update the pincode on their order. AOI — missed follow up as per commitment."},
      {query:"General", score:44, comment:"Customer lost stopper of earrings and wanted repair. Consultant assisted and guided to store but failed to proactively inform repair process. Ticket closed as product quality instead of repair request."},
      {query:"Order Status", score:100, comment:"Customer reached out for delivery confirmation. Required tickets raised. Good work."}
    ],
    paramCaseMap:{ss:[1,2], sol:[1,2,5], prob:[1,2,4], tag:[5], fu:[4]}
  }
};

const PARAM_LABELS = {ss:"Soft Skills", sol:"Solution & Rec.", prob:"Probing", tag:"Tagging", fu:"Follow Up"};
const PARAM_COLORS = {ss:"#ea580c", sol:"#dc2626", prob:"#2563eb", tag:"#7c3aed", fu:"#16a34a"};
