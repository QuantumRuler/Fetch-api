
const vedant = async () =>{

    let p = await fetch("https://1qy9d2uuyg.execute-api.ap-northeast-1.amazonaws.com/default/Students-API").then((response) =>{
        //console.log('resloved',response);
        //this is a promise
        //console.log(response);
        return response.json();
    }).then(data => {
        //console.log(data);
        return data;
    }).catch((err)  => {
        console.log('rejected',err);
    });
    //console.log(p)
    return p;
}

const vedant2 = async () => {
    let response = await fetch("https://1qy9d2uuyg.execute-api.ap-northeast-1.amazonaws.com/default/Students-API")
    let r = await response.json ;
    return r;

}
let x = prompt("Please Enter your School name(Default is Brigham Young University) ",'Brigham Young University');

const find_and_display = async (x) =>{
    let data = await vedant();
    data.forEach(item => {
        if(item["college"] == x){

            //console.log("ok");
            console.log(item);
        }        
        
    });
    
}
const lexi = async () =>{
    let data = await vedant();
    data.sort(function(a,b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()){
            return -1;
        }
        if (b.name.toLowerCase() < a.name.toLowerCase()){
            return 1;
        }
        return 0;
    })
    console.log(document.getElementById("display"))
    /*data.forEach(item =>{

        const markup = `<tr><td>${item["roll no."]}</td><td>${item["name"]}</td><td>${item["college"]}</td></tr>`;
        document.getElementById("display").insertAdjacentElement("beforeend",markup);
    })*/
    console.log(data);
}


lexi();
find_and_display(x)
const print = async () =>{
    let p = await vedant();
    console.log(p[0]["roll no."])
    console.log(p)
    return p;
}


//print()





//document.getElementById("display").innerHTML= vedant();
//console.log(1);
//console.log(vedant());
//console.log("hi");