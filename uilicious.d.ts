/**
 * Type definitions for UIlicious.
 *
 * For documentation on these functions, see:
 * https://docs.uilicious.com
 *
 * For info about declaring global type definitions, see:
 * https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-d-ts.html
 */

declare namespace I {
  /**
   * Goes to the specified url, optionally opening in a new tab.
   */
  function goTo(url: string, options?: { newTab: boolean });
  /**
   * Refreshes the current page.
   */
  function refreshPage();
  /**
   * Switches to the next tab if no argument provided.
   * Switches to the N'th tab if a number is provided.
   * Switches to the tab with a page title if a string is provided.
   */
  function switchTab(tab?: string | number);
  /**
   * Closes the current tab.
   */
  function closeTab();
  /**
   * Asserts that the browser is at a specific URL.
   * You can use an absolute URL or a relative URL.
   */
  function amAt(url: string);
  /**
   * Fills in a form field.
   * Alias for `fillField`.
   */
  function fill(field: string, value: string);
  /**
   * Fills in a form field.
   * Alias for `fill`.
   */
  function fillField(field: string, value: string);
  /**
   * Asserts that the form is filled with a specific value.
   */
  function filled(field: string, value: string);
  /**
   * Select a dropdown, checkbox, or radio button.
   */
  function select(field: string, value?: string);
  /**
   * Asserts that a dropdown option, checkbox, or radio button is selected.
   */
  function selected(field: string, value?: string);
  /**
   * Deselect a dropdown option, checkbox, or a radio button.
   */
  function deselect(field: string, value?: string);
  /**
   * Asserts that a dropdown option, checkbox, or radio button is NOT selected.
   */
  function deselected(field: string, value?: string);
  /**
   * Upload a file.
   */
  function upload(field: string, pathToFile: string);
  /**
   * Click on an element.
   */
  function click(target: string);
  function click(target: string, x: number, y: number);
  /**
   * Doubleclick on an element.
   */
  function doubleClick(target: string);
  function doubleClick(target: string, x: number, y: number);
  /**
   * Right click on an element.
   */
  function rightClick(target: string);
  function rightClick(target: string, x: number, y: number);
  /**
   * Hover on an element.
   */
  function hoverOn(target: string);
  /**
   * Drags an element to another target element
   */
  function dragTo(element: string, target: string);
  /**
   * Drags an element directionally by (x,y) pixels right and down.
   */
  function dragBy(element: string, x: number, y: number);
  /**
   * Drags an element up by a given number of pixels.
   */
  function dragUp(element: string, y: number);
  /**
   * Drags an element down by a given number of pixels.
   */
  function dragDown(element: string, y: number);
  /**
   * Drags an element left by a given number of pixels.
   */
  function dragLeft(element: string, x: number);
  /**
   * Drags an element right by a given number of pixels.
   */
  function dragRight(element: string, x: number);
  /**
   * Scrolls the page horizontally and vertically by a given number of pixels.
   */
  function scrollBy(x: number, y: number);
  /**
   * Scrolls the page up by a given number of pixels.
   */
  function scrollUp(y: number);
  /**
   * Scrolls the page down by a given number of pixels.
   */
  function scrollDown(y: number);
  /**
   * Scrolls the page left by a given number of pixels.
   */
  function scrollLeft(x: number);
  /**
   * Scrolls the page right by a given number of pixels.
   */
  function scrollRight(x: number);
  /**
   * Scrolls the given coordinate of the page.
   */
  function scrollTo(x: number, y: number);
  /**
   * Scroll to the top of the page.
   */
  function scrollToTop();
  /**
   * Scroll to the bottom of the page.
   */
  function scrollToBottom();
  /**
   * Type a key or a string of keys.
   * Alias for `press`.
   *
   * For special keys, spell out their name:
   *    Delete
   *    Backspace
   *    Enter
   *    Shift
   *    Control
   *    Alt
   */
  function type(key: string);
  /**
   * Simultaneously type two keys.
   * Example: I.type(["Shift", "a"])
   */
  function type(chord: Array<string>);
  /**
   * Press a key or a string of keys.
   * Alias for `type`.
   *
   * For special keys, spell out their name:
   *    Delete
   *    Backspace
   *    Enter
   *    Shift
   *    Control
   *    Alt
   */
  function press(key: string);
  /**
   * Simultaneously press two keys.
   * Example: I.press(["Shift", "a"])
   */
  function press(chord: Array<string>);
  /**
   * Presses the `Enter` key.
   * Alias for `press('Enter')`.
   */
  function pressEnter();
  /**
   * Presses the `Up` arrow key.
   * Alias for `press('Up')`.
   */
  function pressUp();
  /**
   * Presses the `Down` arrow key.
   * Alias for `press('Down')`.
   */
  function pressDown();
  /**
   * Presses the `Left` arrow key.
   * Alias for `press('Left')`.
   */
  function pressLeft();
  /**
   * Presses the `Right` key.
   * Alias for `press('Right')`.
   */
  function pressRight();
  /**
   * Presses the `Tab` key.
   * Alias for `press('Tab')`.
   */
  function pressTab();
  /**
   * Assert that an text or element is visible.
   */
  function see(target: string);
  /**
   * Assert that an text or element is NOT visible.
   */
  function dontSee(target: string);
  /**
   * Assert the number of occurances for a text or element.
   */
  function count(target: string, n: number);
  /**
   * Assert the title of the current page.
   */
  function seePageTitle(title: string);
  /**
   * Wait for a given amount of seconds.
   */
  function wait(seconds: number);
  /**
   * Assert the message displayed on the alert.
   */
  function seeAlert(text?: string);
  /**
   * Press the "Ok" button (or the equivalent in other languages) on the alert.
   */
  function acceptAlert();
  /**
   * Press the "Cancel" (or the equivalent in other languages) button on the alert.
   */
  function cancelAlert();
  /**
   * Fill the text box on the alert.
   * Only applicable for dialog prompts.
   */
  function fillAlert(text: string);
}

