$(document).ready(function () {
   const bodyEl = document.body;
   const previewBlock = document.getElementById('preview-content');
   const floatBtn = document.getElementById('floating-button');
  
	// Определить праую координату плавающей кнопки
   if(previewBlock){
	   let floatBtnRightPosition = +((window.innerWidth - previewBlock.offsetWidth) / 2 -20);
	   floatBtn.style.right = floatBtnRightPosition +'px';

   }

   window.addEventListener('scroll', function(){
	   if(window.pageYOffset > 780){
		 if(previewBlock){
			floatBtn.classList.add('active'); 
			let floatBtnRightPosition = +((window.innerWidth - previewBlock.offsetWidth) / 2 -20);
			floatBtn.style.right = floatBtnRightPosition +'px';
			
		} 
		
	   }else{
			floatBtn.classList.remove('active'); 
		} 
   });
})