window.onload = function(){
    var a = document.querySelector('.box').style;

    a.position = 'fixed';
    a.left = '50%';
    a.top = '50%';
    a.width = '300px';
    a.height = '300px';
    a.backgroundColor = 'green';
    a.transform = 'translate(-50%, -50%) rotate(45deg)';
}