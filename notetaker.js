const fs = new Filer.FileSystem();
const filePath = '/notepad/notefile'
const checkDirectory = () => {
    fs.stat('/notepad', (err, stats) => {
        if (err){
            console.log("Directory error: "+err);
            fs.mkdir('/notepad', err => { console.log('Unable to create directory. error: ' + err); })
        }
        if (stats.type === "DIRECTORY") {
            return
        }else{
            console.log("RIP")
        }
    })
}
function takeNotes(){
    checkDirectory();
    fs.readFile(filePath,'utf8',(err,data)=>{
        if (err)
            console.log('What the figgle bottle!')
        $('#notes').text(data);
    })

}
window.setInterval(()=>{
    var data = $('#notes').text();
    fs.writeFile(filePath,data,err=>{if(err) console.log("Couldn't write to file");})
},5000)
window.addEventListener('DOMContentLoaded',takeNotes);