import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Smart from "../assets/homeImage/school_b2.jpeg";
import SchoolRegister from "../form/SchoolRegister";

// ----------
// Admission Page – Single-file React component
// Tech: React + TailwindCSS + Framer Motion
// Features: Accessible form with client-side validation, responsive layout,
//            animated sections, SEO schema, trust badges, steps, FAQs, CTA,
//            online images, honeypot, basic toast, and UX niceties.
// ----------

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Section = ({ id, className = "", children }) => (
  <section id={id} className={`w-full max-w-6xl mx-auto px-4 md:px-6 ${className}`}>
    {children}
  </section>
);

const Badge = ({ label }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-slate-700 bg-white/60 border-slate-200 shadow-sm">
    {label}
  </span>
);

const Step = ({ index, title, desc }) => (
  <motion.li variants={fadeUp} className="relative pl-10">
    <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white font-semibold">
      {index}
    </span>
    <h4 className="font-semibold text-slate-900">{title}</h4>
    <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
  </motion.li>
);

const ProgramCard = ({ title, age, points }) => (
  <motion.div variants={fadeUp} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
    <h4 className="text-lg font-semibold text-slate-900 mb-1">{title}</h4>
    <p className="text-sm text-slate-500 mb-3">{age}</p>
    <ul className="list-disc pl-5 space-y-1 text-slate-600 text-sm">
      {points.map((p, i) => (
        <li key={i}>{p}</li>
      ))}
    </ul>
  </motion.div>
);

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-xl bg-white">
      <button
        className="w-full text-left px-5 py-4 flex items-center justify-between gap-3"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-medium text-slate-900">{q}</span>
        <span className="shrink-0 rounded-full border border-slate-300 size-6 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className={`size-4 transition-transform ${open ? "rotate-45" : ""}`}
          >
            <path strokeWidth="2" d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <div className={`grid transition-[grid-template-rows] duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden px-5 pb-4 text-slate-600 text-sm leading-relaxed">{a}</div>
      </div>
    </div>
  );
};

const Toast = ({ open, title, desc, onClose }) => {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed z-50 left-1/2 -translate-x-1/2 bottom-6 max-w-md w-[90%] rounded-xl border bg-white shadow-lg p-4 transition-all ${
        open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="rounded-full bg-emerald-100 text-emerald-700 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="size-5"><path strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
        </div>
        <div className="flex-1">
          <p className="font-semibold text-slate-900">{title}</p>
          {desc && <p className="text-sm text-slate-600">{desc}</p>}
        </div>
        <button onClick={onClose} className="rounded-lg border px-2 py-1 text-sm">Close</button>
      </div>
    </div>
  );
};

function useAdmissionForm() {
  const initial = useMemo(
    () => ({
      studentName: "",
      dob: "",
      grade: "",
      parentName: "",
      email: "",
      phone: "",
      address: "",
      prevSchool: "",
      docsUrl: "",
      note: "",
      consent: false,
      website: "" // honeypot
    }),
    []
  );
  const [data, setData] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  const validate = () => {
    const e = {};
    if (!data.studentName.trim()) e.studentName = "Student name is required";
    if (!data.dob) e.dob = "Date of birth is required";
    if (!data.grade) e.grade = "Please select a grade";
    if (!data.parentName.trim()) e.parentName = "Parent/Guardian name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Enter a valid email";
    if (!/^\+?[0-9\-()\s]{7,15}$/.test(data.phone)) e.phone = "Enter a valid phone number";
    if (!data.consent) e.consent = "You must agree to the policy";
    if (data.docsUrl && !/^https?:\/\/.+/.test(data.docsUrl)) e.docsUrl = "Document link must be a valid URL";
    return e;
  };

  const onChange = (field) => (ev) => {
    const value = ev.target.type === "checkbox" ? ev.target.checked : ev.target.value;
    setData((d) => ({ ...d, [field]: value }));
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (data.website) return; // honeypot caught bots silently
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    try {
      setSubmitting(true);
      // Simulate API call
      await new Promise((r) => setTimeout(r, 900));
      console.log("Admission form submitted:", data);
      setToastOpen(true);
      setData(initial);
    } finally {
      setSubmitting(false);
    }
  };

  return { data, errors, submitting, toastOpen, setToastOpen, onChange, onSubmit };
}

export default function AdmissionPage() {
  const form = useAdmissionForm();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* SEO JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "School Admission",
        "description": "Apply online for admission. Secure, fast and student-friendly process.",
        "url": "https://example.com/admissions"
      }) }} />

      {/* Hero */}
      <Section className="pt-10 md:pt-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <motion.h1 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Admissions <span className="text-indigo-600">2025–26</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-3 text-slate-600 max-w-prose">
              Join a future-ready community. Our holistic curriculum blends academics, arts, sports and technology to nurture confident, compassionate learners.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-5 flex flex-wrap gap-2">
              <Badge label="CBSE Aligned" />
              <Badge label="Transport Available" />
              <Badge label="Safe Campus" />
              <Badge label="Scholarships" />
            </motion.div>
            <motion.div variants={fadeUp} className="mt-6 flex gap-3">
              <a href="#apply" className="inline-flex items-center justify-center rounded-2xl bg-indigo-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-indigo-700">Apply Now</a>
              <a href="#process" className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 font-semibold hover:bg-slate-100">View Process</a>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="relative">
            <img
              src={Smart}
              alt="Happy students on a modern school campus"
              className="w-full h-[320px] md:h-[420px] object-cover rounded-3xl shadow-lg"
              loading="lazy"
            />
            <div className="absolute -bottom-5 -left-5 bg-white/80 backdrop-blur border border-slate-200 rounded-2xl p-4 shadow-md">
              <p className="text-sm font-medium text-slate-800">100% Digital Admission</p>
              <p className="text-xs text-slate-600">Secure. Paperless. Fast.</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Programs */}
      <Section id="programs" className="mt-16">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Programs Offered</motion.h2>
          <div className="grid md:grid-cols-3 gap-5">
            <ProgramCard title="Pre-Primary" age="Ages 3–5" points={["Play-based learning", "Phonics & numeracy", "Fine & gross motor skills"]} />
            <ProgramCard title="Primary (I–V)" age="Ages 6–10" points={["Concept mastery", "STEAM projects", "Holistic development"]} />
            <ProgramCard title="Middle & Secondary" age="Ages 11–16" points={["Olympiad prep", "Clubs & sports", "Career guidance"]} />
          </div>
        </motion.div>
      </Section>

      {/* Process */}
      <Section id="process" className="mt-16">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Admission Process</motion.h2>
          <ol className="grid md:grid-cols-2 gap-5">
            <Step index={1} title="Online Application" desc="Fill the application form with student and parent details and upload documents." />
            <Step index={2} title="Interaction / Assessment" desc="For applicable grades, a short interaction or baseline assessment will be scheduled." />
            <Step index={3} title="Offer & Documentation" desc="If selected, receive provisional offer. Submit required documents for verification." />
            <Step index={4} title="Fee Payment & Enrollment" desc="Pay the admission fee to secure the seat. Orientation details will follow." />
          </ol>
        </motion.div>
      </Section>

      {/* Trust / Stats */}
      <Section className="mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[{k:"Students",v:"1200+"},{k:"Faculty",v:"85"},{k:"Clubs",v:"20+"},{k:"Campuses",v:"1"}].map((s,i)=> (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
              <p className="text-2xl font-extrabold text-slate-900">{s.v}</p>
              <p className="text-xs text-slate-500">{s.k}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Fees CTA */}
      <Section className="mt-16">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">Transparent Fee Structure</h3>
              <p className="text-slate-600 mt-2">No hidden charges. Scholarships available for meritorious students and siblings.</p>
              <div className="mt-4 flex gap-3">
                <a href="#apply" className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2.5 text-white font-semibold shadow-sm hover:bg-indigo-700">Start Application</a>
                <a href="#faq" className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2.5 font-semibold hover:bg-slate-100">FAQs</a>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1600&auto=format&fit=crop"
              alt="Parent completing admission form online"
              className="rounded-2xl w-full h-56 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </Section>

      {/* Application Form */}
      <Section id="apply" className="mt-16">
        <SchoolRegister/>
      </Section>

      {/* Gallery */}
      <Section className="mt-16">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Campus Glimpses</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1600&auto=format&fit=crop",
              alt: "Modern school building"
            },
            {
              src: "https://images.unsplash.com/photo-1523246191915-43f5b3a4c83e?q=80&w=1600&auto=format&fit=crop",
              alt: "STEM lab with equipment"
            },
            {
              src: "https://images.unsplash.com/photo-1544531585-9847b68c8c70?q=80&w=1600&auto=format&fit=crop",
              alt: "School library and reading area"
            }
          ].map((img, i) => (
            <motion.img
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-52 md:h-64 w-full object-cover rounded-2xl border border-slate-200 shadow-sm"
            />
          ))}
        </div>
      </Section>

      {/* FAQs */}
      <Section id="faq" className="mt-16 mb-20">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h3>
        <div className="grid gap-3 max-w-3xl">
          <FAQItem q="What is the minimum age for Nursery?" a="The child should be 3+ years as of March 31 of the academic year." />
          <FAQItem q="Is there a sibling discount?" a="Yes, a sibling concession is available. Details are shared during the offer stage." />
          <FAQItem q="Are school buses available?" a="Yes, routes cover major neighborhoods. Final routes depend on enrollments." />
          <FAQItem q="What documents are required?" a="Birth certificate, address proof, previous school TC/report (if applicable), and recent photographs." />
        </div>
      </Section>

      <footer className="border-t border-slate-200 bg-white/70">
        <Section className="py-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Your School Name. All rights reserved.</p>
          <nav className="flex gap-4 text-sm">
            <a href="#programs" className="hover:text-indigo-600">Programs</a>
            <a href="#process" className="hover:text-indigo-600">Process</a>
            <a href="#apply" className="hover:text-indigo-600">Apply</a>
            <a href="#faq" className="hover:text-indigo-600">FAQ</a>
          </nav>
        </Section>
      </footer>

      <Toast open={form.toastOpen} title="Application submitted" desc="We have received your application. Our team will contact you shortly." onClose={() => form.setToastOpen(false)} />
    </div>
  );
}
