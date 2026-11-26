const TEAM_META = {"team": "Emails and Experience Chennai", "month": "November 2026", "params": ["ss", "prob", "sol", "fu", "tag"]};
const AGENTS = {
 "ansaris": {
  "name": "Ansari_S",
  "initials": "AS",
  "color": "#7c3aed",
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
    "text": "A perfect month: 100% CQ with no errors flagged in 5 audits, through the Diwali rush. Keep opening with an apology whenever the customer has been inconvenienced, and keep pushing long-pending tickets (like the delayed pickup and inward case) all the way to closure."
   }
  ],
  "cases": [
   {
    "query": "Escalation",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work! Please apologise for the distress/inconvinence."
   },
   {
    "query": "Escalation",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work!"
   },
   {
    "query": "Escalation",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work!"
   },
   {
    "query": "Escalation",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work!"
   },
   {
    "query": "Escalation",
    "score": 100,
    "ncf": false,
    "date": "Pending Ticket",
    "comment": "Good work, please get this closed bro. Cx has been waiting since long time. Delay in pickup and Delay in inward, Jc has done everything possible from his end."
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
 "preethiv": {
  "name": "Preethi_V",
  "initials": "PV",
  "color": "#b8860b",
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
    "text": "A perfect month: 100% CQ with no errors flagged in 5 audits, through the Diwali rush. Two small polish points from the auditor: always mention the order ID in your reply, and add a line of empathy where the customer has been waiting."
   }
  ],
  "cases": [
   {
    "query": "Escalation",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "good work"
   },
   {
    "query": "Escalation",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "good work"
   },
   {
    "query": "Escalation",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work, please mention order ID too."
   },
   {
    "query": "Escalation",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work, empathy would be good."
   },
   {
    "query": "Escalation",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work, empathy would be good."
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
 "jinalk": {
  "name": "Jinal_K",
  "initials": "JK",
  "color": "#0d9488",
  "cq": 97,
  "audits": 5,
  "ncf": 0,
  "totalErrors": 2,
  "params": {
   "ss": 1,
   "prob": 0,
   "sol": 1,
   "fu": 0,
   "tag": 0
  },
  "aois": [
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Positive phrasing flagged in 1 of 5 audits (Escalation, Customer Service). Avoid blunt lines like \"refund was never committed\"; reframe around what we can do for the customer while still holding the policy."
   },
   {
    "cat": "sol",
    "label": "Solution & Rec.",
    "text": "Incomplete information flagged on the same case. Whenever you quote a policy, share the policy link along with a snip so the customer can see it for themselves."
   }
  ],
  "cases": [
   {
    "query": "Escalation",
    "score": 83,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work! use better phrases instead of \"refund was never committed\" & always send policy link to customer for reference with snip."
   },
   {
    "query": "Escalation",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work!"
   },
   {
    "query": "Escalation",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work!"
   },
   {
    "query": "Escalation",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work!"
   },
   {
    "query": "Escalation",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work!"
   }
  ],
  "paramCaseMap": {
   "ss": [
    0
   ],
   "prob": [],
   "sol": [
    0
   ],
   "fu": [],
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
    "text": "Missed empathy, an uninviting tone and a missing ownership statement were flagged in 1 of 5 audits (Escalation, Customer Service), where the replies read as templated. Acknowledge the delay in your own words and apologise before giving the update, and aim to close the query in the first response itself."
   }
  ],
  "cases": [
   {
    "query": "Escalation",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Re-audited based on proofs."
   },
   {
    "query": "Escalation",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work"
   },
   {
    "query": "Escalation",
    "score": 75,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Responses seem templated, no empathy found for the delay."
   },
   {
    "query": "Escalation",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work, try to close it in the first response itself, good that you realised and cleared the issue within minutes before cx reaching out again."
   },
   {
    "query": "Escalation",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work. Please get this closed at earliest."
   }
  ],
  "paramCaseMap": {
   "ss": [
    2
   ],
   "prob": [],
   "sol": [],
   "fu": [],
   "tag": []
  }
 },
 "bhavanaj": {
  "name": "Bhavana_J",
  "initials": "BJ",
  "color": "#2563eb",
  "cq": 94,
  "audits": 5,
  "ncf": 0,
  "totalErrors": 1,
  "params": {
   "ss": 0,
   "prob": 0,
   "sol": 1,
   "fu": 0,
   "tag": 0
  },
  "aois": [
   {
    "cat": "sol",
    "label": "Solution & Rec.",
    "text": "Incorrect information, a missed latest update and a missed retention attempt were flagged in 1 of 5 audits (Escalation): a new pickup had already been raised a few minutes earlier. Check the latest activity on the order before replying, and when a customer asks for an exchange, make a retention attempt first. Remember to follow up on open cases too."
   }
  ],
  "cases": [
   {
    "query": "Escalation",
    "score": 71,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work. New Pickup was already raised under ON15DMBRDISR4 a few minutes ago, should have checked before replying. No retention for exchange"
   },
   {
    "query": "Escalation",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work"
   },
   {
    "query": "Escalation",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work"
   },
   {
    "query": "Escalation",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work! Please follow up"
   },
   {
    "query": "Escalation",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work!"
   }
  ],
  "paramCaseMap": {
   "ss": [],
   "prob": [],
   "sol": [
    0
   ],
   "fu": [],
   "tag": []
  }
 },
 "krutip": {
  "name": "Kruti_P",
  "initials": "KP",
  "color": "#ea580c",
  "cq": 90,
  "audits": 5,
  "ncf": 0,
  "totalErrors": 4,
  "params": {
   "ss": 3,
   "prob": 0,
   "sol": 1,
   "fu": 0,
   "tag": 0
  },
  "aois": [
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Soft skills flagged in 3 of 5 audits: missed empathy (1), a missing positive line (1) and an addressing slip (1). Open with empathy, add one reassuring line such as \"rest assured, we shall try our best to deliver before the promised date\", and address doctors as Dr. followed by the customer's name."
   },
   {
    "cat": "sol",
    "label": "Solution & Rec.",
    "text": "Ownership on resolution flagged in 1 of 5 audits (gift card case, BOD given instead of an NCF). Gift cards can be unblocked as well, so check with Vimal on such cases before closing, and mention the CTC ID for reference."
   }
  ],
  "cases": [
   {
    "query": "Escalation",
    "score": 83,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work! No empathy found."
   },
   {
    "query": "Escalation",
    "score": 83,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work but we can unblock the gift card too, check with vimal once for such cases. BOD given here for not marking NCF"
   },
   {
    "query": "Escalation",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "good work. address the cx with Dr Aarti. Any dr are to be addressed with Dr. X (X should be the customer's name)"
   },
   {
    "query": "Escalation",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "good work. mention CTC id too for ref."
   },
   {
    "query": "Escalation",
    "score": 83,
    "ncf": false,
    "date": "Customer Service",
    "comment": "good work, rest assured we shall try our best to deliver it prior to the delivery dates. One positive line was missing."
   }
  ],
  "paramCaseMap": {
   "ss": [
    0,
    2,
    4
   ],
   "prob": [],
   "sol": [
    1
   ],
   "fu": [],
   "tag": []
  }
 },
 "ghousem": {
  "name": "Ghouse_M",
  "initials": "GM",
  "color": "#0891b2",
  "cq": 80,
  "audits": 5,
  "ncf": 1,
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
    "label": "Follow Up · NCF",
    "text": "1 NCF this month on a pending escalation: the customer received an empty parcel with tampered packaging, the internal ticket was raised, but no update was chased on it for 8 days while the escalation sat pending for 14 days. Set a reminder on every internal ticket you raise, chase the team for an update at regular intervals, and keep the customer informed even when there is no news yet."
   },
   {
    "cat": "win",
    "label": "Big Step Up",
    "text": "The other 4 audits were clean, and errors dropped from 10 in October to just 1. Keep the same care on replies and add the same discipline to follow-ups."
   }
  ],
  "cases": [
   {
    "query": "Random Audit",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "good"
   },
   {
    "query": "Random Audit",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "good"
   },
   {
    "query": "Random Audit",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "good"
   },
   {
    "query": "Random Audit",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "good"
   },
   {
    "query": "Escalation",
    "score": 0,
    "ncf": true,
    "date": "Pending Ticket",
    "comment": "PENDING TICKET AUDIT - Cx got an empty parcel, the TP was tampered with as well. Cx shared all the details. Ghouse had raised the internal ticket. The cx escalation ticket is pending since 14 days and there is no update from logistics, Ghouse failed to ask for update on internal ticket since 8 days. Cx is still on hold as per the ticket."
   }
  ],
  "paramCaseMap": {
   "ss": [],
   "prob": [],
   "sol": [],
   "fu": [
    4
   ],
   "tag": []
  }
 },
 "safurab": {
  "name": "Safura_B",
  "initials": "SB",
  "color": "#db2777",
  "cq": 77,
  "audits": 5,
  "ncf": 1,
  "totalErrors": 4,
  "params": {
   "ss": 2,
   "prob": 0,
   "sol": 2,
   "fu": 0,
   "tag": 0
  },
  "aois": [
   {
    "cat": "sol",
    "label": "Solution & Rec. · NCF",
    "text": "1 NCF this month (Escalation): the customer clearly asked for a refund, but the first reply shared the order status instead. Read the request carefully and make sure your first reply answers exactly what the customer asked."
   },
   {
    "cat": "sol",
    "label": "Solution & Rec.",
    "text": "Incorrect information and a missed latest update were flagged on an international order. Orders ending with USC are international orders: when you forward such a case to the INTL team, give the customer an expected TAT."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Grammar flagged in 1 audit (re-audited with BOD). Proofread before you send, and always mention the exact refund amount."
   }
  ],
  "cases": [
   {
    "query": "Random Audit",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "Re-audited with BOD, avoid grammatical errors and mention the amounts for refund."
   },
   {
    "query": "Escalation",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work"
   },
   {
    "query": "Escalation",
    "score": 100,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Good work"
   },
   {
    "query": "Escalation",
    "score": 86,
    "ncf": false,
    "date": "Customer Service",
    "comment": "Orders ending with USC are International orders. When we forward the case to INTL team make sure we notify the cx with an expected TaT."
   },
   {
    "query": "Escalation",
    "score": 0,
    "ncf": true,
    "date": "Customer Service",
    "comment": "Incorrect response sent, cx was asking for a refund clearly, Safura shared order status at first."
   }
  ],
  "paramCaseMap": {
   "ss": [
    0,
    4
   ],
   "prob": [],
   "sol": [
    3,
    4
   ],
   "fu": [],
   "tag": []
  }
 }
};
const PARAM_LABELS = {"ss": "Soft Skills", "prob": "Probing", "sol": "Solution & Rec.", "fu": "Follow Up", "tag": "Tagging"};
const PARAM_SHORT = {"ss": "Soft Skills", "prob": "Probing", "sol": "Solution", "fu": "Follow Up", "tag": "Tagging"};
const PARAM_COLORS = {"ss": "#ea580c", "prob": "#2563eb", "sol": "#dc2626", "fu": "#16a34a", "tag": "#7c3aed"};
