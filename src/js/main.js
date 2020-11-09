$(document).ready(function () {
   const bodyEl = document.body;
   const previewBlock = document.getElementById('preview-content');
   const floatBtn = document.getElementById('floating-button');
  
	// Определить праую координату плавающей кнопки
   if(previewBlock){
	   let floatBtnRightPosition = +((window.innerWidth - previewBlock.offsetWidth) / 2 -20);
	   floatBtn.style.right = floatBtnRightPosition +'px';

   }

   var sbTopPos = $("#participate").offset().top;
   var sbHeight = $("#participate").outerHeight();
   var ffTopPos = $("#contact-form").offset().top;
	$(window).scroll(function(){		
		if(
			($(window).scrollTop() >= sbTopPos+sbHeight)&&
			($(window).scrollTop()+$(window).height() <= ffTopPos)
			){
			if(floatBtn.classList.contains("active"))
				return;
			floatBtn.classList.add('active'); 
			let floatBtnRightPosition = +((window.innerWidth - previewBlock.offsetWidth) / 2 -20);
			floatBtn.style.right = floatBtnRightPosition +'px';
		}else{
			//hide button
			floatBtn.classList.remove('active'); 
		}
	});

//    window.addEventListener('scroll', function(){
// 	   if(window.pageYOffset > 780){
// 		 if(previewBlock){
// 			floatBtn.classList.add('active'); 
// 			let floatBtnRightPosition = +((window.innerWidth - previewBlock.offsetWidth) / 2 -20);
// 			floatBtn.style.right = floatBtnRightPosition +'px';
			
// 		} 
		
// 	   }else{
// 			floatBtn.classList.remove('active'); 
// 		} 
//    });

	//  show Reviews
	const reviewContent = document.getElementById('review-content');  
	const btnShowReviewContent = document.getElementById('showReview'); 
	if(reviewContent){
		btnShowReviewContent.addEventListener('click', function(){
			
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
					this.classList.add("active");
				} else {
					videoClip.pause();
					videoBtn.style.opacity = "1";
					
				}
				
			// видео проигралось до конца
			videoClip.addEventListener("ended", function () {
				videoClip.pause();
				videoBtn.style.opacity = "1";
			});	
		});
		}
		
	}

})