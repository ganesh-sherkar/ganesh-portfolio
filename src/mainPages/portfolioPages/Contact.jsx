"use client";

import { fetchContactContent, resetFormStatus, submitContactForm } from "@/redux/contact/contactSlice";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import {
  FiArrowUpRight,
  FiCheck,
  FiCopy,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
  FiSend,
  FiStar,
  FiUser,
  FiX,
  FiZap,
  FiGlobe,
} from "react-icons/fi";
import { socialLinksArray, socialMediaLinks } from "@/global/SocialMediaLinks";
import DevCodingBackground from "@/components/DevCodingBackground";

const C = [
  {
    l: "Phone",
    v: socialMediaLinks.phone.link.replace("tel:", ""),
    h: socialMediaLinks.phone.link,
    i: FiPhone,
    copyable: true,
  },
  {
    l: "Email",
    v: socialMediaLinks.email.link.replace("mailto:", ""),
    h: socialMediaLinks.email.link,
    i: FiMail,
    copyable: true,
  },
  {
    l: "Location",
    v: "Ameerpet, Hyderabad, Telangana",
    h: null,
    i: FiMapPin,
    copyable: false,
  },
];

const HIGHLIGHT_CHIPS = [
  { icon: FiZap, label: "Fast 24h Response" },
  { icon: FiStar, label: "Open for New Roles" },
  { icon: FiGlobe, label: "Remote & On-Site" },
];

