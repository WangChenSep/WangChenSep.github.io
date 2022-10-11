window.onload = function(){
    //获取外部大容器
    let outer = document.querySelector('.out-container')
    //获取header,修改导航栏背景颜色
    let header = document.querySelector('.head-container')
    // console.log(outer)
    outer.addEventListener('scroll',function(){
      if(outer.scrollTop >= 50) {
        header.style.backgroundColor = 'white'
        header.style.transition = 'all 1s'
      }
      if(outer.scrollTop < 50){
        header.style.backgroundColor = ''
      }
    })
    //获取大头像容器
   let img = document.querySelector('.img') 
   const rl = '360deg'
   const lr = '0deg'
    img.addEventListener('mousemove',function(){
        
        img.style.transform = 'rotateZ('+ rl +' )'
         img.style.transition = 'all 1s' 
    })
    img.addEventListener('mouseleave',function(){
        img.style.transform = 'rotateZ('+ lr +' )'
        img.style.transition = 'all 1s'
    })
  text();
}

function text() {
    const random_text = new Array(
        '上不怨天，下不尤人',
        '靡不有初，鲜克有终',
        '人生一世，草木一秋',
        '事常与人违，事总在人为',
        '后悔过去，不如奋斗未来',
    );
    const random_text2 = Math.floor(Math.random() * random_text.length);
    const text = document.getElementById("text");
    text.firstChild.nodeValue = random_text[random_text2];

}


 