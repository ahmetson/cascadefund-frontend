import { useState, useEffect } from 'react'

function ProjectList() {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    console.log('loading projects...')
    // Load projects from localStorage
    const savedProjects = localStorage.getItem('cascadeProjects')
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects))
    }
  }, [])

  const deleteProject = (id) => {
    const updatedProjects = projects.filter(project => project.id !== id)
    setProjects(updatedProjects)
    localStorage.setItem('cascadeProjects', JSON.stringify(updatedProjects))
  }

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '600', color: '#2D3748' }}>
          Your Projects
        </h1>
        <a href="/project/add" className="btn btn-primary">
          Add New Project
        </a>
      </div>

      {projects.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', padding: '60px 24px' }}>
          <h3 style={{ color: '#4A5568', marginBottom: '16px' }}>No projects yet</h3>
          <p style={{ color: '#718096', marginBottom: '24px' }}>
            Get started by adding your first project to the Cascade Fund.
          </p>
          <a href="/project/add" className="btn btn-primary">
            Add Your First Project
          </a>
        </div>
      ) : (
        <div className="project-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#2D3748' }}>
                  {project.name || 'Untitled Project'}
                </h3>
                <span className={`status-badge status-${project.status || 'pending'}`}>
                  {project.status || 'pending'}
                </span>
              </div>
              
              <p style={{ color: '#4A5568', marginBottom: '16px', fontSize: '14px' }}>
                {project.description || 'No description provided'}
              </p>
              
              {project.sourceUrl && (
                <p style={{ color: '#6B9EFF', fontSize: '12px', marginBottom: '16px', wordBreak: 'break-all' }}>
                  {project.sourceUrl}
                </p>
              )}
              
              <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
                <a 
                  href={`/project/${project.id}`} 
                  className="btn btn-primary" 
                  style={{ fontSize: '14px', padding: '8px 16px' }}
                >
                  View Details
                </a>
                <button 
                  onClick={() => deleteProject(project.id)}
                  className="btn btn-secondary" 
                  style={{ fontSize: '14px', padding: '8px 16px' }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProjectList
