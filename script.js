function manu(){
    const manuBtn=document.getElementById("manu-btn");
    const manuItem=document.getElementById("manu-item");
    if (manuItem.style.display != "block") {
        manuItem.style.display="block"
    } else {
        manuItem.style.display="none"
    }
}
function view(id1, id2){
    const none=document.getElementById(id1).style.display="none";
    const block=document.getElementById(id2).style.display="block";
}