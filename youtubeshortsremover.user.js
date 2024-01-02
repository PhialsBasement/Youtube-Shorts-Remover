// ==UserScript==
// @name         YouTube Shorts Remover
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Remove elements with the name ytd-rich-section-renderer on YouTube
// @author       You
// @match        *://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function removeElements() {
        // Find all elements with the name 'ytd-rich-section-renderer'
        const elementsToRemove = document.querySelectorAll('ytd-rich-section-renderer');

        // Remove each element
        elementsToRemove.forEach(element => {
            element.remove();
        });
    }

    // Function to continuously check and remove elements every second
    function checkAndRemove() {
        setInterval(removeElements, 1000); // Adjust the interval as needed
    }

    // Wait for the page to fully load before starting the continuous check
    window.addEventListener('load', checkAndRemove);
})();
