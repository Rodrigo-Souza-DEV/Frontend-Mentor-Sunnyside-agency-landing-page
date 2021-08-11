let st = document.getElementById('st');
    let menuMobile = document.getElementById('menu-mobile');
    function menu(){
      if(menuMobile.style.display === "block") {
        st.style.display = "none";
        menuMobile.style.display = 'none';
      } else {
        st.style.display = "block";
        menuMobile.style.display = 'block';
      }
    }