// Add your downloadable files here.
//
// HOW TO ADD A NEW FILE:
//   1. Drop the file (PDF, DOC, ZIP, image, etc.) into:
//      frontend/public/downloads/
//   2. Add an entry below with `file: "/downloads/<filename>"`.
//      The leading slash + "downloads" is required — Vite serves the public/
//      folder from the site root.
//
// Large files (e.g. the NCC handbooks) are hosted on Google Drive instead to
// keep the site lightweight — just put the full Drive share link in `file`.
//
// Optional fields you can use: date, size, category, type.

export const downloadsData = [
  // Hidden until the real form is available — /downloads/sample.pdf was never added.
  // {
  //   id: 1,
  //   title: "NCC Enrollment Form",
  //   description: "Official enrollment form for new cadets joining the MNIT NCC unit.",
  //   file: "/downloads/sample.pdf",
  //   date: "2026-01-01",
  // },
  {
    id: 2,
    title: "NCC Handbook — Army (SD/SW)",
    description: "Official NCC Army subjects handbook for Senior Division and Senior Wing cadets (PDF, ~50 MB).",
    file: "https://drive.google.com/file/d/15KodyJRJr0e4yLX4JF5PUq-jWvlLbESW/view",
    date: "2025-10-17",
  },
  {
    id: 3,
    title: "NCC Handbook — Life Skills (SD/SW)",
    description: "Official NCC Life Skills handbook for Senior Division and Senior Wing cadets (PDF, ~36 MB).",
    file: "https://drive.google.com/file/d/1THA-YUzFn55mDkeurnjgDMn37RTRJkdJ/view",
    date: "2025-10-17",
  },
  {
    id: 4,
    title: "NCC Handbook — Nation Building & Common Paper (SD/SW)",
    description: "Official NCC Nation Building & Common Paper handbook for Senior Division and Senior Wing cadets (PDF, ~52 MB).",
    file: "https://drive.google.com/file/d/1Hr_F_Cg0ZvirXMr6XYCAuF2NdNpT8qqJ/view",
    date: "2025-10-17",
  },
  {
    id: 5,
    title: "NCC Handbook — Tech Skills (SD/SW)",
    description: "Official NCC Tech Skills handbook for Senior Division and Senior Wing cadets (PDF, ~29 MB).",
    file: "https://drive.google.com/file/d/1IqDM0kNq6mGDwtjkAGq3qU61MFipbFNm/view",
    date: "2025-10-17",
  },
  // {
  //   id: 2,
  //   title: "Annual Report 2025",
  //   description: "A summary of all activities, drills, and achievements of the unit in 2025.",
  //   file: "/downloads/annual-report-2025.pdf",
  //   date: "2025-12-31",
  // },
];
