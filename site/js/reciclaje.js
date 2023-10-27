function toggleReadMore(material) {
  var moreContent = document.getElementById(material + "-more");

  if (moreContent.style.display === "none" || moreContent.style.display === "") {
    moreContent.style.display = "block";
  } else {
    moreContent.style.display = "none";
  }
}