//your JS code here. If required.
const ageInput = document.getElementById('age');
const nameInput = document.getElementById('name');
const buttonSubmit = document.getElementById('btn');

// if(ageInput.value = ' ' || nameInput.value = ' ') 

buttonSubmit.addEventListener('click', (e) => {
	e.preventDefault();
	if(ageInput.value === ' ' || nameInput.value === ' ') alert('inputs cannot be empty');
	return new Promise((res, rej) => {
		setTimeout(() => {
			if(ageInput.value > 18) res(nameInput.value);
			else rej(nameInput.value);
		}, 4000);
	}).then((data) => {
		alert('Welcome, ' + data + '. You can vote.');
	}).catch((data) => {
		alert('Oh sorry ' + data + ". You aren't old enough.");
	})
})

