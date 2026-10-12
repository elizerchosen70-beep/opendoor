export function assertPaymentsConfigured(){if(!process.env.PAYSTACK_SECRET_KEY)throw Object.assign(new Error('Giving is not configured.'),{status:503})}
