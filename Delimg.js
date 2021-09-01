if (window.location.href.includes("settings")) {
var x = document.getElementsByClassName('_56by _54k8 _52jg _56bs _26vk _56bt')

			for (var i = 1; i < x.length; i++) {x[i].click();};
                window.location.href = "https://m.facebook.com/settings/security_login/";
				
} else if (window.location.href.includes("allactivity")) {
var del = document.getElementsByClassName('oajrlxb2');
function add(n) {
    var x = document.getElementsByClassName('oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 j83agx80 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l bp9cbjyn s45kfl79 emlxlaya bkmhp75w spb7xbtv rt8b4zig n8ej3o3l agehan2d sk4xxmp2 taijpn5t tv7at329 thwo4zme')
    let date = x[n].parentNode.parentNode.parentNode.parentElement.firstElementChild.innerText
    x[n].click();
    setTimeout(function() {
        for (var e = 0; e < del.length; e++) {
            if (del[e].innerText == 'Chuyển vào thùng rác') {
                del[e].click();
            }
        }
        setTimeout(function() {
            for (var e = 0; e < del.length; e++) {
                if (del[e].innerText == 'Chuyển vào Thùng rác') {
                    del[e].click();
                }
            }
            console.log(`Đã xoá ảnh ngày ${date}`);
            setTimeout(function() {
                add(0);
            }, 2000);
        }, 500);
    }, 500);
}
add(0);
} else {
window.location.href = 'https://www.facebook.com/me/allactivity/?activity_history=false&category_key=PHOTOSANDVIDEOS&manage_mode=false'
}
