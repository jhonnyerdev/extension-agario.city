document.querySelector('.form-group').insertAdjacentHTML('beforeend','<input id="skinurl" class="form-control" placeholder="Skin Url"><p  style="display: flex;justify-content: center;font-family: \'Ubuntu\';font-size: 15px;">by: <a target="_blank" href="https://www.youtube.com/@jonymp4">Jonymp4</a><p>');
document.getElementById("nick").style.width = "64%";
const skinurl = document.getElementById("skinurl");
const skinButton = document.getElementById("skinButton");
skinButton.style.width ="100px";
skinButton.style.height ="100px";
const img1 = new Image();
skinurl.addEventListener('input', function (event) {
	img1.src =skinurl.value;
	skinButton.style.backgroundImage = 'url("'+skinurl.value+'")';
	
	loadedSkins.set(parseInt(getLocalData("currentSkin")),img1);
 });