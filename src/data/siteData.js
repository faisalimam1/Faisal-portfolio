export const HERO = {
  name: 'FAISAL IMAM',
  tagline: 'AI/ML Engineer • Building & shipping RAG systems, fine-tuned NLP & multimodal AI',
  photo: '/assets/faisal_dp.jpg',
  long: `I am Faisal Imam, an AI/ML engineer and final-year Computer Science student who builds and ships intelligent systems end to end — from model to API to deployed app. My work spans RAG systems, fine-tuned transformers, computer vision, and multimodal AI, and most of it is live and public.

I am the lead architect of MindTrack AI, a multimodal (text/voice/video) mental-health platform that won 1st Prize at INTUITE 2026, was showcased at the IBM Global CSR Summit South Asia 2025, and has a research paper accepted for IEEE Xplore. I have also led teams as Finance Head for Cambrian Open House 2025 and Co-organizer for TEDx 2026.

Outside of work I play badminton and train at the gym. I am detail oriented, a clear communicator, and driven by building real solutions powered by intelligent technology.`,
  location: 'Bangalore, India',
  phone: '+91 9608953402',
  email: 'imamfaisal36@gmail.com',
  linkedin: 'https://www.linkedin.com/in/faisalimam19',
  github: 'https://github.com/faisalimam1',
  huggingface: 'https://huggingface.co/faisalimam19',
  kaggle: 'https://www.kaggle.com/faisalimam19',
  skills: {
  'Languages': ['Python', 'C++', 'SQL', 'HTML', 'CSS', 'JS (Basics)'],
  'AI / ML & DL': ['PyTorch', 'scikit-learn', 'Transformers', 'BERT', 'ResNet', 'NLTK', 'NumPy', 'pandas', 'Matplotlib', 'OpenCV', 'Whisper', 'Librosa', 'DeepFace', 'MediaPipe', 'HuggingFace'],
  'GenAI & Agents': ['OpenAI API', 'Anthropic API', 'LangChain', 'LCEL', 'RAG', 'ChromaDB', 'Groq', 'CrewAI', 'Prompt Engineering', 'Multi-Agent Systems'],
  'Frameworks & Libraries': ['Flask', 'FastAPI', 'Streamlit', 'Gradio', 'React', 'Tailwind CSS'],
  'Databases & Tools': ['Docker', 'Render', 'Vercel', 'Git', 'GitHub', 'Jupyter', 'Kaggle', 'VS Code', 'GCP (basics)'],
  'Concepts': ['Full Stack Development', 'Model Fine-tuning', 'System Programming', 'DevOps basics (CI/CD)'],
  'Soft Skills': ['Communication', 'Leadership', 'Time Management', 'Negotiation']
},
  education: [
    {
      degree: 'B.E. Computer Science and Engineering',
      institution: 'Cambridge Institute Of Technology (VTU)',
      cgpa: '8.9'
    },
    { degree: 'Elementary Education', institution: 'DAV Public School' }
  ],
  certifications: [
    {
      title: 'Machine Learning Foundation Certification',
      issuer: 'Infosys Springboard',
      link: 'https://drive.google.com/file/d/1MlDK64Anax74fo6Dqfotqpacb1mIL2hK/view'
    },
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
    title: 'Indian Legal RAG Chatbot',
    summary:
      'RAG chatbot over the Bharatiya Nyaya Sanhita (BNS) 2023 — grounded answers with exact section and page citations.',
    tech: ['LangChain LCEL', 'ChromaDB', 'BM25 Hybrid (RRF)', 'Groq Llama 3.3 70B', 'Gradio'],
    repo: 'https://github.com/faisalimam1/indian-legal-rag-chatbot',
    demo: 'https://huggingface.co/spaces/faisalimam19/indian-legal-rag-chatbot',
    screenshots: []
  },
  {
    title: 'Indian Legal RAG API',
    summary:
      'Production REST API serving the legal RAG pipeline — typed, documented, containerised and deployed.',
    tech: ['FastAPI', 'Pydantic v2', 'Docker', 'Render'],
    repo: 'https://github.com/faisalimam1/indian-legal-rag-api',
    demo: 'https://indian-legal-rag-api-xe44.onrender.com/docs',
    screenshots: []
  },
  {
    title: 'MindTrack AI — Multimodal Mental-Health Platform',
    summary:
      'Reads text, voice and video to assess well-being via a 7-tier detection pipeline. 1st Prize @ INTUITE 2026 · showcased at IBM Global CSR Summit South Asia 2025 · paper accepted for IEEE Xplore.',
    tech: ['BERT', 'Whisper', 'Librosa', 'OpenCV', 'DeepFace', 'MediaPipe', 'Flask', 'Docker'],
    repo: 'https://github.com/faisalimam1/MindTrackAI',
    screenshots: []
  },
  {
    title: 'NLP Multi-Tool App',
    summary:
      'Four NLP tasks in one app — sentiment, summarization, keywords and zero-shot — powered by a BERT model I fine-tuned myself (F1 0.921).',
    tech: ['Fine-tuned BERT', 'HuggingFace', 'Streamlit', 'KeyBERT'],
    repo: 'https://github.com/faisalimam1/nlp-multitool-app',
    demo: 'https://nlp-multitool-app.streamlit.app',
    screenshots: []
  },
  {
    title: 'Plant Disease Classifier',
    summary:
      'Diagnoses 38 plant diseases from a single leaf photo and returns treatment advice. 99% test accuracy.',
    tech: ['PyTorch', 'ResNet-18', 'Transfer Learning', 'Gradio'],
    repo: 'https://github.com/faisalimam1/plant-disease-classifier',
    demo: 'https://huggingface.co/spaces/faisalimam19/plant-disease-classifier',
    screenshots: []
  },
  {
    title: '30-Day AI Engineer Roadmap',
    summary:
      'My full AI engineering journey — 4 phases, 30 days, daily logs and real measured results, from deep-learning foundations to deployed RAG.',
    tech: ['PyTorch', 'Transformers', 'RAG', 'Docker'],
    repo: 'https://github.com/faisalimam1/DL-Learning-Roadmap',
    screenshots: []
  },
  {
    title: 'SMS Spam Classifier',
    summary:
      'Classifies SMS messages as spam or legitimate. F1 0.934 on a held-out test set.',
    tech: ['scikit-learn', 'Naive Bayes', 'TF-IDF', 'Gradio'],
    repo: 'https://github.com/faisalimam1/kaggle-ml-roadmap/tree/main/03_sms_spam',
    demo: 'https://huggingface.co/spaces/faisalimam19/sms-spam-classifier',
    screenshots: []
  }
]

export const RESUME = { url: '/Faisal_resume.pdf' }
