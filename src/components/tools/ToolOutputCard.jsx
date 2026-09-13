import { useState } from 'react'
import { Copy, RotateCcw, Check } from 'lucide-react'

export default function ToolOutputCard({ title = 'OUTPUT_READY', content, onReset, emptyLabel = 'Aún no hay resultado. Completa el formulario y pulsa "Generate".' }) {
  const [copied, setCopied] = useState(false)

  const plainText = Array.isArray(content) ? content.join('\n') : content

  const handleCopy = async () => {
    if (!plainText) return
    try {
      await navigator.clipboard.writeText(plainText)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="rounded-sm border border-matrix/20 bg-terminal-black">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5">
        <span className="text-[10px] tracking-widest text-matrix">{title}</span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopy}
            disabled={!plainText}
            className="flex items-center gap-1 text-[11px] text-white/50 hover:text-matrix disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            {copied ? <Check size={12} className="text-matrix" /> : <Copy size={12} />}
            {copied ? 'Copiado' : 'Copy'}
          </button>
          <button
            type="button"
            onClick={onReset}
            className="flex items-center gap-1 text-[11px] text-white/50 hover:text-matrix transition-colors"
          >
            <RotateCcw size={12} />
            Reset
          </button>
        </div>
      </div>
      <div className="p-4 min-h-[120px] font-code text-xs md:text-sm text-white/80 leading-relaxed whitespace-pre-wrap">
        {plainText ? plainText : <span className="text-white/25">{emptyLabel}</span>}
      </div>
    </div>
  )
}
