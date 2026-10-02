/*
    File Name       : dcs_script.js
    Description     : DCS content specific JS.
    Author          : Eranga Tennakoon - GQCD86
    Release Notes   :
        Heading-anchor copy-link behavior added for h1 section titles.
        04/01/2025 - Added auto redirection of rebranded pages.
        01/22/2025 - Code snippets copy and PowerShell file download support added.
        05/12/2024 - Initial document. Tab control support added
*/

/*
    Heading-anchor "copy link" behavior for h1 main section titles.

    Every h1 across dcs/scanners already carries:
        <h1 class="anchor"><a class="heading-anchor" href="#id"><span></span></a>Heading Text</h1>
    dcs_styles.css reveals that icon on hover (h1 only). This turns a click
    into a copy-to-clipboard action instead of letting the browser navigate to
    the #anchor, and injects a small hover tooltip ("Copy link to heading")
    that flashes "Copied!" after a successful copy - styled via the
    .heading-anchor-tooltip rules in dcs_styles.css.
*/
document.addEventListener('DOMContentLoaded', function() {
    var anchors = document.querySelectorAll('h1.anchor > a.heading-anchor');

    anchors.forEach(function(anchor) {
        var tooltip = document.createElement('span');
        tooltip.className = 'heading-anchor-tooltip';
        tooltip.textContent = 'Copy link to heading';
        anchor.appendChild(tooltip);

        function showCopied() {
            tooltip.classList.remove('suppressed');
            tooltip.textContent = 'Copied!';
            tooltip.classList.add('show', 'copied');
            setTimeout(function() {
                tooltip.classList.remove('show', 'copied');
                // Forces the tooltip closed even if the mouse never left the
                // icon - otherwise the :hover rule in dcs_styles.css would
                // keep "Copied!" open indefinitely. Cleared on mouseleave
                // below so the icon's normal hover tooltip works again.
                tooltip.classList.add('suppressed');
                tooltip.textContent = 'Copy link to heading';
            }, 1500);
        }

        // Re-arm the normal hover tooltip on both ends of a hover - on
        // mouseleave for the common case, and again on the next mouseenter
        // in case "suppressed" got added by the 1.5s timeout firing AFTER
        // the reader had already moved away (so there was no mouseleave left
        // to clear it before this next hover).
        anchor.addEventListener('mouseenter', function() {
            tooltip.classList.remove('suppressed');
        });
        anchor.addEventListener('mouseleave', function() {
            tooltip.classList.remove('suppressed');
        });

        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            var url = window.location.origin + window.location.pathname + anchor.getAttribute('href');

            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(url).then(showCopied);
            } else {
                // Fallback for older browsers / non-secure contexts where the
                // Clipboard API is unavailable.
                var temp = document.createElement('textarea');
                temp.value = url;
                temp.style.position = 'fixed';
                temp.style.top = '-9999px';
                document.body.appendChild(temp);
                temp.select();
                try { document.execCommand('copy'); } catch (err) { /* no-op */ }
                document.body.removeChild(temp);
                showCopied();
            }
        });
    });
});

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

/**
 * Redirect the page to the given URL.
 * 
 * @param {*} redirectUrl URL that needs to be redirect.
 * @param {*} countdownElementId Element ID to update the timer text to the user.
 * @param {*} timeoutSeconds Time period to redirect.
 */
function startRedirect(redirectUrl, countdownElementId, timeoutSeconds) {
    let timeLeft = timeoutSeconds;
    const countdownElement = document.getElementById(countdownElementId);

    // Countdown timer
    const countdown = setInterval(function() {
        timeLeft--;
        countdownElement.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(countdown); // Stop the timer
            window.location.href = redirectUrl; // Redirect to the specified URL
        }
    }, 1000); // Update every second

    // Fallback redirect
    setTimeout(function() {
        window.location.href = redirectUrl;
    }, timeoutSeconds * 1000);
}