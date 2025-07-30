import { useState } from 'react'
import { navigate } from "astro:transitions/client";

function AddProject() {
  const [formData, setFormData] = useState({
    name: '',
    sourceUrl: '',
    description: '',
    isLibrary: false,
    notes: ''
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const newProject = {
      id: Date.now().toString(),
      ...formData,
      status: 'pending',
      createdAt: new Date().toISOString()
    }

    // Save to localStorage
    const existingProjects = JSON.parse(localStorage.getItem('cascadeProjects') || '[]')
    const updatedProjects = [...existingProjects, newProject]
    localStorage.setItem('cascadeProjects', JSON.stringify(updatedProjects))

    await navigate('/project/added')
  }

  return (
    <div className="container">
      <a href="/project" className="back-link">
        ← Back to projects
      </a>

      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ 
          fontSize: '32px', 
          fontWeight: '600', 
          color: '#2D3748', 
          textAlign: 'center',
          marginBottom: '40px' 
        }}>
          Add your project
        </h1>

        <form onSubmit={handleSubmit} className="card">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Project Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter project name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="sourceUrl" className="form-label">Source URL:</label>
            <input
              type="url"
              id="sourceUrl"
              name="sourceUrl"
              value={formData.sourceUrl}
              onChange={handleInputChange}
              className="form-input"
              placeholder="https://github.com/your-repo"
            />
            <small style={{ color: '#6B7280', fontSize: '12px' }}>
              For now only GitHub is supported.
            </small>
          </div>

          <div className="checkbox-group">
            <input
              type="checkbox"
              id="isLibrary"
              name="isLibrary"
              checked={formData.isLibrary}
              onChange={handleInputChange}
              className="checkbox"
            />
            <label htmlFor="isLibrary" style={{ color: '#4A5568' }}>
              Is it a library? Check this, if developers can use it as a component. Automatically enables cascading tips.
            </label>
          </div>

          <div style={{ textAlign: 'center', margin: '30px 0' }}>
            <button type="submit" className="btn btn-primary">
              Continue
            </button>
            <div className='text-left'>
            <small style={{ color: '#6B7280', fontSize: '12px' }}>
              Supports only open-source projects.<br/>
              Automatically uses open-source hyperpayment specification.
            </small>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="notes" className="form-label">Notes:</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              className="form-input form-textarea"
              placeholder="Add any additional notes about your project..."
            />
            
          </div>

          <div className="form-group">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="form-input form-textarea"
              placeholder="Describe your project, if left blank, then CascadeFund will use the README..."
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddProject
