const fs = new Filer.FileSystem();
const filePath = '/notefile'
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
    // checkDirectory();
    fs.readFile(filePath,'utf8',(err,data)=>{
        if (err)
            console.log('What the figgle bottle!')
        $('#notes').text(data);
    })

}
const saveFile = () =>{
    var data = $('#notes').text();
    fs.writeFile(filePath,data,err=>{
        if(err) console.log("Couldn't write to file");
    })
    Swal.fire({
        title:'Saved',
        timer: '1500',
        type: 'success',
        showConfirmButton: false
    })
    // $('#save').text('Saved Content');

}
window.addEventListener('DOMContentLoaded',takeNotes);
$('#notes').trumbowyg();
$('#save').click(saveFile)