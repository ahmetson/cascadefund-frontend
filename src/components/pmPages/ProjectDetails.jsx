import { useState, useEffect } from 'react'
import { navigate } from "astro:transitions/client";

function ProjectDetails({id}) {
  const [project, setProject] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState({})

  useEffect(() => {
    const savedProjects = JSON.parse(localStorage.getItem('cascadeProjects') || '[]')
    const foundProject = savedProjects.find(p => p.id === id)
    if (foundProject) {
      setProject(foundProject)
      setEditData(foundProject)
    } else {
      navigate('/project')
    }
  }, [id, navigate])

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setEditData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSave = () => {
    const savedProjects = JSON.parse(localStorage.getItem('cascadeProjects') || '[]')
    const updatedProjects = savedProjects.map(p => 
      p.id === id ? { ...editData, updatedAt: new Date().toISOString() } : p
    )
    localStorage.setItem('cascadeProjects', JSON.stringify(updatedProjects))
    setProject(editData)
    setIsEditing(false)
  }

  const updateStatus = (newStatus) => {
    const updatedProject = { ...project, status: newStatus }
    const savedProjects = JSON.parse(localStorage.getItem('cascadeProjects') || '[]')
    const updatedProjects = savedProjects.map(p => 
      p.id === id ? updatedProject : p
    )
    localStorage.setItem('cascadeProjects', JSON.stringify(updatedProjects))
    setProject(updatedProject)
    setEditData(updatedProject)
  }

  if (!project) {
    return <div className="container">Loading...</div>
  }

  return (
    <div className="container">
      <a href="/project" className="back-link">
        ← Back to projects
      </a>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
            <div>
              <h1 style={{ fontSize: '28px', fontWeight: '600', color: '#2D3748', marginBottom: '8px' }}>
                {project.name}
              </h1>
              <span className={`status-badge status-${project.status}`}>
                {project.status}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button 
                onClick={() => setIsEditing(!isEditing)}
                className="btn btn-secondary"
              >
                {isEditing ? 'Cancel' : 'Edit'}
              </button>
              {isEditing && (
                <button onClick={handleSave} className="btn btn-primary">
                  Save Changes
                </button>
              )}
            </div>
          </div>

          {isEditing ? (
            <div>
              <div className="form-group">
                <label className="form-label">Project Name</label>
                <input
                  type="text"
                  name="name"
                  value={editData.name}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Source URL</label>
                <input
                  type="url"
                  name="sourceUrl"
                  value={editData.sourceUrl}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Description</label>
                <textarea
                  name="description"
                  value={editData.description}
                  onChange={handleInputChange}
                  className="form-input form-textarea"
                />
              </div>

              <div className="checkbox-group">
                <input
                  type="checkbox"
                  name="isLibrary"
                  checked={editData.isLibrary}
                  onChange={handleInputChange}
                  className="checkbox"
                />
                <label>Is it a library?</label>
              </div>

              <div className="form-group">
                <label className="form-label">Notes</label>
                <textarea
                  name="notes"
                  value={editData.notes}
                  onChange={handleInputChange}
                  className="form-input form-textarea"
                />
              </div>
            </div>
          ) : (
            <div>
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ color: '#2D3748', marginBottom: '8px' }}>Description</h3>
                <p style={{ color: '#4A5568', lineHeight: '1.6' }}>
                  {project.description || 'No description provided'}
                </p>
              </div>

              {project.sourceUrl && (
                <div style={{ marginBottom: '24px' }}>
                  <h3 style={{ color: '#2D3748', marginBottom: '8px' }}>Source URL</h3>
                  <a 
                    href={project.sourceUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#6B9EFF', wordBreak: 'break-all' }}
                  >
                    {project.sourceUrl}
                  </a>
                </div>
              )}

              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ color: '#2D3748', marginBottom: '8px' }}>Project Type</h3>
                <p style={{ color: '#4A5568' }}>
                  {project.isLibrary ? 'Library (can be used as dependency)' : 'Application'}
                </p>
              </div>

              {project.notes && (
                <div style={{ marginBottom: '24px' }}>
                  <h3 style={{ color: '#2D3748', marginBottom: '8px' }}>Notes</h3>
                  <p style={{ color: '#4A5568', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>
                    {project.notes}
                  </p>
                </div>
              )}

              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ color: '#2D3748', marginBottom: '8px' }}>Created</h3>
                <p style={{ color: '#4A5568' }}>
                  {new Date(project.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          )}

          <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: '24px', marginTop: '24px' }}>
            <h3 style={{ color: '#2D3748', marginBottom: '16px' }}>Update Status</h3>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <button 
                onClick={() => updateStatus('pending')}
                className={`btn ${project.status === 'pending' ? 'btn-primary' : 'btn-secondary'}`}
                style={{ fontSize: '14px', padding: '8px 16px' }}
              >
                Pending
              </button>
              <button 
                onClick={() => updateStatus('active')}
                className={`btn ${project.status === 'active' ? 'btn-primary' : 'btn-secondary'}`}
                style={{ fontSize: '14px', padding: '8px 16px' }}
              >
                Active
              </button>
              <button 
                onClick={() => updateStatus('completed')}
                className={`btn ${project.status === 'completed' ? 'btn-primary' : 'btn-secondary'}`}
                style={{ fontSize: '14px', padding: '8px 16px' }}
              >
                Completed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
