export default function Field({ label, htmlFor, children }) {
  return (
    <div className="mb-4">
      <label htmlFor={htmlFor} className="block text-[11px] tracking-wide text-white/50 mb-1.5">
        {label}
      </label>
      {children}
    </div>
  )
}

export const inputClass =
  'w-full rounded-sm px-3 py-2.5 text-sm outline-none'
export const runButtonClass =
  'btn-slide inline-flex items-center justify-center gap-2 rounded-sm bg-matrix px-5 py-2.5 text-xs font-semibold text-terminal-black disabled:opacity-40 disabled:cursor-not-allowed'
