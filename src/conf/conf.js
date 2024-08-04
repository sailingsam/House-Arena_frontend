const conf = {
    appwriteUrl: String(process.env.APPWRITE_URL),
    appwriteProjectId: String(process.env.APPWRITE_PROJECT_ID),
    appwriteDatabase: String(process.env.APPWRITE_DATABASE),
    appwriteCollectionEventsAndPoints: String(process.env.APPWRITE_COLLECTION_EVENTSANDPOINTS),
    appwriteBucketEventImages: String(process.env.APPWRITE_BUCKET_EVENT_IMAGES),
}

export default conf;