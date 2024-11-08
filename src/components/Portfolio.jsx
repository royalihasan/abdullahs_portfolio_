
import React from 'react';
import { 
  Search, 
  Code, 
  Briefcase, 
  Mail,
  Phone,
  Share2,
  Star,
  Users,
  Book,
  Heart,
  Globe,
  Twitter,
  Github,
  Linkedin,
  Award,
  Target,
  Clock
} from 'lucide-react';

const Portfolio = () => {
  const education = [
    {
      degree: "Bachelors in Science Computer Science",
      school: "University of Education vehari campus",
      year: "2021-2025",
      details: "CGPA: 3.1/4"
    },
    {
      degree: "Intermediate/A-Level",
      school: "Aspire Group Of College Vehari Camp",
      year: "2018-2020",
      details: ""
    }
  ];

  const skills = [
    { name: "Search Engine Optimization Specialist", level: 95 },
    { name: "Blogging", level: 85 },
    { name: "Niche Research", level: 90 },
    { name: "Keyword Research", level: 92 },
    { name: "Market Analysis", level: 88 },
    { name: "Competitive Research", level: 87 },
    { name: "Trend Analysis", level: 84 },
    { name: "Link Building", level: 89 },
    { name: "Guest Posting", level: 82 },
    { name: "Tool Proficiency", level: 90 },
    { name: "Understanding of Search Intent", level: 91 },
    { name: "Competitor Analysis", level: 93 },
    { name: "WordPress Setup", level: 86 },
    { name: "Content Writing", level: 88 },
    { name: "On-Page SEO", level: 94 },
    { name: "Off-Page SEO", level: 85 },
    { name: "Technical SEO", level: 92 },
    { name: "Audits", level: 89 },
    { name: "Algorithm Updates Monitoring", level: 90 }
  ];
  

  const projects = [
    {
      title: "E-commerce SEO Overhaul",
      description: "Increased organic traffic by 200% in 6 months for a major retail client",
      metrics: ["200% Traffic Increase", "150% Revenue Growth", "Top 3 Rankings"],
      tags: ["E-commerce", "Technical SEO", "Content Strategy"]
    },
    {
      title: "Local Business SEO Campaign",
      description: "Achieved top 3 rankings for 50+ local keywords across 5 locations",
      metrics: ["50+ Keywords Ranked", "300% Local Traffic", "85% Conversion Rate"],
      tags: ["Local SEO", "Google My Business", "Content"]
    },
    {
      title: "SaaS Platform Optimization",
      description: "Complete technical SEO implementation for a growing SaaS platform",
      metrics: ["400% Organic Growth", "90+ Domain Authority", "1M+ Monthly Visitors"],
      tags: ["Technical SEO", "B2B", "Content Strategy"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 bg-blue-900">
      {/* Hero Section with Profile */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Muhammad Abdullah Shah</h1>
              <h2 className="text-xl md:text-2xl mb-6 opacity-90">SEO Expert & Digital Strategist</h2>
              <div className="flex justify-center md:justify-start space-x-4 mb-6">
                <a href="#" className="hover:text-blue-200 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="hover:text-blue-200 transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="#" className="hover:text-blue-200 transition-colors">
                  <Github size={24} />
                </a>
                <a href="#" className="hover:text-blue-200 transition-colors">
                  <Globe size={24} />
                </a>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto">
                  <img 
                    src="https://github.com/royalihasan/abdullahs_portfolio_/blob/main/src/assets/prof.jpeg" 
                    alt="John Doe" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
            <p className="text-lg text-gray-600 mb-6">
            Motivated by my love for the digital world, I've led SEO efforts for projects like EnergizeCup.com and DogsAndCatsy.com with great results. For EnergizeCup, I increased the site's traffic by improving its search rankings. At DogsAndCatsy, my work not only made the site more engaging but also helped it get approved for AdSense, boosting its earnings. I focus on turning a website's potential into real success.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="p-4 bg-gray-50 rounded-lg">
                <Target className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <h3 className="font-semibold">15+</h3>
                <p className="text-sm text-gray-600">Projects Completed</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <Award className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <h3 className="font-semibold">95%</h3>
                <p className="text-sm text-gray-600">Success Rate</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <h3 className="font-semibold">13+</h3>
                <p className="text-sm text-gray-600">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-blue-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 rounded-full h-2"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Education</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <Book className="w-6 h-6 text-blue-500 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                    <p className="text-gray-600 mb-2">{edu.school}</p>
                    <p className="text-gray-500 text-sm mb-2 flex items-center">
                      <Clock className="w-4 h-4 mr-1" /> {edu.year}
                    </p>
                    <p className="text-gray-600">{edu.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="space-y-2 mb-4">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <Target className="w-4 h-4 mr-2 text-blue-500" />
                        {metric}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Let's Connect</h2>
          <div className="max-w-xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-blue-500" />
                  <a href="mailto:john@example.com" className="text-gray-600 hover:text-blue-500">
                    john@example.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-blue-500" />
                  <a href="tel:+1234567890" className="text-gray-600 hover:text-blue-500">
                    +1 (234) 567-890
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="text-blue-500" />
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    www.johndoe-seo.com
                  </a>
                </div>
                <div className="pt-4 flex justify-center space-x-6">
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                    <Linkedin size={24} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                    <Twitter size={24} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;