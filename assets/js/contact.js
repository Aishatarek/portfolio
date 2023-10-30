function validate() {
    let namee = document.querySelector("#name");
    let emaill = document.querySelector("#email");
    let phonee = document.querySelector("#phone");
    let msg = document.querySelector("#message");
    let btn = document.querySelector("#submit");
    if (btn) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            if (namee.value == "" || emaill.value == "" || msg.value == "") {
                alert("fields are required")
            } else {
                sendmail(namee.value, emaill.value, phonee.value, msg.value);
                namee.value= emaill.value= phonee.value= msg.value=""
            }
        });
    }
}
validate();

function sendmail(namee, emaill, phonee, msg) {
    emailjs.send("service_34h22rp", "template_1on2s3s", {
        name: namee,
        email: emaill,
        phone: phonee,
        message: msg,
    });
}