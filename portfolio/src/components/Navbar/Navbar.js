import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
  <a className="navbar-brand" href="/">Sergio Aguirre</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Contact</a>
      </li>
    </ul>
  </div>
</nav>
        </div>
    )
}

export default Navbar;