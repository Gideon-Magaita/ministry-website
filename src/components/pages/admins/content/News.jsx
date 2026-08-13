import { Link } from 'react-router-dom'
import { getNews, saveStored } from '../../../../data/content'
import { useEffect, useState } from 'react'

export default function News() {
  const [items, setItems] = useState(getNews())
  useEffect(() => { const refresh = () => setItems(getNews()); window.addEventListener('content-updated', refresh); return () => window.removeEventListener('content-updated', refresh) }, [])
  const remove = (id) => { if (!window.confirm('Delete this news article?')) return; const next = items.filter(x => x.id !== id); setItems(next); saveStored('mw_news', next) }
  return <>
    <div className="admin-page-heading"><div><div className="eyebrow">CONTENT MANAGEMENT</div><h2>News</h2><p>Create, edit and publish ministry news stories.</p></div><Link to="/admin/news/create" className="btn btn-primary rounded-pill px-4"><i className="bi bi-plus-lg me-2"/>Create News</Link></div>
    <div className="admin-card"><div className="toolbar"><div className="input-group search-input"><span className="input-group-text bg-white"><i className="bi bi-search"/></span><input className="form-control" placeholder="Search news..." /></div><span className="small text-muted align-self-center">{items.length} articles</span></div>
      <div className="table-responsive"><table className="table admin-table mb-0"><thead><tr><th>Article</th><th>Category</th><th>Date</th><th>Status</th><th className="text-end">Actions</th></tr></thead><tbody>{items.map(item => <tr key={item.id}><td><div className="d-flex align-items-center gap-3"><img src={item.image} alt="" style={{width:58,height:42,objectFit:'cover',borderRadius:7}}/><div><strong className="d-block text-dark">{item.title}</strong><small className="text-muted">{item.excerpt?.slice(0,65)}...</small></div></div></td><td><span className="role-badge">{item.category}</span></td><td>{item.date}</td><td><span className="status-badge published">Published</span></td><td className="text-end"><Link to={`/admin/news/edit/${item.id}`} className="btn btn-sm btn-light me-1"><i className="bi bi-pencil"/></Link><button onClick={() => remove(item.id)} className="btn btn-sm btn-light text-danger"><i className="bi bi-trash"/></button></td></tr>)}</tbody></table></div>
    </div>
  </>
}
