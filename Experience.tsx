import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const experienceData: ExperienceItem[] = [
    {
      id: 1,
      title: 'Mini Project',
      company: 'MLR Institue of Technology',
      period: 'Apr 2025 - Jun 2025',
      description: [
        'Lead a team of 4 members in building and maintaining House price prediction web applications',
        'Architected and implemented the project with an R-squared score of 0.9476 with Random Forest on a Kaggle dataset',
        'Developed and maintained  using Flask and Joblib',
      ],
      skills: ['Python', 'Pandas', 'Numpy', 'Scikit-Learn', 'Matplotlib', 'Flask', 'Joblib']
    },
    {
      id: 2,
      title: 'Micro Porject',
      company: 'MLR Institue of Technology',
      period: 'jan 2024 - Mar 2024',
      description: [
        'Designed and implemented an Arduino-based traffic management system utilizing ultrasonic sensors for real-time traffic density detection.',
        'Programmed microcontrollers to process sensor data and control traffic light sequencing, enhancing efficiency and reducing waiting times.',
        'Integrated multiple sensor inputs and programmed decision-making algorithms to create a responsive and adaptive traffic control solution.',
      ],
      skills: ['Arduino IDE', 'Arduino microcontroller', 'Ultrasonice sensors', 'LEDs']
    },

  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8 rounded transition-all duration-1000 delay-200" style={{ transform: isInView ? 'scaleX(1)' : 'scaleX(0)' }}></div>
          <p className={`text-lg text-gray-600 dark:text-gray-400 transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Though I haven't yet embarked on my first professional role, I've cultivated a robust skill set in C, C++, Python programming, Java, HTML, CSS, JavaScript, Mongodb, Reactjs, Flutter and concepts like DSA, OOPS and Machine Learning  through intensive coursework, independent study, and hands-on projects.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-blue-200 dark:bg-blue-800 transform md:translate-x-[-0.5px]"></div>

          {experienceData.map((item, index) => (
            <div
              key={item.id}
              className={`relative flex flex-col md:flex-row mb-12 md:mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-[-8px] md:left-1/2 top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-white dark:border-gray-800 transform md:translate-x-[-8px]"></div>

              {/* Content positioning */}
              <div className={`flex md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto md:pl-16'}`}>
                <div
                  className={`ml-8 md:ml-0 pl-8 md:pl-0 border-l border-blue-200 dark:border-blue-800 md:border-l-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : ''
                    }`}
                >
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-600">
                    <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">{item.title}</h3>
                    <div className="flex items-center gap-1 mb-2 text-blue-600 dark:text-blue-400">
                      <Briefcase size={16} />
                      <span className="text-sm font-medium">{item.company}</span>
                    </div>
                    <div className="flex items-center gap-1 mb-4 text-gray-500 dark:text-gray-400">
                      <Calendar size={16} />
                      <span className="text-sm">{item.period}</span>
                    </div>
                    <ul className="mb-4 text-gray-600 dark:text-gray-300 space-y-2">
                      {item.description.map((desc, i) => (
                        <li key={i} className="relative pl-5 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-600 dark:before:bg-blue-400 before:rounded-full">
                          {desc}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, i) => (
                        <span key={i} className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-16 text-center">
          <a
            href="https://drive.google.com/file/d/1z5Ue4yg-9doEZKsqg6WPnQF163NJ5aFf/view?usp=sharing"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            <span>Resume</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;