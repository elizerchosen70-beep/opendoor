export function notify(message,kind='info'){window.dispatchEvent(new CustomEvent('church:notification',{detail:{message,kind}}))}
