export const normaliseBookmark=x=>({sermonId:Number(x.sermonId),note:String(x.note||'').slice(0,500)});
