	var speed = Math.round(getRndInteger(number, number));
	var time = speed * 1000; // Don't modify
	document.body.style.zoom = "40%"
	function getRndInteger(min, max) {
	    return Math.floor(Math.random() * max) + min;
	}

	function getRandomInt(max) {
	    return Math.floor(Math.random() * Math.floor(max));
	}
	console.clear();
	//

	/* Don't modify code below */
	setTimeout(function() {
	    console.log("%c Script Auto Addfriends Facebook 14/05/2022", 'color: #008000');
	    console.log("%c Copyright belong to Lowji194", 'color: #008000');
	    console.log("%c Contact Support: www.facebook.com/100005942927037", 'color: #008000');
	    console.warn("%c Times Delays: " + number + "-" + (number + number) + " seconds", 'color: #ff0000');
	    console.warn("%c Total Request: " + total, 'color: #ff0000');
	    console.warn("%c The process will start later: " + Math.round((number / 2)) + " seconds", 'color: #ff0000');
	    console.log("--------------------------------");
	}, 100);
	var success = 0;
	var stop = 0;

	if (window.location.href.includes("groups")) {
	    var Lowji194 = document['getElementsByClassName']('rq0escxv l9j0dhe7 du4w35lb hybvsw6c io0zqebd m5lcvass fbipl8qg nwvqtn77 k4urcfbm ni8dbmo4 stjgntxs sbcfpzgs')[0].getElementsByClassName('ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi a8c37x1j');
	} else {
	    var Lowji194 = document['getElementsByClassName']('i85zmo3j h8391g91 m0cukt09 kpwa50dg ta68dy8c o5pw47cy bdao358l alzwoclg mfn553m3 g4qalytl r227ecj6 ez8dtbzv gt60zsk1 hgcwkpcn');
		if (document.querySelectorAll("div[aria-label='Thêm bạn bè']")[0] == undefined == false) document.querySelectorAll("div[aria-label='Thêm bạn bè']")[0].click();
	}

	var check = document.getElementsByClassName('a8c37x1j ni8dbmo4 stjgntxs l9j0dhe7 ltmttdrg g0qnabr5 r8blr3vg')
	var check1 = document.getElementsByClassName('dati1w0a jbae33se hv4rvrfc bjjx79mm')
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
		rd = getRandomInt(Lowji194.length - 2);
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
	        if (stop >= 30) {
	            document.title = ('[' + total + '] Bị chặn tính năng tạm nghỉ ' + sleep + ' phút')
	            setTimeout(continuousWhenPageLoad, sleep * 60 * 1000);
	            return stop = 0;
	        } else if (total - Lowji194.length <= 0) {
	            console.log('Đã đủ số bạn bè ngừng Scroll')
	        } else if (Lowji194.length < 8) {
	            window.scrollTo(0, document.body.scrollHeight);
	            console.warn("%c Auto Scroll Enable", 'color: #008000', `Số bạn bè được hiển thị ‍${Lowji194.length}🙋`);
	            setTimeout(continuousWhenPageLoad, 3000);
	            return;
	        }
	        if (window.location.href.includes("groups")) {
	            /* Click add to groups friends buttons */
	            let label = Lowji194[n].lastChild.lastChild.firstChild.firstChild.firstChild.firstChild.innerText

	            if (Lowji194[n].lastChild.lastChild.lastChild.firstChild.firstChild.firstChild.firstChild == null || Lowji194[n].lastChild.lastChild.lastChild.firstChild.firstChild.firstChild.firstChild.innerText !== 'Thêm bạn bè') {
	                console.log(`%c Bỏ qua ${label}`, 'color: #ff0000');
	                Lowji194[n].remove();
	                setTimeout(function() {
	                    add(0);
	                }, 500);
	            } else {
	                Lowji194[n].lastChild.lastChild.lastChild.firstChild.firstChild.firstChild.firstChild.click(); // click add friends
	                /* check block */
	                setTimeout(function() {
	                    if (Lowji194[n].lastChild.lastChild.lastChild.firstChild.firstChild.firstChild.firstChild.innerText == 'Thêm bạn bè') {
	                        if (check[0] == undefined) {
	                            console.log(`[${++stop}]Add Friends to ${label} Failure🚫`);
	                        } else if (check[0].innerText == 'Không gửi được lời mời' == true) {
	                            if (check1[0].innerText == 'Có vẻ như bạn không biết người này. Hãy gửi lời mời cho những người mình quen biết để xem thông tin mới của họ trên Facebook.' == true) console.log(`Add Friends to ${label} Failure🚫 - ${check1[0].innerText}`)
	                        } else {
	                            console.log(`[${++stop}]Add Friends to ${label} Failure🚫 - ${check[0].innerText}`)
	                        }
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
	                setTimeout(function() {
	                    Lowji194[n].remove();
	                }, 3500);
	            }
	        } else {
	            /* Click add to list friends buttons */
	            let label = Lowji194[n].firstChild.nextSibling.firstChild.innerText

	            if (Lowji194[n].lastChild.lastChild.lastChild === null || Lowji194[n].lastChild.lastChild.lastChild.innerText !== 'Thêm bạn bè') {
	                console.log(`%c Bỏ qua ${label}`, 'color: #ff0000');
	            //    Lowji194[n].remove();
	                setTimeout(function() {
	                    add(n + 1);
	                }, 500);
	            } else {
	                Lowji194[n].lastChild.lastChild.lastChild.lastChild.click(); // click add friends
	                /* check block */
	                setTimeout(function() {
	                    if (Lowji194[n].lastChild.lastChild.lastChild.innerText == 'Thêm bạn bè') {
	                        if (check[0] == undefined) {
	                            console.log(`[${++stop}]Add Friends to ${label} Failure🚫`);
	                        } else if (check[0].innerText == 'Không gửi được lời mời' == true) {
	                            if (check1[0].innerText == 'Có vẻ như bạn không biết người này. Hãy gửi lời mời cho những người mình quen biết để xem thông tin mới của họ trên Facebook.' == true) console.log(`Add Friends to ${label} Failure🚫 - ${check1[0].innerText}`)
	                        } else {
	                            console.log(`[${++stop}]Add Friends to ${label} Failure🚫 - ${check[0].innerText}`)
	                        }
	                        setTimeout(function() {
	                            add(n + 1);
	                        }, 4000);
	                    } else {
	                        success++;
	                        console.log(`%c Add Friends to ${label}🙋‍♂️ - ${--total} request [${speed = Math.round(getRndInteger(number, number))}⏰ giây]`, 'color: #008000');
	                        parentElement.innerHTML = `<b>Đã Gửi: <span style='color:red'>${success}</span> yêu cầu<br/>Add Friends to <span style='color:green'>${label}🙋</span></b>\nSố bạn bè được hiển thị ‍${Lowji194.length}🙋`;
	                        document.title = (`Đã gửi thành công [${success}✔️]`);
	                        if (stop > 0) {
	                            stop--
	                        }
	                        setTimeout(function() {
	                            add(n + 1);
	                        }, time - 2500);
	                    }
	                }, 2500);
	                setTimeout(function() {
	                 //   Lowji194[n].remove();
	                }, 3500);

	            }

	        }
	    }, 0);

	    /* close popup */

	    popup = document.getElementsByClassName("qi72231t");
	    setTimeout(function() {
	    for (var e = 0; e < popup.length; e++) {
	        if (popup[e].getAttribute('aria-label') == 'Đóng' || popup[e].getAttribute('aria-label') == 'OK') {
	            popup[e].click();
	        }
	    }
	    }, 3000)
	setTimeout(function() {
	window.scrollTo(0, document.body.scrollHeight);
		console.warn("%c Auto Scroll Enable", 'color: #008000')
	}, 3500);
	}


	setTimeout(function() {
	    add(0);
	}, time / 2);

	/*
	let parentElement = document.createElement("div");
	parentElement.id = "sf_af_result";
	parentElement.style = "position:fixed;height:60px;z-index:999;right:0;top:0;width: 250px;background-color:#fff;align-items:center;color:#0084ff;border:1px solid #0084ff;display:flex;flex-direction:column;justify-content:center";
	document.getElementsByTagName("body")[0].appendChild(parentElement);
	*/
			let parentElement = document.createElement("div");
	parentElement.id = "sf_af_result";
	parentElement.style = "position:fixed;top: -20%;left: -50%;transform: translate(-50%, -50%);border-radius: 5px;margin: 0; text-decoration: none;font-size: 20px;color: #1b2631; margin-bottom: 5px;width: 400px;height:100px;background: #ffffff;text-align: center;align-items: center;padding: 40px;border: 1px solid #b3b3b3;box-shadow: 0px 5px 10px rgb(0 0 0 / 20%);z-index: 9999;";
	document.getElementsByTagName("body")[0].appendChild(parentElement);
	parentElement.innerHTML = `<iframe width="420" height="345" src="https://www.youtube.com/embed/EColTNIbOko?autoplay=1">`;
