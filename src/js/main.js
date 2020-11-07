$(document).ready(function () {
   const bodyEl = document.body;
   const previewBlock = document.getElementById('preview-content');
   const floatBtn = document.getElementById('floating-button');
  
	// Определить праую координату плавающей кнопки
   if(previewBlock){
	   let floatBtnRightPosition = +((bodyEl.offsetWidth - previewBlock.offsetWidth) / 2 -20);
	   floatBtn.style.right = floatBtnRightPosition +'px';

   }

   window.addEventListener('scroll', function(){
	   if(window.pageYOffset > 100){
		 if(previewBlock){
			floatBtn.classList.add('active'); 
			let floatBtnRightPosition = +((bodyEl.offsetWidth - previewBlock.offsetWidth) / 2 -20);
			floatBtn.style.right = floatBtnRightPosition +'px';
		} 
		
	   }else{
			floatBtn.classList.remove('active'); 
		} 
   });
})