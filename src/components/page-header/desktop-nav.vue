 <template>
  <ul class="nav-list">
    <li class="nav-list-item" v-for="(item, index) in navList" :key="index">
      <router-link active-class="nav-active" class="nav-link" tag="a" :to="item.link">{{item.name}}</router-link>
      <span class="nav-dot"></span>
    </li>
    <li class="nav-list-item">
      <i class="icon icon-search" @click="showSearch"></i>
    </li>
  </ul>
</template>

 <script>
import { mapMutations } from 'vuex'

export default {
  props: {
    navList: Array
  },
  
  methods: {
    showSearch() {
      this.setShowSearch(true)
    },

    ...mapMutations({
      setShowSearch: "SET_SHOW_SEARCH"
    })
  }
};
</script>

 <style lang="scss" scoped>
@import "@/common/scss/variable.scss";

.nav-list {
  display: flex;
  justify-content: flex-start;

  .nav-list-item {
    position: relative;
    margin-left: 24px;
    font-weight: bold;

    &:first-child {
      margin-left: 0;
    }

    .nav-link {
      cursor: pointer;
      transition: $--theme-transition;

      &:hover ~ .nav-dot {
        background-color: $--nav-dot-color;
      }
    }

    .nav-active {
      & ~ .nav-dot {
        background-color: $--theme-active;
      }

      &:hover ~ .nav-dot {
        background-color: $--theme-active;
      }
    }

    .nav-dot {
      position: absolute;
      top: -4px;
      right: -10px;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      transition: all 0.25s ease;
    }

    .icon-search {
      font-size: $--font-size-large;
      cursor: pointer;
      transition: $--theme-transition;

      &:hover {
        color: $--theme-active;
      }
    }
  }
}

@media (max-width: 1023px) {
  .nav-list {
    display: none;
  }
}
</style>
 
 