import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Search, FolderOpen } from 'lucide-react';
import { downloadsData } from '../data/downloads';

const fileNameFrom = (path) => {
  if (!path) return '';
  return path.split('/').pop();
};

const Downloads = () => {
  const [query, setQuery] = useState('');

  const filtered = downloadsData.filter((d) =>
    (d.title + ' ' + (d.description || '')).toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-mnit-tint py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center p-3 bg-mnit-blue/10 rounded-full mb-4"
          >
            <FolderOpen className="w-8 h-8 text-mnit-blue" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gradient-ncc"
          >
            Downloads
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
            className="text-gray-600 max-w-2xl mx-auto mt-4"
          >
            Forms, brochures, reports, and other resources from the NCC MNIT Jaipur unit.
          </motion.p>
        </div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative mb-8 max-w-xl mx-auto"
        >
          <input
            type="text"
            placeholder="Search downloads..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl border-2 border-gray-100 shadow-sm focus:border-mnit-blue focus:ring-4 focus:ring-mnit-blue/10 transition-all outline-none"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 border-t-4 border-t-mnit-blue overflow-hidden"
        >
          {filtered.length === 0 ? (
            <div className="p-12 text-center text-gray-500">
              {query ? `No results for "${query}"` : 'No files available yet. Check back soon.'}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-mnit-blue text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">#</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Title</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider hidden md:table-cell">Description</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filtered.map((item, idx) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-5 text-sm text-gray-500 align-top">{idx + 1}</td>
                      <td className="px-6 py-5 align-top">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-mnit-blue/10 flex items-center justify-center">
                            <FileText className="w-5 h-5 text-mnit-blue" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{item.title}</p>
                            <p className="text-xs text-gray-500 mt-0.5 md:hidden">{item.description}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-sm text-gray-600 align-top hidden md:table-cell max-w-md">
                        {item.description}
                      </td>
                      <td className="px-6 py-5 text-right align-top">
                        <a
                          href={item.file}
                          download={/^https?:\/\//.test(item.file) ? undefined : fileNameFrom(item.file)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-mnit-red text-white rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors shadow-sm hover:shadow-md"
                        >
                          <Download className="w-4 h-4" />
                          Download
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>

        {/* Footer note */}
        <p className="text-center text-xs text-gray-400 mt-6">
          Trouble downloading? Right-click the button and choose "Save link as…".
        </p>
      </div>
    </div>
  );
};

export default Downloads;
