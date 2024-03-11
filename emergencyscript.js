const selectBtn=document.querySelector(".input-box"),
items=document.querySelectorAll(".items");
selectBtn.addEventListener("click", () => {
    selectBtn.classList.toggle("open");
});
items.forEach(items=>{
    items.addEventListener("click",() =>{
        items.classList.toggle("checked");
        let checked=document.querySelectorAll(".checked");
        btnText=document.querySelector(".btn-text");

        if(checked && checked.length>0){
            btnText.innerText = checked.length + " Selected";
        }
        else{
            btnText.innerText = "Specification";
        }
    });
})