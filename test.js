
/*
		Script by JayremntB, 2021
		Send friend request to list friends of an user
		Please copy all the code to make sure that you will not get any errors
    ------
 */

// You can change time delay below or not (in milliseconds, 1 s = 1000 ms)
let delayTime = 5; // thời gian giữa hai lần gửi lời mời
let freezeTime = 30 * 60 * 1000; // thời gian chờ khi không thể gửi thêm lời mời
let accessToken = "EAAGNO4a7r2wBAF6a7Sp2KGEpRM4zeIUdC58iznjRArE83nrUX9i1ZCrQzkbByvPabrlVqO5m0FWQuqagHV7W9qvtofrRbZA3VD1PtyYuwiAJRFUeu8FrqtgcZAYlkJD3bTV3Wb2dqPWvlJZA6C7O9qFmp2HYfSeL5CzK0VtRGWnW4sPXPMJX2UCSbqu7zyUZD";
let targetId = '100005942927037'; // Id người muốn lấy danh sách kết bạn

// Do not modify
let fbDtsg = FBDTSG;
// let uid = document.cookie.split(";").find(x => x.includes("c_user")).split("=")[1];
console.log(fbDtsg)
(() => {
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
		console.log("Loaded successfully. Start sending...");

		(async () => {
			let index = 1;
			for (const user of loadedUsers) {
				let response = await sendFriendRequest(user.id);
				if (response === 'ok') console.log(`👉 Sent request to ${user.name}. ${loadedUsers.length - index} remaining... (profile: ${user.link})`);
				else console.log(`Sent failed. Please wait for ${freezeTime/1000}s to continue`);
				index++;
				await new Promise(_ => {
					setTimeout(_, response === 'ok' ? delayTime: freezeTime);
				});
			}
			console.log("👌 DONE!");
		})();
	});
})();

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
			resolve('ok');
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
