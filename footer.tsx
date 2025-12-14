'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-background-navy/95 border-t border-white/10 py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-heading font-bold text-gradient mb-2">
              Spiritual Knowledge
            </h3>
            <p className="text-sm text-text-light/60">
              © {new Date().getFullYear()} Spiritual Knowledge. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://www.instagram.com/divinechronicless?igsh=NDZrYWNmOTM0ZG91"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-text-light hover:text-primary-gold transition-colors group"
              aria-label="Follow us on Instagram"
            >
              <Instagram 
                size={20} 
                className="group-hover:scale-110 transition-transform"
              />
              <span className="text-sm font-medium hidden sm:inline">
                Follow on Instagram
              </span>
            </motion.a>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link
              href="/"
              className="text-text-light/60 hover:text-primary-gold transition-colors"
            >
              Home
            </Link>
            <Link
              href="/vedas"
              className="text-text-light/60 hover:text-primary-gold transition-colors"
            >
              Vedas
            </Link>
            <Link
              href="/puranas"
              className="text-text-light/60 hover:text-primary-gold transition-colors"
            >
              Puranas
            </Link>
            <Link
              href="/upanishads"
              className="text-text-light/60 hover:text-primary-gold transition-colors"
            >
              Upanishads
            </Link>
            <Link
              href="/tantra"
              className="text-text-light/60 hover:text-primary-gold transition-colors"
            >
              Tantra
            </Link>
            <Link
              href="/shop"
              className="text-text-light/60 hover:text-primary-gold transition-colors"
            >
              Shop
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
