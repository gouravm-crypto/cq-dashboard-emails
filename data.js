const AGENTS = {
  jinal: {
    name:"Jinal_K", initials:"JK", color:"#16a34a",
    cq:94, audits:12, ncf:0, totalErrors:5,
    params:{ss:4, sol:1, prob:0, tag:0, fu:0},
    aois:[
      {cat:"ss", label:"Soft Skills", text:"Lead with empathy before information. On the customer service delay call and the refund delay case, Jinal gave the correct factual answer but did not acknowledge the customer's frustration or long wait first. Always acknowledge how the customer feels before moving into details."},
      {cat:"sol", label:"Solution & Rec.", text:"Offer a real solution, not just a technically correct one. On the broken product case, the customer was already upset about having to drive 30km back to the store. Telling them to make the trip anyway defeats the purpose of acknowledging their trouble. Coordinate a home pickup or replacement delivery with the store instead."}
    ],
    cases:[
      {query:"OGE Policy", score:100, comment:"Good Work!! Overall email can be structured better. Will discuss in the feedback session."},
      {query:"Escalation/Complaint", score:100, comment:"Good Work!! Need to structure emails better, using clear points."},
      {query:"Escalation/Complaint", score:100, comment:"Good Work!! Needs better structuring and grammar. BOD given."},
      {query:"Escalation/Complaint", score:100, comment:"Good Work!!"},
      {query:"Escalation/Complaint", score:100, comment:"Good work!!"},
      {query:"Escalation/Complaint", score:100, comment:"Good work!! AOI: Call the customer going forward to avoid multiple email interactions."},
      {query:"Customer Service Delay (IB Call)", score:83, comment:"Failed to acknowledge the customer's concern about the customer service delay on the inbound call. The rest of the email was good."},
      {query:"Product Quality", score:63, comment:"Jinal missed the mark on problem solving. The customer was upset about receiving a broken product and having to drive 30km back to the store. Instead of coordinating a home pickup or replacement delivery with the store, Jinal told the customer to make the drive anyway. Acknowledging the inconvenience does not help if the customer still has to make the trip."},
      {query:"Order Status", score:100, comment:"Good work!! AOI: Start using PVT notes to log ticket IDs and internal communication with Logistics or other teams."},
      {query:"Refund Delay", score:88, comment:"Jinal shared the ARN number quickly but lacked empathy. The customer had been waiting over 45 days for their refund and was understandably worried. Should have acknowledged that before pointing them to their bank."},
      {query:"Feedback", score:90, comment:"Good work!! AOI: The customer signed off as 'Dr. Pradhan', but Jinal addressed them simply as 'Pradhan'. Using the correct title matters even more when the customer is already unhappy about a lack of respect."},
      {query:"Gifted Order Exchange", score:100, comment:"Good work!!"}
    ],
    paramCaseMap:{ss:[6,7,9,10], sol:[7], prob:[], tag:[], fu:[]}
  },
  bhavana: {
    name:"Bhavana_J", initials:"BJ", color:"#0d9488",
    cq:92, audits:12, ncf:0, totalErrors:7,
    params:{ss:5, sol:1, prob:0, tag:0, fu:1},
    aois:[
      {cat:"ss", label:"Soft Skills", text:"Avoid interrupting the customer, and lead with empathy. On the sentimental buyback cancellation case, Bhavana interrupted the customer multiple times and did not close the call properly on Ameyo. On the order status case, both the original and follow up emails lacked structure and empathy, especially since the order had been cancelled. Let the customer finish speaking, and open every reply with empathy before getting into the process."},
      {cat:"ss", label:"Soft Skills", text:"Give a clear timeframe instead of vague wording. The phrase 'allow us little time' was flagged as unclear. Always give a specific expected timeframe, such as '24 to 48 hours', instead of soft, open ended language."},
      {cat:"sol", label:"Solution & Rec.", text:"Take ownership instead of relying on what another team said. On the repair versus refund case, the store and internal team had given the customer incorrect information, but Bhavana did not check the internal ticket herself before replying, and passed the case back to the store instead of converting it to a money back refund. Always verify internally before repeating what another team told the customer, and take ownership of the resolution."},
      {cat:"fu", label:"Follow Up", text:"Keep tickets open until they are truly resolved. A ticket was closed too early instead of being kept pending with a scheduled follow up. Do not close a case until the customer's issue is actually resolved."}
    ],
    cases:[
      {query:"Order Status", score:86, comment:"Good work. Avoid saying 'allow us little time'. Share an expected timeframe with the customer instead."},
      {query:"Buyback Cancellation Request", score:71, comment:"Customer wanted to cancel an already refunded buyback and pay back to get the order again, for sentimental reasons. Bhavana tried her best but interrupted the customer multiple times and did not close the call on Ameyo."},
      {query:"Escalation/Complaint", score:88, comment:"BOD given. The ticket should have stayed pending rather than being closed. Keep a timely follow up without delay."},
      {query:"Escalation/Complaint", score:100, comment:"Good Work!!"},
      {query:"Escalation/Complaint", score:100, comment:"Good Work!!"},
      {query:"Order Status", score:75, comment:"Email lacked structure. Needed to lead with empathy and a clear timeframe, especially since the order was cancelled. The follow up email had the same issue."},
      {query:"Escalation/Complaint", score:100, comment:"Good work!! AOI: Share the expected delivery date too, since it was scheduled for manual dispatch."},
      {query:"Escalation/Complaint", score:100, comment:"Good work!!"},
      {query:"General Purchase", score:110, comment:"Good work!!"},
      {query:"Escalation/Complaint", score:100, comment:"Revised BOD audit. Good work."},
      {query:"Escalation/Complaint", score:100, comment:"Revised BOD audit. Good work."},
      {query:"Quality Issue / Repair vs Refund", score:70, comment:"Reaudited, BOD given for NCF. Bhavana did not investigate the issue fully and missed the chance to resolve it right away. The store and internal team had given the customer incorrect information, forcing a repair process instead of a refund. Checking the internal ticket would have shown that a money back refund was possible. She should have taken full ownership and converted the ticket herself, instead of giving a vague answer and passing it back to the store."}
    ],
    paramCaseMap:{ss:[0,1,5,11], sol:[11], prob:[], tag:[], fu:[2]}
  },
  safura: {
    name:"Safura_B", initials:"SB", color:"#0891b2",
    cq:89, audits:12, ncf:0, totalErrors:10,
    params:{ss:3, sol:2, prob:3, tag:0, fu:2},
    aois:[
      {cat:"ss", label:"Soft Skills", text:"Share complete information on refund cases. On the price difference refund case for Order M6FC1011, Safura confirmed a refund was processed but did not proactively share the bank processing timeline or a clear transaction reference. She also did not warmly acknowledge the customer's follow up update. Always give the complete picture upfront."},
      {cat:"ss", label:"Soft Skills", text:"Improve email structure, grammar, and directness. Structure and grammar issues were flagged on the refund case, and on the product quality case Safura avoided a fair technical question instead of giving a clear, educational answer, while also reusing the same paragraph across replies. Proofread every email, answer the actual question asked, and vary the phrasing used."},
      {cat:"prob", label:"Probing", text:"Go the extra mile when probing for what the customer really needs. On the store complaint and offers and discounts cases, the base resolution was correct, but the chance to personalise the experience, such as offering a scheduled store visit or a sales callback for a better discount, was missed. Probe for what would genuinely delight the customer, not just what closes the ticket."},
      {cat:"fu", label:"Follow Up", text:"Reply within the committed timeframe. A day's delay was flagged on the product quality case, and a smaller delay on another audit. Reply within the promised window and update the customer proactively instead of waiting for them to follow up."}
    ],
    cases:[
      {query:"Refund / Price Difference", score:63, comment:"Customer requested a refund of Rs. 4,482 for a price difference on Order M6FC1011. Safura confirmed a refund was processed but did not proactively share the bank timeline of 5 to 7 working days or a clear transaction reference. AOI: Give the full picture upfront, and warmly acknowledge the customer's follow up update instead of just restating information."},
      {query:"Escalation/Complaint", score:100, comment:"Good Work!!"},
      {query:"Product Quality", score:100, comment:"Good Work!!"},
      {query:"Escalation/Complaint", score:100, comment:"Good work!!"},
      {query:"Escalation/Complaint", score:100, comment:"Good work!!"},
      {query:"Escalation/Complaint", score:70, comment:"Email lacked structure and had grammatical errors. AOI: Proofread every email and follow the proper sequence before sending."},
      {query:"Escalation/Complaint", score:100, comment:"Good work on redirecting the customer to a phone call instead of WhatsApp or Freshchat."},
      {query:"Offers & Discounts", score:90, comment:"Good work!! AOI: Please forward such emails and arrange a sales callback to pitch the best possible discount. We had a 100% off on making charges that could have been offered as an alternative. BOD given since the agent is new."},
      {query:"Product Quality", score:70, comment:"Safura failed to properly answer why the gold discoloured only around the diamonds. The tiny gaps around the diamond settings trap moisture, causing that area to oxidise faster. She deflected the question to a store visit instead, took over a day to reply, made a grammar mistake, and reused the same paragraph across replies."},
      {query:"Order Status", score:100, comment:"Good Work!!"},
      {query:"Customer Service Complaint at Store", score:88, comment:"Good work!! AOI: Could have gone the extra mile by offering to schedule a personalised store visit at a time that works for the customer."},
      {query:"Escalation/Complaint", score:88, comment:"Revised audit. BOD given considering the agent is new and this was her first mistake. AOI: Reply promptly to avoid delaying the follow up."}
    ],
    paramCaseMap:{ss:[0,5,8], sol:[0,5], prob:[5,7,10], tag:[], fu:[8,11]}
  },
  ansari: {
    name:"Ansari_S", initials:"AS", color:"#b8860b",
    cq:83, audits:6, ncf:1, totalErrors:3,
    params:{ss:0, sol:1, prob:1, tag:1, fu:0},
    aois:[
      {cat:"sol", label:"Solution & Rec.", text:"Double check ticket and order details before merging. Ansari merged an incorrect ticket and replied to what looked like the same customer, but on a different order ID, which caused an NCF. Always confirm the order ID and full ticket context, including probing for the right details and tagging the correct reference, before merging any duplicate tickets."}
    ],
    cases:[
      {query:"Escalation/Complaint", score:100, comment:"Good Work!!"},
      {query:"Ticket Merge Error (NCF)", score:0, comment:"NCF. Ansari merged an incorrect ticket and replied to a different query for the same customer, but with the wrong order ID. Always confirm the order ID matches before merging or replying to a ticket."},
      {query:"Escalation/Complaint", score:100, comment:"Good Work!!"},
      {query:"CL POP/TC", score:100, comment:"Good work!!"},
      {query:"Feedback / Delivery Delay", score:100, comment:"Customer gave negative feedback about customer service and a delivery delay. Ansari replied and the order was delivered in the meantime. Overall the email could be a little better. First BOD given."},
      {query:"Order Cancellation", score:100, comment:"Good Work!!"}
    ],
    paramCaseMap:{ss:[], sol:[1], prob:[1], tag:[1], fu:[]}
  },
  preethi: {
    name:"Preethi_V", initials:"PV", color:"#7c3aed",
    cq:82, audits:12, ncf:1, totalErrors:10,
    params:{ss:4, sol:3, prob:0, tag:0, fu:3},
    aois:[
      {cat:"ss", label:"Soft Skills", text:"Give complete information in the first reply, in the customer's preferred language. On the ring exchange case, the WhatsApp verification step and Lifetime Exchange values should have been explained upfront rather than introduced later, which caused avoidable back and forth. On the digital gold case, replying in English to a customer who wrote in Hindi meant the message never landed. Always match the customer's preferred language, or call first."},
      {cat:"sol", label:"Solution & Rec.", text:"Take personal ownership of urgent requests. On the profile balance case, Preethi raised a callback rather than calling the customer herself, despite the same day urgency. On the ring exchange case, the actual urgent request about the ring was dropped from the follow up email. When a request is time sensitive, handle it directly rather than routing it elsewhere."},
      {cat:"fu", label:"Follow Up", text:"Follow through on every committed date. On the delayed order status case, Preethi missed her own Monday follow up commitment after already asking for two extensions, which led to an NCF. Once a date is committed to the customer, that follow up must happen without the customer needing to chase it."}
    ],
    cases:[
      {query:"Profile Balance / Urgent Order", score:80, comment:"Customer could not use their profile balance and wanted to place an order the same day. Preethi raised a callback on OneView. AOI: Should have called the customer herself given the urgency. The sales lead was raised but remained unassigned."},
      {query:"Order Status / Delayed Follow-up (NCF)", score:0, comment:"NCF. Customer could not locate their order and the store could not help either. Preethi started an investigation, asked for 24 to 48 hours, then Monday, but missed her own committed follow up on Monday. She asked for one more day on Tuesday, and there has been no follow up or call since."},
      {query:"Escalation/Complaint", score:100, comment:"Good work!!"},
      {query:"Digital Gold SIP Cancellation", score:60, comment:"Customer wrote in Hindi asking to cancel their CL digital gold SIP on PhonePe. Preethi replied in English. The customer did not understand and replied again, and the follow up was still in English. Should have communicated in the customer's preferred language or called before emailing."},
      {query:"Escalation/Complaint", score:100, comment:"Good work!! Please mention ticket details in PVT notes too."},
      {query:"Escalation/Complaint", score:89, comment:"Good work. Avoid saying 'a little time'. Give a clear timeframe, such as 24 to 48 hours."},
      {query:"Product Quality", score:100, comment:"Good work!!"},
      {query:"Website Issue", score:100, comment:"Good work!!"},
      {query:"Store Callback", score:100, comment:"Good work!!"},
      {query:"TAH Appointment", score:88, comment:"Good work!! BOD given."},
      {query:"Ring Exchange / WhatsApp Verification", score:63, comment:"Preethi caused unnecessary back and forth on an urgent ticket. The WhatsApp verification process and Lifetime Exchange values should have been explained in the very first email. She also broke her promise to resolve it the same day, replying only the next morning, and forgot to re ask about the ring itself in her second email, which was the most time sensitive part of the request."},
      {query:"Repair", score:110, comment:"Good work!! Customer appreciated it."}
    ],
    paramCaseMap:{ss:[3,5,10], sol:[0,3,10], prob:[], tag:[], fu:[1,9,10]}
  },
  ghouse: {
    name:"Ghouse_M", initials:"GM", color:"#2563eb",
    cq:80, audits:12, ncf:2, totalErrors:10,
    params:{ss:3, sol:4, prob:2, tag:0, fu:1},
    aois:[
      {cat:"ss", label:"Soft Skills", text:"Follow through on every commitment made to a customer. On the missed callback case, an urgent Saturday night call request went completely unattempted, and Ghouse then claimed he had tried when he had not. Never say an action was taken when it was not, and always attempt the specific channel the customer asked for."},
      {cat:"sol", label:"Solution & Rec.", text:"Own the resolution instead of routing it back to the customer or another team. On the gift card case, Ghouse asked the customer to relay the issue to the store rather than coordinating internally himself. On the delivery delay and new sales inquiry cases, direct questions about the root cause of the delay, and about price, size, and material, went unanswered. Take ownership of both the information and the internal coordination."},
      {cat:"prob", label:"Probing", text:"Gather the full picture before replying. On the gift card case, the store details were not even asked for, which made it impossible to investigate. Ask for the specific information needed to actually resolve the issue before replying."}
    ],
    cases:[
      {query:"Order Status", score:100, comment:"good work!"},
      {query:"Escalation / Missed Callback (NCF)", score:0, comment:"NCF. Customer urgently asked for a phone call on Saturday night before a big sale ended. Call logs show no attempt was made. Ghouse waited over 24 hours, then falsely claimed he had tried calling, reused the same AI generated text from the day before, broke his promise to update the customer on Friday, and ignored the request to speak to a manager."},
      {query:"Delivery Delay / Root Cause", score:80, comment:"Ghouse aligned with the store on a revised delivery date but gave an incomplete resolution. He shared the new date of July 20 without explaining the root cause of the 9 day delay, or why the customer was not proactively updated before the original deadline."},
      {query:"Gift Card Redemption (NCF)", score:0, comment:"NCF. Instead of taking the store details and coordinating internally, Ghouse told the customer to relay the gift card error to store staff himself, making the customer act as the go between. He should have owned the internal communication directly."},
      {query:"Payment Status", score:100, comment:"Good work!!"},
      {query:"Escalation/Complaint", score:100, comment:"Good work!!"},
      {query:"Account Deletion", score:100, comment:"Good work!!"},
      {query:"Reactivation", score:100, comment:"Good Work!!"},
      {query:"Order Status", score:100, comment:"Good work!! AOI: Avoid delayed follow ups. BOD given for this audit."},
      {query:"General Purchase", score:75, comment:"Ghouse handled this new sales inquiry poorly, ignoring the customer's specific questions on price, size availability, and material, and pushed her to take a phone call instead of simply answering. Acting as a gatekeeper for basic information creates friction for a potential new buyer."},
      {query:"Account Reactivation", score:100, comment:"Reaudited as BOD. AOI: If unsure of the reason, at least acknowledge the customer's question."},
      {query:"CTC", score:100, comment:"Good work!!"}
    ],
    paramCaseMap:{ss:[1,3], sol:[1,2,3,9], prob:[2,3], tag:[], fu:[1]}
  },
  surbhi: {
    name:"Surbhi_A", initials:"SA", color:"#ea580c",
    cq:75, audits:12, ncf:1, totalErrors:12,
    params:{ss:8, sol:3, prob:0, tag:1, fu:0},
    aois:[
      {cat:"ss", label:"Soft Skills", text:"Show empathy even under pressure. Across several audits, including the GWD discrepancy, the diamond fall complaint, the Treasure Chest delay, and the logistics delay, empathy was consistently the gap. Acknowledge the customer's frustration and the specific inconvenience before moving into process or timelines."},
      {cat:"ss", label:"Soft Skills", text:"Avoid repeating the same templated language. The same boilerplate apology line, 'We completely understand your concern...', appeared across multiple unrelated cases, which made replies feel robotic. Vary the phrasing so each response feels written specifically for that customer."},
      {cat:"sol", label:"Solution & Rec.", text:"Make sure every question is actually answered. On the diamond fall case, the customer's direct question about repair charges and lifetime maintenance went unanswered. On the legal threat escalation, the doorstep pickup request and store alignment confirmation were left unaddressed. Always circle back and confirm every question raised has been answered."},
      {cat:"tag", label:"Tagging", text:"Log and dispose every call correctly. The GWD discrepancy call was not disposed on Ameyo, and no call log could be found for the diamond fall NCF either. Every customer interaction needs to be logged and disposed correctly, especially escalations."}
    ],
    cases:[
      {query:"Escalation/Complaint", score:100, comment:"Good Work!!"},
      {query:"GWD / Quality Discrepancy", score:67, comment:"Customer reported a discrepancy with GWD. The call lacked empathy and was not disposed on Ameyo."},
      {query:"Product Quality / Diamond Fall (NCF)", score:0, comment:"NCF. Customer's ring had a diamond fall out from the cluster and asked why repair charges applied and whether there was any lifetime maintenance. Surbhi gave a generic apology and offered a quality check without answering the actual question. No call was logged on Ameyo, and the email reused the same templated line."},
      {query:"Escalation/Complaint", score:86, comment:"Good work!! AOI: Thank the customer for attaching reference details. Acknowledging it improves the overall email quality."},
      {query:"Order Status", score:71, comment:"Customer's order status was delayed due to Mumbai rains. Overall the email could be better. Several grammatical mistakes and structure issues were found."},
      {query:"CL POP/TC", score:100, comment:"Good work!!"},
      {query:"Escalation / Legal Threat", score:57, comment:"Surbhi did not address all of the customer's concerns, specifically the allegation of fraudulent date manipulation on the app. She confirmed the 15 day exchange but did not confirm store alignment or address the doorstep pickup request. For a highly escalated customer threatening legal action, empathy was inadequate and ownership was missing."},
      {query:"Treasure Chest Payment", score:60, comment:"Customer had not received payment confirmation for their Treasure Chest plan for 4 months. AOI: Refrain from repeating the same templated apology line for every customer."},
      {query:"Order Status", score:100, comment:"Good work!"},
      {query:"Order Status", score:90, comment:"Good work. Needs to structure the email better."},
      {query:"Order Modification", score:100, comment:"Good work! AOI: Better affirmations appreciated going forward."},
      {query:"Delivery / Logistics Delay", score:70, comment:"The 3 to 4 day courier delay was beyond her control, but Surbhi delivered the update without empathy and did not acknowledge that it was not the resolution the customer hoped for. She also broke her promise to explain the root cause of the daily rescheduling and instead repeated the same tracking timeline the customer had already shared."}
    ],
    paramCaseMap:{ss:[1,2,3,4,6,7,9,11], sol:[2,6,11], prob:[], tag:[1], fu:[]}
  }
};

const PARAM_LABELS = {ss:"Soft Skills", sol:"Solution & Rec.", prob:"Probing", tag:"Tagging", fu:"Follow Up"};
const PARAM_COLORS = {ss:"#ea580c", sol:"#dc2626", prob:"#2563eb", tag:"#7c3aed", fu:"#16a34a"};
