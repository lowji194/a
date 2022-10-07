
	var speed = Math.round(getRndInteger(number, 10));
	var time = speed * 1000; // Don't modify

	function getRndInteger(min, max) {
	  return Math.floor(Math.random() * max) + min;
	}
	console.clear();
	//
	/* Don't modify code below */
	setTimeout(function() {
	  console.log("%c Script Auto Addfriends Facebook 2023", 'color: #008000');
	  console.log("%c Copyright belong to Lowji194", 'color: #008000');
	  console.log("%c Contact Support: www.facebook.com/100005942927037", 'color: #008000');
	  console.warn("%c Times Delays: " + number + "-" + (number + 10) + " seconds", 'color: #ff0000');
	  console.warn("%c Total Request: " + total, 'color: #ff0000');
	  console.warn("%c The process will start later: " + Math.round((number / 3)) + " seconds", 'color: #ff0000');
	  console.log("--------------------------------");
	}, 100);
	var success = 0;
	var stop = 0;
	var Lowji194 = document.querySelectorAll("div[aria-label='Thêm bạn bè']")
	Lowji194[0].remove();
	setTimeout(function loop() {
	  if (total - Lowji194.length <= 0) {
	    return console.log('Đã đủ số bạn bè ngừng Scroll')
	  } else if (Lowji194.length < 20) {
	    window.scrollTo(0, document.body.scrollHeight);
	    console.warn("%c Auto Scroll Enable", 'color: #008000', `Số bạn bè được hiển thị ‍${Lowji194.length}🙋`);
	  }
	  setTimeout(loop, time);
	}, time)

	function add(n) {
	  var Lowji194 = document.querySelectorAll("div[aria-label='Thêm bạn bè']")
	  var speed = Math.round(getRndInteger(number, 5));
	  var a = new Date();
	  var w = new Date,
	    h = w.getHours();
	  var mi = w.getMinutes();
	  var se = w.getSeconds();
	  if (10 > h) {
	    h = "0" + h
	  }
	  if (10 > mi) {
	    mi = "0" + mi
	  }
	  if (10 > se) {
	    se = "0" + se
	  }
	  /* Redirect after the end */
	  if (total === 0) {
	    window.location.href = 'http://facebook.com/profile.php';
	  }
	  setTimeout(function continuousWhenPageLoad() {
		if (total - Lowji194.length <= 0) {
	      console.log('Đã đủ số bạn bè ngừng Scroll')
	    } else if (Lowji194.length < 8) {
	      window.scrollTo(0, document.body.scrollHeight);
	      console.warn("%c Auto Scroll Enable", 'color: #008000', `Số bạn bè được hiển thị ‍${Lowji194.length}🙋`);
	      setTimeout(continuousWhenPageLoad, 3000);
	      return;
	    }
	    if (window.location.href.includes("groups")) {
	      /* Click add to groups friends buttons */
	      let label = Lowji194[n].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.lastChild.firstChild.firstChild.firstChild.firstChild.innerText
	      Lowji194[n].click(); // click add friends
	      /* check block */
	      setTimeout(function() {
	        if (Lowji194[n].innerText == 'Thêm bạn bè') {
	          console.log(`[${++stop}]Add Friends to ${label} Failure🚫`);
	          setTimeout(function() {
	            add(0);
	          }, 4000);
	        } else {
	          success++;
	          console.log(`%c Add Friends to ${label}🙋‍♂️ - ${--total} request [${h}:${mi}:${se}]`, 'color: #008000');
	          parentElement.innerHTML = `<b>Đã Gửi: <span style='color:red'>${success}</span> yêu cầu<br/>Add Friends to <span style='color:green'>${label}🙋</span></b>\nSố bạn bè được hiển thị ‍${Lowji194.length}🙋`;
	          document.title = (`Đã gửi thành công [${success}✔️]`);
	          if (stop > 0) {
	            stop--
	          }
	          setTimeout(function() {
	            add(0);
	          }, time - 2500);
	        }
	      }, 2500);
	    } else {
	      /* Click add to list friends buttons */
	      let label = Lowji194[n].parentNode.parentNode.parentNode.parentNode.childNodes[1].firstChild.innerText
	      Lowji194[n].click(); // click add friends
	      /* check block */
	      setTimeout(function() {
	        if (Lowji194[n].innerText == 'Thêm bạn bè') {
	          console.log(`[${++stop}]Add Friends to ${label} Failure🚫`);
	          setTimeout(function() {
	            add(0);
	          }, 4000);
	        } else {
	          success++;
	          console.log(`%c Add Friends to ${label}🙋‍♂️ - ${--total} request [${h}:${mi}:${se}]`, 'color: #008000');
	          parentElement.innerHTML = `<b>Đã Gửi: <span style='color:red'>${success}</span> yêu cầu<br/>Add Friends to <span style='color:green'>${label}🙋</span></b>\nSố bạn bè được hiển thị ‍${Lowji194.length}🙋`;
	          document.title = (`Đã gửi thành công [${success}✔️]`);
	          if (stop > 0) {
	            stop--
	          }
	          setTimeout(function() {
	            add(0);
	          }, time - 2500);
	        }
	      }, 2500);
	    }
		setTimeout(function() {
	        Lowji194[n].remove();
	      }, 3500);
	  }, 0);
	  /* close popup */
	  popup = document.querySelectorAll("div[aria-label='OK']")
	  popup1 = document.querySelectorAll("div[aria-label='Đóng']")
	  if (popup.length == 1) {
	    popup[0].click();
	  } else if (popup1.length == 1) {
	    popup1[0].click();
	  }
	}
	setTimeout(function() {
	  add(0);
	  window.scrollTo(0, document.body.scrollHeight);
	}, time / 3);
	let parentElement = document.createElement("div");
	parentElement.id = "sf_af_result";
	parentElement.style = "position:fixed;height:60px;z-index:999;right:0;top:0;width: 250px;background-color:#fff;align-items:center;color:#0084ff;bo0er:1px solid #0084ff;display:flex;flex-direction:column;justify-content:center";
	document.getElementsByTagName("body")[0].appendChild(parentElement);
