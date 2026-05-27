function hdRemini(){

const file=document.getElementById('reminiFile').files[0];

if(!file){
alert('Masukkan file');
return;
}

const reader=new FileReader();

reader.onload=function(e){

const img=document.getElementById('reminiResult');

img.src=e.target.result;

img.style.filter='contrast(150%) brightness(120%) saturate(150%)';

document.getElementById('downloadRemini').href=e.target.result;

}

reader.readAsDataURL(file);

}