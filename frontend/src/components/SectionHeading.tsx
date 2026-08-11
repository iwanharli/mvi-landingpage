import Reveal from './Reveal'

type Props = {
  light?: string
  bold: string
  desc?: string
  invert?: boolean
  align?: 'left' | 'center'
}

export default function SectionHeading({
  light,
  bold,
  desc,
  invert = false,
  align = 'center',
}: Props) {
  return (
    <Reveal>
      <div className={align === 'center' ? 'text-center' : 'text-left'}>
        <h2 className={`text-2xl font-bold sm:text-3xl ${invert ? 'text-white' : 'text-navy'}`}>
          {light && <span className="font-light">{light} </span>}
          {bold}
        </h2>
        <div
          className={`mt-5 h-1 w-14 rounded-full bg-teal ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        />
        {desc && (
          <p
            className={`mx-auto mt-5 max-w-2xl text-sm leading-relaxed sm:text-base ${
              invert ? 'text-navy-100' : 'text-navy/70'
            } ${align === 'left' ? 'ml-0' : ''}`}
          >
            {desc}
          </p>
        )}
      </div>
    </Reveal>
  )
}
