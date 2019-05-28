<img id="blah" width="250" height="250" />

<input type="file" onchange="document.getElementById('blah').src = window.URL.createObjectURL(this.files[0])">