# HTMLX Spec

**Overview**

HTMLX is a JavaScript library that provides a way to dynamically swap the content of HTML elements. It allows developers to define triggers, targets, and templates to swap content in response to user interactions.

**Requirements**

1. The library should be initialized when the DOM is ready.
2. The library should process all elements with the `lmx-trigger` attribute and add event listeners to them.
3. When an element with the `lmx-trigger` attribute is clicked, the library should call the `handleTrigger` method with the element and the event as arguments.
4. The `handleTrigger` method should:
	* Get the `lmx-target` attribute of the element and find the corresponding target element in the DOM.
	* Get the `lmx-template` attribute of the element and find the corresponding template element in the DOM.
	* Clone the template content and swap it with the content of the target element using the `swapContent` method.
	* Process the new content by adding event listeners to any elements with the `lmx-trigger` attribute.
5. The `swapContent` method should:
	* Replace the content of the target element with the cloned template content.
	* Use the `lmx-swap` attribute to determine the swap type (innerHTML, outerHTML, beforebegin, afterend, etc.).

**Test Cases**

1. Initialization:
	* Verify that the library is initialized when the DOM is ready.
	* Verify that the library processes all elements with the `lmx-trigger` attribute.
2. Trigger Click:
	* Create an element with the `lmx-trigger` attribute and click it.
	* Verify that the `handleTrigger` method is called with the element and the event as arguments.
3. Template Swap:
	* Create an element with the `lmx-trigger` attribute, an `lmx-target` attribute, and an `lmx-template` attribute.
	* Click the element.
	* Verify that the content of the target element is swapped with the cloned template content.
4. Swap Type:
	* Create an element with the `lmx-trigger` attribute, an `lmx-target` attribute, an `lmx-template` attribute, and an `lmx-swap` attribute with a value of "innerHTML".
	* Click the element.
	* Verify that the content of the target element is replaced with the cloned template content using innerHTML.
5. Event Listeners:
	* Create an element with the `lmx-trigger` attribute and add an event listener to it.
	* Click the element.
	* Verify that the event listener is called.

**Edge Cases**

1. Multiple Triggers:
	* Create an element with multiple `lmx-trigger` attributes.
	* Click the element.
	* Verify that the `handleTrigger` method is called multiple times.
2. No Template:
	* Create an element with the `lmx-trigger` attribute and no `lmx-template` attribute.
	* Click the element.
	* Verify that no error is thrown.
3. No Target:
	* Create an element with the `lmx-trigger` attribute and no `lmx-target` attribute.
	* Click the element.
	* Verify that no error is thrown.

**Implementation**

The implementation should be written in JavaScript and should use the provided code as a starting point. The implementation should pass all the test cases and edge cases specified above.