declare namespace UI {
  /**
   * The width of the browser window, including the broswer's UI,
   * such as the menubar and addressbar, etc.
   */
  const outerWidth: number;
  /**
   * The heigth of the browser window, including the broswer's UI,
   * such as the menubar and addressbar, etc.
   */
  const outerHeight: number;
  /**
   * The width of the browser viewport.
   */
  const innerWidth: number;
  /**
   * The height of the browser viewport.
   */
  const innerHeight: number;
  /**
   * Asserts that the status code for the current page is a specific status code.
   */
  function isStatusCode(statusCode: number);
  /**
   * Asserts that the status code for the current page is NOT a specific status code.
   */
  function isNotStatusCode(statusCode: number);
  /**
   * Asserts that the status code for the current page is 200 (OK).
   */
  function is200();
  /**
   * Asserts that the status code for the current page is NOT 200 (OK).
   */
  function isNot200();
  /**
   * Asserts that the status code for the current page is 404 (Not Found).
   */
  function is400();
  /**
   * Asserts that the status code for the current page is NOT 404 (Not Found).
   */
  function isNot400();
  /**
   * Asserts that the status code for the current page is 500 (Internal Server Error).
   */
  function is500();
  /**
   * Asserts that the status code for the current page is NOT 500 (Internal Server Error).
   */
  function isNot500();
  /**
   * Executes Javascript on the browser and returns the result.
   *
   * Your action is ran in the context of the browser and has access
   * to the variables that are available in the browser, but no the test.
   *
   * To make test variables available to your script that runs in the browser,
   * specify them as extra arguments to the execute function.
   */
  function execute<T = void, K = Array<any>>(
    action: (...args: K) => T,
    ...args: K
  ): T;
  /**
   * Get the value of an attribute on an element.
   */
  function getAttribute(target: string, attribute: string): string | null;
  /**
   * Get the names and values of attributes on an element as a map.
   */
  function getAttributes(target: string): Record<string, string> | null;
  /**
   * Assert the presense or the expected value of an attribute on an element.
   */
  function hasAttribute(target: string, attribute: string, value?: string);
  /**
   * Assert the absense of an attribute on an element, or that the value of an attribute is not equals a given string.
   */
  function doesNotHaveAttribute(
    target: string,
    attribute: string,
    value?: string,
  );
  /**
   * Assert the presence of a CSS class on an element.
   */
  function hasClass(target: string, clazz: string);
  /**
   * Assert the absence of a CSS class on an element.
   */
  function doesNotHaveClass(target: string, clazz: string);
  /**
   * Get the outer HTML of an element.
   */
  function getHTML(target: string): string | null;
  function getOuterHTML(target: string): string | null;
  /**
   * Get the inner HTML of an element.
   */
  function getInnerHTML(target: string): string | null;
  /**
   * Get the number of occurances of a text or element.
   */
  function getCount(target: string): number;
  /**
   * Get the text content of an element.
   */
  function getText(target: string): string | null;
  /**
   * Get the value of an input element.
   */
  function getValue(target: string): string | null;
  /**
   * Get the title of the current page.
   */
  function getPageTitle(): string;
  /**
   * Limit the test to specific parts of a page.
   */
  function context(target: string, action: () => unknown);
  /**
   * Resize the resolution to a specific width and height.
   * Example:
   *    I.resize('1280x960')
   *    I.resize(1280, 960)
   */
  function resize(
    resolution: string,
    options?: {
      target: 'viewport' | 'window';
    },
  );
  function resize(
    width: number,
    height: number,
    options?: {
      target: 'viewport' | 'window';
    },
  );
  /**
   * https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
   */
  const LocalStorage: LocalStorage;
  type LocalStorage = {
    /**
     * Get the value of a property from local storage for the origin of the current page.
     */
    get(name: string): string | null;
    /**
     * Set a property in local storage for the origin of the current page.
     * If the value is not a string, it will be stringified before saving.
     */
    set(name: string, value: any);
    /**
     * Delete a property in local storage for the origin of the current page.
     */
    delete(name: string);
    /**
     * Delete all properties in local storage for the origin of the current page.
     */
    deleteAll();
  };
  /**
   * https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cookie
   */
  const COOKIE: Cookie;
  type Cookie = {
    /**
     * Sets a cookie on the current page.
     */
    set(name: string, value: string);
    set(options: {
      name: string;
      value: string;
      secure?: boolean;
      httpOnly?: boolean;
      domain?: string;
      path?: string;
      maxAge?: number;
      expires?: string;
    });
    /**
     * Assert that a cookie is found on the current page.
     */
    isSet(name: string): boolean;
    /**
     * Assert the value of a cookie on the current page.
     */
    isEqual(name: string, value: string): boolean;
    /**
     * Delete a cookie on the current page.
     */
    delete(name: string);
    /**
     * Delete all cookies found on the current page.
     */
    deleteAll();
  };
}

