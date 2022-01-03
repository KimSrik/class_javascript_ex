function inText(self){
    if(self.innerHTML == 'NIGHT'){
    // 야간 화면
        self.innerHTML = 'DAY';
        setStyle.bodyBgColor('#000');
        setStyle.aTagColor('lightblue');
        //bodyBgColor('#000');
        //aTagColor('lightblue');
        setStyle.buttonColor('2px solid #fff', '#000', '#fff');
        setStyle.h2Color('#fff');
        setStyle.pTagColor('#fff');
    }else if(self.innerHTML == 'DAY'){
    // 주간 화면
        self.innerHTML = 'NIGHT';
        setStyle.bodyBgColor('#fff');
        setStyle.aTagColor('darkblue');
        // bodyBgColor('#fff');
        // aTagColor('darkblue');
        setStyle.buttonColor('1px outset #767676', '#efefef', '#000');
        setStyle.h2Color('#000');
        setStyle.pTagColor('#000');
    }
    console.log(self.innerHTML);
}
// 본문 배경 변경
function bodyBgColor(color){
    let eleBody = document.body;
    eleBody.style.backgroundColor = color;
}
// 하이퍼링크 스타일 변경
function aTagColor(color){
    let aTag = document.getElementsByTagName('a');
    for(let idx=0; idx<aTag.length; idx++){
        aTag[idx].style.color = color;
    }
}
// 버튼 스타일 변경
function buttonColor(border, bgColor, color){
    let btnTag = document.getElementsByTagName('button');
    for(let idx=0; idx<btnTag.length; idx++){
        btnTag[idx].style.border = border;
        btnTag[idx].style.backgroundColor = bgColor;
        btnTag[idx].style.color = color;
    }
}
// 서브타이틀 변경
function h2Color(color){
    let h2Tag = document.getElementsByTagName('h2');
    h2Tag[0].style.color = color;
}
// 본문 변경
function pTagColor(color){
    let pTag = document.getElementsByTagName('p');
    for(let idx=0; idx<pTag.length; idx++){
        pTag[idx].style.color = color;
    }
}