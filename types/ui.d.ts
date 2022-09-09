/**
 * @file The Typescript definitions for the UIlicious `UI.*` commands.
 */

interface UICommand {
	/**
	 * Get the current width of window.
	 */
	outerWidth: number;

	/**
	 * Get the current height of window.
	 */
	outerHeight: number;

	/**
	 * Get the current width of viewport.
	 */
	innerWidth: number;

	/**
	 * Get the current height of viewport.
	 */
	innerHeight: number;

	// Page assertion commands

	/**
	 * Asserts that the status code for the current page is a specific status code.
	 *
	 * @param statusCode The status code to expect for the current page.
	 *
	 * @example
	 * // Validates that the current page returns 403 (Forbidden).
	 * UI.isStatusCode(403);
	 *
	 * @see {@link https://docs.uilicious.com/scripting/http_status_code_assertion.html#uiisstatuscode} for more information.
	 */
	isStatusCode(statusCode: number): void;

	/**
	 * Asserts that the status code for the current page is __NOT__ a specific status code.
	 *
	 * @param statusCode The status code that is __NOT__ expected for the current page.
	 *
	 * @example
	 * // Validates that the current page does not return 500 (Internal Server Error).
	 * UI.isNotStatusCode(500);
	 *
	 * @see {@link https://docs.uilicious.com/scripting/http_status_code_assertion.html#uiisnotstatuscode} for more information.
	 */
	isNotStatusCode(statusCode: number): void;

	/**
	 * Asserts that the status code for the current page is 200 (OK).
	 *
	 * @example
	 * UI.is200();
	 *
	 * @see {@link https://docs.uilicious.com/scripting/http_status_code_assertion.html#uiis200} for more information.
	 */
	is200(): void;

	/**
	 * Asserts that the status code for the current page is NOT 200 (OK).
	 *
	 * @example
	 * UI.isNot200();
	 *
	 * @see {@link https://docs.uilicious.com/scripting/http_status_code_assertion.html#uisinot200} for more information.
	 */
	isNot200(): void;

	/**
	 * Asserts that the status code for the current page is 404 (Not Found).
	 *
	 * @example
	 * UI.is404();
	 *
	 * @see {@link https://docs.uilicious.com/scripting/http_status_code_assertion.html#usis404} for more information.
	 */
	is404(): void;

	/**
	 * Asserts that the status code for the current page is NOT 404 (Not Found).
	 *
	 * @example
	 * UI.isNot404();
	 *
	 * @see {@link https://docs.uilicious.com/scripting/http_status_code_assertion.html#uiisnot404} for more information.
	 */
	isNot404(): void;

	/**
	 * Asserts that the status code for the current page is 500 (Internal Server Error).
	 *
	 * @example
	 * UI.is500();
	 *
	 * @see {@link https://docs.uilicious.com/scripting/http_status_code_assertion.html#uiis500} for more information.
	 */
	is500(): void;

	/**
	 * Asserts that the status code for the current page is NOT 500 (Internal Server Error).
	 *
	 * @example
	 * UI.isNot500();
	 *
	 * @see {@link https://docs.uilicious.com/scripting/http_status_code_assertion.html#uiisnot500} for more information.
	 */
	isNot500(): void;

	// Read and Validate Page Elements
	/**
	 * Get the value of an attribute on an element.
	 *
	 * @param target Expression to target an element. This can be a text, CSS selector, or XPATH selector.
	 * 
	 * @param attribute Name of the attribute to get the value of.
	 * 
	 * @returns Returns null if the attribute is not found on the element. Value of attribute is returned if found.
	 * 
	 * @example
	 * // Extract the href attribute from "Register a new account" element into a variable named signUpLink
	 * let signUpLink = UI.getAttribute("Register a new account", "href");
	 *
	 * @see {@link https://docs.uilicious.com/scripting/element_commands.html#uigetattribute} for more information.
	 */
	getAttribute(target: string, attribute: string): string | null;
	
	/**
	 * Get the names and values of attributes on an element as a map.
	 *
	 * @param target Expression to target an element. This can be a text, CSS selector, or XPATH selector.
	 * 
	 * @returns Name and Values of attributes as a map.
	 * 
	 * @example
	 * // We can read the attributes of the checkbox to variable in our test script like this:
	 * var attr = UI.getAttributes("#backorder-product-checkbox"); // returns attributes as a json map object
	 *
	 * @see {@link https://docs.uilicious.com/scripting/element_commands.html#uigetattributes} for more information.
	 */
	getAttributes(target: string): Record<string, string> | null;

