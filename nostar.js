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
    	try {
    		let pageStar = document.getElementsByClassName("js-toggler-container js-social-container starring-container ")[0];

    		if(pageStar)
    			pageStar.remove();

    	} catch(err) { console.log(err); }

    	try {
    		let repositories = document.getElementById("user-repositories-list").getElementsByTagName("li");

    		if(repositories) {
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