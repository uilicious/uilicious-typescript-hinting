/**
 * @file The Typescript definitions for the global `I` commands.
 */

interface Actor {
	/**
	 * Navigate to a URL.
	 *
	 * @param url URL to navigate to.
	 *
	 * You can use an absolute URL like http://mystore.com/shoes or a relative URL like /shoes.
	 *
	 * If there is Basic HTTP Authentication on the page, add the username and password to your url like this: https://username:password@mystore.com.
	 *
	 * @param options (optional) Additional navigation options.
	 *
	 * @param options.newTab Flag to open the url in an new tab. Defaults to false.
	 *
	 * @example
	 * // Absolute URL
	 * I.goTo("https://mystore.com/shoes");
	 *
	 * // Basic HTTP Auth
	 * I.goTo("https://username:password@mystore.com/shoes");
	 *
	 * // Relative URL
	 * I.goTo("/shoes");
	 *
	 * // Open in a new tab
	 * I.goTo("https://mystore.com/shoes", {newTab: true});
	 *
	 * @see {@link https://docs.uilicious.com/scripting/navigation.html#igoto} for more information.
	 */
	goTo(url: string, options?: {
		/**
		 * Flag to open the url in a new tab. Defaults to false.
		 */
		newTab?: boolean;
	}): void;

	/**
	 * Refreshes the page.
	 *
	 * @see {@link https://docs.uilicious.com/scripting/navigation.html#irefreshpage} for more information
	 */
	refreshPage(): void;

	/**
	 * Switch to a tab.
	 *
	 * @param tab (optional) Tab number or page title to switch to. If not provided, it will switch to the next tab.
	 *
	 * @example
	 * // switch to the next tab
	 * I.switchTab();
	 *
	 * // switch to the second tab
	 * I.switchTab(2);
	 *
	 * // switch to the tab titled "Login"
	 * I.switchTab("Login");
	 *
	 * @see {@link https://docs.uilicious.com/scripting/navigation.html#iswitchtab} for more information.
	 */
	switchTab(tab?: number | string): void;


	/**
	 * Close the current tab.
	 *
	 * @remarks I.closeTab cannot be used if there's only one tab open.<br><br>After the tab is closed, the browser will be automatically switched to the next tab (or the last tab if the closed tab was the last).
	 *
	 * @see {@link https://docs.uilicious.com/scripting/navigation.html#iclosetab} for more information.
	 */
	closeTab(): void;

	/**
	 * Asserts that the browser is at a specific URL. You can use an absolute URL or a relative URL.
	 *
	 * @param url URL to check against.
	 *
	 * @example
	 * // Absolute URL
	 * I.amAt("http://mystore.com");
	 *
	 * // Without protocol
	 * I.amAt("://mystore.com");
	 *
	 * // Relative URL
	 * I.amAt("/shoes");
	 *
	 * // Query string
	 * I.amAt("?color=blue");
	 *
	 * // Hash
	 * I.amAt("#sale");
	 *
	 * @see {@link https://docs.uilicious.com/scripting/navigation.html#iamat} for more information.
	 */
	amAt(url: string): void;

	/**
	 * Fill a textual field.
	 *
	 * This also works for date picker fields that accept direct text input.
	 *
	 * @alias fillField
	 *
	 * @param field Keyword to identify the field.
	 *
	 * The associated label, aria-label, placeholder, adjacent text, and current value can be used to identify a field.
	 *
	 * CSS selectors can also be used, but is not recommended as it makes the tests harder to keep up to date.
	 *
	 * @param value Value to fill into the field.
	 *
	 * @example
	 * // Fill a field
	 * I.fill("Email", "bruce@waynecorp.com");
	 *
	 * // Can also be used to clear a field
	 * I.fill("Email", "");
	 *
	 * @see {@link https://docs.uilicious.com/scripting/form_input.html#ifill} for more information.
	 */
	fill(field: string, value: string): void;

	/**
	 * Asserts that the form is filled with a specific value.
	 *
	 * @param field Keyword to identify the field.
	 *
	 * The associated label, placeholder, adjacent text, and name can be used to identify a field.
	 *
	 * CSS selectors can also be used, *but is not recommended as it makes the tests harder to keep up to date*.
	 *
	 * @param value Value that the field is expected to have.
	 *
	 * @example
	 * I.filled("Email", "bruce@waynecorp.com");
	 *
	 * @see {@link https://docs.uilicious.com/scripting/form_input.html#ifilled} for more information.
	 */
	filled(field: string, value: string): void;

