function Size(A){
    switch(document.getElementById("T").innerHTML){
        case "3x3":
            if(!A){
                n=4;
            }
            break;
        case "4x4":
            n=4;
            break;
        case "5x5":
            n=5;
            break;
        case "6x6":
            n=6;
            break;
        case "8x8":
            if(A){
                n=6;
            }
            break;
    }
    if(A){
        if(n>5){
            n=n+2;
        }
        else{
            n=n+1;
        }
    }
    else{
        if(n>6){
            n=n-2;
        }
        else{
            n=n-1;
        }
    }
    document.getElementById("T").innerHTML=n+"x"+n;
    Elements(n);
}
function Elements(n){
    let A,i,j;
    let B=[[2,0,0],[8,2,0],[32,4,2]];
    let C=[[16,8,4,4],[32,2,2,0],[8,16,0,0],[4,0,0,0]];
    let D=[[2,16,2,8,2],[0,2,32,128,16],[0,0,128,16,8],[2,0,0,32,4],[0,0,0,0,2]];
    let E=[[0,0,0,0,2,4], [0,0,0,2,8,2],[0,0,2,32,256,4],[0,0,16,4,16,64],[0,2,32,128,32,2],[4,4,8,32,4,16]];
    let F=[[0,0,0,0,0,0,0,0],[8,0,0,0,0,0,0,0],[128,0,2,0,0,0,0,0],[512,8,32,0,0,0,0,0],[16,4,8,0,0,0,0,0],[2,64,64,4,0,0,0,0],[32,16,8,128,4,0,2,0],[4,32,2,16,8,16,4,2]];
    let G=document.getElementById("Sample");
    let H;
    let I;
    let J;
    G.innerHTML = " ";
    switch(n){
        case 3:
            A=B;
            break;
        case 4:
            A=C;
            break;
        case 5:
            A=D;
            break;
        case 6:
            A=E;
            break;
        case 8:
            A=F;
    }
    for(i=0;i<n;i++){
        for(j=0;j<n;j++){
            H=document.createElement("div");  
            switch(A[i][j]){
                case 0:
                    A[i][j]=" ";
                    J="A00";
                    break;
                case 2:
                    J="A01";
                    break;
                case 4:
                    J="A02";
                    break;
                case 8:
                    J="A03";
                    break;
                case 16:
                    J="A04";
                    break;
                case 32:
                    J="A05";
                    break;
                case 64:
                    J="A06";
                    break;
                case 128:
                    J="A07";
                    break;
                case 256:
                    J="A08";
                    break;
                case 512:
                    J="A09";
                    break;
            }
            switch(n){
                case 3:
                    H.className="A A1 "+J;
                    break;
                case 4:
                    H.className="A A2 "+J;
                    break;
                case 5:
                    H.className="A A3 "+J;
                    break;
                case 6:
                    H.className="A A4 "+J;
                    break;
                case 8:
                    H.className="A A5 "+J;
                    break;    
            }
            I=document.createElement("p")
            if(A[i][j]>4){
                I.className="P2";
            }
            else{
                I.className="P1";
            }
            H.appendChild(I);
            I.innerHTML = A[i][j];
            G.appendChild(H);
        }
    }
}
function Game(){

    let S = document.getElementById("T").innerHTML;
    window.location.assign("main.html");
    let A= [new Array(8),new Array(8),new Array(8),new Array(8),new Array(8),new Array(8),new Array(8),new Array(8)],i,j,n;
    let B=document.getElementsByTagName("main");
    let C=B[0];
    let D;
    let E;
    let F;
    C.innerHTML = " ";
    switch(S){
        case "3x3":
            n=3;
            break;
        case "4x4":
            n=4;
            break;
        case "5x5":
            n=5;
            break;
        case "6x6":
            n=6;
            break;
        case "8x8":
            n=8;
    }
    for(i=0;i<n;i++){
        for(j=0;j<n;j++){
            D=document.createElement("div");  
            switch(A[i][j]){
                case 0:
                    A[i][j]=" ";
                    F="A00";
                    break;
                case 2:
                    F="A01";
                    break;
                case 4:
                    F="A02";
                    break;
                case 8:
                    F="A03";
                    break;
                case 16:
                    F="A04";
                    break;
                case 32:
                    F="A05";
                    break;
                case 64:
                    F="A06";
                    break;
                case 128:
                    F="A07";
                    break;
                case 256:
                    F="A08";
                    break;
                case 512:
                    F="A09";
                    break;
                case 1024:
                    F="A10";
                    break;
                case 2048:
                    F="A11";
                    break;
                default:
                    F="A12";
                    break;
            }
            switch(n){
                case 3:
                    D.className="A A1 "+F;
                    break;
                case 4:
                    D.className="A A2 "+F;
                    break;
                case 5:
                    D.className="A A3 "+F;
                    break;
                case 6:
                    D.className="A A4 "+F;
                    break;
                case 8:
                    D.className="A A5 "+F;
                    break;    
            }
            E=document.createElement("p")
            if(A[i][j]>4){
                E.className="P2";
            }
            else{
                E.className="P1";
            }
            D.appendChild(E);
            E.innerHTML = A[i][j];
            C.appendChild(H);
        }
    }
}