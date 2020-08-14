let totalcontri = 0;
let itr = document.getElementsByClassName("octicon octicon-star");
for (i = 1; i < itr.length; i++){
    try{
        itr[i].nextSibling.textContent = " " + (10000+Math.floor(Math.random() * 90000));
    }
    catch(err){

    }
}

itr = document.getElementsByClassName("text-bold text-gray-dark");
for (i = 0; i < itr.length; i++){
    if (itr[i].nextSibling.textContent.match(/followers/)){
        itr[i].innerText = 100000 + Math.floor(Math.random() * 900000);
        break;
    }
}

itr = document.querySelectorAll("rect");
for (i = 0; i < itr.length; i++){
    let oh = Math.random();
    let ncontri = 0;
    if (oh < 0.45){
        itr[i].style.fill = "#216e39";
        ncontri = 10 + Math.floor(Math.random() * 10);
    }else if (oh < 0.75){
        itr[i].style.fill = "#30a14e";
        ncontri = 5 + Math.floor(Math.random() * 10);
    }else if (oh < 0.85){
        itr[i].style.fill = "#40c463";
        ncontri = 5 + Math.floor(Math.random() * 5);
    } else if (oh < 0.95) {
        itr[i].style.fill = "#9be9a8";
        ncontri = 2 + Math.floor(Math.random() * 5);
    } else{
        itr[i].style.fill = "#ebedf0";
        ncontri = 0;
    }
    totalcontri += ncontri;
    itr[i].setAttribute("data-count", ncontri)
}

itr = document.getElementsByClassName("Counter");
itr[0].innerText = 100 + Math.floor(Math.random() * 900);
itr[1].innerText = 60 + Math.floor(Math.random() * 300);

itr = document.getElementsByClassName("f4 text-normal mb-2");
for (i = 0; i < itr.length; i++){
    if (itr[i].innerText.match(/contributions in the last year/)){
        itr[i].innerText = totalcontri + " contributions in the last year";
        break;
    }
}