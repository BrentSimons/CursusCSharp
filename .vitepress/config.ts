import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/reference/site-config
export default defineConfig({
  title: "Cursus C#",
  description: "Cursus voor training C#",
  themeConfig: {
    // https://vitepress.vuejs.org/reference/default-theme-config
    nav: [
          { text: 'Home', link: '/' },
          { text: 'Syntax', link: '/Syntax' },
          { text: 'OOP', link: '/OOP' },
          {
            text: 'Excercises',
            items: [
              { text: 'Exercise 1', link: '/Excercises/Exercise_one' },
              { text: 'Exercise 2', link: '/Excercises/Exercise_two' },
              { text: 'Exercise 3', link: '/Excercises/Exercise_three' },
            ]
          }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Home', link: '/' },
          { text: 'Syntax', link: '/Syntax' },
          { text: 'OOP', link: '/OOP' },
          { text: 'Excercises', link: '/Excercises/Exercise_one' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
