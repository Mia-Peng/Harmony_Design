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
    
    // 生成驗證碼
    let captcha;
    function generateCaptcha() {
        captcha = '';
        let canvas = $('verify-code');
        let context = canvas.getContext('2d');
        let canvasWidth = canvas.width;
        let canvasHeight = canvas.height;

        // 定義驗證碼允許的字符
        let captchaText = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz123456789';
        let captchaLength = 4; // 驗證碼長度
        
        // 清除Canvas
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        // 在畫布上繪製驗證碼
        for (let i = 0; i < captchaLength; i++) {
            let char = captchaText.charAt(Math.floor(Math.random() * captchaText.length));
            captcha += char;
            // 隨機顏色
            let colorR = Math.floor(Math.random() * (180 - 20)) + 20;
            let colorG = Math.floor(Math.random() * (180 - 20)) + 20;
            let colorB = Math.floor(Math.random() * (180 - 20)) + 20;
            // x, y 移動
            let x = 15 + i * 30;
            let y = 30 + Math.random() * 10;
            // 旋轉角度
            let angle = (Math.random() - 0.5) * 60 * Math.PI / 180; // 轉換為弧度
            context.save(); // 儲存當前繪圖狀態
            context.translate(x, y); // 將原點移動到文字位置
            context.rotate(angle); // 旋轉繪圖環境
            context.font = 'bold 30px Arial';
            context.fillStyle = `rgb(${colorR}, ${colorG}, ${colorB})`;
            context.fillText(char, 0, 0); // 在 (0, 0) 繪製文字
            context.restore(); // 恢復到原始繪圖狀態，避免旋轉影響其他元素
            x += 30; // 調整下一個字符的位置
        }
        return captcha;
    }
    generateCaptcha();
    // 重新生成驗證碼
    $("refresh-code").onclick = generateCaptcha;

    // 驗證
    let customerVerifyAlert = $("customer-verify-alert");
    let customerNameAlert = $("customer-name-alert");
    let customerTelAlert = $("customer-tel-alert");
    let customerEmailAlert = $("customer-email-alert");
    function verification(e){
        customerVerifyAlert.innerText = customerNameAlert.innerText = customerTelAlert.innerText = customerEmailAlert.innerText = "";
        
        // 比對驗證碼 customer-verify
        let verify = $("customer-verify")
        if(verify.value != captcha) {
            customerVerifyAlert.innerText = "請輸入正確驗證碼";
            verify.focus();
            //阻止預設行為
            e.preventDefault();
            return;
        }
        // 姓名是否為空 customer-name
        let customerName = $("customer-name");
        let hasnum = false;
        for(let i=0; i<customerName.value.length; i++){
            let char = customerName.value.charAt(i);
            if (char>='0' && char<='9'){
            hasnum = true;
            }
        }
        if(customerName.value == "" || hasnum == true) {
            customerNameAlert.innerText = "請輸入正確姓名"
            customerName.focus();
            e.preventDefault();
            return;
        }
        // 電話是否為空 customer-tel
        let customerTel = $("customer-tel");
        if(customerTel.value == "") {
            customerTelAlert.innerText = "請輸入電話"
            customerTel.focus();
            e.preventDefault();
            return;
        }
        // 電子信箱是否為空
        let customerEmail = $("customer-email")
        if(customerEmail.value == "") {
            customerEmailAlert.innerText = "請輸入正確電子信箱"
            customerEmail.focus();
            e.preventDefault();    
            return;        
        }
        alert("已收到您的聯絡表單，專員將於兩個工作日內與您聯繫。")
    }
    $("myform").onsubmit = verification;

}, false);