'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cafe-interior.jpg"
            alt="Cafe Interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-serif">Green Leaf Cafe</h1>
          <p className="text-xl md:text-2xl mb-8">Where Nature Meets Coffee</p>
          <div className="flex gap-4 justify-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              View Menu
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-full font-medium transition-colors"
            >
              Book a Table
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Menu Section */}
      <section className="py-20 px-4 bg-emerald-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-emerald-800">Our Menu</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Coffee Menu */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4 text-emerald-700">Coffee</h3>
              <ul className="space-y-4">
                <li className="flex justify-between">
                  <span>Latte</span>
                  <span className="text-emerald-600">$4.50</span>
                </li>
                <li className="flex justify-between">
                  <span>Espresso</span>
                  <span className="text-emerald-600">$3.50</span>
                </li>
                <li className="flex justify-between">
                  <span>Americano</span>
                  <span className="text-emerald-600">$3.75</span>
                </li>
                <li className="flex justify-between">
                  <span>Cold Brew</span>
                  <span className="text-emerald-600">$4.25</span>
                </li>
              </ul>
            </motion.div>

            {/* Desserts Menu */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4 text-emerald-700">Desserts</h3>
              <ul className="space-y-4">
                <li className="flex justify-between">
                  <span>Tiramisu</span>
                  <span className="text-emerald-600">$6.50</span>
                </li>
                <li className="flex justify-between">
                  <span>Chocolate Cake</span>
                  <span className="text-emerald-600">$5.75</span>
                </li>
                <li className="flex justify-between">
                  <span>Cheesecake</span>
                  <span className="text-emerald-600">$6.00</span>
                </li>
              </ul>
            </motion.div>

            {/* Breakfast Menu */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4 text-emerald-700">Breakfast</h3>
              <ul className="space-y-4">
                <li className="flex justify-between">
                  <span>Avocado Toast</span>
                  <span className="text-emerald-600">$8.50</span>
                </li>
                <li className="flex justify-between">
                  <span>Pancakes</span>
                  <span className="text-emerald-600">$7.75</span>
                </li>
                <li className="flex justify-between">
                  <span>Breakfast Burrito</span>
                  <span className="text-emerald-600">$9.00</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-emerald-800">Our Space</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.02 }}
                className="relative h-64 rounded-lg overflow-hidden"
              >
                <Image
                  src={`/images/gallery-${item}.jpg`}
                  alt={`Gallery image ${item}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
