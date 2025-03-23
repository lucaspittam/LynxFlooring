"use client";

import { useState } from "react";
import AppData from "@data/app.json";
import styles from "./ContactForm.module.css";

const ContactForm = ({ formType = "contact" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    resume: null,
    companyRevenue: "",
    companyLocation: "",
    yearsInBusiness: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const getFormFields = () => {
    switch (formType) {
      case "careers":
        return [
          { name: "name", type: "text", label: "Full Name", required: true },
          { name: "email", type: "email", label: "Email", required: true },
          { name: "phone", type: "tel", label: "Phone", required: true },
          {
            name: "resume",
            type: "file",
            label: "Resume",
            required: true,
            accept: ".pdf,.doc,.docx",
          },
          {
            name: "message",
            type: "textarea",
            label: "Tell us about yourself",
            required: true,
          },
        ];
      case "acquisition":
        return [
          { name: "name", type: "text", label: "Full Name", required: true },
          { name: "email", type: "email", label: "Email", required: true },
          { name: "phone", type: "tel", label: "Phone", required: true },
          {
            name: "company",
            type: "text",
            label: "Company Name",
            required: true,
          },
          {
            name: "companyLocation",
            type: "text",
            label: "Company Location",
            required: true,
          },
          {
            name: "yearsInBusiness",
            type: "number",
            label: "Years in Business",
            required: true,
          },
          {
            name: "companyRevenue",
            type: "text",
            label: "Annual Revenue",
            required: true,
          },
          {
            name: "message",
            type: "textarea",
            label: "Tell us about your company",
            required: true,
          },
        ];
      default:
        return [
          { name: "name", type: "text", label: "Full Name", required: true },
          { name: "email", type: "email", label: "Email", required: true },
          { name: "phone", type: "tel", label: "Phone", required: false },
          {
            name: "message",
            type: "textarea",
            label: "Message",
            required: true,
          },
        ];
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus(null);

    const formDataToSend = new FormData();

    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null && formData[key] !== "") {
        formDataToSend.append(key, formData[key]);
      }
    });

    formDataToSend.append("formType", formType);

    try {
      const basinEndpoint =
        AppData.settings.basinForms[formType] ||
        AppData.settings.basinForms.contact;

      const response = await fetch(basinEndpoint, {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          resume: null,
          companyRevenue: "",
          companyLocation: "",
          yearsInBusiness: "",
        });
        setSubmitStatus("success");
      } else {
        console.error("Form submission error:", await response.text());
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  return (
    <div>
      {submitStatus === "success" ? (
        <div className={styles.successMessage}>
          <h3>Thank You!</h3>
          <p>Your message has been received. We'll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          {getFormFields().map((field, index) => (
            <div key={index} className={styles.formGroup}>
              <label htmlFor={field.name} className={styles.label}>
                {field.label}
                {field.required && " *"}
              </label>

              {field.type === "textarea" ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required={field.required}
                  rows="4"
                  className={styles.input}
                />
              ) : field.type === "file" ? (
                <input
                  type="file"
                  id={field.name}
                  name={field.name}
                  onChange={handleChange}
                  required={field.required}
                  accept={field.accept}
                  className={styles.input}
                />
              ) : (
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required={field.required}
                  className={styles.input}
                />
              )}
            </div>
          ))}

          {submitStatus === "error" && (
            <div className={styles.errorMessage}>
              Something went wrong. Please try again.
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className={`${styles.submitButton} ${submitting ? styles.submitting : ""}`}
          >
            {submitting
              ? "Submitting..."
              : formType === "careers"
                ? "Submit Application"
                : formType === "acquisition"
                  ? "Submit Inquiry"
                  : "Send Message"}
            {!submitting && (
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={styles.buttonIcon}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