	/**
	 * Select a dropdown, checkbox, or radio button.
	 *
	 * @param list (Optional) Keyword to identify the options list.
	 *
	 * @param option Keyword to identify the option to select.
	 *
	 * @example
	 * // Here, we will use this "Number" dropdown list for illustration.
	 * I.select("Number", "Two");
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/form_input.html#iselect} for more information.
	 */
	select(list: string, option: string): void;

	/**
	 * Select a dropdown, checkbox, or radio button.
	 *
	 * @param option Keyword to identify the option to select.
	 *
	 * @example
	 * // Here, we will use this "Number" dropdown list for illustration.
	 * I.select("Two");
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/form_input.html#iselect} for more information.
	 */
	select(option: string): void;

	/**
	 * Asserts that a dropdown option, checkbox, or radio button is selected.
	 * 
	 * @param list Keyword to identify the options list.
	 * 
	 * @param option Keyword to identify the option to be selected.
	 *
	 * @example
	 * // Here, we will use this "Number" dropdown list for illustration.
	 * I.selected("Number", "Two");
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/form_input.html#iselected} for more information.
	 */
	selected(list: string, option: string): void;

	/**
	 * Asserts that a dropdown option, checkbox, or radio button is selected.
	 * 
	 * @param option Keyword to identify the option to be selected.
	 *
	 * @example
	 * // Here, we will use this "Number" dropdown list for illustration.
	 * I.selected("Two");
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/form_input.html#iselected} for more information.
	 */
	selected(option: string): void;

	/**
	 * Deselect a checkbox.
	 * 
	 * @param list Keyword to identify the options list.
	 * 
	 * @param option Keyword to identify the option to deselect.
	 *
	 * @example
	 * // Here, we will use this "Number" dropdown list for illustration.
	 * I.deselect("Number", "Two");
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/form_input.html#ideselect} for more information.
	 */
	deselect(list: string, option: string): void;

	/**
	 * Deselect a checkbox.
	 * 
	 * @param option Keyword to identify the option to deselect.
	 *
	 * @example
	 * // Here, we will use this "Number" dropdown list for illustration.
	 * I.deselect("Two");
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/form_input.html#ideselect} for more information.
	 */
	deselect(option: string): void;

	/**
	 * Asserts that a dropdown option, checkbox, or radio button is NOT selected.
	 * 
	 * @param list Keyword to identify the options list.
	 * 
	 * @param option Keyword to identify the option that expected to be NOT selected.
	 *
	 * @example
	 * // Here, we will use this "Number" dropdown list for illustration.
	 * I.deselected("Number", "Two");
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/form_input.html#ideselected} for more information.
	 */
	deselected(list: string, option: string): void;

	/**
	 * Asserts that a dropdown option, checkbox, or radio button is NOT selected.
	 * 
	 * @param option Keyword to identify the option that expected to be NOT selected.
	 *
	 * @example
	 * // Here, we will use this "Number" dropdown list for illustration.
	 * I.deselected("Two");
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/form_input.html#ideselected} for more information.
	 */
	deselected(option: string): void;

	/**
	 * Upload a file.
	 * 
	 * @param field Keyword to identify the file upload field.
	 * 
	 * @param pathToFile Path to the file to upload.
	 * 
	 * **Currently, only absolute paths from the project root are supported**.
	 *
	 * @example
	 * I.upload("Start uploading","cat.jpg");
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/form_input.html#iupload} for more information.
	 */
	upload(field: string, pathToFile: string): void;

	/**
	 * Click on an element.
	 * 
	 * If the click opens a page in a new tab, the browser will automatically be switched to the new tab.
	 * 
	 * @param target Keyword to identify the element to click.
	 * 
	 * This is case-insensitive.
	 * 
	 * @param x (Optional) Offset the click x pixels right from the top-left corner of the target element.
	 *
	 * @param y (Optional) Offset the click y pixels right from the top-left corner of the target element.
	 * 
	 * @example
	 * // Click on an element with the text "Log In".
	 * I.click("Log In");
	 * 
	 * // Click on an element with its id property set to login-btn.
	 * I.click(".login-btn");
	 * 
	 * // Clicks on 100 to the right and 100 down from the top-left corner of the element with the id map.
	 * I.click("#map", 100, 100);
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/mouse.html#iclick--idoubleclick} for more information.
	 */
	click(target: string, x?: number, y?: number): void;

