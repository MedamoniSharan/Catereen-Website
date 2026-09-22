import { useState } from 'react';

export default function MenuPdfPreview({ src, title, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className="menu-pdf-preview-wrap" aria-label={`${title} PDF`}>
      <div className="menu-pdf-preview__head">
        <h3>{title}</h3>
        <div className="menu-pdf-preview__actions">
          <button type="button" className="btn btn-maroon" onClick={() => setOpen((v) => !v)}>
            {open ? 'Hide preview' : 'Preview PDF'}
          </button>
          <a className="btn btn-gold" href={src} target="_blank" rel="noopener noreferrer">
            Open in tab
          </a>
          <a className="btn btn-maroon" href={src} download>
            Download PDF
          </a>
        </div>
      </div>
      {open ? (
        <div className="menu-pdf-preview">
          <iframe title={`${title} preview`} src={`${src}#view=FitH`} />
        </div>
      ) : null}
    </section>
  );
}
