import Image from "next/image"
import Link from "next/link"

export function Services() {
  const services = [
    {
      title: "Custom Software Development",
      bgColor: "bg-service-purple",
      dotColor: "bg-service-purple-accent",
      points: ["Website development", "Web app development", "Mobile app development"],
      href: "/software-development",
      icon: "/images/service-1.webp",
      bigIcon: "/images/service-1.webp",
    },
    {
      title: "Blockchain Development",
      bgColor: "bg-service-orange",
      dotColor: "bg-service-orange-accent",
      points: ["Custom blockchain solutions", "Smart contracts", "Cryptocurrency integration"],
      href: "/blockchain",
      icon: "/images/service-2.webp",
      bigIcon: "/images/service-2.webp",
    },
    {
      title: "User Research & Product Design",
      bgColor: "bg-service-red",
      dotColor: "bg-service-red-accent",
      points: ["User-centered design", "Prototyping and wireframing", "Usability testing"],
      href: "/product-design",
      icon: "/images/service-3.webp",
      bigIcon: "/images/service-3.webp",
    },
    {
      title: "AI & Machine Learning Development",
      bgColor: "bg-service-gray",
      dotColor: "bg-service-gray-accent",
      points: ["Predictive analytics", "Natural language processing", "Computer vision"],
      href: "/ai-and-ml",
      icon: "/images/service-4.webp",
      bigIcon: "/images/service-4.webp",
    },
    {
      title: "Outsourcing & Recruitment Services",
      bgColor: "bg-service-blue",
      dotColor: "bg-service-blue-accent",
      points: ["Dedicated engineering teams", "Short-term project support", "Managed recruitment services"],
      href: "/outsourcing",
      icon: "/images/service-5.webp",
      bigIcon: "/images/service-5.webp",
    },
  ]

  return (
    <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Services we offer<span className="text-accent">.</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">End-to-end solutions for your business</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className={`relative p-8 rounded-3xl overflow-hidden group hover:shadow-xl transition-shadow ${service.bgColor}`}
            >
              <div className="relative z-10 flex flex-col h-full">
                <Image
                  alt="service icon"
                  width={56}
                  height={56}
                  src={service.icon || "/placeholder.svg"}
                  className="mb-8"
                />
                <h3 className="text-2xl font-bold mb-6 text-foreground">{service.title}</h3>
                <div className="flex flex-col gap-3 mb-8 flex-1">
                  {service.points.map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${service.dotColor}`} />
                      <p className="text-sm sm:text-base text-muted-foreground">{point}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href={service.href}
                  className="flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-accent transition-colors"
                >
                  Learn more
                  <Image alt="learn more icon" width={24} height={24} src="/images/learn-more.jpg" />
                </Link>
              </div>
              <Image
                alt="service icon big"
                width={156}
                height={145}
                src={service.bigIcon || "/placeholder.svg"}
                className="absolute top-0 right-0 opacity-10 group-hover:opacity-20 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
