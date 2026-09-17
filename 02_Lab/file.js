function validateForm() {
        console.log("Submit button click");

        var a = document.getElementById("name").value;
        console.log("username is ", a);
        var b = document.getElementById("email").value;
        console.log("email is ", b);
        var c = document.getElementById("dob").value;
        console.log("dob is ", c);
        var d = document.getElementById("password").value;
        let op = validateEmail(b);
        let op1 = validatePassword(d);
        if(a=="")
        {
            alert("Please enter name")
            return false;
        }
                if(b=="")
        {
            alert("Please enter your email")
            return false;
        }
        if(op == false)
        {
            alert("Please enter a valid email")
            return false;
        }
        if(c=="")
        {
            alert("Please enter your date of birth")
            return false;
        }
        if(d=="")
        {
            alert("Please enter your password")
            return false;
        }
        }
     function validateEmail(email) {
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
    function validatePassword(password) {
                var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{6,}$/;
        return passwordRegex.test(password);
    }
