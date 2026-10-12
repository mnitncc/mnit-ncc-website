import Director from '../assets/team/director.jpg';
import dean from '../assets/team/dean.png';
import facultyCoordinator from '../assets/team/faculty-coordinator.jpeg';
import ankit from '../assets/team/ankit.jpeg';

import ashish from '../assets/team/cadets/ashish.jpeg';
import bhargoDeol from '../assets/team/cadets/bhargo-deol.jpeg';
import dinesh from '../assets/team/cadets/dinesh.jpeg';
import dishaMeena from '../assets/team/cadets/disha-meena.jpeg';
import divya from '../assets/team/cadets/divya.jpeg';
import gaurav from '../assets/team/cadets/gaurav.jpeg';
import harshita from '../assets/team/cadets/harshita.jpeg';
import himanshu from '../assets/team/cadets/himanshu.jpeg';
import jayant from '../assets/team/cadets/jayant.jpeg';
import kaustubhiDevi from '../assets/team/cadets/kaustubhi-devi.jpeg';
import mahesh from '../assets/team/cadets/mahesh.jpeg';
import patnala from '../assets/team/cadets/patnala.jpeg';
import rohit from '../assets/team/cadets/rohit.jpeg';
import uttamSingh from '../assets/team/cadets/uttam-singh.jpeg';
import chaitanya from '../assets/team/cadets/chaitanya.jpeg';

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
      name: "Prof. Kanupriya Sachdev",
      role: "Dean of Students Welfare",
      image: dean,
    },
    {
      id: 2,
      name: "Dr. Anup Malik",
      role: "Faculty Coordinator",
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
