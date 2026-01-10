"use client"

import { useState, useEffect, FormEvent, useRef } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    phoneNumber: '+1',
    message: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [isAnimated1, setIsAnimated1] = useState(false);
  const [isAnimated2, setIsAnimated2] = useState(false);
  const [isAnimated3, setIsAnimated3] = useState(false);
  const [isAnimated4, setIsAnimated4] = useState(false);
  
  const sectionRef1 = useRef<HTMLDivElement>(null);
  const sectionRef2 = useRef<HTMLDivElement>(null);
  const sectionRef3 = useRef<HTMLDivElement>(null);
  const sectionRef4 = useRef<HTMLDivElement>(null);

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef1.current) setIsAnimated1(true);
            if (entry.target === sectionRef2.current) setIsAnimated2(true);
            if (entry.target === sectionRef3.current) setIsAnimated3(true);
            if (entry.target === sectionRef4.current) setIsAnimated4(true);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef1.current) observer.observe(sectionRef1.current);
    if (sectionRef2.current) observer.observe(sectionRef2.current);
    if (sectionRef3.current) observer.observe(sectionRef3.current);
    if (sectionRef4.current) observer.observe(sectionRef4.current);

    return () => observer.disconnect();
  }, []);

  // Brevo API configuration
  const BREVO_API_KEY = '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';
  const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';
  
  // Email configuration
  const RECIPIENT_EMAIL = 'lizzy1230@gmail.com';
  const SENDER_EMAIL = 'seanpacey493@gmail.com';
  const SENDER_NAME = 'Contact Form';
  const EMAIL_SUBJECT = 'New Contact Form Submission';

  // Validation helpers
  const validateEmail = (email: string) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
  };

  // Format email content
  const formatEmailContent = (data: typeof formData) => {
    let content = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.fullName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
    `;
    
    if (data.companyName) {
      content += `<p><strong>Company:</strong> ${data.companyName}</p>`;
    }
    
    if (data.phoneNumber && data.phoneNumber !== '+1') {
      content += `<p><strong>Phone:</strong> ${data.phoneNumber}</p>`;
    }
    
    content += `
      <h3>Message:</h3>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><small>Submitted on: ${new Date().toLocaleString()}</small></p>
    `;
    
    return content;
  };

  // Send email via Brevo API
  const sendEmailViaBrevo = async (data: typeof formData) => {
    const emailData = {
      sender: {
        name: SENDER_NAME,
        email: SENDER_EMAIL
      },
      to: [{
        email: RECIPIENT_EMAIL,
        name: 'Website Owner'
      }],
      subject: EMAIL_SUBJECT,
      htmlContent: formatEmailContent(data),
      textContent: `New contact form submission from ${data.fullName} (${data.email}).
        ${data.companyName ? `Company: ${data.companyName}` : ''}
        ${data.phoneNumber && data.phoneNumber !== '+1' ? `Phone: ${data.phoneNumber}` : ''}
        
        Message: ${data.message}
        
        Submitted on: ${new Date().toLocaleString()}`,
      replyTo: {
        email: data.email,
        name: data.fullName
      },
      headers: {
        'X-Mailer': 'Website Contact Form'
      }
    };

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify(emailData)
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to send email');
    }

    return response.json();
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Clear previous messages
    setMessage(null);

    // Validation
    if (!formData.fullName.trim()) {
      setMessage({ type: 'error', text: 'Please enter your full name' });
      return;
    }

    if (!formData.email.trim()) {
      setMessage({ type: 'error', text: 'Please enter your email' });
      return;
    }

    if (!validateEmail(formData.email)) {
      setMessage({ type: 'error', text: 'Invalid email address' });
      return;
    }

    if (!formData.message.trim()) {
      setMessage({ type: 'error', text: 'Please enter your message' });
      return;
    }

    setIsLoading(true);

    try {
      await sendEmailViaBrevo(formData);
      
      // Show success message
      setMessage({ 
        type: 'success', 
        text: 'Message sent successfully! We\'ll get back to you soon.' 
      });
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        companyName: '',
        phoneNumber: '+1',
        message: ''
      });
      
    } catch (error) {
      console.error("Email sending error:", error);
      
      let errorMsg = "Failed to send message. Please try again.";
      if (error instanceof Error) {
        if (error.message.includes('api-key')) {
          errorMsg = "Server configuration error. Please contact the website administrator.";
        } else if (error.message.includes('quota')) {
          errorMsg = "Message quota exceeded. Please try again later.";
        } else if (error.message.includes('invalid')) {
          errorMsg = "Invalid email configuration. Please check your email address.";
        }
      }
      
      setMessage({ type: 'error', text: errorMsg });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle phone number change
  const handlePhoneChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      phoneNumber: value
    }));
  };

  // Auto-dismiss messages after timeout
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
      }, message.type === 'error' ? 8000 : 5000);
      
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <section className="Contaxct_contact___w8Q4">
      <div className="Contaxct_contactTop__i0VZH">
        <div className="Contaxct_contactHeader__LSI8_">
          {/* First animated section - "Talk to us" */}
          <div ref={sectionRef1} style={{position: "relative", width: "fit-content", overflow: "hidden"}}>
            <div style={{height: "100%", opacity: 1, transform: "none", position: "relative"}}>
              <h3 className="Contaxct_sectionTitleDark__D8tmi">
                Talk to us<span
                  className="Contaxct_sectionTitleDark__D8tmi Contaxct_dot__n3v0W"
                  >.</span
                >
              </h3>
              {/* OVERLAY DIV - This will cover the text */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 30,
                  background: "rgb(59, 133, 183)",
                  transform: isAnimated1 ? 'translateY(-100%)' : 'translateY(0)',
                  opacity: isAnimated1 ? 0 : 1,
                  transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease-out',
                }}
              ></div>
            </div>
          </div>
          
          {/* Second animated section - "Let's create something great together" */}
          <div ref={sectionRef2} style={{position: "relative", width: "fit-content", overflow: "hidden", marginTop: "8px"}}>
            <div style={{height: "100%", opacity: 1, transform: "none", position: "relative"}}>
              <p className="Contaxct_sectionBodyDark__a7Ld5">
                Let's create something great together
              </p>
              {/* OVERLAY DIV - This will cover the text */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 30,
                  background: "rgb(59, 133, 183)",
                  transform: isAnimated2 ? 'translateY(-100%)' : 'translateY(0)',
                  opacity: isAnimated2 ? 0 : 1,
                  transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s, opacity 0.6s ease-out 0.2s',
                }}
              ></div>
            </div>
          </div>
        </div>
        
        <img
          alt="contact image"
          loading="lazy"
          width="256"
          height="375"
          decoding="async"
          data-nimg="1"
          className="Contaxct_people__HrzFB"
          style={{color: "transparent"}}
          srcSet="/coded/people.png, /coded/people.png"
          src="/coded/people.png"
        />
        <img
          alt="contact image"
          loading="lazy"
          width="179.2"
          height="262.5"
          decoding="async"
          data-nimg="1"
          className="Contaxct_peopleMobile__soAAJ"
          style={{color: "transparent"}}
          srcSet="/coded/people.png, /coded/people.png 2x"
          src="/coded/people.png"
        />
        
        <div className="Contaxct_contactTopTexts__q2Vg7">
          {/* Third animated section - "Don't like forms?" */}
          <div ref={sectionRef3} style={{position: "relative", width: "fit-content", overflow: "hidden"}}>
            <div style={{height: "100%", opacity: 1, transform: "none", position: "relative"}}>
              <p className="Contaxct_contactTopTextsText__CB3E1">Don't like forms?</p>
              {/* OVERLAY DIV - This will cover the text */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 30,
                  background: "rgb(59, 133, 183)",
                  transform: isAnimated3 ? 'translateY(-100%)' : 'translateY(0)',
                  opacity: isAnimated3 ? 0 : 1,
                  transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s, opacity 0.6s ease-out 0.4s',
                }}
              ></div>
            </div>
          </div>
          
          {/* Fourth animated section - "Email us: hello@codeforttech.com.ng" */}
          <div ref={sectionRef4} style={{position: "relative", width: "fit-content", overflow: "hidden", marginTop: "8px"}}>
            <div style={{height: "100%", opacity: 1, transform: "none", position: "relative"}}>
              <p className="Contaxct_contactTopTextsEmail__wxduZ">
                Email us: hello@codeforttech.com.ng
              </p>
              {/* OVERLAY DIV - This will cover the text */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 30,
                  background: "rgb(59, 133, 183)",
                  transform: isAnimated4 ? 'translateY(-100%)' : 'translateY(0)',
                  opacity: isAnimated4 ? 0 : 1,
                  transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s, opacity 0.6s ease-out 0.6s',
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Status Message */}
      {message && (
        <div 
          className={`Contaxct_message__${message.type}`}
          style={{
            margin: '15px auto',
            padding: '12px 20px',
            borderRadius: '4px',
            fontWeight: 500,
            maxWidth: '600px',
            backgroundColor: message.type === 'error' ? '#fee' : '#efe',
            color: message.type === 'error' ? '#c33' : '#393',
            border: `1px solid ${message.type === 'error' ? '#fcc' : '#cfc'}`,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            animation: 'fadeInUp 0.5s ease-out',
            zIndex: 100
          }}
        >
          <span>{message.type === 'error' ? '⚠️' : '✅'}</span>
          <span>{message.text}</span>
        </div>
      )}
      
      <form id="contact" className="Contaxct_form__xdPig" onSubmit={handleSubmit} noValidate={true}>
        <div className="Contaxct_formHeaderWrapper__O1ImV">
          <h3 className="Contaxct_formHeader__vEsN1">Hello,</h3>
          <p className="Contaxct_formHeaderText__QHl_M">
            Reach out to start a new project or to make general enquiries
          </p>
        </div>
        <div className="Contaxct_line__k8Zct"></div>
        <div className="Contaxct_formInputs__z1LB2">
          <div className="Contaxct_formInputWrapper__wJWg6">
            <label htmlFor="Full name" className="Contaxct_formLabel__kdZ_N"
              >Full name*</label
            ><input
              type="text"
              id="Full name"
              className="Contaxct_formInput__oxC0c"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              disabled={isLoading}
              required
            />
          </div>
          <div className="Contaxct_formInputWrapper__wJWg6">
            <label htmlFor="Email address" className="Contaxct_formLabel__kdZ_N"
              >Email address*</label
            ><input
              type="email"
              id="Email address"
              className="Contaxct_formInput__oxC0c"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              disabled={isLoading}
              required
            />
          </div>
          <div className="Contaxct_formInputWrapper__wJWg6">
            <label htmlFor="Company name" className="Contaxct_formLabel__kdZ_N"
              >Company name</label
            ><input
              type="text"
              id="Company name"
              className="Contaxct_formInput__oxC0c"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              disabled={isLoading}
            />
          </div>
          <div className="Contaxct_formInputWrapper__wJWg6" style={{zIndex:1000}}>
            <label htmlFor="Phone number" className="Contaxct_formLabel__kdZ_N"
              >Phone number</label
            >
            <PhoneInput
              country={'us'}
              value={formData.phoneNumber}
              onChange={handlePhoneChange}
              disabled={isLoading}
              inputStyle={{
                width: '100%',
                height: '56px',
                fontSize: '16px',
                paddingLeft: '48px',
                borderRadius: '4px',
                border: '1px solid #e0e0e0',
                backgroundColor: 'white'
              }}
              buttonStyle={{
                borderRadius: '4px 0 0 4px',
                backgroundColor: 'white',
                borderRight: '1px solid #e0e0e0'
              }}
              dropdownStyle={{
                borderRadius: '4px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                zIndex: 1000
              }}
              containerStyle={{
                width: '100%'
              }}
            />
          </div>
          <div
            className="Contaxct_formInputWrapper__wJWg6 Contaxct_formInputWrapperMessage__h3H7v"
          >
            <label htmlFor="messageId" className="Contaxct_formLabel__kdZ_N"
              >Your message for us*</label
            ><textarea
              id="messageId"
              className="Contaxct_formInput__oxC0c Contaxct_textareaInput__FEzS7"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              disabled={isLoading}
              required
              rows={5}
            ></textarea>
          </div>
          <button
            className="Contaxct_formButton__buqaF"
            style={{backgroundColor: "#3b85b7"}}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span 
                  className="spinner"
                  style={{
                    display: 'inline-block',
                    width: '16px',
                    height: '16px',
                    border: '2px solid rgba(255,255,255,.3)',
                    borderRadius: '50%',
                    borderTopColor: '#fff',
                    animation: 'spin 1s ease-in-out infinite',
                    marginRight: '8px'
                  }}
                ></span>
                Sending...
              </>
            ) : 'Send message'}
          </button>
        </div>
        <div className="Contaxct_captchaWrapper__fcBZY">
          <small className="Contaxct_captchaText__5yema"
            >This site is protected by reCAPTCHA and the Google
            <a
              href="https://policies.google.com/privacy"
              className="Contaxct_captchaTextAccent__SioBj"
              >Privacy Policy</a
            >
           and
            <a
              href="https://policies.google.com/terms"
              className="Contaxct_captchaTextAccent__SioBj"
              >Terms of Service</a>
           apply.</small>
        </div>
      </form>
      
      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .Contaxct_formInput__oxC0c,
        .Contaxct_textareaInput__FEzS7 {
          transition: all 0.3s ease;
        }
        
        .Contaxct_formInput__oxC0c:focus,
        .Contaxct_textareaInput__FEzS7:focus {
          border-color: #3b85b7;
          box-shadow: 0 0 0 2px rgba(59, 133, 183, 0.2);
          outline: none;
        }
        
        .Contaxct_formButton__buqaF {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .Contaxct_formButton__buqaF:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(59, 133, 183, 0.3);
        }
        
        .Contaxct_formButton__buqaF:active:not(:disabled) {
          transform: translateY(0);
        }
        
        .Contaxct_formButton__buqaF::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 5px;
          height: 5px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 0;
          border-radius: 100%;
          transform: scale(1, 1) translate(-50%);
          transform-origin: 50% 50%;
        }
        
        .Contaxct_formButton__buqaF:focus:not(:active)::after {
          animation: ripple 1s ease-out;
        }
        
        @keyframes ripple {
          0% {
            transform: scale(0, 0);
            opacity: 0.5;
          }
          20% {
            transform: scale(25, 25);
            opacity: 0.3;
          }
          100% {
            opacity: 0;
            transform: scale(40, 40);
          }
        }
        
        /* Form input animations */
        .Contaxct_formInputWrapper__wJWg6 {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .Contaxct_formInputWrapper__wJWg6:nth-child(1) { animation-delay: 0.1s; }
        .Contaxct_formInputWrapper__wJWg6:nth-child(2) { animation-delay: 0.2s; }
        .Contaxct_formInputWrapper__wJWg6:nth-child(3) { animation-delay: 0.3s; }
        .Contaxct_formInputWrapper__wJWg6:nth-child(4) { animation-delay: 0.4s; }
        .Contaxct_formInputWrapperMessage__h3H7v { animation-delay: 0.5s; }
        .Contaxct_formButton__buqaF { animation-delay: 0.6s; }
      `}</style>
    </section>
  );
}