// Camps attended by NCC MNIT cadets (ATC, CATC, TSC, etc.).
//
// Each camp has a `cover` image (shown on the card) and a `gallery` array
// (shown in the details modal). Images live in src/assets/camps/ and are
// imported below so Vite can bundle them.
//
// To add a camp, place its images in src/assets/camps/, import them, and add
// an object to the array following the same shape.

// --- AITC: All India Trekking Camp images ---
import aitc1 from '../assets/camps/aitc-1.webp';
import aitc2 from '../assets/camps/aitc-2.webp';
import aitc3 from '../assets/camps/aitc-3.webp';
import aitc4 from '../assets/camps/aitc-4.webp';
import aitc5 from '../assets/camps/aitc-5.webp';
import aitc6 from '../assets/camps/aitc-6.webp';
import aitc7 from '../assets/camps/aitc-7.webp';
import aitc8 from '../assets/camps/aitc-8.webp';

// --- CATC: Combined Annual Training Camp images ---
import catc1 from '../assets/camps/catc-1.webp';
import catc2 from '../assets/camps/catc-2.webp';
import catc3 from '../assets/camps/catc-3.webp';
import catc4 from '../assets/camps/catc-4.webp';
import catc5 from '../assets/camps/catc-5.webp';
import catc6 from '../assets/camps/catc-6.webp';
import catc7 from '../assets/camps/catc-7.webp';
import catc8 from '../assets/camps/catc-8.webp';
import catc9 from '../assets/camps/catc-9.webp';
import catc10 from '../assets/camps/catc-10.webp';
import catc11 from '../assets/camps/catc-11.webp';
import catc12 from '../assets/camps/catc-12.webp';
import catc13 from '../assets/camps/catc-13.webp';
import catc14 from '../assets/camps/catc-14.webp';
import catc15 from '../assets/camps/catc-15.webp';

// --- PRE TSC: Pre Thal Sainik Camp images ---
import pretsc1 from '../assets/camps/pretsc-1.webp';
import pretsc2 from '../assets/camps/pretsc-2.webp';
import pretsc3 from '../assets/camps/pretsc-3.webp';
import pretsc4 from '../assets/camps/pretsc-4.webp';
import pretsc5 from '../assets/camps/pretsc-5.webp';
import pretsc6 from '../assets/camps/pretsc-6.webp';
import pretsc7 from '../assets/camps/pretsc-7.webp';
import pretsc8 from '../assets/camps/pretsc-8.webp';
import pretsc9 from '../assets/camps/pretsc-9.webp';
import pretsc10 from '../assets/camps/pretsc-10.webp';

// --- IGC TSC: Inter-Group Competition Thal Sainik Camp images ---
import igctsc1 from '../assets/camps/igc-tsc-1.webp';
import igctsc2 from '../assets/camps/igc-tsc-2.webp';
import igctsc3 from '../assets/camps/igc-tsc-3.webp';
import igctsc4 from '../assets/camps/igc-tsc-4.webp';
import igctsc5 from '../assets/camps/igc-tsc-5.webp';
import igctsc6 from '../assets/camps/igc-tsc-6.webp';
import igctsc7 from '../assets/camps/igc-tsc-7.webp';
import igctsc8 from '../assets/camps/igc-tsc-8.webp';

