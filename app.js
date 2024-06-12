document.getElementById('fileInput').addEventListener('change', function(event) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // Clear previous images
    const files = event.target.files;
    
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        
        // Only process image files
        if (!file.type.startsWith('image/')) continue;
        
        const img = document.createElement('img');
        img.classList.add('obj');
        img.file = file;
        
        gallery.appendChild(img);
        
        const reader = new FileReader();
        reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
        reader.readAsDataURL(file);
    }
});
