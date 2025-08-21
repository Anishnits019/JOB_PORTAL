import logo from "./logo.svg";
import search_icon from "./search_icon.svg";
import company_icon from "./company_icon.svg";
import microsoft_logo from "./microsoft_logo.svg";
import walmart_logo from "./walmart_logo.svg";
import accenture_logo from "./accenture_logo.png";
import profile_img from "./profile_img.png";
import app_main_img from "./app_main_img.png";
import cross_icon from './cross_icon.svg';
import location_icon from './location_icon.svg';
import money_icon from './money_icon.svg';
import suitcase_icon from './suitcase_icon.svg';
import person_icon from './person_icon.svg';
import upload_area from './upload_area.svg';
import resume_selected from './resume_selected.svg';
import resume_not_selected from './resume_not_selected.svg';
import play_store from './play_store.svg';
import app_store from './app_store.svg';
import back_arrow_icon from './back_arrow_icon.svg';
import left_arrow_icon from './left_arrow_icon.svg';
import right_arrow_icon from './right_arrow_icon.svg';
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import home_icon from './home_icon.svg'
import add_icon from './add_icon.svg'
import profile_upload_icon from './profile_upload_icon.svg'
import person_tick_icon from './person_tick_icon.svg'
import resume_download_icon from './resume_download_icon.svg'
import delete_icon from './delete_icon.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import samsung_logo from './samsung_logo.png'
import adobe_logo from './adobe_logo.png'
import amazon_logo from './amazon_logo.png'

export const assets = {
    logo,
    search_icon,
    cross_icon,
    upload_area,
    company_icon,
    resume_not_selected,
    resume_selected,
    microsoft_logo,
    walmart_logo,
    accenture_logo,
    app_main_img,
    play_store,
    app_store,
    back_arrow_icon,
    left_arrow_icon,
    right_arrow_icon,
    location_icon,
    money_icon,
    suitcase_icon,
    person_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    home_icon,
    add_icon,
    person_tick_icon,
    resume_download_icon,
    profile_img,
    delete_icon,
    profile_upload_icon,
    email_icon,
    lock_icon,
    samsung_logo,
    adobe_logo,
    amazon_logo
}

export const JobCategories = [
    "Programming",
    "Data Science",
    "Designing",
    "Networking",
    "Management",
    "Marketing",
    "Cybersecurity",
]

export const Locations = [
    "Bangalore",
    "Washington",
    "Hyderabad",
    "Mumbai",
    "California",
    "Chennai",
    "New York"
]

// Job Titles Array (20 tech roles)
export const jobTitles = [
  "Full Stack Developer",
  "Backend Engineer (Java/Spring)",
  "Frontend Developer (React)",
  "Data Scientist (NLP)",
  "Machine Learning Engineer",
  "Cloud Solutions Architect",
  "DevOps Engineer (Kubernetes)",
  "Cybersecurity Analyst",
  "AI Research Scientist",
  "Blockchain Developer",
  "Big Data Engineer",
  "Mobile Developer (Flutter)",
  "QA Automation Engineer",
  "Site Reliability Engineer",
  "UX/UI Designer (Figma)",
  "Technical Product Manager",
  "Embedded Systems Engineer",
  "AR/VR Developer",
  "IoT Solutions Architect",
  "Quantum Computing Researcher"
];

// Locations Array (Matching cities)
export const locations = [
  "Bengaluru",
  "Delhi",
  "Chennai ",
  "Hyderabad",
  "Mumbai",
];
export const timings=[
     'Day Shift',
     'Morning Shift',
     'Rotational Shift',
     'Night Shift',
     'Evening Shift',
     'Weekend Availability',
     'Fixed Shift'
]
export const categories=[
     'Full Time',
     'Permanent',
     'Freelance',
     'Contract',
     'Temporary',
     'Volunteer'
]
// Companies Array (Mix of Indian & International)
export const companies = [
  "Infosys",                  // Indian
  "Booz Allen Hamilton",      // US :cite[2]
  "Zomato",                   // Indian
  "Telefónica Tech",          // Spanish
  "Wipro",                    // Indian
  "Microsoft (Azure Team)",   // US :cite[5]
  "Paytm",                    // Indian
  "BBVA Bank",                // Spanish
  "Flipkart",                 // Indian
  "Amazon Web Services",      // US
  "TCS",                      // Indian
  "Indra Sistemas",           // Spanish
  "Atlassian (Bengaluru)",    // Indian :cite[1]
  "Capital One",              // US
  "Jio Platforms",            // Indian
  "Santander Innoventures",   // Spanish
  "HCLTech",                  // Indian
  "Leidos",                   // US :cite[2]
  "OLA Electric",             // Indian
  "IE Business School"        // Spanish
];
export const benefits=[
   'Health insurance',
   'Provident Fund',
   'Cell phone reimbursement',
   'Paid sick time',
   'Work from home',
   'Paid time off',
   'Food Provided',
   'Life insurance'
]
export const incentives=[
   'Performance bonus',
   'Yearly bonus',
   'Commission pay' ,
   'Overtime pay',
   'Quarterly bonus',
   'Shift allowance',
   'Joining bonus',
]
export const JobLevels=[
    "Beginner level",
    "Intermediate level",
    "Senior level"
]

// Sample data for Manage Jobs Page
export const manageJobsData = [
    { _id: 1, title: "Full Stack Developer", date: 1729102298497, location: "Bangalore", applicants: 20 },
    { _id: 2, title: "Data Scientist", date: 1729102298497, location: "San Francisco", applicants: 15 },
    { _id: 3, title: "Marketing Manager", date: 1729102298497, location: "London", applicants: 2 },
    { _id: 4, title: "UI/UX Designer", date: 1729102298497, location: "Dubai", applicants: 25 }
];

// Sample data for Profile Page
export const jobsApplied = [
    {
        company: 'Amazon',
        title: 'Full Stack Developer',
        location: 'Bangalore',
        date: '22 Aug, 2024',
        status: 'Pending',
        logo: company_icon,
    },
    {
        company: 'Meta',
        title: 'Data Scientist',
        location: 'San Francisco',
        date: '22 Aug, 2024',
        status: 'Rejected',
        logo: company_icon,
    },
    {
        company: 'Google',
        title: 'Marketing Manager',
        location: 'London',
        date: '25 Sep, 2024',
        status: 'Accepted',
        logo: company_icon,
    },
    {
        company: 'Qualcomm',
        title: 'UI/UX Designer',
        location: 'Dubai',
        date: '15 Oct, 2024',
        status: 'Pending',
        logo: company_icon,
    },
    {
        company: 'Microsoft',
        title: 'Full Stack Developer',
        location: 'Hyderabad',
        date: '25 Sep, 2024',
        status: 'Accepted',
        logo: company_icon,
    },
];

export const viewApplicationsPageData = [
    { _id: 1, name: "Richard Sanford", jobTitle: "Full Stack Developer", location: "Bangalore", imgSrc: profile_img },
    { _id: 2, name: "Enrique Murphy", jobTitle: "Data Scientist", location: "San Francisco", imgSrc: profile_img },
    { _id: 3, name: "Alison Powell", jobTitle: "Marketing Manager", location: "London", imgSrc: profile_img },
    { _id: 4, name: "Richard Sanford", jobTitle: "UI/UX Designer", location: "Dubai", imgSrc: profile_img },
    { _id: 5, name: "Enrique Murphy", jobTitle: "Full Stack Developer", location: "Hyderabad", imgSrc: profile_img },
    { _id: 6, name: "Alison Powell", jobTitle: "Data Scientist", location: "New Delhi", imgSrc: profile_img },
    { _id: 7, name: "Richard Sanford", jobTitle: "Marketing Manager", location: "Chennai", imgSrc: profile_img },
];

