export function Industries() {
  const industries = [
    {
      name: "Fintech",
      description:
        "We provide solutions for secure payment gateways, robust banking systems, and personalized financial management tools. With Codefort, you can streamline your operations, optimize transactions, and deliver seamless customer experiences.",
      bgClass: "bg-industry-fintech",
    },
    {
      name: "E-commerce",
      description:
        "Our e-commerce solutions allow businesses to create captivating online storefronts, implement secure payment gateways, and leverage data-driven insights for growth.",
      bgClass: "bg-industry-ecommerce",
    },
    {
      name: "Oil & Gas",
      description:
        "Our solutions encompass advanced asset management systems, IoT integration, and predictive analytics. Build a solid foundation for optimized operations, risk mitigation, and sustainable growth with our comprehensive software services.",
      bgClass: "bg-industry-oil",
    },
    {
      name: "Travel & Recreation",
      description:
        "With Codefort's innovative solutions, your organization can build captivating online booking platforms, efficient travel management systems, and personalized itineraries.",
      bgClass: "bg-industry-travel",
    },
    {
      name: "Insurance",
      description:
        "Our innovative solutions help our clients to embrace digital transformation, navigate regulatory challenges, and gain a competitive edge in the industry. With Codefort, you can build and secure a prosperous future for your insurance business.",
      bgClass: "bg-industry-insurance",
    },
    {
      name: "Logistics",
      description:
        "Our logistics solutions encompass end-to-end supply chain management, real-time tracking, warehouse management systems, and process automation. Build a strong logistics ecosystem and elevate your operations to new heights with our custom solutions.",
      bgClass: "bg-industry-logistics",
    },
  ]

  return (
    <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-16 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Key industries<span className="text-accent">.</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">Domains we have mastered and conquered</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className={`group relative overflow-hidden rounded-2xl h-[300px] sm:h-[350px] cursor-default ${industry.bgClass}`}
            >
              {/* Initial View */}
              <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground z-20">{industry.name}</h3>
                <div className="absolute inset-0 bg-foreground/40 z-10" />
              </div>

              {/* Hover View */}
              <div className="absolute inset-0 bg-foreground/90 p-8 flex flex-col justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-30">
                <h3 className="text-2xl font-bold text-background mb-4">{industry.name}</h3>
                <p className="text-sm sm:text-base text-muted leading-relaxed">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
