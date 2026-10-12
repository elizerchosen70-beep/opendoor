export const queryFromUrl=()=>new URLSearchParams(location.search).get('q')||'';
