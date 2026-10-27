import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserPlus, CheckCircle2, Award, Tent, Dumbbell, Briefcase, Phone, Bell, HelpCircle } from 'lucide-react';

const benefits = [
  { icon: Award, title: "'B' & 'C' Certificates", text: "Earn NCC certificates recognised across India, valued in Armed Forces, CAPF, police and other government recruitment." },
  { icon: Tent, title: "Camps Across India", text: "Annual training, trekking and Thal Sainik camps — our cadets have represented Rajasthan at the national level." },
  { icon: Dumbbell, title: "Fitness & Discipline", text: "Drill, physical training and weapon training build endurance, confidence and a disciplined routine." },
  { icon: Briefcase, title: "Leadership", text: "Hold appointments, lead teams at camps and events, and grow skills that carry into every career." },
];

const eligibility = [
  "A bonafide student of MNIT Jaipur.",
  "A citizen of India.",
  "Medically and physically fit for NCC training.",
  "Willing to attend regular parades, training and camps.",
];

const steps = [
  { title: "Watch for the enrollment notice", text: "Enrollment opens at the start of the academic session and is announced on the Notice Board and through the institute." },
  { title: "Register your interest", text: "Submit your details as instructed in the notice. Seats are limited — the unit has a sanctioned strength of 54 cadets." },
  { title: "Selection", text: "Shortlisted students go through the selection process conducted by the unit with 8 Raj Bn NCC." },
  { title: "Enrolment & training", text: "Selected students are enrolled as cadets of the Senior Division (SD) or Senior Wing (SW) and begin training." },
];

const Join = () => {
  return (
    <div className="min-h-screen bg-mnit-tint py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center p-3 bg-mnit-blue/10 rounded-full mb-4"
          >
            <UserPlus className="w-8 h-8 text-mnit-blue" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gradient-ncc"
          >
            Join NCC at MNIT
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-mnit-red to-mnit-gold mx-auto rounded-full mt-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg"
          >
            Become part of the 8 Raj Bn NCC family at MNIT Jaipur — and build discipline, leadership and a spirit of service.
          </motion.p>
        </div>

        {/* Why join */}
        <h2 className="text-2xl font-bold text-mnit-blue mb-6">Why Join?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map(({ icon: Icon, title, text }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 group hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-mnit-blue/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-mnit-blue transition-colors duration-300">
                <Icon className="w-6 h-6 text-mnit-blue group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-mnit-blue mb-2">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Who can join */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 border-t-4 border-t-mnit-blue p-8"
          >
            <h2 className="text-2xl font-bold text-mnit-blue mb-6">Who Can Join?</h2>
            <ul className="space-y-4">
              {eligibility.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-mnit-red flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-gray-500 leading-relaxed">
              Boys join the Senior Division (SD) and girls the Senior Wing (SW). Cadets can appear for the
              'B' certificate exam after completing the required training, and 'B' certificate holders can
              go on to the 'C' certificate.
            </p>
          </motion.div>

          {/* How to enroll */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 border-t-4 border-t-mnit-red p-8"
          >
            <h2 className="text-2xl font-bold text-mnit-blue mb-6">How to Enroll</h2>
            <ol className="space-y-5">
              {steps.map((step, idx) => (
                <li key={step.title} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-mnit-blue text-white text-sm font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mt-1">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>

        {/* Contact / next steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-mnit-blue to-mnit-navy rounded-3xl shadow-2xl text-white p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Have questions?</h2>
          <p className="text-gray-200 max-w-2xl mx-auto mb-8">
            Reach out to the Faculty Coordinator (NCC), or keep an eye on the Notice Board for the next enrollment drive.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+919549650950"
              className="inline-flex items-center gap-2 px-6 py-3 bg-mnit-red rounded-xl font-semibold hover:bg-red-700 transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" /> Dr. Anup Malik
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-colors"
            >
              <Bell className="w-5 h-5" /> Notice Board
            </Link>
            <Link
              to="/faqs"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-colors"
            >
              <HelpCircle className="w-5 h-5" /> FAQs
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Join;
