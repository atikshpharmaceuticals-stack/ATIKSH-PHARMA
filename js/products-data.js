/**
 * ATIKSH PHARMA - Scalable Pharmaceutical Product Master Database
 */

const ATIKSH_MASTER_PRODUCTS = [
  {
    id: "atiksh-cv-625",
    name: "ATIKSH-CV 625",
    composition: "Amoxicillin 500 mg + Potassium Clavulanate 125 mg",
    category: "Tablets",
    dosageForm: "Tablet",
    strength: "625 mg",
    packSize: "10 x 1 x 10 Alu-Alu",
    indication: "Severe respiratory tract infections (RTI), urinary tract infections (UTI), ENT, and soft-tissue bacterial infections.",
    description: "A potent broad-spectrum bactericidal penicillin antibiotic combined with a beta-lactamase inhibitor to overcome beta-lactam resistance in susceptible bacterial strains.",
    storage: "Store below 25°C in a dry place. Protect from light and moisture.",
    keyPoints: [
      "Quality Certified Formulation",
      "Superior Bioavailability Profile",
      "High Stability Alu-Alu Blister Packing"
    ],
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "atiksh-dsr",
    name: "ATIKSH-DSR",
    composition: "Pantoprazole 40 mg + Domperidone 30 mg (Sustained Release)",
    category: "Capsules",
    dosageForm: "Capsule",
    strength: "40 mg + 30 mg",
    packSize: "10 x 10 Alu-Alu",
    indication: "Gastroesophageal Reflux Disease (GERD), peptic ulcers, non-ulcer dyspepsia, and chronic acid regurgitation.",
    description: "A synergistic combination of an enteric-coated proton pump inhibitor and a prokinetic agent providing 24-hour sustained gastric acid suppression and accelerated motility.",
    storage: "Store in a cool, dry place below 25°C. Keep away from direct sunlight.",
    keyPoints: [
      "Dual-Release Granule Formulation",
      "Rapid Symptom Relief within 30 Minutes",
      "Optimal Gastro-Protection"
    ],
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1550572017-ed2365287f3b?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "atimont-lc",
    name: "ATIMONT-LC",
    composition: "Montelukast Sodium 10 mg + Levocetirizine Dihydrochloride 5 mg",
    category: "Tablets",
    dosageForm: "Tablet",
    strength: "10 mg + 5 mg",
    packSize: "10 x 10 Alu-Alu",
    indication: "Allergic rhinitis, seasonal asthmatic symptoms, bronchospasms, and perennial allergic conjunctivitis.",
    description: "Comprehensive dual-action leukotriene receptor antagonist and non-sedating H1-antihistamine designed for 24-hour complete relief from allergic respiratory distress.",
    storage: "Store below 30°C in a dry place. Protect from moisture.",
    keyPoints: [
      "Once-Daily Convenient Dosing",
      "Non-Sedative Allergy Control",
      "Targeted Bronchial Protection"
    ],
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "atizith-500",
    name: "ATIZITH-500",
    composition: "Azithromycin 500 mg (Film Coated)",
    category: "Tablets",
    dosageForm: "Tablet",
    strength: "500 mg",
    packSize: "10 x 3 Blister",
    indication: "Community-acquired pneumonia, acute bacterial sinusitis, tonsillitis, pharyngitis, and skin structure infections.",
    description: "A second-generation macrolide azalide antibiotic characterized by extended tissue half-life and comprehensive therapeutic coverage against atypical pathogens.",
    storage: "Store in a dry place below 25°C. Protect from moisture.",
    keyPoints: [
      "High Compliance 3-Day Course",
      "Superior Tissue Penetration",
      "Proven Clinical Efficacy"
    ],
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "atiksh-flam-sp",
    name: "ATIKSH-FLAM SP",
    composition: "Aceclofenac 100 mg + Paracetamol 325 mg + Serratiopeptidase 15 mg",
    category: "Tablets",
    dosageForm: "Tablet",
    strength: "100 mg + 325 mg + 15 mg",
    packSize: "10 x 10 Alu-Alu",
    indication: "Post-traumatic inflammation, osteoarthritis, rheumatoid arthritis, dental extractions, and orthopedic pain.",
    description: "Triple-powered analgesic, anti-inflammatory, and proteolytic enzyme formulation providing rapid pain management and edema resolution.",
    storage: "Store protected from moisture and direct light below 25°C.",
    keyPoints: [
      "Triple Active Synergistic Action",
      "Accelerated Edema Reduction",
      "High Gastrointestinal Tolerability"
    ],
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=600&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "atical-500-d3",
    name: "ATICAL-500 D3",
    composition: "Calcium Carbonate 1250 mg (Eq. to Elemental Calcium 500 mg) + Vitamin D3 250 IU",
    category: "Nutraceuticals",
    dosageForm: "Tablet",
    strength: "500 mg + 250 IU",
    packSize: "10 x 15 Blister",
    indication: "Osteoporosis, osteopenia, pregnancy & lactation, post-menopausal bone health, and fracture healing.",
    description: "Essential bone mineral density formulation combining high-purity elemental calcium with bioactive Cholecalciferol for optimal intestinal calcium absorption.",
    storage: "Store in a cool and dry place below 30°C.",
    keyPoints: [
      "High Bioavailability Calcium",
      "Essential Bone Strength Support",
      "Convenient Daily Mineral Supplement"
    ],
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "atiksh-kof-dx",
    name: "ATIKSH-KOF DX",
    composition: "Dextromethorphan HBr 10 mg + Phenylephrine HCl 5 mg + Chlorpheniramine Maleate 2 mg",
    category: "Syrups & Liquids",
    dosageForm: "Liquid / Syrup",
    strength: "Per 5 ml",
    packSize: "100 ml Pet Bottle with Measuring Cap",
    indication: "Dry irritating cough, allergic cough, nasal congestion, sneezing, and upper respiratory congestion.",
    description: "Non-narcotic, alcohol-free antitussive syrup with decongestant and antihistaminic actions for quick respiratory comfort.",
    storage: "Store in a cool place protected from light.",
    keyPoints: [
      "Non-Drowsy Daytime Formula",
      "Pleasant Palatable Flavor",
      "Fast Decongestant Action"
    ],
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "atizole-400",
    name: "ATIZOLE-400",
    composition: "Albendazole 400 mg (Chewable)",
    category: "Tablets",
    dosageForm: "Tablet",
    strength: "400 mg",
    packSize: "Single Tablet Blister",
    indication: "Broad-spectrum anthelmintic for single or mixed intestinal helminthic infections.",
    description: "High efficacy deworming therapy for eradicating roundworm, pinworm, hookworm, and tapeworm infections across adults and children.",
    storage: "Store below 25°C. Protect from direct heat and moisture.",
    keyPoints: [
      "Palatable Chewable Format",
      "Single-Dose Efficacy",
      "Pan-Parasitic Eradication"
    ],
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=600&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "atitel-40-am",
    name: "ATITEL-40 AM",
    composition: "Telmisartan 40 mg + Amlodipine 5 mg",
    category: "Tablets",
    dosageForm: "Tablet",
    strength: "40 mg + 5 mg",
    packSize: "10 x 10 Alu-Alu",
    indication: "Essential hypertension, cardiovascular risk reduction, and combined arterial pressure management.",
    description: "Fixed-dose combination of an angiotensin receptor blocker and a dihydropyridine calcium channel blocker for 24-hour hemodynamic control.",
    storage: "Store below 30°C in a dry place.",
    keyPoints: [
      "24-Hour Smooth BP Control",
      "Cardioprotective & Renoprotective",
      "Standard First-Line Hypertension Care"
    ],
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "atimet-500-sr",
    name: "ATIMET-500 SR",
    composition: "Metformin Hydrochloride 500 mg (Sustained Release)",
    category: "Tablets",
    dosageForm: "Tablet",
    strength: "500 mg",
    packSize: "10 x 10 Blister",
    indication: "Type 2 Diabetes Mellitus, insulin resistance, and glycemic management in adults.",
    description: "Gold-standard sustained-release biguanide improving insulin sensitivity and reducing hepatic glucose output with minimal GI distress.",
    storage: "Store below 25°C in a moisture-proof container.",
    keyPoints: [
      "Sustained-Release Matrix",
      "Reduced Gastrointestinal Discomfort",
      "Reliable Fasting & Post-Prandial Glycemic Control"
    ],
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=600&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "atizone-sb-1-5g",
    name: "ATIZONE-SB 1.5g Inj",
    composition: "Ceftriaxone Sodium 1000 mg + Sulbactam Sodium 500 mg",
    category: "Injections",
    dosageForm: "Injectable",
    strength: "1.5 g (1500 mg)",
    packSize: "Vial with Sterile Water for Injection",
    indication: "Severe hospital-acquired infections, sepsis, intra-abdominal infections, meningitis, and surgical prophylaxis.",
    description: "Third-generation cephalosporin coupled with beta-lactamase inhibitor processed under sterile lyophilization standards.",
    storage: "Store below 25°C protected from light. Reconstituted solution to be used immediately.",
    keyPoints: [
      "Sterile Lyophilized Preparation",
      "Broad Spectrum Antibacterial Potency",
      "Packaged with Sterile Water for Injection (SWFI)"
    ],
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "atiderm-kt",
    name: "ATIDERM-KT Cream",
    composition: "Ketoconazole 2% w/w + Clobetasol Propionate 0.05% w/w + Neomycin 0.5% w/w",
    category: "Ointments & Creams",
    dosageForm: "Ointment / Cream",
    strength: "15 g Tube",
    packSize: "15 g Laminated Tube with Cartoned Pack",
    indication: "Mixed dermatological infections, eczema, fungal dermatomycoses, contact dermatitis, and inflammatory skin conditions.",
    description: "Triple-action topical cream providing antifungal, antibacterial, and anti-pruritic relief with rapid epidermal soothing.",
    storage: "Store below 25°C. Do not freeze.",
    keyPoints: [
      "Multi-Action Topical Solution",
      "Non-Greasy Rapid Absorption",
      "Soothes Itching & Inflammatory Flare-ups"
    ],
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1550572017-ed2365287f3b?w=600&auto=format&fit=crop&q=80"
    ]
  }
];

// Helper functions for global database access
function getAtikshMasterCatalog() {
  try {
    const local = localStorage.getItem('atiksh_products');
    if (local) {
      const parsed = JSON.parse(local);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn("Using default Atiksh master database.", e);
  }
  return ATIKSH_MASTER_PRODUCTS;
}

function getAtikshProductById(productId) {
  const catalog = getAtikshMasterCatalog();
  return catalog.find(p => p.id === productId || String(p.id).toLowerCase() === String(productId).toLowerCase()) || null;
}
