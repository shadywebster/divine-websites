'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ShopProduct } from '@/types'
import { formatPrice } from '@/lib/utils'
import { ShoppingCart, ExternalLink } from 'lucide-react'
import Link from 'next/link'

interface ProductCardProps {
  product: ShopProduct
  index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group glass rounded-lg overflow-hidden cursor-pointer"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10">
            <span className="text-white font-semibold">Out of Stock</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-heading font-semibold text-primary-gold mb-2 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-sm text-text-light/70 mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between gap-2">
          <span className="text-2xl font-bold text-primary-saffron">
            {formatPrice(product.price)}
          </span>
          <div className="flex items-center gap-2">
            {product.shopLink ? (
              <Link
                href={product.shopLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary-gold/20 hover:bg-primary-gold/30 text-primary-gold rounded-md transition-colors"
              >
                <ExternalLink size={18} />
                <span className="text-sm font-medium">Buy Now</span>
              </Link>
            ) : (
              <button
                disabled={!product.inStock}
                className="flex items-center gap-2 px-4 py-2 bg-primary-gold/20 hover:bg-primary-gold/30 text-primary-gold rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ShoppingCart size={18} />
                <span className="text-sm font-medium">Add</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
