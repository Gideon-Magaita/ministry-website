import { Link } from 'react-router-dom'
import { getAnnouncements, saveStored } from '../../../../data/content'
import { useState } from 'react'

export default function Announcements() {
  const [items, setItems] = useState(getAnnouncements())
  const remove = (id) => { if (!confirm('Delete this announcement?')) return; const next=items.filter(x=>x.id!==id); setItems(next); saveStored('mw_announcements', next) }
  return <><div className="admin-page-heading"><div><div className="eyebrow">CONTENT MANAGEMENT</div><h2>Announcements</h2><p>Manage public notices, circulars and important ministry announcements.</p></div><Link to="/admin/announcements/create" className="btn btn-primary rounded-pill px-4"><i className="bi bi-plus-lg me-2"/>Create Announcement</Link></div><div className="admin-card"><div className="table-responsive"><table className="table admin-table mb-0"><thead><tr><th>Announcement</th><th>Priority</th><th>Date</th><th>Status</th><th className="text-end">Actions</th></tr></thead><tbody>{items.map(x=><tr key={x.id}><td><strong className="text-dark d-block">{x.title}</strong><small className="text-muted">{x.body}</small></td><td><span className={`status-badge ${x.priority==='IMPORTANT'?'updated':'review'}`}>{x.priority}</span></td><td>{x.date}</td><td><span className="status-badge published">Published</span></td><td className="text-end"><Link to={`/admin/announcements/edit/${x.id}`} className="btn btn-sm btn-light me-1"><i className="bi bi-pencil"/></Link><button onClick={()=>remove(x.id)} className="btn btn-sm btn-light text-danger"><i className="bi bi-trash"/></button></td></tr>)}</tbody></table></div></div></>
}
