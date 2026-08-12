import Reveal from './Reveal.jsx'

function SectionHeading({ eyebrow, title, lead, align = 'center', light = false }) {
  const alignClass =
    align === 'left' ? 'items-start text-left' : 'items-center text-center'
  return (
    <Reveal className={`flex flex-col gap-4 ${alignClass}`}>
      <span
        className={`inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] ${
          light ? 'text-accent-300' : 'text-accent-600'
        }`}
      >
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-accent-400" />
        {eyebrow}
        {align === 'center' && <span className="h-px w-8 bg-gradient-to-l from-transparent to-accent-400" />}
      </span>
      <h2
        className={`max-w-3xl text-3xl font-extrabold leading-[1.12] tracking-tight md:text-[2.75rem] ${
          light ? 'text-white' : 'text-ink-900'
        }`}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={`max-w-2xl text-base leading-relaxed md:text-lg ${
            light ? 'text-primary-100/80' : 'text-ink-500'
          }`}
        >
          {lead}
        </p>
      ) : null}
    </Reveal>
  )
}

export default SectionHeading