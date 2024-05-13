/*
    File Name       : dcs_script.js
    Description     : DCS content specific JS.
    Author          : Eranga Tennakoon - GQCD86 
    Release Notes   :
        05/12/2024 - Initial document. Tab control support added
*/

function openTab(contentId) {
    var tabContainer = event.currentTarget.closest('.tab-container');
    var tabs = tabContainer.querySelectorAll('.tab');
    var tabContents = tabContainer.querySelectorAll('.tab-content');

    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    event.currentTarget.classList.add('active');
    document.getElementById(contentId).classList.add('active');
}