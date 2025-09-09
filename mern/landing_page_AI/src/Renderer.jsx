import React from 'react'

export default function Renderer({ json }) {
  if (!json) return null
  const { meta, components } = json

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto p-6">
        {components && components.length ? components.map((c, i) => {
          const type = (c.type || '').toLowerCase();
          const props = c.props || {}

          if (type === 'navbar') {
            return (
              <nav key={i} className="flex items-center justify-between py-4">
                <div className="text-xl font-bold">{props.brand || meta?.title || 'Brand'}</div>
                <div className="space-x-4">{(props.links||[]).map((l, idx)=> (<a key={idx} href="#" className="text-sm">{l}</a>))}</div>
              </nav>
            )
          }

          if (type === 'hero') {
            return (
              <section key={i} className={`grid gap-6 md:grid-cols-2 items-center ${props.bgClass||''}`}>
                <div>
                  <h1 className="text-4xl font-extrabold mb-4">{props.headline}</h1>
                  <p className="mb-6 text-lg">{props.subheadline}</p>
                  <div className="space-x-3">
                    {(props.ctas||[]).map((b, idx)=> (
                      <a key={idx} href="#" aria-label={b.aria} className={`px-5 py-3 rounded-lg font-semibold ${b.style||'bg-blue-600 text-white'}`}>{b.label}</a>
                    ))}
                  </div>
                </div>
                {props.image && (
                  <div>
                    <img src={props.image} alt={props.imageAlt||'Hero image'} className="w-full rounded-lg shadow-lg" />
                  </div>
                )}
              </section>
            )
          }

          if (type === 'features') {
            return (
              <section key={i} className="grid gap-4 md:grid-cols-3 py-8">
                {(props.items||[]).map((f, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-lg shadow-sm">
                    <h4 className="font-semibold">{f.title}</h4>
                    <p className="text-sm mt-2">{f.desc}</p>
                  </div>
                ))}
              </section>
            )
          }

          if (type === 'cta') {
            return (
              <section key={i} className="py-8 text-center">
                <h3 className="text-2xl font-bold mb-3">{props.title}</h3>
                <a href="#" className="px-6 py-3 rounded-lg bg-green-600 text-white font-semibold">{props.button}</a>
              </section>
            )
          }

          return (
            <pre key={i} className="bg-white p-4 rounded">{JSON.stringify(c, null, 2)}</pre>
          )
        }) : <div className="text-sm text-gray-500">No components to show</div>}
      </div>
    </div>
  )
}