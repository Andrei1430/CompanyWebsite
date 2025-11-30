import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, CheckCircle, ArrowRight, Shield, Thermometer, Euro, Clock, Languages } from 'lucide-react';
import { translations, type Translation } from './translations';

type Language = 'en' | 'nl';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState<Language>('en');

  const t: Translation = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'services', 'advantages', 'cases', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'nl' : 'en');
  };

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'services', label: t.nav.services },
    { id: 'advantages', label: t.nav.advantages },
    { id: 'cases', label: t.nav.cases },
    { id: 'contact', label: t.nav.contact }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <Thermometer className="w-8 h-8 text-teal-600" />
              <span className="text-2xl font-bold text-gray-900">ThermalPro</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-teal-600'
                      : 'text-gray-700 hover:text-teal-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
                title={language === 'en' ? 'Switch to Nederlands' : 'Schakel naar Engels'}
              >
                <Languages className="w-5 h-5" />
                <span className="uppercase">{language === 'en' ? 'NL' : 'EN'}</span>
              </button>
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="hidden md:block bg-teal-600 text-white px-6 py-2.5 rounded-lg hover:bg-teal-700 transition-colors font-medium"
            >
              {t.nav.getQuote}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-teal-50 text-teal-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 w-full px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <Languages className="w-5 h-5" />
                <span>{language === 'en' ? 'Nederlands' : 'English'}</span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors font-medium"
              >
                {t.nav.getQuote}
              </button>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-teal-50 via-white to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block">
                <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-semibold">
                  {t.hero.badge}
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t.hero.title}
                <span className="text-teal-600"> {t.hero.titleHighlight}</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-all font-semibold flex items-center justify-center group"
                >
                  {t.hero.ctaPrimary}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg hover:bg-teal-50 transition-all font-semibold"
                >
                  {t.hero.ctaSecondary}
                </button>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-bold text-teal-600">500+</div>
                  <div className="text-sm text-gray-600 mt-1">{t.hero.stats.projects}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-600">98%</div>
                  <div className="text-sm text-gray-600 mt-1">{t.hero.stats.satisfaction}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-600">30%</div>
                  <div className="text-sm text-gray-600 mt-1">{t.hero.stats.savings}</div>
                </div>
              </div>
            </div>
            <div className="relative lg:h-[600px] animate-slide-in">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-3xl transform rotate-3 opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=1000&fit=crop"
                alt="Modern home with efficient windows"
                className="relative rounded-3xl shadow-2xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <button
          onClick={() => scrollToSection('services')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-teal-600" />
        </button>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.services.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Thermometer className="w-12 h-12" />}
              title={t.services.thermalGlass.title}
              description={t.services.thermalGlass.description}
              features={t.services.thermalGlass.features}
            />
            <ServiceCard
              icon={<Shield className="w-12 h-12" />}
              title={t.services.windowFrames.title}
              description={t.services.windowFrames.description}
              features={t.services.windowFrames.features}
            />
            <ServiceCard
              icon={<Shield className="w-12 h-12" />}
              title={t.services.doorFrames.title}
              description={t.services.doorFrames.description}
              features={t.services.doorFrames.features}
            />
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.advantages.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.advantages.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <AdvantageItem
                icon={<Euro className="w-6 h-6" />}
                title={t.advantages.energy.title}
                description={t.advantages.energy.description}
              />
              <AdvantageItem
                icon={<Thermometer className="w-6 h-6" />}
                title={t.advantages.comfort.title}
                description={t.advantages.comfort.description}
              />
              <AdvantageItem
                icon={<Shield className="w-6 h-6" />}
                title={t.advantages.value.title}
                description={t.advantages.value.description}
              />
              <AdvantageItem
                icon={<Clock className="w-6 h-6" />}
                title={t.advantages.installation.title}
                description={t.advantages.installation.description}
              />
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop"
                alt="Energy efficient home interior"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Thermometer className="w-8 h-8 text-teal-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{t.advantages.uValue}</div>
                    <div className="text-sm text-gray-600">From 2.8 to 0.8 W/m²K</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.cases.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.cases.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CaseStudy
              image="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop"
              title={t.cases.victorian.title}
              location={t.cases.victorian.location}
              description={t.cases.victorian.description}
              results={t.cases.victorian.results}
              badge={t.cases.badge}
            />
            <CaseStudy
              image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop"
              title={t.cases.apartment.title}
              location={t.cases.apartment.location}
              description={t.cases.apartment.description}
              results={t.cases.apartment.results}
              badge={t.cases.badge}
            />
            <CaseStudy
              image="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop"
              title={t.cases.estate.title}
              location={t.cases.estate.location}
              description={t.cases.estate.description}
              results={t.cases.estate.results}
              badge={t.cases.badge}
            />
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.contact.title}</h2>
            <p className="text-xl text-gray-600">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="access_key" value="321a5c5d-60f4-474d-8566-2a55ff1c1233" />
              <input type="hidden" name="subject" value="New Thermal Efficiency Inquiry" />
              <input type="hidden" name="from_name" value="ThermalPro Website" />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.name} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder={t.contact.form.namePlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.email} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder={t.contact.form.emailPlaceholder}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder={t.contact.form.phonePlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="property" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.propertyType}
                  </label>
                  <select
                    id="property"
                    name="property_type"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  >
                    <option value="">{t.contact.form.propertyOptions.select}</option>
                    <option value="house">{t.contact.form.propertyOptions.house}</option>
                    <option value="apartment">{t.contact.form.propertyOptions.apartment}</option>
                    <option value="commercial">{t.contact.form.propertyOptions.commercial}</option>
                    <option value="other">{t.contact.form.propertyOptions.other}</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.form.serviceInterest}
                </label>
                <select
                  id="service"
                  name="service_interest"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                >
                  <option value="">{t.contact.form.serviceOptions.select}</option>
                  <option value="glass">{t.contact.form.serviceOptions.glass}</option>
                  <option value="window-frames">{t.contact.form.serviceOptions.windowFrames}</option>
                  <option value="door-frames">{t.contact.form.serviceOptions.doorFrames}</option>
                  <option value="full">{t.contact.form.serviceOptions.full}</option>
                  <option value="assessment">{t.contact.form.serviceOptions.assessment}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.form.message} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                  placeholder={t.contact.form.messagePlaceholder}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-all font-semibold flex items-center justify-center group text-lg"
              >
                {t.contact.form.submit}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <Phone className="w-6 h-6 text-teal-600 mb-2" />
                  <div className="text-sm font-medium text-gray-900">{t.contact.info.phone}</div>
                  <div className="text-sm text-gray-600">+1 (555) 123-4567</div>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-6 h-6 text-teal-600 mb-2" />
                  <div className="text-sm font-medium text-gray-900">{t.contact.info.email}</div>
                  <div className="text-sm text-gray-600">info@thermalpro.com</div>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-6 h-6 text-teal-600 mb-2" />
                  <div className="text-sm font-medium text-gray-900">{t.contact.info.location}</div>
                  <div className="text-sm text-gray-600">{t.contact.info.locationText}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Thermometer className="w-8 h-8 text-teal-400" />
                <span className="text-2xl font-bold">ThermalPro</span>
              </div>
              <p className="text-gray-400">
                {t.footer.description}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">{t.footer.quickLinks}</h3>
              <div className="space-y-2">
                {navItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">{t.footer.businessHours}</h3>
              <div className="space-y-2 text-gray-400">
                <p>{t.footer.schedule.weekdays}</p>
                <p>{t.footer.schedule.saturday}</p>
                <p>{t.footer.schedule.sunday}</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} ThermalPro. {t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group hover:-translate-y-1 transition-transform duration-300">
      <div className="text-teal-600 mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-700">
            <CheckCircle className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface AdvantageItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function AdvantageItem({ icon, title, description }: AdvantageItemProps) {
  return (
    <div className="flex space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex-shrink-0">
        <div className="bg-teal-100 p-3 rounded-lg text-teal-600">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

interface CaseStudyProps {
  image: string;
  title: string;
  location: string;
  description: string;
  results: string[];
  badge: string;
}

function CaseStudy({ image, title, location, description, results, badge }: CaseStudyProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
      <div className="relative overflow-hidden h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {badge}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          {location}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2">
          {results.map((result, index) => (
            <div key={index} className="flex items-center text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" />
              {result}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
