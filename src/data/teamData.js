import Director from '../assets/team/director.webp';
import dean from '../assets/team/dean.webp';
import facultyCoordinator from '../assets/team/faculty-coordinator.webp';
import ankit from '../assets/team/ankit.webp';

import ashish from '../assets/team/cadets/ashish.webp';
import bhargoDeol from '../assets/team/cadets/bhargo-deol.webp';
import dinesh from '../assets/team/cadets/dinesh.webp';
import dishaMeena from '../assets/team/cadets/disha-meena.webp';
import divya from '../assets/team/cadets/divya.webp';
import gaurav from '../assets/team/cadets/gaurav.webp';
import harshita from '../assets/team/cadets/harshita.webp';
import himanshu from '../assets/team/cadets/himanshu.webp';
import jayant from '../assets/team/cadets/jayant.webp';
import kaustubhiDevi from '../assets/team/cadets/kaustubhi-devi.webp';
import mahesh from '../assets/team/cadets/mahesh.webp';
import patnala from '../assets/team/cadets/patnala.webp';
import rohit from '../assets/team/cadets/rohit.webp';
import uttamSingh from '../assets/team/cadets/uttam-singh.webp';
import chaitanya from '../assets/team/cadets/chaitanya.webp';

export const teamData = {
  director: {
    name: "Prof. N.P. Padhy",
    role: "Director, MNIT Jaipur",
    image: Director,
    message: "Leading with vision and excellence.",
  },
  faculty: [
    {
      id: 1,
      name: "Prof. Satish Pipralia",
      role: "Dean of Students Welfare",
      image: dean,
    },
    {
      id: 2,
      name: "Dr. Anup Malik",
      role: "Faculty Coordinator (NCC)",
      image: facultyCoordinator,
    },
  ],
  office: [
    {
      id: 1,
      name: "Mr. Ankit Sharma",
      role: "Office Assistant",
      image: ankit,
    },
  ],
  cadets: [
    { id: 3,  name: "Harshita",                              rank: "Sgt",   role: "Architecture",                 image: harshita },
    { id: 12, name: "Uttam Singh",                           rank: "Cpl",   role: "Electrical Engineering",       image: uttamSingh },
    { id: 11, name: "Rohit",                                 rank: "LCpl",  role: "Mechanical Engineering",       image: rohit },
    { id: 1,  name: "Disha Meena",                           rank: "Cadet", role: "Computer Science Engineering", image: dishaMeena },
    { id: 2,  name: "Divya",                                 rank: "Cadet", role: "Civil Engineering",            image: divya },
    { id: 13, name: "Bhargo Deol",                           rank: "Cadet", role: "Architecture",                 image: bhargoDeol },
    { id: 4,  name: "Laishram Kaustubhi Devi",               rank: "Cadet", role: "Architecture",                 image: kaustubhiDevi },
    { id: 5,  name: "PATNALA JAYA SRI SAI VENKATA JYOTHIKA", rank: "Cadet", role: "Chemical Engineering",         image: patnala },
    { id: 6,  name: "ASHISH SIKARWAR",                       rank: "Cadet", role: "Mechanical Engineering",       image: ashish },
    { id: 7,  name: "GUGULOTHU DINESH",                      rank: "Cadet", role: "Electrical Engineering",       image: dinesh },
    { id: 8,  name: "Gaurav kumar",                          rank: "Cadet", role: "Chemical Engineering",         image: gaurav },
    { id: 9,  name: "Himanshu",                              rank: "Cadet", role: "Civil Engineering",            image: himanshu },
    { id: 10, name: "Mahesh kumar",                          rank: "Cadet", role: "Mechanical Engineering",       image: mahesh },
    { id: 14, name: "Jayant Gautam",                         rank: "Cadet", role: "Chemical Engineering",         image: jayant },
    { id: 15, name: "Chaitanya",                             rank: "Cadet", role: "Computer Science Engineering", image: chaitanya },
  ],
};
