"use client";

import {
  fetchContactContent,
  resetFormStatus,
  submitContactForm,
} from "@/redux/contact/contactSlice";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { socialLinksArray, socialMediaLinks } from "@/global/SocialMediaLinks";

export default function Contact() {
  const { isDarkMode } = useTheme();
  const dispatch = useDispatch();
  const { formStatus, error, content } = useSelector((state) => state.contact);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    dispatch(fetchContactContent());
  }, [dispatch]);

  useEffect(() => {
    if (formStatus === "succeeded") {
      const timer = setTimeout(() => {
        dispatch(resetFormStatus());
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        setValidationErrors({});
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [formStatus, dispatch]);

  // Validation functions
  const validateName = (name, fieldName) => {
    if (!name || name.trim() === "") {
      return `${fieldName} is required`;
    }
    if (name.trim().length < 2) {
      return `${fieldName} must be at least 2 characters`;
    }
    if (!/^[a-zA-Z\s\-']+$/.test(name)) {
      return `${fieldName} can only contain letters, spaces, hyphens, and apostrophes`;
    }
    return "";
  };

  const validateEmail = (email) => {
    if (!email || email.trim() === "") {
      return "Email is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const validatePhone = (phone) => {
    if (!phone || phone.trim() === "") {
      return "Phone number is required";
    }
    // Remove all non-digit characters for validation
    const cleaned = phone.replace(/\D/g, "");
    if (cleaned.length < 10) {
      return "Phone number must be at least 10 digits";
    }
    if (cleaned.length > 15) {
      return "Phone number must be less than 15 digits";
    }
    return "";
  };

  const validateField = (name, value) => {
    switch (name) {
      case "firstName":
        return validateName(value, "First name");
      case "lastName":
        return validateName(value, "Last name");
      case "email":
        return validateEmail(value);
      case "phone":
        return validatePhone(value);
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validate on change
    const error = validateField(name, value);
    setValidationErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setValidationErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields before submission
    const errors = {};
    let hasErrors = false;

    // Validate first name
    const firstNameError = validateName(formData.firstName, "First name");
    if (firstNameError) {
      errors.firstName = firstNameError;
      hasErrors = true;
    }

    // Validate last name
    const lastNameError = validateName(formData.lastName, "Last name");
    if (lastNameError) {
      errors.lastName = lastNameError;
      hasErrors = true;
    }

    // Validate email
    const emailError = validateEmail(formData.email);
    if (emailError) {
      errors.email = emailError;
      hasErrors = true;
    }

    // Validate phone
    const phoneError = validatePhone(formData.phone);
    if (phoneError) {
      errors.phone = phoneError;
      hasErrors = true;
    }

    if (hasErrors) {
      setValidationErrors(errors);
      // Focus the first field with an error
      const firstErrorField = Object.keys(errors)[0];
      const element = document.querySelector(`[name="${firstErrorField}"]`);
      if (element) {
        element.focus();
      }
      return;
    }

    // Clear any existing errors
    setValidationErrors({});

    const submitData = {
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
    };
    dispatch(submitContactForm(submitData));
  };

  // Map icon names to components
  const getIconComponent = (iconName) => {
    switch (iconName) {
      case "FaGithub":
        return <FaGithub className="w-5 h-5" />;
      case "FaLinkedin":
        return <FaLinkedin className="w-5 h-5" />;
      case "MdEmail":
        return <MdEmail className="w-5 h-5" />;
      case "FaPhone":
        return <FaPhone className="w-5 h-5" />;
      default:
        return null;
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      label: "Phone",
      value: socialMediaLinks.phone.link.replace("tel:", ""),
      link: socialMediaLinks.phone.link,
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      label: "Email",
      value: socialMediaLinks.email.link.replace("mailto:", ""),
      link: socialMediaLinks.email.link,
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      label: "Address",
      value: "Sr nagar, Hyderabad, Telangana, India",
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <div
      className={`py-[30px] md:py-[90px] transition-colors duration-300 overflow-x-hidden ${isDarkMode ? "bg-bg-2" : "bg-gray-50"}`}
    >
      <section
        className="py-[30px] md:py-[50px] transition-colors duration-300 relative overflow-hidden"
        style={{
          backgroundColor: "var(--bg)",
          color: "var(--text-body)",
        }}
      >
        <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
              style={{
                backgroundColor: isDarkMode
                  ? "rgba(135,80,247,0.2)"
                  : "rgba(135,80,247,0.1)",
                color: "var(--primary)",
              }}
            >
              {content.subtitle || "Get In Touch"}
            </span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "var(--text-heading)" }}
            >
              {content.title || "Let's Work Together!"}
            </h2>
            <div
              className="w-24 h-1 mx-auto rounded-full"
              style={{
                background: `linear-gradient(to right, var(--primary), var(--primary-2))`,
              }}
            />
          </motion.div>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 xl:gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full min-w-0"
            >
              <div
                className="rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 transition-colors duration-300 w-full"
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: `1px solid ${isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}`,
                }}
              >
                <h3
                  className="text-xl sm:text-2xl font-bold mb-6"
                  style={{ color: "var(--text-heading)" }}
                >
                  Send Me a Message
                </h3>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 sm:space-y-6"
                  noValidate
                >
                  <AnimatePresence>
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-3 sm:p-4 rounded-xl text-sm flex items-center gap-2"
                        style={{
                          backgroundColor: isDarkMode
                            ? "rgba(239,68,68,0.1)"
                            : "rgba(239,68,68,0.05)",
                          border: `1px solid ${isDarkMode ? "rgba(239,68,68,0.2)" : "rgba(239,68,68,0.1)"}`,
                          color: isDarkMode ? "#f87171" : "#dc2626",
                        }}
                      >
                        <svg
                          className="w-5 h-5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="break-words">{error}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    {["firstName", "lastName"].map((field) => (
                      <div key={field} className="space-y-2 min-w-0">
                        <label
                          className="block text-sm font-semibold"
                          style={{ color: "var(--text-body)" }}
                        >
                          {field === "firstName" ? "First Name" : "Last Name"}
                          <span className="text-red-500 ml-1">*</span>
                        </label>
                        <div className="relative w-full">
                          <input
                            type="text"
                            name={field}
                            value={formData[field]}
                            onChange={handleChange}
                            onBlur={(e) => {
                              handleBlur(e); // validation
                              setFocusedField(null); // your UI logic

                              if (!validationErrors[field]) {
                                e.currentTarget.style.borderColor = isDarkMode
                                  ? "rgba(255,255,255,0.1)"
                                  : "rgba(0,0,0,0.1)";
                                e.currentTarget.style.boxShadow = "none";
                              }
                            }}
                            className={`w-full min-w-0 px-3 sm:px-4 py-3 rounded-xl outline-none transition-all duration-300 placeholder:text-gray-400 ${
                              validationErrors[field] ? "border-red-500" : ""
                            }`}
                            style={{
                              backgroundColor: isDarkMode
                                ? "rgba(255,255,255,0.05)"
                                : "rgba(0,0,0,0.02)",
                              border: `1px solid ${validationErrors[field] ? "#ef4444" : isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
                              color: "var(--text-heading)",
                            }}
                            onFocus={(e) => {
                              setFocusedField(field);
                              if (!validationErrors[field]) {
                                e.currentTarget.style.borderColor =
                                  "var(--primary)";
                                e.currentTarget.style.boxShadow = `0 0 0 4px ${isDarkMode ? "rgba(135,80,247,0.2)" : "rgba(135,80,247,0.1)"}`;
                              }
                            }}
                            placeholder={
                              field === "firstName" ? "First Name" : "Last Name"
                            }
                          />
                          {validationErrors[field] && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-500 text-xs mt-1 flex items-center gap-1 break-words"
                            >
                              <span>⚠️</span>
                              {validationErrors[field]}
                            </motion.p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    {["email", "phone"].map((field) => (
                      <div key={field} className="space-y-2 min-w-0">
                        <label
                          className="block text-sm font-semibold"
                          style={{ color: "var(--text-body)" }}
                        >
                          {field === "email" ? "Email Address" : "Phone Number"}
                          <span className="text-red-500 ml-1">*</span>
                        </label>
                        <input
                          type={field === "email" ? "email" : "tel"}
                          name={field}
                          value={formData[field]}
                          onChange={handleChange}
                          onBlur={(e) => {
                            handleBlur(e);

                            if (!validationErrors[field]) {
                              e.currentTarget.style.borderColor = isDarkMode
                                ? "rgba(255,255,255,0.1)"
                                : "rgba(0,0,0,0.1)";
                              e.currentTarget.style.boxShadow = "none";
                            }
                          }}
                          className={`w-full min-w-0 px-3 sm:px-4 py-3 rounded-xl outline-none transition-all duration-300 placeholder:text-gray-400 ${
                            validationErrors[field] ? "border-red-500" : ""
                          }`}
                          style={{
                            backgroundColor: isDarkMode
                              ? "rgba(255,255,255,0.05)"
                              : "rgba(0,0,0,0.02)",
                            border: `1px solid ${validationErrors[field] ? "#ef4444" : isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
                            color: "var(--text-heading)",
                          }}
                          onFocus={(e) => {
                            if (!validationErrors[field]) {
                              e.currentTarget.style.borderColor =
                                "var(--primary)";
                              e.currentTarget.style.boxShadow = `0 0 0 4px ${isDarkMode ? "rgba(135,80,247,0.2)" : "rgba(135,80,247,0.1)"}`;
                            }
                          }}
                          placeholder={
                            field === "email"
                              ? "your@email.com"
                              : "Enter Mobile Number"
                          }
                        />
                        {validationErrors[field] && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-xs mt-1 flex items-center gap-1 break-words"
                          >
                            <span>⚠️</span>
                            {validationErrors[field]}
                          </motion.p>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 min-w-0">
                    <label
                      className="block text-sm font-semibold"
                      style={{ color: "var(--text-body)" }}
                    >
                      Your Message
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full min-w-0 px-3 sm:px-4 py-3 rounded-xl outline-none transition-all duration-300 placeholder:text-gray-400 resize-none"
                      style={{
                        backgroundColor: isDarkMode
                          ? "rgba(255,255,255,0.05)"
                          : "rgba(0,0,0,0.02)",
                        border: `1px solid ${isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
                        color: "var(--text-heading)",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "var(--primary)";
                        e.currentTarget.style.boxShadow = `0 0 0 4px ${isDarkMode ? "rgba(135,80,247,0.2)" : "rgba(135,80,247,0.1)"}`;
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = isDarkMode
                          ? "rgba(255,255,255,0.1)"
                          : "rgba(0,0,0,0.1)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={
                      formStatus === "loading" || formStatus === "succeeded"
                    }
                    className={`w-full py-3.5 sm:py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm sm:text-base`}
                    style={{
                      background:
                        formStatus === "succeeded"
                          ? "linear-gradient(135deg, #22c55e, #16a34a)"
                          : "linear-gradient(135deg, var(--primary), var(--primary-2))",
                    }}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    {formStatus === "idle" && (
                      <span className="flex items-center justify-center gap-2">
                        Send Message
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                      </span>
                    )}
                    {formStatus === "loading" && (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    )}
                    {formStatus === "succeeded" && (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Message Sent!
                      </span>
                    )}
                    {formStatus === "failed" && (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        Failed - Try Again
                      </span>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6 md:space-y-8 w-full min-w-0"
            >
              <div>
                <h3
                  className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4"
                  style={{ color: "var(--text-heading)" }}
                >
                  Get In Touch
                </h3>
                <p
                  className="leading-relaxed text-base sm:text-lg"
                  style={{ color: "var(--text-body)" }}
                >
                  I&apos;m always excited to hear about new projects and
                  opportunities. Whether you have a question or just want to say
                  hi, I&apos;ll get back to you!
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="group relative w-full"
                  >
                    {item.link ? (
                      <a href={item.link} className="block w-full">
                        <div
                          className="relative flex items-center gap-4 sm:gap-5 p-4 sm:p-6 rounded-2xl transition-all duration-300 w-full"
                          style={{
                            backgroundColor: "var(--bg-card)",
                            border: `1px solid ${isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}`,
                            boxShadow: isDarkMode
                              ? "0 4px 20px rgba(0,0,0,0.2)"
                              : "0 4px 20px rgba(0,0,0,0.05)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform =
                              "translateY(-4px)";
                            e.currentTarget.style.boxShadow = isDarkMode
                              ? "0 8px 30px rgba(0,0,0,0.3)"
                              : "0 8px 30px rgba(0,0,0,0.1)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = isDarkMode
                              ? "0 4px 20px rgba(0,0,0,0.2)"
                              : "0 4px 20px rgba(0,0,0,0.05)";
                          }}
                        >
                          <div
                            className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg`}
                          >
                            {item.icon}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div
                              className="text-xs sm:text-sm font-medium mb-0.5 sm:mb-1"
                              style={{ color: "var(--text-muted)" }}
                            >
                              {item.label}
                            </div>
                            <div
                              className="text-sm sm:text-base font-semibold break-words"
                              style={{ color: "var(--text-heading)" }}
                            >
                              {item.value}
                            </div>
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div
                        className="relative flex items-center gap-4 sm:gap-5 p-4 sm:p-6 rounded-2xl transition-all duration-300 w-full"
                        style={{
                          backgroundColor: "var(--bg-card)",
                          border: `1px solid ${isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}`,
                          boxShadow: isDarkMode
                            ? "0 4px 20px rgba(0,0,0,0.2)"
                            : "0 4px 20px rgba(0,0,0,0.05)",
                        }}
                      >
                        <div
                          className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg`}
                        >
                          {item.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div
                            className="text-xs sm:text-sm font-medium mb-0.5 sm:mb-1"
                            style={{ color: "var(--text-muted)" }}
                          >
                            {item.label}
                          </div>
                          <div
                            className="text-sm sm:text-base font-semibold break-words"
                            style={{ color: "var(--text-heading)" }}
                          >
                            {item.value}
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-4 sm:pt-6">
                <h4
                  className="text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4"
                  style={{ color: "var(--text-muted)" }}
                >
                  Follow Me
                </h4>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {socialLinksArray.map((social, i) => (
                    <motion.a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                      style={{
                        backgroundColor: "var(--bg-card)",
                        color: "var(--text-body)",
                        border: `1px solid ${isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "var(--primary)";
                        e.currentTarget.style.borderColor = "var(--primary)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "var(--text-body)";
                        e.currentTarget.style.borderColor = isDarkMode
                          ? "rgba(255,255,255,0.08)"
                          : "rgba(0,0,0,0.06)";
                      }}
                    >
                      <span className="sr-only">{social.name}</span>
                      {getIconComponent(social.icon)}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
