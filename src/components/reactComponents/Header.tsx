const Header = ({darkMode: darkPage}: {darkMode: boolean}) => {
  if (!darkPage) {
    return (<header style={{
      background: 'linear-gradient(135deg, #7DD3C0 0%, #6BC5B0 100%)',
      padding: '20px 0',
      marginBottom: '40px'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <a href="/" style={{
            fontSize: '28px',
            fontWeight: '600',
            color: '#2D3748',
            textDecoration: 'none'
          }}>
            Cascade Fund
          </a>
          <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: '#E2E8F0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face" 
              alt="Profile" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </header>)
  }
  
  return (
    
    <header className="bg-amber-800/50 text-white px-6 py-4 header z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-xl font-bold">Cascade Fund</h1>
          {/* <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="hover:text-amber-200 transition-colors">Guide</a>
            <a href="#" className="hover:text-amber-200 transition-colors">Check my balance</a>
          </nav> */}
        </div>
        <div className="flex items-center space-x-4">
          <a href="/project" className="hover:text-amber-200 transition-colors hover:cursor-pointer">My Projects</a>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: '#E2E8F0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face" 
                alt="Profile" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header