	/**
	 * Assert the presense or the expected value of an attribute on an element.
	 *
	 * @param target Expression to target an element. This can be a text, CSS selector, or XPATH selector.
	 * 
	 * @param attribute Name of the attribute.
	 * 
	 * @param value (Optional) Value expected for the attribute. Case-insensitive. If not provided, this command will simply assert that the attribute exists on the element.
	 * 
	 * @example
	 * // Validate that an element should be disabled
	 * UI.hasAttribute("#login-button", "disabled");
	 * 
	 * // Validate that the element attribute should have a specific value
	 * UI.hasAttribute("#summer-sale-banner", "campaign-id", "SUMMERSALE2020");
	 *
	 * @see {@link https://docs.uilicious.com/scripting/element_commands.html#uihasattribute} for more information.
	 */
	hasAttribute(target: string, attribute: string, value?: string): void;

	/**
	 * Assert the absense of an attribute on an element, or that the value of an attribute is not equals a given string.
	 *
	 * @param target Expression to target an element. This can be a text, CSS selector, or XPATH selector.
	 * 
	 * @param attribute Name of the attribute to get the value of.
	 * 
	 * @param value (Optional) Value that the attribute should not be equal to. Case-insensitive. If not provided, this command will simply assert that the attribute does not exist on the element.
	 * 
	 * @example
	 * // Validate that an element should not be disabled
	 * UI.doesNotHaveAttribute("#login-button", "disabled");
	 *
	 * @see {@link https://docs.uilicious.com/scripting/element_commands.html#uidoesnothaveattribute} for more information.
	 */
	doesNotHaveAttribute(target: string, attribute: string, value?: string): void;

	/**
	 * Assert the presence of a CSS class on an element.
	 *
	 * @param target Expression to target an element. This can be a text, CSS selector, or XPATH selector.
	 * 
	 * @param cssClass CSS class that should exist on the element.
	 * 
	 * @example
	 * // We can use UI.hasClass to check if the has-error CSS class is applied to an form field when the form is submitted with invalid values, like an invalid password.
	 * UI.hasClass("#password-field-group", "has-error");
	 *
	 * @see {@link https://docs.uilicious.com/scripting/element_commands.html#uihasclass} for more information.
	 */
	hasClass(target: string, cssClass: string): void;

	/**
	 * Assert the absence of a CSS class on an element.
	 *
	 * @param target Expression to target an element. This can be a text, CSS selector, or XPATH selector.
	 * 
	 * @param cssClass CSS class that should not exist on the element.
	 * 
	 * @example
	 * UI.doesNotHaveClass("#password-field-group", "has-error");
	 *
	 * @see {@link https://docs.uilicious.com/scripting/element_commands.html#uidoesnothaveclass} for more information.
	 */
	doesNotHaveClass(target: string, cssClass: string): void;

	/**
	 * Return a markup of an element as a string.
	 *
	 * @param target Expression to target an element. This can be a text, CSS selector, or XPATH selector.
	 * 
	 * @returns A markup of an element as a string.
	 * 
	 * @example
	 * var HTML = I.getHTML("sign-up-button");
	 *
	 * @see {@link https://docs.uilicious.com/scripting/element_commands.html#element-html-commands} for more information.
	 */
	getHTML(target: string): string;

	/**
	 * Return a markup of an element as a string.
	 *
	 * @param target Expression to target an element. This can be a text, CSS selector, or XPATH selector.
	 * 
	 * @returns A markup of an element as a string.
	 * 
	 * @example
	 * var outerHTML = I.getOuterHTML("sign-up-button");
	 *
	 * @see {@link https://docs.uilicious.com/scripting/element_commands.html#element-html-commands} for more information.
	 */
	getOuterHTML(target: string): string;

	/**
	 * Return a markup of an element as a string.
	 *
	 * @param target Expression to target an element. This can be a text, CSS selector, or XPATH selector.
	 * 
	 * @returns A markup of an element as a string.
	 * 
	 * @example
	 * var innerHTML = I.getInnerHTML("sign-up-button");
	 *
	 * @see {@link https://docs.uilicious.com/scripting/element_commands.html#element-html-commands} for more information.
	 */
	getInnerHTML(target: string): string;

