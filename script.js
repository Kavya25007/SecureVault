/* PARTICLES */
for(let i=0;i<50;i++){
let p=document.createElement("div");
p.className="particle";
p.style.left=Math.random()*100+"%";
p.style.animationDuration=(4+Math.random()*6)+"s";
document.body.appendChild(p);
}

/* TYPING */
let text="🔐 Welcome to SecureVault";
let i=0;
function type(){
if(i<text.length){
typing.innerHTML+=text[i];
i++;
setTimeout(type,40);
}}
window.onload=type;

/* START */
function start(){
welcome.classList.add("hidden");
app.classList.remove("hidden");
}

/* ELEMENTS */
let pass=document.getElementById("pass");
let fill=document.getElementById("fill");
let result=document.getElementById("result");
let percent=document.getElementById("percent");
let time=document.getElementById("time");
let common=document.getElementById("common");
let tips=document.getElementById("tips");

/* COMMON */
let commonList=["123456","password","admin","qwerty"];

/* PASSWORD CHECK */
pass.addEventListener("input",()=>{
let v=pass.value;
let score=0;
let sug=[];

if(v.length>=8){score+=25;}else{sug.push("Use 8+ chars");}
if(/[A-Z]/.test(v)){score+=25;}else{sug.push("Add uppercase");}
if(/[0-9]/.test(v)){score+=25;}else{sug.push("Add number");}
if(/[!@#$%^&*]/.test(v)){score+=25;}else{sug.push("Add special char");}

if(commonList.includes(v.toLowerCase())){
common.innerHTML="❌ Common password!";
score=10;
}else{common.innerHTML="";}

fill.style.width=score+"%";
percent.innerHTML="Score: "+score+"/100";

if(score<=25){
fill.style.background="red";
result.innerHTML="Weak 😡";
time.innerHTML="Crack Time: Seconds";
}
else if(score<=75){
fill.style.background="orange";
result.innerHTML="Medium 😐";
time.innerHTML="Crack Time: Hours";
}
else{
fill.style.background="lime";
result.innerHTML="Strong 😎";
time.innerHTML="Crack Time: Years 🔥";
}

let aiMsg="🤖 AI: ";
if(v.length<6) aiMsg+="Too short. ";
if(v.includes("123")) aiMsg+="Pattern detected. ";
if(v.toLowerCase().includes("password")) aiMsg+="Common word. ";
if(score==100) aiMsg="🔥 Perfect Password!";
tips.innerHTML=aiMsg;

if(sug.length>0){
tips.innerHTML+="<br>💡 "+sug.join(", ");
}

if(score<50 && v.length>0){
tips.innerHTML+="<br>✨ Try: "+v+"@2026#X";
}

if(score==100){
document.querySelector(".container").style.boxShadow="0 0 60px lime";
}else{
document.querySelector(".container").style.boxShadow="0 0 40px cyan";
}

});

/* FUNCTIONS */
function toggle(){pass.type=pass.type==="password"?"text":"password";}
function generate(){
let c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
let p="";
for(let i=0;i<12;i++)p+=c[Math.floor(Math.random()*c.length)];
pass.value=p;
pass.dispatchEvent(new Event("input"));
}
function copy(){
navigator.clipboard.writeText(pass.value);
toast.style.display="block";
setTimeout(()=>toast.style.display="none",2000);
}
function toggleTheme(){
if(document.body.style.background=="white"){
location.reload();
}else{
document.body.style.background="white";
document.body.style.color="black";
}
}