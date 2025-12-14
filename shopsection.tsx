'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { shopProducts } from '@/lib/data/shop'
import { ProductCategory } from '@/types'
import ProductCard from '@/components/ProductCard'

const categories: { id: ProductCategory; name: string }[] = [
  { id: 'all', name: 'All Items' },
  { id: 'books', name: 'Books' },
  { id: 'idols', name: 'Idols' },
  { id: 'japa-mala', name: 'Japa Mala' },
  { id: 'devotional-items', name: 'Devotional Items' },
]

export default function ShopSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all')

  const filteredProducts =
    selectedCategory === 'all'
      ? shopProducts
      : shopProducts.filter((product) => product.category === selectedCategory)

  return (
    <section className="relative min-h-screen py-20 bg-background-navy">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-4 text-gradient">
            Devotional Shop
          </h2>
          <p className="text-xl text-text-light/80 max-w-3xl mx-auto">
            Discover sacred books, idols, japa malas, and devotional items
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-primary-gold text-background-navy'
                  : 'glass text-text-light hover:bg-primary-gold/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-text-light/70 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
