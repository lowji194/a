	var total = 500; // Số yêu cầu cần gửi
	var speed = 7; // Thời gian nghỉ


	var time = speed * 1000; // Don't modify
	var success = 0;
	var addfr = document.getElementsByClassName('_55wp _7om2 _5pxa _8yo0');

	function add(n) {

	    setTimeout(function continuousWhenPageLoad() {
	        if (stop >= 30) {
	            document.title = ('[' + total + '] Bị chặn tính năng tạm nghỉ ' + sleep + ' phút')
	            setTimeout(continuousWhenPageLoad, sleep * 60 * 1000);
	            return stop = 0;
	        } else if (total - addfr.length <= 0) {
	            console.log('Đã đủ số bạn bè ngừng Scroll')
	        } else if (addfr.length < 8) {
	            window.scrollTo(0, document.body.scrollHeight);
	            console.warn("%c Auto Scroll Enable", 'color: #008000', `Số bạn bè được hiển thị ‍${addfr.length}🙋`);
	            setTimeout(continuousWhenPageLoad, 3000);
	            return;
	        }
	        var label = addfr[0].childNodes[1].lastChild.childNodes[0].innerText;
	        if (addfr[0].childNodes[1].lastChild.lastChild.firstChild == null || addfr[0].childNodes[1].lastChild.lastChild.firstChild.lastChild.lastChild == null) {
	            console.log(`Bỏ qua ${label}`);
	        } else {


	            addfr[0].childNodes[1].lastChild.lastChild.firstChild.lastChild.lastChild.click();
				setTimeout(function() {
				if (document.getElementsByClassName('_54k8 _52jg _56bs _26vk _56b_ _56bu').length == 1) document.getElementsByClassName('_54k8 _52jg _56bs _26vk _56b_ _56bu')[0].click();
				 setTimeout(function() {
				
	            if (addfr[0].childNodes[1].lastChild.childNodes[1].innerText == 'Đã gửi yêu cầu') {
	                success++;
	                console.log(`%c Add Friends to ${label}🙋‍♂️ - ${--total} request`, 'color: #008000');
	                parentElement.innerHTML = `<b>Đã Gửi: <span style='color:red'>${success}</span> yêu cầu<br/>Add Friends to <span style='color:green'>${label}🙋</span></b><br/>Số bạn bè được hiển thị ‍${addfr.length}🙋`;
	            } else console.log('Gửi kết bạn thất bại')
				}, 2000);
				}, 1000);
	        }
	        setTimeout(function() {
	            addfr[0].remove();
	        }, 5000);
	    }, 0);
	    setTimeout(function() {
	        add(0);
	    }, time);
	}

	setTimeout(function() {
	    add(0);
	}, time / 3);

	let parentElement = document.createElement("div");
	parentElement.id = "sf_af_result";
	parentElement.style = "position:fixed;top: 20%;left: 50%;transform: translate(-50%, -50%);border-radius: 5px;margin: 0; text-decoration: none;font-size: 20px;color: #1b2631; margin-bottom: 5px;width: 400px;height:100px;background: #ffffff;text-align: center;align-items: center;padding: 40px;border: 1px solid #b3b3b3;box-shadow: 0px 5px 10px rgb(0 0 0 / 20%);z-index: 9999;";
	document.getElementsByTagName("body")[0].appendChild(parentElement);
