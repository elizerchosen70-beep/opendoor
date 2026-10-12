export const storageConfigured=()=>Boolean(process.env.OBJECT_STORAGE_ENDPOINT&&process.env.OBJECT_STORAGE_BUCKET&&process.env.OBJECT_STORAGE_ACCESS_KEY&&process.env.OBJECT_STORAGE_SECRET_KEY);
