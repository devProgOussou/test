template>
  <div class="light-blue-skin">
    <mdb-side-nav slim :isCollapsed="collapsed" name="Anna Deynah" :OpenedFromOutside="true" logo="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" logoRound sideNavClass="sn-bg-1" mask="strong" hidden>
        <mdb-side-nav-nav>
          <mdb-side-nav-cat name="Submit blog" icon="chevron-right">
            <mdb-side-nav-item href="#" slimIcon="address-book">Modifier profil</mdb-side-nav-item>
            <mdb-side-nav-item href="#" slimIcon="address-card">poster une annonce</mdb-side-nav-item>
          </mdb-side-nav-cat>
          <mdb-side-nav-cat name="Contact me" far icon="envelope">
            <mdb-side-nav-item href="#">FAQ</mdb-side-nav-item>
            <mdb-side-nav-item href="#" slimIcon="paper-plane" >Write a message</mdb-side-nav-item>
          </mdb-side-nav-cat>
          <mdb-side-nav-item icon="angle-double-left" open-icon="angle-double-right" @toggle="toggleSlim" toggler :collapsed="collapsed" fixed>Minimize</mdb-side-nav-item>
        </mdb-side-nav-nav>
    </mdb-side-nav>
  </div>
</template>

<script>
import {
  mdbSideNav,
  mdbSideNavNav,
  mdbSideNavCat,
  mdbSideNavItem,
  mdbRow,
  waves,
} from "mdbvue";

export default {
  name: "SideBarUser",
  components: {
    mdbSideNav,
    mdbSideNavNav,
    mdbSideNavCat,
    mdbSideNavItem,
    mdbRow,
  },
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    toggleSlim() {
      this.collapsed = !this.collapsed;
    },
  },
  mixins: [waves],
};
</script>
