return new Promise(_ => {
		let loadedUsers = [];

		let load = (cursor) => {
			Facebook.getSentFriendRequests(cursor).then(response => {
				let loadedList = response.edges;
				let pageInfo = response.page_info;

				loadedList.forEach(user => {
					loadedUsers.push({
						id: user['node']['id'],
						name: user['node']['name'],
						url: user['node']['url']
					});
				});

				Ffm.updateLog(`🔄 Đã load ${loadedUsers.length} lời mời. Vẫn đang load...`);

				if (pageInfo.has_next_page && pageInfo.end_cursor) {
					(async () => {
						await new Promise(_ => {
							return setTimeout(() => {
								oldCursor = pageInfo.end_cursor;
								load(pageInfo.end_cursor);
								_();
							}, 0);
						});
					})();
				}
				else {
					Ffm.updateLog(`Đã load ${loadedUsers.length} lời mời. Bắt đầu huỷ lời mời...`);
					(async () => {
						let index = 0;
						for (const user of loadedUsers) {
							var a = new Date();
							var w = new Date,
								h = w.getHours();
							var mi = w.getMinutes();
							var se = w.getSeconds();
							if (10 > h) {h = "0" + h}
							if (10 > mi) {mi = "0" + mi}
							if (10 > se) {se = "0" + se}
							// if (index > total) break;
							++index;
							await Facebook.cancelSentFriendRequest(Ffm.account.id, user.id);
							Ffm.updateLog(`👉 Đã huỷ lời mời đến ${user.name}. Còn ${loadedUsers.length - index} lời mời...`);
							if (Key == Code) {
								await new Promise(_ => {
									setTimeout(_, 1000);
								});
							}
							else {
								Ffm.updateLog('                            Lỗi Key 🚫, hãy tắt Chrome và thử lại');
								return;
							}
						}

						Ffm.updateLog(`                             👌 Hoàn thành huỷ ${index}✔️ lời mời\n                              Tự động tắt Chrome lúc: ${h}:${mi}:${se}\n-----------------------------------------------------------------------------------`);
						chrome.windows.getCurrent({}, function (window) {
							chrome.windows.remove(window.id);
						});
						_();
					})();
				}
			}).catch(err => {
				console.log(err);
				Ffm.updateLog(`⛔ Có lỗi khi load lời mời, sẽ chạy lại sau...10 giây`);
				_();
				setTimeout(() => {
					load(oldCursor);
				}, 10000);
			});
		}

		load(oldCursor);
	});
