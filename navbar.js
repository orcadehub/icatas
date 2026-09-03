document.addEventListener('DOMContentLoaded', () => {
  // Render Global Header
  const headerContainer = document.getElementById('global-header');
  if (headerContainer) {
    const activePage = headerContainer.getAttribute('data-active') || '';
    headerContainer.innerHTML = `
    <header class="sticky-top">
      <nav class="navbar navbar-expand-lg navbar-dark navbar-glass py-2">
        <div class="container-fluid px-3 px-md-4">
          <a href="index.html" class="navbar-brand d-flex align-items-center me-3">
            <img src="./images/sse-logo-D5ZBduKC.svg" height="55" alt="SSE Logo" style="max-height: 55px;" />
            <span class="ms-2 me-3 text-white fs-4 fw-bold">
              3rd ICATAS <span style="color: var(--color-gold);">2026</span>
            </span>
            <img src="./images/LEO.png" height="48" alt="Leosphere Logo" class="bg-white p-1 rounded-2 shadow-sm" style="max-height: 48px; object-fit: contain;" />
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto align-items-center gap-1 py-2 py-lg-0">
              <li class="nav-item">
                <a href="Institution.html" class="nav-link nav-link-custom ${activePage === 'about' ? 'active' : ''}">About SSE</a>
              </li>
              <li class="nav-item">
                <a href="callforpapers.html" class="nav-link nav-link-custom ${activePage === 'callforpapers' ? 'active' : ''}">Call For Papers</a>
              </li>
              <li class="nav-item">
                <a href="submissions.html" class="nav-link nav-link-custom ${activePage === 'submissions' ? 'active' : ''}">Submit Paper</a>
              </li>
              <li class="nav-item">
                <a href="publication.html" class="nav-link nav-link-custom ${activePage === 'publication' ? 'active' : ''}">Publication</a>
              </li>
              <li class="nav-item">
                <a href="registration.html" class="nav-link nav-link-custom ${activePage === 'registration' ? 'active' : ''}">Registration</a>
              </li>
              <li class="nav-item">
                <a href="team.html" class="nav-link nav-link-custom ${activePage === 'team' ? 'active' : ''}">Conference Team</a>
              </li>
              <li class="nav-item">
                <a href="dates.html" class="nav-link nav-link-custom ${activePage === 'dates' ? 'active' : ''}">Important Dates</a>
              </li>
              <li class="nav-item">
                <a href="keynotespeakers.html" class="nav-link nav-link-custom ${activePage === 'keynotespeakers' ? 'active' : ''}">Keynote Speakers</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    `;
  }

  // Render Global Footer
  const footerContainer = document.getElementById('global-footer');
  if (footerContainer) {
    footerContainer.innerHTML = `
    <footer class="footer-dark-mega">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-4">
            <div class="d-flex align-items-center mb-3">
              <img src="./images/sse-logo-D5ZBduKC.svg" height="50" alt="SSE Logo" class="me-2" />
              <h4 class="text-white mb-0 fw-bold">3rd ICATAS <span style="color: var(--color-gold);">2026</span></h4>
            </div>
            <p class="text-light opacity-75 small mb-4">
              3rd International Conference on Advances in Technologies and Applications for Sustainability organized by Sanskrithi School of Engineering, Puttaparthi, AP, India.
            </p>
          </div>

          <div class="col-6 col-lg-3">
            <h5>Quick Links</h5>
            <ul class="list-unstyled small space-y-2">
              <li class="mb-2"><a href="Institution.html">About SSE</a></li>
              <li class="mb-2"><a href="callforpapers.html">Call For Papers</a></li>
              <li class="mb-2"><a href="submissions.html">Submit Paper</a></li>
              <li class="mb-2"><a href="publication.html">Publication</a></li>
            </ul>
          </div>

          <div class="col-6 col-lg-3">
            <h5>Conference Info</h5>
            <ul class="list-unstyled small space-y-2">
              <li class="mb-2"><a href="registration.html">Registration Fees</a></li>
              <li class="mb-2"><a href="team.html">Conference Team</a></li>
              <li class="mb-2"><a href="dates.html">Important Dates</a></li>
              <li class="mb-2"><a href="keynotespeakers.html">Keynote Speakers</a></li>
            </ul>
          </div>

          <div class="col-lg-2">
            <h5>Contact</h5>
            <p class="small mb-1 text-slate-300">Email:</p>
            <p class="small fw-bold text-warning mb-2">icatas.sse2026@gmail.com</p>
            <p class="small text-slate-300 mb-0">Puttaparthi, AP, India</p>
          </div>
        </div>
      </div>

      <div class="footer-bottom-bar text-center">
        <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <span>&copy; copyright <strong>3rd ICATAS 2026</strong>, All Rights Reserved</span>
          <div>
            <span class="me-2">Developed By</span>
            <a href="https://www.orcadehub.com/" target="_blank" rel="noopener noreferrer" class="fw-bold text-warning text-decoration-none">
              <img src="./images/log.png" alt="orcade" height="30" class="me-1" /> ORCADEHUB
            </a>
          </div>
        </div>
      </div>
    </footer>
    `;
  }
});
