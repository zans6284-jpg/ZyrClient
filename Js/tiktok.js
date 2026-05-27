async function takeVideo(){

const url=document.getElementById('tiktokUrl').value;

if(!url){
alert('Masukkan link TikTok');
return;
}

const api=`https://api.tiklydown.eu.org/api/download/v3?url=${url}`;

const response=await fetch(api);
const data=await response.json();

document.getElementById('infoPanel').style.display='block';

document.getElementById('videoPreview').src=data.result.video1;

document.getElementById('username').innerText=data.result.author.nickname;
document.getElementById('like').innerText=data.result.statistics.likeCount;
document.getElementById('comment').innerText=data.result.statistics.commentCount;
document.getElementById('favorite').innerText=data.result.statistics.favoriteCount;
document.getElementById('views').innerText=data.result.statistics.playCount;
document.getElementById('region').innerText=data.result.region;

document.getElementById('caption').innerText=data.result.desc;

document.getElementById('downloadVideo').href=data.result.video1;
document.getElementById('downloadSound').href=data.result.music;

}