	/**
	 * Double click on an element.
	 * 
	 * If the click opens a page in a new tab, the browser will automatically be switched to the new tab.
	 * 
	 * @param target Keyword to identify the element to click.
	 * 
	 * This is case-insensitive.
	 * 
	 * @param x (Optional) Offset the click x pixels right from the top-left corner of the target element.
	 *
	 * @param y (Optional) Offset the click y pixels right from the top-left corner of the target element.
	 * 
	 * @example
	 * // Click on an element with the text "Log In".
	 * I.doubleClick("Log In");
	 * 
	 * // Click on an element with its id property set to login-btn.
	 * I.doubleClick(".login-btn");
	 * 
	 * // Clicks on 100 to the right and 100 down from the top-left corner of the element with the id map.
	 * I.doubleClick("#map", 100, 100);
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/mouse.html#iclick--idoubleclick} for more information.
	 */
	doubleClick(target: string, x?: number, y?: number): void;

	/**
	 * Right click on an element.
	 * 
	 * If the click opens a page in a new tab, the browser will automatically be switched to the new tab.
	 * 
	 * @param target Keyword to identify the element to click.
	 * 
	 * This is case-insensitive.
	 * 
	 * @param x (Optional) Offset the click x pixels right from the top-left corner of the target element.
	 *
	 * @param y (Optional) Offset the click y pixels right from the top-left corner of the target element.
	 * 
	 * @example
	 * // Click on an element with the text "Log In".
	 * I.rightClick("Log In");
	 * 
	 * // Click on an element with its id property set to login-btn.
	 * I.rightClick(".login-btn");
	 * 
	 * // Clicks on 100 to the right and 100 down from the top-left corner of the element with the id map.
	 * I.rightClick("#map", 100, 100);
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/mouse.html#irightclick} for more information.
	 */
	rightClick(target: string, x?: number, y?: number): void;

	/**
	 * Hover on an element.
	 * 
	 * @param target Keyword to identify the element to hover.
	 * 
	 * This is case-insensitive.
	 * 
	 * @example
	 * // using element's label, based on e.g. the element's text, tooltip, title, ARIA labels, etc.
	 * I.hoverOn("Help");          // Hover on the element labelled "Help"
	 *
	 * // using css selector
	 * I.hoverOn("#menu-mobile");  // Hover on element with the id "menu-mobile"
	 * I.hoverOn(".menu");         // Hover on element with the class ".menu"
	 *
	 * // using xpath
	 * I.hoverOn("//img[@class='question-card']"); // Hover on image with the class "question-card"
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/mouse.html#ihoveron} for more information.
	 */
	hoverOn(target: string): void;

	/**
	 * Drags an element to another target element.
	 * 
	 * @param element Keyword to identify the element to drag.
	 * 
	 * This is case-insensitive.
	 * 
	 * CSS / XPATHs may also be used.
	 * 
	 * @param target Keyword to identify the target element to drop on.
	 * 
	 * This is case-insensitive.
	 * 
	 * CSS / XPATHs may also be used.
	 * 
	 * @example
	 * // Drag elements using labels
	 * // Drags the element "drag me" to the target element "drop here".
	 * I.goTo("http://jqueryui.com/resources/demos/droppable/default.html");
	 * I.dragTo("drag me", "drop here");
	 * 
	 * // Drag elements using CSS
	 * // Drags the element with the ID "draggable" to the target element with the ID "droppable".
	 * I.goTo("http://jqueryui.com/resources/demos/droppable/default.html");
	 * I.dragTo("#draggable", "#droppable");
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/mouse.html#idragto} for more information.
	 */
	dragTo(element: string, target: string): void;

	/**
	 * Drags an element directionally by (x,y) pixels right and down.
	 * 
	 * @param element Keyword to identify the element to drag.
	 * 
	 * This is case-insensitive.
	 * 
	 * CSS / XPATHs may also be used.
	 * 
	 * @param x Number of pixels to drag right. Use negative numbers to drag left instead.
	 * 
	 * @param y Number of pixels to drag down. Use negative numbers to drag up instead.
	 * 
	 * @example
	 * // Drags the element "drag me" 150 pixels right, and 75 pixels down.
	 * I.goTo("http://jqueryui.com/resources/demos/droppable/default.html");
	 * I.dragBy("drag me", 150, 75);
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/mouse.html#idragby} for more information.
	 */
	dragBy(element: string, x: number, y: number): void;

