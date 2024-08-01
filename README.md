# HTMLX Spec

**Overview**

HTMLX is a JavaScript library that provides a way to dynamically swap the content of HTML elements. It allows developers to define triggers, targets, and templates to swap content in response to user interactions.

**Requirements**

1. The library should be initialized when the DOM is ready.
2. The library should process all elements with the `lmx-trigger` attribute and add event listeners to them.
3. When an element with the `lmx-trigger` attribute is clicked, the library should call the `handleTrigger` method with the element and the event as arguments.
4. The `handleTrigger` method should:
   - Get the `lmx-target` attribute of the element and find the corresponding target element in the DOM.
   - Get the `lmx-template-id` attribute of the element and find the corresponding template element in the DOM.
   - Clone the template content and swap it with the content of the target element using the `swapContent` method.
   - Process the new content by adding event listeners to any elements with the `lmx-trigger` attribute.
5. The `swapContent` method should:
   - Replace the content of the target element with the cloned template content.
   - Use the `lmx-swap-type` attribute to determine the swap type (innerHTML, outerHTML, beforebegin, afterend, etc.).
6. The library should support multiple templates and allow developers to define multiple templates using the `<template>` element.
7. The library should support conditional rendering and allow developers to specify a condition using the `lmx-condition` attribute that must be met for the template to be rendered.
8. The library should support dynamic attributes and allow developers to add dynamic attributes to the rendered HTML using the `lmx-dynamic-attribute` and `lmx-dynamic-attribute-value` attributes.
9. The library should support swap content and allow developers to swap the content of an element using the `swapContent` method.

**API**

- `HTMLX.init()`: Initializes the library and processes all elements with the `lmx-trigger` attribute.
- `HTMLX.handleTrigger(element, event)`: Handles the trigger event and swaps the content of the target element with the cloned template content.
- `HTMLX.swapContent(target, content, swapType)`: Swaps the content of the target element with the cloned template content using the specified swap type.
- `HTMLX.addDynamicAttributes(content)`: Adds dynamic attributes to the rendered HTML.

**Example**

Here is an example of how to use HTMLX:

```
<!-- Define the templates -->
<template id="template-1">
  <div>
    <h2>Template 1</h2>
    <p>This is template 1 content.</p>
  </div>
</template>

<!-- Define the triggers -->
<button lmx-trigger="click" lmx-target="#target-1" lmx-template-id="template-1">Trigger 1</button>

<!-- Define the target -->
<div id="target-1"></div>

<!-- Initialize the library -->
<script>
  HTMLX.init();
</script>
```

This example defines a template and a trigger that swaps the content of the target element with the cloned template content when clicked.
