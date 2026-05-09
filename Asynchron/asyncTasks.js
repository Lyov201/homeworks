function downloadFile() {

    setTimeout(() => {
        console.log("File is loading:")
    }, 3000);

}
function resizeImage() {

    setTimeout(() => {
        console.log("Resizing image:");

    },5000);
}

function uploadFile() {

    setTimeout(() => {
        console.log("file is uploading")
    }, 7000);

}

function queue() {
    return new Promise((resolve)=> {
        resolve();
    })
}

queue()
.then(downloadFile)
.then(resizeImage)
.then(uploadFile)