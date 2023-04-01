# Vega Lite Wrapper for Editor.js

A simple TypeScript wrapper for rendering Vega Lite visualizations as an embed tool for Editor.js.

## Installation

Install the package using npm:

```sh
npm install editor-vega-embed
```

## Usage

### With Editor.js

In your project where you have set up Editor.js, import the `VegaLite` class from the package:

```javascript
import VegaLite from "editor-vega-embed";
```

Add the VegaLite class to the tools configuration in your Editor.js instance:

```
const editor = new EditorJS({
  // ...other configurations,
  tools: {
    // ...other tools,
    vegaLite: VegaLite
  }
});
```

Now you should be able to use the Vega Lite embed tool in your Editor.js instance.

## Standalone Usage

Create a new instance of the VegaLite class:

```javascript
const vegaLite = new VegaLite({
    data: {
        source: '{"$schema":"https://vega.github.io/schema/vega-lite/v5.json","description":"A simple bar chart with embedded data.","data":{"values":[{"a":"A","b":28},{"a":"B","b":55},{"a":"C","b":43},{"a":"D","b":91},{"a":"E","b":81},{"a":"F","b":53},{"a":"G","b":19},{"a":"H","b":87},{"a":"I","b":52}]},"mark":"bar","encoding":{"x":{"field":"a","type":"ordinal"},"y":{"field":"b","type":"quantitative"}}}',
    },
});
```

Call the render method to create an HTMLElement containing the Vega Lite visualization:

```javascript
const wrapper = vegaLite.render();
document.body.appendChild(wrapper);
```

## Methods

### constructor({ data })

Initializes a new VegaLite instance with the specified data object.

### render()

Returns an HTMLElement containing the Vega Lite visualization.

### save()

Returns the current Vega Lite source as a string.

### validate(savedData)

Validates the provided Vega Lite source string and returns a boolean indicating whether it's valid or not.
