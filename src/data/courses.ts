export type CourseDomain = 'Computer Science' | 'Mechanical & Civil' | 'Electrical & Electronics' | 'Biotechnology' | 'Management'

export interface Course {
  title: string
  slug: string
  description: string
  domain: CourseDomain
  thumbnail?: string
}

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')

export const courses: Course[] = [
  { title: 'AI Automation', description: 'Build intelligent agents and automate workflows.', domain: 'Computer Science', slug: slugify('AI Automation') },
  { title: 'Web Development', description: 'Full Stack MERN (MongoDB, Express, React, Node).', domain: 'Computer Science', slug: slugify('Web Development') },
  { title: 'Python with ML', description: 'From zero to Neural Networks.', domain: 'Computer Science', slug: slugify('Python with ML') },
  { title: 'Python with Data Science', description: 'Pandas, NumPy, and Visualization mastery.', domain: 'Computer Science', slug: slugify('Python with Data Science') },
  { title: 'Cyber Security', description: 'Ethical Hacking and Network Defense.', domain: 'Computer Science', slug: slugify('Cyber Security') },
  { title: 'Artificial Intelligence', description: 'Deep Learning and GenAI fundamentals.', domain: 'Computer Science', slug: slugify('Artificial Intelligence') },
  { title: 'Car Design', description: 'Automotive sketching and aerodynamics.', domain: 'Mechanical & Civil', slug: slugify('Car Design') },
  { title: 'AutoCAD', description: '2D/3D modeling for industrial engineering.', domain: 'Mechanical & Civil', slug: slugify('AutoCAD') },
  { title: 'Embedded Systems', description: 'Programming microcontrollers (Arduino/STM32).', domain: 'Electrical & Electronics', slug: slugify('Embedded Systems') },
  { title: 'Internet of Things (IoT)', description: 'Connected devices and cloud integration.', domain: 'Electrical & Electronics', slug: slugify('Internet of Things (IoT)') },
  { title: 'VLSI', description: 'Chip design and verification.', domain: 'Electrical & Electronics', slug: slugify('VLSI') },
  { title: 'Hybrid Electric Vehicles', description: 'Battery tech and powertrain systems.', domain: 'Electrical & Electronics', slug: slugify('Hybrid Electric Vehicles') },
  { title: 'Robotics', description: 'Kinematics and ROS (Robot Operating System).', domain: 'Electrical & Electronics', slug: slugify('Robotics') },
  { title: 'Nano Technology', description: 'Materials science at the molecular scale.', domain: 'Biotechnology', slug: slugify('Nano Technology') },
  { title: 'Genetic Engineering', description: 'CRISPR and gene editing basics.', domain: 'Biotechnology', slug: slugify('Genetic Engineering') },
  { title: 'Molecular Biology', description: 'DNA/RNA sequencing techniques.', domain: 'Biotechnology', slug: slugify('Molecular Biology') },
  { title: 'Microbiology', description: 'Lab techniques and pathogen analysis.', domain: 'Biotechnology', slug: slugify('Microbiology') },
  { title: 'Bioinformatics', description: 'Computational biology and data analysis.', domain: 'Biotechnology', slug: slugify('Bioinformatics') },
  { title: 'Finance', description: 'Investment banking and valuation basics.', domain: 'Management', slug: slugify('Finance') },
  { title: 'Digital Marketing', description: 'SEO, SEM, and Performance Ads.', domain: 'Management', slug: slugify('Digital Marketing') },
  { title: 'Human Resource', description: 'Talent acquisition and culture building.', domain: 'Management', slug: slugify('Human Resource') },
  { title: 'Marketing Management', description: 'Brand strategy and consumer psychology.', domain: 'Management', slug: slugify('Marketing Management') },
  { title: 'Social Media Marketing', description: 'Viral content and community growth.', domain: 'Management', slug: slugify('Social Media Marketing') },
]

export const domains: CourseDomain[] = [
  'Computer Science',
  'Mechanical & Civil',
  'Electrical & Electronics',
  'Biotechnology',
  'Management',
]
