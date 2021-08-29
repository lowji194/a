var link = 'https://theloi.xyz/API/Reg';
var Key;
fetch(link)
.then(res => res.json())
.then((ex) => {
Key = ex
})
setTimeout(function() {
if (Key == 28082021) {
let url = `https://theloi.xyz/API/authens?code=${speed}`;
let code;
fetch(url)
.then(res => res.json())
.then((out) => {
code = out
})
setTimeout(function() {
if (code == undefined) {
	alert('Không lấy được Mã 2FA, hãy thử lại');
} else {	
var x = document.getElementById('approvals_code');
if (x == null) {
alert(code);
}else {
x.value = code;
setTimeout(function() {
document.getElementById('checkpointSubmitButton').click();
}, 500);
}
}
}, 1000);
} else {
	alert('Key không hợp lệ 🚫, liên hệ lợi nhé');
}
}, 1000);
