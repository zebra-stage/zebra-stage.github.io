/*
    File Name       : dcs_script.js
    Description     : DCS content specific JS.
    Author          : Eranga Tennakoon - GQCD86 
    Release Notes   :
        01/22/2025 - Code snippets copy and PowerShell file download support added.
        05/12/2024 - Initial document. Tab control support added
*/

/*
    Manage tabs on DCS Scanner home page (dcs/scanners/index.html).
    Make sure to display only on tab content at time.
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

/*
    Copy the code snippet to clipboard. Button animation implemented between 'Copy' and 'Copied'.
    Time intervals can be adjusted as needed. Refer to the comments below.
 */
function copyCode(button) {
    const code = document.getElementById('code-snippet').innerText;
    navigator.clipboard.writeText(code).then(() => {
        button.textContent = 'Copied'; // Change text to 'Copied'
        setTimeout(() => {
            button.textContent = 'Copy'; // Revert text to 'Copy' after 2 seconds
        }, 2000); // 2000 milliseconds = 2 seconds
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
}

/*
    Create the download file using the code block specified in <code></code> tags.
    Using this I've avoid keeping the physical files in the server.
*/
function downloadFile(filename) {
    const code = document.getElementById('code-snippet').innerText;
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = filename; // Use the passed filename, as the name of the download file.
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}