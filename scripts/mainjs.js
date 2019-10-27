function lab1() {
	var but_elem = document.getElementsByClassName("button");
	var elem = document.getElementsByTagName("iframe");
	but_elem[0].style.fontWeight='bold';
	but_elem[1].style.fontWeight='normal';
	but_elem[2].style.fontWeight='normal';
	elem[0].setAttribute("src", "pages/lab1.html");
	elem[0].style.height = "3750px";
	elem[0].style.marginBottom = "50px";
};

function lab2() {
	var but_elem = document.getElementsByClassName("button");
	var elem = document.getElementsByTagName("iframe");
	but_elem[1].style.fontWeight='bold';
	but_elem[0].style.fontWeight='normal';
	but_elem[2].style.fontWeight='normal';
	elem[0].setAttribute("src", "pages/lab2.html");
	elem[0].style.height = "1200px";
	elem[0].style.marginBottom = "50px";
};

function lab3() {
	var but_elem = document.getElementsByClassName("button");
	var elem = document.getElementsByTagName("iframe");
	but_elem[2].style.fontWeight='bold';
	but_elem[0].style.fontWeight='normal';
	but_elem[1].style.fontWeight='normal';
	elem[0].setAttribute("src", "pages/lab3.html");
	elem[0].style.height = "800px";
	elem[0].style.marginBottom = "50px";
};