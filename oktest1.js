

// You can change time delay below or not (in milliseconds, 1 s = 1000 ms)
let delayTime = time * 1000; // thời gian giữa hai lần gửi lời mời
let total = amount; // thời gian giữa hai lần gửi lời mời
let freezeTime = 10 * 60 * 1000; // thời gian chờ khi không thể gửi thêm lời mời
let accessToken = token;
let targetId = prompt("Nhập ID muốn kết bạn", "100005942927037"); // Id người muốn lấy danh sách kết bạn

// Do not modify
let fbDtsg = Keyfb;
let uid = UID;

	console.log("---------------------------");
	console.log("Script by JayremntB, 2021");
	console.log("Send friend request to list friends of an user");
	console.log("---------------------------");
	console.warn(`Whenever you want to pause the execution, click the "Sources" tab and press F8 or Ctrl + \\ on your keyboard.`)
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
				/*
				try {
				let userInfo = loadProfile;
				let userGender = userInfo?.gender;
				if (userGender == 'female') var Gender = 'Nữ';
				else if (userGender == 'male') var Gender = 'Nam';
				else var Gender = 'Không xác định';
				let userBirthYear = userInfo?.birthday ? userInfo?.birthday?.split('/')[2] : undefined;
				let userAge = userBirthYear ? new Date().getFullYear() - userBirthYear : 0;
				console.log(`${user.id}: Giới tính: ${Gender} Tuổi: ${userAge}`);
				*/
				if (totalSuccessRequests >= total) break;
				else if (totalFailedRequests >= 200) break;
				
				let response = await sendFriendRequest(user.id);
				if (response === 'OUTGOING_REQUEST') {
					console.log(`%c Add Friends to ${user.name}🙋‍♂️ - ${++totalSuccessRequests} request`, 'color: #008000');
				}
				else if (response === 'ARE_FRIENDS') {
					console.log(`🤝 Đã là bạn bè với ${user.name}`)
				}
				else {
					console.log(`[${++totalFailedRequests}]Add Friends to ${user.name} Failure🚫 - ${check[0].innerText}`);
				}
				index++;
				await new Promise(_ => {
					setTimeout(_, delayTime);
				});
				/*
				}  catch (e) {
				console.log(e);
					await Ffm.updateLog(`⚠️ (${userInfo.name}) ID không hợp lệ hoặc có lỗi xảy ra (${h}:${mi}:${se})`);
				} */
			}
			console.log("👌 DONE!");
		})();
	});


function loadFriendsList(uid = '', limit = 5000, chunkLimit = 200) {
	return new Promise(async (resolve, reject) => {
		let after = '';
		let hasNext = true;
		let friendList = [];
		let url = `https://graph.facebook.com/${uid}/friends?limit=${chunkLimit}&after=${after}&fields=name,id,link&access_token=${accessToken}`;
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
			console.log(err);
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
/*

	function loadProfile(username) {
		return new Promise((resolve, reject) => {
					request("GET", `https://graph.facebook.com/${username}?access_token=${accessToken}`, {
		}).then(response => {
				let data = JSON.parse(response);
				console.log(data)
			}).catch(reject);
			
		});
	}
	*/