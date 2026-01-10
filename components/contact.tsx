import Image from "next/image"

export function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-16 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Column - Intro */}
          <div className="lg:w-1/3 flex flex-col">
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                Talk to us<span className="text-accent">.</span>
              </h2>
              <p className="text-lg text-muted-foreground">Let's create something great together</p>
            </div>

            <div className="relative w-full aspect-[3/4] mb-12 hidden lg:block">
              <Image alt="contact image" fill src="/images/people.png" className="object-contain object-left" />
            </div>

            <div className="lg:mt-auto">
              <p className="text-lg font-semibold text-foreground mb-2">Don't like forms?</p>
              <p className="text-lg text-accent font-medium">Email us: hello@codeforttech.com.ng</p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:w-2/3 bg-secondary p-8 sm:p-12 lg:p-16 rounded-3xl">
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">Hello,</h3>
              <p className="text-lg text-muted-foreground">
                Reach out to start a new project or to make general enquiries
              </p>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="fullName" className="text-sm font-semibold text-foreground">
                    Full name*
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className="bg-transparent border-b-2 border-border focus:border-accent py-2 outline-none transition-colors text-foreground"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground">
                    Email address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-transparent border-b-2 border-border focus:border-accent py-2 outline-none transition-colors text-foreground"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="companyName" className="text-sm font-semibold text-foreground">
                    Company name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    className="bg-transparent border-b-2 border-border focus:border-accent py-2 outline-none transition-colors text-foreground"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phoneNumber" className="text-sm font-semibold text-foreground">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    className="bg-transparent border-b-2 border-border focus:border-accent py-2 outline-none transition-colors text-foreground"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-foreground">
                  Your message for us*
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="bg-transparent border-b-2 border-border focus:border-accent py-2 outline-none transition-colors resize-none text-foreground"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-primary text-primary-foreground px-12 py-4 rounded-md text-base font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
              >
                Send message
              </button>

              <div className="pt-8 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  This site is protected by reCAPTCHA and the Google{" "}
                  <a href="https://policies.google.com/privacy" className="text-accent hover:underline">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="https://policies.google.com/terms" className="text-accent hover:underline">
                    Terms of Service
                  </a>{" "}
                  apply.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
