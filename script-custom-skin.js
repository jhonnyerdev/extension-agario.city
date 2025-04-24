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
document.getElementById('mobileStuff')?.remove();

const inputs = document.querySelectorAll('.key-input');

inputs.forEach(input => {
  input.addEventListener('contextmenu', ev => {
    ev.preventDefault();
  });

  const mouseHandler = event => {
    let newValue = '';

    switch (event.button) {
      case 0:
        //keyMappings[input.id] = 'left-click';
        newValue = 'left-click';
        break;
      case 1:
        //keyMappings[input.id] = 'middle-click';
        newValue = 'middle-click';
        break;
      case 2:
        //keyMappings[input.id] = 'right-click';
        newValue = 'right-click';
        break;
    }

    // Verifica si otro input ya tiene este valor
    const isDuplicate = Array.from(inputs).some(
      i => i !== input && i.value === newValue
    );

    if (isDuplicate) {
      let EN = window.language == null || window.language === 'EN';
      Swal.fire({
        title: EN ? 'Key already assigned' : `Tecla ya asignada`,
        text: EN
          ? 'You cannot use two keys for the same function'
          : `No puedes usar dos teclas para la misma función`,
        icon: 'warning',
      });
      event.preventDefault();
      return; // No lo asignamos
    }

    input.value = newValue;
    window[input.id + '_key'] = input.value;
  };

  input.addEventListener('focus', () => {
    input.addEventListener('mousedown', mouseHandler);
  });

  input.addEventListener('blur', () => {
    input.removeEventListener('mousedown', mouseHandler);
  });
});

// Simula un evento de "keydown" como si fuera una tecla del teclado
function simulateKeydown(keyName) {
  const event = new KeyboardEvent('keydown', {
    key: keyName,  // La tecla que estamos simulando
    code: keyName, // El código de la tecla (generalmente igual que el key)
    bubbles: true,
    cancelable: true,
  });
  document.dispatchEvent(event);
}

// Simula un evento de "keyup" como si fuera una tecla del teclado
function simulateKeyup(keyName) {
  const event = new KeyboardEvent('keyup', {
    key: keyName,
    code: keyName,
    bubbles: true,
    cancelable: true,
  });
  document.dispatchEvent(event);
}

const canvasx = document.getElementById('canvas');

// Clic Izquierdo (Botón 0)
canvasx.addEventListener('mousedown', function (event) {
  if (event.button === 0) { // 0 es el código para el clic izquierdo
    simulateKeydown('left-click');  // Simula presionar la tecla para el clic izquierdo
  }
});
canvasx.addEventListener('mouseup', function (event) {
  if (event.button === 0) { // 0 es el código para el clic izquierdo
    simulateKeyup('left-click');  // Simula soltar la tecla para el clic izquierdo
  }
});

// Clic Derecho (Botón 2)
canvasx.addEventListener('mousedown', function (event) {
  if (event.button === 2) { // 2 es el código para el clic derecho
    simulateKeydown('right-click');  // Simula presionar la tecla para el clic derecho
  }
});
canvasx.addEventListener('mouseup', function (event) {
  if (event.button === 2) { // 2 es el código para el clic derecho
    simulateKeyup('right-click');  // Simula soltar la tecla para el clic derecho
  }
});

// Clic Rueda (Botón 1, rueda del mouse)
canvasx.addEventListener('mousedown', function (event) {
  if (event.button === 1) { // 1 es el código para el clic de la rueda
    simulateKeydown('middle-click');  // Simula presionar la tecla para el clic medio
  }
});
canvasx.addEventListener('mouseup', function (event) {
  if (event.button === 1) { // 1 es el código para el clic de la rueda
    simulateKeyup('middle-click');  // Simula soltar la tecla para el clic medio
  }
});