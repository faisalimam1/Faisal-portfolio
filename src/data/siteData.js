export const HERO = {
  name: 'FAISAL IMAM',
  tagline: 'Computer Science Engineer • Aspiring AI Engineer',
  photo: '/assets/faisal_dp.jpg',
  long: `I am Faisal Imam, a Computer Science Engineer focused on AI, Machine Learning, and applied Deep Learning. I enjoy building intelligent systems and full stack applications that solve real problems. I have led projects from concept to deployment. My notable roles include as architect of my project "AI Powered Mental Health Prediction and Personalised Assistance Sysytem" which was showcased at IBM Global CSR Summit South Asia 2025 and won Best Project Award at Intuite 2026. I have led teams as a Finance Head for Cambrian Open House 2025 and Co-organizer for TEDx 2026. Outside of work I play badminton and train at the gym. I am detail oriented, a clear communicator and driven by building solutions powered by intelligent technology.`,
  location: 'Bangalore, India',
  phone: '+91 9608953402',
  email: 'imamfaisal36@gmail.com',
  linkedin: 'https://www.linkedin.com/in/faisalimam19',
  github: 'https://github.com/faisalimam1',
  skills: {
  'Languages': ['C++', 'Python', 'Java(Basics)', 'SQL', 'HTML', 'CSS', 'JS'],
  'AI / ML & DL': ['PyTorch', 'scikit-learn', 'NLTK', 'NumPy', 'pandas', 'Matplotlib', 'OpenCV', 'Whisper', 'HuggingFace'],
  'GenAI & Agents': ['OpenAI API', 'Anthropic API', 'CrewAI', 'Prompt Engineering', 'RAG', 'Multi-Agent Systems'],
  'Frameworks & Libraries': ['Flask', 'React', 'Tailwind CSS'],
  'Databases & Tools': ['PostgreSQL', 'Redis', 'Docker(Basics)', 'Git', 'GitHub', 'Jupyter', 'Kaggle', 'VS Code', 'GCP (basics)'],
  'Concepts': ['Full Stack Development', 'Model Fine-tuning', 'System Programming', 'DevOps basics (CI/CD)'],
  'Soft Skills': ['Communication', 'Leadership', 'Time Management', 'Negotiation']
}
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
    tech: ['Python', 'Flask', 'Caffe Model', 'CNN', 'OpenCV'],
    repo: 'https://github.com/faisalimam1/Projects/tree/main/Image%20Colorisation',
    screenshots: [
      '/assets/imagecolor1.jpg',
      '/assets/imagecolor2.jpg'
    ]
  }
]

export const RESUME = { url: '/Faisal_resume.pdf' }
