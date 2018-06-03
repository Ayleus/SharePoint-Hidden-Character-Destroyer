(function(){
	function removeHiddenCharacters (evt) {
		document.getElementsByClassName("ms-rte-layoutszone-inner")[0].innerHTML = document.getElementsByClassName("ms-rte-layoutszone-inner")[0].innerHTML.replace(/\u200b/g, '');
		document.getElementsByClassName("ms-rte-layoutszone-inner")[0].innerHTML = document.getElementsByClassName("ms-rte-layoutszone-inner")[0].innerHTML.replace(/\u00a0/g, ' ');
		document.getElementsByClassName("ms-rte-layoutszone-inner")[0].innerHTML = document.getElementsByClassName("ms-rte-layoutszone-inner")[0].innerHTML.replace(/%E2%80%8B/g, '');
	}
	window.addEventListener("load", removeHiddenCharacters, false);
})();
