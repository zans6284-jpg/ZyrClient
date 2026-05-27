async function takeYT(){

const url=document.getElementById('ytUrl').value;

if(!url){
alert('Masukkan link YouTube');
return;
}

document.getElementById('ytInfo').style.display='block';

document.getElementById('ytCaption').innerText=url;

document.getElementById('downloadYTVideo').href=url;
document.getElementById('downloadYTMP3').href=url;

}