export default function Contact() {
  const { isDarkMode } = useTheme();
  const d = useDispatch();
  const { formStatus, error, content } = useSelector((s) => s.contact);
  const [f, setF] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [fc, setFc] = useState(null);
  const [ve, setVe] = useState({});
  const [copiedKey, setCopiedKey] = useState(null);

  useEffect(() => {
    d(fetchContactContent());
  }, [d]);

  useEffect(() => {
    if (formStatus === "succeeded") {
      const t = setTimeout(() => {
        d(resetFormStatus());
        setF({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" });
        setVe({});
      }, 3000);
      return () => clearTimeout(t);
    }
  }, [formStatus, d]);

  const handleCopy = (key, text) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const vn = (n, fn) =>
    !n?.trim()
      ? `${fn} is required`
      : n.trim().length < 2
      ? `${fn} must be at least 2 characters`
      : !/^[a-zA-Z\s\-']+$/.test(n)
      ? `${fn} can only contain letters, spaces, hyphens, and apostrophes`
      : "";
  const ve2 = (e) =>
    !e?.trim()
      ? "Email is required"
      : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
      ? "Please enter a valid email address"
      : "";
  const vp = (p) => {
    const c = p?.replace(/\D/g, "") || "";
    return !p?.trim()
      ? "Phone number is required"
      : c.length < 10
      ? "Phone number must be at least 10 digits"
      : c.length > 15
      ? "Phone number must be less than 15 digits"
      : "";
  };
  const vf = (n, v) =>
    n === "firstName"
      ? vn(v, "First name")
      : n === "lastName"
      ? vn(v, "Last name")
      : n === "email"
      ? ve2(v)
      : n === "phone"
      ? vp(v)
      : "";

  const hc = (e) => {
    const { name, value } = e.target;
    setF((p) => ({ ...p, [name]: value }));
    setVe((p) => ({ ...p, [name]: vf(name, value) }));
  };
  const hb = (e) => {
    const { name, value } = e.target;
    setVe((p) => ({ ...p, [name]: vf(name, value) }));
    setFc(null);
  };
  const hs = (e) => {
    e.preventDefault();
    const err = {};
    let has = false;
    ["firstName", "lastName", "email", "phone"].forEach((k) => {
      const e2 =
        k === "firstName"
          ? vn(f.firstName, "First name")
          : k === "lastName"
          ? vn(f.lastName, "Last name")
          : k === "email"
          ? ve2(f.email)
          : vp(f.phone);
      if (e2) {
        err[k] = e2;
        has = true;
      }
    });
    if (has) {
      setVe(err);
      const el = document.querySelector(`[name="${Object.keys(err)[0]}"]`);
      el?.focus();
      return;
    }
    setVe({});
    d(
      submitContactForm({
        name: `${f.firstName} ${f.lastName}`.trim(),
        email: f.email,
        phone: f.phone,
        service: f.service,
        message: f.message,
      })
    );
  };

  const ib = `w-full rounded-xl border px-4 py-3 outline-none text-sm transition-all duration-300 placeholder:text-gray-400 dark:placeholder:text-gray-500`;

  return (
    <main
      className={`relative min-h-screen overflow-hidden transition-colors duration-500 py-12 sm:py-16 md:py-20 ${
        isDarkMode ? "bg-[#05060d] text-white" : "bg-[#f8f9fc] text-gray-900"
      }`}
    >
      <DevCodingBackground />

      {/* AMBIENT GLOW ACCENTS */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full blur-[120px] opacity-[0.08]"
        style={{ background: "var(--primary)" }}
      />
      <div
        className="pointer-events-none absolute top-[40%] -left-48 h-[360px] w-[360px] rounded-full blur-[100px] opacity-[0.06]"
        style={{ background: "var(--primary)" }}
      />
      <div
        className="pointer-events-none absolute bottom-10 -right-48 h-[380px] w-[380px] rounded-full blur-[100px] opacity-[0.06]"
        style={{ background: "var(--primary)" }}
      />

      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-10 sm:mb-12"
        >
          {/* DECORATIVE BADGE */}
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] mb-3 border shadow-sm"
            style={{
              color: "var(--primary)",
              borderColor: "color-mix(in srgb, var(--primary) 25%, transparent)",
              backgroundColor: isDarkMode
                ? "color-mix(in srgb, var(--primary) 8%, rgba(255,255,255,0.02))"
                : "color-mix(in srgb, var(--primary) 6%, white)",
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full animate-pulse"
              style={{ background: "var(--primary)" }}
            />
            <span>{content?.subtitle || "Contact Me"}</span>
          </div>

          {/* MEDIUM SIZE TITLE */}
          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight"
            style={{ color: "var(--text-heading)" }}
          >
            Get In{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, var(--primary), var(--primary-2, #a855f7))",
              }}
            >
              Touch
            </span>
          </h1>

          {/* DECORATIVE DIVIDER */}
          <div className="flex items-center justify-center gap-2 mt-3">
            <span
              className="h-0.5 w-10 rounded-full"
              style={{
                background:
                  "linear-gradient(to right, transparent, var(--primary))",
              }}
            />
            <span className="text-[10px]" style={{ color: "var(--primary)" }}>
              ✦
            </span>
            <span
              className="h-0.5 w-10 rounded-full"
              style={{
                background:
                  "linear-gradient(to left, transparent, var(--primary))",
              }}
            />
          </div>

          {/* MEDIUM SIZE DESCRIPTION */}
          <p
            className={`mt-3.5 max-w-lg mx-auto text-sm sm:text-base leading-relaxed ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {content?.description ||
              "Have a project, opportunity, or idea in mind? Let's connect and build something extraordinary together."}
          </p>

          {/* DECORATIVE QUICK CHIPS */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-4">
            {HIGHLIGHT_CHIPS.map((chip, idx) => {
              const Icon = chip.icon;
              return (
                <div
                  key={idx}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border transition-colors ${
                    isDarkMode
                      ? "bg-white/[0.02] border-white/10 text-gray-400"
                      : "bg-white/80 border-gray-200/80 text-gray-600 shadow-sm"
                  }`}
                >
                  <Icon size={12} style={{ color: "var(--primary)" }} />
                  <span>{chip.label}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ================= CONTENT GRID ================= */}
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-8 items-start">
          {/* LEFT COLUMN: CONTACT DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div
              className={`relative overflow-hidden rounded-2xl sm:rounded-3xl border p-6 sm:p-7 transition-all duration-300 ${
                isDarkMode
                  ? "bg-[#0b0c16]/90 border-white/10 shadow-lg shadow-black/20"
                  : "bg-white border-gray-200/90 shadow-md shadow-gray-200/50"
              }`}
            >
              {/* TOP ACCENT LINE */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                  background:
                    "linear-gradient(to right, transparent, var(--primary), transparent)",
                }}
              />

              {/* CARD HEADER */}
              <div className="relative">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl mb-4 border"
                  style={{
                    color: "var(--primary)",
                    borderColor:
                      "color-mix(in srgb, var(--primary) 20%, transparent)",
                    background:
                      "color-mix(in srgb, var(--primary) 10%, transparent)",
                  }}
                >
                  <FiMessageCircle size={20} />
                </div>
                <h2
                  className="text-xl sm:text-2xl font-bold tracking-tight"
                  style={{ color: "var(--text-heading)" }}
                >
                  Let&apos;s Connect
                </h2>
                <p
                  className={`mt-1.5 text-xs sm:text-sm leading-relaxed ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Reach out directly for freelance projects, hiring inquiries, or collaborations.
                </p>
              </div>

              {/* LIVE AVAILABILITY BADGE */}
              <div
                className={`mt-5 rounded-xl border p-3.5 transition-colors ${
                  isDarkMode
                    ? "bg-white/[0.02] border-white/10"
                    : "bg-gray-50/80 border-gray-200"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span
                      className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                      style={{ background: "#22c55e" }}
                    />
                    <span
                      className="relative inline-flex h-2.5 w-2.5 rounded-full"
                      style={{ background: "#22c55e" }}
                    />
                  </span>
                  <div className="min-w-0">
                    <p
                      className="text-xs sm:text-sm font-semibold"
                      style={{ color: "var(--text-heading)" }}
                    >
                      Available for Opportunities
                    </p>
                    <p
                      className={`text-[11px] mt-0.5 ${
                        isDarkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      Prompt responses within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* CONTACT CHANNELS */}
              <div className="mt-5 space-y-2.5">
                {C.map((item, idx) => {
                  const Icon = item.i;
                  const isCopied = copiedKey === item.l;
                  const contentInner = (
                    <div
                      className={`group flex items-center gap-3.5 rounded-xl border p-3 sm:p-3.5 transition-all duration-300 ${
                        isDarkMode
                          ? "bg-white/[0.02] border-white/10 hover:bg-white/[0.05] hover:border-white/20"
                          : "bg-gray-50/70 border-gray-200 hover:bg-white hover:border-gray-300 shadow-sm"
                      }`}
                    >
                      <span
                        className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border transition-transform duration-200 group-hover:scale-105"
                        style={{
                          color: "var(--primary)",
                          borderColor:
                            "color-mix(in srgb, var(--primary) 20%, transparent)",
                          background:
                            "color-mix(in srgb, var(--primary) 8%, transparent)",
                        }}
                      >
                        <Icon size={16} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p
                          className={`text-[10px] uppercase tracking-wider font-semibold ${
                            isDarkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          {item.l}
                        </p>
                        <p
                          className="mt-0.5 text-xs sm:text-sm font-medium break-words truncate"
                          style={{ color: "var(--text-heading)" }}
                        >
                          {item.v}
                        </p>
                      </div>

                      {/* COPY OR EXTERNAL LINK ICON */}
                      {item.copyable ? (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleCopy(item.l, item.v);
                          }}
                          className={`flex items-center gap-1 rounded-lg px-2.5 py-1 text-[11px] font-medium transition-all ${
                            isCopied
                              ? "bg-green-500/10 text-green-500 border border-green-500/30"
                              : isDarkMode
                              ? "text-gray-400 hover:text-white bg-white/5 hover:bg-white/10"
                              : "text-gray-500 hover:text-gray-900 bg-gray-100 hover:bg-gray-200"
                          }`}
                          title="Copy to clipboard"
                        >
                          {isCopied ? (
                            <>
                              <FiCheck size={12} />
                              <span>Copied</span>
                            </>
                          ) : (
                            <>
                              <FiCopy size={12} />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      ) : (
                        item.h && (
                          <FiArrowUpRight
                            size={16}
                            className="flex-shrink-0 opacity-40 transition-all duration-200 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            style={{ color: "var(--primary)" }}
                          />
                        )
                      )}
                    </div>
                  );

                  return item.h && !item.copyable ? (
                    <a key={idx} href={item.h} className="block">
                      {contentInner}
                    </a>
                  ) : (
                    <div key={idx}>{contentInner}</div>
                  );
                })}
              </div>

              {/* SOCIAL MEDIA CONNECTIONS */}
              <div
                className={`mt-6 pt-5 border-t ${
                  isDarkMode ? "border-white/10" : "border-gray-200"
                }`}
              >
                <p
                  className={`text-[11px] uppercase tracking-[0.16em] font-semibold mb-3 ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Connect Online
                </p>
                <div className="flex flex-wrap gap-2">
                  {socialLinksArray.map((s) => {
                    const Icon =
                      s.icon === "FaGithub"
                        ? FiGithub
                        : s.icon === "FaLinkedin"
                        ? FiLinkedin
                        : s.icon === "MdEmail"
                        ? FiMail
                        : s.icon === "FaPhone"
                        ? FiPhone
                        : null;
                    return Icon ? (
                      <motion.a
                        key={s.name}
                        href={s.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        className={`flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-medium transition-all duration-200 ${
                          isDarkMode
                            ? "border-white/10 bg-white/[0.02] hover:bg-white/[0.06] text-gray-300 hover:text-white"
                            : "border-gray-200 bg-gray-50 hover:bg-white text-gray-700 hover:text-gray-900 shadow-sm"
                        }`}
                      >
                        <Icon size={14} style={{ color: "var(--primary)" }} />
                        <span>{s.name}</span>
                      </motion.a>
                    ) : null;
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <div
              className={`relative overflow-hidden rounded-2xl sm:rounded-3xl border p-6 sm:p-7 transition-all duration-300 ${
                isDarkMode
                  ? "bg-[#0b0c16]/90 border-white/10 shadow-lg shadow-black/20"
                  : "bg-white border-gray-200/90 shadow-md shadow-gray-200/50"
              }`}
            >
              {/* TOP ACCENT LINE */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                  background:
                    "linear-gradient(to right, transparent, var(--primary), transparent)",
                }}
              />

              {/* FORM HEADER */}
              <div className="relative flex items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className="text-xs font-semibold uppercase tracking-[0.16em]"
                      style={{ color: "var(--primary)" }}
                    >
                      Direct Message
                    </span>
                  </div>
                  <h2
                    className="text-xl sm:text-2xl font-bold tracking-tight"
                    style={{ color: "var(--text-heading)" }}
                  >
                    Send Me a Message
                  </h2>
                  <p
                    className={`mt-1 text-xs sm:text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Fill out the form below to get started.
                  </p>
                </div>
                <div
                  className="hidden sm:flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border"
                  style={{
                    color: "var(--primary)",
                    borderColor:
                      "color-mix(in srgb, var(--primary) 20%, transparent)",
                    background:
                      "color-mix(in srgb, var(--primary) 10%, transparent)",
                  }}
                >
                  <FiSend size={18} />
                </div>
              </div>

              {/* ERROR NOTIFICATION */}
              <AnimatePresence mode="wait">
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="mb-4 flex items-start gap-2.5 rounded-xl border border-red-500/20 bg-red-500/10 p-3.5 text-xs sm:text-sm text-red-500"
                  >
                    <FiX size={16} className="mt-0.5 flex-shrink-0" />
                    <span className="break-words">{error}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* SUCCESS NOTIFICATION */}
              <AnimatePresence>
                {formStatus === "succeeded" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    className="mb-4 flex items-center gap-3 rounded-xl border border-green-500/20 bg-green-500/10 p-3.5"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500 text-white">
                      <FiCheck size={14} />
                    </span>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-green-500">
                        Message sent successfully!
                      </p>
                      <p
                        className={`text-[11px] mt-0.5 ${
                          isDarkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        Thank you for reaching out. I will reply soon.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* FORM FIELDS */}
              <form onSubmit={hs} noValidate className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-3.5">
                  {["firstName", "lastName"].map((n, i) => (
                    <FF
                      key={n}
                      l={i === 0 ? "First Name" : "Last Name"}
                      n={n}
                      v={f[n]}
                      p={i === 0 ? "Enter first name" : "Enter last name"}
                      r
                      err={ve[n]}
                      f2={fc === n}
                      dm={isDarkMode}
                      ib={ib}
                      oc={hc}
                      ob={hb}
                      of={() => setFc(n)}
                      ic={n === "firstName" ? <FiUser size={15} /> : null}
                    />
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-3.5">
                  <FF
                    l="Email Address"
                    n="email"
                    t="email"
                    v={f.email}
                    p="you@example.com"
                    r
                    err={ve.email}
                    f2={fc === "email"}
                    dm={isDarkMode}
                    ib={ib}
                    oc={hc}
                    ob={hb}
                    of={() => setFc("email")}
                    ic={<FiMail size={15} />}
                  />
                  <FF
                    l="Phone Number"
                    n="phone"
                    t="tel"
                    v={f.phone}
                    p="Enter mobile number"
                    r
                    err={ve.phone}
                    f2={fc === "phone"}
                    dm={isDarkMode}
                    ib={ib}
                    oc={hc}
                    ob={hb}
                    of={() => setFc("phone")}
                    ic={<FiPhone size={15} />}
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--text-body)" }}
                  >
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={f.service}
                    onChange={hc}
                    className={`${ib} cursor-pointer appearance-none`}
                    style={{
                      backgroundColor: isDarkMode
                        ? "rgba(255,255,255,0.03)"
                        : "rgba(0,0,0,0.02)",
                      borderColor:
                        isDarkMode
                          ? "rgba(255,255,255,0.12)"
                          : "rgba(0,0,0,0.12)",
                      color: f.service
                        ? "var(--text-heading)"
                        : isDarkMode
                        ? "#9ca3af"
                        : "#6b7280",
                    }}
                  >
                    <option value="">Select a service (Optional)</option>
                    {[
                      "Full-Stack Web Development",
                      "React Native App Development",
                      "MERN Stack Application",
                      "Frontend UI / UX Engineering",
                      "API & Backend Integration",
                      "Other Inquiries",
                    ].map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--text-body)" }}
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={f.message}
                    onChange={hc}
                    rows={4}
                    placeholder="Tell me a bit about your project, goals, or timeline..."
                    className={`${ib} resize-none`}
                    style={{
                      backgroundColor: isDarkMode
                        ? "rgba(255,255,255,0.03)"
                        : "rgba(0,0,0,0.02)",
                      borderColor:
                        fc === "message"
                          ? "var(--primary)"
                          : isDarkMode
                          ? "rgba(255,255,255,0.12)"
                          : "rgba(0,0,0,0.12)",
                      color: "var(--text-heading)",
                      boxShadow:
                        fc === "message"
                          ? `0 0 0 3px color-mix(in srgb, var(--primary) 20%, transparent)`
                          : "none",
                    }}
                    onFocus={() => setFc("message")}
                    onBlur={() => setFc(null)}
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <motion.button
                  type="submit"
                  disabled={
                    formStatus === "loading" || formStatus === "succeeded"
                  }
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.985 }}
                  className="group relative w-full overflow-hidden rounded-xl py-3.5 px-6 text-sm sm:text-base font-semibold text-white transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60 shadow-md"
                  style={{
                    background:
                      formStatus === "succeeded"
                        ? "linear-gradient(135deg, #22c55e, #16a34a)"
                        : "linear-gradient(135deg, var(--primary), var(--primary-2, #a855f7))",
                    boxShadow:
                      formStatus === "succeeded"
                        ? "0 4px 15px rgba(34, 197, 94, 0.3)"
                        : "0 8px 24px color-mix(in srgb, var(--primary) 28%, transparent)",
                  }}
                >
                  {formStatus === "idle" && (
                    <span className="absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-700 group-hover:translate-x-full" />
                  )}
                  <span className="relative flex items-center justify-center gap-2">
                    {formStatus === "idle" && (
                      <>
                        <span>Send Message</span>
                        <FiArrowUpRight
                          size={16}
                          className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </>
                    )}
                    {formStatus === "loading" && (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        <span>Sending...</span>
                      </>
                    )}
                    {formStatus === "succeeded" && (
                      <>
                        <FiCheck size={16} />
                        <span>Message Sent!</span>
                      </>
                    )}
                    {formStatus === "failed" && (
                      <>
                        <span>Try Again</span>
                        <FiArrowUpRight size={16} />
                      </>
                    )}
                  </span>
                </motion.button>

                <p
                  className={`text-center text-[11px] ${
                    isDarkMode ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  🔒 Your information is confidential and will only be used to reply.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function FF({ l, n, t = "text", v, p, r, err, f2, dm, ib, oc, ob, of, ic }) {
  return (
    <div className="min-w-0">
      <label
        htmlFor={n}
        className="mb-1.5 block text-xs font-semibold uppercase tracking-wider"
        style={{ color: "var(--text-body)" }}
      >
        {l}
        {r && <span className="ml-1 text-red-500">*</span>}
      </label>
      <div className="relative">
        {ic && (
          <span
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2"
            style={{
              color: f2 ? "var(--primary)" : dm ? "#6b7280" : "#9ca3af",
            }}
          >
            {ic}
          </span>
        )}
        <input
          id={n}
          type={t}
          name={n}
          value={v}
          onChange={oc}
          onBlur={ob}
          onFocus={of}
          placeholder={p}
          className={`${ib} ${ic ? "pl-10" : ""}`}
          style={{
            backgroundColor: dm
              ? "rgba(255,255,255,0.03)"
              : "rgba(0,0,0,0.02)",
            borderColor: err
              ? "#ef4444"
              : f2
              ? "var(--primary)"
              : dm
              ? "rgba(255,255,255,0.12)"
              : "rgba(0,0,0,0.12)",
            color: "var(--text-heading)",
            boxShadow: err
              ? "0 0 0 3px rgba(239,68,68,0.12)"
              : f2
              ? `0 0 0 3px color-mix(in srgb, var(--primary) 20%, transparent)`
              : "none",
          }}
        />
      </div>
      <AnimatePresence>
        {err && (
          <motion.p
            initial={{ opacity: 0, height: 0, y: -4 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -4 }}
            className="mt-1 flex items-center gap-1 text-[11px] text-red-500"
          >
            <FiX size={12} />
            {err}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}