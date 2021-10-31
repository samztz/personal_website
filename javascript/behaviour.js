
function openSideNav() { 
  document.getElementById("Sidenav").classList.add("sidenav_open");
  document.getElementById("OpenSidenav").style.display = "none";
  document.getElementById("CloseSidenav").style.display = "block";  
  console.log("open side nav")
}

function closeSideNav() {
  document.getElementById("Sidenav").classList.remove("sidenav_open");
  document.getElementById("OpenSidenav").style.display = "block";
  document.getElementById("CloseSidenav").style.display = "none";  
  console.log("close side nav")
}
