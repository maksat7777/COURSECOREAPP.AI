let count=0

document.getElementById('descreaseBtn').onclick=function(){
    count=count - 1
    document.getElementById('countLabel').innerText=count
}

document.getElementById('increaseBtn').onclick=function(){
    count=count + 1
    document.getElementById('countLabel').innerText=count
}
document.getElementById('resetBtn').onclick=function(){
    count=0
    document.getElementById('countLabel').innerText=count
}
