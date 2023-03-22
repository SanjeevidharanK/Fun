const Choose = document.getElementById('dum');
const ye = document.getElementById('yes');
const n = document.getElementById('no');
const silly = document.getElementById('sill');
var a = 0;

ye.onclick = function(){
    Choose.style.display = "none";
    silly.style.display ="flex";
    silly.style.alignItems ="center";
    silly.style.justifyContent ="center";
    silly.style.textAlign="center";


}
n.onclick = function(){
    a++;
    // if(a === 3){
    //     alert('Fuck You');
    // }
    if(a%2 === 0){
        n.style.position ="absolute";
        n.style.right = "0";
        n.style.left = "auto"

    }
    else{
        n.style.position ="absolute";
        n.style.left = "0";
        n.style.right = "auto"

    }

}