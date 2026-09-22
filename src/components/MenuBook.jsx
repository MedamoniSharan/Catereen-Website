import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import catalog from '../menuCatalog.json';
import MenuPdfPreview from './MenuPdfPreview';

export default function MenuBook({ kind = 'veg' }) {
  const [q, setQ] = useState('');
  const categories = kind === 'nonveg' ? catalog.nonveg : catalog.veg;
  const pdf = kind === 'nonveg' ? catalog.pdfs.nonveg : catalog.pdfs.veg;
  const pdfTitle = kind === 'nonveg' ? 'Non-vegetarian menu book' : 'Vegetarian menu book';
  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return categories;
    return categories
      .map((cat) => ({
        ...cat,
        items: cat.items.filter((item) => item.toLowerCase().includes(needle) || cat.title.toLowerCase().includes(needle))
      }))
      .filter((cat) => cat.items.length);
  }, [categories, q]);

  return (
    <div className="menu-book">
      <MenuPdfPreview src={pdf} title={pdfTitle} />

      <div className="menu-toolbar">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={`Search ${kind === 'nonveg' ? 'non-veg' : 'veg'} dishes`}
          aria-label="Search menu"
        />
        <Link className="btn btn-maroon" to={kind === 'nonveg' ? '/menu/veg' : '/menu/non-veg'}>
          {kind === 'nonveg' ? 'View veg menu' : 'View non-veg menu'}
        </Link>
      </div>
      {kind === 'veg' && !q ? (
        <div className="grid-3" style={{ marginBottom: 28 }}>
          {catalog.packages.map((pkg) => (
            <article className="menu-block" key={pkg.name}>
              <h3>{pkg.name}</h3>
              <p className="muted" style={{ marginBottom: 12 }}>Choose this many items from the full veg list.</p>
              {pkg.picks.map(([name, count]) => (
                <div className="menu-item" key={name}>
                  <strong>{name}</strong>
                  <span className="kicker">{count}</span>
                </div>
              ))}
              <p className="muted" style={{ marginTop: 12 }}><strong>Included:</strong> {pkg.included.join(', ')}</p>
            </article>
          ))}
        </div>
      ) : null}
      {filtered.map((cat, catIndex) => (
        <div className="menu-block" key={`${kind}-${catIndex}-${cat.title}`}>
          <h3>{cat.title}</h3>
          <p className="muted" style={{ marginBottom: 8 }}>{cat.items.length} dishes</p>
          <div className="menu-columns">
            {cat.items.map((item, itemIndex) => (
              <div className="menu-item" key={`${catIndex}-${itemIndex}-${item}`}><strong>{item}</strong></div>
            ))}
          </div>
        </div>
      ))}
      {!filtered.length ? <p className="muted">No dishes match that search.</p> : null}
    </div>
  );
}
