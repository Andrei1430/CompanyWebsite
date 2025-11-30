export interface Translation {
  nav: {
    home: string;
    services: string;
    advantages: string;
    cases: string;
    contact: string;
    getQuote: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: {
      projects: string;
      satisfaction: string;
      savings: string;
    };
  };
  services: {
    title: string;
    subtitle: string;
    thermalGlass: {
      title: string;
      description: string;
      features: string[];
    };
    windowFrames: {
      title: string;
      description: string;
      features: string[];
    };
    doorFrames: {
      title: string;
      description: string;
      features: string[];
    };
  };
  advantages: {
    title: string;
    subtitle: string;
    energy: {
      title: string;
      description: string;
    };
    comfort: {
      title: string;
      description: string;
    };
    value: {
      title: string;
      description: string;
    };
    installation: {
      title: string;
      description: string;
    };
    uValue: string;
  };
  cases: {
    title: string;
    subtitle: string;
    badge: string;
    victorian: {
      title: string;
      location: string;
      description: string;
      results: string[];
    };
    apartment: {
      title: string;
      location: string;
      description: string;
      results: string[];
    };
    estate: {
      title: string;
      location: string;
      description: string;
      results: string[];
    };
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      phone: string;
      propertyType: string;
      propertyOptions: {
        select: string;
        house: string;
        apartment: string;
        commercial: string;
        other: string;
      };
      serviceInterest: string;
      serviceOptions: {
        select: string;
        glass: string;
        windowFrames: string;
        doorFrames: string;
        full: string;
        assessment: string;
      };
      message: string;
      messagePlaceholder: string;
      submit: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      phonePlaceholder: string;
    };
    info: {
      phone: string;
      email: string;
      location: string;
      locationText: string;
    };
  };
  footer: {
    description: string;
    quickLinks: string;
    businessHours: string;
    schedule: {
      weekdays: string;
      saturday: string;
      sunday: string;
    };
    copyright: string;
  };
}

