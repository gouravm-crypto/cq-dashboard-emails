const TEAM_META = {"team": "Emails Team", "month": "October 2026", "params": ["ss", "prob", "sol", "fu", "tag"]};
const AGENTS = {
 "jinalk": {
  "name": "Jinal_K",
  "initials": "JK",
  "color": "#0d9488",
  "cq": 100,
  "audits": 5,
  "ncf": 0,
  "totalErrors": 0,
  "params": {
   "ss": 0,
   "prob": 0,
   "sol": 0,
   "fu": 0,
   "tag": 0
  },
  "aois": [
   {
    "cat": "win",
    "label": "Keep It Up",
    "text": "No errors flagged in 5 audits this month. Keep the same standard of empathy, accuracy and ownership going into the Diwali season."
   }
  ],
  "cases": [
   {
    "query": "Negative Sentiment",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work!!"
   },
   {
    "query": "Negative Sentiment",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work!!"
   },
   {
    "query": "Negative Sentiment",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work!! AOI - Please add RMs and RBMs to such emails if the store misses a callback despite our request and cx is more iRate"
   },
   {
    "query": "Negative Sentiment",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work!!"
   },
   {
    "query": "Negative Sentiment",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work!! AOI - if you know its weekends, always inform the customer a TAT of the next working day post weekend to be on a safer side."
   }
  ],
  "paramCaseMap": {
   "ss": [],
   "prob": [],
   "sol": [],
   "fu": [],
   "tag": []
  }
 },
 "ansaris": {
  "name": "Ansari_S",
  "initials": "AS",
  "color": "#7c3aed",
  "cq": 98,
  "audits": 5,
  "ncf": 0,
  "totalErrors": 1,
  "params": {
   "ss": 1,
   "prob": 0,
   "sol": 0,
   "fu": 0,
   "tag": 0
  },
  "aois": [
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed empathy flagged in 1 of 5 audits, for example on the Random Audit case (Customer Service). Acknowledge the customer's situation and apologise for any delay or inconvenience before moving to the process. A sincere, specific apology in the first response changes the tone of the whole interaction."
   }
  ],
  "cases": [
   {
    "query": "Random Audit",
    "score": 88,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work!! Please empathise during second response"
   },
   {
    "query": "Random Audit",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work!!"
   },
   {
    "query": "Random Audit",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work"
   },
   {
    "query": "Random Audit",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work"
   },
   {
    "query": "Random Audit",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work"
   }
  ],
  "paramCaseMap": {
   "ss": [
    0
   ],
   "prob": [],
   "sol": [],
   "fu": [],
   "tag": []
  }
 },
 "preethiv": {
  "name": "Preethi_V",
  "initials": "PV",
  "color": "#b8860b",
  "cq": 98,
  "audits": 5,
  "ncf": 0,
  "totalErrors": 1,
  "params": {
   "ss": 1,
   "prob": 0,
   "sol": 0,
   "fu": 0,
   "tag": 0
  },
  "aois": [
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Tone not inviting flagged in 1 of 5 audits, for example on the Negative Sentiment case (Customer Service). Keep the tone warm and open so the customer feels comfortable asking follow-up questions, especially when they are frustrated."
   }
  ],
  "cases": [
   {
    "query": "Negative Sentiment",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work but a better phrase to this \"You can make the payment at the store at the time of delivery\" would be \"Once the order is repaired and delivered at the store, our team at store will call you to confirm the same. You may visit the store to verify this and have the charges paid at the store during collection.\""
   },
   {
    "query": "Negative Sentiment",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work"
   },
   {
    "query": "Negative Sentiment",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work"
   },
   {
    "query": "Negative Sentiment",
    "score": 90,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Suggestive response added in private notes"
   },
   {
    "query": "Negative Sentiment",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work!"
   }
  ],
  "paramCaseMap": {
   "ss": [
    3
   ],
   "prob": [],
   "sol": [],
   "fu": [],
   "tag": []
  }
 },
 "safurab": {
  "name": "Safura_B",
  "initials": "SB",
  "color": "#db2777",
  "cq": 96,
  "audits": 5,
  "ncf": 0,
  "totalErrors": 1,
  "params": {
   "ss": 0,
   "prob": 0,
   "sol": 0,
   "fu": 1,
   "tag": 0
  },
  "aois": [
   {
    "cat": "fu",
    "label": "Follow Up",
    "text": "Follow-up not done flagged in 1 of 5 audits, for example on the Negative Sentiment case (Customer Service). When you commit to getting back to the customer, set a reminder and close the loop."
   }
  ],
  "cases": [
   {
    "query": "Negative Sentiment",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work!"
   },
   {
    "query": "Negative Sentiment",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work!"
   },
   {
    "query": "Negative Sentiment",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work!"
   },
   {
    "query": "Negative Sentiment",
    "score": 80,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work!! But failed to reply to the customer when they asked to reconfirm a few details"
   },
   {
    "query": "Negative Sentiment",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work!!"
   }
  ],
  "paramCaseMap": {
   "ss": [],
   "prob": [],
   "sol": [],
   "fu": [
    3
   ],
   "tag": []
  }
 },
 "tishaj": {
  "name": "Tisha_J",
  "initials": "TJ",
  "color": "#16a34a",
  "cq": 95,
  "audits": 5,
  "ncf": 0,
  "totalErrors": 1,
  "params": {
   "ss": 0,
   "prob": 0,
   "sol": 0,
   "fu": 1,
   "tag": 0
  },
  "aois": [
   {
    "cat": "fu",
    "label": "Follow Up",
    "text": "Missed committed email/WhatsApp/SMS flagged in 1 of 5 audits, for example on the Negative Sentiment case (Customer Service). If you commit to sending an email, WhatsApp or SMS, send it within the timeline you gave."
   },
   {
    "cat": "fu",
    "label": "Follow Up",
    "text": "Follow-up not done flagged in 1 of 5 audits, for example on the Negative Sentiment case (Customer Service). When you commit to getting back to the customer, set a reminder and close the loop."
   }
  ],
  "cases": [
   {
    "query": "Negative Sentiment",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work, refrain from using \"having you again\", better phrases to be used. Please change your canned response."
   },
   {
    "query": "Negative Sentiment",
    "score": 75,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work! but if we commit that we will share the details by monday and it is doccumented in an email format, ensure we follow up."
   },
   {
    "query": "Negative Sentiment",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work!"
   },
   {
    "query": "Negative Sentiment",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work!"
   },
   {
    "query": "Negative Sentiment",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work!"
   }
  ],
  "paramCaseMap": {
   "ss": [],
   "prob": [],
   "sol": [],
   "fu": [
    1
   ],
   "tag": []
  }
 },
 "bhavanaj": {
  "name": "Bhavana_J",
  "initials": "BJ",
  "color": "#2563eb",
  "cq": 86,
  "audits": 5,
  "ncf": 0,
  "totalErrors": 4,
  "params": {
   "ss": 2,
   "prob": 1,
   "sol": 1,
   "fu": 0,
   "tag": 0
  },
  "aois": [
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed empathy flagged in 1 of 5 audits, for example on the Random Audit case (Customer Service). Acknowledge the customer's situation and apologise for any delay or inconvenience before moving to the process. A sincere, specific apology in the first response changes the tone of the whole interaction."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missing positive/ownership phrases flagged in 1 of 5 audits, for example on the Random Audit case (Customer Service). Use ownership phrases such as \"I will personally check this for you\" or \"Let me make sure this gets resolved\" instead of neutral or negative wording."
   },
   {
    "cat": "prob",
    "label": "Probing",
    "text": "Previous interaction not checked flagged in 1 of 5 audits, for example on the Random Audit case (Customer Service). Check previous interactions and open tickets before you commit to anything, so your answer builds on what the customer has already been told."
   }
  ],
  "cases": [
   {
    "query": "Random Audit",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work"
   },
   {
    "query": "Random Audit",
    "score": 80,
    "ncf": false,
    "date": "Customer Service",
    "comment": "The customer received lighter jewellery, didn't get their full money back, and complained that support was hanging up on them.\n\nThe agent gave wrong math in her first email, promising points that the customer wasn't actually eligible for. When the customer said the points weren't showing in the app, the agent took almost 3 days to reply, only to change her story and say the points were canceled due to late payments.\n\nShe gave wrong information without checking the customer's history, took too long to reply, and didn't solve the problem on the first try."
   },
   {
    "query": "Random Audit",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work!"
   },
   {
    "query": "Random Audit",
    "score": 50,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Customer had stated that they were unable to find the diamond prices and the details in the bill only the gold was seen, JC shared the e-certificate with the customer and infomred about gold prices. Failed to understand the customer query itself and assist the customer better/."
   },
   {
    "query": "Random Audit",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work!!\\"
   }
  ],
  "paramCaseMap": {
   "ss": [
    1,
    3
   ],
   "prob": [
    1
   ],
   "sol": [
    3
   ],
   "fu": [],
   "tag": []
  }
 },
 "krutip": {
  "name": "Kruti_P",
  "initials": "KP",
  "color": "#ea580c",
  "cq": 85,
  "audits": 5,
  "ncf": 0,
  "totalErrors": 5,
  "params": {
   "ss": 3,
   "prob": 1,
   "sol": 1,
   "fu": 0,
   "tag": 0
  },
  "aois": [
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Tone not inviting flagged in 2 of 5 audits, for example on the Negative Sentiment case (Customer Service). Keep the tone warm and open so the customer feels comfortable asking follow-up questions, especially when they are frustrated."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Grammar / addressing errors flagged in 1 of 5 audits, for example on the Negative Sentiment case (Customer Service). Re-read before you send. Check the customer's name, spelling and sentence structure, because one small slip makes the whole reply look careless."
   },
   {
    "cat": "prob",
    "label": "Probing",
    "text": "Irrelevant or insufficient probing flagged in 1 of 5 audits, for example on the Negative Sentiment case (Customer Service). Probe with purpose: ask the questions that confirm the order, the exact concern and what the customer expects before giving a resolution."
   }
  ],
  "cases": [
   {
    "query": "Negative Sentiment",
    "score": 50,
    "ncf": false,
    "date": "Customer Service",
    "comment": "The customer reached out seeking assistance on how to redeem the plan. We should have shared the basic steps to redeem if we are unable to find the cx profile at the same time instead of asking order number, we should ask for Plan ID or a registered contact details like email/number."
   },
   {
    "query": "Negative Sentiment",
    "score": 88,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work but when the customer is cancelling a return like LTB or 15DMB and proceeds to keep the order, please appricate the customer as they're being a part of CL family"
   },
   {
    "query": "Negative Sentiment",
    "score": 88,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work!! But can use better words to structure the email dated Fri, 2 Oct 2026 at 5:24 PM"
   },
   {
    "query": "Negative Sentiment",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work!!"
   },
   {
    "query": "Negative Sentiment",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work!!"
   }
  ],
  "paramCaseMap": {
   "ss": [
    0,
    1,
    2
   ],
   "prob": [
    0
   ],
   "sol": [
    0
   ],
   "fu": [],
   "tag": []
  }
 },
 "ghousem": {
  "name": "Ghouse_M",
  "initials": "GM",
  "color": "#0891b2",
  "cq": 68,
  "audits": 5,
  "ncf": 1,
  "totalErrors": 10,
  "params": {
   "ss": 2,
   "prob": 4,
   "sol": 2,
   "fu": 1,
   "tag": 1
  },
  "aois": [
   {
    "cat": "ss",
    "label": "Soft Skills · NCF",
    "text": "1 NCF this month (Random Audit). Read the full email, list every question the customer asked and answer each one in the same reply. Check the customer's name and details before sending, and if a call does not connect, follow up once in writing rather than calling repeatedly."
   },
   {
    "cat": "prob",
    "label": "Probing",
    "text": "Resolution probing not done flagged in 3 of 5 audits, for example on the Random Audit case (Customer Service). Ask the probing questions needed to resolve the concern, not just to identify it."
   },
   {
    "cat": "prob",
    "label": "Probing",
    "text": "Irrelevant or insufficient probing flagged in 2 of 5 audits, for example on the Random Audit case (Customer Service). Probe with purpose: ask the questions that confirm the order, the exact concern and what the customer expects before giving a resolution."
   }
  ],
  "cases": [
   {
    "query": "Random Audit",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work!!"
   },
   {
    "query": "Random Audit",
    "score": 69,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Ghouse should have structured the email better, the current reply looks like it was just replied to close it. Suggestive reply would be \" Dear Vedhisha, Thank you for reaching out to us. I understand that you're looking for specific details on the stud earrings. I must say, that's an excellent choide there. I would request you to confirm if your contact number -x is the correct contact so our jewllery experts can reach out to you and assist you with these details better and further help you with the purchase? Do let us know if there's anything else we may assist you with? \""
   },
   {
    "query": "Random Audit",
    "score": 90,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work. Could have pitched profile balance for easier transcation for customer rather than 7-10 refund timelines."
   },
   {
    "query": "Random Audit",
    "score": 80,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Please provide complete information in the first email itself. Also Customer's can indeed view their profile balance at the payment page, there isn't any seperate section. Need to proof read your responses and frame it better."
   },
   {
    "query": "Random Audit",
    "score": 0,
    "ncf": true,
    "date": "Customer Service",
    "comment": "The customer complained that they were charged more than the invoice amount for their order. JC offered a refund or store credit option, but when the customer explicitly asked who approved the difference at the store, JC completely ignored the question, addressed the customer by the wrong name (\"Kavita\"), and gave an irrelevant explanation on how to redeem store credit via OTP. JC failed to explain CaratLane's standard policy regarding orders made on estimated weight versus actual finished weight. Furthermore, when the customer provided their phone number to get an answer, JC called the customer 4 times back-to-back despite the calls being continuously disconnected. JC then sent another email that still failed to answer who approved the store action and instead asked the customer to explain what happened."
   }
  ],
  "paramCaseMap": {
   "ss": [
    1,
    4
   ],
   "prob": [
    1,
    2,
    3,
    4
   ],
   "sol": [
    3,
    4
   ],
   "fu": [
    4
   ],
   "tag": [
    4
   ]
  }
 }
};
const PARAM_LABELS = {"ss": "Soft Skills", "prob": "Probing", "sol": "Solution & Rec.", "fu": "Follow Up", "tag": "Tagging"};
const PARAM_SHORT = {"ss": "Soft Skills", "prob": "Probing", "sol": "Solution", "fu": "Follow Up", "tag": "Tagging"};
const PARAM_COLORS = {"ss": "#ea580c", "prob": "#2563eb", "sol": "#dc2626", "fu": "#16a34a", "tag": "#7c3aed"};
