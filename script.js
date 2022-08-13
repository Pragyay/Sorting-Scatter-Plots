let canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

let btn = document.getElementById('btn');
let a = [];

    // add elements to array
function generateArray(){
    for(let i=0;i<height;i++){
        a.push({
            x: (-1)*Math.random()*width,
            y: i,
            color: "white"
        })
    }
}

function displayElements(){
    context.clearRect(0,0,-width,height);

    for(let i=0;i<a.length-1;i++){
        let ele = a[i];
        // console.log(ele.x, ele.y);

        context.beginPath();
        context.arc(ele.x,ele.y,1,0,Math.PI*2);
        context.fillStyle = ele.color;
        context.fill();
        // context.moveTo(ele.x,ele.y);
        // context.lineTo(ele.x,height);
        // context.strokeStyle = ele.color;
        // context.stroke();
    }
}

function bubbleSort(arr, j){
           
    // let j;
    // for(j=0;j<a.length-i-1;j++){
        arr[j].color = "green";
        arr[j+1].color = "green";
        if(arr[j].y > arr[j+1].y){
            
            let temp = arr[j].y
            arr[j].y = arr[j + 1].y
            arr[j+1].y = temp
        }
    // }   
    // arr[j].x = (-1)*arr[j].y*2;
    // return arr;
}
let i=0;
let j=0;

let k = 0;

context.translate(width,0);

generateArray();
// let a = arr
//   .map(value => ({ value, sort: Math.random() }))
//   .sort((a, b) => a.sort - b.sort)
//   .map(({ value }) => value)
// console.log(a);

update();

// function update(){
    
//     if(i<height){
//         bubbleSort(a, i);

//         displayElements();  

//         i+=1;

//         console.log(i);
//     }
//     requestAnimationFrame(update);
// }

function update(){
    
    for(let x=0;x<10;x++){
        if(i<height){
            if(j<a.length-i-1){
                bubbleSort(a, j);
                displayElements();  
                a[j].color = "white";
                a[j+1].color = "white";
                j+=1;
            }else{
                a[j].x = (-1)*a[j].y*2;
                a[j].color = "red";
                j=0;
                i+=1;
            }
        }
        //else{
        //     a[k].color = "white";
        //     k+=1;
        // }
    }
    
    console.log(i,j);
    requestAnimationFrame(update);
}