export const jobsData = [

    // Previous 23 entries would be here...
    {
        _id: '24',
        title: "AI Research Scientist",
        location: "San Francisco",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Join our AI research team to develop cutting-edge machine learning models. You'll work on pushing the boundaries of AI capabilities while collaborating with product teams to implement practical solutions.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Research and develop novel machine learning algorithms</li>
            <li>Implement and optimize deep learning models</li>
            <li>Publish findings in top-tier conferences</li>
            <li>Collaborate with engineering teams for production deployment</li>
            <li>Stay current with latest AI research trends</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>PhD in Computer Science or related field</li>
            <li>Strong publication record in AI/ML</li>
            <li>Expertise in TensorFlow/PyTorch</li>
            <li>Experience with large-scale data processing</li>
            <li>Excellent mathematical foundation</li>
        </ol>`,
        salary: 145000,
        date: 1729681667114,
        category: "Data Science",
    },
    {
        _id: '25',
        title: "Blockchain Developer",
        location: "Remote",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Develop decentralized applications and smart contracts on blockchain platforms. You'll be at the forefront of implementing blockchain solutions for various business use cases.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ul>
            <li>Design and implement smart contracts</li>
            <li>Develop blockchain protocols</li>
            <li>Create decentralized applications (DApps)</li>
            <li>Optimize blockchain performance</li>
            <li>Ensure security of blockchain implementations</li>
        </ul>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Experience with Solidity or Rust</li>
            <li>Knowledge of Ethereum, Polkadot or similar</li>
            <li>Understanding of cryptographic principles</li>
            <li>Web3.js/ethers.js experience</li>
            <li>Smart contract security knowledge</li>
        </ol>`,
        salary: 115000,
        date: 1729681667114,
        category: "Programming",
    },
    {
        _id: '26',
        title: "AR/VR Developer",
        location: "Los Angeles",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Create immersive augmented and virtual reality experiences. You'll develop applications that blend digital and physical worlds for entertainment, education, and enterprise solutions.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Develop AR/VR applications</li>
            <li>Optimize 3D rendering performance</li>
            <li>Implement user interaction systems</li>
            <li>Collaborate with 3D artists</li>
            <li>Test and debug XR experiences</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Unity/Unreal Engine experience</li>
            <li>C#/C++ programming skills</li>
            <li>3D mathematics knowledge</li>
            <li>Experience with ARKit/ARCore</li>
            <li>VR hardware familiarity</li>
        </ol>`,
        salary: 98000,
        date: 1729681667114,
        category: "Programming",
    },
    {
        _id: '27',
        title: "Data Engineer",
        location: "Chicago",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Build and maintain our data infrastructure to enable data-driven decision making across the organization. You'll design systems that process and analyze large datasets efficiently.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Design data pipelines</li>
            <li>Implement ETL processes</li>
            <li>Optimize database performance</li>
            <li>Ensure data quality and integrity</li>
            <li>Collaborate with analytics teams</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Expertise in SQL and NoSQL databases</li>
            <li>Experience with Spark/Hadoop</li>
            <li>Python/Java/Scala proficiency</li>
            <li>Cloud data services knowledge</li>
            <li>Data modeling skills</li>
        </ol>`,
        salary: 125000,
        date: 1729681667114,
        category: "Data Science",
    },
    {
        _id: '28',
        title: "Product Manager",
        location: "Seattle",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Lead product development from conception to launch. You'll define product vision, gather requirements, and work cross-functionally to deliver exceptional user experiences.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Define product strategy</li>
            <li>Gather and prioritize requirements</li>
            <li>Create product roadmaps</li>
            <li>Work with engineering and design teams</li>
            <li>Analyze market and competition</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Proven product management experience</li>
            <li>Technical background</li>
            <li>Excellent communication skills</li>
            <li>Data-driven decision making</li>
            <li>Agile methodology knowledge</li>
        </ol>`,
        salary: 135000,
        date: 1729681667114,
        category: "Management",
    },
    {
        _id: '29',
        title: "QA Automation Engineer",
        location: "Austin",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Develop automated testing frameworks to ensure software quality. You'll create and maintain test scripts that validate functionality across our product suite.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Design test automation frameworks</li>
            <li>Write and maintain test scripts</li>
            <li>Integrate tests into CI/CD pipeline</li>
            <li>Analyze test results</li>
            <li>Collaborate with development teams</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Selenium/Appium experience</li>
            <li>Programming skills (Java/Python)</li>
            <li>API testing knowledge</li>
            <li>Understanding of QA methodologies</li>
            <li>Performance testing experience</li>
        </ol>`,
        salary: 95000,
        date: 1729681667114,
        category: "Programming",
    },
    {
        _id: '30',
        title: "Digital Marketing Specialist",
        location: "Miami",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Develop and execute digital marketing campaigns across multiple channels. You'll drive customer acquisition and engagement through data-driven marketing strategies.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Manage paid advertising campaigns</li>
            <li>Optimize SEO/SEM strategies</li>
            <li>Analyze campaign performance</li>
            <li>Create content for digital channels</li>
            <li>Implement email marketing campaigns</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Google Ads/Facebook Ads experience</li>
            <li>Google Analytics proficiency</li>
            <li>Content creation skills</li>
            <li>Data analysis capabilities</li>
            <li>CRM platform knowledge</li>
        </ol>`,
        salary: 75000,
        date: 1729681667114,
        category: "Marketing",
    },
    {
        _id: '31',
        title: "Systems Administrator",
        location: "Denver",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Maintain and optimize our IT infrastructure to ensure high availability and performance. You'll be responsible for servers, networks, and enterprise systems.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Administer server infrastructure</li>
            <li>Monitor system performance</li>
            <li>Implement security measures</li>
            <li>Troubleshoot technical issues</li>
            <li>Manage backup and recovery</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Windows/Linux server administration</li>
            <li>Networking knowledge</li>
            <li>Scripting skills (PowerShell/Bash)</li>
            <li>Virtualization experience</li>
            <li>Problem-solving abilities</li>
        </ol>`,
        salary: 85000,
        date: 1729681667114,
        category: "Networking",
    },
    {
        _id: '32',
        title: "Frontend Architect",
        location: "Portland",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Design and implement frontend architecture for large-scale web applications. You'll establish best practices and guide development teams in building maintainable, performant UIs.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Define frontend architecture</li>
            <li>Establish coding standards</li>
            <li>Optimize application performance</li>
            <li>Research new technologies</li>
            <li>Mentor developers</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Expert JavaScript/TypeScript knowledge</li>
            <li>Deep React/Angular/Vue experience</li>
            <li>Web performance optimization</li>
            <li>Build tools expertise</li>
            <li>Testing strategies knowledge</li>
        </ol>`,
        salary: 140000,
        date: 1729681667114,
        category: "Programming",
    },
    {
        _id: '33',
        title: "Backend Engineer",
        location: "Boston",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Develop and maintain server-side logic for our applications. You'll build robust APIs, optimize database queries, and ensure system reliability.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Design and implement APIs</li>
            <li>Optimize database performance</li>
            <li>Implement security measures</li>
            <li>Write unit and integration tests</li>
            <li>Collaborate with frontend teams</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Node.js/Python/Java expertise</li>
            <li>REST/GraphQL API design</li>
            <li>Database optimization</li>
            <li>Cloud services experience</li>
            <li>System architecture knowledge</li>
        </ol>`,
        salary: 130000,
        date: 1729681667114,
        category: "Programming",
    },
    {
        _id: '34',
        title: "IT Support Specialist",
        location: "Phoenix",
        level: "Beginner Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Provide technical support to employees and maintain IT equipment. You'll troubleshoot hardware and software issues to ensure smooth business operations.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Respond to help desk tickets</li>
            <li>Troubleshoot hardware/software</li>
            <li>Set up workstations</li>
            <li>Maintain IT inventory</li>
            <li>Document solutions</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Windows/macOS troubleshooting</li>
            <li>Basic networking knowledge</li>
            <li>Hardware repair skills</li>
            <li>Customer service orientation</li>
            <li>Problem-solving abilities</li>
        </ol>`,
        salary: 55000,
        date: 1729681667114,
        category: "Networking",
    },
    {
        _id: '35',
        title: "Database Administrator",
        location: "Atlanta",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Manage and optimize our database systems to ensure data integrity and performance. You'll implement backup strategies and work with developers on schema design.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Install and configure DBMS</li>
            <li>Monitor database performance</li>
            <li>Implement backup/recovery</li>
            <li>Optimize queries</li>
            <li>Ensure data security</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>SQL Server/Oracle/MySQL expertise</li>
            <li>Query optimization</li>
            <li>Database security</li>
            <li>ETL process knowledge</li>
            <li>Cloud database experience</li>
        </ol>`,
        salary: 110000,
        date: 1729681667114,
        category: "Data Science",
    },
    {
        _id: '36',
        title: "Scrum Master",
        location: "Minneapolis",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Facilitate Agile processes and remove impediments for development teams. You'll ensure teams follow Scrum practices and continuously improve their workflow.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Facilitate Scrum ceremonies</li>
            <li>Remove team impediments</li>
            <li>Coach team on Agile practices</li>
            <li>Track and report progress</li>
            <li>Foster continuous improvement</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Certified Scrum Master</li>
            <li>Agile methodology expertise</li>
            <li>Conflict resolution skills</li>
            <li>Excellent communication</li>
            <li>Technical background</li>
        </ol>`,
        salary: 105000,
        date: 1729681667114,
        category: "Management",
    },
    {
        _id: '37',
        title: "Information Security Analyst",
        location: "Washington DC",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Protect our systems and data from security threats. You'll monitor for vulnerabilities, implement security controls, and respond to incidents.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Monitor security systems</li>
            <li>Conduct risk assessments</li>
            <li>Implement security controls</li>
            <li>Respond to incidents</li>
            <li>Develop security policies</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Security frameworks knowledge</li>
            <li>SIEM tools experience</li>
            <li>Risk assessment skills</li>
            <li>Incident response</li>
            <li>Security certifications</li>
        </ol>`,
        salary: 120000,
        date: 1729681667114,
        category: "Cybersecurity",
    },
    {
        _id: '38',
        title: "Technical Recruiter",
        location: "Remote",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Source and recruit top technical talent for our growing organization. You'll build relationships with candidates and hiring managers to fill key positions.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Source technical candidates</li>
            <li>Screen and interview applicants</li>
            <li>Coordinate hiring process</li>
            <li>Build talent pipelines</li>
            <li>Promote employer brand</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Technical recruiting experience</li>
            <li>Knowledge of tech roles</li>
            <li>Sourcing techniques</li>
            <li>Interviewing skills</li>
            <li>ATS proficiency</li>
        </ol>`,
        salary: 85000,
        date: 1729681667114,
        category: "Management",
    },
    {
        _id: '39',
        title: "Game Developer",
        location: "Orlando",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Create engaging game experiences across multiple platforms. You'll implement game mechanics, optimize performance, and collaborate with creative teams.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Implement game features</li>
            <li>Optimize game performance</li>
            <li>Fix bugs and issues</li>
            <li>Work with artists/designers</li>
            <li>Stay current with game tech</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Unity/Unreal experience</li>
            <li>C#/C++ programming</li>
            <li>3D math knowledge</li>
            <li>Game physics understanding</li>
            <li>Performance optimization</li>
        </ol>`,
        salary: 95000,
        date: 1729681667114,
        category: "Programming",
    },
    {
        _id: '40',
        title: "Embedded Systems Engineer",
        location: "Detroit",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Develop software for embedded devices and IoT systems. You'll work on low-level programming and hardware integration for specialized computing systems.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Develop embedded software</li>
            <li>Interface with hardware</li>
            <li>Optimize for resource constraints</li>
            <li>Debug complex systems</li>
            <li>Document designs</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>C/C++ expertise</li>
            <li>Microcontroller experience</li>
            <li>RTOS knowledge</li>
            <li>Hardware debugging</li>
            <li>Communication protocols</li>
        </ol>`,
        salary: 115000,
        date: 1729681667114,
        category: "Programming",
    },
    {
        _id: '41',
        title: "SEO Specialist",
        location: "San Diego",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Optimize our web presence to improve organic search rankings. You'll analyze keywords, optimize content, and implement technical SEO improvements.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Conduct keyword research</li>
            <li>Optimize website content</li>
            <li>Analyze SEO performance</li>
            <li>Implement technical SEO</li>
            <li>Monitor search algorithms</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>SEO tools proficiency</li>
            <li>Google Analytics expertise</li>
            <li>Content optimization</li>
            <li>Technical SEO knowledge</li>
            <li>Data analysis skills</li>
        </ol>`,
        salary: 75000,
        date: 1729681667114,
        category: "Marketing",
    },
    {
        _id: '42',
        title: "Site Reliability Engineer",
        location: "Toronto",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Ensure the reliability and performance of our production systems. You'll automate operations, monitor systems, and respond to incidents.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Monitor system health</li>
            <li>Automate operations</li>
            <li>Respond to incidents</li>
            <li>Improve system reliability</li>
            <li>Collaborate with dev teams</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Cloud infrastructure expertise</li>
            <li>Infrastructure as code</li>
            <li>Monitoring tools</li>
            <li>Scripting skills</li>
            <li>Incident management</li>
        </ol>`,
        salary: 135000,
        date: 1729681667114,
        category: "Programming",
    },
    {
        _id: '43',
        title: "3D Artist",
        location: "Vancouver",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Create high-quality 3D models and assets for games and applications. You'll work with art directors and developers to bring concepts to life.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Create 3D models</li>
            <li>Texture and shade assets</li>
            <li>Optimize for real-time</li>
            <li>Collaborate with teams</li>
            <li>Follow art direction</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>3D modeling software</li>
            <li>Texturing skills</li>
            <li>Understanding of topology</li>
            <li>Portfolio required</li>
            <li>Game engine experience</li>
        </ol>`,
        salary: 85000,
        date: 1729681667114,
        category: "Design",
    },
    {
        _id: '44',
        title: "IT Project Manager",
        location: "Dallas",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Lead IT projects from initiation to completion. You'll coordinate teams, manage timelines, and ensure successful delivery of technology solutions.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Define project scope</li>
            <li>Create project plans</li>
            <li>Manage budgets</li>
            <li>Coordinate teams</li>
            <li>Report on progress</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>PMP certification</li>
            <li>IT background</li>
            <li>Stakeholder management</li>
            <li>Risk management</li>
            <li>Communication skills</li>
        </ol>`,
        salary: 120000,
        date: 1729681667114,
        category: "Management",
    },
    {
        _id: '45',
        title: "Machine Learning Engineer",
        location: "Pittsburgh",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Design and implement machine learning systems that solve complex problems. You'll work on data pipelines, model training, and production deployment.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Develop ML models</li>
            <li>Preprocess data</li>
            <li>Optimize algorithms</li>
            <li>Deploy to production</li>
            <li>Monitor performance</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Python expertise</li>
            <li>ML frameworks</li>
            <li>Data processing</li>
            <li>Software engineering</li>
            <li>Cloud ML services</li>
        </ol>`
    },
    // Previous 50 entries would be here...
    {
        _id: '51',
        title: "Quantum Computing Engineer",
        location: "Santa Barbara",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Pioneer quantum algorithms and software for next-generation computing systems. Work at the cutting edge of quantum information science.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Develop quantum algorithms</li>
            <li>Implement quantum error correction</li>
            <li>Optimize quantum circuits</li>
            <li>Collaborate with physicists</li>
            <li>Research new applications</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Quantum mechanics knowledge</li>
            <li>Qiskit/Cirq experience</li>
            <li>Linear algebra expertise</li>
            <li>Python programming</li>
            <li>Research background</li>
        </ol>`,
        salary: 180000,
        date: 1729681667114,
        category: "Programming",
    },
    {
        _id: '52',
        title: "Ethical Hacker",
        location: "Remote",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Identify vulnerabilities in our systems before malicious actors do. Conduct authorized penetration testing and security assessments.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Perform penetration tests</li>
            <li>Simulate cyber attacks</li>
            <li>Report vulnerabilities</li>
            <li>Recommend fixes</li>
            <li>Stay current on exploits</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>CEH/OSCP certification</li>
            <li>Network security knowledge</li>
            <li>Exploit development</li>
            <li>Social engineering</li>
            <li>Red team experience</li>
        </ol>`,
        salary: 135000,
        date: 1729681667114,
        category: "Cybersecurity",
    },
    {
        _id: '53',
        title: "Robotics Engineer",
        location: "Pittsburgh",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Design and program autonomous robotic systems for industrial applications. Work on perception, control, and motion planning algorithms.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Develop robotic software</li>
            <li>Implement computer vision</li>
            <li>Design control systems</li>
            <li>Test robotic prototypes</li>
            <li>Optimize performance</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>ROS experience</li>
            <li>C++/Python robotics</li>
            <li>Control theory</li>
            <li>Sensor integration</li>
            <li>Mechanical aptitude</li>
        </ol>`,
        salary: 125000,
        date: 1729681667114,
        category: "Programming",
    },
    {
        _id: '54',
        title: "Digital Forensics Analyst",
        location: "Washington DC",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Investigate cyber incidents and recover digital evidence. Use forensic tools to analyze compromised systems and support legal proceedings.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Conduct forensic analysis</li>
            <li>Recover deleted data</li>
            <li>Document evidence</li>
            <li>Testify in court</li>
            <li>Develop investigation methods</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Forensic tools (FTK, EnCase)</li>
            <li>File system knowledge</li>
            <li>Chain of custody</li>
            <li>Malware analysis</li>
            <li>Legal procedures</li>
        </ol>`,
        salary: 110000,
        date: 1729681667114,
        category: "Cybersecurity",
    },
    {
        _id: '55',
        title: "Bioinformatics Scientist",
        location: "Boston",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Apply computational methods to analyze biological data. Develop algorithms for genomic sequencing and biomedical research.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Analyze genomic data</li>
            <li>Develop analysis pipelines</li>
            <li>Collaborate with biologists</li>
            <li>Publish research</li>
            <li>Optimize algorithms</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Python/R for biology</li>
            <li>Next-gen sequencing</li>
            <li>Statistics knowledge</li>
            <li>Bioinformatics tools</li>
            <li>Molecular biology</li>
        </ol>`,
        salary: 130000,
        date: 1729681667114,
        category: "Data Science",
    },
    {
        _id: '56',
        title: "Voice UX Designer",
        location: "Seattle",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Design conversational interfaces for voice assistants and smart devices. Create natural dialog flows and personality for AI voices.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Design voice interactions</li>
            <li>Create dialog trees</li>
            <li>Test with users</li>
            <li>Define voice persona</li>
            <li>Collaborate with NLP teams</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Conversation design</li>
            <li>Voice platform knowledge</li>
            <li>User research</li>
            <li>Prototyping tools</li>
            <li>Linguistics background</li>
        </ol>`,
        salary: 105000,
        date: 1729681667114,
        category: "Design",
    },
    {
        _id: '57',
        title: "FinTech Developer",
        location: "New York",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Build secure financial applications for banking and trading systems. Implement blockchain, payment processing, and regulatory solutions.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Develop financial software</li>
            <li>Implement security protocols</li>
            <li>Integrate payment systems</li>
            <li>Ensure compliance</li>
            <li>Optimize transactions</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Java/Python/C++</li>
            <li>Financial protocols</li>
            <li>Blockchain knowledge</li>
            <li>Security standards</li>
            <li>Regulatory knowledge</li>
        </ol>`,
        salary: 150000,
        date: 1729681667114,
        category: "Programming",
    },
    {
        _id: '58',
        title: "GIS Developer",
        location: "Denver",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Develop geographic information systems for mapping and spatial analysis. Build applications that visualize and process geospatial data.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Develop GIS applications</li>
            <li>Process spatial data</li>
            <li>Create mapping tools</li>
            <li>Optimize geospatial queries</li>
            <li>Integrate with APIs</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>ArcGIS/QGIS experience</li>
            <li>Geospatial databases</li>
            <li>Python/JavaScript</li>
            <li>Remote sensing</li>
            <li>Cartography principles</li>
        </ol>`,
        salary: 95000,
        date: 1729681667114,
        category: "Programming",
    },
    {
        _id: '59',
        title: "Accessibility Specialist",
        location: "Remote",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Ensure our digital products are accessible to all users. Audit interfaces, recommend improvements, and advocate for inclusive design.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Conduct accessibility audits</li>
            <li>Recommend improvements</li>
            <li>Train teams</li>
            <li>Test with assistive tech</li>
            <li>Stay current on standards</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>WCAG expertise</li>
            <li>Screen reader testing</li>
            <li>HTML/CSS knowledge</li>
            <li>UX principles</li>
            <li>Documentation skills</li>
        </ol>`,
        salary: 90000,
        date: 1729681667114,
        category: "Design",
    },
    {
        _id: '60',
        title: "Technical Trainer",
        location: "Austin",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Educate developers and IT professionals on our technologies. Create training materials and deliver engaging technical instruction.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Develop training curriculum</li>
            <li>Deliver workshops</li>
            <li>Create documentation</li>
            <li>Assess learning</li>
            <li>Update materials</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Technical expertise</li>
            <li>Instructional design</li>
            <li>Public speaking</li>
            <li>Content creation</li>
            <li>Patience</li>
        </ol>`,
        salary: 85000,
        date: 1729681667114,
        category: "Management",
    },
    {
        _id: '61',
        title: "Cloud Security Engineer",
        location: "Remote",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Secure our cloud infrastructure across multiple platforms. Implement security controls and monitor for threats in cloud environments.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Configure cloud security</li>
            <li>Implement IAM policies</li>
            <li>Monitor for threats</li>
            <li>Respond to incidents</li>
            <li>Automate security</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>AWS/Azure/GCP security</li>
            <li>Infrastructure as code</li>
            <li>SIEM tools</li>
            <li>Compliance frameworks</li>
            <li>Scripting skills</li>
        </ol>`,
        salary: 145000,
        date: 1729681667114,
        category: "Cybersecurity",
    },
    {
        _id: '62',
        title: "IoT Solutions Architect",
        location: "Chicago",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Design end-to-end IoT solutions for industrial and consumer applications. Architect systems that connect devices, cloud, and analytics.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Design IoT architectures</li>
            <li>Select hardware</li>
            <li>Plan connectivity</li>
            <li>Ensure security</li>
            <li>Guide implementation</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>IoT protocols</li>
            <li>Edge computing</li>
            <li>Cloud platforms</li>
            <li>Embedded systems</li>
            <li>System integration</li>
        </ol>`,
        salary: 155000,
        date: 1729681667114,
        category: "Programming",
    },
    {
        _id: '63',
        title: "Digital Twin Engineer",
        location: "Detroit",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Create virtual replicas of physical systems for simulation and analysis. Develop digital twins for manufacturing and industrial applications.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Develop digital twins</li>
            <li>Integrate sensor data</li>
            <li>Create simulations</li>
            <li>Analyze performance</li>
            <li>Optimize systems</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>3D modeling</li>
            <li>Data integration</li>
            <li>Simulation tools</li>
            <li>IoT knowledge</li>
            <li>Physics modeling</li>
        </ol>`,
        salary: 135000,
        date: 1729681667114,
        category: "Programming",
    },
    // Previous entries...
    {
        _id: '64',
        title: "AR Content Developer",
        location: "Los Angeles",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Create engaging augmented reality experiences for marketing and entertainment. Develop AR content that blends digital and physical worlds.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Develop AR content</li>
            <li>Optimize 3D assets</li>
            <li>Implement interactions</li>
            <li>Test experiences</li>
            <li>Stay current on AR tech</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Unity/Unreal AR</li>
            <li>3D content creation</li>
            <li>ARKit/ARCore</li>
            <li>Performance optimization</li>
            <li>Creative problem-solving</li>
        </ol>`,
        salary: 105000,
        date: 1729681667114,
        category: "Design",
    },
    {
        _id: '65',
        title: "Blockchain Developer",
        location: "Remote",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Build decentralized applications and smart contracts on blockchain platforms. Contribute to the architecture of distributed ledger systems.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Develop smart contracts</li>
            <li>Design DApps</li>
            <li>Implement consensus algorithms</li>
            <li>Optimize blockchain performance</li>
            <li>Research new protocols</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Solidity/Rust</li>
            <li>Ethereum/Polkadot</li>
            <li>Cryptography</li>
            <li>Distributed systems</li>
            <li>Web3.js/ethers.js</li>
        </ol>`,
        salary: 160000,
        date: 1729681667114,
        category: "Programming",
    },
    {
        _id: '66',
        title: "DevSecOps Engineer",
        location: "San Francisco",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Integrate security practices into our DevOps pipeline. Automate security testing and ensure infrastructure compliance throughout the SDLC.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Implement security automation</li>
            <li>Configure secure CI/CD</li>
            <li>Monitor for vulnerabilities</li>
            <li>Enforce compliance</li>
            <li>Educate teams</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>CI/CD security</li>
            <li>Infrastructure as code</li>
            <li>Container security</li>
            <li>Security scanning tools</li>
            <li>Cloud security</li>
        </ol>`,
        salary: 150000,
        date: 1729681667114,
        category: "Cybersecurity",
    },
    {
        _id: '67',
        title: "AI Ethics Specialist",
        location: "Remote",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Ensure our AI systems are developed and deployed responsibly. Assess algorithms for bias, fairness, and ethical implications.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Evaluate AI ethics</li>
            <li>Develop guidelines</li>
            <li>Assess model fairness</li>
            <li>Recommend improvements</li>
            <li>Stay current on regulations</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>AI/ML understanding</li>
            <li>Ethical frameworks</li>
            <li>Bias detection</li>
            <li>Policy knowledge</li>
            <li>Stakeholder communication</li>
        </ol>`,
        salary: 120000,
        date: 1729681667114,
        category: "Data Science",
    },
    {
        _id: '68',
        title: "5G Network Engineer",
        location: "Dallas",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Design and optimize 5G network infrastructure. Implement next-generation wireless technologies for high-speed connectivity.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Design 5G networks</li>
            <li>Optimize performance</li>
            <li>Troubleshoot issues</li>
            <li>Implement security</li>
            <li>Test new technologies</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>5G NR knowledge</li>
            <li>Network protocols</li>
            <li>RF engineering</li>
            <li>Virtualized networks</li>
            <li>Performance testing</li>
        </ol>`,
        salary: 140000,
        date: 1729681667114,
        category: "Networking",
    },
    {
        _id: '69',
        title: "Gameplay Programmer",
        location: "Montreal",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Implement core game mechanics and systems for AAA titles. Work with designers to bring gameplay visions to life.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Code gameplay systems</li>
            <li>Implement physics</li>
            <li>Optimize performance</li>
            <li>Fix bugs</li>
            <li>Collaborate with teams</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>C++/C#</li>
            <li>Unreal/Unity</li>
            <li>3D math</li>
            <li>Game physics</li>
            <li>Multiplayer networking</li>
        </ol>`,
        salary: 95000,
        date: 1729681667114,
        category: "Programming",
    },
    {
        _id: '70',
        title: "Threat Intelligence Analyst",
        location: "Washington DC",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Research cyber threats and analyze attacker tactics. Provide actionable intelligence to protect our organization from emerging risks.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Monitor threat actors</li>
            <li>Analyze malware</li>
            <li>Produce reports</li>
            <li>Brief stakeholders</li>
            <li>Develop detection rules</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Threat analysis</li>
            <li>Malware reverse engineering</li>
            <li>OSINT techniques</li>
            <li>Cyber kill chain</li>
            <li>Security frameworks</li>
        </ol>`,
        salary: 130000,
        date: 1729681667114,
        category: "Cybersecurity",
    },
    {
        _id: '71',
        title: "Computer Vision Engineer",
        location: "Boston",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Develop algorithms for image and video understanding. Build systems that extract meaning from visual data for various applications.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Develop CV algorithms</li>
            <li>Train deep learning models</li>
            <li>Optimize performance</li>
            <li>Process large datasets</li>
            <li>Deploy solutions</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>OpenCV/PyTorch</li>
            <li>Neural networks</li>
            <li>Image processing</li>
            <li>Python/C++</li>
            <li>3D vision</li>
        </ol>`,
        salary: 145000,
        date: 1729681667114,
        category: "Data Science",
    },
    {
        _id: '72',
        title: "Technical Writer",
        location: "Remote",
        level: "Entry Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Create clear documentation for our technical products and APIs. Translate complex concepts into user-friendly guides and tutorials.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Write documentation</li>
            <li>Create tutorials</li>
            <li>Maintain knowledge base</li>
            <li>Collaborate with engineers</li>
            <li>Update materials</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Technical writing</li>
            <li>Markdown/XML</li>
            <li>API documentation</li>
            <li>Learning curve analysis</li>
            <li>Attention to detail</li>
        </ol>`,
        salary: 75000,
        date: 1729681667114,
        category: "Management",
    },
    {
        _id: '73',
        title: "Site Reliability Engineer",
        location: "Portland",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Ensure our systems are reliable, scalable, and efficient. Automate operations and respond to incidents to maintain high availability.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Monitor systems</li>
            <li>Automate operations</li>
            <li>Respond to incidents</li>
            <li>Improve reliability</li>
            <li>Capacity planning</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Linux/Unix</li>
            <li>Cloud platforms</li>
            <li>Infrastructure as code</li>
            <li>Scripting</li>
            <li>Distributed systems</li>
        </ol>`,
        salary: 140000,
        date: 1729681667114,
        category: "Programming",
    },
    {
        _id: '74',
        title: "Data Privacy Officer",
        location: "Remote",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Ensure compliance with data protection regulations. Develop policies and procedures to safeguard personal information.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Monitor compliance</li>
            <li>Develop policies</li>
            <li>Conduct audits</li>
            <li>Train staff</li>
            <li>Respond to breaches</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>GDPR/CCPA expertise</li>
            <li>Risk assessment</li>
            <li>Policy development</li>
            <li>Legal knowledge</li>
            <li>Communication skills</li>
        </ol>`,
        salary: 135000,
        date: 1729681667114,
        category: "Management",
    },
    {
        _id: '75',
        title: "Edge Computing Specialist",
        location: "Chicago",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Design and implement edge computing solutions that bring processing closer to data sources. Optimize distributed systems for low latency.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Design edge architectures</li>
            <li>Optimize workloads</li>
            <li>Ensure security</li>
            <li>Monitor performance</li>
            <li>Integrate with cloud</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Edge computing platforms</li>
            <li>Distributed systems</li>
            <li>IoT protocols</li>
            <li>Latency optimization</li>
            <li>Containerization</li>
        </ol>`,
        salary: 150000,
        date: 1729681667114,
        category: "Programming",
    },
    {
        _id: '76',
        title: "VR Interaction Designer",
        location: "Seattle",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Design intuitive interactions and interfaces for virtual reality experiences. Create immersive environments that feel natural to users.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Design VR interactions</li>
            <li>Prototype interfaces</li>
            <li>Test with users</li>
            <li>Reduce motion sickness</li>
            <li>Collaborate with developers</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>VR design principles</li>
            <li>Unity/Unreal</li>
            <li>3D interaction patterns</li>
            <li>User testing</li>
            <li>Spatial UI</li>
        </ol>`,
        salary: 110000,
        date: 1729681667114,
        category: "Design",
    },
    {
        _id: '77',
        title: "MLOps Engineer",
        location: "San Jose",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Build and maintain infrastructure for machine learning at scale. Automate the ML lifecycle from training to deployment.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Automate ML pipelines</li>
            <li>Monitor models</li>
            <li>Optimize performance</li>
            <li>Implement versioning</li>
            <li>Collaborate with data scientists</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>ML frameworks</li>
            <li>Cloud platforms</li>
            <li>Containerization</li>
            <li>CI/CD for ML</li>
            <li>Monitoring tools</li>
        </ol>`,
        salary: 155000,
        date: 1729681667114,
        category: "Data Science",
    },
    {
        _id: '78',
        title: "Cybersecurity Auditor",
        location: "Remote",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Conduct security audits and assessments to ensure compliance with standards. Identify vulnerabilities and recommend improvements.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Perform audits</li>
            <li>Assess controls</li>
            <li>Document findings</li>
            <li>Recommend fixes</li>
            <li>Verify compliance</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Audit frameworks</li>
            <li>Security standards</li>
            <li>Risk assessment</li>
            <li>Reporting skills</li>
            <li>Attention to detail</li>
        </ol>`,
        salary: 115000,
        date: 1729681667114,
        category: "Cybersecurity",
    },
    {
        _id: '79',
        title: "Embedded Linux Developer",
        location: "Austin",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Develop and optimize Linux systems for embedded devices. Work on low-level software that powers IoT and edge devices.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Develop embedded Linux</li>
            <li>Optimize kernels</li>
            <li>Port to new hardware</li>
            <li>Debug low-level issues</li>
            <li>Implement drivers</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Embedded Linux</li>
            <li>C/C++</li>
            <li>Kernel development</li>
            <li>Device drivers</li>
            <li>Cross-compilation</li>
        </ol>`,
        salary: 130000,
        date: 1729681667114,
        category: "Programming",
    },
    {
        _id: '80',
        title: "UX Researcher",
        location: "New York",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Conduct user research to inform product design decisions. Gather insights through various methods to understand user needs and behaviors.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Plan studies</li>
            <li>Conduct interviews</li>
            <li>Analyze data</li>
            <li>Present findings</li>
            <li>Collaborate with designers</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Research methods</li>
            <li>Data analysis</li>
            <li>User testing</li>
            <li>Communication</li>
            <li>Empathy</li>
        </ol>`,
        salary: 105000,
        date: 1729681667114,
        category: "Design",
    }, 
    {
        _id: '81',
        title: "Cloud Solutions Architect",
        location: "Remote",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Design and implement scalable cloud infrastructure solutions for enterprise clients, ensuring security, reliability, and cost efficiency.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Design cloud architectures</li>
            <li>Optimize AWS/Azure/GCP deployments</li>
            <li>Ensure security compliance</li>
            <li>Automate infrastructure</li>
            <li>Mentor teams</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>AWS/Azure/GCP</li>
            <li>Kubernetes/Docker</li>
            <li>IaC (Terraform)</li>
            <li>Networking</li>
            <li>Cost optimization</li>
        </ol>`,
        salary: 145000,
        date: 1729681667114,
        category: "Cloud Computing",
    },
    {
        _id: '82',
        title: "Data Scientist (NLP)",
        location: "San Francisco",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Develop and deploy NLP models to extract insights from unstructured text data, improving business decision-making.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build NLP pipelines</li>
            <li>Fine-tune LLMs</li>
            <li>Optimize text processing</li>
            <li>Deploy models</li>
            <li>Collaborate with engineers</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Python (PyTorch/TensorFlow)</li>
            <li>NLP techniques</li>
            <li>Transformer models</li>
            <li>Data preprocessing</li>
            <li>MLOps</li>
        </ol>`,
        salary: 135000,
        date: 1729681667114,
        category: "Data Science",
    },
    {
        _id: '83',
        title: "DevOps Engineer",
        location: "Austin",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Implement CI/CD pipelines, automate deployments, and maintain cloud infrastructure for high-availability applications.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Manage Kubernetes clusters</li>
            <li>Automate deployments</li>
            <li>Monitor system health</li>
            <li>Optimize performance</li>
            <li>Troubleshoot incidents</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Docker/Kubernetes</li>
            <li>Jenkins/GitHub Actions</li>
            <li>AWS/GCP</li>
            <li>Scripting (Bash/Python)</li>
            <li>Infrastructure as Code</li>
        </ol>`,
        salary: 125000,
        date: 1729681667114,
        category: "DevOps",
    },
    {
        _id: '84',
        title: "Product Manager (FinTech)",
        location: "New York",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Lead product development for financial technology solutions, working with engineering, design, and business teams.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Define product roadmap</li>
            <li>Gather user requirements</li>
            <li>Prioritize features</li>
            <li>Coordinate releases</li>
            <li>Analyze market trends</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Product strategy</li>
            <li>Agile methodologies</li>
            <li>FinTech knowledge</li>
            <li>Stakeholder management</li>
            <li>Data-driven decision-making</li>
        </ol>`,
        salary: 140000,
        date: 1729681667114,
        category: "Product Management",
    },
    {
        _id: '85',
        title: "Frontend Developer (React)",
        location: "Remote",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Build responsive and performant web applications using React.js, collaborating with UX designers and backend engineers.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Develop React components</li>
            <li>Optimize performance</li>
            <li>Implement state management</li>
            <li>Write unit tests</li>
            <li>Debug issues</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>React.js</li>
            <li>TypeScript</li>
            <li>Redux/Zustand</li>
            <li>CSS-in-JS</li>
            <li>REST/GraphQL</li>
        </ol>`,
        salary: 115000,
        date: 1729681667114,
        category: "Programming",
    },
    {
        _id: '86',
        title: "AI Ethics Specialist",
        location: "San Francisco",
        level: "Expert Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Ensure ethical AI development by assessing risks, setting guidelines, and working with legal and engineering teams.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Audit AI models</li>
            <li>Develop ethical guidelines</li>
            <li>Mitigate bias risks</li>
            <li>Advise on regulations</li>
            <li>Train teams</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>AI fairness</li>
            <li>Regulatory compliance</li>
            <li>Risk assessment</li>
            <li>Data privacy</li>
            <li>Stakeholder communication</li>
        </ol>`,
        salary: 150000,
        date: 1729681667114,
        category: "Artificial Intelligence",
    },
    {
        _id: '87',
        title: "Blockchain Developer",
        location: "Remote",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Design and implement decentralized applications (DApps) and smart contracts on blockchain platforms like Ethereum.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Write smart contracts</li>
            <li>Develop DApps</li>
            <li>Optimize gas fees</li>
            <li>Ensure security</li>
            <li>Integrate with Web3</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Solidity/Rust</li>
            <li>Ethereum/Polygon</li>
            <li>Web3.js/Ethers.js</li>
            <li>Smart contract audits</li>
            <li>Decentralized finance (DeFi)</li>
        </ol>`,
        salary: 130000,
        date: 1729681667114,
        category: "Blockchain",
    },
    {
        _id: '88',
        title: "Technical Writer",
        location: "Remote",
        level: "Entry Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Create clear and concise technical documentation for software products, APIs, and developer tools.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Write API docs</li>
            <li>Create tutorials</li>
            <li>Edit developer guides</li>
            <li>Collaborate with engineers</li>
            <li>Maintain knowledge base</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Technical writing</li>
            <li>Markdown/XML</li>
            <li>Git</li>
            <li>Basic programming</li>
            <li>Attention to detail</li>
        </ol>`,
        salary: 85000,
        date: 1729681667114,
        category: "Documentation",
    },
    {
        _id: '89',
        title: "Game Developer (Unity)",
        location: "Los Angeles",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Develop interactive games using Unity, working with designers and artists to create engaging gameplay experiences.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Code game mechanics</li>
            <li>Optimize performance</li>
            <li>Fix bugs</li>
            <li>Implement physics</li>
            <li>Work with 3D assets</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Unity/C#</li>
            <li>Game physics</li>
            <li>Shader programming</li>
            <li>Multiplayer networking</li>
            <li>VR/AR (optional)</li>
        </ol>`,
        salary: 110000,
        date: 1729681667114,
        category: "Game Development",
    },
    {
        _id: '90',
        title: "Sales Engineer",
        location: "Chicago",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Bridge the gap between sales and engineering, demonstrating technical solutions to potential clients.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Present solutions</li>
            <li>Answer technical queries</li>
            <li>Customize demos</li>
            <li>Support negotiations</li>
            <li>Train sales teams</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Technical expertise</li>
            <li>Presentation skills</li>
            <li>Customer-facing experience</li>
            <li>Problem-solving</li>
            <li>CRM tools</li>
        </ol>`,
        salary: 120000,
        date: 1729681667114,
        category: "Sales",
    },
    {
        _id: '91',
        title: "QA Automation Engineer",
        location: "Remote",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Develop automated test scripts to ensure software quality, working closely with development teams.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Write test scripts</li>
            <li>Run regression tests</li>
            <li>Report bugs</li>
            <li>Improve test coverage</li>
            <li>Integrate with CI/CD</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Selenium/Cypress</li>
            <li>Python/JavaScript</li>
            <li>Test frameworks</li>
            <li>API testing</li>
            <li>Performance testing</li>
        </ol>`,
        salary: 100000,
        date: 1729681667114,
        category: "Quality Assurance",
    },
    {
        _id: '92',
        title: "Data Engineer",
        location: "Seattle",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Build and maintain scalable data pipelines, enabling data-driven decision-making across the organization.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Design ETL pipelines</li>
            <li>Optimize databases</li>
            <li>Ensure data quality</li>
            <li>Work with big data</li>
            <li>Support analytics teams</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>SQL/NoSQL</li>
            <li>Apache Spark</li>
            <li>Python/Java</li>
            <li>Data warehousing</li>
            <li>Cloud data tools</li>
        </ol>`,
        salary: 130000,
        date: 1729681667114,
        category: "Data Engineering",
    },
    {
        _id: '93',
        title: "iOS Developer (SwiftUI)",
        location: "Remote",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Develop and maintain iOS applications using Swift and SwiftUI, ensuring a smooth user experience.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build iOS apps</li>
            <li>Implement UI/UX</li>
            <li>Debug issues</li>
            <li>Optimize performance</li>
            <li>Collaborate with teams</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Swift/SwiftUI</li>
            <li>UIKit</li>
            <li>Core Data</li>
            <li>REST APIs</li>
            <li>App Store deployment</li>
        </ol>`,
        salary: 120000,
        date: 1729681667114,
        category: "Mobile Development",
    },
    {
        _id: '94',
        title: "Digital Marketing Specialist",
        location: "Remote",
        level: "Entry Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Execute digital marketing campaigns across channels (SEO, PPC, social media) to drive customer acquisition.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Run ads (Google/FB)</li>
            <li>Optimize SEO</li>
            <li>Analyze metrics</li>
            <li>Create content</li>
            <li>A/B test campaigns</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Google Analytics</li>
            <li>PPC/SEM</li>
            <li>Social media ads</li>
            <li>Content marketing</li>
            <li>Data analysis</li>
        </ol>`,
        salary: 75000,
        date: 1729681667114,
        category: "Marketing",
    },
    {
        _id: '95',
        title: "Backend Developer (Node.js)",
        location: "Remote",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Design and implement scalable backend services using Node.js, ensuring high performance and reliability.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Develop APIs</li>
            <li>Optimize databases</li>
            <li>Implement caching</li>
            <li>Ensure security</li>
            <li>Monitor performance</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Node.js/TypeScript</li>
            <li>Express/NestJS</li>
            <li>MongoDB/PostgreSQL</li>
            <li>Redis</li>
            <li>Docker/Kubernetes</li>
        </ol>`,
        salary: 125000,
        date: 1729681667114,
        category: "Backend Development",
    },
    {
        _id: '96',
        title: "Machine Learning Engineer",
        location: "San Francisco",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Design, train, and deploy machine learning models to solve complex business problems.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Train ML models</li>
            <li>Optimize algorithms</li>
            <li>Deploy to production</li>
            <li>Monitor performance</li>
            <li>Research new techniques</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Python (PyTorch/TensorFlow)</li>
            <li>MLOps</li>
            <li>Data pipelines</li>
            <li>Cloud ML services</li>
            <li>Statistical modeling</li>
        </ol>`,
        salary: 150000,
        date: 1729681667114,
        category: "Machine Learning",
    },
    {
        _id: '97',
        title: "UI/UX Designer",
        location: "Remote",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Create intuitive and visually appealing user interfaces, collaborating with product teams to enhance user experience.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Design wireframes</li>
            <li>Create prototypes</li>
            <li>Conduct usability tests</li>
            <li>Iterate based on feedback</li>
            <li>Work with developers</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Figma/Sketch</li>
            <li>User research</li>
            <li>Interaction design</li>
            <li>Prototyping</li>
            <li>Accessibility</li>
        </ol>`,
        salary: 110000,
        date: 1729681667114,
        category: "Design",
    },
    {
        _id: '98',
        title: "IT Support Specialist",
        location: "Chicago",
        level: "Entry Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Provide technical support to employees, troubleshooting hardware, software, and network issues.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Troubleshoot issues</li>
            <li>Set up workstations</li>
            <li>Manage tickets</li>
            <li>Assist with onboarding</li>
            <li>Maintain IT inventory</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Windows/macOS</li>
            <li>Active Directory</li>
            <li>Helpdesk software</li>
            <li>Basic networking</li>
            <li>Customer service</li>
        </ol>`,
        salary: 60000,
        date: 1729681667114,
        category: "IT Support",
    },
    {
        _id: '99',
        title: "Full-Stack Developer",
        location: "Remote",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Develop end-to-end web applications, working on both frontend and backend components.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build responsive UIs</li>
            <li>Develop APIs</li>
            <li>Optimize databases</li>
            <li>Debug full-stack issues</li>
            <li>Deploy applications</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>React/Next.js</li>
            <li>Node.js/Express</li>
            <li>SQL/NoSQL</li>
            <li>REST/GraphQL</li>
            <li>AWS/Docker</li>
        </ol>`,
        salary: 135000,
        date: 1729681667114,
        category: "Full-Stack Development",
    },
    {
        _id: '100',
        title: "Chief Technology Officer (CTO)",
        location: "San Francisco",
        level: "Executive Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Lead the company's technology strategy, overseeing engineering, product development, and innovation.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Set tech vision</li>
            <li>Manage engineering teams</li>
            <li>Drive R&D</li>
            <li>Ensure scalability</li>
            <li>Align with business goals</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Strategic leadership</li>
            <li>Software architecture</li>
            <li>Team management</li>
            <li>Budgeting</li>
            <li>Industry trends</li>
        </ol>`,
        salary: 250000,
        date: 1729681667114,
        category: "Executive",
    },
    {
        _id: '101',
        title: "FinTech Full Stack Developer",
        location: "New York (Hybrid)",
        level: "Lead Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b0",
            "name": "Goldman Sachs",
            "email": "careers@gs.com",
            "image": "gs_logo.png"
        },
        description: `
        <p>Lead development of high-frequency trading platforms and financial analytics dashboards for our investment banking division.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Architect microservices for real-time transaction processing</li>
            <li>Develop secure API gateways for financial data</li>
            <li>Optimize WebSocket connections for low-latency trading</li>
            <li>Implement blockchain integration for settlement systems</li>
            <li>Mentor junior developers in fintech best practices</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Java/Spring Boot + React/TypeScript</li>
            <li>Apache Kafka/RabbitMQ</li>
            <li>Docker/Kubernetes on AWS</li>
            <li>Financial protocols (FIX, SWIFT)</li>
            <li>PCI DSS compliance</li>
        </ol>`,
        salary: 241000,
        date: 1729781667114,
        category: "Finance Technology",
    },
    {
        _id: '102',
        title: "AI-Powered Full Stack Engineer",
        location: "San Francisco (Remote)",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b1",
            "name": "Anthropic",
            "email": "jobs@anthropic.com",
            "image": "anthropic_logo.png"
        },
        description: `
        <p>Build the interface and backend systems for Claude AI's enterprise dashboard, enabling custom LLM integrations.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Develop AI playground with real-time streaming</li>
            <li>Create prompt engineering toolkit</li>
            <li>Implement RAG architecture endpoints</li>
            <li>Design usage analytics dashboard</li>
            <li>Optimize GPU utilization reporting</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Python (FastAPI) + Next.js</li>
            <li>WebSockets/SSE experience</li>
            <li>Vector database knowledge</li>
            <li>LLM API integration</li>
            <li>AI safety principles</li>
        </ol>`,
        salary: 225000,
        date: 1729881667114,
        category: "Artificial Intelligence",
    },
    {
        _id: '103',
        title: "Healthcare Full Stack Developer",
        location: "Boston (Onsite)",
        level: "Mid Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b2",
            "name": "Moderna",
            "email": "talent@modernatx.com",
            "image": "moderna_logo.png"
        },
        description: `
        <p>Develop digital health platforms for clinical trial management and vaccine distribution tracking.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build HIPAA-compliant patient portals</li>
            <li>Integrate with EHR systems (Epic, Cerner)</li>
            <li>Develop analytics for adverse event reporting</li>
            <li>Implement cold chain monitoring interfaces</li>
            <li>Ensure 21 CFR Part 11 compliance</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Node.js + React/Tailwind</li>
            <li>HL7/FHIR standards</li>
            <li>Azure Health Data API</li>
            <li>IoT device integration</li>
            <li>Healthcare cybersecurity</li>
        </ol>`,
        salary: 165000,
        date: 1729981667114,
        category: "Health Tech",
    },
    {
        _id: '104',
        title: "GameFi Full Stack Developer",
        location: "Singapore (Remote)",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b3",
            "name": "Animoca Brands",
            "email": "careers@animoca.com",
            "image": "animoca_logo.png"
        },
        description: `
        <p>Build web3 gaming platforms integrating NFT marketplaces and token economies.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Develop play-to-earn game portals</li>
            <li>Integrate wallet connections (MetaMask, Phantom)</li>
            <li>Create smart contract interaction UIs</li>
            <li>Build staking/reward dashboards</li>
            <li>Optimize gas fee calculations</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>React/Three.js + Express</li>
            <li>Web3.js/Ethers.js</li>
            <li>EVM/Solana RPC</li>
            <li>NFT metadata standards</li>
            <li>Game economy design</li>
        </ol>`,
        salary: 180000,
        date: 1730081667114,
        category: "Blockchain Gaming",
    },
    {
        _id: '105',
        title: "GovTech Full Stack Developer",
        location: "Washington DC (Onsite)",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b4",
            "name": "Palantir",
            "email": "security-clearance@palantir.com",
            "image": "palantir_logo.png"
        },
        description: `
        <p>Develop classified systems for national security applications requiring top-secret clearance.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build air-gapped government portals</li>
            <li>Implement FIPS 140-2 encryption</li>
            <li>Develop geospatial analytics tools</li>
            <li>Create secure document workflows</li>
            <li>Maintain IL5/IL6 compliance</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Java/Angular (TS/SCI clearance)</li>
            <li>ArcGIS integration</li>
            <li>Splunk/Elasticsearch</li>
            <li>NIST SP 800-171</li>
            <li>FedRAMP requirements</li>
        </ol>`,
        salary: 210000,
        date: 1730181667114,
        category: "Government Tech",
    },
    {
        _id: '106',
        title: "Climate Tech Full Stack Engineer",
        location: "Berlin (Hybrid)",
        level: "Mid Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b5",
            "name": "Climeworks",
            "email": "greenjobs@climeworks.com",
            "image": "climeworks_logo.png"
        },
        description: `
        <p>Build carbon removal platforms connecting DAC facilities with corporate buyers.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Develop MRV (Measurement, Reporting, Verification) dashboards</li>
            <li>Integrate IoT sensor networks</li>
            <li>Create carbon credit marketplaces</li>
            <li>Visualize CO2 sequestration data</li>
            <li>Implement blockchain for credit tracing</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Python (Django) + Vue.js</li>
            <li>PostGIS/geospatial data</li>
            <li>Modbus/OPC UA protocols</li>
            <li>Carbon accounting standards</li>
            <li>ESG reporting frameworks</li>
        </ol>`,
        salary: 135000,
        date: 1730281667114,
        category: "Clean Tech",
    },
    {
        _id: '107',
        title: "SpaceTech Full Stack Developer",
        location: "Los Angeles (Onsite)",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b6",
            "name": "Relativity Space",
            "email": "spacejobs@relativityspace.com",
            "image": "relativity_logo.png"
        },
        description: `
        <p>Develop mission control software for 3D printed rocket launches.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build telemetry visualization systems</li>
            <li>Create launch sequence interfaces</li>
            <li>Develop anomaly detection dashboards</li>
            <li>Integrate with ground station APIs</li>
            <li>Implement range safety protocols</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>C#/.NET + Blazor</li>
            <li>WebGL/Three.js</li>
            <li>RTK/RTCM protocols</li>
            <li>ITAR compliance</li>
            <li>Space systems knowledge</li>
        </ol>`,
        salary: 195000,
        date: 1730381667114,
        category: "Aerospace",
    },
    {
        _id: '108',
        title: "Retail AI Full Stack Developer",
        location: "Seattle (Hybrid)",
        level: "Principal Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b7",
            "name": "Amazon Robotics",
            "email": "ar-jobs@amazon.com",
            "image": "amazon_robotics_logo.png"
        },
        description: `
        <p>Build computer vision interfaces for autonomous warehouse systems.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Develop robot fleet management UI</li>
            <li>Create vision anomaly review tools</li>
            <li>Integrate with Kiva control systems</li>
            <li>Optimize pick path visualizations</li>
            <li>Implement digital twin interfaces</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>TypeScript/React + Java</li>
            <li>WebRTC/WebGL</li>
            <li>ROS bridge APIs</li>
            <li>Industrial IoT protocols</li>
            <li>WMS integration</li>
        </ol>`,
        salary: 260000,
        date: 1730481667114,
        category: "Retail Tech",
    },
    {
        _id: '109',
        title: "Quantum Computing Full Stack Dev",
        location: "Toronto (Onsite)",
        level: "Research Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b8",
            "name": "Xanadu",
            "email": "quantum-careers@xanadu.ai",
            "image": "xanadu_logo.png"
        },
        description: `
        <p>Develop interfaces for photonic quantum computing platforms.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build quantum circuit composer UI</li>
            <li>Visualize qubit entanglement</li>
            <li>Develop result analysis tools</li>
            <li>Create educational interfaces</li>
            <li>Optimize quantum cloud APIs</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Python (Flask) + Svelte</li>
            <li>Qiskit/Cirq knowledge</li>
            <li>WebAssembly optimization</li>
            <li>Quantum algorithms</li>
            <li>Scientific visualization</li>
        </ol>`,
        salary: 185000,
        date: 1730581667114,
        category: "Quantum Tech",
    },
    {
        _id: '110',
        title: "Metaverse Full Stack Engineer",
        location: "Tokyo (Remote)",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359c0",
            "name": "Bandai Namco",
            "email": "web3-jobs@bandainamco.com",
            "image": "bandai_logo.png"
        },
        description: `
        <p>Develop interconnected virtual worlds for anime IP metaverse projects.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build cross-world portals</li>
            <li>Implement avatar interoperability</li>
            <li>Develop virtual item marketplaces</li>
            <li>Create event hosting systems</li>
            <li>Optimize WebXR performance</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Unity WebGL + Node.js</li>
            <li>WebXR/Web3 standards</li>
            <li>VRM avatar formats</li>
            <li>Cross-platform auth</li>
            <li>Japanese language (N2+)</li>
        </ol>`,
        salary: 175000,
        date: 1730681667114,
        category: "Metaverse",
    },
    {
        _id: '110',
        title: "Senior Data Scientist (AI for Earth)",
        location: "Redmond, WA",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b0",
            "name": "Microsoft",
            "email": "careers@microsoft.com",
            "image": company_icon,
        },
        description: `
        <p>Develop AI models for environmental sustainability projects. Work with NGOs to analyze climate data and publish research on open-source AI tools.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build ML models for climate change prediction.</li>
            <li>Optimize AI algorithms for satellite imagery analysis.</li>
            <li>Collaborate with research teams on sustainability projects.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Expertise in Python, TensorFlow, and Azure.</li>
            <li>Experience in geospatial data analysis.</li>
            <li>Published research in AI/ML.</li>
        </ol>`,
        salary: 158000,
        date: 1729681667114,
        category: "AI/Data Science",
    },
    {
        _id: '111',
        title: "Data Scientist (Fraud Detection)",
        location: "New York",
        level: "Mid-Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b1",
            "name": "JPMorgan Chase",
            "email": "jpmorgan@careers.com",
            "image": company_icon,
        },
        description: `
        <p>Detect financial fraud using transaction pattern analysis and real-time risk models.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Develop anomaly detection algorithms.</li>
            <li>Optimize fraud prediction models.</li>
            <li>Work with cybersecurity teams.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>SQL, PySpark, and financial domain knowledge.</li>
            <li>Experience in fraud analytics.</li>
        </ol>`,
        salary: 130000,
        date: 1729681667114,
        category: "Finance/Data Science",
    },
    {
        _id: '112',
        title: "Data Scientist (Agriculture Analytics)",
        location: "Bengaluru",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b2",
            "name": "Cropin",
            "email": "careers@cropin.com",
            "image": company_icon,
        },
        description: `
        <p>Analyze satellite imagery for crop yield prediction and develop SaaS tools for farmers.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Process geospatial data.</li>
            <li>Build predictive models for agriculture.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Python, remote sensing, and GIS.</li>
        </ol>`,
        salary: 1200000,
        date: 1729681667114,
        category: "AgTech/Data Science",
    },
    {
        _id: '113',
        title: "Data Scientist (Threat Intelligence)",
        location: "San Jose, CA",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b3",
            "name": "Splunk",
            "email": "jobs@splunk.com",
            "image": company_icon,
        },
        description: `
        <p>Develop anomaly detection algorithms for cybersecurity.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Analyze security logs for threats.</li>
            <li>Build real-time monitoring dashboards.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>SIEM tools, Python, and cybersecurity knowledge.</li>
        </ol>`,
        salary: 145000,
        date: 1729681667114,
        category: "Cybersecurity/Data Science",
    },
    {
        _id: '114',
        title: "Data Scientist (Public Policy)",
        location: "Chicago",
        level: "Mid-Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b4",
            "name": "Civis Analytics",
            "email": "hire@civisanalytics.com",
            "image": company_icon,
        },
        description: `
        <p>Analyze voter data for political campaigns and public policy.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Develop predictive models for elections.</li>
            <li>Work with government agencies.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>R, survey analysis, and statistical modeling.</li>
        </ol>`,
        salary: 110000,
        date: 1729681667114,
        category: "Public Policy/Data Science",
    },
    {
        _id: '115',
        title: "Data Scientist (Big Data Analytics)",
        location: "London",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b5",
            "name": "Databricks",
            "email": "careers@databricks.com",
            "image": company_icon,
        },
        description: `
        <p>Build unified data/ML pipelines for enterprise clients.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Optimize Delta Lake for large-scale analytics.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Spark, Scala, and MLOps.</li>
        </ol>`,
        salary: 92000,
        date: 1729681667114,
        category: "Big Data/Data Science",
    },
    {
        _id: '116',
        title: "NLP Data Scientist",
        location: "McLean, VA",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b6",
            "name": "Capital One",
            "email": "jobs@capitalone.com",
            "image": company_icon,
        },
        description: `
        <p>Develop NLP models for customer service chatbots.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Fine-tune LLMs (BERT, GPT).</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>PyTorch, Transformers, and financial NLP.</li>
        </ol>`,
        salary: 197400,
        date: 1729681667114,
        category: "NLP/Data Science",
    },
    {
        _id: '117',
        title: "Entry-Level Data Scientist",
        location: "Remote (India)",
        level: "Entry Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b7",
            "name": "TheMathCompany",
            "email": "careers@themathcompany.com",
            "image": company_icon,
        },
        description: `
        <p>Solve business problems for Fortune 500 clients.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Develop custom ML solutions.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Python, SQL, and consulting skills.</li>
        </ol>`,
        salary: 700000,
        date: 1729681667114,
        category: "Consulting/Data Science",
    },
    {
        _id: '118',
        title: "Senior Data Scientist (Risk Analytics)",
        location: "Zurich",
        level: "Senior Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b8",
            "name": "Zurich Insurance",
            "email": "jobs@zurich.com",
            "image": company_icon,
        },
        description: `
        <p>Develop risk assessment models for insurance.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Build predictive models for claims.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Python, actuarial science.</li>
        </ol>`,
        salary: 140000,
        date: 1729681667114,
        category: "FinTech/Data Science",
    },
    {
        _id: '119',
        title: "Data Scientist (Experimentation)",
        location: "Remote (Europe)",
        level: "Mid-Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359c0",
            "name": "Netflix",
            "email": "jobs@netflix.com",
            "image": company_icon,
        },
        description: `
        <p>Optimize A/B testing for user engagement.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Design and analyze experiments.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Python, SQL, and statistical testing.</li>
        </ol>`,
        salary: 120000,
        date: 1729681667114,
        category: "Entertainment/Data Science",
    }
]
