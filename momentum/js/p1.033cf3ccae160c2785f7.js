(()=>{const e=document.querySelector(".time"),t=document.querySelector(".date"),n=document.querySelector(".greeting"),o={weekday:"long",month:"long",day:"numeric"};!function a(){const m=(new Date).toLocaleTimeString();e.textContent=m,function(){const e=(new Date).toLocaleDateString("ru-RU",o);t.textContent=e}(),n.textContent=function(){const e=(new Date).getHours();return e>=6&&e<12?"Доброе утро":e>=12&&e<18?"Добрый день":e>=18&&e<23?"Добрый вечер":"Спокойной ночи"}(),setTimeout(a,1e3)}(),window.addEventListener("beforeunload",(function(){let e=document.querySelector(".name");localStorage.setItem("name",e.value)})),window.addEventListener("load",(function(){let e=document.querySelector(".name");localStorage.getItem("name")&&(e.value=localStorage.getItem("name"))}));let a=(randomNum=Math.floor(20*Math.random())+1,randomNum<10?randomNum="0"+randomNum:+randomNum);const m=document.querySelector("body");let r="url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/",u=(new Date).getHours();!function(){u=u>=6&&u<12?"morning":u>=12&&u<18?"afternoon":u>=18&&u<23?"evening":"night";const e=new Image;e.src="https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/"+u+"/"+a+".jpg",e.onload=()=>{m.style.backgroundImage=r+u+"/"+randomNum+".jpg"}}(),document.querySelector(".slide-next").addEventListener("click",(function(){randomNum++,randomNum<10&&(randomNum="0"+randomNum),21==randomNum&&(randomNum="01"),m.style.backgroundImage=r+u+"/"+randomNum+".jpg"})),document.querySelector(".slide-prev").addEventListener("click",(function(){randomNum--,randomNum<10&&(randomNum="0"+randomNum),"00"==randomNum&&(randomNum=20),m.style.backgroundImage=r+u+"/"+randomNum+".jpg"}))})();