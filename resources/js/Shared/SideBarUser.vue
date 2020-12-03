<template>
  <div>
    <div class="d-flex" id="wrapper">
      <!-- Sidebar -->
      <div class="bg-light border-right" id="sidebar-wrapper">
        <div class="sidebar-heading">Samba-store</div>
        <div class="list-group list-group-flush">
          <inertia-link
            href="http://alpha-tests.defarsci.com/samba-store-v2/public/home"
            class="list-group-item list-group-item-action bg-light"
            >Dashboard</inertia-link
          >
          <inertia-link
            href="http://alpha-tests.defarsci.com/samba-store-v2/public/message"
            class="list-group-item list-group-item-action bg-light"
            >Messagerie</inertia-link
          >
          <inertia-link
            href="http://alpha-tests.defarsci.com/samba-store-v2/public/userPost"
            class="list-group-item list-group-item-action bg-light"
            >Poster une annonce</inertia-link
          >
        </div>
      </div>
      <!-- /#sidebar-wrapper -->

      <!-- Page Content -->
      <div id="page-content-wrapper">
        <nav
          class="navbar navbar-expand-lg navbar-light bg-light border-bottom"
        >
          <button class="btn btn-primary" id="menu-toggle">Menu</button>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
      <!-- /#page-content-wrapper -->
    </div>
    <!-- /#wrapper -->
  </div>
</template>

<script>
export default {
  name: "SideBarUser",
  mounted() {
    // $("#menu-toggle").click(function (e) {
    //   e.preventDefault();
    //   $("#wrapper").toggleClass("toggled");
    // });
  },
};
</script>
