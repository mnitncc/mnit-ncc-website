import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { teamData } from "../data/teamData";

const Team = () => {
  const { director, faculty, office, cadets } = teamData;
  const [activeTab, setActiveTab] = useState("cadets");

  const tabs = [
    { id: "cadets", label: "Cadets" },
    { id: "leadership", label: "Leadership & Staff" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="w-full min-h-screen bg-mnit-tint py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gradient-ncc tracking-tight">
          Meet Our Team
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
          The dedicated leaders and cadets of NCC MNIT Jaipur.
        </p>
      </motion.div>

      {/* Tab Switcher */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-white rounded-full shadow-md p-1.5 gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-mnit-blue text-white shadow"
                  : "text-mnit-blue hover:bg-mnit-tint"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "leadership" ? (
          <motion.div
            key="leadership"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Director Section */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="max-w-2xl mx-auto mb-10"
            >
              <div className="flex justify-center">
                <motion.div
                  variants={itemVariants}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-sm w-full transform transition hover:scale-105 duration-300 border-t-4 border-mnit-blue"
                >
                  <div className="h-64 overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img
                      src={director.image}
                      alt={director.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {director.name}
                    </h2>
                    <p className="text-mnit-red font-semibold text-lg mb-4">
                      {director.role}
                    </p>
                    <p className="text-gray-600 italic">"{director.message}"</p>
                  </div>
                </motion.div>
              </div>
            </motion.section>

            {/* Faculty Section */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="max-w-5xl mx-auto mb-20"
            >
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-mnit-blue">
                  Faculty Advisors
                </h2>
                <div className="w-24 h-1 bg-mnit-red mx-auto mt-2 rounded"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                {faculty.map((member) => (
                  <motion.div
                    key={member.id}
                    variants={itemVariants}
                    className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-xs transform transition hover:-translate-y-2 duration-300 border-t-4 border-mnit-blue"
                  >
                    <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-mnit-red font-medium mt-1">
                        {member.role}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Office Staff Section */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="max-w-5xl mx-auto mb-10"
            >
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-mnit-blue">
                  Office Staff
                </h2>
                <div className="w-24 h-1 bg-mnit-red mx-auto mt-2 rounded"></div>
              </div>
              <div className="flex flex-wrap justify-center gap-8">
                {office.map((member) => (
                  <motion.div
                    key={member.id}
                    variants={itemVariants}
                    className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-xs transform transition hover:-translate-y-2 duration-300 border-t-4 border-mnit-blue"
                  >
                    <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-mnit-red font-medium mt-1">
                        {member.role}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </motion.div>
        ) : (
          <motion.div
            key="cadets"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Cadets Section */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="max-w-7xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-mnit-blue">Our Cadets</h2>
                <p className="mt-2 text-lg font-semibold text-mnit-red">
                  NCC Batch 2025-26
                </p>
                <div className="w-24 h-1 bg-mnit-red mx-auto mt-2 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
                {cadets.map((cadet) => (
                  <motion.div
                    key={cadet.id}
                    variants={itemVariants}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-xs border-t-4 border-mnit-blue"
                  >
                    <div className="h-72 md:h-80 overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img
                        src={cadet.image}
                        alt={cadet.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-bold text-gray-900">
                        {cadet.name}
                      </h3>
                      <p className="text-sm font-semibold text-mnit-blue uppercase tracking-wide">
                        {cadet.rank}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{cadet.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Team;