	/**
	 * Drags an element up by a given number of pixels.
	 * 
	 * @param element Keyword to identify the element to drag.
	 * 
	 * This is case-insensitive.
	 * 
	 * CSS / XPATHs may also be used.
	 * 
	 * @param y Number of pixels to drag up.
	 * 
	 * @example
	 * // Drags the element "drag me" 10 pixels up.
	 * I.goTo("http://jqueryui.com/resources/demos/droppable/default.html");
	 * I.dragUp("drag me", 10);
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/mouse.html#idragup} for more information.
	 */
	dragUp(element: string, y: number): void;

	/**
	 * Drags an element down by a given number of pixels.
	 * 
	 * @param element Keyword to identify the element to drag.
	 * 
	 * This is case-insensitive.
	 * 
	 * CSS / XPATHs may also be used.
	 * 
	 * @param y Number of pixels to drag down.
	 * 
	 * @example
	 * // Drags the element "drag me" 10 pixels down.
	 * I.goTo("http://jqueryui.com/resources/demos/droppable/default.html");
	 * I.dragUp("drag me", 10);
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/mouse.html#idragdown} for more information.
	 */
	dragDown(element: string, y: number): void;

	/**
	 * Drags an element left by a given number of pixels.
	 * 
	 * @param element Keyword to identify the element to drag.
	 * 
	 * This is case-insensitive.
	 * 
	 * CSS / XPATHs may also be used.
	 * 
	 * @param x Number of pixels to drag left.
	 * 
	 * @example
	 * // Drags the element "drag me" 10 pixels left.
	 * I.goTo("http://jqueryui.com/resources/demos/droppable/default.html");
	 * I.dragUp("drag me", 10);
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/mouse.html#idragleft} for more information.
	 */
	dragLeft(element: string, x: number): void;

	/**
	 * Drags an element right by a given number of pixels.
	 * 
	 * @param element Keyword to identify the element to drag.
	 * 
	 * This is case-insensitive.
	 * 
	 * CSS / XPATHs may also be used.
	 * 
	 * @param x Number of pixels to drag right.
	 * 
	 * @example
	 * // Drags the element "drag me" 10 pixels right.
	 * I.goTo("http://jqueryui.com/resources/demos/droppable/default.html");
	 * I.dragUp("drag me", 10);
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/mouse.html#idragright} for more information.
	 */
	dragRight(element: string, x: number): void;

	/**
	 * Scrolls the page horizontally and vertically by a given number of pixels.
	 * 
	 * @param x Number of pixels to scroll right by. Use a negative number to scroll left instead.
	 * 
	 * @param y Number of pixels to scroll down by. Use a negative number to scroll up instead.
	 * 
	 * @example
	 * // Scrolls the page 200 pixels to the right, and 500 pixels up.
	 * I.scrollBy(200, -500);
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/mouse.html#iscrollby} for more information.
	 */
	scrollBy(x: number, y: number): void;

	/**
	 * Scrolls the page up by a given number of pixels.
	 * 
	 * @param y Number of pixels to scroll up by.
	 * 
	 * @example
	 * // Scrolls the page 50 pixels up.
	 * I.scrollUp(50);
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/mouse.html#iscrollup} for more information.
	 */
	scrollUp(y: number): void;

	/**
	 * Scrolls the page down by a given number of pixels.
	 * 
	 * @param y Number of pixels to scroll down by.
	 * 
	 * @example
	 * // Scrolls the page 50 pixels down.
	 * I.scrollDown(50);
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/mouse.html#iscrolldown} for more information.
	 */
	scrollDown(y: number): void;

	/**
	 * Scrolls the page left by a given number of pixels.
	 * 
	 * @param x Number of pixels to scroll left by.
	 * 
	 * @example
	 * // Scrolls the page 50 pixels left.
	 * I.scrollLeft(50);
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/mouse.html#iscrollleft} for more information.
	 */
	scrollLeft(x: number): void;

	/**
	 * Scrolls the page right by a given number of pixels.
	 * 
	 * @param x Number of pixels to scroll right by.
	 * 
	 * @example
	 * // Scrolls the page 50 pixels right.
	 * I.scrollRight(50);
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/mouse.html#iscrollright} for more information.
	 */
	scrollRight(x: number): void;

