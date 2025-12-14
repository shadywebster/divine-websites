'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { upanishads } from '@/lib/data/upanishads'
import { ExternalLink, ChevronDown } from 'lucide-react'
import Link from 'next/link'

export default function UpanishadsSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-overlay z-10" />
        <Image
          src="/images/backgrounds/shiva.jpg"
          alt="Shiva"
          fill
          className="object-cover parallax-bg"
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-4 text-gradient">
            The Upanishads
          </h2>
          <p className="text-xl text-text-light/80 max-w-3xl mx-auto">
            Philosophical texts that form the foundation of Hindu spiritual wisdom
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {upanishads.map((upanishad, index) => (
            <motion.div
              key={upanishad.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="glass-strong rounded-lg overflow-hidden backdrop-blur-lg"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-primary-gold mb-1">
                      {upanishad.name}
                    </h3>
                    <p className="text-sm text-primary-saffron font-sanskrit">
                      {upanishad.sanskritName}
                    </p>
                  </div>
                  <button
                    onClick={() => setExpandedId(expandedId === upanishad.id ? null : upanishad.id)}
                    className="text-primary-gold hover:text-primary-saffron transition-colors"
                  >
                    <ChevronDown
                      size={20}
                      className={`transition-transform ${expandedId === upanishad.id ? 'rotate-180' : ''}`}
                    />
                  </button>
                </div>
                <p className="text-text-light/90 font-medium mb-3 text-sm">
                  {upanishad.description}
                </p>
                <AnimatePresence>
                  {expandedId === upanishad.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-text-light/70 text-sm leading-relaxed mb-4 mt-3">
                        {upanishad.details}
                      </p>
                      <Link
                        href={upanishad.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 bg-primary-gold/20 hover:bg-primary-gold/30 text-primary-gold rounded-md transition-colors text-sm"
                      >
                        <span>Source: {upanishad.source}</span>
                        <ExternalLink size={14} />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
