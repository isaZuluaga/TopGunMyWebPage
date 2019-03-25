// btn variable initialization
var btnPlayPassenger;
var btnPlayFatRat;
var btnPlayBastille;
var btnGoBack;
// section variable initialization
var sectionPassenger;
var sectionFatRat;
var sectionBastille;
var sectionBtns;

window.onload = inicio;

function inicio()
{
   //alert("Prueba!")
    initializeVariables();
    btnEvents();
    myStuffList ();
    myWebApi ();
    document.getElementById("AudioHolder").style.display = "none";
    
}

function initializeVariables()
{
    //Initialize btns
    btnPlayPassenger = document.getElementById("btnPlayAudio1");
    btnPlayFatRat = document.getElementById("btnPlayAudio2");
    btnPlayBastille = document.getElementById("btnPlayAudio3");
    btnGoBack = document.querySelector("#btnGoBack");
    //Initialize section
    sectionPassenger = document.querySelector("#PassengerAudio");
    sectionFatRat = document.querySelector("#FatRatAudio");
    sectionBastille = document.querySelector("#BastilleAudio");
    sectionBtns = document.querySelector("#ButtonHolder");
}
function btnEvents()
{   
    btnPlayPassenger.addEventListener("click", EventPlayLetHerGo);
    btnPlayFatRat.addEventListener("click", EventPlayMonody);
    btnPlayBastille.addEventListener("click", EventPlayPompeii);
    btnGoBack.addEventListener("click", EventGoBack);
        
}
function EventPlayLetHerGo()
{
    document.getElementById("AudioHolder").style.display = "block";
    sectionBtns.style.display = "none";
    sectionPassenger.style.display = "block";   
    sectionFatRat.style.display = "none";
    sectionBastille.style.display = "none";    
}                                  
function EventPlayMonody()
{ 
    document.getElementById("AudioHolder").style.display = "block";
    sectionBtns.style.display = "none";
    sectionPassenger.style.display = "none";   
    sectionFatRat.style.display = "block";
    sectionBastille.style.display = "none";    
}
function EventPlayPompeii()
{
    document.getElementById("AudioHolder").style.display = "block";
    sectionBtns.style.display = "none";
    sectionPassenger.style.display = "none";   
    sectionFatRat.style.display = "none";
    sectionBastille.style.display = "block";    
}
function EventGoBack(){

    document.getElementById("letHerGoMp3").pause();
    document.getElementById("bastilleMp3").pause();
    document.getElementById("monodyMp3").pause();
    sectionBtns.style.display = "block";
    document.getElementById("AudioHolder").style.display = "none";
  
}

// WEB API
// MDB Lightbox Init
  
function myStuffList ()
{
    const item1 = document.createElement('li') // <li></li>
    item1.textContent = "In the Top Gun Lab doing awesome things"

    // document.querySelector
    const list = document.querySelector("#myList")
    
    // DESTINO.appendChild(NODO-A-AGREGAR)
    list.appendChild(item1)


    // second element 
    const item2 = document.createElement('li') // <li></li>
    item2.textContent = "JS, CSS and HTML developer."

    // DESTINO.appendChild(NODO-A-AGREGAR)
    list.appendChild(item2)

    // third element 
    const item3 = document.createElement('li') // <li></li>
    item3.textContent = "Very interested in learning about ethical hacking"

    // DESTINO.appendChild(NODO-A-AGREGAR)
    list.appendChild(item3)

    // fourth element 
    const item4 = document.createElement('li') // <li></li>
    item4.textContent = "Finishing my professional career in college, and very happy to find out what comes next"

    // DESTINO.appendChild(NODO-A-AGREGAR)
    list.appendChild(item4)

    const list2 = document.querySelector("#myList2")

    const first = document.createElement('li') // <li></li>
    first.textContent = "Focus on finishing my career"

   
    
    // DESTINO.appendChild(NODO-A-AGREGAR)
    list2.appendChild(first)


    // second element 
    const second = document.createElement('li') // <li></li>
    second.textContent = "Thinking about what to study next"

    // DESTINO.appendChild(NODO-A-AGREGAR)
    list2.appendChild(second)

}

// WEB API
// MDB Lightbox Init
  
function myWebApi ()
{
    // to create a div element, and the it is added to the body of the html
    const sectionToAdd = document.querySelector("#Balance");
    const div = document.createElement('div'); // <div></div>
    
    div.setAttribute('class','borderr bg-dark w-50 mx-auto');
    div.setAttribute('id','myDivElement');
    div.setAttribute('width','400');
    div.setAttribute('height','400');
    sectionToAdd.appendChild(div);
    
    // to create an img and then add it to the div created before
    const img = document.createElement('img');
    img.setAttribute('width','100%');
    img.setAttribute('height','100%');
    img.setAttribute('src','img/programming.jpg');
    div.appendChild(img);

}