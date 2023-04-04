import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/reference/site-config
export default defineConfig({
  title: "Cursus C#",
  base: '/CursusCSharp/',
  description: "Cursus voor training C#",
  themeConfig: {
    // https://vitepress.vuejs.org/reference/default-theme-config
    nav: [
          { text: 'Home', link: '/' },
          { text: 'Syntax', link: '/Syntax' },
          { text: 'OOP', link: '/OOP' },
          {
            text: 'Exercises',
            items: [
              { text: 'Exercise 1', link: '/Exercises/Exercise_one' },
              { text: 'Exercise 2', link: '/Exercises/Exercise_two' },
              { text: 'Exercise 3', link: '/Exercises/Exercise_three' },
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
          { text: 'Exercises', link: '/Exercises/Exercise_one' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BrentSimons' }
    ]
  }
})
