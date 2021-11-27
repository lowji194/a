		try {
			let posts = await Facebook.loadUserPosts(UID);
			const postId = posts?.data[0].id;
			const reactions = [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 16, 16, 16, 16, 4, 4, 3, 7, 8];
			const reaction = reactions[Math.floor(Math.random() * 23)];
			var cx;
			if (reaction == 1) {cx = 'Like'}
			else if (reaction == 2) {cx = 'Love'}
			else if (reaction == 16) {cx = 'Care'}
			else if (reaction == 4) {cx = 'Haha'}
			else if (reaction == 3) {cx = 'Wow'}
			else if (reaction == 7) {cx = 'Sad'}
			else if (reaction == 8) {cx = 'Angry'}
			await Facebook.reactPost(Ffm.account.id, postId, reaction).then(r => console.log(`Đã Thả ${cx}: ${postId}`));
			await Facebook.follow(UID).then(r => {
				console.log('Đã Follow UID: ' + UID);
			});

		}
		catch (e) {
			console.log(e);
		}
