import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

function Layout() {
  // Cuerpo de la función
  return (
    <div>
      <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/issue">New Issue</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  );
}

export default Layout;