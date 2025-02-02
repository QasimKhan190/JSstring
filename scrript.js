function fullname(){
    a=prompt("enter first name")
    b=prompt("enter last name")
    c=a+b
    document.write(`your full name is <b>${c}</b>`)
}

function mobile(){
    m1=prompt("enter your favourite mobile")
    m2=m1.length
    document.write(`your favourite mobile is <b>${m1}</b> and its lenght is <b>${m2}</b>`)
}

function pak(){
    pa="pakistani"
    pro=prompt("enter any character from 'Pakistani' to find index of ")
    p=pa.indexOf(pro)
    document.write(`the index of letter <b>${pro}</b> in the word Pakistani is <b>${p}</b>`)
}


function last(){
    las="hello world"
    l1=prompt("enter any character from 'hello world' to find the last index of ")
    la=las.lastIndexOf(l1)
    document.write(`the index of letter <b>${l1}</b> in the word hello world is <b>${la}</b>`)
}


function find(){
    fin="Pakistani"
    fi=prompt("enter index number (0-8) to find character")
    f1=fin[fi]
    document.write(`<b>Pakistani</b> <br> <b>${f1}</b> is present on index <b>${fi}</b>`)
}


function replace(){
    city = "Hyderabad";
    newCity = city.replace("Hyder", "Islam");
    document.write(`<b>city</b> : ${city} <br> <b>new city</b> : ${newCity}`)
}



function replace2(){
    message="Ali and Sami are best friends.They play cricket and football together."
    mes2=message.replaceAll("and","&")
    document.write(`<b>normal</b> : ${message} <br> <b>replaced</b> : ${mes2}`)
}


function convert(){
    con1=prompt("write string to convert in number")
    document.write(`<b>value</b> : ${con1} <br> <b>type</b> : ${typeof con1} <br> `)
    con2=Number(con1)
    document.write(`<b>value</b> : ${con2} <br> <b>type</b> : ${typeof con2} <br> `)
}




function capital(){
    cpa=prompt("enter to convert into uppercase")
    cp=cpa.toUpperCase()
    document.write(cp)
}



function tittle(){

    function toTitleCase(str) {
        return str
        .toLowerCase()       // Pehle sab lowercase mein convert karna
        .split(" ")          // Har word ko alag karna (array banega)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Pehla letter uppercase aur baaki as it is
        .join(" ");          // Wapas string mein convert karna
    }
    titl=prompt("enter to convert tittle caes")
    til=toTitleCase(titl)
    document.write(til)
}



function convert2(){
    conv2=(prompt("enter number to convert in string"))
    strin=conv2.toString()
    sr=strin.replace(".", "")
    document.write(`<b>number</b> : ${conv2} <br> <b>result</b> :${sr}`)

}
function searchItem() {
    si = ["cake", "apple pie", "cookie", "chips", "patties"];
    search = prompt("Enter an item to search:").toLowerCase();
    ind=si.indexOf(search) 
    found = si.some(item => item.toLowerCase() === search); 

    if (found) {
        document.write(`<b>${search}</b> is available in the list at index <b>${ind}</b>`);
    } else {
        document.write(`<b>${search}</b> is not found in the list.`);
    }
}

function getPassword() {
    let password = prompt("Enter a valid password (at least 6 characters, must contain letters & numbers, and should not start with a number):");

    if ( password.length < 6 || /^\d/.test(password) || /[a-zA-Z]/.test(password) || /\d/.test(password) ){
        document.write("Invalid password! Try again.");
    }
else{
    document.write("Password accepted!");
}
}

function array(){
     arra = prompt("enter any thing to convert in array");
     arr = arra.split("");
     document.write(`[${arr}]`)
}


function last2(){
    las=prompt("enter any thing")
    la=las.slice(-1)
    document.write(`last character of "<b>${las}</b>" is <b>${la}</b>`)
}


function occur() {
    var txt = "The quick brown fox jumps over the lazy dog";
    var count = txt.toLowerCase().split(" ").filter(word => word === "the").length;

    document.write("Occurrences of 'the':", count);
}