	// Limiting test scope
	/**
	 * Limit the test to specific parts of a page.
	 *
	 * Can be used to explicitly switch to the context of an iframe.
	 *
	 * @param context Limit the test to specific parts of a page. Specify a CSS selector or XPATH to specify the element to limit the test to. 
	 * If the CSS selector or XPATH matches multiple elements, the scope of the test will be set to all matches.
	 * 
	 * @param test Test to run using the context.
	 * 
	 * @example
	 * UI.context("#login-form", function(){ // the following commands runs on the login form on
	 * I.fill("username", "hello@uilicious.com");
	 * I.fill("password", "password");
	 * I.click("login");
	 * })
	 *
	 * @see {@link https://docs.uilicious.com/scripting/ui_context.html#uicontext} for more information.
	 */
	context(context: string, test: () => unknown): void;

	// Execute Javascript
	/**
	 * Executes Javascript on the browser.
	 *
	 * @param action Javascript to execute on the browser.
	 *
	 * @param args Optional. Arguments to pass to the javascript function.
	 * 
	 * @returns A markup of an element as a string.
	 * 
	 * @example
	 * // Executing Javascript as string
	 * var value = UI.execute("return 1 + 2"); // value is 3
	 *
	 * @see {@link https://docs.uilicious.com/scripting/executing-javascript.html#uiexecute} for more information.
	 */
	execute<T = void, K extends Array<any> = Array<any>>(
		action: (...args: K) => T,
		...args: K
	): T;

	// HTTP requests
	/**
	 * Do a http request with the GET method.
	 *
	 * @param url The url to send the HTTP request to.
	 * 
	 * @param options Options to configure the HTTP request. Go to documentation for more info.
	 * 
	 * @returns Returns a data object.
	 * 
	 * @example
	 * let res = UI.httpGet("https://petstore.swagger.io/v2/pet/9216678377732869000");
	 *
	 * @see {@link https://docs.uilicious.com/scripting/ui_http_commands.html#how-it-works} for more information.
	 */
	httpGet(url: string, options?: HttpRequestOptions): HttpResponse;

	/**
	 * Do a http request with the POST method.
	 *
	 * @param url The url to send the HTTP request to.
	 * 
	 * @param options Options to configure the HTTP request. Go to documentation for more info.
	 * 
	 * @returns Returns a data object.
	 * 
	 * @example
	 * var response = UI.httpPost(url);
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/ui_http_commands.html#how-it-works} for more information.
	 *
	 */
	httpPost(url: string, options?: HttpRequestOptions): HttpResponse;

	/**
	 * Do a http request.
	 *
	 * @param url The url to send the HTTP request to.
	 * 
	 * @param options Options to configure the HTTP request. Go to documentation for more info.
	 *
	 * @returns Returns a data object.
	 * 
	 * @example
	 * var response = UI.httpRequest(options);
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/ui_http_commands.html#how-it-works} for more information.
	 *
	 */
	httpRequest(url: string, options?: HttpRequestOptions): HttpResponse;

