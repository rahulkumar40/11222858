import React, { useState } from 'react'
import axios from 'axios'
import Renderer from './Renderer'
import LandingPage from './LandingPage'

export default function App(){
  const [loading, setLoading] = useState(false)
  const [json, setJson] = useState(null)
  const [title, setTitle] = useState('Awesome Product')
  const [desc, setDesc] = useState('AI-generated landing pages in seconds')
  const [tone, setTone] = useState('professional')
  const [useMock, setUseMock] = useState(true)
  const [error, setError] = useState(null)

  const API_BASE = import.meta.env.VITE_API_BASE || ''

  async function generate(){
    setLoading(true)
    setError(null)
    try{
      if (useMock) {
        const resp = await axios.get('/mock-response.json')
        setJson(resp.data)
        return
      }

      const payload = { type: 'hero', title, description: desc, tone }
      const resp = await axios.post(`${API_BASE}/api/generate`, payload, { headers: { Accept: 'application/json' }, timeout: 20000 })

      if (resp.status !== 200) throw new Error(`Bad status code: ${resp.status}`)
      if (!resp.data?.ok) throw new Error(resp.data?.error || 'Unknown error from backend')

      setJson(resp.data.output)
    }catch(e){
      console.error(e)
      setError(e.message || String(e))
      alert('Request failed: ' + (e.message || String(e)))
    }finally{ setLoading(false) }
  }

  function downloadHTML(){
    if(!json) return alert('Generate first')
    const html = `<!doctype html><html><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><link href=\"https://cdn.jsdelivr.net/npm/tailwindcss@^3/dist/tailwind.min.css\" rel=\"stylesheet\"></head><body>${renderToStaticHtml(json)}</body></html>`
    const blob = new Blob([html], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url; a.download = 'landing.html'; a.click()
    URL.revokeObjectURL(url)
  }

  function renderToStaticHtml(json){
    try{
      const comps = json.components || []
      return comps.map(c => {
        if(c.type === 'hero') return `<section class=\\\"p-12\\\"><h1 class=\\\"text-3xl font-bold\\\">${escapeHtml(c.props.headline || '')}</h1><p>${escapeHtml(c.props.subheadline || '')}</p></section>`
        if(c.type === 'navbar') return `<nav class=\\\"p-4\\\">${escapeHtml(c.props.brand||'')}</nav>`
        return `<pre>${escapeHtml(JSON.stringify(c))}</pre>`
      }).join('\n')
    }catch(e){ return '<div>Render error</div>' }
  }

  function escapeHtml(str){
    return String(str).replaceAll('&', '&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'","&#39;")
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">AI Landing Page Generator</h2>
        <div className="bg-white p-4 rounded shadow mb-6">
          <label className="block mb-2">Title</label>
          <input value={title} onChange={e=>setTitle(e.target.value)} className="w-full mb-3 p-2 border rounded" />
          <label className="block mb-2">Description</label>
          <input value={desc} onChange={e=>setDesc(e.target.value)} className="w-full mb-3 p-2 border rounded" />
          <label className="block mb-2">Tone</label>
          <select value={tone} onChange={e=>setTone(e.target.value)} className="mb-3 p-2 border rounded">
            <option>professional</option>
            <option>friendly</option>
            <option>playful</option>
          </select>

          <label className="inline-flex items-center gap-2 mr-4"><input type="checkbox" checked={useMock} onChange={e=>setUseMock(e.target.checked)} /> Use Mock (no backend)</label>

          <div className="flex gap-2 mt-3">
            <button onClick={generate} className="px-4 py-2 bg-blue-600 text-white rounded" disabled={loading}>{loading? 'Generating...' : 'Generate'}</button>
            <button onClick={downloadHTML} className="px-4 py-2 bg-gray-800 text-white rounded">Download HTML</button>
          </div>
          {error && <div className="text-red-600 mt-3">Error: {error}</div>}
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-3">Preview</h3>
          {json ? <Renderer json={json} /> : <div className="text-sm text-gray-500">No preview yet — click Generate.</div>}
        </div>
      </div>
      <LandingPage/>
    </div>
    
  )
}