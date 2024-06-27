
/* AI Chatbot */
$(document).ready(function(){
  // add style to page
  // Create a link element for CSS
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://zebra-stage.github.io/css/aichatbot.css';
  link.onload = function() {
      console.log('CSS loaded and applied.');
  };
  link.onerror = function() {
      console.log('Error loading the CSS.');
  };
  // Append the link to the head
  document.head.appendChild(link);  

  var link2 = document.createElement('link');
  link2.rel = 'stylesheet';
  link2.href = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css';
  link2.onload = function() {
      console.log('CSS loaded and applied.');
  };
  link2.onerror = function() {
      console.log('Error loading the CSS.');
  };
  // Append the link to the head
  document.head.appendChild(link2);  

  //add html
  var htmlContent = `
  <div id="zbrbot-container" class="zbrbot-container salesforce-english-chat inherited-styles-for-exported-element">
  <div id="zbrbot-wrap" class="zbrchatbot-wrap">

    <div id="zbrbot-icon" class="zbrbot-icon " style="">
      <div class="zbrbot-iconimg">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chat-dots-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
        </svg>
      </div>

      <div class="zbrbot-icon-txt" id="iconText">AI Chatbot</div>
    </div>

    <div id="zbrbot" class="zbrbot zbrbot-hide ui-resizable on" style="">

      <header id="zbrbot-header" class="zbrbot-header ui-draggable-handle">
        <div class="zbrbot-headaibtns float-left">
          <div class="resize-icon zbrbot-hide" id="resize-icon" title="Resize">
            <button type="button" class="aibtn aibtn-dark aibtn-small">
              <img class="glyphicon-resize-full" src="https://www.zebra.com/content/dam/zebra-it/chaticons/zebra-max-icon-white-32x32.png" alt="Resize Expand">
              <img class="glyphicon-resize-small" src="https://www.zebra.com/content/dam/zebra-it/chaticons/zebra-min-icon-white-32x32.png" alt="Resize Collapse">
            </button>
          </div>
        </div>

        <div class="zbrbot-headaibtns float-middle">
          <div class="aibtn-wrap aibtn-liveagent-wrap" title="Techdocs GenAI Agent" id="zbrbot-title"></div>
        </div>

        <div class="zbrbot-headaibtns float-right">
          <div class="zbrbot-endchat" id="close-icon" title="End Chat">
            <button type="button" class="aibtn aibtn-dark aibtn-small aibtn-endchat" data-dismiss="modal" id="aibtn-endchat">
              <img src="https://www.zebra.com/content/dam/zebra-it/chaticons/close-icon-white-32x32.png" alt="End Chat">
            </button>
          </div>
          <div class="minimize-icon zbrbot-minimize zbrbot-hide" id="minimize-icon" title="Minimize">
            <button type="button" class="aibtn aibtn-dark aibtn-small close" data-dismiss="modal">
              <img src="https://www.zebra.com/content/dam/zebra-it/chaticons/zebra-minimize-icon-white-32x32.png" alt="Minimize">
            </button>
          </div>

          <div class="reload-icon zbrbot-reload zbrbot-hide" id="refresh-icon" title="Refresh">
            <button type="button" class="aibtn aibtn-dark aibtn-small refresh" data-dismiss="modal">
              <img src="https://www.zebra.com/content/dam/zebra-it/chaticons/zebra-refresh-icon-white-32x32.png" alt="Refresh">
            </button>
          </div>

        </div>
      </header>


      <div id="zbrbot-chatwindow" class=""></div>


      <div id="prefill-wrap" class="modal prefill-wrap" spellcheck="false">
        <div id="prefill-form" class="prefill-form" method="POST" novalidate="novalidate">


          <div class="row">
            <div class="col">


              <div class="form-group form-check">
                <label class="form-check-label" for="zbot-privacyploicy">
                  <div class="form-privacy-statement">
                    <strong>
                      <u id="zbr-declaration">Declaration, Notice and Consent:</u>
                    </strong>
                    <br>
                    <b style="font-weight: normal;" id="zbr-privacy-text">By using this chatbot, you consent to the recording and use of any information you share as provided in Zebra’s <a target="_blank" href="https://www.zebra.com/us/en/about-zebra/company-information/legal/terms-of-use.html">Terms of Use</a> and <a target="_blank" href="https://www.zebra.com/us/en/about-zebra/company-information/legal/privacy-statement.html">Privacy Statement</a>.</b>
                  </div>
                </label>
              </div>

            </div>
          </div>

          <div class="row">
            <div class="col">
              <button id="prefill-submit" class="aibtn aibtn-zbr">Start Chatting</button>
              <button id="close-chatbot" class="aibtn aibtn-zbr zbrbot-hide">Close Chatbot</button>
            </div>
          </div>
          <input type="hidden" name="ringside_visit_id" value="e08433b3-623f-4ae2-a2a2-a55b87cccf57">
        </div>
      </div>


    </div>
  </div>

  <df-messenger
  project-id="emc-zdtrk-research02-d"
  agent-id="7ecf5891-fd70-4a70-b44b-032b625c50cd"
  language-code="en"
  max-query-length="-1"
  allow-feedback="all">
  <df-messenger-chat
   chat-title="">
  </df-messenger-chat>
</df-messenger>  

</div>
`;
  // Append the HTML to the end of the body
  $('body').append(htmlContent);  

  $("#zbrbot-icon").click(function(){
    $("#zbrbot-icon").addClass("zbrbot-hide");
    $("#zbrbot").removeClass("zbrbot-hide");
    $("#prefill-submit").removeClass("zbrbot-hide");
    $("#close-chatbot").addClass("zbrbot-hide");
  });
  $("#zbrbot .zbrbot-endchat").click(function(){
    $("#zbrbot-icon").removeClass("zbrbot-hide");
    $("#zbrbot").addClass("zbrbot-hide");
    $("df-messenger").addClass("zbrbot-hide");
  });

  $("#close-chatbot").click(function(){
    $("df-messenger").addClass("zbrbot-hide");
    $("#zbrbot-icon").removeClass("zbrbot-hide");
    $("#zbrbot").addClass("zbrbot-hide");    
  });
  $('#prefill-submit').click(function() {
        $("#prefill-submit").addClass("zbrbot-hide");
        $("#close-chatbot").removeClass("zbrbot-hide");
        $("df-messenger").removeClass("zbrbot-hide");
                // Create a script element
                var script = document.createElement('script');
                script.src = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js';
                script.onload = function() {
                    console.log('Script loaded and executed.');
                    // Here you can add any code to execute after the script is loaded
                };
                script.onerror = function() {
                    console.log('Error loading the script.');
                };
                // Append the script to the body or head
                document.body.appendChild(script);
            });  

});  