	// Cookie
	/**
	 * Any cookie settings related items.
	 */
	COOKIE: {
		/**
		 * Sets a cookie on the current page.
		 *
		 * @param name Name of the cookie.
		 * 
		 * @param value Value of the cookie.
		 * 
		 * @example
		 * // This sets a cookie named "foo" with the value "bar" on the page "https://google.com".
		 * I.goTo("https://google.com");
		 * UI.COOKIE.set("foo", "bar");
		 * 
		 * @see {@link https://docs.uilicious.com/scripting/cookies.html#uicookieset} for more information.
		 */
		set(name: string, value: string): void;

		/**
		 * Sets a cookie on the current page.
		 *
		 * @param options Set format, look at link for more information.
		 * 
		 * @example
		 * // Sets a Secure cookie "foo" with the value "bar" that expires in 86400 seconds at the current page.
		 * UI.COOKIE.set({name: "foo", value: "bar", "secure": true, "maxAge": 86400 });
		 * 
		 * @see {@link https://docs.uilicious.com/scripting/cookies.html#uicookieset} for more information.
		 */
		set(options: CookieSetOptions): void; //@poh there is a settings for options too

		/**
		 * Assert that a cookie is found on the current page.
		 *
		 * @param name Name of the cookie.
		 * 
		 * @example
		 * // Assert that a cookie named "foo" has been found on "https://mystore.com/brands".
		 * I.goTo("https://mystore.com/brands");
		 * UI.COOKIE.isSet("foo");
		 * 
		 * @see {@link https://docs.uilicious.com/scripting/cookies.html#uicookieisset} for more information.
		 */
		isSet(name: string): void;

		/**
		 * Assert the value of a cookie on the current page.
		 *
		 * @param name Name of the cookie.
		 * 
		 * @param value Value of the cookie.
		 * 
		 * @example
		 * // Assert that there is a cookie name "foo" with the value "bar" on "https://mystore.com/brands".
		 * I.goTo("https://mystore.com/brands");
		 * UI.COOKIE.isEqual("foo", "bar");
		 * 
		 * @see {@link https://docs.uilicious.com/scripting/cookies.html#uicookieisEqual} for more information.
		 */
		isEqual(name: string, value: string): void;

		/**
		 * Delete a cookie on the current page.
		 *
		 * @param name Name of the cookie.
		 * 
		 * @example
		 * // Deletes the cookie named "foo" from the current page.
		 * UI.COOKIE.delete("foo");
		 * 
		 * @see {@link https://docs.uilicious.com/scripting/cookies.html#uicookiedelete} for more information.
		 */
		delete(name: string): void;

		/**
		 * Delete all cookies found on the current page.
		 * 
		 * @example
		 * UI.COOKIE.deleteAll();
		 * 
		 * @see {@link https://docs.uilicious.com/scripting/cookies.html#uicookiedeleteAll} for more information.
		 */
		deleteAll(): void;
	},

	/**
	 * Local Storage items.
	 */
	LocalStorage: {
		/**
		 * Get the value of a property from local storage for the origin of the current page.
		 *
		 * @param name The name of the property to get from local storage.
		 * 
		 * @example
		 * // Here's how we can access the local storage in our test script to get the value of the cart property for example:
		 * var cart = UI.LocalStorage.get("cart");
		 * 
		 * @see {@link https://docs.uilicious.com/scripting/local_storage_commands.html#uilocalstorageget} for more information.
		 */
		get(name: string): void;

		/**
		 * Set a property in local storage for the origin of the current page.
		 * If the property already exists in local storage, the value is overriden.
		 *
		 * @param name The name of the property to put in local storage.
		 * 
		 * @param value The value to the property to put in local storage. If the value is not a string, it will be stringified before saving.
		 * 
		 * @example
		 * // Set the theme property in local storage to {"dark_mode": true}:
		 * UI.LocalStorage.set("theme", {"dark_mode": true});
		 * 
		 * @see {@link https://docs.uilicious.com/scripting/local_storage_commands.html#uilocalstorageset} for more information.
		 */
		set(name: string, value: any): void;

		/**
		 * Delete a property in local storage for the origin of the current page.
		 *
		 * @param name The name of the property to get from local storage.
		 * 
		 * @example
		 * // Delete the cart property from local storage:
		 * UI.LocalStorage.delete("cart");
		 * 
		 * @see {@link https://docs.uilicious.com/scripting/local_storage_commands.html#uilocalstoragedelete} for more information.
		 */
		delete(name: string): void;

		/**
		 * Delete all properties in local storage for the origin of the current page.
		 *
		 * @example
		 * UI.LocalStorage.deleteAll();
		 * 
		 * @see {@link https://docs.uilicious.com/scripting/local_storage_commands.html#uilocalstoragedeleteall} for more information.
		 */
		deleteAll(): void;
		// isSet(): void; // coming soon
		// isEqual(): void; // coming soon
	},

	// Window Resize
	/**
	 * Resize the resolution to a specific width and height.
	 *
	 * @param resolution A string representation of the resolution to resize to, following the format "<width>x<height>", e.g. "1920x800".
	 * 
	 * @param options Additional options. Go to link for more info.
	 * 
	 * @param options.target Set to "viewport" to resize the viewport. Set to "window" to resize the entire window.
	 *
	 * @example
	 * // This will resize the resolution of the entire browser window to width of 1920 pixels, and height of 1080 pixels.
	 * UI.resize("1920x1080");
	 * // OR
	 * UI.resize(1920, 1080);
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/window_resize.html#uiresize} for more information.
	 */
	resize(resolution: string, options?: { /** Select viewport or window settings. */target: "viewport" | "window" }): void;

