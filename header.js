export function markCurrentPage(){document.querySelectorAll('nav a[data-page]').forEach(a=>{if(a.dataset.page===location.pathname)a.setAttribute('aria-current','page')})}
