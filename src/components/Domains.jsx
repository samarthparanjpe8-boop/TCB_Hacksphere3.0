import React from 'react';
import { Globe, BrainCircuit, ShieldAlert, Cpu } from 'lucide-react';

const Domains = ({ id }) => {
  const domainsList = [
    { 
      id: "01", name: "WEB DEVELOPMENT", 
      desc: "Build the next generation of web experiences. Frontend, backend, full-stack — the internet is your playground.",
      tags: ["REACT", "NODE.JS", "APIS", "UI/UX"],
      icon: <Globe size={32} className="domain-icon text-gold" />
    },
    { 
      id: "02", name: "ARTIFICIAL INTELLIGENCE", 
      desc: "Train models. Solve problems. Make machines think. AI is the weapon of the future — wield it.",
      tags: ["LLMS", "COMPUTER VISION", "NLP", "AGENTS"],
      icon: <BrainCircuit size={32} className="domain-icon text-orange" />
    },
    { 
      id: "03", name: "CYBER SECURITY", 
      desc: "Find the vulnerabilities. Patch the holes. In this city, every system has a weakness. Find it first.",
      tags: ["CTF", "PENTESTING", "FORENSICS", "CRYPTO"],
      icon: <ShieldAlert size={32} className="domain-icon text-gold" />
    },
    { 
      id: "04", name: "MACHINE LEARNING", 
      desc: "Data in. Predictions out. Build systems that learn, adapt, and outsmart the competition.",
      tags: ["NEURAL NETS", "DATA SCIENCE", "PYTORCH", "MLOPS"],
      icon: <Cpu size={32} className="domain-icon text-orange" />
    }
  ];

  return (
    <section id={id} className="domains-section">
      <p className="section-label align-center reveal">/ BATTLEGROUNDS</p>
      <h2 className="section-title align-center text-white reveal">DOMAINS</h2>
      
      <div className="domains-grid">
        {domainsList.map((domain) => (
          <div key={domain.id} className="domain-card reveal">
            <div className="domain-header">
              <span className="domain-id">DOMAIN {domain.id}</span>
              {domain.icon}
            </div>
            
            <h3 className="domain-name">{domain.name}</h3>
            <p className="domain-desc text-muted">{domain.desc}</p>
            
            <div className="domain-tags">
              {domain.tags.map(tag => (
                <span key={tag} className="domain-tag text-gold">{tag}</span>
              ))}
            </div>
            
            {/* Faint background number for style */}
            <div className="domain-bg-number">{domain.id}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Domains;
