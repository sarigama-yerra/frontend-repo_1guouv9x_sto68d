import { Lightbulb, Users2, Rocket, Target, Brain, BarChart3 } from 'lucide-react'

const skills = [
  {
    title: 'User Research',
    icon: Users2,
    desc: 'I uncover real user needs through interviews, surveys, and usability tests, transforming insights into actionable product decisions.'
  },
  {
    title: 'Product Strategy',
    icon: Target,
    desc: 'I define clear product vision, align teams on outcomes, and build roadmaps that balance impact, feasibility, and business goals.'
  },
  {
    title: 'AI Innovation',
    icon: Brain,
    desc: 'I apply AI thoughtfully—from discovery to delivery—to unlock leverage, streamline workflows, and elevate user experiences.'
  },
  {
    title: 'Product Execution',
    icon: Rocket,
    desc: 'I drive cross-functional execution with clarity—shaping requirements, prioritizing, and delivering measurable results.'
  },
  {
    title: 'Stakeholder Management',
    icon: Lightbulb,
    desc: 'I communicate with empathy and rigor, keeping leadership and teams aligned through context, data, and clear decisions.'
  },
  {
    title: 'Growth and Insight',
    icon: BarChart3,
    desc: 'I analyze funnels, experiments, and feedback loops to find opportunities that compound value for users and the business.'
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-slate-900 max-w-4xl">
          I CREATE IMPACTFUL PRODUCTS THROUGH STRATEGIC THINKING, USER EMPATHY, AND AI-DRIVEN INNOVATION.
        </h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(({ title, icon: Icon, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-4 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                <Icon size={18} />
              </div>
              <h3 className="text-base font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