export const campsData = [
  {
    id: 1,
    title: "All India Trekking Camp (AITC)",
    date: "June 1 – 8, 2026",
    location: "Amarkantak, Madhya Pradesh",
    image: aitc3,
    gallery: [aitc3, aitc1, aitc2, aitc4, aitc5, aitc6, aitc7, aitc8],
    description: [
      "The All India Trekking Camp (AITC) was held at Amarkantak, Madhya Pradesh, over 8 days from 1 to 8 June 2026. The camp brought together a total of 102 cadets drawn from five states — Uttarakhand, Uttar Pradesh, Rajasthan, Madhya Pradesh & Chhattisgarh, and Punjab.",
      "A 33-member contingent represented the Jaipur Group, including Cadet Gaurav from MNIT.",
      "Through a series of trekking activities, cadets developed endurance, teamwork and self-discipline, while building physical fitness and the confidence to overcome challenges. Interacting with NCC cadets from across the country strengthened communication skills and the spirit of national integration, alongside a greater sense of environmental awareness and leadership."
    ]
  },
  {
    id: 2,
    title: "Combined Annual Training Camp (CATC)",
    date: "May 25 – June 3, 2026",
    location: "Vardhman Srikalyan International School, Kalwar Road, Jaipur, Rajasthan",
    image: catc1,
    gallery: [catc1, catc6, catc2, catc3, catc4, catc5, catc7, catc8, catc9, catc10, catc11, catc12, catc13, catc14, catc15],
    description: [
      "The Combined Annual Training Camp (CATC) was conducted over 10 days from 25 May to 3 June 2026 at Vardhman Srikalyan International School, Kalwar Road, Jaipur, Rajasthan. The camp hosted a total of 550 cadets.",
      "MNIT was represented by 15 cadets (9 SD + 6 SW), several of whom held key appointments: Harshita (Girls' Camp Senior), Divya (Company Senior), Uttam Singh (Barrack In-charge and member of the Guard of Honour), and Rohit Shekhawat (2nd Company Senior).",
      "Cadets took part in cultural programmes, sports, debates and quizzes, and excelled on the firing range — Harshita, Jyothika and Uttam achieved an outstanding 2 cm grouping in shooting.",
      "Through drill, weapon training, physical fitness activities and personality-development sessions, the camp reinforced discipline, punctuality, teamwork and leadership, strengthening each cadet's confidence, sense of responsibility, self-reliance and national pride."
    ]
  },
  {
    id: 3,
    title: "Pre Thal Sainik Camp (Pre-TSC)",
    date: "June 1 – 20, 2026",
    location: "NCC Complex, Jaipur, Rajasthan",
    image: pretsc1,
    gallery: [pretsc1, pretsc9, pretsc2, pretsc3, pretsc4, pretsc5, pretsc6, pretsc7, pretsc8, pretsc10],
    description: [
      "Pre-TSC-1 was held at the NCC Complex under 3 RAJ Naval over 10 days from 1 to 10 June 2026, with 187 cadets (91 SW + 96 SD) drawn from 8 units. MNIT was represented by two senior-wing cadets, Harshita and Kaustubhi.",
      "Events included health & hygiene reading, judging distance and field craft, obstacle training and firing — Harshita competed in firing and Kaustubhi in map reading. Cadets also attended a night-sky observation session, viewing Jupiter and its moons through a telescope.",
      "Both MNIT cadets performed well and were selected for Pre-TSC-2, held at the NCC Complex under 1 RAJ Armed over 10 days from 11 to 20 June 2026, with 88 cadets (40 SW + 48 SD) from 8 units, again featuring events in health & hygiene, field craft, obstacle training and firing.",
      "Achievement: Harshita was subsequently selected for Pre TSC-3, marking a significant achievement for MNIT Jaipur NCC."
    ]
  },
  {
    id: 4,
    title: "Inter-Group Competition TSC-I (IGC TSC-I)",
    date: "July 27 – August 5, 2026",
    location: "Modi Law College, Kota, Rajasthan",
    image: igctsc1,
    gallery: [igctsc1, igctsc2, igctsc3, igctsc4, igctsc5, igctsc6, igctsc7, igctsc8],
    description: [
      "Following her successful completion of Pre TSC-I and Pre TSC-II, Cadet Harshita of MNIT Jaipur NCC earned selection for the prestigious Inter-Group Competition (IGC) TSC camps.",
      "IGC TSC-I was held at Modi Law College, Kota, under the supervision of 14 Raj BN NCC, Kota, bringing together 69 selected cadets across the Jodhpur, Jaipur, Kota, and Udaipur groups. The training and evaluation covered rigorous disciplines including Health & Hygiene, Map Reading, Judging Distance & Field Craft, Obstacle Training, and .22 Rifle Firing (Snap & Application).",
      "Harshita delivered an outstanding performance, securing 2nd position in IGC TSC-I."
    ]
  },
  {
    id: 5,
    title: "Inter-Group Competition TSC-II (IGC TSC-II)",
    date: "August 6 – 15, 2026",
    location: "Kota, Rajasthan",
    image: igctsc3,
    gallery: [igctsc3, igctsc2, igctsc1, igctsc4, igctsc5, igctsc6, igctsc7, igctsc8],
    description: [
      "IGC TSC-II saw Harshita competing among the shortlisted 28 cadets from the IGC TSC-I phase. Through intensive training in Health & Hygiene, Map Reading, Judging Distance & Field Craft, Obstacle Training, and .22 Rifle Firing, cadets were evaluated for their overall competence and readiness.",
      "Maintaining her exceptional form, Harshita once again secured the 2nd position in IGC TSC-II, demonstrating consistent excellence across both phases.",
      "Through her remarkable achievements in IGC TSC-I and IGC TSC-II, Harshita earned selection to represent the Rajasthan Directorate at the Thal Sainik Camp (TSC) in Delhi, bringing great pride to MNIT Jaipur NCC."
    ]
  }
];
