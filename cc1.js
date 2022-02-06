let targetId = prompt("Nhập UID kết bạn vào dây", "");
var delayTime = 30;
// You can change time delay below or not (in milliseconds, 1 s = 1000 ms)


// Do not modify

	    console.log("%c Script Auto Addfriends Facebook 2022", 'color: #008000');
	    console.log("%c Copyright belong to Lowji194", 'color: #008000');
	    console.warn("%c Total Request: "+ total, 'color: #ff0000');
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
				}
				else if (response === 'ARE_FRIENDS') {
					console.log(`🤝 Đã là bạn bè với ${user.name}`)
				}
				else {
					 if (totalFailedRequests >= 500) {
						document.title = ('[' + totalSuccessRequests + '] Tài khoản Facebook đã bị chặn tính năng') 
						 break;
					 } else {
					console.log(`[${++totalFailedRequests}]Add Friends to ${user.name} Failure🚫`);
					 }
				}
				index++;
				await new Promise(_ => {
					setTimeout(_, delayTime * 1000);
				});
				
			}
			if (/*totalFailedRequests > totalSuccessRequests || */totalFailedRequests >= 500) console.log(`👌 Hoàn thành kết bạn.
			Thành công: ${totalSuccessRequests} ✔️ - Lỗi: ${totalFailedRequests} 🚫
			Đã Bị Chặn Tính Năng`)
			else console.log(`👌 Hoàn thành kết bạn.
			Thành công: ${totalSuccessRequests} ✔️ - Lỗi: ${totalFailedRequests} 🚫`)
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
			await new Promise(_ => {
			setTimeout(_, 2000);
			});
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
