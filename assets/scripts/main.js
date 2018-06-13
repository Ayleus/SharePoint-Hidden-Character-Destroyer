(function(){
	function removeHiddenCharacters (evt) {
		var zones = document.getElementsByClassName("ms-rte-layoutszone-inner");
		for (var i = 0; i < zones.length; i++)
		{
			zones[i].innerHTML = zones[i].innerHTML.replace(/\u200b/g, '');
			zones[i].innerHTML = zones[i].innerHTML.replace(/\u00a0/g, ' ');
			zones[i].innerHTML = zones[i].innerHTML.replace(/%E2%80%8B/g, '');
		}
	}
	window.addEventListener("load", removeHiddenCharacters, false);
})();
