// ==UserScript==
// @name         Anti-Washi Git
// @namespace    RTN
// @version      0.0.5
// @description  Stop starring your own repos kekw
// @author       Rye#0001
// @match        https://github.com/Washi1337*
// @match        https://github.com/
// @grant        unsafeWindow
// @runat        document-end
// ==/UserScript==

(function() {
    'use strict';

    function noStar() {
    	try {
            //Remove star from the main repo page
    		let pageStar = document.getElementsByClassName("js-toggler-container js-social-container starring-container ")[0];

    		if(pageStar)
    			pageStar.remove();
    	} catch(err) {  }

    	try {
            //Remove stars from the repository tab
    		let repositories = document.getElementById("user-repositories-list").getElementsByTagName("li");

    		if(repositories) {
    			for(let i = 0; i < repositories.length; i++) {
    				let tabStar = repositories[i].getElementsByClassName("js-social-form js-form-toggle-target")[1];
    				tabStar.remove();
    			}
    		}
    	} catch (err) {  }

        try {
            // Remove stars from the activity feed
            let news = document.getElementsByClassName("news")[0];
            let starNotice = news.getElementsByClassName("watch_started");

            for(let i = 0; i < starNotice.length; i++) {
                let username = "Washi1337";
                let starElement = starNotice[i].getElementsByClassName("btn btn-sm ml-2 mb-2 js-toggler-target")[1];
                let name = starNotice[i].getElementsByClassName("f4 lh-condensed text-bold text-gray-dark")[0].outerText.substring(0, username.length);

                if(starElement && (name == username)) {
                    starElement.remove();
                    console.log(`Removed star index ${i} for ${username}`);
                }
            }

        } catch(err) {  }

    	console.log("Removed!");
    	return;
    }

    setInterval(() => {
    	noStar();
    }, 1000);

})();