	/**
	 * Resize the resolution to a specific width and height.
	 *
	 * @param width The width to resize the resolution to.
	 * 
	 * @param height The height to resize the resolution to.
	 * 
	 * @param options Additional options. Go to link for more info.
	 * 
	 * @param options.target Set to "viewport" to resize the viewport. Set to "window" to resize the entire window.
	 *
	 * @example
	 * // This will resize the resolution of the entire browser window to width of 1920 pixels, and height of 1080 pixels.
	 * UI.resize("1920x1080", {target: "viewport"});
	 * // OR
	 * UI.resize(1920, 1080, {target: "viewport"});
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/window_resize.html#uiresize} for more information.
	 */
	resize(width: number, height: number, options?: { /** Select viewport or window settings. */target: "viewport" | "window" }): void;
}

interface HttpRequestOptions {
	/**
	 * For UI.httpRequest command: The url to send the HTTP request to.
	 */
	url?: string;

	/**
	 * The HTTP method to use, e.g. GET, HEAD, OPTIONS, POST, PUT, PATCH, DELETE.
	 * Ignored when UI.httpGet and UI.httpPost commands are used.
	 */
	method?: "GET" | "HEAD" | "OPTIONS" | "POST" | "PUT" | "PATCH" | "DELETE";

	/**
	 * The request data to send. Ignored for GET and HEAD methods.
	 * If data is a json object, and content-type header is not specified, the content-type will automatically default to application/json;charset=utf-8 .
	 */
	data?: Record<string | number, unknown>;

	/**
	 * Key-value map to set the url search parameters.
	 */
	params?: Record<string | number, unknown>;

	/**
	 * The expected response type.
	 * By default, the response's data object will contain the raw response body as a string.
	 * If set to "json", the response's data object will be automatically parsed to JSON.
	 */
	responseType?: string;

	/**
	 * Map of request headers to set.
	 */
	headers?: Record<string | number, string>;

	/**
	 * Defaults to true. If true, allows cross-site requests to be made using credentials such as cookies, Authorization headers or TLS client certificates, and allows cookies from response to be set. 
	 * If this is false, you might get CORS or Network errors (reported error may be different across browsers) when making cross-site requests.
	 */
	withCredentials?: boolean;
}

// eslint-disable-next-line jsdoc/require-jsdoc
type HttpResponse = JsonResponse | RawResponse;

interface JsonResponse extends BaseHttpResponse {
	/**
	 * The response type, e.g. "json".
	 */
	responseType: "json";

	/**
	 * The response body. If responseType is "json", this is automatically parsed into JSON object. Otherwise, this is a string containing the raw response body.
	 */
	data: Record<string | number, unknown>;
}

interface RawResponse extends BaseHttpResponse {
	/**
	 * The response body. This is a string containing the raw response body.
	 */
	data: string;
}

interface BaseHttpResponse {
	/**
	 * The status code, e.g. 200, 404, 500.
	 */
	status: number;

	/**
	 * The status text, e.g. "OK", "Not Found", "Internal Server Error".
	 */
	statusText: string;

	/**
	 * The response type, e.g. "json".
	 */
	responseType: string;
}

interface CookieSetOptions {
	/**
	 * Name of the cookie.
	 */
	name: string;

	/**
	 * Value of the cookie.
	 */
	value: string;

	/**
	 * Set a Secure cookie.
	 * Secure cookies cannot be set on insecure http: sites.
	 */
	secure?: boolean;

	/**
	 * Set an HttpOnly cookie.
	 */
	httpOnly?: boolean;

	/**
	 * Domain to apply the cookie to.
	 * Can only be set to domains for the current page.
	 * 
	 * @example
	 * // example.com, support.example.com
	 * 
	 */
	domain?: string;

	/**
	 * Path to apply the cookie to.
	 */
	path?: string;

	/**
	 * Number of seconds until this cookies expires.
	 */
	maxAge?: number;

	/**
	 * Time when cookie expires.
	 * Ignored if maxAge is also provided.
	 * 
	 * @example
	 * // Wed, 21 Oct 2015 07:28:00 GMT
	 * 
	 */
	expires?: string;
}

export default UICommand;
