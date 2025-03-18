onload = () => {
  var backButton = document.getElementById('backHistory');
  backButton.onclick = () => {
    window.history.back();
  };
};