	/**
	 * Scrolls the given coordinate of the page.
	 * 
	 * @param x X coordinate of the page to scroll to.
	 * 
	 * @param y Y coordinate of the page to scroll to.
	 * 
	 * @example
	 * // Scrolls to the (0, 500) coordinate of the page.
	 * I.scrollTo(0, 500);
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/mouse.html#iscrollto} for more information.
	 */
	scrollTo(x: number, y: number): void;

	/**
	 * Scroll to the top of the page.
	 * 
	 * @example
	 * I.scrollToTop();
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/mouse.html#iscrolltotop} for more information.
	 */
	scrollToTop(): void;

	/**
	 * Scroll to the bottom of the page.
	 * For infinite scrolling pages, this command will simply scroll to the end of the rendered content.
	 * 
	 * @example
	 * I.scrollToTop();
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/mouse.html#iscrolltobottom} for more information.
	 */
	scrollToBottom(): void;

	/**
	 * Press a key or a string of keys.
	 * This will send keyboard inputs to the element in focus, or the page <body> if no element is focus.
	 * 
	 * @alias press
	 * 
	 * 
	 * @param key Key(s) to press.
	 * 
	 * @example
	 * // Text input
	 * // Note that I.fill(field, value) is recommended over I.type(value) for entering text into input fields.
	 * 
	 * I.type("hello"); // this will send "h" "e" "l" "l" "o"
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/keyboard.html#itype--ipress} for more information.
	 */
	type(key: string | string[]): void;

	/**
	 * Press a key or a string of keys.
	 * This will send keyboard inputs to the element in focus, or the page <body> if no element is focus.
	 * 
	 * @alias press
	 * 
	 * @param key Key(s) to press.
	 * 
	 * @example
	 * // Press a key
	 * I.press("?"); // this will send "?"
	 * 
	 * // Press a special key
	 * I.press("Backspace"); // This will press the "Backspace" key
	 * 
	 * // Press a chord (send multiple keys simultaneously)
	 * I.press(["Control", "A"]);
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/keyboard.html#itype--ipress} for more information.
	 */
	press(key: string | string[]): void; // Alias of type

	/**
	 * Press the Enter key.
	 * 
	 * @example
	 * I.pressEnter();
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/keyboard.html#ipressenter} for more information.
	 */
	pressEnter(): void;

	/**
	 * Press the ↑ key.
	 * 
	 * @example
	 * I.pressUp();
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/keyboard.html#ipressup} for more information.
	 */
	pressUp(): void;

	/**
	 * Press the ↓ key.
	 * 
	 * @example
	 * I.pressDown();
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/keyboard.html#ipressdown} for more information.
	 */
	pressDown(): void;

	/**
	 * Press the ← key.
	 * 
	 * @example
	 * I.pressLeft();
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/keyboard.html#ipressleft} for more information.
	 */
	pressLeft(): void;

	/**
	 * Press the → key.
	 * 
	 * @example
	 * I.pressRight();
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/keyboard.html#ipressright} for more information.
	 */
	pressRight(): void;

	/**
	 * Press the tab key.
	 * 
	 * @example
	 * I.pressTab();
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/keyboard.html#ipresstab} for more information.
	 */
	pressTab(): void;

	/**
	 * Assert that an text or element is visible.
	 * 
	 * @param target Text or element to find.
	 * 
	 * @example
	 * // Asserts that the text "Welcome back, Bruce" is seen on the page.
	 * I.see("Welcome back, Bruce");
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/assertion.html#isee} for more information.
	 */
	see(target: string): void;

	/**
	 * Assert that an text or element is **NOT** visible.
	 * 
	 * @param target Text or element to find.
	 * 
	 * @example
	 * // Asserts that the text "Welcome back, Bruce" is **NOT** seen on the page.
	 * I.dontSee("Welcome back, Bruce");
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/assertion.html#idontsee} for more information.
	 */
	dontSee(target: string): void;

	/**
	 * Assert the number of occurances for a text or element.
	 * 
	 * @param target Text or element to find.
	 * 
	 * @param n Number of occurance expected.
	 * 
	 * @example
	 * // Asserts that there's 20 occurances of the text "Add to cart".
	 * I.count("Add to cart", 20);
	 * 
	 * // Asserts that there's 20 occurances of the element with the "product" CSS class.
	 * I.count(".product", 20);
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/assertion.html#icount} for more information.
	 */
	count(target: string, n: number): void;

