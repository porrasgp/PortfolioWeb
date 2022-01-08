var checkMyWorkBtn = document.getElementById("box-btn")

function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop]; 
    }
}

checkMyWorkBtn.addEventListener("click", function(){
    window.scrollTo(0, findPos(document.getElementById("portfolio")))
})
