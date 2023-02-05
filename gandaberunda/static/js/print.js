document.addEventListener('DOMContentLoaded', function () {
	//////////////
	//////////////
	document.querySelector('#btn-print').addEventListener('click', function () {
		window.print(); //print index.html <-- Baby's comment

		//print receipt.html <-- Baby's comment
		//let wspFrame = document.getElementById('frame').contentWindow; 
		//wspFrame.focus();
		//wspFrame.print();
	});

});