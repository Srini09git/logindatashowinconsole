// function createlabels(tagname,attrname,attrvalue,content){
//     var ele=document.createElement(tagname);
//     ele.setAttribute(attrname,attrvalue);
//     ele.innerHTML=content;
    
//     return ele;
//     }

// function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1){
//     var ele=document.createElement(tagname);
//     ele.setAttribute(attrname,attrvalue);
//     ele.setAttribute(attrname1,attrvalue1);
//     return ele;
//     }
// function createlinebreak(tagname){
//     var ele=document.createElement(tagname);
//     return ele;
//     }

    
// var label=createlabels("label","for","name","FirstName");
// var br1=createlinebreak("br");
// var input=createinput("input","type","Text","id","name");
// var br2=createlinebreak("br");

// var label1=createlabels("label","for","name","LastName");
// var br3=createlinebreak("br");
// var input1=createinput("input","type","Text","id","name");
// var br4=createlinebreak("br");

// var label2=createlabels("label","for","name","MiddelName");
// var br5=createlinebreak("br");
// var input2=createinput("input","type","Text","id","name");
// var br6=createlinebreak("br");

// var label3=createlabels("label","for","number","PhoneNumber");
// var br7=createlinebreak("br");
// var input3=createinput("input","type","number","id","number");
// var br8=createlinebreak("br");


// document.body.append(label,br1,input,br2,label1,br3,input1,br4,label2,br5,input2,br6,label3,br7,input3,br8);



function sub(){
    var res=document.getElementById("ftext").value;
    var res1=document.getElementById("mtext").value;
    var res2=document.getElementById("ltext").value;
    var res3=document.getElementById("email").value;
    var res4=document.getElementById("pass").value;
     console.log(res,res1,res2,res3,res4);
}