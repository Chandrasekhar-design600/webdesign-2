
// XMLHttpRequest(AJAX Call)

var getJson=(file,callback)=>{
var xhr_req=new XMLHttpRequest(); xhr_req.overrideMimeType("application/json"); xhr_req.open("GET",file,true);
 xhr_req.onreadystatechange=()=>{
 	if(xhr_req.readyState===4 && xhr_req.status===200){
       callback(xhr_req.responseText); 	}
 }
xhr_req.send(); }

// passing data to function

getJson("dynamic.json",(text)=>{
var d=JSON.parse(text);
console.log(d);
t_details(d.details);
t_school(d.school);
})

var main=document.querySelector("#parent-div");
main.classList.add("child");
function t_details(SDC){
var n=document.createElement("h1");
n.textContent=SDC.name;
n.setAttribute("id","name");
n.classList.add("class","name");
main.appendChild(n);
var k=document.createElement("h1");
k.textContent=SDC.career;
k.setAttribute("id","name");
k.classList.add("class","career");
main.appendChild(k);
var child=document.createElement("h1");
child.textContent="Contact-Info";
main.appendChild(child);
child.classList.add( "border");
var h=document.createElement("hr");
main.appendChild(h);
h.classList.add("h3");
var ul=document.createElement("ul");
for (var i=0;i<SDC.address.length; i++)
{
var li=document.createElement("li");
li.textContent=SDC.address[i];
ul.appendChild(li);
}
main.appendChild(ul);
ul.classList.add("li");
var child=document.createElement("h1");
child.textContent=" School Education";
main.appendChild(child);
child.classList.add( "border");
var h=document.createElement("hr");
main.appendChild(h);
h.classList.add("h3");
var ul=document.createElement("ul");
for (var i=0;i<SDC.content.length; i++)
{
var li=document.createElement("li");
li.textContent=SDC.content[i];
ul.appendChild(li);
}
main.appendChild(ul);
ul.classList.add("li");
var child=document.createElement("h1");
child.textContent=" college Education";
main.appendChild(child);
child.classList.add( "border");
var h=document.createElement("hr");
main.appendChild(h);
h.classList.add("h3");
var ul=document.createElement("ul");
for (var i=0;i<SDC.clg.length; i++)
{
var li=document.createElement("li");
li.textContent=SDC.clg[i];
ul.appendChild(li);
}
main.appendChild(ul);
ul.classList.add("li");
var child=document.createElement("h1");
child.textContent="Technical Skills";
main.appendChild(child);
child.classList.add( "border");
var h=document.createElement("hr");
main.appendChild(h);
h.classList.add("h3");
var ul=document.createElement("ul");
for (var i=0;i<SDC.tech.length; i++)
{
var li=document.createElement("li");
li.textContent=SDC.tech[i];
ul.appendChild(li);
}
main.appendChild(ul);
ul.classList.add("li");
var child=document.createElement("h1");
child.textContent="Additional Skills";
main.appendChild(child);
child.classList.add( "border");
var h=document.createElement("hr");
main.appendChild(h);
h.classList.add("h3");
var ul=document.createElement("ul");
for (var i=0;i<SDC.skill.length; i++)
{
var li=document.createElement("li");
li.textContent=SDC.skill[i];
ul.appendChild(li);
}
main.appendChild(ul);
ul.classList.add("li");
var child=document.createElement("h1");
child.textContent="Hobbies";
main.appendChild(child);
child.classList.add( "border");
var h=document.createElement("hr");
main.appendChild(h);
h.classList.add("h3");
var ul=document.createElement("ul");
for (var i=0;i<SDC.hob.length; i++)
{
var li=document.createElement("li");
li.textContent=SDC.hob[i];
ul.appendChild(li);
}
main.appendChild(ul);
ul.classList.add("li");


}

