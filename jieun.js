
const root = document.getElementById('root');
const Texts = {
title : "lorem ipsum",
paragraph : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}

//maker
function maker(tagName,textNode,parent){
    const element = document.createElement(tagName);
    element.innerText=textNode;
    parent.appendChild(element);
    return element;
    }
//maker호출
let headerDiv=maker("div",Texts.title,root);
let mainDiv=maker("div",Texts.paragraph,root);
let footDiv=maker("div","",root);

mainDiv.style.textAlign='justify';
footDiv.style.backgroundColor='#5A5A5A';
footDiv.style.borderRadius='41px';

//font
function fontMaker(tag,style,weight,size,line){
    tag.style.fontStyle=style;
    tag.style.fontWeight=weight;
    tag.style.fontSize=size;
    tag.style.lineHeight=line;
}
fontMaker(headerDiv,'normal','400','24px','29px')
fontMaker(mainDiv,'normal','400','12px','15px')

//styleMaker
function styleMaker(tag,width,height,color){
    tag.style.width=width;
    tag.style.height=height;
    tag.style.color=color;
}
//styleMaker호출
styleMaker(headerDiv,'147px','29px','black');
styleMaker(mainDiv,'295px','186px','black');
styleMaker(footDiv,'82px','82px','');
styleMaker(root,'430px','932px','');

//positionMaker 
function positionMaker(tagname,left,top){
    tagname.style.position='absolute';
    tagname.style.left=left;
    tagname.style.top=top;
}
//positionMaker 호출
positionMaker(headerDiv,'141px','301px');
positionMaker(mainDiv,'67px','364px');
positionMaker(footDiv,'174px','673px');

//addeventlistenr NightMode가 true->false->frue 바뀜
let NightMode = true;
root.addEventListener('click', function() {
    if (NightMode) {
        root.style.backgroundColor = 'white';
        headerDiv.style.color='black';
        mainDiv.style.color='black';
        NightMode = false;
    } else {
        root.style.backgroundColor = 'black';
        headerDiv.style.color='white';
        mainDiv.style.color='white';
        NightMode = true;
    }
});


