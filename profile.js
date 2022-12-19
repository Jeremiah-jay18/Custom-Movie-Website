let cancelBtn =document.querySelector("#cancel")
let saveBtn =document.querySelector("#save")
let inputBoxes= document.querySelectorAll('.input-box')


function previewFile(){
const image_input= document.querySelector('input[type=file]').files[0];
let uploaded_image= "";

    const reader =new FileReader();
    reader.addEventListener("load",()=>{
        uploaded_image = reader.result;
        document.querySelector("#display-image").style.backgroundImage=`url(${uploaded_image})`
    },false);
    if(image_input){
    reader.readAsDataURL(image_input)
}
}
cancelBtn.addEventListener("click",(e)=>{
    inputBoxes.forEach(box=>{
        box.value =""
    })
    
})
saveBtn.addEventListener("click",(e)=>{
e.preventDefault()

window.onload =()=>{
inputBoxes.forEach(box=>{
    box.value == box.value;
})
}
saveBtn.innerText="Saved!"

})
