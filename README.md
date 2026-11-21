# 🚀 Aditya Rajendra Salve — Developer Portfolio

> **Computer Engineering Student | Aspiring Software Engineer**  
> Dr. D. Y. Patil College of Engineering and Innovation, Pune (Expected Grad: 2029)  
> Location: Talegaon Dabhade, Pune, Maharashtra, India

A modern, responsive personal developer portfolio website engineered with **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Built with a futuristic dark aesthetic, glassmorphism, verified academic credentials, interactive terminal emulator, and centralized data architecture.

---

## 🌟 Key Highlights & Features

- **Cyber Futuristic Aesthetic**: Styled in a palette (`#080B14`, `#101626`) with electric blue (`#3B82F6`) and violet (`#8B5CF6`) glowing accents.
- **Dark & Light Mode Switcher**: Seamless theme toggle with local storage persistence and CSS class switching.
- **Centralized Data Hub (`src/data/portfolioData.ts`)**: Edit your entire website (personal details, skills, education, projects, certifications, and social links) in **one single file** without touching component logic.
- **Dual Avatar Experience**: Toggle effortlessly between Aditya's genuine portrait photograph (extracted from his official IIT Madras / NPTEL certificate) and a cybernetic "AS" monogram.
- **Authentic Credentials Showcase**:
  - **NPTEL (IIT Madras & Swayam)**: *Python for Data Science* (Jan–Feb 2026, Score 50%, Roll No: `NPTEL26CS80S466201283`).
  - **Imarticus Learning & Skill India / NSDC**: *C & C++ Programming* (Grade A, ID: `VLCVTSYQ373U`).
  - **Bajaj Auto Ltd. CSR**: *Bajaj Manufacturing Systems - Employability Skills (BMS-ES)* (ID: `548687-37-2026-09-28`).
  - High-resolution modal certificate viewer with credential verification links.
  - Future goals clearly labeled as **Demo Placeholders**.
