class StorageProvider {
    constructor() {
        if(new.target === StorageProvider) {
            throw new Error("This is Interface class");
        }
    }

    upload(file) {
        throw new Error("Abstarct method");
    }

    download(filename) {
        throw new Error("Abstract method");
    }
}

class LocalStorageProvider extends StorageProvider {
    constructor() {
        super();
    }

    upload(file) {
        return `File uploaded successfully in local storage`;    
    }

    download(filename) {
        return `File downloaded successfully from local storage`
    }
}

class CloudStorageProvider extends StorageProvider {
    constructor() {
        super();
    }
    upload(file) {
        return `File uploaded successfully in cloud`;    
    }

    download(filename) {
        return `File downloaded successfully from cloud`
    }
}

 function useStorage(provider) {   
        if(typeof provider.upload === "function" && typeof provider.download === "function"){
            console.log("Works");
            return;
    } 
    throw new Error("Invalid storage provider");
 }

 useStorage(new LocalStorageProvider());
useStorage({});