declare namespace TEST {
  /**
   * Runs another test.
   * Literally just executes whatever commands are in the file.
   * All tests run in the same scope. This means that variables with the same name in different tests will override each other.
   */
  function run(path: string);
  /**
   * Manually stops the test.
   */
  function stop();
  /**
   * Options for the `loadDataFromCsv` function.
   */
  type LoadDataFromCsvOptions = {
    header?: string;
    dataset?: string;
    escape?: string;
    delimiter?: string;
  };
  /**
   * Result type for the `loadDataFromCsv` and `loadDataFromJson` functions.
   */
  type LoadDataResult<T> = Array<T>;
  /**
   * Loads entries from a .csv (comma-separated value) file.
   * Returns an array of JSON objects, or a single JSON object if dataset is specified.
   */
  function loadDataFromCsv<T = Record<string, any>>(
    file: string,
    dataset?: string,
  ): LoadDataResult<T>;
  function loadDataFromCsv<T = Record<string, any>>(
    file: string,
    dataset: string,
    options?: LoadDataFromCsvOptions,
  ): LoadDataResult<T>;
  function loadDataFromCsv<T = Record<string, any>>(
    file: string,
    options?: LoadDataFromCsvOptions,
  ): LoadDataResult<T>;
  /**
   * Loads data from a .json (javascript object notation) file.
   * Returns the test data as a json object. Nested data structure is supported.
   */
  function loadDataFromJson<T = Record<string, any>>(
    file: string,
  ): LoadDataResult<T>;
  /**
   * Logger.
   */
  const log: Log;
  type Log = {
    /**
     * Log a message to report.
     */
    info(message: string);
    /**
     * Log a message to report with pass status.
     */
    pass(message: string);
    /**
     * Log a message to report with fail status.
     */
    fail(message: string);
  };
}
