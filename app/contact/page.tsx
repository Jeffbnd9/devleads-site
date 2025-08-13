"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type ActiveTab = "message" | "devis";

interface MessageFormState {
  name: string;
  email: string;
  message: string;
}

interface DevisFormState {
  name: string;
  email: string;
  phone: string;
  type: string;
  project: string;
}

type SubmitStatus =
  | { type: "success"; message: string }
  | { type: "error"; message: string }
  | null;

interface ProjectTypeOption {
  value: string;
  label: string;
}

const Contact = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("message");
  const [messageForm, setMessageForm] = useState<MessageFormState>({
    name: "",
    email: "",
    message: "",
  });
  const [devisForm, setDevisForm] = useState<DevisFormState>({
    name: "",
    email: "",
    phone: "",
    type: "",
    project: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  const handleMessageSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...messageForm, type: "message" }),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        error?: string;
      };

      if (result.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message envoyé avec succès !",
        });
        setMessageForm({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Erreur lors de l&apos;envoi",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Erreur de connexion. Veuillez réessayer.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDevisSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...devisForm, type: "devis" }),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        error?: string;
      };

      if (result.ok) {
        setSubmitStatus({
          type: "success",
          message: "Demande de devis envoyée avec succès !",
        });
        setDevisForm({ name: "", email: "", phone: "", type: "", project: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Erreur lors de l&apos;envoi",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Erreur de connexion. Veuillez réessayer.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes: ProjectTypeOption[] = [
    { value: "vitrine", label: "Site Vitrine" },
    { value: "ecommerce", label: "Boutique E-commerce" },
    { value: "personnalise", label: "Projet Personnalisé" },
  ];

  return (
    <div className="min-h-screen px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-[#c7c9d1] text-lg max-w-2xl mx-auto">
            Prêt à donner vie à votre projet ? Contactez-nous pour une
            consultation gratuite.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative bg-[#31343a] rounded-2xl border border-[#23252c] shadow-[4px_4px_16px_#23252c,-4px_-4px_12px_#484c56,0_1px_0px_#16171b] p-8">
              {/* Neon border top and bot */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#9ff3ff80] to-transparent rounded-full" />
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#9ff3ff80] to-transparent" />

              {/* Tabs */}
              <div className="flex space-x-4 mb-8">
                <button
                  onClick={() => setActiveTab("message")}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === "message"
                      ? "bg-white text-black"
                      : "bg-[#23252c] text-[#c7c9d1] hover:bg-[#3f434c]"
                  }`}
                >
                  Message
                </button>
                <button
                  onClick={() => setActiveTab("devis")}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === "devis"
                      ? "bg-white text-black"
                      : "bg-[#23252c] text-[#c7c9d1] hover:bg-[#3f434c]"
                  }`}
                >
                  Devis
                </button>
              </div>

              {/* Status Message */}
              {submitStatus && (
                <div
                  className={`mb-6 p-4 rounded-xl ${
                    submitStatus.type === "success"
                      ? "bg-green-900/50 text-green-300 border border-green-700"
                      : "bg-red-900/50 text-red-300 border border-red-700"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              {/* Message Form */}
              <motion.div
                key="message"
                initial={{ opacity: 0, x: activeTab === "message" ? 0 : -20 }}
                animate={{ opacity: activeTab === "message" ? 1 : 0, x: 0 }}
                transition={{ duration: 0.3 }}
                className={activeTab === "message" ? "block" : "hidden"}
              >
                <form onSubmit={handleMessageSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="message-name"
                      className="block text-sm font-medium mb-2"
                    >
                      Nom complet *
                    </label>
                    <input
                      id="message-name"
                      type="text"
                      required
                      value={messageForm.name}
                      onChange={(e) =>
                        setMessageForm({ ...messageForm, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[#23252c] border border-[#3f434c] rounded-xl text-white placeholder-[#c7c9d1] focus:border-[#7be8ff] focus:outline-none focus:ring-2 focus:ring-[#7be8ff]/20"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message-email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email *
                    </label>
                    <input
                      id="message-email"
                      type="email"
                      required
                      value={messageForm.email}
                      onChange={(e) =>
                        setMessageForm({
                          ...messageForm,
                          email: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 bg-[#23252c] border border-[#3f434c] rounded-xl text-white placeholder-[#c7c9d1] focus:border-[#7be8ff] focus:outline-none focus:ring-2 focus:ring-[#7be8ff]/20"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message-content"
                      className="block text-sm font-medium mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message-content"
                      required
                      rows={6}
                      value={messageForm.message}
                      onChange={(e) =>
                        setMessageForm({
                          ...messageForm,
                          message: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 bg-[#23252c] border border-[#3f434c] rounded-xl text-white placeholder-[#c7c9d1] focus:border-[#7be8ff] focus:outline-none focus:ring-2 focus:ring-[#7be8ff]/20 resize-none"
                      placeholder="Décrivez votre projet ou posez vos questions..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#A62609] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#A62609]/90 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  </button>
                </form>
              </motion.div>

              {/* Devis Form */}
              <motion.div
                key="devis"
                initial={{ opacity: 0, x: activeTab === "devis" ? 0 : 20 }}
                animate={{ opacity: activeTab === "devis" ? 1 : 0, x: 0 }}
                transition={{ duration: 0.3 }}
                className={activeTab === "devis" ? "block" : "hidden"}
              >
                <form onSubmit={handleDevisSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="devis-name"
                        className="block text-sm font-medium mb-2"
                      >
                        Nom complet *
                      </label>
                      <input
                        id="devis-name"
                        type="text"
                        required
                        value={devisForm.name}
                        onChange={(e) =>
                          setDevisForm({ ...devisForm, name: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-[#23252c] border border-[#3f434c] rounded-xl text-white placeholder-[#c7c9d1] focus:border-[#7be8ff] focus:outline-none focus:ring-2 focus:ring-[#7be8ff]/20"
                        placeholder="Votre nom complet"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="devis-email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email *
                      </label>
                      <input
                        id="devis-email"
                        type="email"
                        required
                        value={devisForm.email}
                        onChange={(e) =>
                          setDevisForm({ ...devisForm, email: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-[#23252c] border border-[#3f434c] rounded-xl text-white placeholder-[#c7c9d1] focus:border-[#7be8ff] focus:outline-none focus:ring-2 focus:ring-[#7be8ff]/20"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="devis-phone"
                      className="block text-sm font-medium mb-2"
                    >
                      Téléphone
                    </label>
                    <input
                      id="devis-phone"
                      type="tel"
                      value={devisForm.phone}
                      onChange={(e) =>
                        setDevisForm({ ...devisForm, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[#23252c] border border-[#3f434c] rounded-xl text-white placeholder-[#c7c9d1] focus:border-[#7be8ff] focus:outline-none focus:ring-2 focus:ring-[#7be8ff]/20"
                      placeholder="Votre numéro de téléphone"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="devis-type"
                      className="block text-sm font-medium mb-2"
                    >
                      Type de projet *
                    </label>
                    <select
                      id="devis-type"
                      required
                      value={devisForm.type}
                      onChange={(e) =>
                        setDevisForm({ ...devisForm, type: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[#23252c] border border-[#3f434c] rounded-xl text-white focus:border-[#7be8ff] focus:outline-none focus:ring-2 focus:ring-[#7be8ff]/20"
                    >
                      <option value="">Sélectionnez le type de projet</option>
                      {projectTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="devis-project"
                      className="block text-sm font-medium mb-2"
                    >
                      Description du projet *
                    </label>
                    <textarea
                      id="devis-project"
                      required
                      rows={4}
                      value={devisForm.project}
                      onChange={(e) =>
                        setDevisForm({ ...devisForm, project: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[#23252c] border border-[#3f434c] rounded-xl text-white placeholder-[#c7c9d1] focus:border-[#7be8ff] focus:outline-none focus:ring-2 focus:ring-[#7be8ff]/20 resize-none"
                      placeholder="Décrivez votre projet en détail..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#A62609] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#A62609]/90 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Envoi en cours..." : "Demander un devis"}
                  </button>
                </form>
              </motion.div>
            </div>
          </motion.div>

          {/* Map & Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-[#31343a] rounded-2xl border border-[#23252c] shadow-[4px_4px_16px_#23252c,-4px_-4px_12px_#484c56,0_1px_0px_#16171b] p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">Notre localisation</h3>
              <div className="bg-[#23252c] rounded-xl overflow-hidden">
                <iframe
                  title="Localisation DevLeads"
                  src="https://www.google.com/maps?q=19+Rue+Normande,+27370+Le+Thuit-de-l%27Oison,+France&output=embed"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className=""
                  allowFullScreen
                />
              </div>
              <div className="mt-4 text-[#c7c9d1] text-sm">
                <p>19 rue Normande, 27370 Le Thuit-de-l&apos;Oison</p>
                <p>contact@devleads.org</p>
              </div>
            </div>

            <div className="bg-[#31343a] rounded-2xl border border-[#23252c] shadow-[4px_4px_16px_#23252c,-4px_-4px_12px_#484c56,0_1px_0px_#16171b] p-6">
              <h3 className="text-xl font-bold mb-4">
                Pourquoi nous choisir ?
              </h3>
              <ul className="space-y-3 text-[#c7c9d1] text-sm">
                <li className="flex items-start">
                  <span className="text-[#7be8ff] mr-2">✓</span>
                  Consultation gratuite
                </li>
                <li className="flex items-start">
                  <span className="text-[#7be8ff] mr-2">✓</span>
                  Devis détaillé sous 48h
                </li>
                <li className="flex items-start">
                  <span className="text-[#7be8ff] mr-2">✓</span>
                  Accompagnement personnalisé
                </li>
                <li className="flex items-start">
                  <span className="text-[#7be8ff] mr-2">✓</span>
                  Technologies modernes
                </li>
                <li className="flex items-start">
                  <span className="text-[#7be8ff] mr-2">✓</span>
                  Support et maintenance
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
