function upQuality(){

const file=document.getElementById('upFile').files[0];

if(!file){
alert('Masukkan file');
return;
}

const reader=new FileReader();

reader.onload=function(e){

const img=document.getElementById('upResult');

img.src=e.target.result;

img.style.filter='contrast(120%) brightness(110%) saturate(120%)';

document.getElementById('downloadUp').href=e.target.result;

}

reader.readAsDataURL(file);

}