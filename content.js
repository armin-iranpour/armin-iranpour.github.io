/* ============================================================
   Single source of truth for the website (index.html) and the
   printable CV (cv.html). Wording, dates and figures match the
   LinkedIn profile — keep them identical when editing.
   ============================================================ */
const PERSON = {
  name: "Armin Iranpour",
  phone: "+49 176 28740219",
  email: "armin.iranpour@tu-dortmund.de",
  linkedin: "linkedin.com/in/armin-iranpour",
  photo: "armin.jpg",
  cvPdf: { de: "pdf/Lebenslauf_Armin_Iranpour_DE.pdf", en: "pdf/CV_Armin_Iranpour_EN.pdf" },
};

const FF = "Faraz Foolad Sanati Espadana Co.";
const EMM = "Esfahan Machinery Manufacturing Co.";

const CONTENT = {
/* ================================ DEUTSCH ================================ */
de: {
  title: "Armin Iranpour – Maschinenbauingenieur",
  description: "Armin Iranpour – Maschinenbauingenieur, M.Sc.-Student an der TU Dortmund. Produktions- und Logistikplanung, Konstruktion (CATIA V5), Materialflusssimulation.",
  nav: { proj:"Projekte", path:"Werdegang", contact:"Kontakt", other:"EN", otherLabel:"English version" },
  ctaCv: "Lebenslauf (PDF)", ctaMail: "E-Mail schreiben", ctaCvFull: "Vollständiger Lebenslauf (PDF)",

  /* short-form copy for the website; the full detail lives in the CV */
  site: {
    tagline: "Maschinenbauingenieur für Konstruktion, Produktions- und Logistikplanung.",
    bio: "M.Sc.-Student an der TU Dortmund mit vier Jahren Konstruktionspraxis in der Öl- und Gasindustrie.",
    projTitle: "Ausgewählte Projekte", pathTitle: "Werdegang", skillsTitle: "Kenntnisse",
    projects: [
      { meta:"Industrie · 2020–2024", title:"Lamellenkupplungen für die Öl- und Gasindustrie", text:"Über 25 Baugruppen in CATIA V5 konstruiert – von der Auslegung bis zur Inbetriebnahme beim Kunden.", result:"+20 % Standzeit · −15 % Montagezeit", tools:"CATIA V5" },
      { meta:"TU Dortmund", title:"Digital Twin einer Produktionslinie", text:"Simulationsmodell aufgebaut und vier Layout- und Steuerungsvarianten verglichen.", result:"+12 % Durchsatz im Modell", tools:"Enterprise Dynamics" },
      { meta:"TU Dortmund", title:"FEM-Analyse einer abgesetzten Welle", text:"Spannungskonzentration simuliert, gegen die Analytik validiert und die Kerbgeometrie optimiert.", result:"−18 % Spannungsspitze", tools:"Abaqus" },
      { meta:"TU Dortmund", title:"KPI-Dashboard für Logistikplaner", text:"Öffentliche Logistikdaten (Eurostat) aufbereitet und als Dashboard visualisiert.", result:"Am Lehrstuhl präsentiert", tools:"Python, Excel" }
    ],
    path: [
      ["seit 2024", "M.Sc. Maschinenbau", "TU Dortmund · IT in Produktion und Logistik · Note 1,4"],
      ["2020–2024", "Produktdesigner / Konstruktionsingenieur", "Faraz Foolad Sanati Espadana Co., Isfahan"],
      ["2019", "Praktikum Fertigung und Logistik", "Esfahan Machinery Manufacturing Co., Isfahan"],
      ["2016–2020", "B.Sc. Maschinenbau", "University of Kashan"]
    ],
    skills: [
      ["Konstruktion", "CATIA V5, Abaqus, ANSYS, technisches Zeichnen nach ISO"],
      ["Planung & Simulation", "Arbeitsvorbereitung, Lean, Enterprise Dynamics"],
      ["Daten", "Excel, Python, SQL, MATLAB"],
      ["Sprachen", "Deutsch C1, Englisch verhandlungssicher, Persisch"]
    ]
  },



  exp: [
    { role:"Produktdesigner / Konstruktionsingenieur", org:FF, meta:"Vollzeit · Isfahan, Iran", date:"09/2020 – 08/2024",
      summary:"Konstruktion von Lamellenkupplungen für Anlagen der Öl- und Gasindustrie, an der Schnittstelle zu Fertigung, Einkauf und Montage.",
      items:[
        "Über 25 Baugruppen fertigungsgerecht in CATIA V5 konstruiert, inkl. Fertigungszeichnungen und Stücklisten",
        "Arbeitspläne und Arbeitsanweisungen für Fertigung und Montage erstellt; Montagezeit je Einheit um ca. 15 % verkürzt",
        "Materialbedarfe für rund 40 Aufträge pro Jahr aus Stücklisten abgeleitet; Fehlbestellungen um ca. 20 % reduziert",
        "Liefertermine mit 15 Lieferanten koordiniert; Liefertermintreue auf rund 90 % verbessert",
        "Durchlaufzeiten erfasst, Engpässe identifiziert und mit der Werksleitung abgestellt; Durchlaufzeit um ca. 10 % gesenkt",
        "Feldausfälle mit 5-Why und Ishikawa analysiert; Standzeit der Lamellen um ca. 20 % erhöht",
        "Montage und Inbetriebnahme beim Kunden begleitet"],
      tools:"CATIA V5 · Produktionsplanung · Arbeitsvorbereitung · Microsoft Excel · Root-Cause-Analyse" },
    { role:"Praktikant Fertigung und Logistik", org:EMM, meta:"Praktikum · Isfahan, Iran", date:"06/2019 – 09/2019",
      items:[
        "Material- und Informationsflüsse zwischen Lager und Fertigung aufgenommen; Wartezeiten an 6 Stationen dokumentiert",
        "Technische Zeichnungen für fertigungstechnische Projekte erstellt und geprüft"] }
  ],

  proj: [
    { title:"Materialflusssimulation & Digital Twin Design Lab", ctx:"TU Dortmund", tools:"Enterprise Dynamics",
      text:"Simulationsmodell einer Produktionslinie aufgebaut und 4 Layout- und Steuerungsvarianten nach Durchsatz, Auslastung und Durchlaufzeit bewertet. Engpassstation identifiziert.",
      result:"ca. 12 % mehr Durchsatz im Modell (empfohlene Variante)" },
    { title:"Data Product – Fallstudie Informationssysteme", ctx:"TU Dortmund", tools:"Python (Pandas), Excel",
      text:"Öffentliche Logistikdaten (Eurostat) bereinigt und analysiert; daraus ein KPI-Dashboard in Excel für Logistikplaner erstellt.",
      result:"Dashboard am Lehrstuhl präsentiert" },
    { title:"FEM-Analyse von Maschinenelementen", ctx:"TU Dortmund", tools:"Abaqus",
      text:"Spannungskonzentrationen an einer abgesetzten Welle simuliert und mit der analytischen Lösung abgeglichen (Abweichung unter 5 %); Kerbgeometrie optimiert.",
      result:"Spannungsspitze um ca. 18 % gesenkt" }
  ],
  projLabels: { ctx:"Kontext", tools:"Werkzeuge", result:"Ergebnis" },

  edu: [
    { degree:"Master of Science, Maschinenbau", school:"Technische Universität Dortmund", date:"10/2024 – 03/2027 (vsl.)", note:"Note: 1,4",
      text:"Profil IT in Produktion und Logistik. Schwerpunkte: Materialflusssimulation, Supply Chain Management, Produktionssysteme, Datenanalyse, industrielle Informationssysteme." },
    { degree:"Bachelor of Science, Maschinenbau", school:"University of Kashan, Iran", date:"09/2016 – 09/2020",
      text:"Bachelorarbeit: Technische und wirtschaftliche Machbarkeit eines additiv gefertigten Plattenwärmetauschers inkl. Kostenvergleich mit konventioneller Fertigung." }
  ],

  skills: [
    ["Konstruktion & Mechanik", "Konstruktion, CATIA V5, Technisches Zeichnen, Finite-Elemente-Methode (Abaqus, ANSYS), Maschinenelemente, Festigkeitsberechnung, Antriebstechnik, Werkstoffauswahl, Design for Manufacturing, Fertigungstechnik, Montage, Inbetriebnahme"],
    ["Planung & Produktion", "Produktionsplanung, Arbeitsvorbereitung, Logistikplanung, Supply Chain Management, Lean Manufacturing, Prozessoptimierung"],
    ["Simulation & Daten", "Materialflusssimulation (Enterprise Dynamics), MATLAB, Microsoft Excel, Python, SQL"],
    ["Methoden", "Ursachenanalyse (5-Why, Ishikawa), Zuverlässigkeitstechnik, interdisziplinäre Zusammenarbeit"]
  ],
  langs: [["Deutsch","Verhandlungssicher (C1, TestDaF TDN 5)"],["Englisch","Verhandlungssicher"],["Persisch","Muttersprache"]],
  langsTitle: "Sprachen",

  contactTitle: "Kontakt",
  location: "Dortmund, Deutschland",
  footer: "Armin Iranpour · Dortmund",

  cv: {
    doc: "Lebenslauf",
    headline: "Maschinenbauingenieur | M.Sc. TU Dortmund | Produktions- & Logistikplanung · Konstruktion (CATIA V5) · Materialflusssimulation",
    summaryTitle: "Kurzprofil",
    summary: "Masterstudent Maschinenbau an der TU Dortmund (Profil IT in Produktion und Logistik, Notendurchschnitt 1,4) mit rund 4 Jahren Praxis in der Konstruktion von Lamellenkupplungen für die Öl- und Gasindustrie – eng verzahnt mit Fertigung, Einkauf und Montage. Vertieft im Studium Materialflusssimulation, Supply Chain Management und Datenanalyse. Sucht eine Werkstudentenstelle oder einen Einstieg in Produktion, Konstruktion oder Logistik im Raum Dortmund.",
    expTitle: "Berufserfahrung", eduTitle: "Ausbildung", projTitle: "Projekte", skillsTitle: "Kenntnisse",
    toolsLabel: "Kenntnisse:", place: "Dortmund", date: d => d.toLocaleDateString("de-DE")
  }
},

/* ================================ ENGLISH ================================ */
en: {
  title: "Armin Iranpour – Mechanical Engineer",
  description: "Armin Iranpour – mechanical engineer and M.Sc. student at TU Dortmund. Production and logistics planning, mechanical design (CATIA V5), material flow simulation.",
  nav: { proj:"Projects", path:"Background", contact:"Contact", other:"DE", otherLabel:"Deutsche Version" },
  ctaCv: "CV (PDF)", ctaMail: "Send an email", ctaCvFull: "Full CV (PDF)",

  site: {
    tagline: "Mechanical engineer for design, production and logistics planning.",
    bio: "M.Sc. student at TU Dortmund with four years of design experience in the oil and gas industry.",
    projTitle: "Selected projects", pathTitle: "Background", skillsTitle: "Skills",
    projects: [
      { meta:"Industry · 2020–2024", title:"Multi-disc clutches for the oil and gas industry", text:"Designed 25+ assemblies in CATIA V5 – from sizing to commissioning at the customer site.", result:"+20% service life · −15% assembly time", tools:"CATIA V5" },
      { meta:"TU Dortmund", title:"Digital twin of a production line", text:"Built a simulation model and compared four layout and control scenarios.", result:"+12% simulated throughput", tools:"Enterprise Dynamics" },
      { meta:"TU Dortmund", title:"FEA of a stepped shaft", text:"Simulated the stress concentration, validated it analytically and optimised the notch geometry.", result:"−18% peak stress", tools:"Abaqus" },
      { meta:"TU Dortmund", title:"KPI dashboard for logistics planners", text:"Prepared public logistics data (Eurostat) and visualised it as a dashboard.", result:"Presented at the chair", tools:"Python, Excel" }
    ],
    path: [
      ["since 2024", "M.Sc. Mechanical Engineering", "TU Dortmund · IT in Production and Logistics · GPA 1.4"],
      ["2020–2024", "Product Designer / Design Engineer", "Faraz Foolad Sanati Espadana Co., Isfahan"],
      ["2019", "Intern, Manufacturing and Logistics", "Esfahan Machinery Manufacturing Co., Isfahan"],
      ["2016–2020", "B.Sc. Mechanical Engineering", "University of Kashan"]
    ],
    skills: [
      ["Design", "CATIA V5, Abaqus, ANSYS, ISO technical drawings"],
      ["Planning & simulation", "Process planning, lean, Enterprise Dynamics"],
      ["Data", "Excel, Python, SQL, MATLAB"],
      ["Languages", "German C1, English fluent, Persian native"]
    ]
  },



  exp: [
    { role:"Product Designer / Design Engineer", org:FF, meta:"Full-time · Isfahan, Iran", date:"09/2020 – 08/2024",
      summary:"Design of multi-disc clutches for oil and gas plants, at the interface to production, purchasing and assembly.",
      items:[
        "Designed 25+ assemblies for manufacturability in CATIA V5, incl. manufacturing drawings and BOMs",
        "Wrote routing sheets and work instructions; cut assembly time per unit by about 15%",
        "Derived material requirements for around 40 orders per year; reduced ordering errors by about 20%",
        "Coordinated delivery dates with 15 suppliers; raised on-time delivery to about 90%",
        "Tracked lead times and removed bottlenecks with plant management; cut lead time by about 10%",
        "Analysed field failures with 5-Why and Ishikawa; extended disc service life by about 20%",
        "Supported on-site assembly and commissioning"],
      tools:"CATIA V5 · Production planning · Process planning · Microsoft Excel · Root-cause analysis" },
    { role:"Intern, Manufacturing and Logistics", org:EMM, meta:"Internship · Isfahan, Iran", date:"06/2019 – 09/2019",
      items:[
        "Mapped material and information flows between warehouse and production; documented waiting times at 6 workstations",
        "Prepared and checked technical drawings for manufacturing projects"] }
  ],

  proj: [
    { title:"Material Flow Simulation & Digital Twin Design Lab", ctx:"TU Dortmund", tools:"Enterprise Dynamics",
      text:"Built a production-line model and evaluated 4 layout and control scenarios by throughput, utilisation and lead time; identified the bottleneck station.",
      result:"about 12% higher simulated throughput (recommended scenario)" },
    { title:"Data Product – Information Systems Case Study", ctx:"TU Dortmund", tools:"Python (Pandas), Excel",
      text:"Cleaned and analysed public logistics data (Eurostat) and built a KPI dashboard in Excel for logistics planners.",
      result:"Dashboard presented at the chair" },
    { title:"FEM Analysis of Machine Elements", ctx:"TU Dortmund", tools:"Abaqus",
      text:"Simulated stress concentrations in a stepped shaft, validated against the analytical solution (deviation below 5%) and optimised the notch geometry.",
      result:"Peak stress lowered by about 18%" }
  ],
  projLabels: { ctx:"Context", tools:"Tools", result:"Result" },

  edu: [
    { degree:"Master of Science, Mechanical Engineering", school:"TU Dortmund University", date:"10/2024 – 03/2027 (expected)", note:"GPA 1.4 (German scale)",
      text:"IT in Production and Logistics. Focus: material flow simulation, supply chain management, production systems, data analysis, industrial information systems." },
    { degree:"Bachelor of Science, Mechanical Engineering", school:"University of Kashan, Iran", date:"09/2016 – 09/2020",
      text:"Thesis: technical and economic feasibility of an additively manufactured plate heat exchanger, including a cost comparison with conventional manufacturing." }
  ],

  skills: [
    ["Mechanical design", "Mechanical design, CATIA V5, technical drawing (ISO), finite element analysis (Abaqus, ANSYS), machine elements, strength calculation, drive technology, material selection, design for manufacturing, manufacturing technology, assembly, commissioning"],
    ["Planning & production", "Production planning, process planning, logistics planning, supply chain management, lean manufacturing, process optimisation"],
    ["Simulation & data", "Material flow simulation (Enterprise Dynamics), MATLAB, Microsoft Excel, Python, SQL"],
    ["Methods", "Root-cause analysis (5-Why, Ishikawa), reliability engineering, cross-functional collaboration"]
  ],
  langs: [["German","Professional working proficiency (C1, TestDaF TDN 5)"],["English","Fluent"],["Persian","Native"]],
  langsTitle: "Languages",

  contactTitle: "Contact",
  location: "Dortmund, Germany",
  footer: "Armin Iranpour · Dortmund",

  cv: {
    doc: "Curriculum Vitae",
    headline: "Mechanical Engineer | M.Sc. TU Dortmund | Production & Logistics Planning · Mechanical Design (CATIA V5) · Material Flow Simulation",
    summaryTitle: "Summary",
    summary: "Master's student in Mechanical Engineering at TU Dortmund (IT in Production and Logistics, GPA 1.4 on the German scale) with about 4 years of experience designing multi-disc clutches for the oil and gas industry, working closely with production, purchasing and assembly. Focus on material flow simulation, supply chain management and data analysis. Looking for a working student role or an entry-level position in production, design or logistics in the Dortmund area.",
    expTitle: "Experience", eduTitle: "Education", projTitle: "Projects", skillsTitle: "Skills",
    toolsLabel: "Skills:", place: null, date: null
  }
}
};

/* shared helpers */
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function pickLang(){
  const p = new URLSearchParams(location.search).get("lang");
  if (CONTENT[p]) return p;
  try { const s = localStorage.getItem("ai-lang"); if (CONTENT[s]) return s; } catch(e){}
  return (navigator.language || "de").toLowerCase().startsWith("de") ? "de" : "en";
}
function saveLang(l){
  try { localStorage.setItem("ai-lang", l); } catch(e){}
  const u = new URL(location.href); u.searchParams.set("lang", l); history.replaceState(null, "", u);
}
