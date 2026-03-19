import type { ReactNode } from "react";

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
      {children}
    </span>
  );
}

function SectionTitle({
  kicker,
  title,
  description,
}: {
  kicker?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      {kicker ? (
        <div className="text-sm font-semibold text-zinc-600 dark:text-zinc-300">
          {kicker}
        </div>
      ) : null}
      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-300">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function Home() {
  const name = "Laxmi Sathvika Bhupathi";
  const role = "Aspiring AI Engineer";
  const phone = "+91 9059449457";
  const email = "sathvikabhupathi33@gmail.com";
  const location = "Mahabubabad, Telangana, India";

  // TODO: Replace these with your actual profile URLs.
  const linkedinUrl = "https://www.linkedin.com/";
  const githubUrl = "https://github.com/";

  const summary =
    "Results-driven Computer Science student specializing in Artificial Intelligence and Machine Learning with hands-on experience building deep learning models and scalable full-stack applications. Developed AI systems achieving 92% accuracy and engineered backends supporting 150+ users with measurable performance improvements.";

  const projects = [
    {
      title: "ViT-ResNet Fusion",
      subtitle: "Medical Image Classification",
      dates: "Dec 2025 - Feb 2026",
      description:
        "Hybrid CNN + Transformer model for multi-class medical image classification with explainable AI.",
      bullets: [
        "Achieved 92% classification accuracy on a multi-class medical image dataset.",
        "Processed/optimized 5,000+ images using CLAHE and MixUp; reduced overfitting by 15%.",
        "Reduced training time by 25% via GPU acceleration and a tuned data pipeline.",
        "Added Explainable AI using Grad-CAM to improve interpretability.",
        "Used hyperparameter tuning (grid search + learning rate scheduling) to improve convergence.",
      ],
      tech: ["Python", "PyTorch", "ResNet-50", "ViT-Base", "NumPy", "Pandas", "Grad-CAM"],
    },
    {
      title: "Event Management Portal",
      subtitle: "Full Stack Web Application",
      dates: "May 2025 - Jun 2025",
      description:
        "Role-based event system with secure authentication and CRUD APIs backed by SQLite.",
      bullets: [
        "Built role-based features supporting 150+ active users with secure authentication and CRUD.",
        "Integrated a 2GB SQLite database; improved query response time by ~20%.",
        "Automated email notifications, reducing manual workload by 30%.",
        "Designed modular backend architecture for scalability and maintainability.",
        "Prevented SQL injection + unauthorized access with validation and security checks.",
      ],
      tech: ["Node.js", "Express.js", "SQLite", "REST APIs"],
    },
  ];

  const certifications = [
    { title: "Introduction to Modern AI", org: "Cisco Networking Academy", date: "2025" },
    { title: "Introduction to Generative AI", org: "Google Cloud", date: "2025" },
    { title: "AI: Analyze Customer Reviews", org: "Cisco (Hands-on Project)", date: "2025" },
  ];

  const coursework = [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Data Structures",
    "Algorithms",
    "Probability and Statistics",
    "Linear Algebra",
    "Data Mining",
    "Natural Language Processing",
  ];

  const skills = {
    languages: ["Java", "Python", "C"],
    coreCS: ["Data Structures", "Algorithms", "OOP", "Operating Systems", "Computer Networks", "DBMS"],
    web: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js"],
    databases: ["SQL", "SQLite", "MySQL"],
    tools: ["Git", "GitHub", "VS Code"],
  };

  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 rounded-md bg-zinc-900 px-4 py-2 text-white"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-zinc-50/80 backdrop-blur dark:border-zinc-800/70 dark:bg-black/70">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-200 font-semibold text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
              LS
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">{name}</div>
              <div className="text-xs text-zinc-600 dark:text-zinc-300">{role}</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium sm:flex">
            <a className="hover:text-zinc-700 dark:hover:text-zinc-200" href="#about">
              About
            </a>
            <a className="hover:text-zinc-700 dark:hover:text-zinc-200" href="#skills">
              Skills
            </a>
            <a className="hover:text-zinc-700 dark:hover:text-zinc-200" href="#projects">
              Projects
            </a>
            <a className="hover:text-zinc-700 dark:hover:text-zinc-200" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="main" className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <section className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Available for internships / opportunities
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              {role} <span className="text-zinc-600 dark:text-zinc-300">building AI + full-stack systems</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-200">
              {summary}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-5 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
                href="#projects"
              >
                View Projects
              </a>
              <a
                className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200 bg-white px-5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
                href={`mailto:${email}?subject=Portfolio%20Inquiry`}
              >
                Email Me
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-zinc-700 dark:text-zinc-200">
              <div>
                <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Phone</div>
                <a className="font-semibold hover:underline" href={`tel:${phone}`}>{phone}</a>
              </div>
              <div>
                <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Location</div>
                <div className="font-semibold">{location}</div>
              </div>
              <div>
                <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Links</div>
                <div className="flex gap-3">
                  <a className="font-semibold hover:underline" href={linkedinUrl} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                  <a className="font-semibold hover:underline" href={githubUrl} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800">
              <SectionTitle
                kicker="At a glance"
                title="What I’m working on"
                description="AI systems, medical ML, and scalable web backends."
              />
              <div className="flex flex-wrap gap-2">
                <Chip>Deep Learning</Chip>
                <Chip>Medical Imaging</Chip>
                <Chip>PyTorch</Chip>
                <Chip>Explainable AI</Chip>
                <Chip>REST APIs</Chip>
                <Chip>SQLite</Chip>
              </div>
              <div className="mt-6 text-sm text-zinc-700 dark:text-zinc-200">
                Currently focused on model optimization, data pipelines, and building production-ready backends.
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mt-16">
          <SectionTitle
            kicker="About"
            title="Education & certifications"
            description="A strong academic foundation in AI/ML plus hands-on learning."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800">
              <h3 className="text-lg font-semibold">B.Tech in Computer Science & Engineering (AI & ML)</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                Sumathi Reddy Institute of Technology for Women, Warangal, India
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-700 dark:text-zinc-200">
                Graduating May 2027 • CGPA: 8.0
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {coursework.map((c) => (
                  <Chip key={c}>{c}</Chip>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800">
              <h3 className="text-lg font-semibold">Certifications</h3>
              <div className="mt-4 space-y-4">
                {certifications.map((cert) => (
                  <div key={cert.title} className="border-b border-zinc-200 pb-4 last:border-b-0 dark:border-zinc-800">
                    <div className="text-sm font-semibold">{cert.title}</div>
                    <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                      {cert.org} • {cert.date}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
                These focused programs reinforced practical concepts in modern AI and generative AI.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="mt-16">
          <SectionTitle
            kicker="Skills"
            title="Tools I use to build"
            description="Languages, core CS, web development, databases, and productivity tools."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800">
              <h3 className="text-lg font-semibold">Programming Languages</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.languages.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800">
              <h3 className="text-lg font-semibold">Web Development</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.web.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800">
              <h3 className="text-lg font-semibold">Core CS</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.coreCS.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800">
              <h3 className="text-lg font-semibold">Databases & Tools</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {[...skills.databases, ...skills.tools].map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mt-16">
          <SectionTitle
            kicker="Projects"
            title="Selected work"
            description="Medical image classification and full-stack systems with measurable outcomes."
          />

          <div className="grid gap-6">
            {projects.map((p) => (
              <article
                key={p.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{p.subtitle}</div>
                  </div>
                  <div className="text-sm font-medium text-zinc-700 dark:text-zinc-200">{p.dates}</div>
                </div>
                <p className="mt-4 text-zinc-700 dark:text-zinc-200">{p.description}</p>

                <div className="mt-5 grid gap-6 lg:grid-cols-12">
                  <div className="lg:col-span-7">
                    <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-200">
                      {p.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:col-span-5">
                    <div className="flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <Chip key={t}>{t}</Chip>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-16 pb-10">
          <SectionTitle
            kicker="Contact"
            title="Let’s connect"
            description="Open to opportunities and collaborations."
          />

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-medium text-zinc-600 dark:text-zinc-300">Email</div>
                <a className="mt-1 block text-lg font-semibold hover:underline" href={`mailto:${email}?subject=Portfolio%20Inquiry`}>
                  {email}
                </a>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{phone} • {location}</div>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-5 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
                  href={`mailto:${email}?subject=Portfolio%20Inquiry`}
                >
                  Send Email
                </a>
                <a
                  className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200 bg-white px-5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200 bg-white px-5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200/70 bg-zinc-50/80 py-8 dark:border-zinc-800/70 dark:bg-black/70">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 text-sm text-zinc-600 dark:text-zinc-300 sm:flex-row sm:items-center sm:justify-between">
          <div>© {year} {name}. All rights reserved.</div>
          <div className="flex gap-4">
            <a className="hover:underline" href="#projects">
              Projects
            </a>
            <a className="hover:underline" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
