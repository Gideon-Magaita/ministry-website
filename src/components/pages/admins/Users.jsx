import { useState } from 'react'

const initialUsers = [
  ['1','John Administrator','john@maji.go.tz','Super Admin','Active'],
  ['2','Asha Content Manager','asha@maji.go.tz','Content Manager','Active'],
  ['3','Peter Editor','peter@maji.go.tz','Editor','Active'],
  ['4','Grace Viewer','grace@maji.go.tz','Viewer','Inactive'],
]

export default function Users() {
  const [users,setUsers]=useState(initialUsers)
  const [query,setQuery]=useState('')
  const filtered=users.filter(u=>u.slice(1,4).join(' ').toLowerCase().includes(query.toLowerCase()))
  const remove=(id)=>setUsers(users.filter(u=>u[0]!==id))
  return (
    <>
      <div className="admin-page-heading"><div><div className="small text-uppercase fw-bold text-primary">Administration</div><h2>Users & Roles</h2><p>Manage administrators and access permissions.</p></div><button className="btn btn-primary"><i className="bi bi-person-plus me-2" />Add User</button></div>
      <div className="admin-card">
        <div className="toolbar"><div className="input-group search-input"><span className="input-group-text bg-white"><i className="bi bi-search" /></span><input value={query} onChange={e=>setQuery(e.target.value)} className="form-control border-start-0" placeholder="Search users..." /></div><select className="form-select filter-select"><option>All roles</option><option>Admin</option><option>Editor</option><option>Viewer</option></select></div>
        <div className="table-responsive"><table className="table admin-table align-middle mb-0"><thead><tr><th>User</th><th>Email</th><th>Role</th><th>Status</th><th className="text-end">Actions</th></tr></thead><tbody>{filtered.map(u=><tr key={u[0]}><td><div className="user-cell"><div className="avatar">{u[1][0]}</div><strong>{u[1]}</strong></div></td><td>{u[2]}</td><td><span className="role-badge">{u[3]}</span></td><td><span className={`status-badge ${u[4].toLowerCase()}`}>{u[4]}</span></td><td className="text-end"><button className="btn btn-sm btn-light me-1"><i className="bi bi-pencil" /></button><button className="btn btn-sm btn-light text-danger" onClick={()=>remove(u[0])}><i className="bi bi-trash" /></button></td></tr>)}</tbody></table></div>
      </div>
    </>
  )
}
