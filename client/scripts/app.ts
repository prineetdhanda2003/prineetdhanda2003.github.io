"use strict";

//IIFE - Immediately Invoked Functional Expression
(function (){





    function CheckLogin(){

        console.log("login checked")
        if(sessionStorage.getItem("user")){
            $("#login").html(`<a id="logout" class="nav-link" data="#"><i class="fa fa-sign-out-alt"></i> Logout</a>`)

        }
        $("#logout").on("click", function (){
           sessionStorage.clear();

            $("#login").html(`<a class="nav-link" href="/login"><i class="fa fa-sign-in-alt"></i> Login</a>`)

            location.href = "/login";

        });
    }

    function ContactFormValidation(){

        //fullName
        ValidateField("#fullName",
            /^([A-Z][a-z]{1,3}\.?\s)?([A-Z][a-z]+)+([\s,-]([A-z][a-z]+))*$/,
            "Please enter a valid full name");

        //contactNumber
        ValidateField("#contactNumber",
            /^(\+\d{1,3}[\s-.])?\(?\d{3}\)?[\s-.]?\d{3}[\s-.]\d{4}$/,
            "Please enter a valid contact number");

        //emailAddress
        ValidateField("#emailAddress",
            /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/,
            "Please enter a valid email address");
    }
    /**
     * Validate form fields provided by users
     * @param input_field_id
     * @param regular_expression
     * @param error_message
     */
    function ValidateField(input_field_id:string, regular_expression:RegExp, error_message:string ){

        let messageArea =$("#messageArea").hide();

        $(input_field_id).on("blur", function (){

            let inputFieldText = $(this).val() as string;

            if(!regular_expression.test(inputFieldText)){
                //full name does not success Pattern Matching
                $(this).trigger("focus"). trigger("select");
                messageArea.addClass("alert alert-danger").text(error_message).show();

            } else{
                //fullName is successful
                messageArea.removeAttr("class").hide();

            }


        });
    }

    /**
     * Add contact to localStorage
     * @param fullName
     * @param contactNumber
     * @param emailAddress
     * @constructor
     */
    function AddContact(fullName:string, contactNumber:string, emailAddress:string){
        let contact = new core.Contact(fullName, contactNumber, emailAddress)
        if(contact.serialize()){
            let key = contact.fullName.substring(0,1) + Date.now();
            localStorage.setItem(key, contact.serialize() as string);
        }
    }
    function DisplayHomePage(){
        console.log("Called DisplayHomePage()");

        $("#AboutUsBtn").on("click", () => {
            location.href = "/about";

        });

        $("main").append(`<p id="MainParagraph" class="mt-3">This is the first Paragraph</p>`);

        $("main").append(`<article class="container"><p id="ArticleParagraph" class="mt-3">This is my article paragraph</p></article>`);


    }
    function DisplayProductsPage(){
        console.log("Called DisplayProductsPage");
    }
    function DisplayServicesPage(){
        console.log("Called DisplayServicesPage");
    }
    function DisplayAboutUsPage(){
        console.log("Called DisplayAboutUsPage");
    }
    function DisplayContactUsPage(){
        console.log("Called DisplayContactUsPage");

        $("a[data='contact-list']").off("click");
        $("a[data='contact-list']").on("click", function (){
            location.href = "/contact-list";

        });

        ContactFormValidation();

        let sendButton = document.getElementById("sendButton") as HTMLElement;
        let subscribeButton = document.getElementById("subscribeCheckbox") as HTMLInputElement;

        sendButton.addEventListener("click", function(){
            if(subscribeButton.checked){

                let fullName:string = document.forms[0].fullName.value;
                let contactNumber:string = document.forms[0].contactNumber.value;
                let emailAddress:string = document.forms[0].emailAddress.value;

                AddContact(fullName, contactNumber, emailAddress);
                // let contact = new core.Contact(fullName.value, contactNumber.value, emailAddress.value);
                // if(contact.serialize() as string){
                //     let key = contact.fullName.substring(0,1) + Date.now();
                //     localStorage.setItem(key, contact.serialize() as string)
                // }
            }
        });
    }
    function DisplayContactListPage() {
        console.log("Called DisplayContactListPage()");


        $("a.delete").on("click", function(event)  {
            if(!confirm("Please confirm contact deletion")){
                event.preventDefault();
                location.href = "/contact-list";
            }
        });
    }

    function DisplayEditPage(){
            console.log("Called DisplayEditPage()");

           ContactFormValidation();
    }


    function DisplayLoginPage(){
        console.log("Called DisplayLoginPage");

        let messageArea = $("#messageArea");
        messageArea.hide();

        $("#loginButton").on("click", function (){

            let success = false;
            let newUser = new core.User() ;

            $.get("./data/users.json", function (data){

                for(const user of data.users) {
                    //request succeeded
                    console.log(data.user);

                    let username:string = document.forms[0].username.value;
                    let password:string = document.forms[0].password.value;

                    if (username === user.Username && password === user.Password) {
                        newUser.fromJSON(user);
                        success = true;
                        break;
                    }
                }


                    if(success) {
                        sessionStorage.setItem("user", newUser.serialize() as string);
                        messageArea.removeAttr("class").hide();
                        location.href = "/contact-list";
                    }else{
                        $("#username").trigger("focus").trigger("select");
                        messageArea
                            .addClass("alert alert-danger")
                            .text("Error: Invalid Credentials")
                            .show();
                    }

                    $("#cancelButton").on("click", function (){
                        document.forms[0].reset();
                        location.href = "/home";

                    });

            });


        });


    }

    function DisplayRegisterPage(){
        console.log("Called DisplayRegisterPage");
        // AddLinkEvents("login");
    }

    function Display404Page(){
        console.log("Called Display404Page");
    }



    function Start(){
        console.log("App Started");

        let page_id = $("body")[0].getAttribute("id");

        CheckLogin();
        switch (page_id){
            case "home":
                 DisplayHomePage();
                 break;
            case "about":
                DisplayAboutUsPage();
                break;
            case "services":
                DisplayServicesPage();
                break;
            case "contact":
                DisplayContactUsPage();
                break;
            case "contact-list":

                DisplayContactListPage();
                break;
            case "register":
                DisplayRegisterPage();
                break;
            case "login":
                DisplayLoginPage();
                break;
            case "edit":
            case "add":

                DisplayEditPage();
                break;
            case "404":
                Display404Page();
                break;
        }


    }
    window.addEventListener("load", Start);

})();