function auth(){
	var login = document.getElementById('nickname');
	var password = document.getElementById('password');
	var xmlhttp = getXmlHttp(); // ������ ������ XMLHTTP
    xmlhttp.open('POST', 'SERVER', true); // ��������� ����������� ����������
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // ���������� ���������
    xmlhttp.send("login=" + encodeURIComponent(login) + "&password=" + encodeURIComponent(password); // ���������� POST-������
    xmlhttp.onreadystatechange = function() { // ��� ������ �� �������
      if (xmlhttp.readyState == 4) { // ����� ������
       //��������� ������
      }
    };
}