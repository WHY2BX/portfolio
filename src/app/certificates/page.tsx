"use client";

import { motion } from "framer-motion";
import { Award, Calendar, ShieldCheck, FileCheck } from "lucide-react";
import Footer from "@/components/Footer";

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verifyLink: string;
};

const certificates: Certificate[] = [
  {
    title: "Professional Cloud Architect",
    issuer: "Google Cloud",
    date: "MARCH 2025",
    credentialId: "GCP-PCA-9938",
    verifyLink: "https://google.com",
  },
  {
    title: "Solutions Architect - Professional",
    issuer: "Amazon Web Services (AWS)",
    date: "NOVEMBER 2024",
    credentialId: "AWS-SAP-7483",
    verifyLink: "https://amazon.com",
  },
  {
    title: "Terraform Associate",
    issuer: "HashiCorp",
    date: "JULY 2024",
    credentialId: "HC-TA-2901",
    verifyLink: "https://hashicorp.com",
  },
  {
    title: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    date: "SEPTEMBER 2023",
    credentialId: "FCC-FEDL-8822",
    verifyLink: "https://freecodecamp.org",
  },
  {
    title: "Certified ScrumMaster (CSM)",
    issuer: "Scrum Alliance",
    date: "JUNE 2023",
    credentialId: "SA-CSM-4402",
    verifyLink: "https://scrumalliance.org",
  },
  {
    title: "MongoDB Certified Developer Associate",
    issuer: "MongoDB University",
    date: "FEBRUARY 2023",
    credentialId: "MDB-CDA-1109",
    verifyLink: "https://mongodb.com",
  },
];

export default function CertificatesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 120, damping: 22 },
    },
  };

  return (
    <>
      <main className="min-h-screen pt-36 pb-20 px-4 md:px-12 flex flex-col items-center relative overflow-hidden select-none">
        
        {/* Ambient light ring */}
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[400px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

        {/* Header Title */}
        <div className="text-center max-w-xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/5 bg-white/5 mb-4">
            <Award className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-[10px] font-mono tracking-widest text-indigo-200 uppercase">Verification</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase mb-2 text-gradient-white">
            CREDENTIAL ARCHIVE
          </h1>
          <p className="text-xs md:text-sm text-white/50">
            Professional certifications, technical credentials, and engineering achievements.
          </p>
        </div>

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.credentialId}
              variants={cardVariants}
              className="glass-panel p-6 rounded-2xl hover:bg-white/[0.04] transition-all duration-300 border-white/5 flex flex-col justify-between h-[190px] relative group overflow-hidden"
            >
              {/* Subtle top card glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="space-y-3 relative z-10">
                <div className="flex justify-between items-start">
                  <span className="text-[9px] font-mono bg-white/5 border border-white/12 text-zinc-300 px-2 py-0.5 rounded-md uppercase font-semibold">
                    {cert.issuer}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-white opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h2 className="text-sm font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors line-clamp-2">
                  {cert.title}
                </h2>
              </div>

              <div className="border-t border-white/5 pt-3 flex items-center justify-between mt-4 relative z-10">
                <div>
                  <div className="flex items-center gap-1 text-[8px] font-mono text-white/40 uppercase">
                    <Calendar className="w-3 h-3" />
                    <span>Issued</span>
                  </div>
                  <span className="text-[9px] font-bold text-white/70">{cert.date}</span>
                </div>
                
                <a
                  href={cert.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-button text-[9px] font-bold uppercase tracking-wider text-white/80 hover:text-white px-3 py-1.5 rounded-lg flex items-center gap-1 border border-white/8 shadow"
                >
                  <FileCheck className="w-3.5 h-3.5" />
                  <span>Verify</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </main>
      <Footer />
    </>
  );
}
