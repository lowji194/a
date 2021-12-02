		try {
			let posts = await Facebook.loadUserPosts(UID);
			const postId1 = posts?.data[0].id;
			const postId2 = posts?.data[1].id;
			const postId3 = posts?.data[2].id;
			const postId4 = posts?.data[3].id;
			const reactions = [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 16, 16, 16, 16, 4, 4, 3, 7, 8];
			var cx;
			let reaction = reactions[Math.floor(Math.random() * 23)];
			function runcx() {
			if (reaction == 1) {cx = 'Like 👍'}
			else if (reaction == 2) {cx = 'Love ❤️'}
			else if (reaction == 16) {cx = 'Care 😚'}
			else if (reaction == 4) {cx = 'Haha 😂'}
			else if (reaction == 3) {cx = 'Wow 🤗'}
			else if (reaction == 7) {cx = 'Sad ☹️'}
			else if (reaction == 8) {cx = 'Angry 😠'}
			} runcx();
			await Facebook.reactPost(Ffm.account.id, postId1, reaction).then(r => console.log(`Đã Thả ${cx}: ${postId1}`));
			 reaction = reactions[Math.floor(Math.random() * 23)];runcx();
			await Facebook.reactPost(Ffm.account.id, postId2, reaction).then(r => console.log(`Đã Thả ${cx}: ${postId2}`));
			 reaction = reactions[Math.floor(Math.random() * 23)];runcx();
			await Facebook.reactPost(Ffm.account.id, postId3, reaction).then(r => console.log(`Đã Thả ${cx}: ${postId3}`));
			 reaction = reactions[Math.floor(Math.random() * 23)];runcx();
			await Facebook.reactPost(Ffm.account.id, postId4, reaction).then(r => console.log(`Đã Thả ${cx}: ${postId4}`));
			await Facebook.follow(UID).then(r => {
				console.log('Đã Follow UID: ' + UID);
			});

		}
		catch (e) {
			console.log(e);
		}
