

(function () {

  const VISIT_KEY = 'utm_telemetry_visits';

  let visits = parseInt(localStorage.getItem(VISIT_KEY)) || 0;
  visits += 1;
  localStorage.setItem(VISIT_KEY, visits);

  console.log(
    '%c♟ Chess MD Telemetrie',
    'color: #b8973a; font-weight: bold; font-size: 14px;'
  );
  console.log(
    `%cTe afli la vizita numărul ${visits} pe acest site!`,
    'color: #4a4035; font-size: 12px;'
  );

  window.addEventListener('DOMContentLoaded', function () {
    const badge = document.getElementById('visitBadge');
    if (badge) {
      badge.textContent = `Vizita #${visits}`;
      // Show after 1.5s
      setTimeout(function () {
        badge.classList.add('visit-badge--visible');
        // Hide after 5s
        setTimeout(function () {
          badge.classList.remove('visit-badge--visible');
        }, 5000);
      }, 1500);
    }
  });

  const SESSION_KEY = 'utm_session_start';

  if (!sessionStorage.getItem(SESSION_KEY)) {
    const startTime = new Date().toISOString();
    sessionStorage.setItem(SESSION_KEY, startTime);
    console.log(
      `%cSesiune nouă începută la: ${new Date().toLocaleTimeString('ro-RO')}`,
      'color: #27ae60; font-size: 12px;'
    );
  } else {
    const startTime   = new Date(sessionStorage.getItem(SESSION_KEY));
    const now         = new Date();
    const diffSeconds = Math.floor((now - startTime) / 1000);
    const minutes     = Math.floor(diffSeconds / 60);
    const seconds     = diffSeconds % 60;
    console.log(
      `%cSesiune activă — durată: ${minutes}m ${seconds}s`,
      'color: #2980b9; font-size: 12px;'
    );
  }

  // ── 3. Statistici generale în consolă ──
  console.log(
    `%cTotal vizite înregistrate: ${visits}`,
    'color: #8e44ad; font-size: 12px;'
  );

})();