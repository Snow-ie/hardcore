"use client";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";
import { motion } from "framer-motion";

const info = [
  {
    icon: MapPin,
    label: "Address",
    value: "Plot 1816, Mahathir St, Asokoro – Abuja",
  },
  { icon: Phone, label: "Mobile", value: "+234 803 306 2096" },
  { icon: Clock, label: "Availability", value: "Daily 08 am – 05 pm" },
  { icon: Mail, label: "Email", value: "info@hardcorebiometric.com" },
];

const socials = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
];

export default function ContactDetails() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-dark">Contact Details</h2>
        <p className="text-gray-600">
          Feel free to reach us via any channel below.
        </p>
      </div>

      <ul className="space-y-6">
        {info.map(({ icon: Icon, label, value }) => (
          <li key={label} className="flex items-start gap-4">
            <Icon className="mt-1 h-6 w-6 text-accent" />
            <div>
              <p className="font-medium text-dark">{label}</p>
              <p className="text-sm text-gray-600">{value}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex gap-4 pt-2">
        {socials.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="p-2 rounded-full bg-gray-100 hover:bg-accent/20 transition text-accent"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </motion.div>
  );
}
