window.addEventListener("load", function() {
    function $(id){ 
        return document.getElementById(id); 
    }  
    // show / hide 漢堡選單
    let hBG = $("nav_hamburger");
    let hBackground = $("h-background");
    let spans = hBG.getElementsByTagName("span")
    hBG.onclick = function(){
        if(hBackground.style.display === "none"){
            hBackground.style.display = "block";
            spans[0].style.display = "none"
            spans[2].style.display = "none"
        }else{
            hBackground.style.display = "none";
            spans[0].style.display = "block"
            spans[2].style.display = "block"
        }
    }
    // show / hide 漢堡子選單
    let hNavbarToggler = $("h-navbar-toggler");
    hNavbarToggler.onclick = function(){
        let hNavbarSubmenu = $("h-navbar-submenu");
        if(hNavbarSubmenu.style.display === "none"){
            hNavbarSubmenu.style.display = "block";
            hNavbarToggler.style.padding = "20px 0 0"
        }else{
            hNavbarSubmenu.style.display = "none";
            hNavbarToggler.style.padding = "20px 0"
        }
    }
    // 電腦版NAV
    let navbarToggler = $("navbar-toggler");
    var listAbout = $("listAbout");
    navbarToggler.addEventListener("mouseenter",function(){
        listAbout.innerText = "ABOUT";
        $("navbar-submenu").style = "display: block"
    }, false)
    navbarToggler.addEventListener("mouseleave",function(){
        listAbout.innerText = "關於睦和";
        $("navbar-submenu").style = "display: none"
    }, false)

    var awards = $("listAwards");
    awards.addEventListener("mouseenter",function(){
        awards.innerText = "AWARDS"
    }, false)
    awards.addEventListener("mouseleave",function(){
        awards.innerText = "獲獎紀錄"
    }, false)        
    
    var protfolio = $("listProtfolio");
    protfolio.addEventListener("mouseenter",function(){
        protfolio.innerText = "PROTFOLIO"
    }, false)
    protfolio.addEventListener("mouseleave",function(){
        protfolio.innerText = "精選案例"
    }, false)        
    
    var workflow = $("listWorkflow");
    workflow.addEventListener("mouseenter",function(){
        workflow.innerText = "WORKFLOW"
    }, false)
    workflow.addEventListener("mouseleave",function(){
        workflow.innerText = "服務流程"
    }, false)

    var contact = $("listContact");
    contact.addEventListener("mouseenter",function(){
        contact.innerText = "CONTACT"
    }, false)
    contact.addEventListener("mouseleave",function(){
        contact.innerText = "聯絡我們"
    }, false)
    

}, false);