	/**
	 * Assert the title of the current page.
	 * 
	 * @param title The expected page title.
	 * 
	 * @example
	 * // This example test navigates to the https://www.wikipedia.org/ and checks if the page title is "Wikipedia". The test will pass if the page title is exactly "Wikipedia".
	 * I.goTo("https://www.wikipedia.org/");
	 * I.seePageTitle("Wikipedia");
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/assertion.html#iseepagetitle} for more information.
	 */
	seePageTitle(title: string): void;

	/**
	 * Get the number of occurances of a text or element.
	 * 
	 * @param target The text or element to find.
	 * 
	 * @returns The number of occurences of specified element or text.
	 * 
	 * @example
	 * // Sets the variable count to the number occurances of the text "Add to cart"
	 * var count = I.getCount("Add to cart");
	 * 
	 * // Sets the variable count to the number occurances of the element with the CSS class "product".
	 * var count = I.getCount(".product");
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/extract.html#igetcount} for more information.
	 */
	getCount(target: string): number;

	/**
	 * Get the text content of an element.
	 * 
	 * @alias grabText
	 * 
	 * @param target CSS selector or XPATH of the element to extract the text content from.
	 * 
	 * @returns The text content of specified element.
	 * 
	 * @example
	 * // if <div id="message">Welcome</div>
	 * var message = I.getText("#message"); // extracts "Welcome"
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/extract.html#igettext} for more information.
	 */
	getText(target: string): string;

	/**
	 * Get the value of an input element.
	 * 
	 * @param target Keyword to identify the field.
	 * The associated label, aria-label, placeholder, adjacent text, and current value can be used to identify a field.
	 * CSS selectors can also be used, but is not recommended as it makes the tests harder to keep up to date.
	 * 
	 * @returns Value of specified input element.
	 * 
	 * @example
	 * I.fill("Search", "Hello");
	 * I.type(" from the other side"); 
	 * var foo = I.getValue("Search"); // `foo` would be "Hello from the other side"
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/extract.html#igetvalue} for more information.
	 */
	getValue(target: string): string;

	/**
	 * Get the title of the current page.
	 * 
	 * @returns The title of current page.
	 * 
	 * @example
	 * // This example test navigates to the https://www.wikipedia.org/ and reads the current title of the page to the pageTitle variable.
	 * I.goTo("https://www.wikipedia.org/");
	 * var pageTitle = I.getPageTitle(); // The returned value will be "Wikipedia"
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/extract.html#igetpagetitle} for more information.
	 */
	getPageTitle(): string;

	/**
	 * Assert the message displayed on the alert.
	 * 
	 * @param text (Optional) Text that is expected to be displayed on the alert.
	 * 
	 * @example
	 * UI.execute("alert('hello    world')"); // opens an alert with the message "Hello world"
	 * I.seeAlert(); // pass
	 * I.seeAlert("hello world"); // pass
	 * I.seeAlert("lorem"); // fail
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/alerts.html#iseealert} for more information.
	 */
	seeAlert(text: string): void;

	/**
	 * Press the "Ok" button (or the equivalent in other languages) on the alert.
	 * 
	 * @example
	 * I.acceptAlert();
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/alerts.html#iacceptalert} for more information.
	 */
	acceptAlert(): void;

	/**
	 * Press the "Cancel" (or the equivalent in other languages) button on the alert.
	 * On alert boxes that do not have the "Cancel" button, the "Ok" button will be pressed instead to dismiss the alert.
	 * 
	 * @example
	 * I.cancelAlert();
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/alerts.html#icancelalert} for more information.
	 */
	cancelAlert(): void;

	/**
	 * Fill the text box on the alert.
	 * Only applicable to **prompt** dialogs.
	 * 
	 * @param value Text to fill into the prompt's text box.
	 * 
	 * @example
	 * UI.execute("prompt('What's your name?')"); // open a prompt dialog
	 * I.fillAlert("Jane"); // fill in the prompt dialog with "Jane"
	 * I.acceptAlert(); // press "Ok"
	 * // This fills in the text box in the alert with "Jane", and presses the "Ok" button.
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/alerts.html#ifillalert} for more information.
	 */
	fillAlert(value: string): void;

	/**
	 * Wait for a given amount of time.
	 * 
	 * @param seconds Number of seconds to wait for.
	 * 
	 * @example
	 * // Waits for 3 seconds.
	 * I.wait(3);
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/utility.html#iwait} for more information.
	 */
	wait(seconds: number): void;
}

export default Actor;
