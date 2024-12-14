let page=document.querySelector(".page")
let imegs=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];

let backgroundOPtin= true;

let backgroundIntrefl;

function random(){
    if(backgroundOPtin === true){
        backgroundIntrefl = setInterval(() => {
            let radom=[Math.floor(Math.random()*imegs.length)]
            page.style.backgroundImage='Url("img/'+imegs[radom]+'")'
        }, 10000);
    }
}
random()

///تغير الصورة تلقائي//

//open يفتح//
document.querySelector(".togl i").onclick=function(){
    this.classList.toggle("fa-spin")
    document.querySelector(".box").classList.toggle("open")
}

/////color////
let coloelist=document.querySelectorAll(".color-list li")

coloelist.forEach((e)=>{
    e.addEventListener("click",(e)=>{
        document.documentElement.style.setProperty("--main-color",e.target.dataset.color)
        localStorage.setItem("color_opacity",e.currentTarget.dataset.color)
        heandle(e)
    })
})
let mincolor=localStorage.getItem("color_opacity")
if(mincolor !== null){
    document.documentElement.style.setProperty("--main-color",mincolor)
    coloelist.forEach((e)=>{
        e.classList.remove("active")
        if(e.dataset.color === mincolor){
            e.classList.add("active")
        }
    })
}

///backgroundcolor//
let background=document.querySelectorAll(".fon span")
let backgroundLoacl=localStorage.getItem("backdround_opctiy")

if(backgroundLoacl !== null){
    if(backgroundLoacl === 'yes'){
        backgroundOPtin =true;
        document.querySelector(".fon .yes").classList.add("active")
    }else{
        backgroundOPtin = false;
        document.querySelector(".fon .no").classList.add("active")
    }
    background.forEach((e)=>{
        e.classList.remove("active")
    })

}

background.forEach((e)=>{
    e.addEventListener("click",(e)=>{
        heandle(e);
        if(e.target.dataset.backgrounds === 'yes'){
            backgroundOPtin = true;
            random()
            localStorage.setItem(".backdround_opctiy",true)
        }else{
            backgroundOPtin = false;
            localStorage.setItem(".backdround_opctiy",false)
            clearInterval(backgroundIntrefl)
        }
    })
})

function heandle(e){
    e.target.parentElement.querySelectorAll(".active").forEach((e)=>{
        e.classList.remove("active")
    })
    e.target.classList.add("active")
}

// out sklls
let skills=document.querySelector(".skills")

window.onscroll= function(){
    let skillstop=skills.offsetTop;
    let skillsHeigth=skills.offsetHeight;
    let skillsinnter=this.innerHeight;
    let windowScrollTop=this.pageYOffset;
    
    if(windowScrollTop > (skillstop + skillsHeigth - skillsinnter)){

        let allskills=document.querySelectorAll(".skills-box .skill-porgres span")
        allskills.forEach((e)=>{
            e.style.width=e.dataset.progress
        })
    }
    
}

// Gliilt-img

let gliilt =document.querySelectorAll(".Gliilt img");

gliilt.forEach((img)=>{
    img.addEventListener("click",()=>{
        let div =document.createElement("div")
        div.className="popo-overlley";
        
        let popobox =document.createElement("div")
        popobox.className="spanin";
        
        if(img.alt !== null){
            let span=document.createElement("h3")
            span.appendChild(document.createTextNode(img.alt))
            popobox.appendChild(span)
        }
        let imgpopo=document.createElement("img")
        imgpopo.className="imgep"
        imgpopo.src=img.src;
        
        popobox.appendChild(imgpopo)
        div.appendChild(popobox)
        document.body.appendChild(div)

        
                let black=document.createElement("div")
                black.className="black"
                let conter=document.createElement("i")
                conter.className="fa-sharp fa-solid fa-cart-shopping";
                let aa=document.createElement("i")
                aa.className="fa-sharp fa-solid fa-star";
                let bb=document.createElement("i")
                bb.className="fa-sharp fa-solid fa-star";
                let cc=document.createElement("i")
                cc.className="fa-sharp fa-solid fa-star";
                let dd=document.createElement("i")
                dd.className="fa-sharp fa-solid fa-star";
                let ff=document.createElement("i")
                ff.className="fa-sharp fa-solid fa-star";
                
                black.appendChild(aa)
                black.appendChild(bb)
                black.appendChild(cc)
                black.appendChild(dd)
                black.appendChild(ff)
                black.appendChild(conter)
                popobox.appendChild(black)

        let close=document.createElement("span")
        close.className="close";
        close.appendChild(document.createTextNode("X"))
        popobox.appendChild(close)
    })
})
// close popp

document.addEventListener("click",(e)=>{
    if(e.target.className == "close"){
        e.target.parentNode.remove()
        document.querySelector(".popo-overlley").remove()
    }
})

// start bullet

///end bullet

// start links
let bullet=document.querySelectorAll(".nav-bullet .bullet")
let links=document.querySelectorAll(".links a")

function pagaing(elements){
    elements.forEach((ele)=>{
    ele.addEventListener("click",(e)=>{
        e.preventDefault();
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior:"smooth"
        })
    })
})
}
pagaing(links);
pagaing(bullet);
///end links
// start scroll
let bot=document.querySelector(".bot")

window.addEventListener("scroll",()=>{
    if(window.scrollY >= 400){
        bot.style.display="block";
    } else{
        bot.style.display="none"
    }
})
bot.addEventListener("click",()=>{
    window.scrollTo({
        left:0,
        top:0,
        behavior:"smooth",
    })
})

// end scroll

let bulletSpan=document.querySelectorAll(".bullet-option span");
let bulletCon=document.querySelector(".nav-bullet")
let bulletoption=localStorage.getItem(".bullet_opt")

if(bulletoption !== null){
    bulletSpan.forEach((span)=>{
        span.classList.remove("active")
    })
    if(bulletoption === 'block'){
        bulletCon.style.display='block';
        document.querySelector(".bullet-option .yes").classList.add("active")
    }else{
        bulletCon.style.display='none';
        document.querySelector(".bullet-option .no").classList.add("active")
    }
}

bulletSpan.forEach((span)=>{
    span.addEventListener("click",(e)=>{

        if(span.dataset.display === 'yes'){
            bulletCon.style.display = 'block';
            localStorage.setItem(".bullet_opt", "block")
        }else{
            bulletCon.style.display='none';
            localStorage.setItem(".bullet_opt", "none")
        }
        heandle(e)
    })
})

// document.querySelector(".reset").onclick=function(){
//     localStorage.clear();
//     // localStorage.removeItem(".bullet-option")

//     window.location.reload();
// }

// sttart toggle-mine
let toogle=document.querySelector(".toogle-mein")
let link=document.querySelector(".links")

toogle.onclick=function(e){
    this.classList.toggle("mein-active")
    link.classList.toggle("open")
}
