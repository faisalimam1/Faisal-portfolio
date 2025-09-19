export const HERO = {
  name: 'FAISAL IMAM',
  tagline: 'Computer Science Engineer • Full Stack Developer',
  photo: '/assets/faisal_dp.jpg',
  long: `I am Faisal Imam, a Computer Science Engineer who focuses on system programming, full stack development and applied AI. I enjoy designing backends that scale and frontends that are intuitive. I have led teams and projects from concept to deployment. My notable roles include Finance Head for Cambrian Open House 2025 and Co-organizer for TEDx 2025. Outside of work I play badminton and train at the gym. I am detail oriented, a clear communicator and driven by solving real world problems.`,
  location: 'Bangalore, India',
  phone: '+91 9608953402',
  email: 'imamfaisal36@gmail.com',
  linkedin: 'https://www.linkedin.com/in/faisalimam19',
  github: 'https://github.com/faisalimam1',
  skills: {
    'Languages': ['C', 'C++', 'Python', 'Java', 'SQL', 'HTML', 'CSS', 'JavaScript'],
    'Frameworks & Libraries': ['Flask', 'React', 'Node.js (basic)', 'Tailwind CSS'],
    'Databases & Tools': [
      'PostgreSQL',
      'Redis',
      'Docker (familiar)',
      'Git',
      'GitHub',
      'VS Code',
      'Excel',
      'Google Sheets',
      'NLTK',
      'pandas',
      'scikit-learn'
    ],
    'Concepts': [
      'Full Stack Development',
      'System Programming',
      'DevOps basics (CI/CD)',
      'Performance and Optimization'
    ],
    'Soft Skills': ['Communication', 'Leadership', 'Time Management', 'Negotiation']
  },
  education: [
    {
      degree: 'B.E. Computer Science and Engineering',
      institution: 'Cambridge Institute Of Technology (VTU)',
      cgpa: '8.8'
    },
    { degree: 'Elementary Education', institution: 'DAV Public School' }
  ],
  certifications: [
    {
      title: 'Problem Solving Through Programming in C',
      issuer: 'NPTEL IIT Kharagpur',
      link: 'https://drive.google.com/file/d/1fuaW-JgiY8XKXcmGnarOgoYZg04RHd-o/view?usp=sharing'
    },
    {
      title: 'Introduction to Algorithms and Analysis',
      issuer: 'NPTEL IIT Kharagpur',
      link: 'https://drive.google.com/file/d/1uk0ohv1R1Ume-WndD6ZdSIjAcjDULx27/view?usp=sharing'
    },
    {
      title: 'The Joy of Computing using Python',
      issuer: 'NPTEL IIT Madras',
      link: 'https://drive.google.com/file/d/1ursFQIeAnDyBZxfg9IqFAZJ-_1ZkO19O/view?usp=sharing'
    }
  ]
}

export const PROJECTS = [
  {
    title: 'MindTrackAI — AI Powered Mental Health Prediction & Assistance',
    summary:
      'Predicts mental health state and offers personalized coping strategies and referrals.',
    tech: ['Python', 'Flask', 'NLTK', 'scikit-learn', 'PostgreSQL', 'Redis'],
    repo: 'https://github.com/faisalimam1/MindTrackAI',
    screenshots: [
      '/assets/Screenshot_2025-09-19_111054.png',
      '/assets/Screenshot_2025-09-19_111116.png',
      '/assets/Screenshot_2025-09-19_111130.png'
    ]
  },
  {
    title: 'Image Colorisation',
    summary: 'Converts grayscale images to color using a Caffe-based model.',
    tech: ['Python', 'Flask', 'Caffe'],
    repo: 'https://github.com/faisalimam1/Projects/tree/main/Image%20Colorisation',
    screenshots: [
      '/assets/imagecolor1.jpeg',
      '/assets/imagecolor2.jpeg'
    ]
  }
]

export const RESUME = { url: '/Faisal_resume.pdf' }
