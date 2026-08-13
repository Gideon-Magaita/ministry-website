const stats = [
  ['Published News','128','+12 this month','bi-newspaper'],
  ['Announcements','24','4 awaiting review','bi-megaphone'],
  ['Active Projects','36','8 near completion','bi-buildings'],
  ['Documents','342','18 uploaded this month','bi-file-earmark-text'],
]

export default function Dashboard() {
  return (
    <>
      <div className="admin-page-heading">
        <div><div className="small text-uppercase fw-bold text-primary">Overview</div><h2>Dashboard</h2><p>Welcome back. Here's what is happening across the ministry website.</p></div>
        <button className="btn btn-primary rounded-2"><i className="bi bi-plus-lg me-2" />Create Content</button>
      </div>

      <div className="row g-3 mb-4">
        {stats.map(([label,value,trend,icon]) => <div className="col-xl-3 col-md-6" key={label}><div className="admin-stat"><div className="admin-stat-icon"><i className={`bi ${icon}`} /></div><div className="admin-stat-label">{label}</div><div className="admin-stat-value">{value}</div><small><i className="bi bi-arrow-up-short text-success" />{trend}</small></div></div>)}
      </div>

      <div className="row g-4">
        <div className="col-xl-8">
          <div className="admin-card">
            <div className="card-header-custom"><div><h3>Content activity</h3><p>Publication activity over the last 6 months</p></div><select className="form-select form-select-sm w-auto"><option>Last 6 months</option></select></div>
            <div className="activity-chart">
              {[42,60,52,78,68,88,72,92,76,96,84,100].map((h,i)=><div className="chart-bar-wrap" key={i}><div className="chart-bar" style={{height:`${h}%`}} /><small>{['Mar','Apr','May','Jun','Jul','Aug'][i%6]}</small></div>)}
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="admin-card h-100">
            <div className="card-header-custom"><div><h3>Content status</h3><p>Current publishing workflow</p></div></div>
            <div className="donut-placeholder"><div><strong>524</strong><small>Total items</small></div></div>
            <div className="status-list"><span><i className="status-dot published" />Published <strong>72%</strong></span><span><i className="status-dot review" />Under review <strong>18%</strong></span><span><i className="status-dot draft" />Draft <strong>10%</strong></span></div>
          </div>
        </div>
      </div>

      <div className="admin-card mt-4">
        <div className="card-header-custom"><div><h3>Recent activity</h3><p>Latest actions performed in the CMS</p></div><a href="#" className="text-primary small fw-semibold">View audit log</a></div>
        <div className="table-responsive">
          <table className="table admin-table align-middle mb-0"><thead><tr><th>Content</th><th>Action</th><th>User</th><th>Date</th><th>Status</th></tr></thead>
          <tbody>
            {[
              ['Water Sector Status Report 2026','Published','Admin','12 Aug 2026','Published'],
              ['Rural Water Access Initiative','Updated project','Editor','11 Aug 2026','Updated'],
              ['Public Notice on Water Services','Submitted for review','Content Manager','10 Aug 2026','Review'],
              ['National Water Policy Guidelines','Uploaded document','Admin','09 Aug 2026','Published'],
            ].map(row=><tr key={row[0]}><td className="fw-semibold">{row[0]}</td><td>{row[1]}</td><td>{row[2]}</td><td className="text-muted">{row[3]}</td><td><span className={`status-badge ${row[4].toLowerCase().replace(' ','-')}`}>{row[4]}</span></td></tr>)}
          </tbody></table>
        </div>
      </div>
    </>
  )
}
