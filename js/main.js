new fullpage('#fullPage', {
	autoScrolling: true,


	
})

document.addEventListener('DOMContentLoaded', function () {
	const form = document.querySelector('.form')
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();
		let formData = new FormData(form)
	

	}



});
