const conf = {
    appwriteUrl: String(process.env.APPWRITE_URL),
    appwriteProjectId: String(process.env.APPWRITE_PROJECT_ID),
    appwriteDatabseId: String(process.env.APPWRITE_DATABASE_ID),
    appwriteCollectionIdEventsAndPoints: String(process.env.APPWRITE_COLLECTION_ID_eventsandpoints),
    appwriteBucketIdEventImage: String(process.env.APPWRITE_BUCKET_ID_eventimage)
}

export default conf;