<template>
  <div
    v-show="searchbar"
    :class="[
      { 'transition-opacity': searchbar },
      { 'duration-1000': searchbar },
      { 'ease-in': searchbar },
    ]"
    class="flex flex-col justify-center h-search bg-search"
  >
    <div
      class="w-full mx-auto px-5 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg"
    >
      <div class="search-box">
        <input
          ref="input"
          aria-label="Search"
          :value="query"
          :class="[{ focused: focused }, { 'text-personalColor': focused }]"
          :placeholder="placeholder"
          autocomplete="off"
          spellcheck="false"
          @input="query = $event.target.value"
          @focus="focused = true"
          @blur="focused = false"
          @keyup.enter="go(focusIndex)"
          @keyup.up="onUp"
          @keyup.down="onDown"
        />
        <button type="submit" class="absolute h-full left-0 ml-2 order-1">
          <svg
            :class="[
              { 'text-personalColor': focused },
              { transition: focused },
              { 'duration-200': focused },
              { 'ease-in': focused },
            ]"
            class="fill-current text-gray-500 w-5 h-5"
            @focus="focused = true"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 511.999 511.999"
            style="enable-background:new 0 0 511.999 511.999;"
            xml:space="preserve"
          >
            <g>
              <g>
                <path
                  d="M508.874,478.708L360.142,329.976c28.21-34.827,45.191-79.103,45.191-127.309c0-111.75-90.917-202.667-202.667-202.667
			S0,90.917,0,202.667s90.917,202.667,202.667,202.667c48.206,0,92.482-16.982,127.309-45.191l148.732,148.732
			c4.167,4.165,10.919,4.165,15.086,0l15.081-15.082C513.04,489.627,513.04,482.873,508.874,478.708z M202.667,362.667
			c-88.229,0-160-71.771-160-160s71.771-160,160-160s160,71.771,160,160S290.896,362.667,202.667,362.667z"
                />
              </g>
            </g>
          </svg>
        </button>
        <button
          type="button"
          @click="clearText"
          class="absolute h-full right-0 mr-2 order-3"
        >
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
          </svg>
        </button>
        <ul
          v-if="showSuggestions"
          class="suggestions z-20"
          :class="{ 'align-right': alignRight }"
          @mouseleave="unfocus"
        >
          <li
            v-for="(s, i) in suggestions"
            :key="i"
            class="suggestion"
            :class="{ focused: i === focusIndex }"
            @mousedown="go(i)"
            @mouseenter="focus(i)"
          >
            <a :href="s.path" @click.prevent>
              <span class="page-title">{{ s.title || s.path }}</span>
              <span v-if="s.header" class="header"
                >&gt; {{ s.header.title }}</span
              >
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import matchQuery from './match-query'
/* global SEARCH_MAX_SUGGESTIONS, SEARCH_PATHS, SEARCH_HOTKEYS */
export default {
  name: 'SearchBox',
  props: {
    searchbar: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      query: '',
      focused: false,
      focusIndex: 0,
      placeholder: undefined,
    }
  },
  computed: {
    showSuggestions() {
      return this.focused && this.suggestions && this.suggestions.length
    },
    suggestions() {
      const query = this.query.trim().toLowerCase()
      if (!query) {
        return
      }
      const { pages } = this.$site
      // const max = this.$site.themeConfig.searchMaxSuggestions
      const localePath = this.$localePath
      const res = []
      for (let i = 0; i < pages.length; i++) {
        // if (res.length >= max) break
        const p = pages[i]
        // filter out results that do not match current locale
        if (this.getPageLocalePath(p) !== localePath) {
          continue
        }
        // filter out results that do not match searchable paths
        if (!this.isSearchable(p)) {
          continue
        }
        if (matchQuery(query, p)) {
          res.push(p)
        } else if (p.headers) {
          for (let j = 0; j < p.headers.length; j++) {
            // if (res.length >= max) break
            const h = p.headers[j]
            if (h.title && matchQuery(query, p, h.title)) {
              res.push(
                Object.assign({}, p, {
                  path: p.path + '#' + h.slug,
                  header: h,
                })
              )
            }
          }
        }
      }
      res.sort((a, b) => {
        let aDate = new Date(a.frontmatter.date).getTime()
        let bDate = new Date(b.frontmatter.date).getTime()
        let diff = aDate - bDate
        if (diff < 0) return 1
        if (diff > 0) return -1
        return 0
      })
      return res
    },
    // make suggestions align right when there are not enough items
    alignRight() {
      const navCount = (this.$site.themeConfig.nav || []).length
      const repo = this.$site.repo ? 1 : 0
      return navCount + repo <= 2
    },
  },
  mounted() {
    this.placeholder = this.$site.themeConfig.searchPlaceholder || ''
    document.addEventListener('keydown', this.onHotkey)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.onHotkey)
  },
  methods: {
    getPageLocalePath(page) {
      for (const localePath in this.$site.locales || {}) {
        if (localePath !== '/' && page.path.indexOf(localePath) === 0) {
          return localePath
        }
      }
      return '/'
    },
    isSearchable(page) {
      let searchPaths = null
      // all paths searchables
      if (searchPaths === null) {
        return true
      }
      //   searchPaths = Array.isArray(searchPaths)
      //     ? searchPaths
      //     : new Array(searchPaths)
      //   return (
      //     searchPaths.filter(path => {
      //       return page.path.match(path)
      //     }).length > 0
      //   )
    },
    // onHotkey(event) {
    //   if (
    //     event.srcElement === document.body &&
    //     SEARCH_HOTKEYS.includes(event.key)
    //   ) {
    //     this.$refs.input.focus()
    //     event.preventDefault()
    //   }
    // },
    onUp() {
      if (this.showSuggestions) {
        if (this.focusIndex > 0) {
          this.focusIndex--
        } else {
          this.focusIndex = this.suggestions.length - 1
        }
      }
    },
    onDown() {
      if (this.showSuggestions) {
        if (this.focusIndex < this.suggestions.length - 1) {
          this.focusIndex++
        } else {
          this.focusIndex = 0
        }
      }
    },
    go(i) {
      if (!this.showSuggestions) {
        return
      }
      this.$router.push(this.suggestions[i].path)
      this.query = ''
      this.focusIndex = 0
    },
    focus(i) {
      this.focusIndex = i
    },
    unfocus() {
      this.focusIndex = -1
    },
    clearText() {
      this.query = ''
    },
  },
}
</script>

<style lang="stylus" scoped>
.search-box
  display flex
  position relative
  margin-right 1rem
  align-items stretch
  width 100%
  input
    cursor text
    width 100%
    height: 3rem
    color #718096
    display inline-block
    border-bottom 1px solid darken($borderColor, 10%)
    font-size 1.125rem
    padding 0 3rem 0 3rem
    outline none
    transition all .2s ease
    background transparent
    background-size 1rem
    &:focus
      cursor auto
      border-color #0D2F59
  .suggestions
    background #fff
    width 100%
    position absolute
    max-height 24rem
    overflow-y auto
    top 2.8rem
    border 1px solid darken($borderColor, 10%)
    padding 0.6rem
    list-style-type none
    &.align-right
      right 0
  .suggestion
    line-height 1.4
    padding 0.4rem 0.6rem
    border-radius 4px
    cursor pointer
    font-size 1.125rem
    a
      white-space normal
      color #718096
      .page-title
        font-weight 600
      .header
        font-size 0.9em
        margin-left 0.25em
    &.focused
      background-color #f3f4f5
      a
        color #F56565

@media (max-width: 640px)
    .search-box
        input
            font-size 1rem
        .suggestion
            font-size 0.875rem
</style>
