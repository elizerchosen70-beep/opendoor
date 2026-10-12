export function assertStorageConfigured(){if(!process.env.OBJECT_STORAGE_ENDPOINT)throw Object.assign(new Error('Durable storage is not configured.'),{status:503})}
