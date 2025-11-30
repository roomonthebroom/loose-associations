# Loose Associations

Deployed at: [dekcuf.net/loose-connections](http://dekcuf.net/loose-connections/)

A forked clone of [and-computers/react-connections-game](https://github.com/and-computers/react-connections-game), meant to be a silly riff on Connections. Where every clue ends up being a loose connection that can apply to any word.

The remainder of the readme is largely a copy of the original project's with minor tweaks.

## Run Locally

```sh
npm install
npm run dev
```

### Technology

- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Spring](https://www.react-spring.dev/) for a few animations
- [Shadcn/ui](https://ui.shadcn.com/) for primitive components
- Copied a number of utility functions from a [React Wordle Clone - cwackerfuss/react-wordle](https://github.com/cwackerfuss/react-wordle)
- Built with [Parcel](https://parceljs.org/)

### Code Organization

- Global state (game status, guesses, etc.) is handled using React's Context API. The provider components are in `src/providers`
- Components are in `src/components`
  - Primitive components imported from `shadcn/ui` library and lightly edited are in `src/components/ui`
  - The `Sparkles` component is taken from [Josh Comeau's article on creating animated sparkles in React.](https://www.joshwcomeau.com/react/animated-sparkles-in-react/).
- Helper functions for local storage, game statistics, and constants are in `src/lib`
  - The actual puzzle data for changing the content of each puzzle is in `src/lib/data.js`
- Custom hooks are in `src/hooks`
  - Both of these are code snippets taken from [Josh Comeau's Blog](https://www.joshwcomeau.com/snippets/)

#### Check out the OG project's other work

- [Writings & Thoughts](https://andcomputers.io)
- [Black Wordle](https://blackwords.andcomputers.io)
