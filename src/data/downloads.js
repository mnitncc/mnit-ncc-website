// Add your downloadable files here.
//
// HOW TO ADD A NEW FILE:
//   1. Drop the file (PDF, DOC, ZIP, image, etc.) into:
//      frontend/public/downloads/
//   2. Add an entry below with `file: "/downloads/<filename>"`.
//      The leading slash + "downloads" is required — Vite serves the public/
//      folder from the site root.
//
// Optional fields you can use: date, size, category, type.

export const downloadsData = [
  {
    id: 1,
    title: "NCC Enrollment Form",
    description: "Official enrollment form for new cadets joining the MNIT NCC unit.",
    file: "/downloads/sample.pdf",
    date: "2026-01-01",
  },
  // {
  //   id: 2,
  //   title: "Annual Report 2025",
  //   description: "A summary of all activities, drills, and achievements of the unit in 2025.",
  //   file: "/downloads/annual-report-2025.pdf",
  //   date: "2025-12-31",
  // },
];
