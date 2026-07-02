let posts=[];
function addPost(){
const t=document.getElementById('title').value;
if(!t)return;
posts.push({title:t});
render();
}
function render(){
document.getElementById('posts').innerHTML=posts.map(p=>`<div class='post'><h3>${p.title}</h3><p>No comments yet.</p></div>`).join('');
}