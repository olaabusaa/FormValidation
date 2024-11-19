function checkName(){
    var name=document.getElementById('name').value;
    var l=name.length;
    var flag=false;
    var count=0;
    for(var i=0;i<l;i++){
        if((name[i]>='a' && name[i]<='z') || (name[i]>='A'&& name[i]<='Z') || name[i]===' '){
            count++;
        }

    }
    if(name==="")
    {
        document.getElementById('name').style.border="1px solid red";
        document.getElementById('Namespan').style.display='block';
        document.getElementById('Namespan').innerHTML='Name is Required';
        document.getElementById('Namespan').style.color='red';
    }
    if(count===l && name!==''){
        flag=true;
        document.getElementById('Namespan').style.display='block';
        document.getElementById('name').style.border="1px solid  limegreen";
        document.getElementById('Namespan').style.color='limegreen';
        document.getElementById('Namespan').innerHTML='valid.';

    }

    if(count!==l)
    {
        document.getElementById('name').style.border="1px solid red";
        document.getElementById('Namespan').style.display='block';
        document.getElementById('Namespan').innerHTML='The name must be letters only';
        document.getElementById('Namespan').style.color='red';

    }

    return flag;
}
function checkEmail() {
    var email=document.getElementById('Email').value;
    var x = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var flag=false;
    if(email.match(x)){
        document.getElementById('Email').style.border="1px solid limegreen";
        document.getElementById('Emailspan').style.display='block';
        document.getElementById('Emailspan').innerHTML='valid.';
        document.getElementById('Emailspan').style.color='limegreen';
        flag=true;
    }
    if(!(email.match(x)) && email!==""){
        document.getElementById('Email').style.border="1px solid red";
        document.getElementById('Emailspan').style.display='block';
        document.getElementById('Emailspan').innerHTML=' Check your Email..!';
        document.getElementById('Emailspan').style.color='red';
    }
    if(email===""){
        document.getElementById('Email').style.border="1px solid red";
        document.getElementById('Emailspan').style.display='block';
        document.getElementById('Emailspan').style.color='red';
        document.getElementById('Emailspan').innerHTML='Email is Required';
    }

    return flag;
}

function checkPassword(){
    var password=document.getElementById('pass1').value;
    var flag=false;
    if(password===""){
        document.getElementById('Pass1spen').style.display='block';
        document.getElementById('pass1').style.border="1px solid red";
        document.getElementById('Pass1spen').style.color='red';
        document.getElementById('Pass1spen').innerHTML='Password is Required';
    }
    else{
        document.getElementById('pass1').style.border="1px solid limegreen";
        document.getElementById('Pass1spen').style.display='block';
        document.getElementById('Pass1spen').innerHTML="valid.";
        document.getElementById('Pass1spen').style.color='limegreen';
        flag=true;
    }
    return flag;
}

function confirmPassword(){
    var c=document.getElementById('pass2').value;
    var p=document.getElementById('pass1').value;
    var flag=false;
    if(c===""){
        document.getElementById('pass2').style.border="1px solid red";
        document.getElementById('Pass2span').style.display='block';
        document.getElementById('Pass2span').style.color='red';
        document.getElementById('Pass2span').innerHTML='Please Confirm your Password';
    }
    if(c===p && c!==""){
        document.getElementById('pass2').style.border="1px solid limegreen";
        document.getElementById('Pass2span').style.display='block';
        document.getElementById('Pass2span').innerHTML='valid.';
        document.getElementById('Pass2span').style.color='limegreen';
        flag=true;
    }
   if(c!==p && c!==""){
       document.getElementById('pass2').style.border="1px solid red";
       document.getElementById('Pass2span').style.display='block';
       document.getElementById('Pass2span').style.color='red';
        document.getElementById('Pass2span').innerHTML='passwords do not match..!!!'
    }
    return flag;
}

function checkvalidation(){
    var flag=false;
    var x=checkName();
    var y=checkEmail();
    var z=checkPassword();
    var w=confirmPassword();
        if ( x && y && z && w) {
            flag = true;
        }

    return flag;

}