- **Interactive Cyber Developer Terminal**: Press `` ` `` or click the **cli** terminal icon in the navbar to execute commands (`help`, `about`, `skills`, `projects`, `certs`, `education`, `sih`, `contact`, `clear`).
- **Milestones & Smart India Hackathon (SIH)**: Authentic documentation of participation in SIH focusing on real-world engineering problem solving, rapid prototyping, and collaborative teamwork.
- **Strict Content Authenticity**: Zero exaggerated claims, zero fake awards, and clearly labeled beginner vs. intermediate skill badges.
- **Functional Contact Form & Direct Email**: Client-side validated form with mailto fallback and 1-click email copy button (`adityasalve0806@gmail.com`).
- **Fully Responsive**: Optimized for desktop monitors, laptops, tablets, Android smartphones, and iPhones.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 18** | Component architecture & reactive UI |
| **TypeScript** | Type-safe development & data contracts |
| **Vite 6** | Lightning-fast build tool & dev server |
| **Tailwind CSS** | Custom styling, glassmorphism & responsive layout |
| **Lucide React** | Consistent, modern developer iconography |
| **Framer Motion** | Micro-interactions and smooth UI animations |

---

## 📁 Project Structure

```text
aditya-portfolio/
├── public/
│   └── assets/
│       ├── aditya-avatar.png        # Square cropped portrait avatar
│       ├── aditya-photo.jpg         # High-resolution original portrait
│       ├── cert-nptel-python.png    # IIT Madras NPTEL certificate preview
│       ├── cert-imarticus-c-cpp.png # Imarticus Grade A certificate preview
│       └── cert-bajaj-bms.png       # Bajaj Auto CSR certificate preview
├── src/
│   ├── components/
│   │   ├── About.tsx                # "More Than Just Code" & 3 core pillars
│   │   ├── Achievements.tsx         # SIH hackathon & future milestone placeholders
│   │   ├── BackgroundEffects.tsx    # Cyber grid & ambient glow blurs
│   │   ├── BackToTop.tsx            # Floating scroll-to-top button
│   │   ├── CertificateModal.tsx     # High-res modal preview for credentials
│   │   ├── Certifications.tsx       # "Learning Beyond the Classroom" cards
│   │   ├── Contact.tsx              # "Let's Connect & Build Something Great"
│   │   ├── CustomCursor.tsx         # Desktop glowing mouse tracker
│   │   ├── Education.tsx            # Academic timeline (DY Patil COEI & 12th)
│   │   ├── Footer.tsx               # Footer with AS branding & copyright
│   │   ├── Hero.tsx                 # Hello World hero, status badge, avatar switcher
│   │   ├── InteractiveTerminal.tsx  # Interactive bash-style terminal emulator
│   │   ├── LearningJourney.tsx      # "Always Learning, Always Growing" roadmap
│   │   ├── Navbar.tsx               # Sticky blurred glass navbar & active spy
│   │   ├── ProjectModal.tsx         # Modal explaining placeholder customization
│   │   ├── Projects.tsx             # "Things I've Built" showcase & demo tags
│   │   ├── ScrollProgress.tsx       # Top scroll percentage progress bar
│   │   └── Skills.tsx               # "My Technical Arsenal" & Exploring radar
│   ├── data/
│   │   └── portfolioData.ts         # ⚡ Centralized data file for easy updates
│   ├── types/
│   │   └── portfolio.ts             # TypeScript definitions and data interfaces
│   ├── App.tsx                      # Root component
│   ├── index.css                    # Tailwind directives & glassmorphism utilities
│   └── main.tsx                     # React DOM entry point
├── index.html                       # HTML5 entry with SEO, OpenGraph & AS favicon
├── package.json                     # Scripts and dependencies
├── postcss.config.js                # PostCSS configuration
├── tailwind.config.js               # Theme extensions & custom palettes
├── tsconfig.json                    # TypeScript compiler options
└── vite.config.ts                   # Vite bundler configuration
```

---

## 💻 How to Run Locally

### 1. Prerequisites
Ensure you have **Node.js (v18+)** installed.

### 2. Navigate to the Directory
```bash
cd "C:\Users\Vedant's Laptop\.gemini\antigravity\scratch\aditya-portfolio"
```

### 3. Install Dependencies (if not already installed)
```bash
npm install
```

### 4. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3001](http://localhost:3001) in your browser.

### 5. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in `dist/`.

### 6. Preview Production Build
```bash
npm run preview
```

---

## ✏️ How to Customize Your Portfolio

All data on the website is completely decoupled from UI code and stored in:
👉 `src/data/portfolioData.ts`

### 1. Adding Real Projects
In `src/data/portfolioData.ts`, find `projectsData` and update or add new projects:
```typescript
{
  id: "my-real-project",
  title: "Your Project Title",
  category: "C++ / Programming",
  shortDescription: "A concise summary of what it does.",
  fullDescription: "Detailed technical architecture and problem solved.",
  tags: ["C++", "STL", "CMake"],
  isDemo: false, // Set to false for completed projects
  statusBadge: "COMPLETED",
  githubUrl: "https://github.com/aditya-salve/your-repo",
  liveUrl: "https://your-demo-url.com",
  ...
}
```

### 2. Updating Skills
In `skillsData`, you can adjust skill levels between `'Beginner'` and `'Intermediate'`, update percentage milestone indicators, or add new technologies.

### 3. Adding New Certificates
In `certificationsData`, append your certificate object. Place certificate image files in `public/assets/` and link them directly as `./assets/your-cert.png`.

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub (`github.com/aditya-salve/portfolio`).
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Keep the default settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Your portfolio will be live on a fast global CDN with automated HTTPS!

### Deploy to Netlify
1. Log in to [Netlify](https://www.netlify.com).
2. Click **"Add new site"** ➔ **"Import an existing project"**.
3. Connect your GitHub repository.
4. Set:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **Deploy Site**.

### Deploy to GitHub Pages
1. In `vite.config.ts`, ensure `base: './'` is set (already configured!).
2. Run `npm run build`.
3. Push the `dist` folder to your `gh-pages` branch or configure GitHub Actions.

---

## 📬 Contact Form Backend Integration

The contact form is currently equipped with active client-side validation and opens the user's email client directly with pre-filled fields via `mailto:` so no message is lost.

To connect a serverless backend service in the future:
- **Formspree**: Create a form at [formspree.io](https://formspree.io) and replace the form submission endpoint in `src/components/Contact.tsx`.
- **EmailJS**: Install `@emailjs/browser` and add your service/template ID.
- **Resend**: Create an API route in Next.js or a Vercel serverless function with [Resend](https://resend.com).

---

© 2026 Aditya Rajendra Salve. Designed & Built with curiosity.
