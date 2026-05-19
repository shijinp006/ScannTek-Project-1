import { motion } from "framer-motion";
import { ChevronDown, Utensils, TreePine, Bus, GraduationCap } from "lucide-react";

export function LandingPage() {
  return (
    <div className="w-full bg-white selection:bg-slate-900 selection:text-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-zinc-950">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.png"
            alt="Concrete Elegance Architecture"
            className="w-full h-full object-cover object-center opacity-80"
          />
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
        </div>

        {/* Main Content */}
        <main className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-white text-5xl sm:text-6xl md:text-[72px] leading-[1.1] md:leading-[90px]"
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 700,
                letterSpacing: "0px",
                verticalAlign: "middle",
              }}
            >
              CONCRETE <br />
              ELEGANCE
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 sm:mt-6 text-gray-300 text-base sm:text-lg md:text-xl max-w-xl font-light leading-relaxed"
            >
              Where brutalist architecture meets luxurious living. A revolutionary
              residential experience defined by bold geometry and raw materials.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 sm:mt-10"
            >
              <button className="w-full sm:w-auto bg-white text-black px-6 sm:px-8 py-4 font-bold text-sm tracking-widest uppercase hover:bg-gray-200 transition-colors duration-300 cursor-pointer">
                Explore Residences
              </button>
            </motion.div>
          </div>
        </main>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="text-white w-8 h-8 opacity-70 cursor-pointer hover:opacity-100 transition-opacity" />
          </motion.div>
        </motion.div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 container mx-auto text-slate-900">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2
            className="text-[32px] sm:text-4xl md:text-[48px] leading-tight md:leading-[48px] font-bold uppercase tracking-tight relative inline-block pb-6 whitespace-nowrap"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Property Overview
            <div className="absolute bottom-0 left-0 w-16 md:w-20 h-1.5 bg-slate-900"></div>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {[
            { title: "42", subtitle: "Total Units", text: "Exclusive residences designed for those who appreciate architectural distinction." },
            { title: "$2.1M+", subtitle: "Price Range", text: "Investment in uncompromising quality and revolutionary design." },
            { title: "1,800+", subtitle: "Square Footage", text: "Spacious interiors that balance openness with thoughtful privacy." },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-[#f3f4f6] p-8 md:p-12 relative overflow-hidden group"
            >
              {/* Decorative corner shapes */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#e5e7eb] opacity-70 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#e5e7eb] opacity-70 translate-x-1/2 translate-y-1/2 rotate-45 group-hover:scale-110 transition-transform duration-500"></div>

              <h3
                className="text-5xl md:text-[60px] leading-tight md:leading-[60px] font-bold text-slate-900 mb-3 relative z-10"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                {card.title}
              </h3>
              <p className="font-bold text-sm text-slate-600 uppercase tracking-wider mb-6 relative z-10">
                {card.subtitle}
              </p>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed max-w-[280px] relative z-10">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Architectural Vision */}
        <div className="mt-32 md:mt-48 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className=""
          >
            <h2
              className="text-3xl md:text-[30px] leading-tight md:leading-[36px] font-bold uppercase tracking-tight text-slate-900 mb-8"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              Architectural Vision
            </h2>
            <div className="space-y-6 text-slate-600 text-[15px] md:text-base leading-relaxed mb-10">
              <p>
                <span className="text-slate-900 font-semi-bold uppercase text-[14px] md:text-[14px]">Concrete Elegance</span> represents a bold departure from conventional residential design. Our vision embraces the raw honesty of brutalist architecture while infusing spaces with warmth and livability.
              </p>
              <p>
                Each residence features exposed structural elements, floor-to-ceiling windows, and custom-designed fixtures that celebrate the beauty of unadorned materials.
              </p>
            </div>
            <button className="w-full sm:w-auto bg-[#0f172a] text-white px-8 py-4 font-bold text-xs md:text-sm tracking-widest uppercase hover:bg-slate-700 transition-colors duration-300 cursor-pointer">
              Download Brochure
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[600px] lg:h-[700px] w-full"
          >
            <img src="/interior.png" alt="Interior Architectural Vision" className="w-full h-full object-cover object-center shadow-2xl" />
          </motion.div>
        </div>

      </section>

      {/* FEATURE GALLERY SECTION */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 container mx-auto text-slate-900 bg-[#F3F4F6] md:bg-transparent">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16"
        >
          <h2
            className="text-[32px] sm:text-4xl md:text-[48px] leading-tight md:leading-[48px] font-bold uppercase tracking-tight relative inline-block pb-6 whitespace-nowrap"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Feature Gallery
            <div className="absolute bottom-0 left-0 w-16 md:w-20 h-1.5 bg-slate-900"></div>
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">

          {/* Image 1: Tall Window (col 1, row 1-2) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative lg:col-span-1 lg:row-span-2 group overflow-hidden"
          >
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Window" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </motion.div>

          {/* Image 2: Concrete Texture (col 2, row 1) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative group overflow-hidden"
          >
            <img src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Concrete" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white font-bold tracking-wide uppercase text-sm md:text-base mb-1" style={{ fontFamily: "Roboto, sans-serif" }}>Raw Materiality</h3>
              <p className="text-white/80 text-xs md:text-sm line-clamp-2">Exposed concrete surfaces celebrating structural honesty.</p>
            </div>
          </motion.div>

          {/* Image 3: Kitchen (col 3, row 1) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group overflow-hidden"
          >
            <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Kitchen" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white font-bold tracking-wide uppercase text-sm md:text-base mb-1" style={{ fontFamily: "Roboto, sans-serif" }}>Culinary Spaces</h3>
              <p className="text-white/80 text-xs md:text-sm line-clamp-2">Kitchens that balance functionality with architectural expression.</p>
            </div>
          </motion.div>

          {/* Image 4: Courtyard (col 2-3, row 2) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative md:col-span-2 lg:col-span-2 group overflow-hidden"
          >
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Courtyard" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </motion.div>

          {/* Image 5: Sculptural Elements (col 1, row 3) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative group overflow-hidden"
          >
            <img src="https://images.unsplash.com/photo-1509653087866-91f6c2ab59f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Stairs" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white font-bold tracking-wide uppercase text-sm md:text-base mb-1" style={{ fontFamily: "Roboto, sans-serif" }}>Sculptural Elements</h3>
              <p className="text-white/80 text-xs md:text-sm line-clamp-2">Architectural features that double as functional art pieces.</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* LOCATION SECTION */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 container mx-auto text-slate-900">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16"
        >
          <h2
            className="text-[32px] sm:text-4xl md:text-[48px] leading-tight md:leading-[48px] font-bold uppercase tracking-tight relative inline-block pb-6 whitespace-nowrap"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Location
            <div className="absolute bottom-0 left-0 w-16 md:w-20 h-1.5 bg-slate-900"></div>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Map/Area Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full aspect-square md:aspect-video lg:aspect-square relative"
          >
            <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Urban Context Drone View" className="w-full h-full object-cover shadow-lg" />
          </motion.div>

          {/* Urban Context Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center h-full"
          >
            <h3 className="text-xl md:text-[24px] font-bold text-slate-900 mb-10 uppercase tracking-wide" style={{ fontFamily: "Roboto, sans-serif" }}>Urban Context</h3>

            <div className="space-y-8 mb-12">
              {[
                { icon: <Utensils className="w-5 h-5 text-white" />, title: "Dining & Culture", desc: "5-minute walk to award-winning restaurants and galleries" },
                { icon: <TreePine className="w-5 h-5 text-white" />, title: "Green Spaces", desc: "Adjacent to 12-acre sculpture park and walking trails" },
                { icon: <Bus className="w-5 h-5 text-white" />, title: "Transportation", desc: "10-minute walk to transit hub with citywide connections" },
                { icon: <GraduationCap className="w-5 h-5 text-white" />, title: "Education", desc: "Within district of top-rated schools and universities" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-6">
                  <div className="bg-[#1e293b] p-4 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base uppercase tracking-wider mb-1" style={{ fontFamily: "Roboto, sans-serif" }}>{item.title}</h4>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full sm:w-auto self-start bg-[#0f172a] text-white px-8 py-4 font-bold text-xs md:text-sm tracking-widest uppercase hover:bg-slate-700 transition-colors duration-300 cursor-pointer">
              View Detailed Map
            </button>

          </motion.div>

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-[#0f172a] text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left Column: Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="text-[32px] sm:text-4xl md:text-[48px] leading-tight md:leading-[48px] font-bold uppercase tracking-tight relative inline-block pb-6 whitespace-nowrap mb-8"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Contact
                <div className="absolute bottom-0 left-0 w-16 md:w-20 h-1.5 bg-white"></div>
              </h2>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-10 max-w-md">
                Experience CONCRETE ELEGANCE firsthand. Schedule a private<br />tour or request additional information about available residences.
              </p>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-[10px] font-bold tracking-widest uppercase text-[#FFFFFF] mb-2">Name</label>
                  <input type="text" className="w-full bg-transparent border border-slate-700 p-4 text-[#FFFFFF] focus:outline-none focus:border-[#FFFFFF] transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-widest uppercase text-[#FFFFFF] mb-2">Email</label>
                  <input type="email" className="w-full bg-transparent border border-slate-700 p-4 text-[#FFFFFF] focus:outline-none focus:border-[#FFFFFF] transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-widest uppercase text-[#FFFFFF] mb-2">Phone</label>
                  <input type="tel" className="w-full bg-transparent border border-slate-700 p-4 text-[#FFFFFF] focus:outline-none focus:border-[#FFFFFF] transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-widest uppercase text-[#FFFFFF] mb-2">Message</label>
                  <textarea rows="4" className="w-full bg-transparent border border-slate-700 p-4 text-[#FFFFFF] focus:outline-none focus:border-[#FFFFFF] transition-colors resize-none"></textarea>
                </div>

                <button className="bg-white text-[#0f172a] px-8 py-4 font-bold text-xs md:text-sm tracking-widest uppercase hover:bg-gray-200 transition-colors duration-300 cursor-pointer mt-4">
                  Submit Inquiry
                </button>
              </form>
            </motion.div>

            {/* Right Column: Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col"
            >
              <div className="w-full aspect-video md:aspect-[16/9] lg:aspect-[4/3] mb-12 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Building Exterior" className="w-full h-full object-cover" />
              </div>

              <div className="space-y-10">
                <div>
                  <h4 className="font-bold text-white text-sm md:text-base uppercase tracking-wider mb-2" style={{ fontFamily: "Roboto, sans-serif" }}>Sales Gallery</h4>
                  <p className="text-slate-400 text-sm">123 Design District Avenue New York, NY 10001</p>
                </div>

                <div>
                  <h4 className="font-bold text-white text-sm md:text-base uppercase tracking-wider mb-2" style={{ fontFamily: "Roboto, sans-serif" }}>Contact Details</h4>
                  <p className="text-slate-400 text-sm">info@concreteelegance.com &nbsp;&bull;&nbsp; +1 (212) 555-0123</p>
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <a href="#" className="w-10 h-10 bg-[#1e293b] flex items-center justify-center hover:bg-white hover:text-[#0f172a] text-slate-400 transition-colors cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#1e293b] flex items-center justify-center hover:bg-white hover:text-[#0f172a] text-slate-400 transition-colors cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#1e293b] flex items-center justify-center hover:bg-white hover:text-[#0f172a] text-slate-400 transition-colors cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="bg-black text-white py-8 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-6 text-center md:text-left">
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-2" style={{ fontFamily: "Roboto, sans-serif" }}>Concrete</h4>
            <p className="text-slate-500 text-[11px]">&copy; 2025 CONCRETE ELEGANCE. All rights reserved.</p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-[11px] text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            <a href="#" className="hover:text-white transition-colors">Press</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
