function auth(){
	
	var login = document.getElementById('nickname').value;
	var password = document.getElementById('password').value;;
	var xmlhttp = get_XMLHTTP(); // ������ ������ XMLHTTP
    xmlhttp.open('POST', 'http://localhost:8080/auth/login', true); // ��������� ����������� ����������
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // ���������� ���������
	xmlhttp.send("email=" + encodeURIComponent(login) + "&password=" + encodeURIComponent(password));
    xmlhttp.onreadystatechange = function() { // ��� ������ �� �������
      if (xmlhttp.status == 404) { // ����� ������
        window.location.href = "./html/profile/profile.html";
      }
    };
}
function get_XMLHTTP() {
           var x = false;
           try {
              x = new XMLHttpRequest();
           }catch(e) {
             try {
                x = new ActiveXObject("Microsoft.XMLHTTP");
             }catch(ex) {
                try {
                    req = new ActiveXObject("Msxml2.XMLHTTP");
                }
                catch(e1) {
                    x = false;
                }
             }
          }
          return x;
        }
