// Configure a vetted CSRF-token strategy before using cookie-based browser sessions.
export const csrfConfigurationNotice=(req,res,next)=>next();
