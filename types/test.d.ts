/**
 * @file The Typescript definitions for the UIlicious `TEST.*` commands.
 */

interface TestCommand {
	/**
	 * Runs another test.
	 * 
	 * @param path Path to the test to run.
	 * 
	 * @example
	 * // We can reuse login/login_as_buyer in a another test using the TEST.run command like this.
	 * I.goTo('http://mystore.com');
	 * TEST.run('login/login_as_buyer');
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/sequence.html#testrun} for more information.
	 * 
	 */
	run(path: string): void;

	/**
	 * Stops the test.
	 * Use this command to manually stop test in specific scenarios with conditions (see example).
	 * 
	 * @example
	 * // This test will stop if the text "Out of stock" is seen on the page.
	 * if(I.see$("Out of stock")) // I.see$ is the same as I.see, but any errors are supressed
	 * TEST.stop();
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/sequence.html#teststop} for more information.
	 * 
	 */
	stop(): void;

	/**
	 * Take a full page screenshot of the current page.
	 * Additionally, if there's infinite scrolling on the page, only what's currently visible will be taken. You'll need to combine this with scrolling commands to take longer screenshots on these kinds of pages.
	 * 
	 * @example
	 * TEST.takeFullScreenshot();
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/screenshot.html#testtakefullscreenshot} for more information.
	 * 
	 */
	takeFullScreenshot(): void;

	/**
	 * Loads entries from a .csv (comma-separated value) file.
	 * 
	 * @param file Relative or absolute path to the file to load.
	 * 
	 * @param options Optional header, dataset, escape, delimiter, see link for more information.
	 * 
	 * @returns Returns an array of JSON objects, or a single JSON object if dataset is specified.
	 * 
	 * @example
	 * We can use TEST.loadDataFromCsv to load the data from "credentials.csv" as such:
	 * var userList = TEST.loadDataFromCsv("credentials.csv", {header: "row"})
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/load_data_from_file.html#testloaddatafromcsv} for more information.
	 * 
	 */
	loadDataFromCsv<T = Record<string, any>>(file: string, options?: LoadDataFromCsvOptions): LoadDataResult<T>;

	/**
	 * Loads entries from a .csv (comma-separated value) file.
	 * 
	 * @param file Relative or absolute path to the file to load.
	 * 
	 * @param dataset (Optional) Expression for selecting the dataset to load e.g. Country=korea.
	 * 
	 * @param options Optional header, dataset, escape, delimiter, see link for more information.
	 * 
	 * @returns Returns an array of JSON objects, or a single JSON object if dataset is specified.
	 * 
	 * @example
	 * // We can pick a single entry from the CSV file to load as a JSON object using the dataset parameter as such:
	 * var user = TEST.loadDataFromCsv("credentials.csv", "username=johndoe", {header: "row"});
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/load_data_from_file.html#testloaddatafromcsv} for more information.
	 * 
	 */
	loadDataFromCsv<T = Record<string, any>>(file: string, dataset?: string, options?: LoadDataFromCsvOptions): LoadDataResult<T>;

	/**
	 * Loads data from a .json (javascript object notation) file.
	 * 
	 * @param file Relative or absolute path to the file to load.
	 * 
	 * @returns Returns the test data as a json object. Nested data structure is supported.
	 * 
	 * @example
	 * var users = TEST.loadDataFromJson("credentials.json");
	 * 
	 * @see {@link https://docs.uilicious.com/scripting/load_data_from_file.html#testloaddatafromjson} for more information.
	 * 
	 */
	loadDataFromJson<T = Record<string, any>>(file: string): LoadDataResult<T>;

	// Reporting Commands
	/**
	 * Log command.
	 */
	log: {
		/**
		 * Log a message to report.
		 * 
		 * @param message Message to log to report.
		 * 
		 * @example
		 * // Gets the text from the element with the id "applicationId" and prints it to the report
		 * var applicationId = I.getText("#applicationId");
		 * TEST.log.info("Application ID is " + applicationId);
		 * 
		 * @see {@link https://docs.uilicious.com/scripting/logging.html#testloginfo} for more information.
		 * 
		 */
		info(message: string): void;

		/**
		 * Log a message to report with pass status.
		 * 
		 * @param message Message to log to report.
		 * 
		 * @example
		 * TEST.log.pass("No more todos!");
		 * 
		 * @see {@link https://docs.uilicious.com/scripting/logging.html#testlogpass} for more information.
		 * 
		 */
		pass(message: string): void;

		/**
		 * Log a message to report with fail status. This adds to the error count and will result in the overall test failing.
		 * 
		 * @param message Message to log to report.
		 * 
		 * @example
		 * // If the current url is at /notFound, prints "Product page is unavailable" to report as a failed validation
		 * if (I.amAt('/notFound')) {
		 * 	TEST.log.fail("Product page is unavailable");
		 * }
		 * 
		 * @see {@link https://docs.uilicious.com/scripting/logging.html#testlogfail} for more information.
		 * 
		 */
		fail(message: string): void;
	}
}

// eslint-disable-next-line jsdoc/require-jsdoc
type LoadDataResult<T> = Array<T>;

interface LoadDataFromCsvOptions {
	/**
	 * Set to row to indicate that the header (which will be used as the property names) is the first row, or set to col to indicate that the header is the first column.
	 * Defaults to col.
	 */
	header?: string;

	/**
	 * (Optional) Expression for selecting the dataset to load. E.g. Country=korea.
	 */
	dataset?: string;

	/**
	 * Set the escape character, applies to quote and escape characters inside quoted fields. Defaults to \".
	 */
	escape?: string;

	/**
	 * Set the delimiter charater. Defaults to , (comma).
	 */
	delimiter?: string;
}

export default TestCommand;
