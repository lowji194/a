		let delayTime = 5000;


		(() => {
	//
	let parentElement = document.createElement("div");
	parentElement.id = "sf_af_result";
	parentElement.style = "position:fixed;top: 20%;left: 50%;transform: translate(-50%, -50%);border-radius: 5px;margin: 0; text-decoration: none;font-size: 20px;color: #1b2631; margin-bottom: 5px;width: 400px;height:100px;background: #ffffff;text-align: center;align-items: center;padding: 40px;border: 1px solid #b3b3b3;box-shadow: 0px 5px 10px rgb(0 0 0 / 20%);z-index: 9999;";
	document.getElementsByTagName("body")[0].appendChild(parentElement);
			
	parentElement.innerHTML = `Bắt đầu...`;
	parentElement.innerHTML = `Đang tải yêu cầu đã gửi...`;

	let loadedUsers = [];

	let load = (cursor) => {
		loadListRequests(cursor).then(response => {
			// console.log(response);
			let loadedList = response.edges;
			let pageInfo = response.page_info;

			loadedList.forEach(user => {
				loadedUsers.push({
					isPage: false,
					id: user['node']['id'],
					name: user['node']['name'],
					url: user['node']['url']
				});
			});

			parentElement.innerHTML = `🔄 Loaded ${loadedUsers.length} requests. Still loading...`;
			// console.log(pageInfo);

			if (pageInfo.has_next_page && pageInfo.end_cursor) {
				load(pageInfo.end_cursor);
			}
			else {
				parentElement.innerHTML = `Loaded successfully. Start canceling...`;
				// console.log(loadedUsers);

				(async () => {
					let index = 1;
					for (const user of loadedUsers) {
						await cancelRequest(user.id);
						parentElement.innerHTML = `👉 Huỷ kết bạn với <a href="${user.url}">${user.name}</a>. còn ${loadedUsers.length - index} lời mời...`;
						index++;
						await new Promise(_ => {
							setTimeout(_, delayTime);
						});
					}

					parentElement.innerHTML = `👌 DONE!`;
				})();
			}
		});
	}

	load('');
})();

function loadListRequests(cursor = "", limit = 10) {
	return new Promise((resolve, reject) => {
		request("POST", "https://www.facebook.com/api/graphql/", {
			fb_api_caller_class: "RelayModern",
			fb_api_req_friendly_name: "FriendingCometOutgoingRequestsDialogPaginationQuery",
			variables: JSON.stringify({
				"count": limit,
				"cursor": cursor,
				"scale": 1.5
			}),
			doc_id: 3032982086830073,
			fb_dtsg: fbDtsg
		}).then(response => {
			try {
				let data = JSON.parse(response)['data'];
				resolve(data['viewer']['outgoing_friend_requests_connection']);
			}
			catch (e) {
				reject(e);
			}
		}).catch(reject);
	});
}

function cancelRequest(friendId) {
	return new Promise((resolve, reject) => {
		request("POST", "https://www.facebook.com/api/graphql/", {
			fb_dtsg: fbDtsg,
			fb_api_caller_class: "RelayModern",
			fb_api_req_friendly_name: "FriendingCometFriendRequestCancelMutation",
			variables: JSON.stringify({
				"input": {
				//	"cancelled_friend_requestee_id": friendId,
					"source": "manage_outgoing_requests",
					"actor_id": uid,
					"client_mutation_id": "5"
				},
				"scale": 1.5
			}),
			doc_id: 3226051994092510

		}).then(resolve).catch(reject);
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
