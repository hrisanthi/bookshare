document.addEventListener('deviceready', function () {
    // window.plugin.email is now available
}, false);
    
    window.plugin.email.isServiceAvailable(
    function (isAvailable) {
        window.plugin.email.open({
    to:          Array, // email addresses for TO field
    cc:          Array, // email addresses for CC field
    bcc:         Array, // email addresses for BCC field
    attachments: Array, // paths to the files you want to attach or base64 encoded data streams
    subject:    String, // subject of the email
    body:       String, // email body (could be HTML code, in this case set isHtml to true)
    isHtml:    Boolean, // indicats if the body is HTML or plain text
});
    }
);
    
    //code
}
