

// You can change time delay below or not (in milliseconds, 1 s = 1000 ms)


// Do not modify

	    console.log("%c Script Auto Addfriends Facebook 2022", 'color: #008000');
	    console.log("%c Copyright belong to Lowji194", 'color: #008000');
	    console.log("%c Contact Support: www.facebook.com/100005942927037", 'color: #008000');
	    console.warn("%c Times Delays: "+ delayTime +" seconds", 'color: #ff0000');
	    console.warn("%c Total Request: "+ total, 'color: #ff0000');
	    console.warn("%c The process will start later: " + delayTime + " seconds", 'color: #ff0000');
	    console.log("--------------------------------");
	
	//
	console.log("Starting...");
	console.log("Get list friends...");

	let loadedUsers = [];

	loadFriendsList(targetId).then(loadedUsers => {
		sendFriendRequest(targetId);
		console.log("Loaded successfully. Start sending...");

		(async () => {
			let index = 1; totalFailedRequests = 0, totalSuccessRequests = 0
			for (const user of loadedUsers) {

				if (totalSuccessRequests >= total) break;
				
				let response = await sendFriendRequest(user.id);
				if (response === 'OUTGOING_REQUEST') {
				 console.log(`%c Add Friends to ${user.name}🙋‍♂️ - ${++totalSuccessRequests} request`, 'color: #008000');
				 document.title = `Đã gửi dược [${totalSuccessRequests}] yêu cầu`;
				parentElement.innerHTML = `<b>Tổng số Yêu Cầu còn lại : <span style='color:red'>${total - totalSuccessRequests}</span>
				<br/>Thời gian chờ:<span style='color:red'> ${delayTime}</span> Giây
				<br/>Đã Gửi: <span style='color:red'>${totalSuccessRequests}</span> yêu cầu
				<br/>Add Friends to <span style='color:green'>${user.name}🙋</span></b>`
				}
				else if (response === 'ARE_FRIENDS') {
					console.log(`🤝 Đã là bạn bè với ${user.name}`)
					parentElement.innerHTML = `<b>Tổng số Yêu Cầu còn lại : <span style='color:red'>${total - totalSuccessRequests}</span>
				<br/>Thời gian chờ:<span style='color:red'> ${delayTime}</span> Giây
				<br/>Đã Gửi: <span style='color:red'>${totalSuccessRequests}</span> yêu cầu
				<br/>🤝 Đã là bạn bè với ${user.name}</b>`
				}
				else {
					 if (totalSuccessRequests >= 2) {
						break document.title = ('[' + totalSuccessRequests + '] Tài khoản Facebook đã bị chặn tính năng')
					 } else {
					console.log(`[${++totalFailedRequests}]Add Friends to ${user.name} Failure🚫`);
					 }
				}
				index++;
				await new Promise(_ => {
					setTimeout(_, delayTime * 1000);
				});
				
			}
			parentElement.innerHTML = `👌 Hoàn thành kết bạn.
			<br/>Thành công: ✔️${totalSuccessRequests} Requests - Lỗi: 🚫${totalFailedRequests} Requests`
		})();
	});


function loadFriendsList(uid = '', limit = total + (total/2), chunkLimit = 200) {
	return new Promise(async (resolve, reject) => {
		let after = '';
		let hasNext = true;
		let friendList = [];
		let url = `https://graph.facebook.com/${uid}/friends?limit=${chunkLimit}&after=${after}&fields=name,id,link&access_token=${accessToken}`;
		console.log(url);
		while (hasNext) {
			let response;
			try {
				response = await request('get', url);
			}
			catch (e) {
				console.error(e);
				reject(e);
			}
			let data = JSON.parse(response);
			let paging = data['paging'];
			if (typeof paging === "undefined" || typeof paging['next'] === 'undefined' || paging['next'] === '') hasNext = false;
			if (hasNext) {
				url = paging['next'];
			}
			data['data'].forEach(friend => {
				if (friendList.length < limit) {
					friendList.push(friend);
				}
				else {
					hasNext = false;
				}
			});
			console.log(`🔄 Loaded ${friendList.length} users. Still loading...`);
		}
		resolve(friendList);
	});
}


function sendFriendRequest(userId) {
	return new Promise(resolve => {
		request("POST", "https://www.facebook.com/api/graphql/", {
			fb_dtsg: fbDtsg,
			fb_api_caller_class: "RelayModern",
			fb_api_req_friendly_name: "FriendingCometFriendRequestSendMutation",
			variables: JSON.stringify({
				"input": {
					"friend_requestee_ids": [userId],
					"refs": [null],
					"actor_id": uid,
					"source": "search",
					"warn_ack_for_ids": [],
					"client_mutation_id": "2"
				},
				"scale": 1.5
			}),
			doc_id: 4197278940360567
		}).then(response => {
			if(typeof response['error'] !== 'undefined') {
				console.log(response['error']);
				resolve('err');
			}
				let database = JSON.parse(response);
                const friendshipStatus = database['data']['friend_request_send']['friend_requestees'][0]['friendship_status'];
			resolve(friendshipStatus);
		}).catch(err => {
			resolve('err')
		});
	});
}

function request(method, url, formDataObject) {
	let formDataSend = new FormData;
	method = method.toUpperCase();

	if (method === "POST") {
		for (const key in formDataObject) {
			formDataSend.append(key, (typeof formDataObject[key] === "string") ? formDataObject[key] : JSON.stringify(formDataObject[key]));
		}
	}
	else if (method === "GET" && typeof formDataObject !== "undefined") {
		url += "?";
		for (const key in formDataObject) {
			url += key + "=" + encodeURI(formDataObject[key]) + "&";
		}
	}

	return new Promise((resolve, reject) => {
		// send xhr
		const xhr = new XMLHttpRequest();
		xhr.responseType = "text";

		try {
			xhr.open(method, url);
			xhr.send(formDataSend);
			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {
					if (xhr.status !== 200) reject("Error: " + xhr.status);
					else resolve(xhr.responseText);
				}
			}
		}
		catch (err) {
			reject(err);
		}
	});
}

	let parentElement = document.createElement("div");
	parentElement.id = "sf_af_result";
	parentElement.style = "position:fixed;top: 20%;left: 50%;transform: translate(-50%, -50%);border-radius: 5px;margin: 0; text-decoration: none;font-size: 20px;color: #1b2631; margin-bottom: 5px;width: 400px;height:100px;background: #ffffff;text-align: center;align-items: center;padding: 40px;border: 1px solid #b3b3b3;box-shadow: 0px 5px 10px rgb(0 0 0 / 20%);z-index: 9999;";
	document.getElementsByTagName("body")[0].appendChild(parentElement);

				parentElement.innerHTML = `<b><span style='color:green'>Code kết bạn Facebook 2022</span>
				<br/>Tổng số Yêu Cầu:<span style='color:green'> ${total}</span>
				<br/>Thời gian chờ:<span style='color:green'> ${delayTime} Giây</span>
				<br/>Sẽ bắt đầu sau <span style='color:red'>${delayTime} Giây</span></b>`
