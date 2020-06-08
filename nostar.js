// ==UserScript==
// @name         Anti-Washi Git
// @namespace    RTN
// @version      0.0.1
// @description  Stop starring your own repos kekw
// @author       Rye#0001
// @match        https://github.com/Washi1337*
// @grant        none
// @runat        document-end
// ==/UserScript==

(function() {
    'use strict';

    function noStar() {
    	const name = "Washi1337";

    	try {
    		let pageIdentifier = document.getElementsByClassName("url fn")[0].firstChild.data;
    		let pageStar = document.getElementsByClassName("js-toggler-container js-social-container starring-container ")[0];

    		if(pageIdentifier && pageStar)
    			pageStar.remove();

    	} catch(err) { console.log(err); }

    	try {
    		let nickname = document.getElementsByClassName("p-nickname vcard-username d-block")[0].innerText;
    		let repositories = document.getElementById("user-repositories-list").getElementsByTagName("li"); //.remove();

    		if((nickname === name) && repositories) {
    			for(let i = 0; i < repositories.length; i++) {
    				let tabStar = repositories[i].getElementsByClassName("js-social-form js-form-toggle-target")[1];
    				tabStar.remove();
    			}
    		}

    	} catch (err) { console.log(err); }

    	console.log("removed!");
    	return;
    }

    setInterval(() => {
    	noStar();
    }, 1000);

})();