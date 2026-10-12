export const bootstrapEnabled=()=>Boolean(process.env.INITIAL_ADMIN_EMAIL&&process.env.INITIAL_ADMIN_PASSWORD); // Never ship default credentials.
