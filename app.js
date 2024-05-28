let body = document.getElementById("body")
 console.log(body)
 let resto = [
     {name:"samosa party", location:"marathalli", ratings:"5", delivery:"10-15 mins", img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ixgxvfu6ggvw1w1awgr1"},
     {name:"asha sweets", location:"marathalli", ratings:"4.5", delivery:"20-25 mis", img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/egm3aym4fa73hst2tv9b"},
     {name:"airlines hotel", location:"marathalli", ratings:"3.7", delivery:"15-20 mins", img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b1iffaxblxghqqyrmbkp"},
     {name:"third wave coffee", location:"marathalli", ratings:"5", delivery:"25-30 mins", img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d96267738c19ec62acb5390e52faba41"},
     {name:"virinchi cafe", location:"marathalli", ratings:"4.7", delivery:"15-20 mins", img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yiu5hkb4fqwhtftmmq8v"},
     {name:"iyengars bakery", location:"marathalli", ratings:"4.5", delivery:"30-35 mins", img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/azxzcaki9nybmhk9exy4"},
     {name:"by 2 coffee", location:"marathalli", ratings:"3.7", delivery:"40-45 mins", img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/pzyccoxkjhlvwtiv5hsq"},
     {name:"idc kitchen", location:"marathalli", ratings:"4.2", delivery:"20-25 mins", img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/v8jgifosg3vdzrgsv1sw"},
     {name:"noto", location:"marathalli", ratings:"4.9", delivery:"15-20 mins", img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/81ac87e5c89c16adc867be38ce5a1ba3"},
     {name:"paratha house", location:"marathalli", ratings:"4.8", delivery:"25-30 mins", img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/sd6kf1bwfvrn6jw1gwjx"},
     {name:"krispy kreme", location:"marathalli", ratings:"3.9", delivery:"40-45 mins", img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/15/6f71b4fe-b66f-4bba-8519-80b4cd6e2dbf_59146.JPG"},
     {name:"meghanas food", location:"marathalli", ratings:"4.5", delivery:"40-45 mins", img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0vvulfbahjxjz6k4uwi"},
     {name:"pizza hut", location:"marathalli", ratings:"4.7", delivery:":20-25 mins", img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7"},
     {name:"main's dum biriyani", location:"marathalli", ratings:"4.0", delivery:"15-20 mins", img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xlr4ngepa5gxkugrsdbs"},
     {name:"kfc", location:"marathalli", ratings:"4.6", delivery:"25-30 mins", img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/9869efb0-ef0e-41eb-bffa-9d6e03eef55e_432976.JPG"},
] 


resto.map((c)=>{
    let main = document.createElement("div")
    body.appendChild(main)
    let photo = document.createElement("img")
    photo.setAttribute( "src", c.img )
    main.appendChild(photo)
    let headding = document.createElement("h1")
    main.appendChild(headding)
    headding.innerHTML = c.name
    let paragraph = document.createElement("p")
    main.appendChild(paragraph)
    paragraph.innerHTML = "⭐"+ ""+ c.ratings
    let delivery = document.createElement("p")
    main.appendChild(delivery)
    delivery.innerHTML ="⏳"+""+ c.delivery
    let location = document.createElement("p")
    main.appendChild(location)
    location.innerHTML = "🚦"+""+ c.location






    main.style.border = "0px solid grey"
    main.style.margin = "30px"
    main.style.width = "350px"
    main.style.height = "400px"
    main.style.borderRadius="10px"
    main.style.boxShadow = "rgb(38, 57, 77) 0px 20px 30px -10px"
    main.style.padding = "10px"
    


    photo.style.width = "340px"
    photo.style.height = "200px"
    photo.style.objectFit = "cover"





})









