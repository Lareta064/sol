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


	//  show Reviews
	const reviewContent = document.getElementById('review-content');  
	const btnShowReviewContent = document.getElementById('showReview'); 
	if(reviewContent){
		btnShowReviewContent.addEventListener('click', function(){
			// reviewContent.classList.add('full');
			this.classList.add('hide');
		let fullReviewHeight = document.querySelector('.review-wrapper').clientHeight;
		let heightValue = +fullReviewHeight+'px';
		reviewContent.setAttribute('style', `height: ${heightValue}`);

		});
	}
	// video review
	const videoContents = document.querySelectorAll('.video-wrapper');
	if (videoContents) {
		for(let item of videoContents){
			item.addEventListener('click', function () {

			const videoBtn = item.querySelector('.btn-play');
			const videoClip = item.querySelector('video');
			
				if (videoClip.paused) {
					videoClip.play();
					videoBtn.style.opacity = "0";
					
				} else {
					videoClip.pause();
					videoBtn.style.opacity = "1";
					
				}
				//videoClip.play();
			
			videoClip.addEventListener("ended", function () {
				videoClip.pause();
				videoBtn.style.opacity = "1";
				this.classList.remove("active");
			});	
		});
		}
		
	}

})