export const translations: Record<'en' | 'nl', Translation> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      advantages: 'Advantages',
      cases: 'Case Studies',
      contact: 'Contact',
      getQuote: 'Get Quote',
    },
    hero: {
      badge: 'Energy Efficiency Experts',
      title: "Transform Your Home's",
      titleHighlight: 'Thermal Efficiency',
      description: "Specializing in advanced window glass replacement and frame solutions that dramatically improve your home's thermal coefficient. Save energy, reduce costs, and enhance comfort.",
      ctaPrimary: 'Request Free Assessment',
      ctaSecondary: 'Explore Services',
      stats: {
        projects: 'Projects Completed',
        satisfaction: 'Client Satisfaction',
        savings: 'Avg. Energy Savings',
      },
    },
    services: {
      title: 'Our Services',
      subtitle: "Comprehensive thermal efficiency solutions tailored to your home's unique needs",
      thermalGlass: {
        title: 'Thermal Glass Replacement',
        description: 'Upgrade to high-performance double or triple-glazed windows with advanced thermal insulation properties. Significantly reduce heat loss and improve comfort.',
        features: ['Low-E coating', 'Argon gas filling', 'Warm edge spacers'],
      },
      windowFrames: {
        title: 'Window Frame Replacement',
        description: 'Modern uPVC, aluminum, or composite frames engineered for superior insulation and durability. Eliminate thermal bridges and air leaks.',
        features: ['Multi-chamber design', 'Weather sealing', '25-year warranty'],
      },
      doorFrames: {
        title: 'Door Frame Solutions',
        description: 'Energy-efficient door frames that maintain thermal integrity while enhancing security and aesthetics. Perfect for entry and patio doors.',
        features: ['Thermal break technology', 'Secure locking systems', 'Custom sizing'],
      },
    },
    advantages: {
      title: 'Why Choose Our Solutions',
      subtitle: 'Experience measurable benefits from day one',
      energy: {
        title: 'Lower Energy Bills',
        description: 'Reduce heating and cooling costs by up to 30% with improved thermal insulation. Most installations pay for themselves within 5-7 years.',
      },
      comfort: {
        title: 'Enhanced Comfort',
        description: 'Eliminate cold spots and drafts. Maintain consistent indoor temperatures year-round for a more comfortable living environment.',
      },
      value: {
        title: 'Increased Property Value',
        description: 'Energy-efficient upgrades boost home value and appeal to eco-conscious buyers. Improve your Energy Performance Certificate rating.',
      },
      installation: {
        title: 'Quick Installation',
        description: 'Professional installation completed in 1-3 days for most homes. Minimal disruption with thorough preparation and cleanup included.',
      },
      uValue: 'U-value',
    },
    cases: {
      title: 'Case Studies',
      subtitle: 'Real results from real homes',
      badge: 'Success Story',
      victorian: {
        title: 'Victorian Home Renovation',
        location: 'Central District',
        description: 'Complete window replacement with heritage-style triple-glazed units. Maintained period aesthetics while achieving modern thermal performance.',
        results: ['35% energy reduction', 'EPC rating: D to B', 'Completed in 4 days'],
      },
      apartment: {
        title: 'Modern Apartment Complex',
        location: 'Riverside Development',
        description: 'Full building upgrade with thermally broken aluminum frames and low-E glass. Improved resident comfort and reduced common area heating costs.',
        results: ['28% cost savings', '42 units completed', 'Zero complaints'],
      },
      estate: {
        title: 'Country Estate',
        location: 'Rural Highlands',
        description: 'Premium timber frames with advanced thermal breaks. Large glazed areas without compromising on insulation performance.',
        results: ['40% efficiency gain', 'Custom sizing', 'Award-winning design'],
      },
    },
    contact: {
      title: 'Get Your Free Assessment',
      subtitle: "Let's discuss how we can improve your home's thermal efficiency",
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        propertyType: 'Property Type',
        propertyOptions: {
          select: 'Select type',
          house: 'House',
          apartment: 'Apartment',
          commercial: 'Commercial',
          other: 'Other',
        },
        serviceInterest: 'Service Interest',
        serviceOptions: {
          select: 'Select service',
          glass: 'Window Glass Replacement',
          windowFrames: 'Window Frame Replacement',
          doorFrames: 'Door Frame Solutions',
          full: 'Complete System Upgrade',
          assessment: 'Just Need Assessment',
        },
        message: 'Message',
        messagePlaceholder: 'Tell us about your project and any specific requirements...',
        submit: 'Send Inquiry',
        namePlaceholder: 'John Smith',
        emailPlaceholder: 'john@example.com',
        phonePlaceholder: '+1 (555) 000-0000',
      },
      info: {
        phone: 'Phone',
        email: 'Email',
        location: 'Location',
        locationText: 'Serving Nationwide',
      },
    },
    footer: {
      description: 'Leading experts in thermal efficiency solutions for residential and commercial properties.',
      quickLinks: 'Quick Links',
      businessHours: 'Business Hours',
      schedule: {
        weekdays: 'Monday - Friday: 8:00 AM - 6:00 PM',
        saturday: 'Saturday: 9:00 AM - 4:00 PM',
        sunday: 'Sunday: Closed',
      },
      copyright: 'All rights reserved. Improving homes, one window at a time.',
    },
  },
  nl: {
    nav: {
      home: 'Home',
      services: 'Diensten',
      advantages: 'Voordelen',
      cases: 'Casestudies',
      contact: 'Contact',
      getQuote: 'Offerte Aanvragen',
    },
    hero: {
      badge: 'Energie-efficiëntie Experts',
      title: 'Transformeer de',
      titleHighlight: 'Thermische Efficiëntie van Uw Woning',
      description: 'Gespecialiseerd in geavanceerde glasvervanging en kozijnoplossingen die de thermische coëfficiënt van uw woning drastisch verbeteren. Bespaar energie, verlaag kosten en verhoog het comfort.',
      ctaPrimary: 'Gratis Beoordeling Aanvragen',
      ctaSecondary: 'Ontdek Diensten',
      stats: {
        projects: 'Voltooide Projecten',
        satisfaction: 'Klanttevredenheid',
        savings: 'Gem. Energiebesparing',
      },
    },
    services: {
      title: 'Onze Diensten',
      subtitle: 'Uitgebreide thermische efficiëntieoplossingen op maat van uw woning',
      thermalGlass: {
        title: 'Thermisch Glas Vervanging',
        description: 'Upgrade naar hoogwaardige dubbel- of driedubbele beglazing met geavanceerde thermische isolatie-eigenschappen. Verminder warmteverlies aanzienlijk en verbeter het comfort.',
        features: ['Low-E coating', 'Argongas vulling', 'Warme rand spacers'],
      },
      windowFrames: {
        title: 'Kozijnvervanging',
        description: 'Moderne uPVC, aluminium of composiet kozijnen ontworpen voor superieure isolatie en duurzaamheid. Elimineer koudebruggen en luchtlekken.',
        features: ['Multi-kamer ontwerp', 'Weersafdichting', '25 jaar garantie'],
      },
      doorFrames: {
        title: 'Deurkozijn Oplossingen',
        description: 'Energie-efficiënte deurkozijnen die thermische integriteit behouden terwijl ze veiligheid en esthetiek verbeteren. Perfect voor toegangs- en terrasdeuren.',
        features: ['Thermische onderbreking technologie', 'Veilige slotsystemen', 'Op maat gemaakt'],
      },
    },
    advantages: {
      title: 'Waarom Kiezen Voor Onze Oplossingen',
      subtitle: 'Ervaar meetbare voordelen vanaf dag één',
      energy: {
        title: 'Lagere Energierekeningen',
        description: 'Verlaag verwarmings- en koelkosten met tot 30% door verbeterde thermische isolatie. De meeste installaties verdienen zichzelf terug binnen 5-7 jaar.',
      },
      comfort: {
        title: 'Verbeterd Comfort',
        description: 'Elimineer koude plekken en tocht. Handhaaf het hele jaar door consistente binnentemperaturen voor een comfortabelere leefomgeving.',
      },
      value: {
        title: 'Verhoogde Woningwaarde',
        description: 'Energie-efficiënte upgrades verhogen de woningwaarde en spreken milieubewuste kopers aan. Verbeter uw Energieprestatiecertificaat rating.',
      },
      installation: {
        title: 'Snelle Installatie',
        description: 'Professionele installatie voltooid in 1-3 dagen voor de meeste woningen. Minimale verstoring met grondige voorbereiding en schoonmaak inbegrepen.',
      },
      uValue: 'U-waarde',
    },
    cases: {
      title: 'Casestudies',
      subtitle: 'Echte resultaten van echte woningen',
      badge: 'Succesverhaal',
      victorian: {
        title: 'Victoriaanse Woning Renovatie',
        location: 'Centraal District',
        description: 'Volledige kozijnvervanging met erfgoed-stijl driedubbele beglazing. Behoud van periode-esthetiek terwijl moderne thermische prestaties werden bereikt.',
        results: ['35% energiereductie', 'EPC-rating: D naar B', 'Voltooid in 4 dagen'],
      },
      apartment: {
        title: 'Modern Appartementencomplex',
        location: 'Rivierontwikkeling',
        description: 'Volledige gebouw upgrade met thermisch onderbroken aluminium kozijnen en low-E glas. Verbeterd bewonerscomfort en verlaagde verwarmingskosten gemeenschappelijke ruimtes.',
        results: ['28% kostenbesparing', '42 eenheden voltooid', 'Geen klachten'],
      },
      estate: {
        title: 'Landhuis',
        location: 'Landelijke Hoogvlakte',
        description: 'Premium houten kozijnen met geavanceerde thermische onderbrekingen. Grote glazen oppervlakken zonder in te leveren op isolatieprestaties.',
        results: ['40% efficiëntiewinst', 'Op maat gemaakt', 'Bekroond ontwerp'],
      },
    },
    contact: {
      title: 'Ontvang Uw Gratis Beoordeling',
      subtitle: 'Laten we bespreken hoe we de thermische efficiëntie van uw woning kunnen verbeteren',
      form: {
        name: 'Volledige Naam',
        email: 'E-mailadres',
        phone: 'Telefoonnummer',
        propertyType: 'Type Woning',
        propertyOptions: {
          select: 'Selecteer type',
          house: 'Huis',
          apartment: 'Appartement',
          commercial: 'Commercieel',
          other: 'Overig',
        },
        serviceInterest: 'Interesse in Dienst',
        serviceOptions: {
          select: 'Selecteer dienst',
          glass: 'Raamglas Vervanging',
          windowFrames: 'Kozijn Vervanging',
          doorFrames: 'Deurkozijn Oplossingen',
          full: 'Volledige Systeem Upgrade',
          assessment: 'Alleen Beoordeling Nodig',
        },
        message: 'Bericht',
        messagePlaceholder: 'Vertel ons over uw project en eventuele specifieke eisen...',
        submit: 'Aanvraag Versturen',
        namePlaceholder: 'Jan Jansen',
        emailPlaceholder: 'jan@voorbeeld.nl',
        phonePlaceholder: '+31 6 12345678',
      },
      info: {
        phone: 'Telefoon',
        email: 'E-mail',
        location: 'Locatie',
        locationText: 'Landelijk Actief',
      },
    },
    footer: {
      description: 'Toonaangevende experts in thermische efficiëntieoplossingen voor residentiële en commerciële eigendommen.',
      quickLinks: 'Snelle Links',
      businessHours: 'Openingstijden',
      schedule: {
        weekdays: 'Maandag - Vrijdag: 8:00 - 18:00',
        saturday: 'Zaterdag: 9:00 - 16:00',
        sunday: 'Zondag: Gesloten',
      },
      copyright: 'Alle rechten voorbehouden. Het verbeteren van woningen, één raam tegelijk.',
    },
  },
};
