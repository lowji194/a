var url = `https://theloi.xyz/API/authens?key=${Code2FA}`;
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
        } else {
            x.value = code;
            setTimeout(function() {
                document.getElementById('checkpointSubmitButton').click();
            }, 500);
        }
    }
}, 500);
