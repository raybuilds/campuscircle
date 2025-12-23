# NearNest

**NearNest – From moving in to settling down**

NearNest is a student-focused web platform designed to help students make better accommodation decisions and manage daily living needs after moving in.  
The project focuses on clarity, safety, and guided decision-making through clearly defined modes.

This repository currently contains a **frontend MVP / demo-ready version** of the platform.

---

## 🔗 Live Demo

The current demo version of NearNest is deployed using GitHub Pages.

👉 **Access the live website here:**  
https://raybuilds.github.io/nearnest/

---

## 🌟 Problem Statement

Students often face confusion when:
- Choosing between hostel and PG living
- Understanding area suitability and daily needs
- Managing services after moving in
- Accessing help during emergencies

NearNest addresses these problems by structuring the experience into **modes** based on the student’s living context.

---

## 🧭 Application Flow & Architecture

Homepage<br>
↓<br>
Common Mode<br>
├─ Area-based Guidance<br>
├─ Buy & Sell<br>
├─ Local Food Ordering<br>
├─ Emergency Access (Global)<br>
↓<br>
Choose Living Type<br>
├─ Hosteller Mode<br>
│ ├─ Mess Rating<br>
│ ├─ Lost & Found<br>
│ └─ Hygiene & Facilities<br>
└─ PG / Rental Mode<br>
├─ Local Services Directory<br>
└─ Tiffin Services<br>


---

## 🧩 Modes Overview

### Common Mode
For students who have not yet decided between hostel or PG living.  
Provides guidance, essential services, and a centralized emergency access point.

### Hosteller Mode
Designed for students living in hostels.  
Focuses on mess quality, hygiene, shared facilities, and hostel-specific issues.

### PG / Rental Mode
Designed for students living independently.  
Focuses on external services such as tiffin providers and local service professionals.

---

## 🚨 Emergency Access (Global Feature)

Emergency access is available from **every page via the navigation bar**.  
For the MVP, emergency information is centralized in Common Mode to ensure consistent and immediate access regardless of the user’s current mode.

---

## 🛠️ Tech Stack

**Current**
- HTML5
- CSS3
- Vanilla JavaScript (UI-level interactions only)

**Scope**
- No backend or database integration yet
- Focused on structure, UX clarity, and demo readiness

---

## 📁 Project Structure

nearnest/<br>
├── index.html<br>
├── modes/<br>
│ ├── common.html<br>
│ ├── hostel.html<br>
│ └── pg.html<br>
├── assets/<br>
│ ├── css/<br>
│ ├── js/<br>
│ └── images/<br>
└── README.md<br>


---

## 👥 Contributors

| Name | GitHub | Responsibility |
|----|----|----|
| **Rohit Yadav** | raybuilds | Frontend architecture, UI/UX design, HTML structure, base CSS, JavaScript integration, overall project direction |
| **Md Ashif Ansari** | ashif945 | CSS improvements, visual polish, responsiveness *(upcoming work)* |
| **Varun Agrahari** | va7tech-coder | JavaScript enhancements, UI interactions, feature upgrades *(upcoming work)* |

> Note: CSS and JavaScript upgrades listed above are planned contributions and will be implemented in future iterations.

---

## 🚧 Current Status

- ✅ Information architecture finalized  
- ✅ All mode pages implemented  
- ✅ Card-based, consistent UI  
- ✅ Global Emergency access via navbar  
- ✅ Active navbar highlighting  
- ⏳ CSS refinement (planned)  
- ⏳ JavaScript feature expansion (planned)

---

## 🔮 Future Scope

- Improved responsiveness and UI polish
- Richer JavaScript interactions
- Backend integration for real data
- Role-based access for hostel authorities and service providers

---

## 📌 Note

This project is currently a **frontend MVP / demo** focused on usability, clarity, and presentation rather than full functionality.
