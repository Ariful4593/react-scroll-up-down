 **react-top-bottom-scroll**

**Add a user-friendly scroll-to-top/bottom button to your React applications.**

## Features

- **Smooth scrolling:** Seamlessly animates scrolling to the top or bottom of the page.
- **Customizable:** Customize colors, icons, and titles to match your project's style.
- **Adaptive:** Intelligently shows or hides the button based on scroll position.
- **Flexible:** Scroll to specific elements using refs.
- **Easy to use:** Integrates seamlessly into any React project.

## Installation

```bash
npm install react-top-bottom-scroll
```

## Usage

```javascript
import ScrollUpDown from 'react-top-bottom-scroll';

function MyComponent() {
  return (
    <div>
      {/* ... your content ... */}
      <ScrollUpDown />
    </div>
  );
}
```

## Props

| Prop             | Type       | Default      | Description                                       |
|-------------------|------------|--------------|---------------------------------------------------|
| bottomRef         | React.Ref  | null         | Ref of an element to scroll to the bottom of.       |
| topRef            | React.Ref  | null         | Ref of an element to scroll to the top of.         |
| upIconColor       | string     | "white"      | Color of the up arrow icon.                       |
| downIconColor     | string     | "white"      | Color of the down arrow icon.                      |
| upTitleMessage    | string     | "Scroll to top" | Title attribute for the up button.                  |
| downTitleMessage  | string     | "Scroll to bottom" | Title attribute for the down button.               |
| style             | object     | {}           | Additional styles to apply to the button.          |
| renderIcon        | (direction: "up" \| "down") => JSX.Element | null       | Custom function to render icons.                   |

## Demo

See a live demo at [link to your demo]

## Contributing

Contributions are welcome! Please create a pull request with your changes.

## License

MIT
